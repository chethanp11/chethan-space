import type { ReactNode } from 'react';

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

export function PageBanner({ eyebrow, title, description, tone = 'about', children }: { eyebrow: string; title: string; description?: string; tone?: BannerTone; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-content px-5 pt-6">
      <div className={`relative overflow-hidden rounded-[2rem] border border-brand-copper/25 bg-gradient-to-br ${bannerStyles[tone]} p-7 shadow-sm shadow-brand-navy/10 dark:border-ink-800 dark:from-ink-900 dark:via-ink-950 dark:to-brand-navy/30 sm:p-9`}>
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(18,48,71,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(18,48,71,.12)_1px,transparent_1px)] [background-size:32px_32px] dark:opacity-15" />
        <div className="relative max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue dark:text-brand-sand">{eyebrow}</p>
          <h1 className="text-3xl font-semibold tracking-tight text-brand-navy dark:text-white sm:text-5xl">{title}</h1>
          {description ? <p className="mt-5 text-lg leading-8 text-ink-700 dark:text-ink-300">{description}</p> : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
