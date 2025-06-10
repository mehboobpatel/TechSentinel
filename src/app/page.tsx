import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutUsSection } from '@/components/sections/about-us-section';
import { WhatWeDoSection } from '@/components/sections/what-we-do-section';
import { EventsSection } from '@/components/sections/events-section';
import { SponsorsSection } from '@/components/sections/sponsors-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhatWeDoSection />
        <AboutUsSection />
        <EventsSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}
