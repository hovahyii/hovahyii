import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  console.log('GET request received');
  try {
    const count = await kv.get('videoLikeCount') as number || 0;
    console.log('Current like count:', count);
    return NextResponse.json({ likeCount: count }, { status: 200 });
  } catch (error) {
    console.error('Error in GET:', error);
    return NextResponse.json({ error: 'Failed to fetch like count' }, { status: 500 });
  }
}

export async function POST() {
  console.log('POST request received');
  try {
    const currentCount = await kv.get('videoLikeCount') as number || 0;
    console.log('Current count before increment:', currentCount);
    const newCount = currentCount + 1;
    await kv.set('videoLikeCount', newCount);
    console.log('New count after increment:', newCount);
    return NextResponse.json({ likeCount: newCount }, { status: 200 });
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json({ error: 'Failed to increment like count' }, { status: 500 });
  }
}