import type { Metadata } from 'next';
import { ContentIndex } from '@/components/content-index';
import { HomeBack } from '@/components/home-back';
import { PageBanner } from '@/components/page-banner';
import { getCollectionMeta } from '@/lib/content';
import { createPageMetadata } from '@/lib/content-metadata';

export const metadata: Metadata = createPageMetadata(
  'Thoughts',
  'Professional thoughts on technology leadership, AI, analytics, governance, and systems thinking.',
  '/insights'
);

export default function InsightsPage() {
  return <>
    <HomeBack />
    <PageBanner tone="writing" eyebrow="Thoughts" title="Strategic perspectives on AI, analytics, governance, and enterprise transformation" description="Practical essays for leaders and builders working through responsible AI adoption, analytics modernization, financial-crimes controls, and knowledge-system design." />
    <section className="mx-auto max-w-content px-5 py-14 sm:py-16">
      <ContentIndex items={getCollectionMeta('insights')} basePath="/insights" />
    </section>
  </>;
}
