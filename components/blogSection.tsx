import React from 'react';
import Link from 'next/link';
import { FaBlog } from "react-icons/fa";

interface BlogSectionProps {
  isDarkMode: boolean;
}

function BlogSection({ isDarkMode }: BlogSectionProps) {
  return (
    <div className={`mt-6 flex rounded-lg border shadow p-6 flex-col items-center md:items-start text-center md:text-left ${isDarkMode ? 'bg-white text-black' : 'bg-gray-100 text-black'}`}>
      <div className="w-full">
        <h2 className="flex text-sm font-semibold text-zinc-900">
          <FaBlog className="h-6 w-6 flex-none" />
          <span className="ml-3">Blog & Articles</span>
        </h2>
        <p className="mt-4 text-sm text-zinc-600">
          Deep dives into launches, practical how-tos, and product notes—updated whenever something new ships.
        </p>
        <Link 
          href="/blog"
          className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow"
        >
          Explore the Blog →
        </Link>
      </div>
    </div>
  );
}

export default BlogSection;

