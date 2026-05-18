import type { Metadata } from 'next';
import Link from 'next/link';
import { HomeBack } from '@/components/home-back';
import { Icon, type IconName } from '@/components/icons';
import { PageBanner } from '@/components/page-banner';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = { title: 'Contact', description: 'Connect with Chethan Puttegowda on LinkedIn, GitHub, or email.' };

const contacts: Array<{ label: string; value: string; href: string; icon: IconName; note: string }> = [
  { label: 'LinkedIn', value: 'chethanp11', href: siteConfig.links.linkedin, icon: 'linkedin', note: 'Professional updates and conversations' },
  { label: 'GitHub', value: 'chethanp11', href: siteConfig.links.github, icon: 'github', note: 'Projects, experiments, and technical work' },
  { label: 'Email', value: siteConfig.links.emailAddress, href: siteConfig.links.email, icon: 'email', note: 'Direct contact for collaboration or opportunities' }
];

export default function ContactPage() {
  return <>
    <HomeBack />
    <PageBanner tone="contact" eyebrow="Contact" title="Connect for ideas, collaboration, or professional conversations" description="For technology leadership, AI and analytics work, writing, learning initiatives, or professional opportunities, these are the best ways to reach me." />
    <section className="mx-auto max-w-content px-5 py-14 sm:py-16">
      <div className="grid gap-4 md:grid-cols-3">
        {contacts.map((contact) => (
          <Link key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-brand-copper/20 bg-white/80 p-6 shadow-sm shadow-ink-900/5 transition duration-300 hover:-translate-y-1 hover:border-brand-copper/60 hover:bg-brand-navy hover:text-white hover:shadow-xl hover:shadow-brand-navy/10 dark:border-ink-800 dark:bg-ink-900/45 dark:text-white dark:hover:bg-brand-sand dark:hover:text-ink-950">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-sand text-brand-navy transition group-hover:bg-white/15 group-hover:text-white dark:bg-ink-950 dark:text-brand-sand dark:group-hover:bg-ink-950/10 dark:group-hover:text-ink-950">
              <Icon name={contact.icon} />
            </span>
            <span className="mt-5 block text-xl font-semibold">{contact.label}</span>
            <span className="mt-2 block break-words text-sm font-semibold opacity-90">{contact.value}</span>
            <span className="mt-4 block text-sm leading-6 opacity-75">{contact.note}</span>
          </Link>
        ))}
      </div>
    </section>
  </>;
}
