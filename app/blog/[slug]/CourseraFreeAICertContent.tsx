"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function CourseraFreeAICertContent() {
  return (
    <div className="prose lg:prose-xl max-w-none text-slate-900 dark:text-slate-100 pb-20">
      {/* Hero Banner Section */}
      <div className="mb-12 p-8 md:p-12 rounded-[2.5rem] border border-indigo-200 dark:border-indigo-900 bg-gradient-to-br from-indigo-50 via-white to-blue-50/50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-blue-950/40 shadow-2xl overflow-hidden relative">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-300 text-xs font-bold tracking-widest uppercase mb-6">
            <span>🇲🇾</span>
            <span>Rakyat Digital Skills Hub • Coursera</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 text-slate-900 dark:text-white leading-[1.15] tracking-tight">
            How to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Free AI Certifications</span> on Coursera via Rakyat Digital
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
            Malaysia&apos;s <strong>Rakyat Digital Skills Hub</strong> now offers <strong>free access to Coursera</strong> professional courses for Malaysian citizens. Here&apos;s my complete walkthrough on how to sign up, log in, and start earning <strong>free certifications</strong> in AI, data science, and more!
          </p>
          
          {/* Quick Stat Pill Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-blue-600 dark:text-blue-400 font-bold block text-base">🇲🇾 Citizens Only</span>
              Free via MyDigital ID
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold block text-base">🎓 Coursera</span>
              Professional Certs
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-purple-600 dark:text-purple-400 font-bold block text-base">🤖 AI Courses</span>
              RAG, Vectors, GenAI
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold block text-base">💰 100% Free</span>
              Government Funded
            </div>
          </div>
        </div>

        {/* Ambient Blur circles */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full -mr-28 -mt-28 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full -ml-28 -mb-28 blur-[100px] pointer-events-none"></div>
      </div>

      {/* Intro Hook */}
      <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-200 font-normal">
        If you&apos;ve already signed up for <strong>Rakyat Digital</strong> (or followed my <Link href="/blog/how-to-get-free-mulerun-rakyat-digital" className="text-blue-600 dark:text-blue-400 underline font-semibold">previous post on getting free MuleRun</Link>), you already have access to a hidden gem — the <strong>Skills Hub</strong>, which gives you <strong>free Coursera courses</strong> with real certifications!
      </p>
      <p>
        In this post, I&apos;ll walk you through how to access Coursera through the Skills Hub, and share the <strong>AI courses I recommend</strong> — including one I personally found super valuable.
      </p>

      {/* Overview Image */}
      <div className="my-10 flex flex-col items-center">
        <Image
          src="/blog/coursera/coursera-hero.jpg"
          alt="Coursera Free AI Certifications via Rakyat Digital Skills Hub"
          width={1080}
          height={500}
          className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
          priority
        />
        <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-3">
          Access free Coursera courses and AI certifications through Malaysia&apos;s Rakyat Digital Skills Hub.
        </p>
      </div>

      {/* What is Skills Hub */}
      <div className="bg-gradient-to-br from-slate-50 to-indigo-50/40 dark:from-slate-900 dark:to-indigo-950/30 p-6 md:p-8 rounded-2xl border border-indigo-100 dark:border-indigo-900/60 my-10 shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white text-sm">📌</span>
          What is the Skills Hub?
        </h3>
        <div className="text-base space-y-3">
          <p>
            The <strong>Rakyat Digital Skills Hub</strong> (<a href="https://rakyatdigital.gov.my/skills-hub" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">rakyatdigital.gov.my/skills-hub</a>) is a new initiative under the same Rakyat Digital platform. It provides Malaysian citizens with <strong>free access to Coursera&apos;s professional course catalogue</strong>, including guided projects, specializations, and professional certificates.
          </p>
          <p>
            This is separate from the AI Untuk Rakyat programme (which gives you MuleRun/Gemini). The Skills Hub focuses on <strong>upskilling through structured learning</strong> — and the best part is, <strong>you get real Coursera certifications</strong> that you can add to your LinkedIn and resume!
          </p>
        </div>
      </div>

      {/* How to Login & Access Coursera */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        Step-by-Step: How to Login to Coursera via Skills Hub
      </h2>
      <p>
        The sign-up process uses the same <strong>MyDigital ID</strong> login as the main Rakyat Digital portal. If you&apos;ve already signed up for AI Untuk Rakyat, you can use the same account!
      </p>

      {/* Important Cross-reference */}
      <div className="p-6 rounded-2xl border-l-4 border-blue-500 bg-blue-50/80 dark:bg-blue-950/30 text-slate-800 dark:text-blue-100 my-8 shadow-sm">
        <div className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-300 text-lg mb-2">
          <span>💡</span>
          <span>Already signed up for Rakyat Digital?</span>
        </div>
        <p className="text-base m-0 leading-relaxed">
          If you followed my <Link href="/blog/how-to-get-free-mulerun-rakyat-digital" className="text-blue-600 dark:text-blue-400 underline font-semibold">previous Rakyat Digital post</Link> to get free MuleRun, you already have a MyDigital ID account. You can skip straight to Step 3 below!
        </p>
      </div>

      <div className="relative border-l-2 border-indigo-500/30 dark:border-indigo-400/20 pl-6 ml-4 space-y-8 my-10">
        {/* Step 1 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">
            1
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Go to Rakyat Digital
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Head to <a href="https://rakyatdigital.gov.my" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold underline">rakyatdigital.gov.my</a> and log in using your <strong>MyDigital ID</strong>. This is the same login used across all Rakyat Digital services.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">
            2
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Navigate to the Skills Hub
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Once logged in, find the <strong>&quot;Skills Hub&quot;</strong> section on the portal, or go directly to <a href="https://rakyatdigital.gov.my/skills-hub#coursera" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold underline">rakyatdigital.gov.my/skills-hub#coursera</a>. This is the dedicated Coursera integration page.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">
            3
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Click &quot;Mula Belajar&quot; (Start Learning)
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            On the Skills Hub Coursera section, click the <strong>&quot;Mula Belajar&quot;</strong> (Start Learning) button. This will redirect you to Coursera&apos;s platform with your <strong>Rakyat Digital sponsored access</strong> already applied.
          </p>
        </div>

        {/* Step 4 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">
            4
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Create / Link Your Coursera Account
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            If you don&apos;t have a Coursera account yet, you&apos;ll be prompted to create one. Use the <strong>same email</strong> registered with your MyDigital ID for a seamless experience. If you already have a Coursera account, simply link it. Your <strong>sponsored access</strong> will unlock professional courses and certifications at no cost.
          </p>
        </div>

        {/* Step 5 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">
            5
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Enroll in Courses & Earn Certifications
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Browse the available courses, enroll, complete the modules and assessments, and <strong>earn your free certifications</strong>! These are real Coursera certificates that you can share on LinkedIn and add to your resume.
          </p>
        </div>
      </div>

      {/* Recommended AI Courses */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        🤖 Recommended AI Courses to Take
      </h2>
      <p>
        There are multiple courses available on the platform, but if you&apos;re interested in <strong>AI and data science</strong>, I highly recommend starting with these three. They cover essential topics like <strong>Knowledge Graphs, RAG, Vector Databases, and Generative AI project planning</strong> — skills that are in massive demand right now.
      </p>

      <div className="space-y-6 my-10">
        {/* Course 1: Knowledge Graphs & RAG */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/60 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-600 transition-all hover:shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold">1</span>
              Knowledge Graphs & RAG
            </h3>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
              🔥 Guided Project
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
            Learn how to build <strong>Knowledge Graphs</strong> and apply <strong>Retrieval-Augmented Generation (RAG)</strong> techniques. RAG is one of the most important patterns in modern AI — it lets LLMs ground their answers in real data instead of hallucinating.
          </p>
          <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300 pl-5 list-disc mb-4">
            <li><strong>Build knowledge graphs</strong> from unstructured data</li>
            <li><strong>Implement RAG pipelines</strong> to enhance LLM responses</li>
            <li><strong>Combine structured + unstructured</strong> retrieval strategies</li>
          </ul>
          <a
            href="https://www.coursera.org/organizations/skills-at-scale/projects/knowledge-graphs-rag"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors no-underline"
          >
            Open Course →
          </a>
        </div>

        {/* Course 2: Vector Databases */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 shadow-sm hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">2</span>
              Vector Databases: From Embeddings to Applications
            </h3>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
              🔥 Guided Project
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
            Understand the backbone of modern AI search — <strong>vector databases</strong>. Learn how text embeddings work, how to store and query them, and how to build <strong>semantic search applications</strong> that go far beyond keyword matching.
          </p>
          <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300 pl-5 list-disc mb-4">
            <li><strong>Text embeddings</strong> and how they encode meaning</li>
            <li><strong>Vector similarity search</strong> with real databases</li>
            <li><strong>Build end-to-end</strong> semantic search applications</li>
          </ul>
          <a
            href="https://www.coursera.org/organizations/skills-at-scale/projects/vector-databases-from-embeddings-to-applications"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors no-underline"
          >
            Open Course →
          </a>
        </div>

        {/* Course 3: Planning a GenAI Project */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900/60 shadow-sm hover:border-purple-400 dark:hover:border-purple-600 transition-all hover:shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-600 text-white text-xs font-bold">3</span>
              Planning a Generative AI Project
            </h3>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
              📘 Course
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
            This course teaches you how to <strong>plan and scope GenAI projects</strong> from ideation to deployment. Perfect for product managers, team leads, and engineers who want to move beyond just &quot;playing with ChatGPT&quot; and into <strong>real production AI</strong>.
          </p>
          <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300 pl-5 list-disc mb-4">
            <li><strong>Scoping GenAI projects</strong> for business impact</li>
            <li><strong>Technical feasibility</strong> assessment and risk management</li>
            <li><strong>Cross-functional planning</strong> with stakeholders</li>
          </ul>
          <a
            href="https://www.coursera.org/organizations/skills-at-scale/learn/planning-a-generative-ai-project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-700 transition-colors no-underline"
          >
            Open Course →
          </a>
        </div>
      </div>

      {/* Personal Recommendation */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        ⭐ My Personal Recommendation
      </h2>

      <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/30 dark:via-slate-900 dark:to-teal-950/30 border-2 border-emerald-300 dark:border-emerald-800 my-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full -mr-16 -mt-16 blur-[80px] pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4">
            <span>⭐</span>
            <span>Hovah&apos;s Pick</span>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
            🎓 Google AI for Data Analysis
          </h3>
          
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
            Out of everything available, I personally recommend <strong>Google AI for Data Analysis</strong>. This course by Google teaches you how to leverage AI tools for real-world data analysis tasks — from <strong>data cleaning and transformation</strong> to <strong>visualization and insight generation</strong>. It&apos;s practical, well-structured, and incredibly relevant whether you&apos;re a data analyst, business analyst, or just someone who works with data regularly.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-emerald-200/60 dark:border-emerald-700/60">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold block text-sm">📊 Data Analysis</span>
              <span className="text-xs text-slate-600 dark:text-slate-400">Real-world datasets</span>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-emerald-200/60 dark:border-emerald-700/60">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold block text-sm">🤖 AI-Powered</span>
              <span className="text-xs text-slate-600 dark:text-slate-400">Google AI tools</span>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-emerald-200/60 dark:border-emerald-700/60">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold block text-sm">🏢 By Google</span>
              <span className="text-xs text-slate-600 dark:text-slate-400">Industry recognized</span>
            </div>
          </div>
          
          <a
            href="https://www.coursera.org/learn/google-ai-for-data-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-base hover:bg-emerald-700 transition-colors shadow-md no-underline"
          >
            🚀 Take This Course →
          </a>
        </div>
      </div>

      {/* Important Tips */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        💡 Tips for Getting the Most Out of It
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">📜</span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white m-0">Complete to Get Certified</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
            Make sure you finish all modules and pass the assessments. Only completed courses earn you the <strong>Coursera certificate</strong> that you can share on LinkedIn.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-400 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🔗</span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white m-0">Add to LinkedIn</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
            After completing a course, Coursera gives you a shareable link. Add it directly to your LinkedIn profile under <strong>Licenses & Certifications</strong> to boost your professional credibility.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-purple-400 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">⏰</span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white m-0">Act While It&apos;s Free</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
            This is a government-funded initiative and access may be limited or time-bound. <strong>Enroll in courses now</strong> while the sponsored access is still active!
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-400 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🎯</span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white m-0">Focus on AI Skills</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
            AI skills are the most in-demand right now. The courses above cover <strong>RAG, vector databases, GenAI planning, and data analysis</strong> — all critical for the 2026 job market.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-700 text-white my-12 shadow-xl">
        <h3 className="text-2xl font-black mb-3 text-white">Don&apos;t Sleep on Free Education 🚀</h3>
        <p className="text-indigo-100 text-base md:text-lg leading-relaxed mb-6">
          These Coursera courses normally cost <strong>$49–$79 each</strong>. Through the Rakyat Digital Skills Hub, Malaysian citizens get them <strong>completely free</strong>. With AI transforming every industry, now is the best time to upskill — and the government is literally paying for it.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://rakyatdigital.gov.my/skills-hub#coursera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-indigo-700 font-bold shadow-md hover:bg-indigo-50 transition-all text-sm md:text-base no-underline"
          >
            Go to Skills Hub 🎓
          </a>
          <a
            href="https://www.coursera.org/learn/google-ai-for-data-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-800/80 hover:bg-indigo-800 text-white font-semibold transition-all text-sm md:text-base no-underline"
          >
            My Top Pick: Google AI for Data Analysis ⭐
          </a>
        </div>
      </div>

      {/* Footer Navigation Back to Blog */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm">
        <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1">
          &larr; Back to all articles
        </Link>
        <span className="text-slate-500">Published on 18 September 2026 • Hovah Yii</span>
      </div>
    </div>
  );
}
