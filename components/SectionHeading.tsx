import type { ReactNode } from 'react';
import Reveal from './Reveal';

export default function SectionHeading({
  label,
  title,
  description,
  id,
}: {
  label: string;
  title: ReactNode;
  description?: string;
  id: string;
}) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <p className="section-label">
          <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
          {label}
        </p>
      </Reveal>
      <Reveal delay={70}>
        <h2 id={id} className="section-title">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={130}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
