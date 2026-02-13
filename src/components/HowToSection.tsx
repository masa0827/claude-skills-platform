'use client';

import { useState } from 'react';
import { Search, Copy, Sparkles, ChevronDown } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: 'スキルを探す',
        description: 'カテゴリや検索から、業務に合ったスキルを見つけます。',
    },
    {
        icon: Copy,
        title: 'プロンプトをコピー',
        description: '「プロンプトをコピーする」ボタンで、スキルの内容をコピー。',
    },
    {
        icon: Sparkles,
        title: 'AIに貼り付ける',
        description: 'ChatGPT・Claude・Geminiなど、お使いのAIに貼り付けて実行。',
    },
];

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
                {title}
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
                <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {children}
                </div>
            )}
        </div>
    );
}

export function HowToSection() {
    return (
        <section id="how-to-use" className="section-padding">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                    使い方はかんたん3ステップ
                </h2>
                <p className="text-sm text-slate-500 text-center mb-10">
                    専門知識は不要。コピー&ペーストだけでAIの力を引き出せます。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {steps.map((step, i) => (
                        <div key={step.title} className="text-center">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 mb-4">
                                <step.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="text-xs font-bold text-blue-600 mb-1">STEP {i + 1}</div>
                            <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-3">
                    <Accordion title="Claude.aiユーザー向け: スキルインストール">
                        <p className="mb-2">
                            Claude.aiをお使いの方は、スキルをZIPファイルでダウンロードし、
                            Claude.aiのプロジェクトにアップロードすることで、毎回コピペ不要で自動適用されます。
                        </p>
                        <ol className="list-decimal list-inside space-y-1">
                            <li>スキル詳細ページで「Claude用ZIP」をダウンロード</li>
                            <li>Claude.aiでプロジェクトを作成</li>
                            <li>プロジェクトにZIPを展開したファイルをアップロード</li>
                        </ol>
                    </Accordion>
                    <Accordion title="開発者向け: Claude Codeで使う">
                        <p className="mb-2">
                            Claude Code（CLI）をお使いの方は、MDファイルをダウンロードしてプロジェクトの
                            <code className="px-1 py-0.5 bg-slate-100 rounded text-xs">.claude/</code>
                            ディレクトリに配置できます。
                        </p>
                        <ol className="list-decimal list-inside space-y-1">
                            <li>スキル詳細ページで「MDファイル」をダウンロード</li>
                            <li>プロジェクトの <code className="px-1 py-0.5 bg-slate-100 rounded text-xs">.claude/commands/</code> に配置</li>
                            <li>Claude Codeで <code className="px-1 py-0.5 bg-slate-100 rounded text-xs">/skill-name</code> として利用</li>
                        </ol>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
