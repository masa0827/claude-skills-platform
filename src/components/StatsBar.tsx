import { skills } from '@/data/skills';
import { BookOpen, Clock, Gift } from 'lucide-react';

export function StatsBar() {
    const totalMinutes = skills.reduce((sum, s) => {
        const match = s.timeSaved.match(/(\d+)/);
        return sum + (match ? parseInt(match[1], 10) : 0);
    }, 0);

    const stats = [
        { icon: BookOpen, value: `${skills.length}`, label: 'スキル収録', color: 'text-blue-600' },
        { icon: Clock, value: `${totalMinutes}分+`, label: 'の時短効果', color: 'text-emerald-600' },
        { icon: Gift, value: 'すべて', label: '無料で利用可能', color: 'text-amber-600' },
    ];

    return (
        <section className="bg-white border-y border-slate-200">
            <div className="max-w-4xl mx-auto px-6 py-6">
                <div className="grid grid-cols-3 divide-x divide-slate-200">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center px-4">
                            <stat.icon className={`w-5 h-5 ${stat.color} mb-1.5`} />
                            <span className="text-xl md:text-2xl font-bold text-slate-900">{stat.value}</span>
                            <span className="text-xs text-slate-500 mt-0.5">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
