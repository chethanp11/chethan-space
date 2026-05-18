import Link from 'next/link';

export function HomeBack() {
  return (
    <div className="mx-auto max-w-content px-5 pt-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-brand-copper/25 bg-white/70 px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm shadow-ink-900/5 transition hover:border-brand-copper/60 hover:bg-white dark:border-ink-800 dark:bg-ink-900/50 dark:text-ink-100"
      >
        <span aria-hidden="true">←</span>
        Back to Home
      </Link>
    </div>
  );
}
