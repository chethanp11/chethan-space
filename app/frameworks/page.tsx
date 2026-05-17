import type { Metadata } from 'next';
import { ContentCard } from '@/components/cards';
import { Section } from '@/components/section';
import { getCollection } from '@/lib/content';

export const metadata: Metadata = { title: 'Frameworks', description: 'Reusable frameworks and concepts for enterprise AI and analytics systems.' };

export default function FrameworksPage() {
  const frameworks = getCollection('frameworks');
  return <Section eyebrow="Frameworks" title="Reusable concepts and operating models." description="V1 placeholder for framework documentation, technical whitepaper summaries, and product strategy pages."><div className="grid gap-5 md:grid-cols-2">{frameworks.map((item) => <ContentCard key={item.slug} item={item} href="#" />)}</div></Section>;
}
