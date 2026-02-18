'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 glass-panel">
            <div className="max-w-[980px] mx-auto px-6 h-12 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-[21px] font-semibold tracking-tight text-[#1d1d1f]">
                        AI Skills
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-7">
                    <a href="/#skills" className="text-xs text-[#424245] hover:text-[#1d1d1f] transition-colors">
                        スキル一覧
                    </a>
                    <a href="/#how-to-use" className="text-xs text-[#424245] hover:text-[#1d1d1f] transition-colors">
                        使い方
                    </a>
                    <a href="/#faq" className="text-xs text-[#424245] hover:text-[#1d1d1f] transition-colors">
                        FAQ
                    </a>
                    <Link
                        href="/skills"
                        className="text-xs font-medium text-white bg-[#1d1d1f] px-4 py-1.5 rounded-full hover:bg-[#000000] transition-colors"
                    >
                        スキルを探す
                    </Link>
                </nav>

                <button
                    className="md:hidden p-2 text-[#424245] hover:text-[#1d1d1f]"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-xl">
                    <nav className="max-w-[980px] mx-auto px-6 py-4 flex flex-col gap-3">
                        <a href="/#skills" className="text-sm text-[#424245] py-2" onClick={() => setMenuOpen(false)}>
                            スキル一覧
                        </a>
                        <a href="/#how-to-use" className="text-sm text-[#424245] py-2" onClick={() => setMenuOpen(false)}>
                            使い方
                        </a>
                        <a href="/#faq" className="text-sm text-[#424245] py-2" onClick={() => setMenuOpen(false)}>
                            FAQ
                        </a>
                        <Link href="/skills" className="text-sm font-medium text-[#1d1d1f] py-2" onClick={() => setMenuOpen(false)}>
                            スキルを探す
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
