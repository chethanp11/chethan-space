import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { Icon } from './icons';

export function Footer() {
  return (
    <footer className="border-t border-brand-copper/20 bg-brand-sand/50">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-5 py-10 text-sm text-ink-700 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.author}. Enterprise AI, analytics, and knowledge systems.</p>
        <div className="flex flex-wrap gap-3">
          {[
            ['LinkedIn', siteConfig.links.linkedin, 'linkedin'],
            ['GitHub', siteConfig.links.github, 'github'],
            [siteConfig.links.emailAddress, siteConfig.links.email, 'email']
          ].map(([label, href, icon]) => (
            <Link key={href} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-brand-copper/20 bg-white/50 px-3 py-2 font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white">
              <Icon name={icon as 'linkedin' | 'github' | 'email'} className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
