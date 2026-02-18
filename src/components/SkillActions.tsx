'use client';

import { useState } from 'react';
import { Copy, Download, Upload, Check, ChevronDown, FileText, Clipboard } from 'lucide-react';
import JSZip from 'jszip';
import { Skill } from '@/lib/types';
import { generateSkillMd } from '@/lib/skillmd';
import { AI_TOOLS } from '@/data/aiTools';

function Collapsible({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="bg-[#f5f5f7] rounded-2xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-[14px] font-medium text-[#424245] hover:text-[#1d1d1f] transition-colors"
            >
                {title}
                <ChevronDown className={`w-4 h-4 text-[#86868b] transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
                <div className="px-5 pb-4 border-t border-black/5 pt-3">
                    {children}
                </div>
            )}
        </div>
    );
}

export function SkillActions({ skill }: { skill: Skill }) {
    const [copiedPrompt, setCopiedPrompt] = useState(false);
    const [copiedContent, setCopiedContent] = useState(false);

    const textToCopy = skill.promptTemplate || skill.content;

    const handleCopyPrompt = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
        } catch {
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
        setCopiedPrompt(true);
        setTimeout(() => setCopiedPrompt(false), 3000);
    };

    const handleCopyContent = async () => {
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
        setCopiedContent(true);
        setTimeout(() => setCopiedContent(false), 3000);
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
        <div className="flex flex-col gap-5">
            {/* プロンプトテンプレートがある場合のプレビュー */}
            {skill.promptTemplate && (
                <div>
                    <h2 className="text-[17px] font-semibold text-[#1d1d1f] mb-2 flex items-center gap-2">
                        <Clipboard className="w-5 h-5 text-[#0071e3]" />
                        プロンプトテンプレート
                    </h2>
                    <p className="text-[14px] text-[#86868b] mb-4">
                        [ ] の中をあなたの情報に書き換えて、AIに貼り付けるだけ
                    </p>
                    <div className="bg-[#f5f5f7] rounded-2xl p-5 max-h-[300px] overflow-y-auto">
                        <pre className="text-[13px] text-[#1d1d1f] leading-relaxed whitespace-pre-wrap font-sans">
                            {skill.promptTemplate}
                        </pre>
                    </div>
                </div>
            )}

            {/* メインCTA */}
            <button
                onClick={handleCopyPrompt}
                className={`w-full px-6 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 text-[15px] ${
                    copiedPrompt
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#1d1d1f] hover:bg-[#000000] text-white'
                }`}
            >
                {copiedPrompt ? (
                    <>
                        <Check className="w-5 h-5" />
                        コピーしました! お使いのAIに貼り付けてください
                    </>
                ) : (
                    <>
                        <Copy className="w-5 h-5" />
                        {skill.promptTemplate ? 'プロンプトをコピーして使う' : 'スキルをコピーする'}
                    </>
                )}
            </button>

            {copiedPrompt && (
                <div className="flex items-center justify-center gap-3">
                    {AI_TOOLS.map((tool) => (
                        <span
                            key={tool.id}
                            className="text-[12px] font-medium px-2.5 py-1 rounded-full"
                            style={{ color: tool.color, backgroundColor: tool.color + '12' }}
                        >
                            {tool.name}
                        </span>
                    ))}
                </div>
            )}

            {/* 追加アクション */}
            <div className="space-y-2">
                {skill.promptTemplate && (
                    <Collapsible title="上級者向け: スキル全文をコピー">
                        <p className="text-[14px] text-[#86868b] mb-3">
                            より詳細な指示（構成ルール・トーン設定など）を含むフルバージョンです。
                        </p>
                        <button
                            onClick={handleCopyContent}
                            className={`w-full px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-[14px] ${
                                copiedContent
                                    ? 'bg-emerald-50 text-emerald-700'
                                    : 'bg-white hover:bg-[#f5f5f7] text-[#1d1d1f] border border-black/10'
                            }`}
                        >
                            {copiedContent ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    コピーしました
                                </>
                            ) : (
                                <>
                                    <FileText className="w-4 h-4" />
                                    フル指示をコピー
                                </>
                            )}
                        </button>
                    </Collapsible>
                )}

                <Collapsible title="Claude.aiユーザー向け: スキルインストール">
                    <p className="text-[14px] text-[#86868b] mb-3">
                        ZIPをダウンロードし、Claude.aiのプロジェクト &gt; スキルからアップロードすると、
                        毎回コピペ不要で自動適用されます。
                    </p>
                    <button
                        onClick={handleZipDownload}
                        className="w-full bg-white hover:bg-[#f5f5f7] text-[#1d1d1f] border border-black/10 px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-[14px]"
                    >
                        <Upload className="w-4 h-4" />
                        Claude用ZIP (.zip)
                    </button>
                </Collapsible>

                <Collapsible title="開発者向け: MDファイル">
                    <p className="text-[14px] text-[#86868b] mb-3">
                        MDファイルをダウンロードし、プロジェクトの
                        <code className="px-1.5 py-0.5 bg-white rounded text-[12px] mx-1 font-mono">.claude/skills/</code>
                        に配置してClaude Codeで利用できます。
                    </p>
                    <button
                        onClick={handleMdDownload}
                        className="w-full bg-white hover:bg-[#f5f5f7] text-[#1d1d1f] border border-black/10 px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-[14px]"
                    >
                        <Download className="w-4 h-4" />
                        MDファイル (.md)
                    </button>
                </Collapsible>
            </div>
        </div>
    );
}
