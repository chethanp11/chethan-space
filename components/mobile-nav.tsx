'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navItems } from '@/lib/site';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-brand-copper/30 bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm shadow-ink-900/5"
      >
        {open ? 'Close' : 'Menu'}
      </button>
      {open ? (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-[72px] z-[100] overflow-y-auto border-t border-brand-copper/20 bg-brand-ivory px-5 py-5 shadow-2xl shadow-brand-navy/20"
        >
          <nav className="mx-auto grid max-w-content gap-2">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-4 text-base font-semibold transition ${
                    active
                      ? 'bg-brand-navy text-white shadow-sm shadow-brand-navy/20'
                      : 'bg-white/80 text-ink-800 hover:bg-brand-sand hover:text-brand-navy'
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
