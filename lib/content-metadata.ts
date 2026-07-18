import type { Metadata } from 'next';
import type { ContentItem } from './content';
import { siteConfig } from './site';

export function createPageMetadata(title: string, description: string, pathname: string): Metadata {
  const url = new URL(pathname, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      title,
      description,
      type: 'website',
      url,
      siteName: siteConfig.name,
      images: [{ url: '/og', width: 1200, height: 630 }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og']
    }
  };
}

export function createContentMetadata(item: ContentItem, pathname: string): Metadata {
  const url = new URL(pathname, siteConfig.url).toString();

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: pathname },
    openGraph: {
      title: item.title,
      description: item.summary,
      type: 'article',
      url,
      siteName: siteConfig.name,
      publishedTime: item.date,
      images: [{ url: '/og', width: 1200, height: 630 }]
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.summary,
      images: ['/og']
    }
  };
}
