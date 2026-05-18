import type { Metadata } from 'next';
import { ContentCard } from '@/components/cards';
import { HomeBack } from '@/components/home-back';
import { Section } from '@/components/section';
import { getCollection } from '@/lib/content';

export const metadata: Metadata = { title: 'Frameworks', description: 'Reusable frameworks, mental models, and operating concepts from Chethan.' };

export default function FrameworksPage() {
  const frameworks = getCollection('frameworks');
  return <>
    <HomeBack />
    <Section eyebrow="Frameworks" title="Reusable ways of thinking." description="A home for practical frameworks, operating models, product strategy notes, and technical whitepaper summaries."><div className="grid gap-5 md:grid-cols-2">{frameworks.map((item) => <ContentCard key={item.slug} item={item} href="#" />)}</div></Section>
  </>;
}
