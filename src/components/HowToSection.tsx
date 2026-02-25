'use client';

import { useState } from 'react';
import { ChevronDown, Search, Copy, Zap } from 'lucide-react';

const steps = [
    {
        icon: Search,
        num: '1',
        title: '業務に合うスキルを見つける',
        description: 'カテゴリや検索から、あなたの業務にぴったりのスキルを選びます。AIチャットに相談もできます。',
    },
    {
        icon: Copy,
        num: '2',
        title: 'AIにインストール',
        description: 'ワンクリックでコピーしてAIに貼り付け。Claudeなら設定画面からZIPをアップロードするだけ。',
    },
    {
        icon: Zap,
        num: '3',
        title: '普段通り話しかけるだけ',
        description: '特別な指示は不要。AIが文脈を読み取り、スキルを自動で起動。最初から専門家品質のアウトプットが出てきます。',
    },
];

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-4 text-left text-[15px] font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
            >
                {title}
                <ChevronDown className={`w-4 h-4 text-[#86868b] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
                <div className="px-6 pb-5 text-[14px] text-[#86868b] leading-relaxed border-t border-black/5 pt-4">
                    {children}
                </div>
            )}
        </div>
    );
}

export function HowToSection() {
    return (
        <section id="how-to-use" className="py-24 px-6">
            <div className="max-w-[720px] mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-3">
                        セットアップは、3分。
                    </h2>
                    <p className="text-[17px] text-[#86868b]">
                        技術知識は不要。コピー＆ペーストだけで完了します。
                    </p>
                </div>

                <div className="space-y-6 mb-14">
                    {steps.map((step) => {
                        const StepIcon = step.icon;
                        return (
                            <div key={step.title} className="flex gap-5 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] flex items-center justify-center shrink-0">
                                    <StepIcon className="w-5 h-5 text-[#1d1d1f]" />
                                </div>
                                <div className="pt-1">
                                    <div className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">
                                        Step {step.num}
                                    </div>
                                    <h3 className="font-semibold text-[#1d1d1f] text-[17px] mb-1">{step.title}</h3>
                                    <p className="text-[15px] text-[#86868b] leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="space-y-3">
                    <Accordion title="Claude.aiでスキルをインストールする方法">
                        <p className="mb-3">
                            Claude.aiでは、スキルをZIPファイルでダウンロードし、
                            設定画面からインストールすることで自動起動が有効になります。
                            会話のたびにコピペする必要はありません。
                        </p>
                        <ol className="list-decimal list-inside space-y-1.5 text-[#86868b]">
                            <li>スキル詳細ページで「Claude用ZIP」をダウンロード</li>
                            <li>Claude.aiの設定 &gt; 機能 &gt; スキル からアップロード</li>
                            <li>以降、関連する会話でAIが自動的にスキルを起動</li>
                        </ol>
                    </Accordion>
                    <Accordion title="Claude Codeで使う方法（開発者向け）">
                        <p className="mb-3">
                            Claude Code（CLI）では、MDファイルをプロジェクトの
                            <code className="px-1.5 py-0.5 bg-[#f5f5f7] rounded text-xs font-mono">.claude/skills/</code>
                            ディレクトリに配置するだけで自動認識されます。
                        </p>
                        <ol className="list-decimal list-inside space-y-1.5 text-[#86868b]">
                            <li>スキル詳細ページで「MDファイル」をダウンロード</li>
                            <li>プロジェクトの <code className="px-1.5 py-0.5 bg-[#f5f5f7] rounded text-xs font-mono">.claude/skills/</code> に配置</li>
                            <li>Claudeが文脈に応じてスキルを自動起動</li>
                        </ol>
                    </Accordion>
                    <Accordion title="他のAIツール（ChatGPT / Gemini / Copilot）で使う方法">
                        <p className="mb-3">
                            どのAIツールでも、スキルの内容をコピーして会話の最初に貼り付けるだけで使えます。
                            カスタム指示（Custom Instructions）に設定すれば、毎回のコピペも不要になります。
                        </p>
                        <ol className="list-decimal list-inside space-y-1.5 text-[#86868b]">
                            <li>スキル詳細ページで「スキルをコピー」をクリック</li>
                            <li>お使いのAIツールを開く</li>
                            <li>新しい会話の最初にペーストするか、カスタム指示に設定</li>
                        </ol>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
