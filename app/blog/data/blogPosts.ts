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
  },
  'trae-solo-china-launch-free-features': {
    slug: 'trae-solo-china-launch-free-features',
    title: '🔥 All Features Free! TRAE SOLO China Version Launches',
    date: '27 November 2025',
    author: 'Hovah Yii',
    description: 'TRAE SOLO officially launches in China with all features completely free. Introducing SOLO Coder, Plan mode, multi-task parallel processing, DiffView code change tool, and context compression—the future of AI programming is here.',
    ogImage: '/blog/trae/solo-china.png',
    categories: ['AI', 'Programming'],
  },
  'qwen-neurips-2025-best-paper': {
    slug: 'qwen-neurips-2025-best-paper',
    title: '💐 Qwen Wins Best Paper! NeurIPS 2025 Awards Recap',
    date: '27 November 2025',
    author: 'Hovah Yii',
    description: 'Four NeurIPS 2025 Best Papers, three runner-ups, a Faster R-CNN Test of Time win, and the first Sejnowski-Hinton Prize—here is the full English recap with Qwen’s gated attention breakthrough front and center.',
    ogImage: '/blog/qwen/neruips.png',
    categories: ['AI', 'Research'],
  },
  'deepseek-math-v2-self-verifiable-reasoning': {
    slug: 'deepseek-math-v2-self-verifiable-reasoning',
    title: 'DeepSeek Makes History Again! Open Source IMO Gold Level Math Model, AI Learns to Reflect for the First Time',
    date: '29 November 2025',
    author: 'Hovah Yii',
    description: 'DeepSeek team\'s breakthrough lies in finding a new direction—making AI not only solve problems but also check if its reasoning process is rigorous.',
    ogImage: '/blog/deepseek/github.png',
    categories: ['AI', 'DeepSeek', 'Math'],
  },
  'deepseek-v3-2-gpt-5-killer': {
    slug: 'deepseek-v3-2-gpt-5-killer',
    title: '👑 DeepSeek-V3.2 is Here! The Strongest Yet! Performance Approaches Gemini 3, Tears Apart GPT-5 High',
    date: '2 December 2025',
    author: 'Hovah Yii',
    description: 'DeepSeek releases V3.2 and V3.2-Speciale, achieving GPT-5 level performance. A detailed look at the technical report and benchmarks.',
    ogImage: '/blog/deepseek/accuracy.png',
    categories: ['AI', 'DeepSeek', 'LLM'],
  },
  'mistral-3-series-release': {
    slug: 'mistral-3-series-release',
    title: '🚀 "European DeepSeek" Releases Mistral 3 Series, Benchmarking Against Chinese Models',
    date: '3 December 2025',
    author: 'Hovah Yii',
    description: 'Mistral releases the Mistral 3 series, including Ministral 3 and Mistral Large 3, directly benchmarking against Chinese models like DeepSeek and Kimi. Is this Europe\'s return to the AI race?',
    ogImage: '/blog/mistral/base-model-benchmark.png',
    categories: ['AI', 'Mistral', 'LLM'],
  },
  'deepseek-technology-evolution': {
    slug: 'deepseek-technology-evolution',
    title: '🐋 DeepSeek Technology Evolution Explained: V3 → R1 → V3.2',
    date: '8 December 2025',
    author: 'Hovah Yii',
    description: 'A comprehensive look at DeepSeek\'s evolution from V3 to R1 and V3.2, covering architecture changes (MoE, MLA), training methods (RLVR, GRPO), and the new V3.2 features like DSA sparse attention.',
    ogImage: '/blog/deepseek/timeline.png',
    categories: ['AI', 'DeepSeek', 'LLM'],
  },
  'gpt-5-2-openai-strikes-back': {
    slug: 'gpt-5-2-openai-strikes-back',
    title: '🚀 GPT-5.2 Released! OpenAI Strikes Back! Surpasses Google Gemini 3 Pro',
    date: '12 December 2025',
    author: 'Hovah Yii',
    description: 'OpenAI releases GPT-5.2 Instant, Thinking, and Pro. A massive leap in reasoning, coding, and agentic capabilities, regaining the AI throne from Gemini 3.',
    ogImage: '/blog/chatgpt5.2/breaking.png',
    categories: ['AI', 'OpenAI', 'GPT-5.2'],
  },
};