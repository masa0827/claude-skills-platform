'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { skills } from '@/data/skills';
import { CATEGORIES } from '@/data/aiTools';
import { SkillCard } from '@/components/SkillCard';
import { Search } from 'lucide-react';

export function SkillLibrary() {
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

    const countByCategory = useMemo(() => {
        return skills.reduce<Record<string, number>>((acc, s) => {
            acc[s.category] = (acc[s.category] || 0) + 1;
            return acc;
        }, {});
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
        <div className="min-h-screen">
            {/* Header */}
            <div className="section-alt border-b border-black/5">
                <div className="max-w-[980px] mx-auto px-6 pt-12 pb-10">
                    <h1 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] mb-2">
                        スキルライブラリ
                    </h1>
                    <p className="text-[17px] text-[#86868b]">
                        {skills.length}種類のスキルから、あなたの業務に最適なものを見つけましょう。
                    </p>

                    <div className="max-w-md relative mt-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
                        <input
                            type="text"
                            placeholder="スキルを検索..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-black/10 focus:ring-2 focus:ring-[#0071e3]/20 focus:border-[#0071e3]/40 outline-none transition-all placeholder:text-[#86868b] text-[15px]"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-[980px] mx-auto px-6 py-8">
                {/* Category tabs */}
                <div className="flex gap-2 overflow-x-auto pb-6 no-scrollbar flex-wrap">
                    {categoryTabs.map((cat) => {
                        const count = cat === 'すべて' ? skills.length : (countByCategory[cat] || 0);
                        const isActive = activeCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all ${
                                    isActive
                                        ? 'bg-[#1d1d1f] text-white'
                                        : 'bg-white text-[#424245] border border-black/10 hover:bg-[#f5f5f7]'
                                }`}
                            >
                                {cat}
                                <span className={`ml-1.5 text-[11px] ${isActive ? 'opacity-60' : 'text-[#86868b]'}`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <p className="text-[13px] text-[#86868b] mb-6">
                    {filteredSkills.length}件のスキル
                    {searchText && <span> &middot; &ldquo;{searchText}&rdquo; の検索結果</span>}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredSkills.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>

                {filteredSkills.length === 0 && (
                    <div className="text-center py-20 text-[#86868b]">
                        <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
                        <p className="text-[17px] font-medium">該当するスキルが見つかりませんでした</p>
                        <p className="text-[14px] mt-2">別のキーワードやカテゴリをお試しください</p>
                    </div>
                )}
            </div>
        </div>
    );
}
