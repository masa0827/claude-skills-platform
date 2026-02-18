'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const scenarios = [
    {
        category: '営業提案書',
        trigger: '「クライアント向けの提案書を作って」',
        result: 'PREP法ベースの構成、日本語ビジネス書式、御社/弊社の敬語使い分けをスキルが自動適用。手動指示ゼロ。',
    },
    {
        category: 'クレーム対応',
        trigger: '「このクレームに返信して」',
        result: '適切な敬語レベル、クッション言葉、エスカレーション判断をスキルが文脈から自動判断。そのまま送れる品質。',
    },
    {
        category: 'レポート作成',
        trigger: '「四半期の売上データを分析して」',
        result: '情報密度の高い日本式の分析レポート、グラフ提案、経営層向けサマリーをスキルが自動生成。',
    },
];

export function TestimonialSection() {
    return (
        <section className="py-24 px-6 section-alt">
            <div className="max-w-[980px] mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-3">
                        指示しなくても、<br className="md:hidden" />AIが判断する。
                    </h2>
                    <p className="text-[17px] text-[#86868b] max-w-[620px] mx-auto leading-relaxed">
                        スキルの核心は<strong className="text-[#1d1d1f]">自動起動</strong>。あなたが話しかけるだけで、
                        AIが文脈を読み、最適なスキルを自動で呼び出します。
                    </p>
                </div>

                <div className="space-y-4 max-w-[720px] mx-auto">
                    {scenarios.map((item, i) => (
                        <motion.div
                            key={item.category}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            className="bg-white rounded-2xl overflow-hidden"
                        >
                            <div className="px-6 py-3 border-b border-black/5 flex items-center gap-2">
                                <span className="text-[13px] font-semibold text-[#1d1d1f]">{item.category}</span>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider">あなたの一言</span>
                                    <p className="text-[15px] text-[#1d1d1f] mt-1.5 font-medium">{item.trigger}</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Zap className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                                    <div>
                                        <span className="text-[11px] font-semibold text-amber-600 uppercase tracking-wider">スキルが自動起動</span>
                                        <p className="text-[14px] text-[#86868b] mt-1 leading-relaxed">{item.result}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-[15px] text-[#86868b] leading-relaxed max-w-[560px] mx-auto">
                        大手ファッション通販会社ではAgent Skillsの導入で、レガシーコード調査のリードタイムを
                        <strong className="text-[#1d1d1f]">2〜5日から数時間に短縮</strong>。
                        スキルは国内外の先進企業で実証済みの仕組みです。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
