import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { ThemeToggle } from './theme-toggle';
import { MobileNav } from './mobile-nav';
import { NavLinks } from './nav-links';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-copper/20 bg-brand-ivory/90 backdrop-blur dark:border-ink-800/80 dark:bg-ink-950/85">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4">
        <Link href="/" className="font-semibold tracking-tight text-brand-navy dark:text-white">
          {siteConfig.author}
        </Link>
        <NavLinks />
        <div className="flex items-center gap-3">
          <div className="hidden md:block"><ThemeToggle /></div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
