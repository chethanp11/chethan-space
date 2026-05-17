import type { Metadata } from 'next';
import { ContentCard } from '@/components/cards';
import { Section } from '@/components/section';
import { getCollection } from '@/lib/content';

export const metadata: Metadata = { title: 'Lab', description: 'Experimental prototypes, MVPs, demos, and small tools.' };

export default function LabPage() {
  const items = getCollection('lab');
  return <Section eyebrow="Lab" title="Experimental playground." description="A separate area for prototypes, MVPs, visual demos, and exploratory tools that are not yet polished strategic work."><div className="grid gap-5 md:grid-cols-2">{items.map((item) => <ContentCard key={item.slug} item={item} href="#" />)}</div></Section>;
}
