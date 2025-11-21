'use client';

import Image from 'next/image';
import Link from 'next/link';
import ViewCounter from '@/components/ViewCounter';

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  description: string;
  ogImage: string;
}

export default function BlogCard({ slug, title, date, description, ogImage }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-200 bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={ogImage}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold tracking-widest text-blue-500 uppercase">
            {date}
          </p>
          <ViewCounter slug={slug} increment={false} />
        </div>
        <h2 className="text-2xl font-bold mt-1 mb-2 text-slate-900 dark:text-white group-hover:text-blue-600">
          {title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 flex-1">
          {description}
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
  );
}

