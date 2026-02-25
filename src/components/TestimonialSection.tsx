'use client';

import { motion } from 'framer-motion';
import { Zap, X } from 'lucide-react';

const scenarios = [
    {
        category: '営業提案書',
        trigger: '「A社向けの提案書を作って」',
        before: '汎用的な英語圏フォーマット。PREP法なし、敬語が不自然。手直しに30分。',
        result: 'PREP法ベースの構成、御社/弊社の使い分け、日本式ビジネス書式を自動適用。そのまま提出できる品質。',
    },
    {
        category: 'クレーム対応メール',
        trigger: '「このクレームに返信して」',
        before: '直訳調の謝罪。クッション言葉なし。お客様の感情を逆なでするリスク。',
        result: '適切な謝罪表現、クッション言葉、エスカレーション判断を文脈から自動適用。すぐに送信できる品質。',
    },
    {
        category: '競合分析レポート',
        trigger: '「この業界の競合状況をまとめて」',
        before: '箇条書きの羅列。分析の軸が不明確。経営層に出せない。',
        result: '日本式の分析フレームワーク、情報密度の高い構成、経営層向けサマリーを自動生成。',
    },
];

export function TestimonialSection() {
    return (
        <section className="py-24 px-6 section-alt">
            <div className="max-w-[980px] mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-3">
                        同じ一言で、<br className="md:hidden" />出力がここまで変わる。
                    </h2>
                    <p className="text-[17px] text-[#86868b] max-w-[620px] mx-auto leading-relaxed">
                        スキルなしのAIと、スキルありのAI。<br className="hidden md:block" />
                        同じ指示でも、アウトプットの質がまるで違います。
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
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-[#f5f5f7] rounded-xl p-3.5">
                                        <div className="flex items-center gap-1.5 mb-1.5">
                                            <X className="w-3 h-3 text-red-400 shrink-0" />
                                            <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider">スキルなし</span>
                                        </div>
                                        <p className="text-[13px] text-[#86868b] leading-relaxed">{item.before}</p>
                                    </div>
                                    <div className="bg-emerald-50 rounded-xl p-3.5">
                                        <div className="flex items-center gap-1.5 mb-1.5">
                                            <Zap className="w-3 h-3 text-emerald-500 shrink-0" />
                                            <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">スキルあり</span>
                                        </div>
                                        <p className="text-[13px] text-[#1d1d1f] leading-relaxed">{item.result}</p>
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
                        スキルを設定したAIは、<strong className="text-[#1d1d1f]">毎回安定して専門家レベルの品質を出力</strong>します。<br />
                        プロンプトを工夫する時間をゼロにして、本来の業務に集中できます。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
