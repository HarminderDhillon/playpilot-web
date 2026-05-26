import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/login', '/dashboard'],
      },
    ],
    sitemap: 'https://playpilotlearning.com/sitemap.xml',
  };
}
