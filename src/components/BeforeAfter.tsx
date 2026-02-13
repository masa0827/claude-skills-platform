'use client';

import { useState } from 'react';
import { SkillExample } from '@/lib/types';
import { MessageSquare, Sparkles } from 'lucide-react';

export function BeforeAfter({ examples }: { examples: SkillExample[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeTab, setActiveTab] = useState<'output' | 'input'>('output');

    const example = examples[activeIndex];

    return (
        <div className="mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                使用例
            </h2>

            {examples.length > 1 && (
                <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
                    {examples.map((ex, i) => (
                        <button
                            key={i}
                            onClick={() => { setActiveIndex(i); setActiveTab('output'); }}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                                activeIndex === i
                                    ? 'bg-slate-900 text-white'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                            }`}
                        >
                            {ex.title}
                        </button>
                    ))}
                </div>
            )}

            {example.context && (
                <p className="text-sm text-slate-500 mb-3">{example.context}</p>
            )}

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="flex border-b border-slate-200">
                    <button
                        onClick={() => setActiveTab('output')}
                        className={`flex-1 px-4 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${
                            activeTab === 'output'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                                : 'text-slate-400 hover:text-slate-600'
                        }`}
                    >
                        <Sparkles className="w-4 h-4" />
                        Claudeの出力
                    </button>
                    <button
                        onClick={() => setActiveTab('input')}
                        className={`flex-1 px-4 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${
                            activeTab === 'input'
                                ? 'text-green-600 border-b-2 border-green-600 bg-green-50/50'
                                : 'text-slate-400 hover:text-slate-600'
                        }`}
                    >
                        <MessageSquare className="w-4 h-4" />
                        あなたの指示
                    </button>
                </div>

                <div className="p-6 max-h-[500px] overflow-y-auto">
                    {activeTab === 'output' ? (
                        <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                            {example.output}
                        </div>
                    ) : (
                        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                            <p className="text-sm text-slate-500 mb-2 font-medium">Claudeにこう伝えます:</p>
                            <p className="text-sm text-slate-800 whitespace-pre-wrap">{example.input}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
