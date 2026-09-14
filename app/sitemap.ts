import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hovahyii.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://hovahyii.vercel.app/hanoi-drive-test-sharing',
      lastModified: new Date('2026-09-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://hovahyii.vercel.app/projects/mobifone-vietnam',
      lastModified: new Date('2026-09-11'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://hovahyii.vercel.app/projects/umobile-5g',
      lastModified: new Date('2026-09-11'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
