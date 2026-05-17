import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-ink-50/60 dark:border-ink-800 dark:bg-ink-950">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-5 py-10 text-sm text-ink-600 dark:text-ink-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.author}. Enterprise AI, analytics, and knowledge systems.</p>
        <div className="flex gap-4">
          <Link href={siteConfig.links.linkedin}>LinkedIn</Link>
          <Link href={siteConfig.links.github}>GitHub</Link>
          <Link href={siteConfig.links.email}>Email</Link>
        </div>
      </div>
    </footer>
  );
}
