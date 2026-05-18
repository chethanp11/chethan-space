'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navItems } from '@/lib/site';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-medium transition ${
                    active
                      ? 'bg-brand-navy text-white dark:bg-brand-sand dark:text-ink-950'
                      : 'text-ink-800 hover:bg-brand-sand dark:text-ink-100 dark:hover:bg-ink-900'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
