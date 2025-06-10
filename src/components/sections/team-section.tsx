import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl: string;
  dataAiHint: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alex Johnson',
    role: 'Community Lead',
    imageUrl: 'https://placehold.co/400x400.png',
    linkedinUrl: 'https://linkedin.com/in/alexjohnson',
    dataAiHint: 'professional portrait',
  },
  {
    name: 'Maria Garcia',
    role: 'Events Coordinator',
    imageUrl: 'https://placehold.co/400x400.png',
    linkedinUrl: 'https://linkedin.com/in/mariagarcia',
    dataAiHint: 'professional photo',
  },
  {
    name: 'David Kim',
    role: 'Tech Lead',
    imageUrl: 'https://placehold.co/400x400.png',
    linkedinUrl: 'https://linkedin.com/in/davidkim',
    dataAiHint: 'developer portrait',
  },
  {
    name: 'Sophia Chen',
    role: 'Marketing Specialist',
    imageUrl: 'https://placehold.co/400x400.png',
    linkedinUrl: 'https://linkedin.com/in/sophiachen',
    dataAiHint: 'marketing professional',
  },
  {
    name: 'Michael Brown',
    role: 'Outreach Officer',
    imageUrl: 'https://placehold.co/400x400.png',
    linkedinUrl: 'https://linkedin.com/in/michaelbrown',
    dataAiHint: 'community manager',
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="rounded-t-lg object-cover aspect-square"
                  data-ai-hint={member.dataAiHint}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="font-headline text-xl mt-2">{member.name}</CardTitle>
                <p className="text-sm text-primary mt-1">{member.role}</p>
              </CardContent>
              <CardFooter className="flex justify-center pb-4">
                <Link
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
