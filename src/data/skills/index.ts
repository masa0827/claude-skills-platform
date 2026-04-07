import { Skill } from '@/lib/types';
import { skills as existingSkills } from './existing';
import { writingNewSkills } from './writing-new';
import { documentsNewSkills } from './documents-new';
import { analysisNewSkills } from './analysis-new';
import { efficiencyNewSkills } from './efficiency-new';
import { marketingNewSkills } from './marketing-new';
import { salesSkills } from './sales';
import { snsSkills } from './sns';
import { accountingSkills } from './accounting';
import { marketingAdditionSkills } from './marketing-additions';
import { csSalesAdditionSkills } from './cs-sales-additions';
import { claudeCodeSkills } from './claude-code-skills';

export const skills: Skill[] = [
    ...existingSkills,
    ...writingNewSkills,
    ...documentsNewSkills,
    ...analysisNewSkills,
    ...efficiencyNewSkills,
    ...marketingNewSkills,
    ...salesSkills,
    ...snsSkills,
    ...accountingSkills,
    ...marketingAdditionSkills,
    ...csSalesAdditionSkills,
    ...claudeCodeSkills,
];
