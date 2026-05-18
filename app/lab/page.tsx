import type { Metadata } from 'next';
import { ContentCard } from '@/components/cards';
import { HomeBack } from '@/components/home-back';
import { Section } from '@/components/section';
import { getCollection } from '@/lib/content';

export const metadata: Metadata = { title: 'Lab', description: 'Experimental prototypes, MVPs, demos, and small tools.' };

export default function LabPage() {
  const items = getCollection('lab');
  return <>
    <HomeBack />
    <Section eyebrow="Lab" title="Experiments and learning in public." description="A separate area for prototypes, MVPs, visual demos, small tools, and exploratory ideas before they become polished work."><div className="grid gap-5 md:grid-cols-2">{items.map((item) => <ContentCard key={item.slug} item={item} href="#" />)}</div></Section>
  </>;
}
