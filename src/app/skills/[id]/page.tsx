import { skills } from '@/data/skills';
import { AI_TOOLS } from '@/data/aiTools';
import { Clock, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SkillActions } from '@/components/SkillActions';
import { BeforeAfter } from '@/components/BeforeAfter';
import { PromptViewer } from '@/components/PromptViewer';

export async function generateStaticParams() {
    return skills.map((skill) => ({
        id: skill.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const skill = skills.find((s) => s.id === id);
    if (!skill) return {};
    return {
        title: `${skill.name} | AIプロンプト集`,
        description: skill.description,
    };
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

    const difficultyDots = {
        'かんたん': 1,
        'ふつう': 2,
        'しっかり': 3,
    }[skill.difficulty];

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            {/* パンくず */}
            <nav className="flex items-center gap-1.5 text-sm text-slate-500 mb-8">
                <Link href="/" className="hover:text-slate-900 transition-colors">ホーム</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link href={`/?category=${encodeURIComponent(skill.category)}#skills`} className="hover:text-slate-900 transition-colors">
                    {skill.category}
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-900 font-medium">{skill.name}</span>
            </nav>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                {/* ヘッダー */}
                <div className="p-8 md:p-10 border-b border-slate-100">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                                    {skill.category}
                                </span>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`w-2 h-2 rounded-full ${
                                            i <= difficultyDots ? 'bg-blue-600' : 'bg-slate-200'
                                        }`} />
                                    ))}
                                    <span className="text-xs text-slate-500 ml-1">{skill.difficulty}</span>
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-4">{skill.name}</h1>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {skill.longDescription}
                            </p>

                            {/* AIツール互換表示 */}
                            <div className="flex items-center gap-2 mt-5">
                                <span className="text-xs text-slate-400">対応AI:</span>
                                {AI_TOOLS.map((tool) => (
                                    <span
                                        key={tool.id}
                                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                                        style={{ color: tool.color, backgroundColor: tool.color + '12' }}
                                    >
                                        {tool.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 min-w-[180px]">
                            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                                <div className="flex items-center gap-2 text-slate-600 mb-1">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm font-medium">削減時間</span>
                                </div>
                                <p className="text-2xl font-bold text-slate-900">{skill.timeSaved}</p>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                                <div className="flex items-center gap-2 text-slate-600 mb-1">
                                    <Star className="w-4 h-4" />
                                    <span className="text-sm font-medium">難易度</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`w-2.5 h-2.5 rounded-full ${
                                            i <= difficultyDots ? 'bg-blue-600' : 'bg-slate-200'
                                        }`} />
                                    ))}
                                    <span className="text-sm font-bold text-slate-900 ml-2">{skill.difficulty}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* コンテンツ */}
                <div className="p-8 md:p-10">
                    {skill.examples.length > 0 && (
                        <BeforeAfter examples={skill.examples} />
                    )}

                    <PromptViewer content={skill.content} />

                    <SkillActions skill={skill} />
                </div>
            </div>
        </div>
    );
}
