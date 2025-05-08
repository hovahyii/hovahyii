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
    keywords: ['cursor', 'student discount', 'free premium', 'AI code editor', 'programming tools'],
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
          alt: 'Cursor Student Program',
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: '2024-05-01T00:00:00Z',
      authors: [post.author],
      tags: ['cursor', 'student', 'free', 'AI'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@HovahYii',
      images: {
        url: post.ogImage,
        alt: 'Cursor Student Program',
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
  
  return <BlogPostClient slug={slug} postData={postData} />;
}