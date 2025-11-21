import { Metadata } from 'next';
import BlogListClient from './BlogListClient';

export const metadata: Metadata = {
  title: 'Blog | Hovah Yii',
  description: 'Stories, tutorials, and product breakdowns authored by Hovah Yii. Quick dives into launches, lessons, and playbooks—so you learn, build, and ship faster.',
  openGraph: {
    title: 'Blog | Hovah Yii',
    description: 'Stories, tutorials, and product breakdowns authored by Hovah Yii. Quick dives into launches, lessons, and playbooks—so you learn, build, and ship faster.',
    url: 'https://hovahyii.vercel.app/blog',
    siteName: 'Hovah Yii',
    images: [
      {
        url: '/hovah-blog.png',
        width: 1200,
        height: 630,
        alt: 'Hovah Yii Blog - Tech, Knowledge, and Tips',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Hovah Yii',
    description: 'Stories, tutorials, and product breakdowns authored by Hovah Yii. Quick dives into launches, lessons, and playbooks.',
    creator: '@HovahYii',
    images: {
      url: '/hovah-blog.png',
      alt: 'Hovah Yii Blog',
    },
  },
};

export default function BlogIndexPage() {
  return <BlogListClient />;
}

