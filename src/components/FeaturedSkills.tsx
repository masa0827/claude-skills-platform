import { skills } from '@/data/skills';
import { SkillCard } from '@/components/SkillCard';

export function FeaturedSkills() {
    const featured = skills
        .filter((s) => s.difficulty === 'かんたん')
        .slice(0, 3);

    if (featured.length === 0) return null;

    return (
        <section className="section-padding">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                    はじめての方におすすめ
                </h2>
                <p className="text-sm text-slate-500 text-center mb-8">
                    コピーして貼り付けるだけで、すぐに使えるスキルです
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featured.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}
