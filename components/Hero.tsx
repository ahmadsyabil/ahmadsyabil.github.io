import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { heroStats, rotatingRoles, site } from '@/lib/data';
import AuroraBackground from './AuroraBackground';
import Reveal from './Reveal';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] items-center pt-28 pb-20 sm:pt-32"
    >
      <AuroraBackground />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
          {/* ---------------- Copy ---------------- */}
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 font-mono text-xs text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for full-time roles
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1
                id="hero-heading"
                className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl 3xl:text-7xl"
              >
                I turn manual processes into software people{' '}
                <span className="gradient-text animate-shimmer">actually use.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-lg font-medium text-muted sm:text-xl">
                <Typewriter words={[...rotatingRoles]} />
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                Computer Science graduate with 38 weeks of internship experience in banking and
                public sector IT. I build web and mobile systems. I also train machine learning
                models and check that the numbers actually hold up.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#work" className="btn-primary animate-shimmer">
                  Explore Work
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#contact" className="btn-ghost">
                  Get in Touch
                </a>
                <a
                  href={site.resumeHref}
                  download
                  className="btn-ghost"
                  aria-label="Download my resume as a PDF"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-faint">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {site.location}
                </span>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* ---------------- Portrait ---------------- */}
          <Reveal delay={200} className="order-first lg:order-none">
            <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-[22rem]">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/25 via-accent2/20 to-transparent blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_28px_70px_-30px_rgb(0_0_0/0.6)]">
                <Image
                  src="/profile.jpg"
                  alt={`Portrait of ${site.fullName}`}
                  width={640}
                  height={800}
                  priority
                  sizes="(max-width: 640px) 76vw, (max-width: 1024px) 22rem, 22rem"
                  className="h-auto w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------------- Stats ---------------- */}
        <Reveal delay={400}>
          <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-surface px-5 py-6 text-center sm:px-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-mono text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-xs leading-snug text-faint sm:text-sm">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
