'use client';

import { useState } from 'react';
import { Info, ChevronDown } from 'lucide-react';

export function PromptViewer({ content }: { content: string }) {
    const isLong = content.length > 1000;
    const [expanded, setExpanded] = useState(!isLong);

    return (
        <div className="mb-8">
            <h2 className="text-[17px] font-semibold text-[#1d1d1f] mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-[#86868b]" />
                スキルの詳細指示
            </h2>
            <p className="text-[14px] text-[#86868b] mb-4">
                AIに送られる完全な指示内容です（上級者向け）
            </p>

            <div className="bg-[#f5f5f7] rounded-2xl overflow-hidden">
                <div className={`p-6 ${!expanded ? 'max-h-[200px] overflow-hidden relative' : ''}`}>
                    <pre className="text-[13px] text-[#1d1d1f] leading-relaxed whitespace-pre-wrap font-sans">
                        {content}
                    </pre>
                    {!expanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f5f5f7] to-transparent" />
                    )}
                </div>
                {isLong && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="w-full flex items-center justify-center gap-1 py-3 text-[13px] font-medium text-[#0071e3] hover:bg-black/[0.02] transition-colors border-t border-black/5"
                    >
                        {expanded ? '折りたたむ' : '全文を表示'}
                        <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                    </button>
                )}
            </div>
        </div>
    );
}
