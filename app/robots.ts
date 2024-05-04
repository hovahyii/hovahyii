
import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/private/',
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/'],
        disallow: '/private/',
      },
    ],
    sitemap: 'https://hovahyii.vercel.app/sitemap.xml',
  }
}