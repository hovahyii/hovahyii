import { NextRequest, NextResponse } from 'next/server';
import { getViewsCollection } from '@/lib/mongodb';

// GET: Get view count for a specific blog post
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    const collection = await getViewsCollection();
    const doc = await collection.findOne({ slug });
    const viewCount = doc?.views || 0;

    return NextResponse.json({ slug, views: viewCount });
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

    const collection = await getViewsCollection();
    
    // Use findOneAndUpdate with upsert to increment or create
    const result = await collection.findOneAndUpdate(
      { slug },
      { $inc: { views: 1 } },
      { 
        upsert: true, 
        returnDocument: 'after' 
      }
    );

    const viewCount = result?.views || 1;

    return NextResponse.json({ slug, views: viewCount });
  } catch (error) {
    console.error('Error updating views:', error);
    return NextResponse.json({ error: 'Failed to update views' }, { status: 500 });
  }
}
