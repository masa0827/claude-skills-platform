'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { skills } from '@/data/skills';
import { CATEGORIES } from '@/data/aiTools';
import { SkillCard } from '@/components/SkillCard';
import { Search } from 'lucide-react';

export function SkillListing() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category') || 'すべて';
    const initialQuery = searchParams.get('q') || '';

    const [searchText, setSearchText] = useState(initialQuery);
    const [activeCategory, setActiveCategory] = useState(initialCategory);

    useEffect(() => {
        const cat = searchParams.get('category');
        if (cat) setActiveCategory(cat);
        const q = searchParams.get('q');
        if (q) setSearchText(q);
    }, [searchParams]);

    const categoryTabs = useMemo(() => {
        return ['すべて', ...CATEGORIES.map((c) => c.id)];
    }, []);

    const filteredSkills = useMemo(() => {
        return skills.filter((skill) => {
            const matchesCategory =
                activeCategory === 'すべて' || skill.category === activeCategory;

            if (!searchText.trim()) return matchesCategory;

            const query = searchText.toLowerCase();
            const matchesSearch =
                skill.name.toLowerCase().includes(query) ||
                skill.description.toLowerCase().includes(query) ||
                skill.tags.some((tag) => tag.toLowerCase().includes(query)) ||
                skill.content.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [searchText, activeCategory]);

    return (
        <section id="skills" className="section-padding bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                    スキル一覧
                </h2>
                <p className="text-sm text-slate-500 text-center mb-8">
                    {filteredSkills.length}件のスキル
                </p>

                <div className="max-w-md mx-auto relative mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="スキルを検索..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 bg-white text-sm"
                    />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-6 no-scrollbar justify-center flex-wrap">
                    {categoryTabs.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                activeCategory === cat
                                    ? 'bg-slate-900 text-white'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>

                {filteredSkills.length === 0 && (
                    <div className="text-center py-16 text-slate-400">
                        <p className="text-lg">該当するスキルが見つかりませんでした。</p>
                    </div>
                )}
            </div>
        </section>
    );
}
