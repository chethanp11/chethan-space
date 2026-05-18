import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { TagList } from '@/components/cards';
import { HomeBack } from '@/components/home-back';
import { mdxComponents } from '@/components/mdx-components';
import { PageBanner } from '@/components/page-banner';
import { getCollection, getItem } from '@/lib/content';
import { formatDate } from '@/lib/format';

export function generateStaticParams() {
  return getCollection('insights').map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem('insights', slug);
  if (!item) return {};
  const images = item.coverImage ? [{ url: item.coverImage, width: 1200, height: 630, alt: item.title }] : undefined;
  return {
    title: item.title,
    description: item.summary,
    openGraph: { title: item.title, description: item.summary, type: 'article', publishedTime: item.date, images },
    twitter: { card: 'summary_large_image', title: item.title, description: item.summary, images: item.coverImage ? [item.coverImage] : undefined }
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem('insights', slug);
  if (!item) notFound();
  return (
    <>
      <HomeBack href="/insights" label="Back to Thoughts" />
      <PageBanner tone="writing" eyebrow={item.category} title={item.title} description={item.summary}>
        <div className="space-y-4">
          <TagList tags={item.tags} />
          <p className="text-sm text-ink-600 dark:text-ink-300">{formatDate(item.date)} · {item.readingTime}</p>
        </div>
      </PageBanner>
      <article className="mx-auto max-w-content px-5 py-14">
        {item.coverImage ? <img src={item.coverImage} alt="" className="mb-10 aspect-[1200/630] w-full rounded-[2rem] object-cover shadow-lg shadow-brand-navy/10" /> : null}
        <div className="prose prose-ink max-w-prose dark:prose-invert prose-headings:tracking-tight prose-a:text-ink-950 dark:prose-a:text-white">
          <MDXRemote source={item.body} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]] } }} />
        </div>
      </article>
    </>
  );
}
