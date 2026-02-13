'use client';

import { useState } from 'react';
import { Info, ChevronDown } from 'lucide-react';

export function PromptViewer({ content }: { content: string }) {
    const isLong = content.length > 1000;
    const [expanded, setExpanded] = useState(!isLong);

    return (
        <div className="mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                スキルの内容
            </h2>
            <p className="text-sm text-slate-500 mb-4">
                この内容がAIに送られ、高品質な出力が得られます
            </p>

            <div className="bg-white rounded-xl border-l-4 border-l-blue-500 border border-slate-200 overflow-hidden">
                <div className={`p-6 ${!expanded ? 'max-h-[200px] overflow-hidden relative' : ''}`}>
                    <pre className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans">
                        {content}
                    </pre>
                    {!expanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
                    )}
                </div>
                {isLong && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="w-full flex items-center justify-center gap-1 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors border-t border-slate-200"
                    >
                        {expanded ? '折りたたむ' : '全文を表示'}
                        <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                    </button>
                )}
            </div>
        </div>
    );
}
