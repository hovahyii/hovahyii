import { NextResponse } from 'next/server';
import { blogPosts } from '../blog/data/blogPosts';

const SITE_URL = 'https://hovahyii.vercel.app';
const SITE_TITLE = 'Hovah Yii Blog';
const SITE_DESCRIPTION = 'Stories, tutorials, and product breakdowns authored by Hovah Yii. Quick dives into launches, lessons, and playbooks—so you learn, build, and ship faster.';
const AUTHOR_NAME = 'Hovah Yii';

function generateJSONFeed() {
  const posts = Object.values(blogPosts).sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  const items = posts.map((post) => {
    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    
    return {
      id: postUrl,
      url: postUrl,
      title: post.title,
      content_text: post.description,
      content_html: `<p>${post.description}</p>`,
      summary: post.description,
      image: `${SITE_URL}${post.ogImage}`,
      date_published: new Date(post.date).toISOString(),
      author: {
        name: post.author,
      },
      tags: ['Technology', 'AI', 'Development'],
    };
  });

  return {
    version: 'https://jsonfeed.org/version/1.1',
    title: SITE_TITLE,
    home_page_url: `${SITE_URL}/blog`,
    feed_url: `${SITE_URL}/feed.json`,
    description: SITE_DESCRIPTION,
    icon: `${SITE_URL}/logo/blog.png`,
    favicon: `${SITE_URL}/favicon.ico`,
    authors: [
      {
        name: AUTHOR_NAME,
        url: SITE_URL,
      },
    ],
    language: 'en-US',
    items,
  };
}

export async function GET() {
  const feed = generateJSONFeed();

  return NextResponse.json(feed, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  });
}

