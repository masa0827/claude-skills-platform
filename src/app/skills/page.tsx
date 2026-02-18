import { Suspense } from 'react';
import { SkillLibrary } from '@/components/SkillLibrary';

export const metadata = {
    title: 'スキルライブラリ | AI Skills Library',
    description: 'ビジネスで使えるAIスキルを検索・カテゴリで探せます。ChatGPT・Claude・Gemini・Copilot対応。',
};

export default function SkillsPage() {
    return (
        <Suspense fallback={<div className="py-20 text-center text-stone-400">読み込み中...</div>}>
            <SkillLibrary />
        </Suspense>
    );
}
