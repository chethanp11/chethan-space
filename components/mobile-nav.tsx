'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navItems } from '@/lib/site';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-brand-copper/30 bg-white/70 px-3 py-2 text-sm font-semibold text-brand-navy dark:border-ink-700 dark:bg-ink-900/70 dark:text-white"
      >
        {open ? 'Close' : 'Menu'}
      </button>
      {open ? (
        <div id="mobile-navigation" className="absolute left-4 right-4 top-[4.5rem] rounded-3xl border border-brand-copper/25 bg-brand-ivory/98 p-4 shadow-xl shadow-brand-navy/15 backdrop-blur dark:border-ink-800 dark:bg-ink-950/98">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-ink-800 transition hover:bg-brand-sand dark:text-ink-100 dark:hover:bg-ink-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
