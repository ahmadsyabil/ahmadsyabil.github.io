'use client';

import { useEffect, useState } from 'react';

const TYPE_MS = 65;
const DELETE_MS = 32;
const HOLD_MS = 1900;

/** Types and deletes through a list of words. Falls back to word[0] with JS off. */
export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (!enabled || words.length === 0) return;
    const word = words[index % words.length];

    if (!deleting && text === word) {
      const hold = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(hold);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const tick = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? DELETE_MS : TYPE_MS,
    );
    return () => clearTimeout(tick);
  }, [text, deleting, index, words, enabled]);

  const display = enabled ? text : words[0] ?? '';

  return (
    <span className="inline-flex items-baseline">
      {/* Screen readers get the stable label, not the character-by-character churn. */}
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true" className="gradient-text animate-shimmer">
        {display}
      </span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.95em] w-[3px] translate-y-[0.08em] rounded-full bg-accent animate-blink"
      />
    </span>
  );
}
