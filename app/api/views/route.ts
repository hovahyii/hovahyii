import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

// GET: Get view count for a specific blog post
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    // Key format: views:{slug}
    const key = `views:${slug}`;
    let viewCount = await kv.get(key) as number | null;

    // If view count doesn't exist, seed it with a random number
    if (viewCount === null) {
      if (
        slug === 'how-to-get-bem-engineering-technologist-approval' ||
        slug === 'how-to-publish-app-into-appgallery-store'
      ) {
        // Higher views for specific posts (40-60)
        viewCount = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
      } else {
        // Random views for other posts (10-50)
        viewCount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      }

      await kv.set(key, viewCount);
    }

    return NextResponse.json(
      { slug, views: viewCount },
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  } catch (error) {
    console.error('Error reading views:', error);
    return NextResponse.json({ error: 'Failed to read views' }, { status: 500 });
  }
}

// POST: Increment view count for a specific blog post
export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    // Key format: views:{slug}
    const key = `views:${slug}`;
    const viewCount = await kv.incr(key);

    return NextResponse.json(
      { slug, views: viewCount },
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  } catch (error) {
    console.error('Error updating views:', error);
    return NextResponse.json({ error: 'Failed to update views' }, { status: 500 });
  }
}
