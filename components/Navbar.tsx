'use client';

import { useCallback, useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, site } from '@/lib/data';
import ThemeToggle from './ThemeToggle';

const SECTION_IDS = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  /* Condense the bar once the user leaves the hero. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Highlight the link for whichever section currently owns the viewport. */
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll and support Escape while the mobile sheet is open. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ease-smooth ${
          scrolled ? 'py-2.5' : 'py-4 sm:py-6'
        }`}
      >
        <div className="container-page">
          <nav
            aria-label="Primary"
            className={`flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 ease-smooth sm:px-5 ${
              scrolled
                ? 'glass shadow-[0_8px_32px_-16px_rgb(0_0_0/0.45)]'
                : 'border border-transparent bg-transparent'
            }`}
          >
            <a
              href="#top"
              onClick={close}
              className="group flex items-center gap-2.5 rounded-full text-sm font-bold tracking-tight"
            >
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 font-mono text-[13px] text-white shadow-[0_6px_18px_-6px_rgb(var(--accent)/0.9)]"
              >
                AS
              </span>
              <span className="hidden text-ink sm:inline">{site.name}</span>
            </a>

            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = active === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive ? 'text-ink' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-4 -bottom-0.5 h-px origin-center bg-gradient-to-r from-accent to-accent2 transition-transform duration-300 ease-smooth ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href={`mailto:${site.email}`}
                className="hidden rounded-full bg-gradient-to-r from-accent to-accent2 px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
              >
                Hire me
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/70 text-ink transition-colors hover:border-accent/50 md:hidden"
              >
                {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="container-page md:hidden"
      >
        <ul className="glass mt-2 space-y-1 rounded-3xl p-3 shadow-[0_18px_50px_-20px_rgb(0_0_0/0.5)]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-elevated"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${site.email}`}
              onClick={close}
              className="mt-1 block rounded-2xl bg-gradient-to-r from-accent to-accent2 px-4 py-3 text-center text-base font-semibold text-white"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
