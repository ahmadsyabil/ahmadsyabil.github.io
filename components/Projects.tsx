import { projects } from '@/lib/data';
import ArchiveCard from './ArchiveCard';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="work-heading"
          label="Selected Work"
          title="Things I built and the problems they solved."
          description="Four builds I would show first, then the analysis and database work behind them. If something was only an academic prototype then I say so."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 90} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {secondary.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <div className="border-b border-line pb-5">
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  Analysis and database work
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Specification, business case and data modelling rather than code.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {secondary.map((project, i) => (
                <Reveal key={project.slug} delay={(i % 2) * 80} className="h-full">
                  <ArchiveCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
