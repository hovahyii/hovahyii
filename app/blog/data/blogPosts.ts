// Define the BlogPost interface
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: React.ReactNode;
  author: string;
  description: string;
  ogImage: string;
}

// This is a map of all blog posts
export const blogPosts: Record<string, Omit<BlogPost, 'content'>> = {
  'how-to-get-free-cursor-using-student-email': {
    slug: 'how-to-get-free-cursor-using-student-email',
    title: 'How to Get Cursor Premium for Free as a Student for 1 Year',
    date: '8 May 2025',
    author: 'Hovah Yii',
    description: 'Learn how to get Cursor Premium for free as a student for an entire year. Step-by-step guide with screenshots to claim your free AI-powered code editor.',
    ogImage: '/blog/cursor/cursor-student.png',
  },
  'how-to-publish-app-into-appgallery-store': {
    slug: 'how-to-publish-app-into-appgallery-store',
    title: 'How to Publish Your App into AppGallery Store',
    date: '15 November 2025',
    author: 'Hovah Yii',
    description: 'Complete step-by-step guide on how to publish your Android app to Huawei AppGallery store, including beta testing setup and tips to speed up the review process.',
    ogImage: '/blog/appgallery/app-services.png',
  }
};