'use client';

import React from 'react';
import { Skill } from '@/lib/types';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const SkillCard = ({ skill }: { skill: Skill }) => {
    const Icon = (Icons as any)[skill.iconName] || Icons.Box;

    const difficultyColor = {
        'かんたん': 'bg-green-100 text-green-700',
        'ふつう': 'bg-yellow-100 text-yellow-700',
        'しっかり': 'bg-red-100 text-red-700',
    }[skill.difficulty];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col h-full card-hover group"
        >
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${difficultyColor}`}>
                    {skill.difficulty}
                </span>
            </div>

            <h3 className="font-bold text-lg text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                {skill.name}
            </h3>

            <p className="text-sm text-slate-500 mb-3 line-clamp-2 leading-relaxed">
                {skill.description}
            </p>

            {/* アウトカムスニペット */}
            {skill.examples.length > 0 && (
                <p className="text-xs text-blue-600 bg-blue-50 rounded-lg px-3 py-2 mb-4 line-clamp-1">
                    例: {skill.examples[0].title}
                </p>
            )}

            {/* AIツール互換アイコン */}
            <div className="flex gap-1.5 mb-4">
                {[
                    { name: 'GPT', color: '#10a37f' },
                    { name: 'Claude', color: '#d97706' },
                    { name: 'Gemini', color: '#4285f4' },
                    { name: 'Copilot', color: '#7c3aed' },
                ].map((t) => (
                    <span
                        key={t.name}
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                        style={{ color: t.color, backgroundColor: t.color + '12' }}
                    >
                        {t.name}
                    </span>
                ))}
            </div>

            <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <Icons.Clock className="w-3 h-3" />
                        <span>{skill.timeSaved} 削減</span>
                    </div>
                    {skill.examples.length > 0 && (
                        <span className="text-[10px] font-medium px-1.5 py-0.5 bg-amber-50 text-amber-600 border border-amber-200 rounded-full">
                            使用例あり
                        </span>
                    )}
                </div>
                <Link
                    href={`/skills/${skill.id}`}
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-1 group/link"
                >
                    詳細を見る
                    <Icons.ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};
