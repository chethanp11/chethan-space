import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentDetail } from '@/components/content-detail';
import { getCollection, getItem } from '@/lib/content';
import { createContentMetadata } from '@/lib/content-metadata';

export function generateStaticParams() {
  return getCollection('lab').map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem('lab', slug);
  return item ? createContentMetadata(item, `/lab/${slug}`) : {};
}

export default async function LabPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem('lab', slug);
  if (!item) notFound();

  return <ContentDetail item={item} backHref="/projects#lab" backLabel="Back to Lab" tone="lab" />;
}
