import Link from 'next/link';
import { ContentItem } from '@/lib/content';
import { formatDate } from '@/lib/format';

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full border border-ink-200 px-2.5 py-1 text-xs text-ink-600 dark:border-ink-800 dark:text-ink-300">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function ContentCard({ item, href }: { item: ContentItem; href: string }) {
  return (
    <Link href={href} className="group block rounded-2xl border border-ink-200 bg-white p-6 transition hover:border-ink-400 dark:border-ink-800 dark:bg-ink-900/40 dark:hover:border-ink-600">
      <div className="mb-4 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
        <span>{item.category}</span>
        <span>{item.status ?? item.readingTime}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-ink-950 group-hover:underline dark:text-white">{item.title}</h3>
      <p className="mt-3 leading-7 text-ink-600 dark:text-ink-300">{item.summary}</p>
      <div className="mt-5"><TagList tags={item.tags} /></div>
      {item.date ? <p className="mt-5 text-sm text-ink-500 dark:text-ink-400">{formatDate(item.date)} · {item.readingTime}</p> : null}
    </Link>
  );
}
