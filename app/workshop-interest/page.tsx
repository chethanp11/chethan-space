import type { Metadata } from 'next';
import { HomeBack } from '@/components/home-back';
import { PageBanner } from '@/components/page-banner';
import { WorkshopInterest } from '@/components/workshop-interest';
import { createPageMetadata } from '@/lib/content-metadata';

export const metadata: Metadata = createPageMetadata(
  'Workshop Interest',
  'Register interest in a practical workshop for building responsible AI projects with Codex.',
  '/workshop-interest'
);

export default function WorkshopInterestPage() {
  return (
    <>
      <HomeBack href="/beyond-work" label="Back to Beyond Work" />
      <PageBanner
        tone="beyond"
        eyebrow="10-Week Workshop"
        title="Build with Codex and practical AI tools"
        description="A hands-on mentorship program for young builders who want to learn how to use AI to design, prototype, and deliver real projects."
      />

      <section className="mx-auto max-w-2xl px-5 py-14 sm:py-16">
        <WorkshopInterest />
      </section>
    </>
  );
}
