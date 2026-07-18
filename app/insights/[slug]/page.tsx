import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { TagList } from '@/components/cards';
import { HomeBack } from '@/components/home-back';
import { mdxComponents } from '@/components/mdx-components';
import { PageBanner } from '@/components/page-banner';
import { getCollection, getItem } from '@/lib/content';
import { formatDate } from '@/lib/format';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return getCollection('insights').map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem('insights', slug);
  if (!item) return {};
  const featureImage = item.featureImage ?? item.coverImage;
  const canonicalPath = `/insights/${slug}`;
  const canonicalUrl = new URL(canonicalPath, siteConfig.url).toString();
  const featureImageUrl = featureImage ? new URL(featureImage, siteConfig.url).toString() : undefined;
  const images = featureImageUrl ? [{ url: featureImageUrl, width: 1200, height: 1200, alt: item.title, type: 'image/png' }] : undefined;

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: canonicalPath },
    openGraph: { title: item.title, description: item.summary, type: 'article', url: canonicalUrl, siteName: siteConfig.name, publishedTime: item.date, images },
    twitter: { card: 'summary_large_image', title: item.title, description: item.summary, images: featureImageUrl ? [featureImageUrl] : undefined }
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem('insights', slug);
  if (!item) notFound();
  const featureImage = item.featureImage ?? item.coverImage;
  return (
    <>
      <HomeBack href="/insights" label="Back to Thoughts" />
      <section className="mx-auto max-w-content px-5 pt-6">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-start">
          {featureImage ? (
            <div className="aspect-square overflow-hidden rounded-[2rem] border border-brand-copper/20 bg-white/70 shadow-lg shadow-brand-navy/10">
              <Image src={featureImage} alt={item.title} width={1200} height={1200} sizes="(min-width: 1024px) 320px, 100vw" className="h-full w-full object-cover" priority />
            </div>
          ) : null}
          <PageBanner embedded tone="writing" eyebrow={item.category} title={item.title} description={item.summary}>
            <div className="space-y-4">
              <TagList tags={item.tags} />
              <p className="text-sm text-ink-600 dark:text-ink-300">{formatDate(item.date)} · {item.readingTime}</p>
            </div>
          </PageBanner>
        </div>
      </section>
      <article className="mx-auto max-w-content px-5 py-14">
        <div className="prose prose-ink max-w-prose dark:prose-invert prose-headings:tracking-tight prose-a:text-ink-950 dark:prose-a:text-white">
          <MDXRemote source={item.body} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]] } }} />
        </div>
      </article>
    </>
  );
}
