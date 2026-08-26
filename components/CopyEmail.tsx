'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { site } from '@/lib/data';

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      /* Older browsers / insecure origins: fall back to a hidden selection copy. */
      const el = document.createElement('textarea');
      el.value = site.email;
      el.setAttribute('readonly', '');
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand('copy');
      } catch {
        return;
      } finally {
        document.body.removeChild(el);
      }
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href={`mailto:${site.email}`}
        className="text-balance break-all text-xl font-semibold tracking-tight text-ink transition-colors hover:text-accent sm:text-2xl"
      >
        {site.email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
        aria-label={`Copy email address ${site.email} to clipboard`}
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
        ) : (
          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
        )}
        {copied ? 'Copied' : 'Copy'}
      </button>
      {/* Announce the result without moving focus. */}
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </div>
  );
}
