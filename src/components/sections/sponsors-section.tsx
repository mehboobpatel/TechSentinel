import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Code } from 'lucide-react';

interface Sponsor {
  name: string;
  logoUrl: string;
  websiteUrl: string;
  category: 'Venue Partner' | 'Technology Partner';
  description: string;
}

// const sponsors: Sponsor[] = [
//   {
//     name: 'WeWork',
//     logoUrl: 'https://img.favpng.com/7/25/17/logo-wework-brand-font-typography-png-favpng-SQvcjkh5AdcfXbBGrp1fK8dwQ.jpg',
//     websiteUrl: 'https://www.wework.com',
//     category: 'Venue Partner',
//     description: 'Premium coworking spaces providing modern facilities and collaborative environments for tech events and workshops'
//   },
//   {
//     name: 'Amazon Web Services',
//     logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
//     websiteUrl: 'https://aws.amazon.com',
//     category: 'Technology Partner',
//     description: 'World\'s leading cloud platform providing scalable, reliable, and secure cloud computing services'
//   }
// ];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-16 md:py-24 bg-kubePurple/20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Partners
          </h2>
          <div className="text-lg text-white/80 max-w-3xl mx-auto space-y-6">
            <p>We're in the early stages of our journey and haven't formalized any partnerships yet.</p>
            <p>However, we're actively seeking collaboration with tech companies, educational institutions, co-working spaces, developer groups, and sponsors who align with our mission:<br/>
            <b>Making tech learning accessible, practical, and community-driven for students, freshers, and early professionals.</b></p>
            <p>Interested in partnering or supporting our upcoming events?<br/>
            Reach out to us at <a href="mailto:reach@techsentinels.in" className="text-kubePurple hover:text-kubePurple/80 transition-colors inline-flex items-center gap-1">reach@techsentinels.in</a>.</p>
            <p>Let's build this movement together.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
