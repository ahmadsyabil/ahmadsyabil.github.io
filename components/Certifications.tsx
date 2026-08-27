import { BadgeCheck, BookOpen, Cpu, Users, type LucideIcon } from 'lucide-react';
import { CERT_TIERS, certifications, type Certification } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const TIER_ICON: Record<Certification['tier'], LucideIcon> = {
  Professional: BadgeCheck,
  'Technical & AI': Cpu,
  'Academic Skills': BookOpen,
  Participation: Users,
};

const TIER_BLURB: Record<Certification['tier'], string> = {
  Professional: 'Assessed by an outside body.',
  'Technical & AI': 'Applied technical and AI sessions.',
  'Academic Skills': 'Research and communication training.',
  Participation: 'Programmes and events I attended.',
};

export default function Certifications() {
  const grouped = CERT_TIERS.map((tier) => ({
    tier,
    items: certifications.filter((c) => c.tier === tier),
  })).filter((group) => group.items.length > 0);

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="scroll-mt-24 py-24 sm:py-32"
    >
      <div className="container-page">
        <SectionHeading
          id="certifications-heading"
          label="Certifications"
          title="Credentials and training."
          description={`${certifications.length} certificates. The ones assessed by an outside body are at the top.`}
        />

        <div className="mt-14 space-y-12">
          {grouped.map((group, groupIndex) => {
            const Icon = TIER_ICON[group.tier];
            return (
              <div key={group.tier}>
                <Reveal delay={groupIndex * 60}>
                  <div className="flex items-center gap-3 border-b border-line pb-4">
                    <span
                      aria-hidden="true"
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-line bg-elevated text-accent"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold tracking-tight text-ink">
                        {group.tier}
                      </h3>
                      <p className="text-xs text-faint">{TIER_BLURB[group.tier]}</p>
                    </div>
                    <span className="ml-auto shrink-0 font-mono text-xs text-faint">
                      {group.items.length}
                    </span>
                  </div>
                </Reveal>

                <ul className="mt-5 grid gap-4 md:grid-cols-2">
                  {group.items.map((cert, i) => (
                    <Reveal as="li" key={cert.title} delay={(i % 2) * 70} className="h-full">
                      <article className="card card-hover group flex h-full flex-col p-5">
                        <h4 className="text-balance text-sm font-semibold leading-snug tracking-tight text-ink">
                          {cert.title}
                        </h4>
                        <p className="mt-2 text-pretty text-xs leading-relaxed text-muted">
                          {cert.issuer}
                        </p>
                        <p className="mt-auto pt-3 font-mono text-[11px] text-accent">{cert.date}</p>
                      </article>
                    </Reveal>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-10 text-xs text-faint">
            Original certificates available on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
