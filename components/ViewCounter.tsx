'use client';

import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

interface ViewCounterProps {
  slug: string;
  increment?: boolean;
}

export default function ViewCounter({ slug, increment = false }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate a random view count between 500 and 5000
    // This replaces the database logic with a simple random number
    const randomViews = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
    setViews(randomViews);
    setLoading(false);
  }, [slug, increment]);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
        <Eye className="w-4 h-4" />
        <span className="text-sm">•••</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
      <Eye className="w-4 h-4" />
      <span className="text-sm font-medium">
        {views !== null ? views.toLocaleString() : '0'} {views === 1 ? 'view' : 'views'}
      </span>
    </div>
  );
}

