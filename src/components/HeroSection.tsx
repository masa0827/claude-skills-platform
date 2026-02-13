'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { AI_TOOLS } from '@/data/aiTools';
import { useRouter } from 'next/navigation';

export function HeroSection() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            const el = document.getElementById('skills');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            const url = new URL(window.location.href);
            url.searchParams.set('q', query.trim());
            url.hash = 'skills';
            router.replace(url.pathname + url.search + url.hash, { scroll: false });
        }
    };

    return (
        <section className="gradient-hero pt-20 pb-16 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                    {AI_TOOLS.map((tool) => (
                        <span
                            key={tool.id}
                            className="text-xs font-bold px-3 py-1.5 rounded-full border"
                            style={{
                                color: tool.color,
                                borderColor: tool.color + '40',
                                backgroundColor: tool.color + '10',
                            }}
                        >
                            {tool.name}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5 leading-tight">
                    ビジネスの「面倒」を、
                    <br />
                    <span className="text-gradient">AIが片付ける。</span>
                </h1>

                <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed mb-10">
                    プロが作ったプロンプトをコピーして、
                    <br className="hidden md:block" />
                    お使いのAIに貼り付けるだけ。
                </p>

                <form onSubmit={handleSearch} className="max-w-lg mx-auto relative mb-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="やりたいことを検索（例: 議事録, メール, 競合分析）"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 bg-white text-base"
                    />
                </form>

                <p className="text-xs text-slate-400">
                    検索例: ブログ記事、提案書、価格設定、SEO、クレーム対応
                </p>
            </div>
        </section>
    );
}
