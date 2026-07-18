import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentDetail } from '@/components/content-detail';
import { getCollection, getItem } from '@/lib/content';
import { createContentMetadata } from '@/lib/content-metadata';

export function generateStaticParams() {
  return getCollection('frameworks').map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem('frameworks', slug);
  return item ? createContentMetadata(item, `/frameworks/${slug}`) : {};
}

export default async function FrameworkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem('frameworks', slug);
  if (!item) notFound();

  return <ContentDetail item={item} backHref="/projects#frameworks" backLabel="Back to Frameworks" tone="frameworks" />;
}
