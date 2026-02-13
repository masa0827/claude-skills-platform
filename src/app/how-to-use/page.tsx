import { ArrowLeft, Upload, Copy, Terminal, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function HowToUse() {
    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <header className="bg-white border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        一覧に戻る
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    スキルの<span className="text-blue-600">使い方</span>
                </h1>
                <p className="text-slate-500 mb-12 text-lg">
                    3つの方法から、あなたに合ったやり方を選んでください。
                </p>

                <div className="space-y-8">
                    {/* Method A - Claude.ai Install (Primary) */}
                    <section className="bg-white rounded-2xl border-2 border-blue-200 p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                                <Upload className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <span className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded mb-1">おすすめ</span>
                                <h2 className="text-2xl font-bold text-slate-900">方法A: Claude.aiにスキルをインストール</h2>
                            </div>
                        </div>
                        <p className="text-slate-500 mb-8 ml-[68px]">
                            一度インストールすれば、Claudeが自動でスキルを適用。毎回のコピペが不要になります。
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-lg font-bold shrink-0">1</span>
                                <div className="pt-1.5">
                                    <p className="text-slate-700 text-lg">スキル詳細ページで「<strong>Claude.ai用スキルをダウンロード (.zip)</strong>」ボタンを押す</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-lg font-bold shrink-0">2</span>
                                <div className="pt-1.5">
                                    <p className="text-slate-700 text-lg">Claude.aiを開き、<strong>設定 &gt; 機能 &gt; スキル</strong> に移動</p>
                                    <p className="text-slate-400 text-sm mt-1">
                                        設定は画面左下のアイコンから開けます
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-lg font-bold shrink-0">3</span>
                                <div className="pt-1.5">
                                    <p className="text-slate-700 text-lg">「<strong>+ 追加</strong>」をクリックし、ダウンロードした<strong>.zipファイル</strong>をアップロード</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-lg font-bold shrink-0">4</span>
                                <div className="pt-1.5">
                                    <p className="text-slate-700 text-lg">あとは普通にClaudeと会話するだけ。<strong>関連する場面でスキルが自動適用</strong>されます</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 ml-[68px] p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <p className="text-sm text-blue-700">
                                <strong>メリット:</strong> 一度インストールすれば、全チャットで自動的にスキルが適用されます。毎回プロンプトを貼り付ける手間がなくなります。
                            </p>
                        </div>
                    </section>

                    {/* Method B - Copy & Paste */}
                    <details className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                        <summary className="p-8 cursor-pointer hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-green-50 rounded-xl border border-green-100">
                                    <Copy className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded mb-1">他のAIでも使える</span>
                                    <h2 className="text-2xl font-bold text-slate-900">方法B: コピー＆ペースト</h2>
                                </div>
                            </div>
                        </summary>
                        <div className="px-8 pb-8 border-t border-slate-100 pt-6">
                            <p className="text-slate-500 mb-6">
                                ChatGPT・Gemini・その他のAIツールでも使いたい場合はこちら。3ステップで完了。
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700 text-xs font-bold shrink-0">1</span>
                                    <p className="text-slate-700">ライブラリから<strong>使いたいスキルを探す</strong></p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700 text-xs font-bold shrink-0">2</span>
                                    <p className="text-slate-700">「<strong>プロンプトをコピー</strong>」ボタンを押す</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700 text-xs font-bold shrink-0">3</span>
                                    <p className="text-slate-700">お使いのAI（<strong>ChatGPT, Claude, Gemini</strong>など）に貼り付ける</p>
                                </div>
                            </div>
                        </div>
                    </details>

                    {/* Method C - Claude Code */}
                    <details className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                        <summary className="p-8 cursor-pointer hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-purple-50 rounded-xl border border-purple-100">
                                    <Terminal className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <span className="inline-block bg-slate-200 text-slate-600 text-xs font-bold px-2 py-0.5 rounded mb-1">エンジニア向け</span>
                                    <h2 className="text-2xl font-bold text-slate-900">方法C: Claude Codeにインストール</h2>
                                </div>
                            </div>
                        </summary>
                        <div className="px-8 pb-8 border-t border-slate-100 pt-6">
                            <p className="text-slate-500 mb-6">
                                Claude Code（CLI）をお使いの方は、スラッシュコマンドとして登録できます。
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-100 text-purple-700 text-xs font-bold shrink-0">1</span>
                                    <p className="text-slate-700">「<strong>MDファイル</strong>」ボタンでダウンロード</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-100 text-purple-700 text-xs font-bold shrink-0">2</span>
                                    <div className="space-y-2">
                                        <p className="text-slate-700">プロジェクトフォルダに配置:</p>
                                        <div className="bg-slate-50 p-3 rounded-lg font-mono text-sm text-slate-600 border border-slate-200">
                                            .claude/commands/skill_name.md
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-100 text-purple-700 text-xs font-bold shrink-0">3</span>
                                    <div className="space-y-2">
                                        <p className="text-slate-700">Claude Codeで呼び出し:</p>
                                        <div className="bg-slate-50 p-3 rounded-lg font-mono text-sm text-slate-600 border border-slate-200">
                                            /skill_name
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
            </main>
        </div>
    );
}
