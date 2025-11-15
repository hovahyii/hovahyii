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
        <div className="mt-4 space-y-4">
          <Link 
            href="/blog/how-to-publish-app-into-appgallery-store" 
            className="block p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <h3 className="font-medium text-zinc-900 hover:text-blue-600">
              How to Publish Your App into AppGallery Store
            </h3>
            <p className="text-sm text-zinc-600 mt-1">
              Complete step-by-step guide on how to publish your Android app to Huawei AppGallery store.
            </p>
            <span className="text-xs text-zinc-500 mt-2 block">January 2025</span>
          </Link>
          <Link 
            href="/blog/how-to-get-free-cursor-using-student-email" 
            className="block p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <h3 className="font-medium text-zinc-900 hover:text-blue-600">
              How to Get Cursor Premium for Free as a Student for 1 Year
            </h3>
            <p className="text-sm text-zinc-600 mt-1">
              Step-by-step guide with screenshots to claim your free AI-powered code editor.
            </p>
            <span className="text-xs text-zinc-500 mt-2 block">May 8, 2025</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;

