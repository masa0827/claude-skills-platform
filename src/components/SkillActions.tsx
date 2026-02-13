'use client';

import { useState } from 'react';
import { Copy, Download, Upload, Check, ChevronDown } from 'lucide-react';
import JSZip from 'jszip';
import { Skill } from '@/lib/types';
import { generateSkillMd } from '@/lib/skillmd';
import { AI_TOOLS } from '@/data/aiTools';

function Collapsible({ title, children }: { title: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            >
                {title}
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
                <div className="px-4 pb-4 border-t border-slate-100 pt-3">
                    {children}
                </div>
            )}
        </div>
    );
}

export function SkillActions({ skill }: { skill: Skill }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(skill.content);
        } catch {
            const textarea = document.createElement('textarea');
            textarea.value = skill.content;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    const handleZipDownload = async () => {
        const zip = new JSZip();
        const folder = zip.folder(skill.id)!;
        folder.file('SKILL.md', generateSkillMd(skill));
        const blob = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${skill.id}.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleMdDownload = () => {
        const blob = new Blob([skill.content], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${skill.id}.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="flex flex-col gap-4">
            <button
                onClick={handleCopy}
                className={`w-full px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-base ${
                    copied
                        ? 'bg-green-600 text-white shadow-lg shadow-green-600/20'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20'
                }`}
            >
                {copied ? (
                    <>
                        <Check className="w-5 h-5" />
                        コピーしました! お使いのAIに貼り付けてください
                    </>
                ) : (
                    <>
                        <Copy className="w-5 h-5" />
                        プロンプトをコピーする
                    </>
                )}
            </button>

            {copied && (
                <div className="flex items-center justify-center gap-3">
                    {AI_TOOLS.map((tool) => (
                        <span
                            key={tool.id}
                            className="text-xs font-medium px-2 py-1 rounded-full"
                            style={{ color: tool.color, backgroundColor: tool.color + '15' }}
                        >
                            {tool.name}
                        </span>
                    ))}
                </div>
            )}

            <div className="space-y-2">
                <Collapsible title="Claude.aiユーザー向け: スキルインストール">
                    <p className="text-sm text-slate-600 mb-3">
                        ZIPをダウンロードし、Claude.aiのプロジェクト &gt; スキルからアップロードすると、
                        毎回コピペ不要で自動適用されます。
                    </p>
                    <button
                        onClick={handleZipDownload}
                        className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm"
                    >
                        <Upload className="w-4 h-4" />
                        Claude用ZIP (.zip)
                    </button>
                </Collapsible>

                <Collapsible title="開発者向け: MDファイル">
                    <p className="text-sm text-slate-600 mb-3">
                        MDファイルをダウンロードし、プロジェクトの
                        <code className="px-1 py-0.5 bg-slate-100 rounded text-xs mx-1">.claude/commands/</code>
                        に配置してClaude Codeで利用できます。
                    </p>
                    <button
                        onClick={handleMdDownload}
                        className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm"
                    >
                        <Download className="w-4 h-4" />
                        MDファイル (.md)
                    </button>
                </Collapsible>
            </div>
        </div>
    );
}
