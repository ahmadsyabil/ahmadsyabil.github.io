'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  as?: ElementType;
  /** Re-animate every time the element re-enters the viewport. */
  repeat?: boolean;
};

/**
 * IntersectionObserver-driven scroll reveal.
 *
 * Deliberately dependency-free: this is roughly 40 lines and ~0 KB of JS
 * versus ~50 KB for a full animation library, and it degrades to
 * "content is simply visible" when JS is off or reduced-motion is set.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
  repeat = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.unobserve(entry.target);
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [repeat]);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
