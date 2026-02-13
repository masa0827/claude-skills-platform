import Link from 'next/link';
import { CATEGORIES } from '@/data/aiTools';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">AI Skills Library</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            ビジネスで使えるAIプロンプト集。<br />
                            ChatGPT・Claude・Gemini・Copilot対応。
                        </p>
                        <a
                            href="https://eudaimonia.co.jp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
                        >
                            ユーダイモニア株式会社 →
                        </a>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4">カテゴリ</h4>
                        <ul className="space-y-2">
                            {CATEGORIES.map((cat) => (
                                <li key={cat.id}>
                                    <Link
                                        href={`/?category=${encodeURIComponent(cat.id)}`}
                                        className="text-sm hover:text-white transition-colors"
                                    >
                                        {cat.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4">サポート</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/#how-to-use" className="text-sm hover:text-white transition-colors">
                                    使い方
                                </a>
                            </li>
                            <li>
                                <a href="/#faq" className="text-sm hover:text-white transition-colors">
                                    よくある質問
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-10 pt-6 text-center text-xs text-slate-500">
                    &copy; 2026 ユーダイモニア株式会社 All rights reserved.
                </div>
            </div>
        </footer>
    );
}
