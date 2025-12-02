import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'blog-views.json');

async function getViewsData() {
  try {
    const data = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist or is invalid, return empty object
    return {};
  }
}

async function saveViewsData(data: Record<string, number>) {
  await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

// GET: Get view count for a specific blog post
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    const viewsData = await getViewsData();
    const viewCount = viewsData[slug] || 0;

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

    const viewsData = await getViewsData();
    viewsData[slug] = (viewsData[slug] || 0) + 1;
    
    await saveViewsData(viewsData);

    return NextResponse.json({ slug, views: viewsData[slug] });
  } catch (error) {
    console.error('Error updating views:', error);
    return NextResponse.json({ error: 'Failed to update views' }, { status: 500 });
  }
}
