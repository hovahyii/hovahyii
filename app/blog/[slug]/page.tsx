import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

// Define the BlogPost interface
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: React.ReactNode;
  author: string;
  description: string;
  ogImage: string;
}

// This is a map of all blog posts
export const blogPosts: Record<string, Omit<BlogPost, 'content'>> = {
  'how-to-get-free-cursor-using-student-email': {
    slug: 'how-to-get-free-cursor-using-student-email',
    title: 'How to Get Cursor Premium for Free as a Student for 1 Year',
    date: 'May 1, 2024',
    author: 'Hovah Yii',
    description: 'Learn how to get Cursor Premium for free as a student for an entire year. Step-by-step guide with screenshots to claim your free AI-powered code editor.',
    ogImage: '/blog/cursor/cursor-student.png',
  }
};

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