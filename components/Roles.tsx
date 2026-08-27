import {
  ChartNoAxesColumn,
  ClipboardList,
  Code2,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { site, targetRoles } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const ICONS: Record<string, LucideIcon> = {
  Code2,
  ChartNoAxesColumn,
  Server,
  ShieldCheck,
  ClipboardList,
  Workflow,
};

export default function Roles() {
  return (
    <section id="roles" aria-labelledby="roles-heading" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="roles-heading"
          label="What I am looking for"
          title="Six tracks I am open to."
          description="My degree covered all of these and my two internships touched most of them. Each one below says what actually backs it."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {targetRoles.map((role, i) => {
            const Icon = ICONS[role.icon] ?? Code2;
            return (
              <Reveal as="li" key={role.title} delay={(i % 3) * 80} className="h-full">
                <article className="card card-hover group flex h-full flex-col">
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-elevated text-accent transition-colors duration-300 group-hover:border-accent/50"
                  >
                    <Icon className="h-[19px] w-[19px]" />
                  </span>

                  <h3 className="mt-4 text-balance text-base font-semibold tracking-tight text-ink">
                    {role.title}
                  </h3>

                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
                    {role.blurb}
                  </p>

                  <div className="mt-auto pt-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      Backed by
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {role.evidence.map((item) => (
                        <li key={item} className="tag group-hover:border-accent/30">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>

        <Reveal>
          <p className="mt-10 text-pretty text-sm text-muted">
            Based in {site.location} and open to remote work.{' '}
            <a href="#contact" className="font-medium text-accent underline-offset-4 hover:underline">
              Get in touch
            </a>{' '}
            if one of these is what you are hiring for.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
