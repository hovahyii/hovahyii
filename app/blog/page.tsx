import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from './data/blogPosts';
import BlogCard from './BlogCard';

export const metadata: Metadata = {
  title: 'Blog | Hovah Yii',
  description: 'Stories, tutorials, and product breakdowns authored by Hovah Yii.',
};

const posts = Object.values(blogPosts).sort((a, b) => {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();
  return dateB - dateA;
});

export default function BlogIndexPage() {
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
        <Link
          href="/"
          className="mt-4 sm:mt-0 inline-flex items-center justify-center px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
        >
          ← Back to Main Page
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            description={post.description}
            ogImage={post.ogImage}
          />
        ))}
      </div>
    </div>
  );
}

