import { NextResponse } from 'next/server';
import { blogPosts } from '../blog/data/blogPosts';

const SITE_URL = 'https://hovahyii.vercel.app';
const SITE_TITLE = 'Hovah Yii Blog';
const SITE_DESCRIPTION = 'Stories, tutorials, and product breakdowns authored by Hovah Yii. Quick dives into launches, lessons, and playbooks—so you learn, build, and ship faster.';
const AUTHOR_NAME = 'Hovah Yii';
const AUTHOR_EMAIL = 'hovahyii@example.com'; // Update with your actual email

function generateRSSFeed() {
  const posts = Object.values(blogPosts).sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  const rssItems = posts
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString();
      const postUrl = `${SITE_URL}/blog/${post.slug}`;
      
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>${AUTHOR_EMAIL} (${AUTHOR_NAME})</author>
      <category>Technology</category>
      <enclosure url="${SITE_URL}${post.ogImage}" type="image/png" length="0"/>
    </item>`;
    })
    .join('');

  const lastBuildDate = posts.length > 0 
    ? new Date(posts[0].date).toUTCString() 
    : new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${SITE_URL}/blog</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/logo/blog.png</url>
      <title>${SITE_TITLE}</title>
      <link>${SITE_URL}/blog</link>
    </image>
    <webMaster>${AUTHOR_EMAIL} (${AUTHOR_NAME})</webMaster>
    <managingEditor>${AUTHOR_EMAIL} (${AUTHOR_NAME})</managingEditor>
    <copyright>Copyright ${new Date().getFullYear()} ${AUTHOR_NAME}</copyright>
    <ttl>60</ttl>
${rssItems}
  </channel>
</rss>`;
}

export async function GET() {
  const feed = generateRSSFeed();

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  });
}

