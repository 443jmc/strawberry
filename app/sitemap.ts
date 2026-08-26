import type { MetadataRoute } from 'next';
import { archivedPages } from './site-data';

const origin = 'https://jamesmchristensen.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: origin, changeFrequency: 'weekly', priority: 1 },
    ...archivedPages
      .filter((page) => page.path !== '/404')
      .map((page) => ({
        url: `${origin}${page.path}`,
        lastModified: page.lastModified || undefined,
        changeFrequency: page.path.startsWith('/blog/') || page.path.startsWith('/podcast/') || page.path.startsWith('/book-summaries/') ? 'monthly' as const : 'weekly' as const,
        priority: page.path === '/home' ? 1 : page.path.split('/').length === 2 ? 0.8 : 0.6,
      })),
  ];
}

