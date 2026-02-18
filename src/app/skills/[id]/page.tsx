import { skills } from '@/data/skills';
import { AI_TOOLS } from '@/data/aiTools';
import { Clock, Star, ChevronRight, Lightbulb, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SkillActions } from '@/components/SkillActions';
import { BeforeAfter } from '@/components/BeforeAfter';
import { PromptViewer } from '@/components/PromptViewer';

export async function generateStaticParams() {
    return skills.map((skill) => ({
        id: skill.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const skill = skills.find((s) => s.id === id);
    if (!skill) return {};
    return {
        title: `${skill.name} | AI Skills Library`,
        description: skill.description,
    };
}

const CATEGORY_COLOR: Record<string, string> = {
    '営業': 'text-blue-600 bg-blue-50',
    'マーケティング': 'text-violet-600 bg-violet-50',
    'カスタマーサポート': 'text-orange-600 bg-orange-50',
    'バックオフィス': 'text-emerald-600 bg-emerald-50',
    '企画・リサーチ': 'text-amber-600 bg-amber-50',
};

const CATEGORY_ACCENT: Record<string, string> = {
    '営業': 'bg-blue-500',
    'マーケティング': 'bg-violet-500',
    'カスタマーサポート': 'bg-orange-500',
    'バックオフィス': 'bg-emerald-500',
    '企画・リサーチ': 'bg-amber-500',
};

export default async function SkillPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const skill = skills.find((s) => s.id === id);

    if (!skill) {
        notFound();
    }

    const difficultyDots = {
        'かんたん': 1,
        'ふつう': 2,
        'しっかり': 3,
    }[skill.difficulty];

    const catColor = CATEGORY_COLOR[skill.category] || 'text-[#86868b] bg-[#f5f5f7]';
    const catAccent = CATEGORY_ACCENT[skill.category] || 'bg-[#86868b]';

    return (
        <div className="max-w-[980px] mx-auto px-6 py-8">
            {/* パンくず */}
            <nav className="flex items-center gap-1.5 text-[13px] text-[#86868b] mb-8">
                <Link href="/" className="hover:text-[#1d1d1f] transition-colors">ホーム</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link href={`/skills?category=${encodeURIComponent(skill.category)}`} className="hover:text-[#1d1d1f] transition-colors">
                    {skill.category}
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-[#1d1d1f] font-medium">{skill.name}</span>
            </nav>

            {/* ヒーロー */}
            <div className="bg-white rounded-2xl overflow-hidden mb-6">
                <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`px-3 py-1 rounded-full text-[12px] font-semibold ${catColor}`}>
                                    {skill.category}
                                </span>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`w-2 h-2 rounded-full ${
                                            i <= difficultyDots ? catAccent : 'bg-[#d2d2d7]'
                                        }`} />
                                    ))}
                                    <span className="text-[12px] text-[#86868b] ml-1">{skill.difficulty}</span>
                                </div>
                            </div>
                            <h1 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-4">{skill.name}</h1>
                            <p className="text-[17px] text-[#86868b] leading-relaxed">
                                {skill.longDescription}
                            </p>

                            <div className="flex items-center gap-2 mt-5">
                                <span className="text-[12px] text-[#86868b]">対応AI:</span>
                                {AI_TOOLS.map((tool) => (
                                    <span
                                        key={tool.id}
                                        className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                                        style={{ color: tool.color, backgroundColor: tool.color + '12' }}
                                    >
                                        {tool.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 min-w-[180px]">
                            <div className="bg-[#f5f5f7] rounded-2xl p-4">
                                <div className="flex items-center gap-2 text-[#86868b] mb-1">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-[13px] font-medium">削減時間</span>
                                </div>
                                <p className="text-[24px] font-semibold text-[#1d1d1f]">{skill.timeSaved}</p>
                            </div>
                            <div className="bg-[#f5f5f7] rounded-2xl p-4">
                                <div className="flex items-center gap-2 text-[#86868b] mb-1">
                                    <Star className="w-4 h-4" />
                                    <span className="text-[13px] font-medium">難易度</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`w-2.5 h-2.5 rounded-full ${
                                            i <= difficultyDots ? catAccent : 'bg-[#d2d2d7]'
                                        }`} />
                                    ))}
                                    <span className="text-[14px] font-semibold text-[#1d1d1f] ml-2">{skill.difficulty}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* こんなときに使えます */}
            {skill.useCases && skill.useCases.length > 0 && (
                <div className="bg-white rounded-2xl p-8 md:p-10 mb-6">
                    <h2 className="text-[17px] font-semibold text-[#1d1d1f] mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-[#0071e3]" />
                        こんなときに使えます
                    </h2>
                    <div className="grid gap-3">
                        {skill.useCases.map((useCase, i) => (
                            <div key={i} className="flex items-start gap-3 bg-[#f5f5f7] rounded-xl p-4">
                                <div className="w-6 h-6 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center text-[12px] font-semibold shrink-0 mt-0.5">
                                    {i + 1}
                                </div>
                                <p className="text-[14px] text-[#1d1d1f] leading-relaxed">{useCase}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* ステップ */}
            {skill.steps && skill.steps.length > 0 && (
                <div className="bg-white rounded-2xl p-8 md:p-10 mb-6">
                    <h2 className="text-[17px] font-semibold text-[#1d1d1f] mb-6 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-amber-500" />
                        使い方
                    </h2>
                    <div className="grid gap-4">
                        {skill.steps.map((step, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className={`w-10 h-10 rounded-full ${catAccent} text-white flex items-center justify-center text-[14px] font-semibold shrink-0`}>
                                    {step.number}
                                </div>
                                <div className="flex-1 bg-[#f5f5f7] rounded-xl p-4">
                                    <h3 className="font-semibold text-[#1d1d1f] mb-1">{step.title}</h3>
                                    <p className="text-[14px] text-[#86868b]">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* アクション */}
            <div className="bg-white rounded-2xl overflow-hidden mb-6">
                <div className="p-8 md:p-10">
                    <SkillActions skill={skill} />
                </div>
            </div>

            {/* 使用例 */}
            {skill.examples.length > 0 && (
                <div className="bg-white rounded-2xl p-8 md:p-10 mb-6">
                    <BeforeAfter examples={skill.examples} />
                </div>
            )}

            {/* プロのコツ */}
            {skill.tips && skill.tips.length > 0 && (
                <div className="bg-white rounded-2xl p-8 md:p-10 mb-6">
                    <h2 className="text-[17px] font-semibold text-[#1d1d1f] mb-4 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-amber-500" />
                        プロのコツ
                    </h2>
                    <div className="grid gap-3">
                        {skill.tips.map((tip, i) => (
                            <div key={i} className="flex items-start gap-3 bg-amber-50/50 rounded-xl p-4">
                                <span className="text-amber-500 text-lg shrink-0">*</span>
                                <p className="text-[14px] text-[#1d1d1f] leading-relaxed">{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* スキル全文 */}
            <div className="bg-white rounded-2xl p-8 md:p-10 mb-6">
                <PromptViewer content={skill.content} />
            </div>
        </div>
    );
}
