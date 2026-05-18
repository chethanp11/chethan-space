import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { MobileNav } from './mobile-nav';
import { NavLinks } from './nav-links';
import { Icon } from './icons';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-copper/20 bg-brand-ivory/85 shadow-sm shadow-brand-navy/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4">
        <Link href="/" className="group inline-flex items-center gap-2 font-semibold tracking-tight text-brand-navy">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-brand-navy text-white shadow-sm shadow-brand-navy/25 transition group-hover:bg-brand-blue">
            <Icon name="spark" className="h-4 w-4" />
          </span>
          <span>{siteConfig.author}</span>
        </Link>
        <NavLinks />
        <div className="flex items-center gap-3">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
