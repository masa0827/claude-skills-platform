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
            <h2 className="text-[17px] font-semibold text-[#1d1d1f] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                使用例
            </h2>

            {examples.length > 1 && (
                <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
                    {examples.map((ex, i) => (
                        <button
                            key={i}
                            onClick={() => { setActiveIndex(i); setActiveTab('output'); }}
                            className={`px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-colors ${
                                activeIndex === i
                                    ? 'bg-[#1d1d1f] text-white'
                                    : 'bg-[#f5f5f7] text-[#424245] hover:bg-[#e8e8ed]'
                            }`}
                        >
                            {ex.title}
                        </button>
                    ))}
                </div>
            )}

            {example.context && (
                <p className="text-[14px] text-[#86868b] mb-3">{example.context}</p>
            )}

            <div className="bg-white rounded-2xl overflow-hidden border border-black/5">
                <div className="flex border-b border-black/5">
                    <button
                        onClick={() => setActiveTab('output')}
                        className={`flex-1 px-4 py-3 text-[13px] font-semibold flex items-center justify-center gap-2 transition-colors ${
                            activeTab === 'output'
                                ? 'text-[#1d1d1f] border-b-2 border-[#1d1d1f] bg-white'
                                : 'text-[#86868b] hover:text-[#424245]'
                        }`}
                    >
                        <Sparkles className="w-4 h-4" />
                        AIの出力結果
                    </button>
                    <button
                        onClick={() => setActiveTab('input')}
                        className={`flex-1 px-4 py-3 text-[13px] font-semibold flex items-center justify-center gap-2 transition-colors ${
                            activeTab === 'input'
                                ? 'text-[#1d1d1f] border-b-2 border-[#1d1d1f] bg-white'
                                : 'text-[#86868b] hover:text-[#424245]'
                        }`}
                    >
                        <MessageSquare className="w-4 h-4" />
                        あなたの指示
                    </button>
                </div>

                <div className="p-6 max-h-[500px] overflow-y-auto">
                    {activeTab === 'output' ? (
                        <div className="text-[14px] text-[#1d1d1f] leading-relaxed whitespace-pre-wrap">
                            {example.output}
                        </div>
                    ) : (
                        <div className="bg-[#f5f5f7] rounded-xl p-4">
                            <p className="text-[13px] text-[#86868b] mb-2 font-medium">AIにこう伝えます:</p>
                            <p className="text-[14px] text-[#1d1d1f] whitespace-pre-wrap">{example.input}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
