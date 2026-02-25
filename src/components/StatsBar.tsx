import { skills } from '@/data/skills';
import { CATEGORIES } from '@/data/aiTools';

export function StatsBar() {
    return (
        <section className="py-6 px-6 border-y border-black/5">
            <div className="max-w-[980px] mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] text-[#86868b]">
                <span>
                    <strong className="text-[#1d1d1f] font-semibold text-[17px]">{skills.length}</strong>{' '}
                    スキル収録
                </span>
                <span className="text-[#d2d2d7]">|</span>
                <span>
                    <strong className="text-[#1d1d1f] font-semibold text-[17px]">{CATEGORIES.length}</strong>{' '}
                    業務カテゴリ
                </span>
                <span className="text-[#d2d2d7]">|</span>
                <span>
                    <strong className="text-[#1d1d1f] font-semibold text-[17px]">4</strong>{' '}
                    つのAIツール対応
                </span>
                <span className="text-[#d2d2d7]">|</span>
                <span>
                    すべて<strong className="text-[#1d1d1f] font-semibold text-[17px] ml-0.5">無料</strong>
                </span>
            </div>
        </section>
    );
}
