import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-headline text-xl font-bold text-white">
            TechSentinals
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="nav-link text-white/70 hover:text-white">
              About
            </Link>
            <Link href="#events" className="nav-link text-white/70 hover:text-white">
              Events
            </Link>
            <Link href="#team" className="nav-link text-white/70 hover:text-white">
              Team
            </Link>
            <Link href="#sponsors" className="nav-link text-white/70 hover:text-white">
              Partners
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 