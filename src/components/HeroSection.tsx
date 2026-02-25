'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, ArrowRight, Loader2, MessageCircle } from 'lucide-react';
import { CATEGORIES } from '@/data/aiTools';
import Link from 'next/link';

interface Recommendation {
    id: string;
    name: string;
    reason: string;
}

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    recommendations?: Recommendation[];
}

const CATEGORY_STYLES: Record<string, { bg: string; text: string }> = {
    '営業': { bg: 'bg-blue-50', text: 'text-blue-600' },
    'マーケティング': { bg: 'bg-violet-50', text: 'text-violet-600' },
    'カスタマーサポート': { bg: 'bg-orange-50', text: 'text-orange-600' },
    'バックオフィス': { bg: 'bg-emerald-50', text: 'text-emerald-600' },
    '企画・リサーチ': { bg: 'bg-amber-50', text: 'text-amber-600' },
};

export function HeroSection() {
    const [showChat, setShowChat] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSubmit = async (query: string) => {
        if (!query.trim() || loading) return;

        const userMessage: ChatMessage = { role: 'user', content: query };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch('/api/recommend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: query }),
            });

            if (!res.ok) throw new Error('API error');
            const data = await res.json();

            const assistantMessage: ChatMessage = {
                role: 'assistant',
                content: data.message || 'おすすめのスキルをご紹介します。',
                recommendations: data.recommendations || [],
            };
            setMessages((prev) => [...prev, assistantMessage]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'すみません、エラーが発生しました。もう一度お試しください。' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit(input);
    };

    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-[980px] mx-auto text-center">
                <p className="text-[13px] font-semibold text-[#0071e3] uppercase tracking-widest mb-4">
                    AI Skills Library
                </p>

                <h1 className="text-[40px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] leading-[1.07] mb-6">
                    AIを、あなたの業務の<br className="hidden md:block" />
                    専門家に変える。
                </h1>

                <p className="text-[19px] md:text-[21px] text-[#86868b] leading-relaxed max-w-[620px] mx-auto mb-4">
                    「スキル」は、AIに専門知識を注入する設定ファイル。<br className="hidden md:block" />
                    設定するだけで、営業・マーケ・CS・バックオフィスの<br className="hidden md:block" />
                    プロフェッショナルがAIの中に常駐します。
                </p>

                <p className="text-[17px] text-[#86868b] mb-8">
                    ChatGPT / Claude / Gemini / Copilot 対応。すべて無料・登録不要。
                </p>

                <div className="flex items-center justify-center gap-4 mb-6">
                    <Link
                        href="/skills"
                        className="inline-flex items-center gap-2 bg-[#1d1d1f] text-white font-medium text-[15px] px-7 py-3 rounded-full hover:bg-[#000000] transition-colors"
                    >
                        スキルを探す
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                        onClick={() => setShowChat(!showChat)}
                        className="inline-flex items-center gap-2 text-[15px] font-medium text-[#0071e3] hover:underline transition-all"
                    >
                        <MessageCircle className="w-4 h-4" />
                        AIに相談する
                    </button>
                </div>

                {/* AI Chat */}
                {showChat && (
                    <div className="max-w-lg mx-auto mb-12 bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] overflow-hidden text-left">
                        {messages.length > 0 && (
                            <div className="p-4 max-h-80 overflow-y-auto space-y-4">
                                {messages.map((msg, i) => (
                                    <div key={i}>
                                        {msg.role === 'user' ? (
                                            <div className="flex justify-end">
                                                <div className="bg-[#1d1d1f] text-white rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[80%] text-sm">
                                                    {msg.content}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="space-y-3">
                                                <div className="flex gap-2.5">
                                                    <div className="flex-shrink-0 w-6 h-6 bg-[#f5f5f7] rounded-full flex items-center justify-center">
                                                        <Sparkles className="w-3 h-3 text-[#86868b]" />
                                                    </div>
                                                    <div className="bg-[#f5f5f7] rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[85%] text-sm text-[#1d1d1f]">
                                                        {msg.content}
                                                    </div>
                                                </div>

                                                {msg.recommendations && msg.recommendations.length > 0 && (
                                                    <div className="pl-8 space-y-2">
                                                        {msg.recommendations.map((rec) => (
                                                            <Link
                                                                key={rec.id}
                                                                href={`/skills/${rec.id}`}
                                                                className="block bg-white rounded-xl border border-black/5 p-3 hover:bg-[#f5f5f7] transition-colors group"
                                                            >
                                                                <div className="flex items-center justify-between">
                                                                    <span className="font-medium text-sm text-[#1d1d1f]">
                                                                        {rec.name}
                                                                    </span>
                                                                    <ArrowRight className="w-3.5 h-3.5 text-[#d2d2d7] group-hover:text-[#0071e3] transition-colors" />
                                                                </div>
                                                                <p className="text-xs text-[#86868b] mt-1">{rec.reason}</p>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {loading && (
                                    <div className="flex gap-2.5">
                                        <div className="flex-shrink-0 w-6 h-6 bg-[#f5f5f7] rounded-full flex items-center justify-center">
                                            <Sparkles className="w-3 h-3 text-[#86868b]" />
                                        </div>
                                        <div className="bg-[#f5f5f7] rounded-2xl rounded-bl-sm px-4 py-3">
                                            <Loader2 className="w-4 h-4 text-[#86868b] animate-spin" />
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        )}

                        <div className="border-t border-black/5 p-3">
                            <form onSubmit={handleFormSubmit} className="relative">
                                <input
                                    type="text"
                                    placeholder="どんな業務を効率化したいですか？"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    disabled={loading}
                                    className="w-full pl-4 pr-12 py-3 rounded-xl bg-[#f5f5f7] border-0 focus:ring-2 focus:ring-[#0071e3]/30 outline-none transition-all placeholder:text-[#86868b] text-sm disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || loading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#1d1d1f] text-white rounded-lg hover:bg-[#000000] transition-colors disabled:opacity-20"
                                >
                                    <Send className="w-3.5 h-3.5" />
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Category Grid */}
                <div className="max-w-[680px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-3 mt-8">
                    {CATEGORIES.map((cat) => {
                        const style = CATEGORY_STYLES[cat.id] || CATEGORY_STYLES['営業'];
                        return (
                            <Link
                                key={cat.id}
                                href={`/skills?category=${encodeURIComponent(cat.id)}`}
                                className={`group ${style.bg} rounded-2xl p-4 transition-all hover:scale-[1.02]`}
                            >
                                <span className={`text-sm font-semibold ${style.text} block mb-0.5`}>{cat.label}</span>
                                <span className="text-[11px] text-[#86868b] leading-snug block">{cat.description}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
