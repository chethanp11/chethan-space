import type { Metadata } from 'next';
import { ContentIndex } from '@/components/content-index';
import { HomeBack } from '@/components/home-back';
import { Section } from '@/components/section';
import { getCollection } from '@/lib/content';

export const metadata: Metadata = { title: 'Writing', description: 'Professional writing on technology leadership, AI, analytics, governance, and systems thinking.' };

export default function InsightsPage() {
  return <>
    <HomeBack />
    <Section eyebrow="Writing" title="Notes on technology, work, and systems." description="Essays, architecture notes, implementation insights, and personal reflections designed for colleagues and professional networks."><ContentIndex items={getCollection('insights')} basePath="/insights" /></Section>
  </>;
}
