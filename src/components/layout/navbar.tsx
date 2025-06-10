import Link from 'next/link';
import { ShieldHalf, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/team', label: 'Team' },
  { href: '/#events', label: 'Events' },
  { href: '/#sponsors', label: 'Sponsors' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10 shadow-[0_4px_12px_rgba(0,0,0,0.5)] pr-10">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <ShieldHalf className="h-8 w-8 text-kubePurple" />
          <span className="font-headline text-xl font-bold">Tech Sentinel Hub</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="w-24 text-center text-foreground/70 transition-all hover:text-foreground hover:shadow-[0_0_15px_rgba(126,100,237,0.5)] hover:bg-kubePurple/10 py-2 rounded-md"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
