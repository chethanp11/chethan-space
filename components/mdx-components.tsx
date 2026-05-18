import type { ComponentProps } from 'react';

export function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <aside className="my-8 rounded-2xl border border-ink-200 bg-ink-50 p-5">
      {title ? <p className="mb-2 font-semibold text-ink-950">{title}</p> : null}
      <div className="text-ink-700">{children}</div>
    </aside>
  );
}

export const mdxComponents = {
  Callout,
  a: (props: ComponentProps<'a'>) => <a className="rounded px-1 transition hover:bg-brand-sky hover:text-brand-navy" target="_blank" rel="noopener noreferrer" {...props} />,
  h2: (props: ComponentProps<'h2'>) => <h2 className="scroll-mt-24" {...props} />,
  h3: (props: ComponentProps<'h3'>) => <h3 className="scroll-mt-24" {...props} />
};
