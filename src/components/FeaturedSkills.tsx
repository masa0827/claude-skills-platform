import Link from 'next/link';
import { skills } from '@/data/skills';
import { SkillCard } from '@/components/SkillCard';
import { ArrowRight } from 'lucide-react';

export function FeaturedSkills() {
    const easy = skills.filter((s) => s.difficulty === 'かんたん');
    const medium = skills.filter((s) => s.difficulty === 'ふつう');
    const advanced = skills.filter((s) => s.difficulty === 'しっかり');

    const featured = [
        easy[0],
        medium[0],
        easy[1],
        advanced[0] || easy[2],
    ].filter(Boolean).slice(0, 4);

    if (featured.length === 0) return null;

    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-[980px] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-3">
                        まずはここから。
                    </h2>
                    <p className="text-[17px] text-[#86868b] max-w-[560px] mx-auto">
                        日本のビジネスに最適化されたスキルを試して、AIの出力がどう変わるか体感してください。
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {featured.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/skills"
                        className="inline-flex items-center gap-2 text-[15px] font-medium text-[#0071e3] hover:underline transition-colors"
                    >
                        すべてのスキルを見る
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
