import { ArrowUpRight, Github, Linkedin, MapPin, MessageCircle } from 'lucide-react';
import { site } from '@/lib/data';
import ContactForm from './ContactForm';
import CopyField from './CopyField';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const SOCIALS = [
  { href: site.socials.github, label: 'GitHub', handle: '@ahmadsyabil', Icon: Github },
  {
    href: site.socials.linkedin,
    label: 'LinkedIn',
    handle: 'Ahmad Syabil Nuruddin',
    Icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[90px]"
            style={{
              background:
                'radial-gradient(circle, rgb(var(--glow-b) / 0.28) 0%, transparent 70%)',
            }}
          />

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <SectionHeading
                id="contact-heading"
                label="Contact"
                title="Let's build something worth shipping."
                description="I am looking for full time software engineering and data roles in Malaysia. I am open to remote work too. Email is the fastest way to reach me."
              />

              <Reveal delay={160}>
                <div className="mt-8 space-y-6">
                  <div>
                    <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      Email
                    </p>
                    <CopyField
                      value={site.email}
                      href={`mailto:${site.email}`}
                      label="email address"
                    />
                  </div>

                  <div>
                    <p className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      <MessageCircle className="h-3 w-3" aria-hidden="true" />
                      WhatsApp
                    </p>
                    <CopyField
                      value={site.whatsapp.username}
                      display={`@${site.whatsapp.username}`}
                      href={site.whatsapp.url}
                      external
                      label="WhatsApp username"
                    />
                    <p className="mt-2 text-xs text-faint">
                      Opens a chat with me directly.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-faint">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {site.location}
                </p>
              </Reveal>

              <Reveal delay={280}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {SOCIALS.map(({ href, label, handle, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-2xl border border-line bg-elevated px-4 py-3.5 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-accent/50"
                      >
                        <Icon className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent" aria-hidden="true" />
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium text-ink">{label}</span>
                          <span className="block truncate text-xs text-faint">{handle}</span>
                        </span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-line bg-elevated/60 p-6 sm:p-8">
                <h3 className="text-sm font-semibold tracking-tight text-ink">
                  Or send a message here
                </h3>
                <p className="mb-6 mt-1 text-xs text-faint">
                  Every field is checked before anything is sent.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
