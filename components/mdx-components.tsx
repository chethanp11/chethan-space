import type { ComponentProps } from 'react';

export function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <aside className="my-8 rounded-2xl border border-ink-200 bg-ink-50 p-5 dark:border-ink-800 dark:bg-ink-900/50">
      {title ? <p className="mb-2 font-semibold text-ink-950 dark:text-white">{title}</p> : null}
      <div className="text-ink-700 dark:text-ink-300">{children}</div>
    </aside>
  );
}

export const mdxComponents = {
  Callout,
  h2: (props: ComponentProps<'h2'>) => <h2 className="scroll-mt-24" {...props} />,
  h3: (props: ComponentProps<'h3'>) => <h3 className="scroll-mt-24" {...props} />
};
