import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { navLinks, site } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold tracking-tight text-ink">{site.fullName}</p>
            <p className="mt-1 text-xs text-faint">
              © {new Date().getFullYear()} · Built with Next.js, TypeScript and Tailwind CSS
            </p>
          </div>

          <nav aria-label="Footer" className="no-print">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="no-print flex items-center gap-2">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label={`Email ${site.name}`}
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Message me on WhatsApp, @${site.whatsapp.username}`}
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
