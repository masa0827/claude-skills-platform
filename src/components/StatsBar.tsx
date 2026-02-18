import { skills } from '@/data/skills';

export function StatsBar() {
    return (
        <section className="py-4 px-6">
            <div className="max-w-[980px] mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px] text-[#86868b]">
                <span>
                    <strong className="text-[#1d1d1f] font-semibold">{skills.length}</strong> スキル収録
                </span>
                <span className="text-[#d2d2d7]">/</span>
                <span>
                    日本のビジネスに最適化
                </span>
                <span className="text-[#d2d2d7]">/</span>
                <span>
                    ChatGPT / Claude / Gemini / Copilot 対応
                </span>
                <span className="text-[#d2d2d7]">/</span>
                <span>
                    すべて<strong className="text-[#1d1d1f] font-semibold">無料</strong>
                </span>
            </div>
        </section>
    );
}
