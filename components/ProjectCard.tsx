import { ArrowUpRight, Github, Lock } from 'lucide-react';
import type { Project } from '@/lib/data';

export default function ProjectCard({ project }: { project: Project }) {
  const hasLinks = Boolean(project.github || project.demo);

  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      {/* Border-glow sweep on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at 50% 0%, rgb(var(--accent) / 0.07), transparent 45%)',
        }}
      />

      <header className="relative">
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            {project.context}
          </p>
          <span className="shrink-0 font-mono text-[11px] text-faint">{project.year}</span>
        </div>
        <h3 className="mt-2.5 text-balance text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
          {project.title}
        </h3>
      </header>

      <div className="relative mt-4 space-y-3.5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Problem</p>
          <p className="mt-1 text-pretty text-sm leading-relaxed text-muted">{project.problem}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Solution</p>
          <p className="mt-1 text-pretty text-sm leading-relaxed text-muted">{project.solution}</p>
        </div>
      </div>

      {project.highlights.length > 0 && (
        <ul className="relative mt-4 space-y-1.5">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span
                aria-hidden="true"
                className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent"
              />
              <span className="text-pretty">{point}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="relative mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li key={tech} className="tag group-hover:border-accent/30">
            {tech}
          </li>
        ))}
      </ul>

      <footer className="relative mt-auto flex flex-wrap items-center gap-4 pt-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            Source
            <span className="sr-only">for {project.title}</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            Live demo
            <span className="sr-only">of {project.title}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        )}
        {!hasLinks && (
          <p className="inline-flex items-center gap-1.5 text-xs text-faint">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            Code not public — happy to walk through it on request
          </p>
        )}
      </footer>
    </article>
  );
}
