'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`group relative grid h-10 w-10 place-items-center rounded-full border border-line
                  bg-surface/70 text-muted transition-all duration-300 ease-smooth
                  hover:border-accent/50 hover:text-accent ${className}`}
    >
      {/* suppressHydrationWarning: the icon depends on a value only known client-side */}
      <span suppressHydrationWarning className="relative block h-[18px] w-[18px]">
        <Sun
          aria-hidden="true"
          className={`absolute inset-0 h-[18px] w-[18px] transition-all duration-500 ease-smooth
                      ${mounted && isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`}
        />
        <Moon
          aria-hidden="true"
          className={`absolute inset-0 h-[18px] w-[18px] transition-all duration-500 ease-smooth
                      ${mounted && !isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
        />
      </span>
    </button>
  );
}
