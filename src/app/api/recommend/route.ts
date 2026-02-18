import Anthropic from '@anthropic-ai/sdk';
import { skills } from '@/data/skills';
import { supabase } from '@/lib/supabase';

const skillMetadata = skills.map((s) => ({
    id: s.id,
    name: s.name,
    description: s.description,
    category: s.category,
    tags: s.tags,
    difficulty: s.difficulty,
    timeSaved: s.timeSaved,
}));

const systemPrompt = `あなたはAIスキルライブラリのレコメンドアシスタントです。
ユーザーの業務内容や課題に基づいて、最適なAIスキルを2〜3件推薦してください。

以下がスキルの一覧です：
${JSON.stringify(skillMetadata, null, 0)}

推薦する際のルール：
- ユーザーの業務内容に最も関連するスキルを選んでください
- 各スキルについて、なぜそのスキルが役立つかを1文で簡潔に説明してください
- 回答は日本語で、フレンドリーかつプロフェッショナルなトーンで
- 以下のJSON形式で回答してください：

{"message":"ユーザーへの短い共感メッセージ（1文）","recommendations":[{"id":"スキルID","name":"スキル名","reason":"このスキルが役立つ理由（1文）"}]}

重要：JSONのみを返してください。マークダウンのコードブロック（\`\`\`）で囲まないでください。余計なテキストも含めないでください。純粋なJSONだけを出力してください。`;

function extractJson(text: string): Record<string, unknown> | null {
    try {
        return JSON.parse(text);
    } catch {
        const cleaned = text.replace(/^```(?:json)?\s*\n?/i, '').replace(/\n?\s*```$/i, '').trim();
        try {
            return JSON.parse(cleaned);
        } catch {
            return null;
        }
    }
}

export async function POST(request: Request) {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
        return Response.json({ error: 'メッセージが必要です' }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
        return Response.json({ error: 'API key not configured' }, { status: 500 });
    }

    // Extract metadata from request headers
    const userAgent = request.headers.get('user-agent') || undefined;
    const country = request.headers.get('x-vercel-ip-country') || undefined;

    try {
        const client = new Anthropic({ apiKey });

        const response = await client.messages.create({
            model: 'claude-sonnet-4-5-20250929',
            max_tokens: 1024,
            system: systemPrompt,
            messages: [{ role: 'user', content: message }],
        });

        const text = response.content[0].type === 'text' ? response.content[0].text : '';
        const parsed = extractJson(text);

        // Save to Supabase (fire-and-forget, don't block response)
        const recommendations = parsed && Array.isArray((parsed as Record<string, unknown>).recommendations)
            ? ((parsed as Record<string, unknown>).recommendations as Array<{ id: string }>).map((r) => r.id)
            : [];

        supabase
            .from('chat_logs')
            .insert({
                user_message: message,
                ai_response: parsed ? (parsed as Record<string, unknown>).message : text,
                recommended_skills: recommendations,
                user_agent: userAgent,
                country: country,
            })
            .then(({ error }) => {
                if (error) console.error('Supabase insert error:', error);
            });

        if (parsed) {
            return Response.json(parsed);
        }

        return Response.json({
            message: 'おすすめのスキルをご紹介します。',
            recommendations: [],
        });
    } catch (error) {
        console.error('Anthropic API error:', error);
        return Response.json({ error: 'AIとの通信に失敗しました' }, { status: 500 });
    }
}
