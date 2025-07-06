import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Event {
  title: string;
  description: string;
  date: string;
  venue: string;
  type: string;
}

const events: Event[] = [
  {
    title: 'The Invisible Intern: How Agentic AI Becomes Your Smartest Cloud Teammate',
    description: 'Asmita spoke at GCCD 2025, IIM Nagpur on The Invisible Intern: How Agentic AI Becomes Your Smartest Cloud Teammate.',
    date: '1st July 2025',
    venue: 'IIM Nagpur',
    type: 'Speaker Event'
  },
  {
    title: 'Building AI  agents using open source framework',
    description: 'Abhishek Mankuskar - Building AI  agents using open source frameworks',
    date: '1st July 2025',
    venue: 'IIM Nagpur',
    type: 'Speaker Event'
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
            <Card key={event.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background/50 backdrop-blur-sm ${event.type === 'Speaker Event' ? 'border-gray-500' : 'border-border/40'}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-headline text-2xl mb-1 text-white">{event.title.length > 30 ? event.title.slice(0, 30) + '...' : event.title}</CardTitle>
                  <Badge className={`ml-2 whitespace-nowrap transition-all duration-300 text-white ${event.type === 'Speaker Event' ? 'bg-gray-500 hover:bg-gray-500' : 'bg-kubePurple hover:bg-kubePurple'}`}>{event.type}</Badge>
                </div>
                <CardDescription className="text-sm text-white/70 line-clamp-3 h-[3.75rem] overflow-hidden">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2 text-sm text-white/80">
                  <div className="flex items-center">
                    <CalendarDays className={`h-4 w-4 mr-2 ${event.type === 'Speaker Event' ? 'text-gray-400' : 'text-kubePurple'}`} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className={`h-4 w-4 mr-2 ${event.type === 'Speaker Event' ? 'text-gray-400' : 'text-kubePurple'}`} />
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
