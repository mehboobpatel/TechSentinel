import { ShieldHalf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start animate-fadeIn">
            <ShieldHalf className="h-48 w-48 md:h-64 md:w-64 text-primary drop-shadow-lg" />
          </div>
          <div className="text-center md:text-left animate-slideUp">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Tech Sentinel Hub
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Your gateway to innovation, collaboration, and the future of technology. Join our community of passionate learners and builders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="transition-transform hover:scale-105">
                <Link href="#events">Upcoming Events</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add basic animations to globals.css if not already present
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
// .animate-fadeIn { animation: fadeIn 1s ease-out; }
// .animate-slideUp { animation: slideUp 1s ease-out 0.3s backwards; }
// These are Tailwind utility classes already, but as a note for custom animations.
