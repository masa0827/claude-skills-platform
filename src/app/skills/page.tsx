import { Suspense } from 'react';
import { SkillLibrary } from '@/components/SkillLibrary';

export const metadata = {
    title: 'スキルライブラリ',
    description: 'ビジネスで使えるAIスキルを検索・カテゴリで探せます。ChatGPT・Claude・Gemini・Copilot対応。',
    alternates: {
        canonical: 'https://agent-skills.eudaimonia.co.jp/skills',
    },
};

export default function SkillsPage() {
    return (
        <Suspense fallback={<div className="py-20 text-center text-stone-400">読み込み中...</div>}>
            <SkillLibrary />
        </Suspense>
    );
}
