import type { Metadata } from 'next';
import { ContentIndex } from '@/components/content-index';
import { HomeBack } from '@/components/home-back';
import { PageBanner } from '@/components/page-banner';
import { getCollection } from '@/lib/content';

export const metadata: Metadata = { title: 'Thoughts', description: 'Professional thoughts on technology leadership, AI, analytics, governance, and systems thinking.' };

export default function InsightsPage() {
  return <>
    <HomeBack />
    <PageBanner tone="writing" eyebrow="Thoughts" title="Strategic perspectives on AI, analytics, governance, and enterprise transformation" description="Practical essays for leaders and builders working through responsible AI adoption, analytics modernization, financial-crimes controls, and knowledge-system design." />
    <section className="mx-auto max-w-content px-5 py-14 sm:py-16">
      <ContentIndex items={getCollection('insights')} basePath="/insights" />
    </section>
  </>;
}
