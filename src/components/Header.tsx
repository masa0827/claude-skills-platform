'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 glass-panel border-b border-slate-200/50">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-900">AI Skills Library</span>
                    <span className="hidden sm:inline text-xs text-slate-400 font-medium">by ユーダイモニア</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    <a href="/#skills" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        スキル一覧
                    </a>
                    <a href="/#how-to-use" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        使い方
                    </a>
                    <a href="/#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        よくある質問
                    </a>
                </nav>

                <button
                    className="md:hidden p-2 text-slate-600 hover:text-slate-900"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-md">
                    <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
                        <a href="/#skills" className="text-sm font-medium text-slate-600 py-2" onClick={() => setMenuOpen(false)}>
                            スキル一覧
                        </a>
                        <a href="/#how-to-use" className="text-sm font-medium text-slate-600 py-2" onClick={() => setMenuOpen(false)}>
                            使い方
                        </a>
                        <a href="/#faq" className="text-sm font-medium text-slate-600 py-2" onClick={() => setMenuOpen(false)}>
                            よくある質問
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
