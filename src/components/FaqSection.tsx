'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs: { question: string; answer: string | ReactNode }[] = [
    {
        question: '本当に無料で使えますか？',
        answer: (
            <div>
                <p className="mb-2">
                    はい、現在公開中のすべてのスキルを完全無料でご利用いただけます。アカウント登録も不要です。
                </p>
                <p>
                    今後、クリエイターが独自のプレミアムスキルを公開できるマーケットプレイス機能を準備中です。既存の無料スキルは引き続き無料でご利用いただけます。
                </p>
            </div>
        ),
    },
    {
        question: 'スキルとプロンプトは何が違いますか？',
        answer: (
            <div>
                <p className="mb-2">
                    プロンプトは「今回の会話だけの単発指示」。スキルは「AIに専門知識を永続的にインストールする設定ファイル」です。
                </p>
                <p className="mb-2">
                    最大の違いは<strong className="text-[#1d1d1f]">再現性</strong>。プロンプトは毎回手動で入力が必要ですが、スキルは一度設定すれば、AIが会話の文脈を読み取り、必要な場面で自動的に起動します。誰が使っても同じ品質の成果物が出てきます。
                </p>
                <p>
                    スキルはファイルとして保存できるため、チームでの共有やバージョン管理も簡単です。
                </p>
            </div>
        ),
    },
    {
        question: 'ChatGPTでも使えますか？',
        answer: 'はい。ChatGPT、Claude、Gemini、Copilotなど主要なAIツールすべてに対応しています。「スキルをコピー」ボタンでコピーし、お使いのAIに貼り付けるだけ。Claudeならワンクリックでインストールできます。',
    },
    {
        question: '自分の業務に合うスキルがない場合は？',
        answer: (
            <div>
                <p className="mb-2">
                    現在51種類のスキルを公開しており、毎月新しいスキルを追加しています。お探しのスキルが見つからない場合は、既存のスキルをベースにカスタマイズすることも可能です。
                </p>
                <p>
                    今後は、専門家やクリエイターが独自のスキルを公開できるマーケットプレイスを予定しています。あなた自身がスキルの作り手になることもできます。
                </p>
            </div>
        ),
    },
    {
        question: 'チームで共有できますか？',
        answer: 'はい。スキルファイルをプロジェクトフォルダに配置するだけで、チーム全員が同じスキルを利用できます。できる人のノウハウが組織の標準に。誰がAIを使っても、安定した品質の成果物が出てきます。',
    },
    {
        question: 'AI初心者でも大丈夫ですか？',
        answer: 'もちろんです。コピー＆ペーストだけで使えます。スキルがAIの振る舞いを規定するので、プロンプトの書き方を学ぶ必要はありません。むしろ初心者ほど効果を実感しやすい仕組みです。',
    },
    {
        question: 'スキルを作って公開できますか？',
        answer: (
            <div>
                <p className="mb-2">
                    はい、近日中にクリエイター向けの公開機能をリリース予定です。あなたの業務ノウハウをスキルとして形にし、同じ課題を持つ人に届けることができます。
                </p>
                <p>
                    クリエイター登録の事前案内をご希望の方は、サイト下部のお問い合わせからご連絡ください。
                </p>
            </div>
        ),
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
