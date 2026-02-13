import { AiToolInfo, CategoryMeta } from '@/lib/types';

export const AI_TOOLS: AiToolInfo[] = [
    { id: 'chatgpt', name: 'ChatGPT', color: '#10a37f' },
    { id: 'claude', name: 'Claude', color: '#d97706' },
    { id: 'gemini', name: 'Gemini', color: '#4285f4' },
    { id: 'copilot', name: 'Copilot', color: '#7c3aed' },
];

export const CATEGORIES: CategoryMeta[] = [
    { id: 'ライティング', label: 'ライティング', iconName: 'PenTool', description: 'ブログ・メール・SNS投稿', color: 'blue' },
    { id: '資料作成', label: '資料作成', iconName: 'FileText', description: 'プレゼン・議事録', color: 'purple' },
    { id: '分析・リサーチ', label: '分析・リサーチ', iconName: 'BarChart3', description: '競合分析・顧客調査', color: 'emerald' },
    { id: '業務効率化', label: '業務効率化', iconName: 'Zap', description: '契約書・Excel', color: 'amber' },
    { id: 'マーケティング', label: 'マーケティング', iconName: 'Target', description: 'LP・価格・配信設計', color: 'rose' },
    { id: 'SEO・広告', label: 'SEO・広告', iconName: 'Search', description: 'SEO診断・広告運用', color: 'cyan' },
    { id: '顧客対応', label: '顧客対応', iconName: 'Headphones', description: 'クレーム対応', color: 'orange' },
];
