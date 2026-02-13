import { Skill } from './types';

export function generateSkillMd(skill: Skill): string {
  const escapedDescription = skill.description.replace(/"/g, '\\"');

  const frontmatter = [
    '---',
    `name: "${skill.id}"`,
    `description: "${escapedDescription}"`,
    '---',
  ].join('\n');

  return frontmatter + '\n\n' + skill.content + '\n';
}
