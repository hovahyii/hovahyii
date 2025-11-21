'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { blogPosts } from './data/blogPosts';
import BlogCard from './BlogCard';

// Extract all unique categories from blog posts
const getAllCategories = () => {
  const categoriesSet = new Set<string>();
  Object.values(blogPosts).forEach(post => {
    post.categories.forEach(category => categoriesSet.add(category));
  });
  return Array.from(categoriesSet).sort();
};

export default function BlogListClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const allCategories = useMemo(() => getAllCategories(), []);
  
  // Sort posts by date
  const sortedPosts = useMemo(() => {
    return Object.values(blogPosts).sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  }, []);
  
  // Filter posts by selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return sortedPosts;
    }
    return sortedPosts.filter(post => 
      post.categories.includes(selectedCategory)
    );
  }, [sortedPosts, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold">Field Dispatches</p>
          <h1 className="text-4xl font-extrabold mt-3 mb-4">Tech, knowledge, and tips in one feed</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Quick dives into launches, lessons, and playbooks—so you learn, build, and ship faster.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
          <Link
            href="/feed.xml"
            target="_blank"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-orange-500 dark:border-orange-400 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950 transition"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"/>
              <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"/>
            </svg>
            RSS Feed
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            ← Back to Main Page
          </Link>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Filter by:</span>
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All ({sortedPosts.length})
          </button>
          {allCategories.map((category) => {
            const count = sortedPosts.filter(post => 
              post.categories.includes(category)
            ).length;
            
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {selectedCategory === 'All' 
            ? `Showing all ${filteredPosts.length} posts`
            : `Showing ${filteredPosts.length} ${filteredPosts.length === 1 ? 'post' : 'posts'} in ${selectedCategory}`
          }
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            description={post.description}
            ogImage={post.ogImage}
            categories={post.categories}
          />
        ))}
      </div>

      {/* No Results Message */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-slate-600 dark:text-slate-400">
            No posts found in this category.
          </p>
        </div>
      )}
    </div>
  );
}

