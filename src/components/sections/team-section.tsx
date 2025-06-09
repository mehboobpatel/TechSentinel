import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'Lead Organizer',
    imageUrl: 'https://placehold.co/400x400.png',
    linkedinUrl: 'https://linkedin.com',
    twitterUrl: 'https://twitter.com'
  },
  {
    name: 'Jane Smith',
    role: 'Technical Lead',
    imageUrl: 'https://placehold.co/400x400.png',
    linkedinUrl: 'https://linkedin.com',
    twitterUrl: 'https://twitter.com'
  },
  {
    name: 'Mike Johnson',
    role: 'Community Manager',
    imageUrl: 'https://placehold.co/400x400.png',
    linkedinUrl: 'https://linkedin.com',
    twitterUrl: 'https://twitter.com'
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-kubePurple/20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-white">
            Our lineup of big thinkers and even bigger doers
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
            At TechSentinals, we believe in the power of community and shared learning. We're not just a group of tech enthusiasts; we're a family of learners, teachers, and innovators who help each other grow. Every member brings unique perspectives and experiences that enrich our community.
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Join our team to start your journey of helping and growing together with the community. Together, we can make a difference in the tech world. And Our Core Team is:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-background/50 backdrop-blur-sm border-border/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.imageUrl}
                    alt={`${member.name}'s photo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-headline text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-white/70 mb-4">{member.role}</p>
                <div className="flex gap-4">
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-kubePurple transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-kubePurple transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
