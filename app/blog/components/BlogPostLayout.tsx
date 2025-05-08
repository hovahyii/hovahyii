'use client';
import Link from 'next/link';
import { BlogPost } from '../data/blogPosts';

interface BlogPostLayoutProps {
  post: BlogPost;
}

export default function BlogPostLayout({ post }: BlogPostLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 block">
        ← Back to Main Page
      </Link>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-6">{post.date} • {post.author}</p>
      
      {post.content}
    </div>
  );
}