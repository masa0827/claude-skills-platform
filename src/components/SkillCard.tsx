'use client';

import React from 'react';
import { Skill } from '@/lib/types';
import * as Icons from 'lucide-react';
import Link from 'next/link';

const CATEGORY_ACCENT: Record<string, { bg: string; text: string; icon: string }> = {
    '営業': { bg: 'bg-blue-50', text: 'text-blue-600', icon: 'text-blue-500' },
    'マーケティング': { bg: 'bg-violet-50', text: 'text-violet-600', icon: 'text-violet-500' },
    'カスタマーサポート': { bg: 'bg-orange-50', text: 'text-orange-600', icon: 'text-orange-500' },
    'バックオフィス': { bg: 'bg-emerald-50', text: 'text-emerald-600', icon: 'text-emerald-500' },
    '企画・リサーチ': { bg: 'bg-amber-50', text: 'text-amber-600', icon: 'text-amber-500' },
};

const DIFFICULTY_STYLE: Record<string, string> = {
    'かんたん': 'text-emerald-600 bg-emerald-50',
    'ふつう': 'text-amber-600 bg-amber-50',
    'しっかり': 'text-rose-600 bg-rose-50',
};

export const SkillCard = ({ skill }: { skill: Skill }) => {
    const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[skill.iconName] || Icons.Box;
    const accent = CATEGORY_ACCENT[skill.category] || CATEGORY_ACCENT['営業'];
    const diffStyle = DIFFICULTY_STYLE[skill.difficulty] || '';

    return (
        <Link href={`/skills/${skill.id}`} className="block h-full group">
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-2.5 rounded-xl ${accent.bg}`}>
                            <Icon className={`w-5 h-5 ${accent.icon}`} />
                        </div>
                        <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${diffStyle}`}>
                            {skill.difficulty}
                        </span>
                    </div>

                    <h3 className="font-semibold text-[15px] text-[#1d1d1f] mb-2 leading-snug group-hover:text-[#0071e3] transition-colors">
                        {skill.name}
                    </h3>

                    <p className="text-[13px] text-[#86868b] mb-4 line-clamp-2 leading-relaxed">
                        {skill.description}
                    </p>

                    {skill.examples.length > 0 && (
                        <p className="text-[12px] text-[#86868b] bg-[#f5f5f7] rounded-xl px-3 py-2 mb-4 line-clamp-1">
                            <span className="text-[#d2d2d7] mr-1">例:</span>{skill.examples[0].title}
                        </p>
                    )}

                    <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-between text-[12px] text-[#86868b]">
                        <div className="flex items-center gap-1.5">
                            <Icons.Clock className="w-3 h-3" />
                            <span>{skill.timeSaved} 削減</span>
                        </div>
                        <Icons.ArrowRight className="w-3 h-3 text-[#d2d2d7] group-hover:text-[#0071e3] group-hover:translate-x-0.5 transition-all" />
                    </div>
                </div>
            </div>
        </Link>
    );
};
