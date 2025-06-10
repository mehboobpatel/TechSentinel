import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  type: 'Workshop' | 'Talk' | 'Hackathon' | 'Meetup';
}

const events: Event[] = [
  {
    title: 'Intro to Next.js 15',
    description: 'Discover the latest features in Next.js 15 and learn how to build high-performance web applications. This workshop covers App Router, Server Actions, and more.',
    date: 'August 10, 2024',
    time: '2:00 PM - 5:00 PM',
    venue: 'Online via Zoom',
    type: 'Workshop',
  },
  {
    title: 'AI in Modern Development',
    description: 'An insightful talk on how Artificial Intelligence is reshaping the development landscape. Explore tools, techniques, and future trends in AI-assisted coding.',
    date: 'August 22, 2024',
    time: '7:00 PM - 8:30 PM',
    venue: 'Tech Hub Auditorium',
    type: 'Talk',
  },
  {
    title: 'Community Hackathon: Solve for Good',
    description: 'Join our annual hackathon focused on creating tech solutions for social challenges. Collaborate with peers, build innovative projects, and win exciting prizes.',
    date: 'September 5-7, 2024',
    time: 'Fri 6 PM - Sun 6 PM',
    venue: 'Innovation Center Hall',
    type: 'Hackathon',
  },
];

export function EventsSection() {
  return (
    <section id="events" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-headline text-2xl mb-1 text-primary">{event.title}</CardTitle>
                  <Badge variant={event.type === 'Hackathon' ? 'destructive' : 'default'} className="ml-2 whitespace-nowrap bg-accent text-accent-foreground">{event.type}</Badge>
                </div>
                <CardDescription className="text-sm text-muted-foreground line-clamp-3 h-[3.75rem] overflow-hidden">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2 text-sm text-foreground/80">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-accent" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-accent" />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
