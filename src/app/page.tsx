import { HeroSection } from '@/components/HeroSection';
import { StatsBar } from '@/components/StatsBar';
import { ProblemSection } from '@/components/ProblemSection';
import { FeaturedSkills } from '@/components/FeaturedSkills';
import { HowToSection } from '@/components/HowToSection';
import { TestimonialSection } from '@/components/TestimonialSection';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <StatsBar />
            <ProblemSection />
            <FeaturedSkills />
            <TestimonialSection />
            <HowToSection />
            <FaqSection />
            <CtaSection />
        </>
    );
}
