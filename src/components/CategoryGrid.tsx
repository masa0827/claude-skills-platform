'use client';

import { CATEGORIES } from '@/data/aiTools';
import { skills } from '@/data/skills';
import * as Icons from 'lucide-react';
import Link from 'next/link';

const CATEGORY_STYLES: Record<string, { bg: string; text: string }> = {
    '営業': { bg: 'bg-blue-50', text: 'text-blue-600' },
    'マーケティング': { bg: 'bg-violet-50', text: 'text-violet-600' },
    'カスタマーサポート': { bg: 'bg-orange-50', text: 'text-orange-600' },
    'バックオフィス': { bg: 'bg-emerald-50', text: 'text-emerald-600' },
    '企画・リサーチ': { bg: 'bg-amber-50', text: 'text-amber-600' },
};

export function CategoryGrid() {
    const countByCategory = skills.reduce<Record<string, number>>((acc, s) => {
        acc[s.category] = (acc[s.category] || 0) + 1;
        return acc;
    }, {});

    return (
        <section className="py-20 px-6 section-alt">
            <div className="max-w-[980px] mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-[28px] font-semibold tracking-tight text-[#1d1d1f] mb-2">
                        カテゴリから探す
                    </h2>
                    <p className="text-[15px] text-[#86868b]">
                        業務に合ったスキルを見つけましょう
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {CATEGORIES.map((cat) => {
                        const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[cat.iconName] || Icons.Box;
                        const count = countByCategory[cat.id] || 0;
                        const style = CATEGORY_STYLES[cat.id] || CATEGORY_STYLES['営業'];

                        return (
                            <Link
                                key={cat.id}
                                href={`/skills?category=${encodeURIComponent(cat.id)}`}
                                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white transition-all hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                            >
                                <div className={`p-3 ${style.bg} rounded-xl transition-colors`}>
                                    <Icon className={`w-6 h-6 ${style.text}`} />
                                </div>
                                <div className="text-center">
                                    <span className="text-[14px] font-semibold text-[#1d1d1f] block">{cat.label}</span>
                                    <span className="text-[12px] text-[#86868b]">{count}件</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
