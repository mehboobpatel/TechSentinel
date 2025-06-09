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

const sponsors: Sponsor[] = [
  {
    name: 'WeWork',
    logoUrl: 'https://img.favpng.com/7/25/17/logo-wework-brand-font-typography-png-favpng-SQvcjkh5AdcfXbBGrp1fK8dwQ.jpg',
    websiteUrl: 'https://www.wework.com',
    category: 'Venue Partner',
    description: 'Premium coworking spaces providing modern facilities and collaborative environments for tech events and workshops'
  },
  {
    name: 'Amazon Web Services',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
    websiteUrl: 'https://aws.amazon.com',
    category: 'Technology Partner',
    description: 'World\'s leading cloud platform providing scalable, reliable, and secure cloud computing services'
  }
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-16 md:py-24 bg-kubePurple/20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Partners
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            A very big thank you to all our partners for their continued partnership.
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mt-4">
            If you're interested in being showcased throughout TechSentinals, contact{' '}
            <a 
              href="mailto:tech.sentinals@gmail.com" 
              className="text-kubePurple hover:text-kubePurple/80 transition-colors inline-flex items-center gap-1"
            >
              tech.sentinals@gmail.com
            </a>{' '}
            to discuss sponsorship opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sponsors.map((sponsor) => (
            <Card key={sponsor.name} className="bg-background/50 backdrop-blur-sm border-border/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-transparent">
                    <Image
                      src={sponsor.logoUrl}
                      alt={`${sponsor.name} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold text-white">{sponsor.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      {sponsor.category === 'Venue Partner' ? (
                        <MapPin className="h-4 w-4 text-kubePurple" />
                      ) : (
                        <Code className="h-4 w-4 text-kubePurple" />
                      )}
                      <span>{sponsor.category}</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/80">{sponsor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
