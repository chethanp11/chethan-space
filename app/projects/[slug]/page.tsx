import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { TagList } from '@/components/cards';
import { mdxComponents } from '@/components/mdx-components';
import { getCollection, getItem } from '@/lib/content';
import { formatDate } from '@/lib/format';

export function generateStaticParams() {
  return getCollection('projects').map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem('projects', slug);
  if (!item) return {};
  return { title: item.title, description: item.summary, openGraph: { title: item.title, description: item.summary, type: 'article' } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem('projects', slug);
  if (!item) notFound();
  return (
    <article className="mx-auto max-w-content px-5 py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">{item.category} · {item.status ?? 'Project'}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-ink-950 dark:text-white">{item.title}</h1>
        <p className="mt-6 text-xl leading-9 text-ink-600 dark:text-ink-300">{item.summary}</p>
        <div className="mt-6"><TagList tags={item.tags} /></div>
        {item.date ? <p className="mt-5 text-sm text-ink-500">{formatDate(item.date)} · {item.readingTime}</p> : null}
      </div>
      <div className="prose prose-ink mt-12 max-w-prose dark:prose-invert prose-headings:tracking-tight prose-a:text-ink-950 dark:prose-a:text-white">
        <MDXRemote source={item.body} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]] } }} />
      </div>
    </article>
  );
}
