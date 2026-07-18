import type { ComponentProps } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import type { ContentItem } from '@/lib/content';
import { formatDate } from '@/lib/format';
import { TagList } from './cards';
import { HomeBack } from './home-back';
import { mdxComponents } from './mdx-components';
import { PageBanner } from './page-banner';

type ContentDetailProps = {
  item: ContentItem;
  backHref: string;
  backLabel: string;
  tone: NonNullable<ComponentProps<typeof PageBanner>['tone']>;
};

export function ContentDetail({ item, backHref, backLabel, tone }: ContentDetailProps) {
  return (
    <>
      <HomeBack href={backHref} label={backLabel} />
      <PageBanner tone={tone} eyebrow={`${item.category} · ${item.status ?? 'Published'}`} title={item.title} description={item.summary}>
        <div className="space-y-4">
          <TagList tags={item.tags} />
          {item.date ? <p className="text-sm text-ink-600 dark:text-ink-300">{formatDate(item.date)} · {item.readingTime}</p> : null}
        </div>
      </PageBanner>
      <article className="mx-auto max-w-content px-5 py-14">
        <div className="prose prose-ink max-w-prose dark:prose-invert prose-headings:tracking-tight prose-a:text-ink-950 dark:prose-a:text-white">
          <MDXRemote
            source={item.body}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]] } }}
          />
        </div>
      </article>
    </>
  );
}
