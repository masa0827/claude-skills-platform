import { Suspense } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { StatsBar } from '@/components/StatsBar';
import { FeaturedSkills } from '@/components/FeaturedSkills';
import { CategoryGrid } from '@/components/CategoryGrid';
import { HowToSection } from '@/components/HowToSection';
import { SkillListing } from '@/components/SkillListing';
import { FaqSection } from '@/components/FaqSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <StatsBar />
            <FeaturedSkills />
            <CategoryGrid />
            <HowToSection />
            <Suspense fallback={<div className="py-20 text-center text-slate-400">読み込み中...</div>}>
                <SkillListing />
            </Suspense>
            <FaqSection />
        </>
    );
}
