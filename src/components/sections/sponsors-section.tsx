import Image from 'next/image';

interface Sponsor {
  name: string;
  logoUrl: string;
  websiteUrl: string;
  dataAiHint: string;
}

const sponsors: Sponsor[] = [
  {
    name: 'GitHub',
    logoUrl: 'https://placehold.co/200x100.png', // Replace with actual logo or better placeholder if allowed
    websiteUrl: 'https://github.com',
    dataAiHint: 'github logo',
  },
  {
    name: 'Microsoft',
    logoUrl: 'https://placehold.co/200x100.png',
    websiteUrl: 'https://microsoft.com',
    dataAiHint: 'microsoft logo',
  },
  {
    name: 'Google',
    logoUrl: 'https://placehold.co/200x100.png',
    websiteUrl: 'https://google.com',
    dataAiHint: 'google logo',
  },
  {
    name: 'Innovate Corp',
    logoUrl: 'https://placehold.co/200x100.png',
    websiteUrl: '#',
    dataAiHint: 'company logo',
  },
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Our Valued Sponsors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300"
              aria-label={`Visit ${sponsor.name}`}
            >
              <Image
                src={sponsor.logoUrl}
                alt={`${sponsor.name} logo`}
                width={160}
                height={80}
                className="object-contain"
                data-ai-hint={sponsor.dataAiHint}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
