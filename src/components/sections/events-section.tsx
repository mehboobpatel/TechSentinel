import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  type: 'Workshop' | 'Talk' | 'Hackathon' | 'Meetup' | 'Conference';
}

const events: Event[] = [
  {
    title: 'Cloud Native Workshop',
    description: 'Learn about containerization, Kubernetes, and cloud-native development practices.',
    date: 'March 15, 2024',
    time: '10:00 AM - 4:00 PM',
    venue: 'Tech Hub, Downtown',
    type: 'Workshop'
  },
  {
    title: 'AI & ML Summit',
    description: 'Explore the latest developments in artificial intelligence and machine learning.',
    date: 'April 5, 2024',
    time: '9:00 AM - 5:00 PM',
    venue: 'Innovation Center',
    type: 'Conference'
  },
  {
    title: 'DevOps Hackathon',
    description: 'Build and deploy applications using modern DevOps practices and tools.',
    date: 'May 1, 2024',
    time: '24 Hours',
    venue: 'Coding Space',
    type: 'Hackathon'
  }
];

export function EventsSection() {
  return (
    <section id="events" className="py-16 md:py-24 bg-kubePurple/20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Events & Meetups
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            At sessions that span from the technical to the visionary, let's celebrate and discover what the technologies can enable: how product innovation, open source, and ML and AI can propel enterprises forward and solve the big problems that impact all of us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-headline text-2xl mb-1 text-white">{event.title}</CardTitle>
                  <Badge className="ml-2 whitespace-nowrap bg-kubePurple hover:bg-kubePurple transition-all duration-300 text-white">{event.type}</Badge>
                </div>
                <CardDescription className="text-sm text-white/70 line-clamp-3 h-[3.75rem] overflow-hidden">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2 text-sm text-white/80">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2 text-kubePurple" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-kubePurple" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-kubePurple" />
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
