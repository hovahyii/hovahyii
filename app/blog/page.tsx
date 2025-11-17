import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from './data/blogPosts';

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
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-200 bg-white dark:bg-slate-900 overflow-hidden"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.ogImage}
                alt={post.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex-1 p-6 flex flex-col">
              <p className="text-xs font-semibold tracking-widest text-blue-500 uppercase">
                {post.date}
              </p>
              <h2 className="text-2xl font-bold mt-3 mb-2 text-slate-900 dark:text-white group-hover:text-blue-600">
                {post.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 flex-1">
                {post.description}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600">
                Read story
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

