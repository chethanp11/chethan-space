import type { ReactNode } from 'react';

export function Section({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description?: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-content px-5 py-16 sm:py-20">
      <div className="mb-10 max-w-3xl">
        {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">{eyebrow}</p> : null}
        <h2 className="text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-lg leading-8 text-ink-700">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
