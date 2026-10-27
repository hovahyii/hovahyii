import Link from 'next/link';
import NightStarsKashgarContent from './NightStarsKashgarContent';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';
import { blogPosts, BlogPost } from '../data/blogPosts';

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }
  
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.categories,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://hovahyii.vercel.app/blog/${post.slug}`,
      siteName: 'Hovah Yii',
      images: [
        {
          url: post.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: post.categories,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@HovahYii',
      images: {
        url: post.ogImage,
        alt: post.title,
      },
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map(slug => ({ slug }));
}

// Server component that renders the client component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const postData = blogPosts[slug];
  
  if (!postData) {
    notFound();
  }
  
  if (slug === 'night-stars-kashgar') {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/blog" className="text-blue-600 hover:underline">&larr; Back to Blog</Link>
        <h1 className="text-3xl font-bold mt-6 mb-2">{postData.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{postData.author} &bull; {postData.date}</p>
        <NightStarsKashgarContent />
      </div>
    );
  }

  return <BlogPostClient slug={slug} postData={postData} />;
}