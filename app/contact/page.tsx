import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/section';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = { title: 'Contact', description: 'Connect with Chethan on LinkedIn, GitHub, or email.' };

export default function ContactPage() {
  return <Section eyebrow="Contact" title="Connect around enterprise AI, analytics, and intelligent systems." description="For collaboration, writing, architecture discussions, or professional opportunities, use the channels below."><div className="grid gap-4 md:grid-cols-3">{[['LinkedIn', siteConfig.links.linkedin], ['GitHub', siteConfig.links.github], ['Email', siteConfig.links.email]].map(([label, href]) => <Link key={label} href={href} className="rounded-2xl border border-ink-200 p-6 text-xl font-semibold dark:border-ink-800">{label}</Link>)}</div></Section>;
}
