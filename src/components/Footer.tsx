import Link from 'next/link';
import { CATEGORIES } from '@/data/aiTools';

export function Footer() {
    return (
        <footer className="border-t border-black/5 bg-[#f5f5f7]">
            <div className="max-w-[980px] mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-[13px] font-semibold text-[#1d1d1f] mb-3">AI Skills</h3>
                        <p className="text-[12px] text-[#86868b] leading-relaxed mb-3">
                            AIに専門スキルを与える指示ファイルのライブラリ。ChatGPT / Claude / Gemini / Copilot 対応。
                        </p>
                        <a
                            href="https://eudaimonia.co.jp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                        >
                            株式会社ユーダイモニア
                        </a>
                    </div>

                    <div>
                        <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3">カテゴリ</h4>
                        <ul className="space-y-2">
                            {CATEGORIES.map((cat) => (
                                <li key={cat.id}>
                                    <Link
                                        href={`/skills?category=${encodeURIComponent(cat.id)}`}
                                        className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                                    >
                                        {cat.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3">サポート</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/skills" className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                                    スキルライブラリ
                                </Link>
                            </li>
                            <li>
                                <a href="/#how-to-use" className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                                    使い方
                                </a>
                            </li>
                            <li>
                                <a href="/#faq" className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                                    よくある質問
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3">法的情報</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                                    プライバシーポリシー
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                                    利用規約
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal" className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                                    特定商取引法に基づく表記
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-black/5 mt-8 pt-6 text-center text-[11px] text-[#86868b]">
                    &copy; 2026 株式会社ユーダイモニア. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
