import Link from 'next/link';
import { skills } from '@/data/skills';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-[680px] mx-auto text-center">
                <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-4">
                    あなたのAIを、<br className="md:hidden" />
                    今日からアップグレード。
                </h2>
                <p className="text-[17px] text-[#86868b] mb-3 leading-relaxed">
                    {skills.length}種類のスキルが、すべて無料・登録不要。<br />
                    3分のセットアップで、AIの出力品質が変わります。
                </p>
                <p className="text-[14px] text-[#86868b]/70 mb-8">
                    今後、クリエイターによるプレミアムスキルも登場予定。
                </p>

                <div className="flex items-center justify-center gap-5">
                    <Link
                        href="/skills"
                        className="inline-flex items-center gap-2 bg-[#1d1d1f] text-white font-medium text-[15px] px-7 py-3.5 rounded-full hover:bg-[#000000] transition-colors"
                    >
                        無料でスキルを探す
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
