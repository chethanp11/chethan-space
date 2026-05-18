import type { Metadata } from 'next';
import Link from 'next/link';
import { HomeBack } from '@/components/home-back';
import { PageBanner } from '@/components/page-banner';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = { title: 'Contact', description: 'Connect with Chethan Puttegowda on LinkedIn, GitHub, or email.' };

export default function ContactPage() {
  return <>
    <HomeBack />
    <PageBanner tone="contact" eyebrow="Contact" title="Connect for ideas, collaboration, or professional conversations" description="For technology leadership, AI and analytics work, writing, learning initiatives, or professional opportunities, these are the best ways to reach me." />
    <section className="mx-auto max-w-content px-5 py-14 sm:py-16">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['LinkedIn', siteConfig.links.linkedin],
          ['GitHub', siteConfig.links.github],
          ['Email', siteConfig.links.email]
        ].map(([label, href]) => <Link key={label} href={href} className="rounded-2xl border border-brand-copper/20 bg-white/70 p-6 text-xl font-semibold text-brand-navy shadow-sm shadow-ink-900/5 transition hover:border-brand-copper/60 hover:bg-brand-navy hover:text-white dark:border-ink-800 dark:bg-ink-900/40 dark:text-white dark:hover:bg-brand-sand dark:hover:text-ink-950">{label}</Link>)}
      </div>
    </section>
  </>;
}
