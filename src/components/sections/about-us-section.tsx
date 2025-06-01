import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Zap } from 'lucide-react';

export function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          About Tech Sentinel Hub
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Tech Sentinel Hub is a vibrant community dedicated to fostering innovation, learning, and collaboration among tech enthusiasts. We believe in the power of technology to solve real-world problems and aim to create an inclusive environment where individuals can grow their skills, network with peers, and contribute to exciting projects.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our mission is to empower the next generation of tech leaders by providing access to resources, mentorship, and hands-on experience. Whether you're a student, professional, or hobbyist, Tech Sentinel Hub is your platform to explore, create, and make an impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Users className="h-8 w-8 text-accent" />
                <CardTitle className="font-headline text-xl">Our Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A diverse group of learners, thinkers, and builders passionate about technology.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Target className="h-8 w-8 text-accent" />
                <CardTitle className="font-headline text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  To empower tech enthusiasts through education, collaboration, and innovation.
                </p>
              </CardContent>
            </Card>
             <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-1 sm:col-span-2">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Zap className="h-8 w-8 text-accent" />
                <CardTitle className="font-headline text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  To be a leading hub for technological advancement and a catalyst for positive change in the digital world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
