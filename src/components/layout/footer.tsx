import Link from 'next/link';
import { Linkedin, Instagram, MessageCircle, Mail } from 'lucide-react';

const socialLinks = [
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://whatsapp.com', icon: MessageCircle, label: 'WhatsApp' },
  { href: 'mailto:reach@techsentinl.com', icon: Mail, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto max-w-screen-xl px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <social.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tech Sentinel Hub. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          Innovate. Collaborate. Inspire.
        </p>
      </div>
    </footer>
  );
}
