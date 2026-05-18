'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/site';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-2 text-sm text-ink-700 dark:text-ink-300 md:flex">
      {navItems.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={`rounded-full px-3 py-2 font-medium transition ${
              active
                ? 'bg-brand-navy text-white shadow-sm shadow-brand-navy/20 dark:bg-brand-sand dark:text-ink-950'
                : 'hover:bg-brand-sand hover:text-brand-navy dark:hover:bg-ink-800 dark:hover:text-white'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
