'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Check, Copy } from 'lucide-react';

async function writeToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    /* Older browsers and insecure origins: fall back to a hidden selection. */
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    try {
      return document.execCommand('copy');
    } catch {
      return false;
    } finally {
      document.body.removeChild(el);
    }
  }
}

type CopyFieldProps = {
  /** The exact string placed on the clipboard. */
  value: string;
  /** What the visitor sees. Defaults to `value`. */
  display?: ReactNode;
  /** Wraps the display text in a link when set. */
  href?: string;
  /** Opens the link in a new tab with the usual rel hardening. */
  external?: boolean;
  /** Used in the aria-label and the live region, e.g. "email address". */
  label: string;
  className?: string;
};

export default function CopyField({
  value,
  display,
  href,
  external = false,
  label,
  className = '',
}: CopyFieldProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const copy = async () => {
    if (!(await writeToClipboard(value))) return;
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  };

  const text = display ?? value;

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      {href ? (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-balance break-all text-xl font-semibold tracking-tight text-ink transition-colors hover:text-accent sm:text-2xl"
        >
          {text}
        </a>
      ) : (
        <p className="text-balance break-all text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {text}
        </p>
      )}

      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label} to clipboard`}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
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
        {copied ? `${label} copied to clipboard` : ''}
      </span>
    </div>
  );
}
