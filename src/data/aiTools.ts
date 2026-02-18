import { AiToolInfo, CategoryMeta } from '@/lib/types';

export const AI_TOOLS: AiToolInfo[] = [
    { id: 'chatgpt', name: 'ChatGPT', color: '#10a37f' },
    { id: 'claude', name: 'Claude', color: '#d97706' },
    { id: 'gemini', name: 'Gemini', color: '#4285f4' },
    { id: 'copilot', name: 'Copilot', color: '#7c3aed' },
];

export const CATEGORIES: CategoryMeta[] = [
    { id: '営業', label: '営業', iconName: 'Handshake', description: '提案書・商談・フォロー', color: 'blue' },
    { id: 'マーケティング', label: 'マーケティング', iconName: 'Megaphone', description: 'コンテンツ・SNS・SEO・広告', color: 'purple' },
    { id: 'カスタマーサポート', label: 'カスタマーサポート', iconName: 'Headphones', description: '問い合わせ・FAQ・クレーム対応', color: 'orange' },
    { id: 'バックオフィス', label: 'バックオフィス', iconName: 'Building2', description: '経理・総務・法務・事務', color: 'emerald' },
    { id: '企画・リサーチ', label: '企画・リサーチ', iconName: 'Lightbulb', description: '戦略立案・調査・分析', color: 'amber' },
];
