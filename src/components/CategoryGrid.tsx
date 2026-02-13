'use client';

import { CATEGORIES } from '@/data/aiTools';
import { skills } from '@/data/skills';
import * as Icons from 'lucide-react';
import Link from 'next/link';

export function CategoryGrid() {
    const countByCategory = skills.reduce<Record<string, number>>((acc, s) => {
        acc[s.category] = (acc[s.category] || 0) + 1;
        return acc;
    }, {});

    return (
        <section className="section-padding bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                    カテゴリから探す
                </h2>
                <p className="text-sm text-slate-500 text-center mb-8">
                    業務に合ったスキルを見つけましょう
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {CATEGORIES.map((cat) => {
                        const Icon = (Icons as any)[cat.iconName] || Icons.Box;
                        const count = countByCategory[cat.id] || 0;

                        return (
                            <Link
                                key={cat.id}
                                href={`/?category=${encodeURIComponent(cat.id)}#skills`}
                                className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all card-hover"
                            >
                                <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                    <Icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                                </div>
                                <div className="text-center">
                                    <span className="text-sm font-bold text-slate-900 block">{cat.label}</span>
                                    <span className="text-xs text-slate-400">{count}件</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
