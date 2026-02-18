'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs: { question: string; answer: string | ReactNode }[] = [
    {
        question: '本当に無料で使えますか？',
        answer: 'はい、すべてのスキルを完全無料でご利用いただけます。アカウント登録も不要です。',
    },
    {
        question: 'スキルとプロンプトは何が違いますか？',
        answer: (
            <div>
                <p className="mb-2">
                    プロンプトは「今回の会話だけの単発指示」。スキルは「AIに専門知識を永続的に注入する指示ファイル」です。
                </p>
                <p className="mb-2">
                    最大の違いは<strong className="text-[#1d1d1f]">自動起動</strong>。プロンプトは毎回手動で入力する必要がありますが、スキルは一度設定すればAIが会話の文脈を読み取り、必要な場面で自動的に起動します。
                </p>
                <p>
                    また、スキルはファイルとして保存されるため、チームでの共有やバージョン管理が可能です。
                </p>
            </div>
        ),
    },
    {
        question: 'なぜ「自動で起動」できるのですか？',
        answer: (
            <div>
                <p className="mb-2">
                    AIはスキルの説明文（description）を常に把握しています。あなたが話しかけると、AIが会話の文脈とスキルの説明文を照合し、最適なスキルを自動で選択・読み込みます。
                </p>
                <p>
                    たとえば「提案書を作って」と話しかけるだけで、営業提案書スキルが自動で起動し、PREP法や日本語ビジネス書式が適用されます。手動で指定する必要はありません。
                </p>
            </div>
        ),
    },
    {
        question: 'ChatGPTでも使えますか？',
        answer: 'はい。スキルはオープンスタンダード（Agent Skills）として標準化されており、ChatGPT、Claude、Gemini、Copilotなど20以上のAIツールで利用可能です。「スキルをコピー」ボタンでコピーし、お使いのAIに貼り付けてください。',
    },
    {
        question: '日本のビジネスに特化していますか？',
        answer: (
            <div>
                <p className="mb-2">
                    はい。当サイトのスキルは日本のビジネス文化に最適化されています。敬語の使い分け、情報密度の高い資料構成、稟議書フォーマット、日本式のメール作法など、日本の商慣習を踏まえた出力が自動で適用されます。
                </p>
                <p>
                    海外製のAIツールをそのまま使うと、欧米のビジネス文化に沿った出力になりがちです。スキルを設定することで、日本のビジネスシーンでそのまま使える品質の成果物が得られます。
                </p>
            </div>
        ),
    },
    {
        question: 'チームで共有できますか？',
        answer: 'はい。スキルファイル（SKILL.md）はGitリポジトリやプロジェクトフォルダに配置するだけで、チーム全員が同じスキルを利用できます。できる人のノウハウが組織全体の標準になり、誰がAIを使っても同じ品質の成果物が出てきます。',
    },
    {
        question: 'AI初心者でも大丈夫ですか？',
        answer: 'もちろんです。コピー＆ペーストだけで使えるように設計されています。「かんたん」レベルのスキルから試してみてください。スキルがAIの動き方を規定するので、むしろ初心者ほど効果を実感しやすいです。',
    },
];

function FaqItem({ question, answer }: { question: string; answer: string | ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-black/5 last:border-b-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-5 text-left group"
            >
                <span className="text-[15px] font-medium text-[#1d1d1f] pr-4">{question}</span>
                <ChevronDown
                    className={`w-4 h-4 text-[#86868b] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
            </button>
            {open && (
                <div className="pb-5 text-[15px] text-[#86868b] leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
}

export function FaqSection() {
    return (
        <section id="faq" className="py-24 px-6 section-alt">
            <div className="max-w-[680px] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
                        よくある質問。
                    </h2>
                </div>

                <div className="bg-white rounded-2xl px-7">
                    {faqs.map((faq) => (
                        <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}
