import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/lib/data';

/** Compact card for the archive grid — denser than the featured cards. */
export default function ArchiveCard({ project }: { project: Project }) {
  return (
    <article className="card card-hover group flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="tag border-accent/25 text-accent">{project.category}</span>
        <span className="shrink-0 font-mono text-[11px] text-faint">{project.year}</span>
      </div>

      <h3 className="mt-3 text-balance text-base font-semibold leading-snug tracking-tight text-ink">
        {project.title}
      </h3>
      <p className="mt-1 text-xs text-faint">{project.context}</p>

      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">{project.solution}</p>

      {project.highlights.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2 text-[13px] leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
              <span className="text-pretty">{point}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {project.stack.map((tech) => (
          <li key={tech} className="tag group-hover:border-accent/30">
            {tech}
          </li>
        ))}
      </ul>

      {(project.github || project.demo) && (
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-ink transition-colors hover:text-accent"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              Source<span className="sr-only"> for {project.title}</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-ink transition-colors hover:text-accent"
            >
              Live demo<span className="sr-only"> of {project.title}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
