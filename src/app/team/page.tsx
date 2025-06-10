import { TeamSection } from '@/components/sections/team-section';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
} 