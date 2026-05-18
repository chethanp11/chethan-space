import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { TagList } from '@/components/cards';
import { HomeBack } from '@/components/home-back';
import { mdxComponents } from '@/components/mdx-components';
import { getCollection, getItem } from '@/lib/content';
import { formatDate } from '@/lib/format';

export function generateStaticParams() {
  return getCollection('insights').map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem('insights', slug);
  if (!item) return {};
  return { title: item.title, description: item.summary, openGraph: { title: item.title, description: item.summary, type: 'article', publishedTime: item.date } };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem('insights', slug);
  if (!item) notFound();
  return (
    <>
      <HomeBack />
      <article className="mx-auto max-w-content px-5 py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue dark:text-brand-sand">{item.category}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl text-ink-950 dark:text-white">{item.title}</h1>
        <p className="mt-6 text-lg leading-8 text-ink-700 dark:text-ink-300">{item.summary}</p>
        <div className="mt-6"><TagList tags={item.tags} /></div>
        <p className="mt-5 text-sm text-ink-500">{formatDate(item.date)} · {item.readingTime}</p>
      </div>
      <div className="prose prose-ink mt-12 max-w-prose dark:prose-invert prose-headings:tracking-tight prose-a:text-ink-950 dark:prose-a:text-white">
        <MDXRemote source={item.body} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]] } }} />
      </div>
      </article>
    </>
  );
}
