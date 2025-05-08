'use client';
import Link from 'next/link';

export default function BlogPostNotFound() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
      <p>The blog post you're looking for doesn't exist.</p>
      <Link href="/" className="text-blue-600 hover:text-blue-800">
        ← Back to Main Page
      </Link>
    </div>
  );
}