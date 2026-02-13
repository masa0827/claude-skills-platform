'use client';

import { useState, useMemo } from 'react';
import { skills } from '@/data/skills';
import { SkillCard } from '@/components/SkillCard';
import { Search, Info } from 'lucide-react';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState('すべて');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(skills.map((s) => s.category)));
    return ['すべて', ...unique];
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
    <div className="min-h-screen bg-[#f8fafc]">
      <header className="bg-white border-b border-slate-200 pt-16 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-xs font-bold text-blue-600 tracking-wide">BUSINESS EDITION</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            AI Skills <span className="text-blue-600">Library</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
            プロが作ったAIスキルを、インストールするだけ。<br className="hidden md:block" />
            Claude.aiに追加すれば、毎回のコピペ不要で自動適用されます。
          </p>

          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="スキルを検索 (例: 議事録, メール)..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 bg-white"
            />
          </div>

          <div className="flex justify-center">
            <a
              href="/how-to-use"
              className="px-5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
              <Info className="w-4 h-4" />
              使い方はこちら
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex gap-2 overflow-x-auto pb-8 mb-4 no-scrollbar">
          {categories.map((cat) => (
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
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>&copy; 2026 Eudaimonia Inc. Empowering Business with AI.</p>
        </div>
      </footer>
    </div>
  );
}
