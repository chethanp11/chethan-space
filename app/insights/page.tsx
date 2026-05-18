import type { Metadata } from 'next';
import { ContentIndex } from '@/components/content-index';
import { HomeBack } from '@/components/home-back';
import { PageBanner } from '@/components/page-banner';
import { getCollection } from '@/lib/content';

export const metadata: Metadata = { title: 'Writing', description: 'Professional writing on technology leadership, AI, analytics, governance, and systems thinking.' };

export default function InsightsPage() {
  return <>
    <HomeBack />
    <PageBanner tone="writing" eyebrow="Writing" title="Notes on technology, work, and systems" description="Essays, architecture notes, implementation insights, and reflections for colleagues and professional networks." />
    <section className="mx-auto max-w-content px-5 py-14 sm:py-16">
      <ContentIndex items={getCollection('insights')} basePath="/insights" />
    </section>
  </>;
}
