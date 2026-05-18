import type { MetadataRoute } from 'next';
import { getCollection } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/journey', '/projects', '/insights', '/beyond-work', '/contact'].map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date() }));
  const contentRoutes = [
    ...getCollection('projects').map((item) => `/projects/${item.slug}`),
    ...getCollection('insights').map((item) => `/insights/${item.slug}`)
  ].map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date() }));
  return [...staticRoutes, ...contentRoutes];
}
