'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', enabled);
    setDark(enabled);
  }, []);

  function toggleTheme() {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('theme', next ? 'dark' : 'light');
    setDark(next);
  }

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="rounded-full border border-brand-copper/30 bg-white/60 px-3 py-1.5 text-xs font-medium text-brand-navy transition hover:border-brand-copper dark:border-ink-800 dark:text-ink-200 dark:hover:border-ink-600"
    >
      {dark ? 'Dark' : 'Light'}
    </button>
  );
}
