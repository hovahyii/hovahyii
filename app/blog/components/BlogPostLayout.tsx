'use client';
import Link from 'next/link';
import { BlogPost } from '../data/blogPosts';

interface BlogPostLayoutProps {
  post: BlogPost;
}

export default function BlogPostLayout({ post }: BlogPostLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/" className="text-blue-400 hover:text-blue-300 mb-4 block dark:text-blue-400">
        ← Back to Main Page
      </Link>
      <h1 className="text-3xl font-bold mb-2 dark:text-white">{post.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">{post.date} • {post.author}</p>
      
      <div className="blog-post-content">
        {post.content}
      </div>
    </div>
  );
}