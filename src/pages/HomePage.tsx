import React from 'react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { AboutPreview } from '@/components/home/AboutPreview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { ProgramPreview } from '@/components/home/ProgramPreview';
import { DailyActivitiesPreview } from '@/components/home/DailyActivitiesPreview';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { FinalCTA } from '@/components/home/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Param Dayhome | Licensed Family Dayhome in Citadel, NW Calgary"
        description="Licensed Family Dayhome in Citadel, NW Calgary providing a safe, nurturing, Scandinavian-inspired early learning environment for children from birth to 12 years."
      />
      
      <main className="w-full">
        <HeroSection />
        <TrustBar />
        <AboutPreview />
        <WhyChooseUs />
        <ProgramPreview />
        <DailyActivitiesPreview />
        <GalleryPreview />
        <Testimonials />
        <FinalCTA />
      </main>
    </>
  );
};
