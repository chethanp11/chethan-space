import Image from 'next/image';
import Link from 'next/link';
import type { ContentMeta } from '@/lib/content';
import { formatDate } from '@/lib/format';
import { Icon } from './icons';

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full border border-brand-copper/25 bg-brand-sand/40 px-2.5 py-1 text-xs text-brand-navy">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function ContentCard({ item, href }: { item: ContentMeta; href: string }) {
  const featureImage = item.featureImage ?? item.coverImage;

  return (
    <Link href={href} className="group relative block overflow-hidden rounded-3xl border border-brand-copper/20 bg-white/80 p-6 shadow-sm shadow-ink-900/5 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-brand-sky/80 hover:shadow-xl hover:shadow-brand-navy/10">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-br from-brand-blue/10 to-brand-copper/15 transition group-hover:scale-125" />
      {featureImage ? (
        <Image
          src={featureImage}
          alt={item.title}
          width={1200}
          height={1200}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="relative mb-5 aspect-square w-full rounded-2xl object-cover"
        />
      ) : null}
      <div className="mb-4 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-brand-blue">
        <span>{item.category}</span>
        <span>{item.status ?? item.readingTime}</span>
      </div>
      <h3 className="relative text-xl font-semibold tracking-tight text-brand-navy">{item.title}</h3>
      <p className="mt-3 leading-7 text-ink-700">{item.summary}</p>
      <div className="mt-5"><TagList tags={item.tags} /></div>
      <div className="mt-5 flex items-center justify-between gap-4">
        {item.date ? <p className="text-sm text-brand-blue">{formatDate(item.date)} · {item.readingTime}</p> : <span />}
        <span className="grid h-9 w-9 place-items-center rounded-full border border-brand-copper/25 bg-brand-sand/60 text-brand-navy transition group-hover:bg-brand-blue group-hover:text-white">
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
