'use client';

import { useMemo, useState } from 'react';
import type { ContentMeta } from '@/lib/content';
import { ContentCard } from './cards';

export function ContentIndex({ items, basePath }: { items: ContentMeta[]; basePath: string }) {
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
      <div className="mb-8 grid gap-4 rounded-2xl border border-brand-copper/20 bg-brand-sand/45 p-4 md:grid-cols-[1fr_auto]">
        <label htmlFor="content-search" className="sr-only">Search content</label>
        <input
          id="content-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by topic, tag, or architecture pattern..."
          className="rounded-xl border border-brand-copper/25 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
        />
        <label htmlFor="content-category" className="sr-only">Filter by category</label>
        <select
          id="content-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-xl border border-brand-copper/25 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
        >
          {categories.map((entry) => <option key={entry}>{entry}</option>)}
        </select>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((item) => <ContentCard key={item.slug} item={item} href={`${basePath}/${item.slug}`} />)}
      </div>
      <p className="sr-only" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'result' : 'results'} found.</p>
      {filtered.length === 0 ? <p className="text-ink-600">No matching content found.</p> : null}
    </div>
  );
}
