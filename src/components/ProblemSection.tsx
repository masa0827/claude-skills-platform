'use client';

import { motion } from 'framer-motion';
import { Brain, Globe, Lock } from 'lucide-react';

const problems = [
    {
        icon: Brain,
        label: 'AIは優秀。でも専門家ではない。',
        desc: 'ChatGPTもClaudeも何でもこなしますが、あなたの業界の常識は持っていません。営業のPREP法、法務のリスク評価、医療の安全基準。毎回ゼロから説明する必要があります。',
    },
    {
        icon: Globe,
        label: '日本のビジネス作法を知らない。',
        desc: '敬語の使い分け、情報密度の高い資料構成、稟議書のフォーマット。日本のビジネス文化に沿った出力は、詳細な指示なしには出てきません。',
    },
    {
        icon: Lock,
        label: 'できる人の技が、組織に残らない。',
        desc: 'AIを上手に使いこなす人のノウハウは、個人のチャット履歴に埋もれたまま。チームの共有資産にならず、人が抜けるとゼロに戻ります。',
    },
];

export function ProblemSection() {
    return (
        <section className="py-24 px-6 section-alt">
            <div className="max-w-[980px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-4">
                        プロンプトでは、<br className="md:hidden" />届かない領域がある。
                    </h2>
                    <p className="text-[17px] text-[#86868b] max-w-[600px] mx-auto leading-relaxed">
                        AIの能力を引き出すために必要なのは、上手な指示ではなく、専門性の注入です。
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-5">
                    {problems.map((item, i) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-white rounded-2xl p-7"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center mb-5">
                                    <IconComponent className="w-5 h-5 text-[#86868b]" />
                                </div>
                                <h3 className="font-semibold text-[#1d1d1f] text-[17px] mb-2">
                                    {item.label}
                                </h3>
                                <p className="text-[15px] text-[#86868b] leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-center text-[17px] text-[#86868b] mt-14"
                >
                    解決策は、<br className="md:hidden" />
                    <span className="text-[#1d1d1f] font-semibold">AIに専門性を永続的に注入するスキルという仕組み。</span>
                </motion.p>
            </div>
        </section>
    );
}
