export interface SkillExample {
  title: string;
  input: string;
  output: string;
  context?: string;
}

export interface SkillStep {
  number: number;
  title: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  iconName: string;
  author: string;
  version: string;
  content: string;
  tags: string[];
  timeSaved: string;
  difficulty: 'かんたん' | 'ふつう' | 'しっかり';
  examples: SkillExample[];
  /** AIにそのまま貼り付けて使えるプロンプトテンプレート */
  promptTemplate?: string;
  /** ステップバイステップの使い方ガイド */
  steps?: SkillStep[];
  /** こんなときに使えます（具体的なユースケース） */
  useCases?: string[];
  /** より良い結果を出すためのコツ */
  tips?: string[];
}

export type AiTool = 'chatgpt' | 'claude' | 'gemini' | 'copilot';

export interface AiToolInfo {
  id: AiTool;
  name: string;
  color: string;
}

export interface CategoryMeta {
  id: string;
  label: string;
  iconName: string;
  description: string;
  color: string;
}
