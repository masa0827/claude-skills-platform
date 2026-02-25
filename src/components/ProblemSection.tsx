'use client';

import { motion } from 'framer-motion';
import { Brain, Globe, Lock } from 'lucide-react';

const problems = [
    {
        icon: Brain,
        label: '毎回「いい感じ」にならない',
        desc: 'AIに同じ仕事を頼んでも、出力の品質がバラバラ。期待通りの結果を得るまで何度もやり直し。プロンプトを工夫しても、安定した品質には届きません。',
    },
    {
        icon: Globe,
        label: '日本のビジネスに合わない',
        desc: '敬語の使い分け、稟議書のフォーマット、日本式の資料構成。海外製AIのデフォルト出力では、そのまま使えるレベルになりません。',
    },
    {
        icon: Lock,
        label: 'ノウハウが属人化する',
        desc: 'AIを上手に使える人のプロンプトは個人に閉じたまま。チームに共有できず、人が抜ければノウハウもゼロに。',
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
                        AIを使いこなせない理由。
                    </h2>
                    <p className="text-[17px] text-[#86868b] max-w-[600px] mx-auto leading-relaxed">
                        問題はAIの性能ではなく、「何を知っているか」。<br className="hidden md:block" />
                        専門知識を持たないAIに、専門的なアウトプットは出せません。
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
                    <span className="text-[#1d1d1f] font-semibold">AIに「専門家の頭脳」をインストールする、スキルという仕組み。</span>
                </motion.p>
            </div>
        </section>
    );
}
