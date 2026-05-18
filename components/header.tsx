import Link from 'next/link';
import { navItems, siteConfig } from '@/lib/site';
import { ThemeToggle } from './theme-toggle';
import { MobileNav } from './mobile-nav';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-copper/20 bg-brand-ivory/90 backdrop-blur dark:border-ink-800/80 dark:bg-ink-950/85">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4">
        <Link href="/" className="font-semibold tracking-tight text-brand-navy dark:text-white">
          {siteConfig.author}
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-ink-700 dark:text-ink-300 lg:gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-blue dark:hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:block"><ThemeToggle /></div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
