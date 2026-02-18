import Link from 'next/link';
import { skills } from '@/data/skills';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-[680px] mx-auto text-center">
                <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-4">
                    あなたのAIに、<br className="md:hidden" />
                    専門家チームを。
                </h2>
                <p className="text-[17px] text-[#86868b] mb-8 leading-relaxed">
                    {skills.length}種類のスキルが、すべて無料・登録不要。<br />
                    日本のビジネスに最適化された専門AIが、今日から手に入ります。
                </p>

                <div className="flex items-center justify-center gap-5">
                    <Link
                        href="/skills"
                        className="inline-flex items-center gap-2 bg-[#1d1d1f] text-white font-medium text-[15px] px-7 py-3.5 rounded-full hover:bg-[#000000] transition-colors"
                    >
                        スキルを探す
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                        href="/#how-to-use"
                        className="text-[15px] font-medium text-[#0071e3] hover:underline transition-colors"
                    >
                        使い方を見る
                    </a>
                </div>
            </div>
        </section>
    );
}
