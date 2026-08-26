import { BrainCircuit, Code2, Database, Layers, type LucideIcon } from 'lucide-react';
import { about, skillGroups } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const ICONS: Record<string, LucideIcon> = { Code2, Layers, BrainCircuit, Database };

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="about-heading"
          label="About"
          title={about.headline}
          description="A short version of who I am and what I reach for when I open an editor."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          {/* Bio */}
          <div className="space-y-5">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-pretty text-base leading-[1.75] text-muted">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={about.paragraphs.length * 90}>
              <blockquote className="mt-8 rounded-2xl border-l-2 border-accent bg-elevated/70 px-5 py-4">
                <p className="text-pretty text-sm italic leading-relaxed text-muted">
                  &ldquo;Understanding the problem properly is most of the work. The code is what&rsquo;s
                  left over.&rdquo;
                </p>
              </blockquote>
            </Reveal>
          </div>

          {/* Skills grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, i) => {
              const Icon = ICONS[group.icon] ?? Code2;
              return (
                <Reveal key={group.title} delay={i * 90}>
                  <article className="card card-hover group h-full">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-line bg-elevated text-accent transition-colors duration-300 group-hover:border-accent/50"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <h3 className="text-sm font-semibold tracking-tight text-ink">
                        {group.title}
                      </h3>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <li key={skill} className="tag group-hover:border-accent/30">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
