import type { MetadataRoute } from 'next';
import { getCollection } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ['', '/journey', '/projects', '/insights', '/beyond-work', '/contact', '/workshop-interest']
    .map((route) => ({ url: `${siteConfig.url}${route}` }));
  const contentRoutes: MetadataRoute.Sitemap = [
    ...getCollection('projects'),
    ...getCollection('insights'),
    ...getCollection('frameworks'),
    ...getCollection('lab')
  ].map((item) => ({
    url: `${siteConfig.url}/${item.kind}/${item.slug}`,
    ...(item.date ? { lastModified: new Date(item.date) } : {})
  }));

  return [...staticRoutes, ...contentRoutes];
}
