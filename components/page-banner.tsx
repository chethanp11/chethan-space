import type { ReactNode } from 'react';
import { Icon, type IconName } from './icons';

const bannerStyles = {
  about: 'from-brand-blue/16 via-brand-sand/70 to-brand-copper/14',
  journey: 'from-brand-navy/16 via-brand-sand/70 to-brand-blue/14',
  projects: 'from-brand-copper/18 via-brand-sand/70 to-brand-blue/12',
  writing: 'from-brand-blue/14 via-brand-sand/70 to-brand-navy/12',
  frameworks: 'from-brand-copper/16 via-brand-sand/70 to-brand-navy/10',
  lab: 'from-brand-blue/14 via-brand-sand/70 to-brand-copper/12',
  beyond: 'from-brand-sage/20 via-brand-sand/75 to-brand-copper/14',
  contact: 'from-brand-navy/14 via-brand-sand/70 to-brand-copper/14'
} as const;

type BannerTone = keyof typeof bannerStyles;

const bannerIcons: Record<BannerTone, IconName> = {
  about: 'spark',
  journey: 'briefcase',
  projects: 'systems',
  writing: 'analytics',
  frameworks: 'governance',
  lab: 'ai',
  beyond: 'farm',
  contact: 'email'
};

export function PageBanner({ eyebrow, title, description, tone = 'about', children }: { eyebrow: string; title: string; description?: string; tone?: BannerTone; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-content px-5 pt-6">
      <div className={`relative overflow-hidden rounded-[2rem] border border-brand-copper/25 bg-gradient-to-br ${bannerStyles[tone]} p-7 shadow-sm shadow-brand-navy/10 ring-1 ring-white/60 sm:p-9`}>
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(18,48,71,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(18,48,71,.12)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-brand-blue/20 blur-2xl" />
        <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-brand-copper/20 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-brand-blue via-brand-copper to-brand-sage" />
        <div className="relative max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue shadow-sm shadow-ink-900/5"><Icon name={bannerIcons[tone]} className="h-4 w-4" />{eyebrow}</p>
          <h1 className="text-3xl font-semibold tracking-tight text-brand-navy sm:text-5xl">{title}</h1>
          {description ? <p className="mt-5 text-lg leading-8 text-ink-700">{description}</p> : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
