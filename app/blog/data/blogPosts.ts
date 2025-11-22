// Define the BlogPost interface
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: React.ReactNode;
  author: string;
  description: string;
  ogImage: string;
  categories: string[]; // Categories/tags for the blog post
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
    categories: ['Freemium', 'AI'],
  },
  'how-to-publish-app-into-appgallery-store': {
    slug: 'how-to-publish-app-into-appgallery-store',
    title: 'How to Publish Your App into AppGallery Store',
    date: '15 November 2025',
    author: 'Hovah Yii',
    description: 'Complete step-by-step guide on how to publish your Android app to Huawei AppGallery store, including beta testing setup and tips to speed up the review process.',
    ogImage: '/blog/appgallery/app-services.png',
    categories: ['Huawei'],
  },
  'qwen-app-public-beta': {
    slug: 'qwen-app-public-beta',
    title: 'Qwen App Public Beta: Branding the Strongest Chinese Personal AI',
    date: '17 November 2025',
    author: 'Hovah Yii',
    description: 'Alibaba renames its consumer AI app to Qwen, unifying its trillion-parameter models and personal assistant experience into one brand that aims to become China\'s ChatGPT.',
    ogImage: '/blog/qwen/qwen-app.png',
    categories: ['AI'],
  },
  'gpt-5-1-emotional-upgrade': {
    slug: 'gpt-5-1-emotional-upgrade',
    title: 'GPT-5.1 Goes Emotional: Warmth, Styles, and Adaptive Reasoning',
    date: '14 November 2025',
    author: 'Hovah Yii',
    description: 'OpenAI\'s GPT-5.1 Instant and Thinking focus on EQ as much as IQ, shipping preset personalities, custom tone controls, adaptive reasoning, and new safety dimensions.',
    ogImage: '/blog/chatgpt5.1/new.png',
    categories: ['AI'],
  },
  'gemini-3-ultimate-ai': {
    slug: 'gemini-3-ultimate-ai',
    title: '👑 The Strongest AI of the Year: Google Gemini 3 Is Here!',
    date: '20 November 2025',
    author: 'Hovah Yii',
    description: 'Google\'s ultimate weapon Gemini 3 launches with Pro version, claiming to be the strongest AI combining reasoning, multimodal, and vibe coding capabilities. Benchmark tests dominate the competition, even surpassing GPT-5.1.',
    ogImage: '/blog/gemini-3/gemini-3-pro.png',
    categories: ['AI'],
  },
  'openai-gpt-5-1-pro-codex-max': {
    slug: 'openai-gpt-5-1-pro-codex-max',
    title: '🚀 OpenAI Strikes Back: GPT-5.1 Pro and GPT-5.1-Codex-Max',
    date: '21 November 2025',
    author: 'Hovah Yii',
    description: 'OpenAI releases GPT-5.1 Pro and GPT-5.1-Codex-Max, the most powerful coding model yet. With 30% fewer thinking tokens, 24-hour autonomous coding, and 77.9% on SWE-bench Verified, the AI coding war intensifies.',
    ogImage: '/blog/openai/gpt-5.1-announcement.png',
    categories: ['AI'],
  },
  'google-nano-banana-pro-gemini-3-image': {
    slug: 'google-nano-banana-pro-gemini-3-image',
    title: '🍌 Google Nano Banana Pro: Designers Beware! Deep Integration with Gemini 3',
    date: '22 November 2025',
    author: 'Hovah Yii',
    description: 'Google launches Nano Banana Pro (Gemini 3 Pro Image), the most powerful image generation model yet. With 4K resolution, multi-round editing, perfect text rendering, and real-time Google Search integration—design work will never be the same.',
    ogImage: '/blog/nano-banana/gemini-3-pro-image.png',
    categories: ['AI'],
  },
  'how-to-get-bem-engineering-technologist-approval': {
    slug: 'how-to-get-bem-engineering-technologist-approval',
    title: 'How to Get Your Engineering Technologist (BEM) Approval in Malaysia',
    date: '22 November 2025',
    author: 'Hovah Yii',
    description: 'Complete guide on how to apply for and obtain your Engineering Technologist registration with the Board of Engineers Malaysia (BEM). Learn about ETAC accreditation, application process, required documents, title usage, and the pathway to Professional Engineer status.',
    ogImage: '/blog/eng-tech/engineering-technologist.jpg',
    categories: ['BEM', 'Engineering'],
  }
};