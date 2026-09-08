"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function RakyatDigitalMulerunContent() {
  return (
    <div className="prose lg:prose-xl max-w-none text-slate-900 dark:text-slate-100 pb-20">
      {/* Hero Banner Section */}
      <div className="mb-12 p-8 md:p-12 rounded-[2.5rem] border border-blue-200 dark:border-blue-900 bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 dark:from-blue-950/40 dark:via-slate-900 dark:to-indigo-950/40 shadow-2xl overflow-hidden relative">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 text-xs font-bold tracking-widest uppercase mb-6">
            <span>🇲🇾</span>
            <span>National Strategic Initiative • AI Untuk Rakyat</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 text-slate-900 dark:text-white leading-[1.15] tracking-tight">
            How I Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">3 Months of Free MuleRun</span> via Rakyat Digital
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
            The Malaysian Ministry of Digital launched the <strong>AI Untuk Rakyat Programme</strong> to empower 100,000 youth with cutting-edge tech skills. Here is my complete walkthrough on logging in with MyDigital ID, finishing the 6 mandatory courses, and claiming your free 3-month AI subscription!
          </p>
          
          {/* Quick Stat Pill Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-blue-600 dark:text-blue-400 font-bold block text-base">🇲🇾 Citizens Only</span>
              Aged 18 to 30
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold block text-base">🪪 MyDigital ID</span>
              Single Sign-On
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-purple-600 dark:text-purple-400 font-bold block text-base">📚 6 Courses</span>
              ~5 Hours Total
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold block text-base">🎁 3 Months</span>
              100% Free AI Tool
            </div>
          </div>
        </div>

        {/* Ambient Blur circles */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full -mr-28 -mt-28 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full -ml-28 -mb-28 blur-[100px] pointer-events-none"></div>
      </div>

      {/* Intro Hook */}
      <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-200 font-normal">
        If you are a Malaysian citizen between <strong>18 and 30 years old</strong>, you have a golden opportunity to claim <strong>3 months of completely free access</strong> to industry-grade AI tools sponsored by the Malaysian government under the <em>MADANI AI Untuk Rakyat</em> initiative.
      </p>
      <p>
        While the program gives you a choice between several leading tools — including <strong>Gemini Enterprise</strong>, <strong>ILMU Chat</strong>, <strong>MuleRun</strong>, and <strong>WonderClip</strong> — I personally claimed <strong>MuleRun</strong> ("Your AI Workforce"), and in this post, I will share exactly how it works, what the courses cover, and how you can do it too.
      </p>

      {/* Overview Image */}
      <div className="my-10 flex flex-col items-center">
        <Image
          src="/blog/rakyat-digital/ai-untuk-rakyat.jpg"
          alt="AI Untuk Rakyat Programme Overview"
          width={1080}
          height={500}
          className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
          priority
        />
        <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-3">
          The official launch of AI Untuk Rakyat on Rakyat Digital, targeting 100,000 youth nationwide.
        </p>
      </div>

      {/* Key Details Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 dark:from-slate-900 dark:to-blue-950/30 p-6 md:p-8 rounded-2xl border border-blue-100 dark:border-blue-900/60 my-10 shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-sm">📌</span>
          Quick Programme Summary
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-base">
          <div>
            <p className="mb-2"><strong>🏛️ Spearheaded by:</strong> Malaysian Government & Ministry of Digital</p>
            <p className="mb-2"><strong>🎯 National Target:</strong> 100,000 Malaysian youth in phases</p>
            <p className="mb-2"><strong>🚀 Rollout Date:</strong> Started 31 August 2026</p>
          </div>
          <div>
            <p className="mb-2"><strong>🇲🇾 Eligibility:</strong> Malaysian citizens aged 18 – 30</p>
            <p className="mb-2"><strong>🔐 Login Requirement:</strong> <span className="text-blue-600 dark:text-blue-400 font-semibold">MyDigital ID</span> (Strictly local citizens)</p>
            <p className="mb-2"><strong>🎁 Redemption:</strong> 3 Months full subscription funded by the government</p>
          </div>
        </div>
      </div>

      {/* The 4 AI Tools Available */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        The Incentive: 4 Leading AI Tools to Choose From
      </h2>
      <p>
        Upon finishing and passing all 6 prescribed courses, you unlock a redemption catalog featuring 4 powerhouse AI platforms:
      </p>

      <div className="my-10 flex flex-col items-center">
        <Image
          src="/blog/rakyat-digital/3-months-free-access.png"
          alt="AI Untuk Rakyat 3 Months Free Access Campaign"
          width={1080}
          height={480}
          className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
        />
        <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-3">
          Redeem 3 months of FREE access to Gemini Enterprise, ILMU Chat, MuleRun, or WonderClip.
        </p>
      </div>

      <div className="my-8">
        <Image
          src="/blog/rakyat-digital/4-redeem-ai.png"
          alt="Rakyat Digital AI Redemption Selection"
          width={1080}
          height={880}
          className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
        />
        <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-3">
          The redemption portal interface displaying all 4 available AI tools.
        </p>
      </div>

      {/* Important Alert Box */}
      <div className="p-6 rounded-2xl border-l-4 border-amber-500 bg-amber-50/80 dark:bg-amber-950/30 text-slate-800 dark:text-amber-100 my-8 shadow-sm">
        <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300 text-lg mb-2">
          <span>⚠️</span>
          <span>Crucial Note: Only ONE Redemption Allowed!</span>
        </div>
        <p className="text-base m-0 leading-relaxed">
          The portal explicitly reminds you: <strong>"Only ONE redemption is allowed for each eligible user. Once redeemed, the selected AI tool cannot be changed."</strong> Make sure you review all four options and choose the tool that best matches your workflow or career path!
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">Alibaba Cloud</span>
            <span className="text-xl">🤖</span>
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">MuleRun (My Choice!)</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Branded as <em>"Your AI Workforce"</em>, MuleRun acts as an autonomous digital teammate. From fast research to complex multi-step tasks, it plans steps, orchestrates tools, and delivers finished results autonomously.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-400 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">Google Cloud</span>
            <span className="text-xl">✨</span>
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Gemini Enterprise</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Elevates assignments and research with Gemini Enterprise & Gemini Notebook by Google Cloud. Taps into Google's most advanced reasoning to build custom, no-code workflows.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-400 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">YTL AI Labs</span>
            <span className="text-xl">🇲🇾</span>
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">ILMU Chat</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Built by Malaysians for Malaysians, offering deep understanding of local dialects, slang, culture, and context. Unlocks unlimited access to advanced features for presentations, posters, and mini-apps.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-purple-400 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300">Alibaba Cloud</span>
            <span className="text-xl">🎬</span>
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">WonderClip</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            A state-of-the-art multimodal video generation and editing tool. Perfect for content creators looking to supercharge video storytelling, automated clipping, and multimedia workflows.
          </p>
        </div>
      </div>

      {/* Why I Picked MuleRun & Redemption Confirmation */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        Why I Picked MuleRun & My Redemption Success
      </h2>
      <p>
        While Gemini Enterprise and ILMU Chat are fantastic options, I chose <strong>MuleRun</strong> because of its agentic paradigm. Rather than simply being a chatbot where you prompt back and forth, MuleRun acts as an <em>autonomous AI agent workforce</em> capable of breaking down goals, using tools, executing tasks, and packaging outputs without constant micromanagement.
      </p>
      <p>
        After submitting the redemption on Rakyat Digital, I received the official confirmation email:
      </p>

      <div className="my-10 flex flex-col items-center">
        <Image
          src="/blog/rakyat-digital/redeem-mulerun.png"
          alt="MuleRun Onboarding Confirmation Email"
          width={640}
          height={820}
          className="rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800"
        />
        <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-3">
          Confirmation letter from Kerajaan Madani granting 3 months of free access to MuleRun!
        </p>
      </div>

      {/* Deep Dive into the 6 Courses */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        The 6 Prescribed Courses: What You'll Learn
      </h2>
      <p>
        To qualify, you must complete all 6 courses on the <a href="https://portal.rakyatdigital.gov.my/courses" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">Rakyat Digital Portal</a>.
      </p>
      <p>
        Don't be intimidated! The courses are well-structured, modular, and surprisingly concise. You can easily complete them in an afternoon:
      </p>

      <div className="space-y-6 my-10">
        {/* Course 1 */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">1</span>
              AI Nation 2030: The MADANI Approach
            </h3>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
              ⏱️ 30 min • 5 modules • 2 languages
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
            An overview of Malaysia's strategic direction towards becoming an AI-driven digital economy by 2030.
          </p>
          <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300 pl-5 list-disc">
            <li>Understand Malaysia's official AI Nation 2030 vision and pillars.</li>
            <li>Learn the MADANI values guiding ethical, equitable, and responsible AI deployment.</li>
            <li>Discover how youth can harness AI responsibly to shape Malaysia's digital future.</li>
          </ul>
        </div>

        {/* Course 2 */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/60 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold">2</span>
              Agentic AI for All
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                Microsoft × Biji-biji
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
                ⏱️ 2 hr • 5 modules • 4 languages
              </span>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
            Hands down the most forward-looking course in the curriculum, focusing on autonomous AI agents.
          </p>
          <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300 pl-5 list-disc">
            <li><strong>AI Evolution:</strong> Understand the quantum leap from basic text-generation to goal-oriented, autonomous agentic systems.</li>
            <li><strong>AI Architecture:</strong> Learn how agents are constructed under the hood—perception, memory, reasoning, and tool execution.</li>
            <li><strong>AI Application:</strong> Practical frameworks to guide and orchestrate agentic AI tools in real-world professional tasks.</li>
          </ul>
        </div>

        {/* Course 3 */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">3</span>
              AI Safety
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Trainocate
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                ⏱️ 40 min • 5 modules • 4 languages
              </span>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
            Navigating the perils and societal hazards of rapidly evolving artificial intelligence.
          </p>
          <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300 pl-5 list-disc">
            <li><strong>Understand AI Risks:</strong> Explore ethical dilemmas, algorithmic bias, copyright concerns, and societal impacts.</li>
            <li><strong>Detect AI Threats:</strong> Spot deepfakes, synthetic audiovisual media, and automated disinformation campaigns.</li>
            <li><strong>Use AI Safely:</strong> Concrete best practices to safeguard personal privacy and verify AI-generated conclusions.</li>
          </ul>
        </div>

        {/* Course 4 */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">4</span>
              Cloud untuk Rakyat
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Trainocate
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                ⏱️ 40 min • 7 modules • 4 languages
              </span>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
            Essential foundation in modern distributed infrastructure that powers the modern Internet and AI models.
          </p>
          <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300 pl-5 list-disc">
            <li><strong>Cloud Basics:</strong> Demystifying compute, storage, virtualization, and scalability.</li>
            <li><strong>Cloud Applications:</strong> Understanding how cloud backbones deliver contemporary web and mobile software.</li>
            <li><strong>Cloud Security:</strong> Key tenets of shared responsibility, identity management, and secure remote operations.</li>
          </ul>
        </div>

        {/* Course 5 */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">5</span>
              CyberSAFE untuk Rakyat
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                CyberSecurity Malaysia × Trainocate
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                ⏱️ 40 min • 5 modules • 2 languages
              </span>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
            Crucial defense training designed in partnership with national cybersecurity authority CyberSecurity Malaysia.
          </p>
          <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300 pl-5 list-disc">
            <li><strong>Cyber Awareness:</strong> The value of protecting personal identification, credentials, and digital assets.</li>
            <li><strong>Cyber Hygiene:</strong> Effective password practices, multi-factor authentication, and avoiding phishing traps.</li>
            <li><strong>Cyber Response:</strong> How to detect online banking scams and report security breaches to national response agencies.</li>
          </ul>
        </div>

        {/* Course 6 */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">6</span>
              Generative AI
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Intel
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                ⏱️ 40 min • 8 modules • 4 languages
              </span>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
            Curated with semiconductor giant Intel to break down modern generative machine learning models.
          </p>
          <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300 pl-5 list-disc">
            <li><strong>AI Fundamentals:</strong> How LLMs and diffusion models process tokens and generate text, code, and images.</li>
            <li><strong>AI Application:</strong> Prompt engineering tricks, iterative refinement, and leveraging generative tools for everyday work.</li>
            <li><strong>AI Awareness:</strong> Understanding hallucination limitations, ethical constraints, and real-world deployment considerations.</li>
          </ul>
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        Step-by-Step: How You Can Claim Your Free 3 Months
      </h2>
      
      <div className="relative border-l-2 border-blue-500/30 dark:border-blue-400/20 pl-6 ml-4 space-y-8 my-10">
        {/* Step 1 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
            1
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Register & Log In with MyDigital ID
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Head to <a href="https://rakyatdigital.gov.my" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold underline">rakyatdigital.gov.my</a>. Authentication is handled strictly via <strong>MyDigital ID</strong>. This guarantees that benefits are reserved exclusively for eligible Malaysian citizens and verifies your age bracket (18-30).
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
            2
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Complete the 6 Prescribed Courses
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Navigate to the course portal at <a href="https://portal.rakyatdigital.gov.my/courses" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold underline">portal.rakyatdigital.gov.my/courses</a>. Go through the video modules and short quizzes for each of the 6 courses listed above. Most quizzes are straightforward if you pay attention to the key takeaways.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
            3
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Unlock the "Redeem AI" Tab
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Once your course completion status turns 100%, the AI redemption section unlocks. Here, you'll see the 4 options: <strong>Gemini</strong>, <strong>ILMU Chat</strong>, <strong>MuleRun</strong>, and <strong>WonderClip</strong>.
          </p>
        </div>

        {/* Step 4 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
            4
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Select Your Tool & Confirm (One-time Choice)
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Choose your preferred tool carefully! Click <strong>Redeem</strong> under your chosen tool. Confirm your registered email address.
          </p>
        </div>

        {/* Step 5 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
            5
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Check Your Email for the Activation Link
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Within 48 hours, you will receive an official onboarding email with your unique activation link. Click the link to initialize your account, and enjoy <strong>3 months of completely free, unrestricted AI access</strong>!
          </p>
        </div>
      </div>

      {/* Final Thoughts / Call to Action */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white my-12 shadow-xl">
        <h3 className="text-2xl font-black mb-3 text-white">Is It Worth Your Time? Absolutely.</h3>
        <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-6">
          Getting 3 months of access to an enterprise AI workforce platform like MuleRun or Gemini Enterprise usually costs significant subscription fees. In exchange for spending ~5 hours brushing up on agentic AI, cloud foundations, and cyber hygiene, you walk away with both recognized micro-credentials and a premium AI workforce tool at zero cost.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://rakyatdigital.gov.my"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-blue-700 font-bold shadow-md hover:bg-blue-50 transition-all text-sm md:text-base"
          >
            Go to Rakyat Digital 🚀
          </a>
          <a
            href="https://portal.rakyatdigital.gov.my/courses"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-800/80 hover:bg-blue-800 text-white font-semibold transition-all text-sm md:text-base"
          >
            Browse Course Catalog 📚
          </a>
        </div>
      </div>

      {/* Footer Navigation Back to Blog */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm">
        <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1">
          &larr; Back to all articles
        </Link>
        <span className="text-slate-500">Published on 8 September 2026 • Hovah Yii</span>
      </div>
    </div>
  );
}
