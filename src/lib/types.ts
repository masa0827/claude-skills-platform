export interface SkillExample {
  title: string;
  input: string;
  output: string;
  context?: string;
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
}
