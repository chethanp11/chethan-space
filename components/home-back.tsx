import Link from 'next/link';

export function HomeBack({ href = '/', label = 'Back to Home' }: { href?: string; label?: string }) {
  return (
    <div className="mx-auto max-w-content px-5 pt-8">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full border border-brand-copper/25 bg-white/70 px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm shadow-ink-900/5 transition hover:border-brand-copper/60 hover:bg-white"
      >
        <span aria-hidden="true">←</span>
        {label}
      </Link>
    </div>
  );
}
