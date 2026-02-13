'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: '本当に無料で使えますか？',
        answer: 'はい、すべてのスキル（プロンプト）を完全無料でご利用いただけます。アカウント登録も不要です。',
    },
    {
        question: 'ChatGPTでも使えますか？',
        answer: 'はい。すべてのスキルはChatGPT、Claude、Gemini、Copilotなど主要なAIツールで利用可能です。「プロンプトをコピーする」ボタンでコピーし、お使いのAIに貼り付けてください。',
    },
    {
        question: 'AI初心者でも大丈夫ですか？',
        answer: 'もちろんです。コピー＆ペーストだけで使えるように設計されています。「かんたん」レベルのスキルから試してみてください。',
    },
    {
        question: 'スキルとは何ですか？',
        answer: 'スキルとは、AIに特定の業務を高品質にこなさせるための「指示書（プロンプト）」です。プロが設計した指示をそのまま使えるので、プロンプトを自分で考える必要がありません。',
    },
    {
        question: 'Claude.aiでの特別な使い方はありますか？',
        answer: 'Claude.aiをお使いの方は、スキルをZIPファイルとしてダウンロードし、プロジェクトにインストールすることで、毎回コピペ不要で自動適用されます。詳しくは「使い方」セクションをご覧ください。',
    },
    {
        question: '自分の業種に合ったスキルがない場合は？',
        answer: '新しいスキルは随時追加しています。ご要望があればお気軽にお問い合わせください。既存のスキルをカスタマイズして使うことも可能です。',
    },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 last:border-b-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-5 text-left group"
            >
                <span className="text-sm font-medium text-slate-900 pr-4">{question}</span>
                <ChevronDown
                    className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                />
            </button>
            {open && (
                <div className="pb-5 text-sm text-slate-600 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
}

export function FaqSection() {
    return (
        <section id="faq" className="section-padding">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                    よくある質問
                </h2>
                <p className="text-sm text-slate-500 text-center mb-8">
                    ご不明な点がありましたらご確認ください
                </p>

                <div className="bg-white rounded-xl border border-slate-200 px-6">
                    {faqs.map((faq) => (
                        <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}
