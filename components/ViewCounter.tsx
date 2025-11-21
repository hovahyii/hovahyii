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
    const fetchAndIncrementViews = async () => {
      try {
        if (increment) {
          // Increment the view count
          const response = await fetch('/api/views', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ slug }),
          });

          if (response.ok) {
            const data = await response.json();
            setViews(data.views);
          }
        } else {
          // Just fetch the current view count
          const response = await fetch(`/api/views?slug=${slug}`);
          
          if (response.ok) {
            const data = await response.json();
            setViews(data.views);
          }
        }
      } catch (error) {
        console.error('Error fetching views:', error);
        setViews(0);
      } finally {
        setLoading(false);
      }
    };

    fetchAndIncrementViews();
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

