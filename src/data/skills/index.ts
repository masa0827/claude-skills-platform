import { Skill } from '@/lib/types';
import { skills as existingSkills } from './existing';
import { writingNewSkills } from './writing-new';
import { documentsNewSkills } from './documents-new';
import { analysisNewSkills } from './analysis-new';
import { efficiencyNewSkills } from './efficiency-new';
import { marketingNewSkills } from './marketing-new';
import { seoAdsNewSkills } from './seo-ads-new';
import { customerNewSkills } from './customer-new';
import { salesSkills } from './sales';
import { snsSkills } from './sns';
import { accountingSkills } from './accounting';

export const skills: Skill[] = [
    ...existingSkills,
    ...writingNewSkills,
    ...documentsNewSkills,
    ...analysisNewSkills,
    ...efficiencyNewSkills,
    ...marketingNewSkills,
    ...seoAdsNewSkills,
    ...customerNewSkills,
    ...salesSkills,
    ...snsSkills,
    ...accountingSkills,
];
