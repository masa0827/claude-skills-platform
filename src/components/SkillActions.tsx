'use client';

import { useState } from 'react';
import { Copy, Download, Upload } from 'lucide-react';
import JSZip from 'jszip';
import { Skill } from '@/lib/types';
import { generateSkillMd } from '@/lib/skillmd';

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
        setTimeout(() => setCopied(false), 2000);
    };

    const handleZipDownload = async () => {
        const zip = new JSZip();
        const folderName = skill.id;
        const folder = zip.folder(folderName)!;
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
        <div className="flex flex-col gap-3">
            <button
                onClick={handleZipDownload}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
            >
                <Upload className="w-5 h-5" />
                Claude.ai用スキルをダウンロード (.zip)
            </button>
            <div className="flex gap-3">
                <button
                    onClick={handleCopy}
                    className="flex-1 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-4 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm"
                >
                    <Copy className="w-4 h-4" />
                    {copied ? 'コピーしました!' : 'プロンプトをコピー'}
                </button>
                <button
                    onClick={handleMdDownload}
                    className="flex-1 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-4 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm"
                >
                    <Download className="w-4 h-4" />
                    MDファイル
                </button>
            </div>
        </div>
    );
}
