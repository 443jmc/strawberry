import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/404', '/api/', '/search'],
    },
    sitemap: 'https://jamesmchristensen.com/sitemap.xml',
  };
}

