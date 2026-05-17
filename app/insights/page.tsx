import type { Metadata } from 'next';
import { ContentIndex } from '@/components/content-index';
import { Section } from '@/components/section';
import { getCollection } from '@/lib/content';

export const metadata: Metadata = { title: 'Insights', description: 'Architecture memos and essays on enterprise AI, governance, context, and analytics transformation.' };

export default function InsightsPage() {
  return <Section eyebrow="Insights" title="Architecture memos for enterprise AI adoption." description="Technical essays, implementation insights, and strategy notes designed for repeat visits and LinkedIn sharing."><ContentIndex items={getCollection('insights')} basePath="/insights" /></Section>;
}
