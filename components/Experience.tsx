import { Award, Briefcase, GraduationCap, type LucideIcon } from 'lucide-react';
import { timeline, type TimelineEntry } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const KIND_ICON: Record<TimelineEntry['kind'], LucideIcon> = {
  work: Briefcase,
  education: GraduationCap,
  award: Award,
};

const KIND_LABEL: Record<TimelineEntry['kind'], string> = {
  work: 'Work',
  education: 'Education',
  award: 'Achievement',
};

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 py-24 sm:py-32"
    >
      <div className="container-page">
        <SectionHeading
          id="experience-heading"
          label="Experience"
          title="The route so far."
          description="Two internships that added up to 38 weeks. A degree and a diploma before that."
        />

        <ol className="relative mt-14 space-y-2">
          {/* Spine */}
          <span
            aria-hidden="true"
            className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/60 via-line to-transparent sm:block"
          />

          {timeline.map((entry, i) => {
            const Icon = KIND_ICON[entry.kind];
            return (
              <Reveal as="li" key={`${entry.title}-${entry.period}`} delay={i * 70}>
                <div className="group relative flex gap-5 rounded-2xl p-4 transition-colors duration-300 hover:bg-surface sm:p-5">
                  <span
                    aria-hidden="true"
                    className="relative z-10 hidden h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-surface text-accent transition-all duration-300 group-hover:border-accent/60 group-hover:shadow-[0_0_0_5px_rgb(var(--accent)/0.12)] sm:grid"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <p className="font-mono text-xs tracking-tight text-accent">{entry.period}</p>
                      <span className="tag">{KIND_LABEL[entry.kind]}</span>
                    </div>
                    <h3 className="mt-2 text-balance text-base font-semibold tracking-tight text-ink sm:text-lg">
                      {entry.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-faint">{entry.org}</p>

                    {entry.points.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {entry.points.map((point) => (
                          <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                            <span
                              aria-hidden="true"
                              className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent/70"
                            />
                            <span className="text-pretty">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
