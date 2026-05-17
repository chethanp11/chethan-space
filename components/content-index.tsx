'use client';

import { useMemo, useState } from 'react';
import { ContentItem } from '@/lib/content';
import { ContentCard } from './cards';

export function ContentIndex({ items, basePath }: { items: ContentItem[]; basePath: string }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(() => ['All', ...Array.from(new Set(items.map((item) => item.category)))], [items]);
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return items.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category;
      const haystack = [item.title, item.summary, item.category, ...item.tags].join(' ').toLowerCase();
      return matchesCategory && haystack.includes(q);
    });
  }, [category, items, query]);

  return (
    <div>
      <div className="mb-8 grid gap-4 rounded-2xl border border-ink-200 bg-ink-50 p-4 dark:border-ink-800 dark:bg-ink-900/40 md:grid-cols-[1fr_auto]">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by topic, tag, or architecture pattern..."
          className="rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-ink-500 dark:border-ink-800 dark:bg-ink-950 dark:text-white"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-ink-500 dark:border-ink-800 dark:bg-ink-950 dark:text-white"
        >
          {categories.map((entry) => <option key={entry}>{entry}</option>)}
        </select>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((item) => <ContentCard key={item.slug} item={item} href={`${basePath}/${item.slug}`} />)}
      </div>
      {filtered.length === 0 ? <p className="text-ink-600 dark:text-ink-300">No matching content found.</p> : null}
    </div>
  );
}
