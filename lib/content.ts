import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentRoot = path.join(process.cwd(), 'content');

export type ContentKind = 'projects' | 'insights' | 'frameworks' | 'lab';

export type ContentMeta = {
  title: string;
  summary: string;
  date?: string;
  tags: string[];
  category: string;
  status?: string;
  featured?: boolean;
  coverImage?: string;
  readingTime: string;
  slug: string;
  kind: ContentKind;
};

export type ContentItem = ContentMeta & {
  body: string;
};

function assertString(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Invalid or missing frontmatter field: ${field}`);
  }
  return value;
}

function normalizeTags(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String);
  return String(value)
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export function getCollection(kind: ContentKind): ContentItem[] {
  const directory = path.join(contentRoot, kind);
  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '');
      const raw = fs.readFileSync(path.join(directory, file), 'utf8');
      const { data, content } = matter(raw);

      return {
        slug,
        kind,
        title: assertString(data.title, 'title'),
        summary: assertString(data.summary, 'summary'),
        date: typeof data.date === 'string' ? data.date : undefined,
        tags: normalizeTags(data.tags),
        category: typeof data.category === 'string' ? data.category : 'General',
        status: typeof data.status === 'string' ? data.status : undefined,
        featured: Boolean(data.featured),
        coverImage: typeof data.coverImage === 'string' ? data.coverImage : undefined,
        readingTime: typeof data.readingTime === 'string' ? data.readingTime : readingTime(content).text,
        body: content
      } satisfies ContentItem;
    })
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
}

export function getFeatured(kind: ContentKind, limit = 3): ContentItem[] {
  return getCollection(kind)
    .filter((item) => item.featured)
    .slice(0, limit);
}

export function getItem(kind: ContentKind, slug: string): ContentItem | undefined {
  return getCollection(kind).find((item) => item.slug === slug);
}
