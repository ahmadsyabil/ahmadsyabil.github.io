'use client';

import { useMemo, useState } from 'react';
import { PROJECT_CATEGORIES, projects, type ProjectCategory } from '@/lib/data';
import ArchiveCard from './ArchiveCard';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

type Filter = ProjectCategory | 'All';

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All');

  const featured = useMemo(() => projects.filter((p) => p.featured), []);
  const archive = useMemo(() => projects.filter((p) => !p.featured), []);

  /* Only offer filters that actually match something in the archive. */
  const filters = useMemo<Filter[]>(() => {
    const present = PROJECT_CATEGORIES.filter((c) => archive.some((p) => p.category === c));
    return ['All', ...present];
  }, [archive]);

  const shownCount = useMemo(
    () => (filter === 'All' ? archive.length : archive.filter((p) => p.category === filter).length),
    [archive, filter],
  );

  /**
   * Every archive card renders. Filtering hides non-matches with CSS rather
   * than unmounting them, so all projects stay in the static HTML for search
   * engines and remain readable with JavaScript disabled.
   */

  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="work-heading"
          label="Selected Work"
          title="Things I built, and the problem each one solved."
          description="Four projects I'd put my name to first, then everything else from four years of coursework and two internships. Where a build was an academic prototype rather than a production system, I say so."
        />

        {/* -------------------- Featured -------------------- */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 90} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* -------------------- Archive -------------------- */}
        <div className="mt-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
              <div>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">Project archive</h3>
                <p className="mt-1 text-sm text-muted">
                  {archive.length} more projects across the degree and diploma.
                </p>
              </div>
              <p className="font-mono text-xs text-faint" aria-live="polite">
                {shownCount} shown
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div
              role="group"
              aria-label="Filter projects by category"
              className="mt-6 flex flex-wrap gap-2"
            >
              {filters.map((option) => {
                const isActive = filter === option;
                const count =
                  option === 'All'
                    ? archive.length
                    : archive.filter((p) => p.category === option).length;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFilter(option)}
                    aria-pressed={isActive}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-smooth ${
                      isActive
                        ? 'border-transparent bg-gradient-to-r from-accent to-accent2 text-white shadow-[0_8px_24px_-10px_rgb(var(--accent)/0.9)]'
                        : 'border-line bg-surface text-muted hover:-translate-y-0.5 hover:border-accent/50 hover:text-ink'
                    }`}
                  >
                    {option}
                    <span className={`font-mono text-[11px] ${isActive ? 'text-white/70' : 'text-faint'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((project, i) => {
              const shown = filter === 'All' || project.category === filter;
              return (
                <Reveal
                  key={project.slug}
                  delay={(i % 3) * 70}
                  className={shown ? 'h-full' : 'hidden'}
                >
                  <ArchiveCard project={project} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
