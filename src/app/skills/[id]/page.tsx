import { skills } from '@/data/skills';
import { ArrowLeft, Clock, Star, Info } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SkillActions } from '@/components/SkillActions';
import { BeforeAfter } from '@/components/BeforeAfter';

export async function generateStaticParams() {
    return skills.map((skill) => ({
        id: skill.id,
    }));
}

export default async function SkillPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const skill = skills.find((s) => s.id === id);

    if (!skill) {
        notFound();
    }

    const difficultyColor = {
        'かんたん': 'bg-green-100 text-green-700',
        'ふつう': 'bg-yellow-100 text-yellow-700',
        'しっかり': 'bg-red-100 text-red-700',
    }[skill.difficulty];

    const difficultyDots = {
        'かんたん': 1,
        'ふつう': 2,
        'しっかり': 3,
    }[skill.difficulty];

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <header className="bg-white border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 flex items-center gap-2 text-sm font-medium transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        一覧に戻る
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                    <div className="p-8 md:p-10 border-b border-slate-100">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                                        {skill.category}
                                    </span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${difficultyColor}`}>
                                        {skill.difficulty}
                                    </span>
                                    <span className="text-slate-400 text-sm">v{skill.version}</span>
                                </div>
                                <h1 className="text-3xl font-bold text-slate-900 mb-4">{skill.name}</h1>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                                    {skill.longDescription}
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 min-w-[200px]">
                                <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                                    <div className="flex items-center gap-2 text-slate-600 mb-2">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm font-medium">削減時間目安</span>
                                    </div>
                                    <p className="text-2xl font-bold text-slate-900">{skill.timeSaved}</p>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                                    <div className="flex items-center gap-2 text-slate-600 mb-2">
                                        <Star className="w-4 h-4" />
                                        <span className="text-sm font-medium">難易度</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className={`w-2 h-2 rounded-full ${
                                                i <= difficultyDots
                                                    ? 'bg-blue-600'
                                                    : 'bg-slate-200'
                                            }`} />
                                        ))}
                                        <span className="text-sm font-bold text-slate-900 ml-2">{skill.difficulty}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-6">
                            {skill.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 md:p-10 bg-slate-50/50">
                        {skill.examples.length > 0 && (
                            <BeforeAfter examples={skill.examples} />
                        )}

                        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Info className="w-5 h-5 text-blue-600" />
                            スキルの中身（プロンプト）
                        </h2>

                        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg mb-6">
                            <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                </div>
                                <span className="text-xs text-slate-400 font-mono">SKILL.md</span>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="text-sm font-mono text-slate-300 leading-relaxed whitespace-pre-wrap">
                                    {skill.content}
                                </pre>
                            </div>
                        </div>

                        <SkillActions skill={skill} />
                        <p className="text-center text-xs text-slate-400 mt-4">
                            ※ ZIPファイルはClaude.aiの設定 &gt; 機能 &gt; スキルからアップロードできます。
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
