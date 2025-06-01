"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [changingText, setChangingText] = useState('Cloud');
  const texts = ['Cloud', 'Devops', 'Artificial Intelligence', 'Cybersecurity'];

  useEffect(() => {
    const interval = setInterval(() => {
      setChangingText((prev) => {
        const currentIndex = texts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center md:justify-center animate-fadeIn">
            <Image
              src="/assets/img.jpeg"
              alt="Tech Conference"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="text-center md:text-left animate-slideUp">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Join us in learning</span>
              <br />
              <span className="text-gradient-blue-purple">{changingText}</span>
              <br />
              <span className="text-white">with TechSentinals</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Your gateway to innovation, collaboration, and the future of technology. Join our community of passionate learners and builders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="transition-transform hover:scale-105 bg-kubePurple hover:bg-kubePurple text-white">
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
