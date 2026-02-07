"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '../data/blogPosts';
import CES2026Content from './CES2026Content';
import NvidiaCES2026Content from './NvidiaCES2026Content';
import DeepSeekR1RevisitContent from './DeepSeekR1RevisitContent';
import ClaudeSmartForkingContent from './ClaudeSmartForkingContent';
import ClawdbotContent from './ClawdbotContent';
import DeepSeekOCR2Content from './DeepSeekOCR2Content';
import KimiK25Content from './KimiK25Content';
import MoltbotContent from './MoltbotContent';
import AISpringFestivalContent from './AISpringFestivalContent';

interface BlogPostClientProps {
  slug: string;
  postData: Omit<BlogPost, 'content'>;
}

export default function BlogPostClient({ slug, postData }: BlogPostClientProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [views, setViews] = useState<number>(0);
  const [isLoadingViews, setIsLoadingViews] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch this data from an API or CMS
    // For now, we'll hardcode the blog post content
    if (slug === 'how-to-publish-app-into-appgallery-store') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <p className="text-xl font-medium mb-6">
              Publishing your Android app to Huawei AppGallery can seem daunting at first, but with this step-by-step guide, you'll have your app live in no time. Let's walk through the entire process together.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">How to Publish Your App into AppGallery Store</h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Go into your App Service Console
              </h3>
              <p className="mt-3 mb-4">Start by navigating to the <a href="https://developer.huawei.com/consumer/en/console/service/AppService" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">App Service Console</a> on Huawei Developer.</p>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/appgallery/app-services.png"
                  alt="App Service Console"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                Click App Release
              </h3>
              <p className="mt-3 mb-4">Once you're in the console, locate and click on the "App Release" option to begin the publishing process.</p>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/appgallery/workspace.png"
                  alt="App Release Workspace"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                Click Version/Update &gt; Distribute
              </h3>
              <p className="mt-3 mb-4">Navigate to Version/Update and select "Distribute" to start configuring your app release.</p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/30 dark:to-red-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                Fill in All the Details
              </h3>
              <p className="mt-3 mb-4">Complete all required information. If you're releasing for Beta Testing, make sure to fill up the Open Testing section with all necessary details.</p>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/appgallery/open-testing.png"
                  alt="Open Testing Configuration"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">5</span>
                Upload Your APK
              </h3>
              <p className="mt-3 mb-4">Upload your APK using your released version APK in the App version section. Assign the version number for your application release.</p>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md my-4">
                <h4 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">Understanding Version Numbers</h4>
                <p className="mb-3">You may use the following information for assigning the app version. Here's a simple breakdown of the <strong>1.0.2</strong> example:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>1 (MAJOR):</strong> This is the Major version. This number changes when you make huge, incompatible changes. For example, a complete redesign of the app, or removing old features that other code might depend on. Going from version 1.x.x to 2.0.0 is a big deal and often means users will have to relearn things.</li>
                  <li><strong>0 (MINOR):</strong> This is the Minor version. This number changes when you add new features in a way that doesn't break anything. Everything that worked in version 1.0.0 will still work in 1.1.0, but 1.1.0 just has more stuff.</li>
                  <li><strong>2 (PATCH):</strong> This is the Patch version. This number changes when you fix bugs. No new features are added. You're just fixing problems with the current version. This is the most common type of update you'll see.</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">6</span>
                Setup Privacy Policy URL
              </h3>
              <p className="mt-3 mb-4">Make sure you setup a landing page for Privacy Policy URL in the Privacy Statement section. This is a required field for app submission.</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-green-50 dark:from-yellow-900/30 dark:to-green-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">7</span>
                Submit for Review
              </h3>
              <p className="mt-3 mb-4">For Release, select "Immediately once Approved" and then click submit. Your app will now be queued for review by the AppGallery team.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">How to Boost Your Progress</h2>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Submit a Support Ticket
              </h3>
              <p className="mt-3 mb-4">Go to <a href="https://developer.huawei.com/consumer/cn/support/feedback/#/ticketlist" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Huawei Developer Support</a> and submit a ticket to expedite the review process.</p>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/appgallery/ticket.png"
                  alt="Submit Support Ticket"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                Review Timeline
              </h3>
              <p className="mt-3 mb-4">The fastest it will take is 3 days for the app to be released. Be patient and ensure all your app details are correct before submission.</p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                Check Audit Report
              </h3>
              <p className="mt-3 mb-4">Also check the Audit Report for what's going wrong: <a href="https://developer.huawei.com/consumer/en/service/josp/agc/index.html#/auditReportView" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">View Audit Report</a></p>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                Search Your App
              </h3>
              <p className="mt-3 mb-4">If your app is released, you can actually search for it in AppGallery. Congratulations on your successful app launch!</p>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/appgallery/bilcekap.jpeg"
                  alt="App Search in AppGallery"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-4">ðŸŽ‰ Congratulations!</h2>
              <p className="mt-3">You've successfully learned how to publish your app to Huawei AppGallery. Follow these steps carefully, and your app will be available to millions of users in no time!</p>
            </div>
          </div>
        )
      });
    } else if (slug === 'how-to-get-free-cursor-using-student-email') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="my-6 p-6 border-l-4 border-blue-500 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 shadow-lg">
              <p className="font-bold text-xl mb-2">ðŸš¨ BREAKING NEWS: May 7, 2025 ðŸš¨</p>
              <p className="text-lg font-semibold mb-2">Cursor just dropped this bombshell:</p>
              <blockquote className="pl-4 italic border-l-2 border-blue-300 dark:border-blue-700 my-2">
                "Cursor is now free for students. Enjoy!"
              </blockquote>
              <a
                href="https://x.com/cursor_ai/status/1919846420234031146"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                See the Official Announcement on X
              </a>
            </div>

            <p className="text-xl font-medium mb-6">
              This is HUGE news for students everywhere! As someone who's used both the free and premium versions, I can tell you the difference is night and day. And now you can get all those premium features <span className="font-bold text-blue-600 dark:text-blue-400">absolutely free for an entire year</span>. Here's my step-by-step guide to claiming this amazing offer:
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Your Journey Begins: The Cursor Education Portal
              </h2>
              <p className="mt-3 mb-2">First stop on your journey to free premium features! Head over to the <a href="https://www.cursor.com/cn/students" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Cursor education verification page</a> where the magic begins.</p>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/cursor/cursor-student.png"
                  alt="Cursor Student Program Page"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                Unlock the Gates: Student Email Login
              </h2>
              <p className="mt-3 mb-2">This is where your .edu email becomes your golden ticket! Log in with your student credentials and watch as the digital red carpet rolls out for you.</p>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/cursor/unlock-cursor-freemium.png"
                  alt="Unlock Cursor Freemium Page"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                The Digital Handshake: Form Submission
              </h2>
              <p className="mt-3 mb-2">Submit the form and check your inbox! Cursor will send you a special email faster than you can say "AI-powered coding."</p>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/cursor/unlock-cursor-freemium-email.png"
                  alt="Confirmation Email"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                One Click Away: Email Verification
              </h2>
              <p className="mt-3 mb-2">That big, beautiful verify button is calling your name! One click and you're one step closer to coding nirvana.</p>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/cursor/verify-email.png"
                  alt="Verify Email"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/30 dark:to-red-900/30 p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">5</span>
                Academic Validation: Prove Your Student Status
              </h2>
              <p className="mt-3 mb-2">Time to flash that student ID (digitally, of course)! SheerID will verify you're actually hitting the books and not just claiming to be for the sweet, sweet premium features.</p>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/cursor/verify-academic-status.png"
                  alt="Verify Academic Status"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">6</span>
                The Waiting Game: Verification in Progress
              </h2>
              <p className="mt-3 mb-2">SheerID is working their magic behind the scenes. Soon, your inbox will ping with the good news!</p>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/cursor/SheerID-verification.png"
                  alt="SheerID Verification"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30 p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">7</span>
                The Final Step: Payment Method (Don't Worry!)
              </h2>
              <p className="mt-3 mb-2">Here's the only small catch - you'll need to add a payment method. <span className="font-bold">But don't panic!</span> You won't be charged for the full year, and you can always remove it before renewal.</p>
              <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-md my-3">
                <p className="font-medium">&larr;š ï¸ Pro Tip: Set a calendar reminder for 11 months from now to review your subscription if you don't want it to auto-renew.</p>
              </div>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/cursor/checkout-page.png"
                  alt="Checkout Page"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-4">ðŸŽ‰ Mission Accomplished: Welcome to Premium! ðŸŽ‰</h2>
              <p className="mt-3 mb-2">Congratulations! You've successfully unlocked a full year of Cursor Premium without spending a dime. Check your email for confirmation and start enjoying those premium features immediately!</p>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/cursor/result-email.png"
                  alt="Result Email"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/cursor/result.png"
                  alt="Final Result"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Why This Is a Game-Changer for Students</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">Supercharged Productivity</h3>
                <p>Cursor's AI features help you write code faster than ever before. What used to take hours now takes minutes.</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">Learn While You Code</h3>
                <p>The AI doesn't just write code for you - it explains concepts and helps you understand what's happening under the hood.</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">Premium Features Unlocked</h3>
                <p>Access to GPT-4, longer context windows, and advanced code generation that the free version simply doesn't offer.</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">Real-World Preparation</h3>
                <p>Using professional-grade tools now prepares you for industry work later. Add this to your resume!</p>
              </div>
            </div>


            <div className="text-center mt-10 mb-6">
              <a
                href="https://www.cursor.com/cn/students"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl"
              >
                Claim Your Free Premium Access Now!
              </a>
              <p className="mt-3 text-gray-600 dark:text-gray-400">Limited time offer for verified students only. Don't miss out!</p>
            </div>
          </div>
        )
      });
    } else if (slug === 'qwen-app-public-beta') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 via-white to-slate-50 dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300 font-semibold">Field Notes &larr;€¢ 17/11/2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">Alibaba launches the Qwen App public beta&larr;€”one brand, one flagship personal AI.</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">The codename project is now official: the former Tongyi app has been reborn as <strong>Qwen App</strong>, powered by the same trillion-parameter Qwen3-Max model that already leads open benchmarks. The mission is blunt: build the Chinese equivalent of ChatGPT by aligning the strongest model and the most visible consumer entry point under the exact same name.</p>
            </div>

            <h3 className="text-2xl font-bold mt-10">Brand discipline: from scattered squads to one battalion</h3>
            <p>Alibaba&larr;€™s AI stack used to sound like a field manual: Tongyi, Qwen, Wan, Qwen Chat. Each name belonged to a different team, surface, or repo. The Qwen App announcement translates the original Chinese briefing into a single takeaway&larr;€”<em>brand consolidation concentrates attention</em>. Models keep their codenames, but now the consumer interface shares the model&larr;€™s public identity. &larr;€œHave a question? Ask Qwen.&larr;€</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Same badge for every layer:</strong> the top open-source models are Qwen, and the app you tap on your phone is also Qwen.</li>
              <li><strong>Unified storytelling:</strong> developers and everyday users finally talk under the same keyword instead of juggling Tongyi vs. Qwen vs. Wan.</li>
              <li><strong>Attention routing:</strong> fewer entry points mean cleaner data loops and clearer default habits&larr;€”exactly what a consumer AI war requires.</li>
            </ul>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/qwen/qwen-app.png"
                alt="Qwen App icon preview"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl ring-1 ring-slate-100 dark:ring-slate-800"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">First look: quieter palette, louder intent</h3>
            <p>The visual refresh strips away Tongyi&larr;€™s dual gradients in favor of a single Qwen cyan tone. Inside, the interface goes ultra-minimal: one chat box, a horizontal tray of intents, and a persistent search toggle that defaults to &larr;€œon.&larr;€</p>
            <div className="my-10 grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-4">
                <Image
                  src="/blog/qwen/qwen-app-ui.png"
                  alt="Qwen App UI walkthrough"
                  width={800}
                  height={600}
                  className="rounded-xl"
                />
                <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3">The new single-tone UI: &larr;€œone prompt bar to rule them all.&larr;€</p>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-4">
                <Image
                  src="/blog/qwen/qwen-features.png"
                  alt="Qwen App feature lineup"
                  width={800}
                  height={600}
                  className="rounded-xl"
                />
                <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3">Feature trays bundle chat, Wan image tools, Omni video, math kits, and more.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12">Why people call it &larr;€œChina&larr;€™s ChatGPT&larr;€</h3>
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
              <p>Translated from the original memo, here are the parallels:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Super-app ambition:</strong> daily personal assistant spanning work notes, creative writing, search, coding, shopping, and multimodal creation from one entry point.</li>
                <li><strong>Latest models, no lag:</strong> Qwen App exposes <em>the</em> strongest internal models (Qwen3-Max, Qwen3-Omni, Qwen3-VL) on day one, just like ChatGPT ships OpenAI&larr;€™s newest releases directly.</li>
                <li><strong>Default to online reasoning:</strong> search stays enabled because consumer users expect fresh knowledge without toggles&larr;€”an answer to the hallucination complaints heard during the DeepSeek news cycle.</li>
                <li><strong>Chinese-native UX:</strong> in Chinese contexts the assistant feels smoother than ChatGPT; intents, idioms, and policies read naturally.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12">What the models are actually doing</h3>
            <p>Alibaba&larr;€™s open brief emphasized that the tech card matters as much as the brand card. The new stack includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Qwen3-Max:</strong> 1+ trillion parameters, 36T-token pretrain mix, capable of 69.6 on SWE-Bench and 74.8 on Tau2 Bench&larr;€”both first-tier scores.</li>
              <li><strong>Qwen3-VL & Omni:</strong> 32/36 publicly reported audiovisual benchmarks at SOTA across speech, vision, and video understanding.</li>
              <li><strong>Qwen3-Coder:</strong> accelerated reasoning plus safer completions for IDE workflows.</li>
              <li><strong>Open ecosystem:</strong> 300+ models released, 600M cumulative downloads, 170k derivative checkpoints&larr;€”making Qwen arguably the world&larr;€™s largest open-model matrix.</li>
            </ul>
            <div className="my-8 grid md:grid-cols-2 gap-6">
              <Image
                src="/blog/qwen/ranking.png"
                alt="Leaderboards featuring Qwen models"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
              <Image
                src="/blog/qwen/qwen-family.png"
                alt="Qwen model family"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
            </div>
            <p>The callout from Alibaba&larr;€™s comms team made it explicit: technology earns attention, but brand keeps it. Without a recognizable flag, trillion-parameter feats are just GitHub release notes.</p>

            <h3 className="text-2xl font-bold mt-12">Putting the assistant to the test</h3>
            <p>I ran the same narrative-writing request that originally circulated inside Alibaba (&larr;€œWrite an Oppenheimer confession right before the Trinity test&larr;€). Qwen3-Max responded with startlingly human cadence&larr;€”especially the closing line, &larr;€œbefore the night has fully ended.&larr;€</p>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/qwen/qwen-conversation.png"
                alt="Qwen conversation sample"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <p>The math and vision sandbox is equally confident. Need a 3Ã—3 grid meme or annotated homework sheet? Just drop the photo, describe the edit, and Qwen routes to Wan image edit or Omni reasoning without manual mode switching.</p>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/qwen/qwen-math.png"
                alt="Qwen math helper"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">Product decisions that matter</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Search-on by default:</strong> prevents outdated answers without asking for user literacy about cutoff dates.</li>
              <li><strong>Intent routing in one chat box:</strong> no need to &larr;€œfind the AI photo button&larr;€; just describe the edit.</li>
              <li><strong>Access to Qwen3-Max:</strong> first time regular users can run Alibaba&larr;€™s flagship model inside an official app&larr;€“with system prompts tuned for friendliness.</li>
              <li><strong>Wan + Omni integration:</strong> image editing, video calls, real-time transcription, and AI video generation now share the same conversation log.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-12">Timeline recap: Tongyi &rarr; Qwen</h3>
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow divide-y divide-slate-100 dark:divide-slate-800">
              <div className="p-5">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">2023</p>
                <p className="mt-1"><strong>April:</strong> Tongyi Qianwen debuts; August sees Qwen-7B open-sourced; September welcomes the Tongyi App public launch.</p>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">2023 Q4 &larr;€“ 2024</p>
                <p className="mt-1">Org reshuffles move the Tongyi app from Alibaba Cloud to the Intelligent Information Group; April 2024 ships Tongyi App 3 with Thousand-Question 3 models.</p>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">January 2025</p>
                <p className="mt-1">Qwen Chat launches on the web (chat.qwen.ai) under Alibaba Cloud&larr;€™s Tongyi Lab&larr;€”serving as the playground for raw model capability demos.</p>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">March &larr;€“ October 2025</p>
                <p className="mt-1">Quark (Ali&larr;€™s information app) is redefined as the AI flagship, adds conversation modes, and incubates &larr;€œProject C&larr;€ (C for Chat) around Qwen models.</p>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">November 2025</p>
                <p className="mt-1">Tongyi App renames to Qwen App; version jumps from 3.60.0 straight to 5.0.0; public beta opens simultaneously on web, desktop, and mobile with free access.</p>
              </div>
            </div>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/qwen/apsara.png"
                alt="Qwen ecosystem overview"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">Brand lesson for the rest of us</h3>
            <p>The translated closing thought from the original piece hits home: technology lets you speak; brand makes anyone remember the sentence. Every article you post, every product rename, every UI accent becomes a line in your personal brand statement. Alibaba now plays both the tech card (Qwen3-Max) and the brand card (Qwen App) with equal conviction. The obvious question is: who places the next bet?</p>
            <p className="font-semibold text-slate-900 dark:text-white">So yes, Qwen App might be &larr;€œChina&larr;€™s ChatGPT.&larr;€ But the deeper story is that even trillion-parameter breakthroughs need a name people can tap on. Have a question? Ask Qwen.</p>
          </div>
        )
      });
    } else if (slug === 'clawdbot') {
      setPost({
        ...postData,
        content: <ClawdbotContent />
      });
    } else if (slug === 'deepseek-ocr-2-vision-reasoning') {
      setPost({
        ...postData,
        content: <DeepSeekOCR2Content />
      });
    } else if (slug === 'kimi-k2-5-open-source-king') {
      setPost({
        ...postData,
        content: <KimiK25Content />
      });
    } else if (slug === 'moltbot-100k-stars') {
      setPost({
        ...postData,
        content: <MoltbotContent />
      });
    } else if (slug === 'ai-spring-festival-chatgpt-claude-update') {
      setPost({
        ...postData,
        content: <AISpringFestivalContent />
      });
    } else if (slug === 'ai-killing-programmers-2026-crisis') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 via-white to-slate-50 dark:from-red-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-red-600 dark:text-red-300 font-semibold">Industry Alert &larr;€¢ 29/12/2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">Is AI "Killing" Programmers? Karpathy's Warning & The 2026 Grad Crisis</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                US programmers are undergoing a "Great Purge." Employment rates have plummeted by 27.5%, and nearly 1/3 of jobs are vanishing. For the Class of 2026 CS graduates, the path forward seems blocked. As one veteran programmer put it: "This profession is disappearing. May we leave with glory and have had a good run."
              </p>
            </div>

            <p>
              The "American Programmer" species is gradually facing extinction.
            </p>
            <p>
              This isn't alarmist prophecy; it's a fact happening right now. Global layoffs driven by AI reached 1.17 million in 2025, the highest record since 2020.
            </p>
            <p>
              Computer Science graduates in 2026 are facing a hellish landscape immediately upon graduation&larr;€”simply finding no work!
            </p>
            <p>
              Data from the US Bureau of Labor Statistics shows that the employment rate for US programmers has plummeted by 27.5%. That means almost a third have been cut.
            </p>
            <p>
              What to do? "These violent delights have violent ends."
            </p>

            <h3 className="text-2xl font-bold mt-12">American Coders: Almost Extinct?</h3>
            <p>
              Today in the US, programmer employment has crashed. The Labor Bureau stats say down 27.5%.
            </p>
            <p>
              Stanford University research found that since the widespread adoption of AI tools in late 2022, employment for programmers aged 22-25 dropped by nearly 20%. (<a href="https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Canaries in the Coal Mine? Paper</a>)
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/losing-jobs.png"
                alt="Programmer Employment Drop"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Researchers analyzed wage records from ADP, the largest US payroll company, tracking millions of employees across tens of thousands of firms from 2021 to July 2025.
            </p>
            <p>
              The data shows that employment for young and older developers was consistent until late 2022. But since then, they diverged&larr;€”young developers started losing jobs, while older developers did not.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/canaries.png"
                alt="Young vs Old Developers Divergence"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              According to a US consulting firm, the impact of AI-driven layoffs this year varies. The report shows AI directly or indirectly caused nearly 55,000 job losses in the US this year!
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/ai-layoffs.png"
                alt="AI Layoffs Stats"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              One programmer wrote in their blog: "Why is everyone I know getting laid off?"
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/why-is-everyone-getting-laid-off.png"
                alt="Blog post about layoffs"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              In today's US tech industry, wanting a stable job is incredibly hard. The shadow of layoffs and AI looms over every programmer's head.
            </p>
            <p>
              How should we name this disaster? The Dot-com Bubble Burst? The Great Recession? The Unicorn Massacre? Or CrashGPT?
            </p>
            <p>
              The programmer wrote: Meta laid off thousands, Google froze hiring; this is the slow collapse of a collective hallucination. The FAANG dream is rotting from the inside.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/suggestion.png"
                alt="FAANG Dream Rotting"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">The AI Layoff Cataclysm</h3>
            <p>
              AI is no longer just a productivity tool; it's a role that directly replaces programmer positions.
            </p>

            <h4 className="text-xl font-bold mt-6">Stanford & Toronto CS Grads: Job Hunt Despair</h4>
            <p>
              AI has left no room for young CS graduates. Stanford CS grads graduate only to find the situation completely different from three years ago, leaving them furious.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/standford.png"
                alt="Stanford CS Grads Situation"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Because they can't find work, many have no choice but to study for another year of graduate school. Three years ago, many had jobs secured before they even graduated.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/computer-science-graduate.png"
                alt="CS Graduate Struggle"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Azka Azmi, who graduated from the University of Toronto's CS department this spring, still hasn't found a job.
            </p>
            <p>
              The more she searches, the more frustrated she feels, because in this process, she basically has <strong>zero chance to talk to a real human!</strong>
            </p>
            <p>
              It's AI everywhere. All companies are using AI to replace human recruitment. All you can do is adapt to this world where machines talk to machines.
            </p>
            <p>
              Once, CS was the golden major in everyone's eyes&larr;€”million-dollar contracts, high benefits, fun work environments.
            </p>
            <p>
              But now, due to AI, economic uncertainty, and a flood of CS grads, those legendary perfect jobs have vanished in a snap.
            </p>
            <p>
              Azka Azmi says many students rely on internships or co-ops to find work, but now maybe only 1% of applicants receive a reply.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/ai-surge.png"
                alt="AI Surge"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h4 className="text-xl font-bold mt-6">Grad School? Even Harder to Find Work</h4>
            <p>
              In Spring 2024, Elliot Chen got his CS degree from U of T, then sent out hundreds of resumes.
            </p>
            <p>
              He frustratedly found that opportunities for fresh grads are pitifully scarce. Many positions require at least one year of non-internship experience, which most fresh grads don't have. Many can't even pass the resume screen.
            </p>
            <p>
              Elliot decided to pursue a CS Master's to stand out. Halfway through, he found <strong>he was receiving even fewer employer replies than during his undergrad!</strong>
            </p>
            <p>
              A CS PhD noticed that undergrads in the major are feeling extreme panic about the current job market, even developing mental health issues.
            </p>
            <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
              "Competition is fierce, many environments have become very unfriendly. These kids do everything. They surpass anyone's limits from before. It's brutal for everyone."
            </blockquote>
            <p>
              Chrisee Zhu also feels her classmates are unusually anxious. In group projects, they are often distracted, focusing on job applications and coding exercises (LeetCode) for interviews instead of contributing.
            </p>

            <h3 className="text-2xl font-bold mt-12">Karpathy: Programmers Are Facing a Size 9 Earthquake</h3>
            <p>
              It's not just newbies feeling the AI fear&larr;€”the titans are too.
            </p>
            <p>
              Former Tesla AI Director and OpenAI Co-founder Andrej Karpathy stated he was shocked by powerful "Alien Technology"!
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/andrej-karpathy.PNG"
                alt="Andrej Karpathy"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              This "powerful alien weapon handed to humans" he speaks of is AI.
            </p>
            <p>And he speaks bluntly&larr;€”</p>
            <p className="font-bold text-lg">"I have never felt so 'left behind' as a programmer."</p>
            <p>
              He deeply feels that as the code contributed by programmers becomes sparser and more fragmented, the profession is undergoing violent change.
            </p>
            <p>
              He regrets that if he could have properly strung together the new tools from the past year, his capabilities could have increased tenfold; but failing to master this augmentation is a skill defect.
            </p>
            <p>
              Karpathy summarizes: Today, we face a new, must-master programming abstraction layer (stacked on top of the old stack), involving Agents, Sub-agents, Prompts, Context, Memories, Modes, Permissions, Tools, Plugins, Skills, Hooks, Model Context Protocols, Language Server Protocols, Slash Commands, Workflows, IDE Integrations...
            </p>
            <p>
              More urgently, we need to build a global mental model to understand the pros/cons and traps of these "intelligent entities" that are inherently stochastic, error-prone, elusive, and constantly evolving.
            </p>
            <p>
              And now, they are suddenly intertwined with traditional, rigorous software engineering.
            </p>
            <p>
              Finally, Karpathy exclaims:
            </p>
            <blockquote className="pl-4 border-l-4 border-blue-500 italic my-4 font-semibold">
              "Clearly, some powerful 'Alien Tool' has been handed to us, but it came without a manual!"
            </blockquote>
            <p>
              Everyone has to figure out how to hold and operate this tool on their own. In his words, this <strong>Level 9 Earthquake</strong> is shaking the whole industry! Roll up your sleeves, don't get left behind.
            </p>
            <p>
              Anthropic Engineer Boris Cherny commented that he feels this way every week. Whenever he manually handles a problem, he eventually realizes: Claude could probably handle this.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/boris.PNG"
                alt="Boris Cherny Comment"
                width={900}
                height={300}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Karpathy replied he has similar experiences. "When you wave this weapon around, it might misfire; but if you hold it just right, a powerful laser shoots out and melts your problem directly!"
            </p>

            <h3 className="text-2xl font-bold mt-12">Surviving in AI's Garbage Code</h3>
            <p>
              "AI won't take your job, but someone using AI will."
            </p>
            <p>
              Since October 2023, this has been NVIDIA CEO Jensen Huang's mantra. In the tech wave that followed, this maxim was quoted countless times, becoming the Sword of Damocles hanging over every developer.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/jetson.png"
                alt="Jensen Huang"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Fast forward to late 2025, and the prophecy seems to be fulfilling itself in a confusing and contradictory way.
            </p>
            <p>
              On one hand, a Google industry-wide survey shows a whopping 90% of tech roles now use AI tools. In 2024, that was only 14%.
            </p>
            <p>
              But on the other hand, giants like IBM and Amazon are laying off people like crazy, while the survivors are being drowned in a "Technical Debt Tsunami" of bugs and loopholes created by AI.
            </p>
            <p>
              Today, we might be facing not just a job market shuffle, but a crisis of the very nature of software engineering.
            </p>

            <h4 className="text-xl font-bold mt-6">Progressive Tense: The Extinction of "Coders" & The Survival of "Developers"</h4>
            <p>
              As mentioned, if you are a Class of 2026 grad, you might be facing the toughest job market in decades.
            </p>
            <p>
              According to the NACE "Job Outlook 2026," employer pessimism has reached its highest point since 2020.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/employee rate.png"
                alt="Employee Rate Graph"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
              <p className="text-sm text-center text-gray-500 mt-2">Source: <a href="https://www.naceweb.org/research/reports/job-outlook/2026/#data" className="text-blue-500 hover:underline">NACE</a></p>
            </div>

            <p>
              Here is a highly ironic data contrast revealing AI's precision strike:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>"Programmers":</strong> Employment crashed 27.5%. These roles usually involve writing code to spec, independent and highly structured.</li>
              <li><strong>"Software Developers":</strong> Employment only dipped 0.3%. These roles focus more on design, architecture, and solving complex problems.</li>
            </ul>
            <p>
              Meanwhile, Information Security Analysts and AI Engineers saw double-digit explosive growth.
            </p>
            <p>
              Jamie Grant from UPenn's career service center hit the nail on the head. She warns students chasing software engineering:
            </p>
            <p className="font-semibold">
              "Jobs now are no longer just about writing code. Employers demand higher-order thinking, mastery of the SDLC, and skills AI can't replace&larr;€”like understanding a client's vague requirements."
            </p>

            <h4 className="text-xl font-bold mt-6">AI Code Collapse: The Mythologized "Shit Mountain" Generator</h4>
            <p>
              If "Programmer" roles are shrinking, is it because AI does the work better?
            </p>
            <p>
              No. The truth is jaw-dropping.
            </p>
            <p>
              AI software company CodeRabbit recently released a shocking report, pouring cold water on the industry's blind worship of AI coding:
            </p>
            <p className="font-bold">AI-written code is literally a mess flying with bugs.</p>
            <p>
              CodeRabbit analyzed 470 Pull Requests and concluded:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Human Code:</strong> Average 6.45 issues per request.</li>
              <li><strong>AI Code:</strong> Average 10.83 issues per request.</li>
            </ul>
            <p>
              In other words, AI-generated code has an error rate 1.7x that of humans.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/state of ai vs human.png"
                alt="State of AI vs Human Code"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
              <p className="text-sm text-center text-gray-500 mt-2">Source: <a href="https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report" className="text-blue-500 hover:underline">CodeRabbit</a></p>
            </div>

            <p>
              Even more worrying is the nature of the errors. AI code has a high ratio of "Severe" and "Critical" issues.
            </p>
            <p>
              Although AI is 2x better at spelling and syntax, once it errors, it escalates to deep logical fallacies, missing functional correctness, and code readability disasters.
            </p>
            <p>
              CodeRabbit points out these problems are accumulating like a snowball into a massive "Long-term Technical Debt."
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              <Image
                src="/blog/programmer/ai co-auth.png"
                alt="AI Co-authoring"
                width={500}
                height={300}
                className="rounded-xl shadow"
              />
              <Image
                src="/blog/programmer/ai-pr.png"
                alt="AI PR Analysis"
                width={500}
                height={300}
                className="rounded-xl shadow"
              />
            </div>

            <p>
              Furthermore, security firm Apiiro added insult to injury: <strong>Developers using AI create 10x more security issues than those who don't.</strong> Beacuse AI often "dumbs down" when handling passwords and sensitive info, leading to leaks.
            </p>
            <p>
              Bain & Company stated bluntly in their September report: "Although coding was the earliest field to deploy GenAI, 'cost savings are not significant', and 'results have failed to meet hype expectations'."
            </p>

            <h4 className="text-xl font-bold mt-6">The Absurd Reality of Wiping AI's Butt</h4>
            <p>
              This "High Volume, Low Quality" characteristic is fundamentally changing engineers' daily work.
            </p>
            <p>
              CodeRabbit's AI Director David Loker says: AI accelerated output but introduced predictable, measurable weaknesses.
            </p>
            <p>
              This change forces human developers to take on a new role&larr;€”wiping AI's butt.
            </p>
            <p>
              A July METR study revealed a counter-intuitive phenomenon: <strong>For experienced developers, AI tools actually slowed them down.</strong>
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/against expert forecast.png"
                alt="Against Expert Forecast"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Why? Because programmers are forced to become full-time "Nitpickers."
            </p>
            <p>
              They need to inspect that pile of seemingly perfect but actually bug-ridden code with a microscope. Miss one hidden logic bug, and the whole system might crash.
            </p>
            <p>
              But this doesn't mean we should ditch AI. Jamie Grant compares AI to an "Exoskeleton":
            </p>
            <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
              "Imagine it lets you lift 1000 lbs easily. It should be your work enhancer, reinforcing your higher-level critical thinking."
            </blockquote>
            <p>
              NACE data supports this: 61% of employers say they haven't simply replaced entry-level jobs with AI; instead, 41% plan to use AI to augment these roles.
            </p>

            <h3 className="text-2xl font-bold mt-12">Broken Ladder: Listing in Entry-Level Purgatory</h3>
            <p>
              Meanwhile, this change brings a deeper crisis: How do new engineers grow?
            </p>
            <p>
              In the past, junior engineers honed skills by doing simple, task-oriented "grunt work," gradually growing into independent experts.
            </p>
            <p>
              But now, AI has hogged all that work.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/post peak reality.png"
                alt="Post Peak Reality"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
              <p className="text-sm text-center text-gray-500 mt-2">Source: <a href="https://www.signalfire.com/blog/signalfire-state-of-talent-report-2025" className="text-blue-500 hover:underline">SignalFire</a></p>
            </div>

            <p>
              Today, fresh grads are forced into a "Chicken or Egg" deadlock:
            </p>
            <p>
              If basic work is done by AI, newbies need to be capable of high-level work from Day 1.
              But without the exercise of basic work, how can they acquire high-level capabilities?
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <Image
                src="/blog/programmer/gen z squeeze.png"
                alt="Gen Z Squeeze"
                width={300}
                height={200}
                className="rounded-xl shadow"
              />
              <Image
                src="/blog/programmer/big tech.png"
                alt="Big Tech"
                width={300}
                height={200}
                className="rounded-xl shadow"
              />
              <Image
                src="/blog/programmer/startup.png"
                alt="Startup"
                width={300}
                height={200}
                className="rounded-xl shadow"
              />
            </div>

            <p>
              Mike Roberts, founder of Creating Coding Careers, warns that many companies are short-sighted, only caring about next quarter's results and unwilling to invest in training newbies.
            </p>
            <p>
              "If you don't train new entrants in the market, eventually you won't be able to hire mid-level backbone staff. It's extremely short-sighted."
            </p>

            <h3 className="text-2xl font-bold mt-12">No AI at the Negotiation Table</h3>
            <p>
              By 2026, whether for battle-hardened architects or fresh graduates, the rules have changed.
            </p>
            <p>
              The era of surviving by "memorizing algorithms" or "stacking lines of code" is thoroughly over.
            </p>
            <p>
              As Jamie Grant said, students and newcomers must realize where AI can't help:
            </p>
            <p className="font-semibold">
              "At the negotiation table or key moments of expanding client relationships, AI won't necessarily be by your side. You still need to demonstrate top-tier personal capability."
            </p>
            <p>
              Future engineers are destined not to be just "coders" typing silently in a corner.
            </p>
            <p>
              You must evolve. You must become a strategist who understands business, a rigorous security auditor, and a super-pilot capable of taming the "Bug Generator."
            </p>
            <p>
              Technology hasn't eliminated humans; it has just cruelly stripped away the right of the mediocre to survive.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/programmer/samswara.png"
                alt="Samswara"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

          </div>
        )
      });
    } else if (slug === 'why-chinese-ai-is-rising') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 via-white to-slate-50 dark:from-red-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-red-600 dark:text-red-300 font-semibold">Market Analysis &larr;€¢ 17/12/2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">Why Are Domestic Open Source Models Risen?</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                A tier list of open-source models has gone viral on X recently. DeepSeek, Qwen, Kimi, Zhipu, and MiniMax&larr;€”domestic models are taking top spots. Meanwhile, Llama, backed by Meta's massive silicon investment, only got an honorable mention. This isn't self-promotion; it's the new reality of the global AI landscape according to researchers like Nathan Lambert.
              </p>
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/all-ai.png"
                alt="Global Open Source Model Rankings"
                width={1000}
                height={640}
                className="rounded-2xl shadow-xl"
              />
              <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">Image Source: <a href="https://www.interconnects.ai/p/2025-open-models-year-in-review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">interconnects.ai</a></p>
            </div>

            <p>
              Nathan Lambert (ex-Meta/DeepMind/Hugging Face) and Florian Brand detailed this global shift. Domestic open-source models, led by DeepSeek and Qwen, are changing how the AI industry operates. 2024 might have been Llama's year, but 2025 sees domestic models crushing it on performance, price, ecosystem, and usability.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/nathan-lambert.png"
                alt="Nathan Lambert Article"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/the-open-model-timeline.png"
                alt="Timeline of Open Models"
                width={1000}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">Global open source model release history, 2024.01-2025.11, Source: <a href="https://www.atomproject.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">atomproject.ai</a></p>
            </div>

            <h3 className="text-2xl font-bold mt-12">Why is the world using Chinese open-source models?</h3>
            <p>
              The update rhythm has been relentless. In November, Kimi released <strong>Kimi K2 Thinking</strong>, a trillion-parameter MoE model that topped multiple leaderboards, beating GPT-5 and Claude 4.5.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/bench-telecom.png"
                alt="Benchmark Scores"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              In late October, <strong>MiniMax M2</strong> (also MoE) launched and open-sourced, ranking fifth globally, surpassing Gemini 2.5 Pro and Claude Opus 4.1. In September, Alibaba released a seven-model combo at the Apsara Conference, covering vision, voice, reasoning, and coding.
            </p>

            <p>
              On social media, the praise is everywhere: "Easy to use, cheap, the first choice for small companies." Users praise Kimi K2 Thinking's writing style and "depth over tokens" approach.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/telegram.png"
                alt="Social Media Feedback"
                width={800}
                height={600}
                className="rounded-xl shadow"
              />
            </div>

            <p>
              One user even noted that MiniMax M2 could generate a fully functional website in one go, where Claude Sonnet 4 failed.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/vas.png"
                alt="MiniMax vs Claude Comparison"
                width={800}
                height={500}
                className="rounded-xl shadow"
              />
            </div>

            <p>
              <strong>Qwen</strong> is everywhere&larr;€”from the massive 480B parameter model to the tiny 6B one, from Qwen 3 VL for vision to Qwen 3 Coder. Even the Airbnb CEO stated that while OpenAI is good, it didn't fit them, and Qwen was excellent, practical, and cheaper.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/rcanand.png"
                alt="Airbnb CEO on Qwen"
                width={800}
                height={400}
                className="rounded-xl shadow"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">MiniMax M2: The New Default?</h3>
            <p>
              We tested M2 with a real-world task: processing a 10MB Excel file with 20,000 civil service job listings to build a screening tool.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/minimax.png"
                alt="MiniMax Excel Task"
                width={900}
                height={500}
                className="rounded-xl shadow"
              />
            </div>

            <p>
              M2 uses "Interleaved Thinking"&larr;€”pausing to think before acting, then thinking again. This loop helps it handle complex tasks better than a "think once, do all" approach.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/skyler-miao.png"
                alt="Interleaved Thinking Explanation"
                width={800}
                height={500}
                className="rounded-xl shadow"
              />
            </div>

            <p>
              The result? Extremely accurate processing of job requirements for fresh graduates, years of experience, and location constraints.
            </p>

            <p>
              We also asked it to research M2 itself and make a PPT.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/ppt.png"
                alt="MiniMax Generated PPT"
                width={900}
                height={500}
                className="rounded-xl shadow"
              />
            </div>

            <p>
              For developers, MiniMax provides tutorials for connecting to Claude Code, Cursor, and VS Code.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/minimaxm2.png"
                alt="MiniMax Developer Tools"
                width={900}
                height={500}
                className="rounded-xl shadow"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">Full Attention vs. Sparse Attention</h3>
            <p>
              While DeepSeek drove costs down with sparse/mixed attention, MiniMax M2 surprisingly went back to <strong>Full Attention</strong>. Why? Quality and reliability. As context needs grow, sparse attention might hit limits. M2 balances quality, speed, and price with just 230B parameters.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/artificial-analysis.png"
                alt="Artificial Analysis Report"
                width={900}
                height={500}
                className="rounded-xl shadow"
              />
            </div>

            <p>
              Artificial Analysis confirmed: "Chinese AI laboratories continue to maintain a leading position in the open-source field."
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/intelligence-index.png"
                alt="Intelligence Index"
                width={900}
                height={500}
                className="rounded-xl shadow"
              />
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/hugging-face.png"
                alt="Hugging Face Trending"
                width={900}
                height={500}
                className="rounded-xl shadow"
              />
            </div>
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">Top 4 trending models on Hugging Face are Chinese.</p>


            <h3 className="text-2xl font-bold mt-12">Only Open Source Can Break Barriers</h3>
            <p>
              Open source has lowered the cost of AI for society. DeepSeek showed the world a new training logic. It proved that in an AI world dominated by the US, open source is the way to be seen.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/open-ai.png"
                alt="OpenAI vs Open Source"
                width={600}
                height={400}
                className="rounded-xl shadow"
              />
            </div>

            <p>
              While US giants close their doors to protect commercial interests, Chinese models faced a different reality: scarce compute and chips. If they didn't share, no one could reuse the compute. Now, Baidu has open-sourced Wenxin 4.5. The competition is fierce&larr;€”if you don't open source, someone else will.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/open-model-of-choice.png"
                alt="Open Model Adoption"
                width={900}
                height={500}
                className="rounded-xl shadow"
              />
            </div>
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">Source: <a href="https://a16z.substack.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">a16z</a></p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/lmsys.png"
                alt="LMSYS Leaderboard"
                width={900}
                height={500}
                className="rounded-xl shadow"
              />
            </div>

            <p>
              A complete ecosystem is forming. DeepSeek for low-cost inference, Qwen for fine-tuning, MiniMax for agent validation.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/community-elo-rankings.png"
                alt="Community Elo Rankings"
                width={900}
                height={500}
                className="rounded-xl shadow"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">Jensen Huang: "China is Winning"</h3>
            <p>
              Nvidia CEO Jensen Huang has repeatedly mentioned China's strong position. He noted that Alibaba's Qwen is #1 in the global model open source market.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/nvidia.png"
                alt="Jensen Huang"
                width={900}
                height={500}
                className="rounded-xl shadow"
              />
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/open-source-models.png"
                alt="Open Source Market Share"
                width={900}
                height={500}
                className="rounded-xl shadow"
              />
            </div>

            <p>
              Meanwhile, Meta's Llama strategy is facing hurdles&larr;€”Llama 4's "Behemoth" version seems abandoned, and top talent is leaving. Llama is caught in the middle: too open to profit, not open enough to beat the crowd.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/llama4.png"
                alt="Llama 4 Versions"
                width={900}
                height={500}
                className="rounded-xl shadow"
              />
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/china/derivatives-per-base-model.png"
                alt="Derivatives per Base Model"
                width={900}
                height={500}
                className="rounded-xl shadow"
              />
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mt-12">
              <p className="font-semibold italic text-slate-700 dark:text-slate-300">
                "Open source turns your competitors into your children; no son fights his father."
              </p>
              <p className="mt-4">
                Chinese open-source models have become the foundation of the AI ecosystem. This wave is changing who defines future AI&larr;€”making top-tier AI accessible, cheap, and fast for everyone.
              </p>
            </div>
          </div>
        )
      });
    } else if (slug === 'zhipu-glm-4-7-vibe-coding') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 via-white to-slate-50 dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300 font-semibold">Breaking News &larr;€¢ 24/12/2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">Zhipu Releases GLM-4.7: The Era of Coding for Everyone Has Arrived!</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                Today, Zhipu officially launched and open-sourced its new GLM-4.7 model, with benchmark scores placing it firmly in the first tier of open-source models. This is also a critical move by Zhipu on the eve of their IPO.
              </p>
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/glm4.7/intro.png"
                alt="GLM-4.7 Introduction"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p>
              GLM-4.7 has achieved alignment with or even surpassed GPT-5.1 and Claude Sonnet 4.5 across more than ten agent and reasoning benchmarks including SWE-bench, Terminal Bench 2.0, Ï„&larr;²-Bench, and HLE.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/glm4.7/llm-performance.png"
                alt="GLM-4.7 LLM Performance Comparison"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p>
              When it comes to subscription pricing, GLM-4.7 is a true "price killer": starting at just &larr;¥20 per month, you get three times the usage of Claude Pro. The keyword here is <strong>"affordable."</strong>
            </p>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 my-8">
              <h4 className="text-lg font-bold mb-3">ðŸ”— Quick Links</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>GitHub:</strong> <a href="https://github.com/zai-org/GLM-4.5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/zai-org/GLM-4.5</a></li>
                <li><strong>Hugging Face:</strong> <a href="https://huggingface.co/zai-org/GLM-4.7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">huggingface.co/zai-org/GLM-4.7</a></li>
                <li><strong>ModelScope:</strong> <a href="https://modelscope.cn/models/ZhipuAI/GLM-4.7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">modelscope.cn/models/ZhipuAI/GLM-4.7</a></li>
                <li><strong>API:</strong> BigModel.cn, GLM Coding Plan has been upgraded</li>
                <li><strong>Online Experience:</strong> z.ai full-stack development, with built-in Skills module</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">01. From "Writing Code" to "Managing Tasks" - All Technical Metrics Soaring</h2>

            <p>
              According to Code Arena's professional coding blind test leaderboard for global developers, GLM-4.7 ranks <strong>6th in Web Development</strong>, making it the highest-ranking open-source model globally. It surpasses GPT-5.2 and Claude Sonnet 4.5, claiming the #1 spot among Chinese domestic models.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/glm4.7/webdev.png"
                alt="GLM-4.7 Web Development Ranking"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p>
              Looking at more detailed benchmark tests, GLM-4.7's most significant upgrades are concentrated in three areas: <strong>code, tool calling, and reasoning capabilities</strong>.
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Code Capability:</strong> 73.8% on SWE-bench Verified, 84.9% on LiveCodeBench V6, on par with Claude Sonnet 4.5, placing it in the first tier of open-source models.</li>
              <li><strong>Reasoning:</strong> HLE ("Humanity's Last Exam") scores improved significantly&larr;€”42.8% with tool assistance, over 12 percentage points higher than GLM 4.6, also surpassing GPT 5.1 High.</li>
              <li><strong>Tool Calling:</strong> 87.4% on Ï„&larr;² Bench, BrowseComp improved to 67.5% with context management enabled, showing stable performance in multi-turn web tasks and interactive tool calling scenarios.</li>
            </ul>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/glm4.7/benchmark.png"
                alt="GLM-4.7 Benchmark Results"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p>
              Corresponding to these score improvements are adjustments to its internal thinking mechanism. Building on the previous "interleaved thinking" approach, GLM 4.7 introduces <strong>retained thinking</strong> and <strong>turn-level thinking control</strong>: the model reasons before each generation and tool call, and automatically retains previous reasoning results in multi-turn tasks instead of starting from scratch every time.
            </p>

            <p>
              Developers can also decide whether to enable reasoning on a per-turn basis&larr;€”reducing latency for simple requests while gaining stability for complex tasks. This design emphasizes consistency and controllability in long-task execution, and it's precisely these mechanism changes that support its overall leap in code agents, terminal tasks, and tool collaboration benchmarks.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">02. Higher Win Rate on 100 Real Tasks - Multimodal Skill Orchestration Closing the Development Loop</h2>

            <p>
              To validate GLM 4.7's performance in actual development tasks, Zhipu conducted comparative tests on 100 real programming tasks, covering frontend development, backend logic, and instruction following.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/glm4.7/vs.png"
                alt="GLM-4.7 vs GLM-4.6 Comparison"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Results show that in frontend tasks, GLM 4.7's win rate against version 4.6 improved to <strong>64.6%</strong>, and in instruction-following scenarios, it reached <strong>58.3%</strong>. Even in the most engineering-complex backend direction, its win rate stabilized at <strong>46.7%</strong>.
            </p>

            <p>
              Beyond single-point generation capability, GLM 4.7 has further strengthened its <strong>multi-skill orchestration ability</strong>. GLM-4.7 has launched a full-stack skills environment on Z.ai, connecting to a new Skills module that supports unified orchestration of ASR speech recognition, TTS speech synthesis, GLM 4.6V vision model, and multiple other modules. In multimodal tasks, it can both plan paths and execute actions&larr;€”the "orchestration logic" between tools is now connected.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">03. Real Tests: From 3D Christmas Trees to Switch Mini-Games - Frontend Effects Rival Gemini 3</h2>

            <p>
              We tested GLM-4.7's capabilities through three interactive tasks on the Z.ai platform, examining its performance in 3D control, UI generation, and frontend code implementation.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Scenario 1: 3D Christmas Tree Exploding into a Photo Wall - Hand Gesture Control</h3>

            <p>
              This was one of the most immersive interactive experiences in our testing. GLM-4.7 output a complete HTML code snippet that runs directly, including 3D scene construction, particle interaction, gesture recognition, and UI feedback logic.
            </p>

            <p>
              The initial screen shows a Christmas tree made of over 5,000 particles, with a star featuring glow effects at the top.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/glm4.7/christmas-tree.gif"
                alt="3D Christmas Tree Demo"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg"
                unoptimized
              />
            </div>

            <p>
              Moving the mouse creates natural repulsion ripples among particles, presenting a flowing visual response. In the interaction phase, the system calls the camera to recognize user hand gestures. When the user opens their palm, the entire Christmas tree suddenly explodes, transforming into a ring of floating photo wall, with photos arranged in polaroid format surrounding the user.
            </p>

            <p>
              Continuing to move the palm left and right rotates the photo wall. When making a fist again, all elements collapse back, and the photo wall contracts back into the Christmas tree form, completing a full open-close animation cycle.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/glm4.7/card-slideshow.gif"
                alt="Photo Wall Animation"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg"
                unoptimized
              />
            </div>

            <p>
              Additionally, GLM-4.7 integrated performance optimization mechanisms in the code, such as using InstancedMesh to render large quantities of particles. The entire page maintains high frame rates and smooth performance without relying on build tools.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Scenario 2: iOS Home Screen Clone - Icons Present, Interface Clickable</h3>

            <p>
              With the prompt "1:1 clone iOS system," GLM-4.7 created an iOS-mimicking home page: Safari, Siri, Health, Wallet, and other icons are all clickable.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/glm4.7/app.gif"
                alt="iOS Clone Demo"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg"
                unoptimized
              />
            </div>

            <p>
              Calendar, Weather, Calculator, and other function pages can be entered for interaction, and the calculator can perform basic arithmetic input. While there are still detail differences compared to the latest iOS, the overall experience is smooth and usable, with icon styles and color matching showing basic aesthetic sense.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Scenario 3: Switch Fighting Mini-Game - Controller Interface + Button Linkage</h3>

            <p>
              We also tested a two-player fighting game task. GLM-4.7 generated a complete two-player battle interface, with the overall style highly replicating the Switch console's Joy-Con controller colors and layout: blue controller on the left, red controller on the right, game main screen in the center.
            </p>

            <p>
              Upon entering the game, two stick figure characters appear on screen&larr;€”one blue player, one red enemy&larr;€”with dynamic health bars displayed above their heads. The UI shows current wave and enemy count information in the upper left corner.
            </p>

            <p>
              In terms of controls, the left player can use keyboard A/D to move, J to attack, K to jump; the right player uses U/I/O keys to release skills respectively. While hit detection and skill effects haven't been implemented yet, the overall interface structure, character logic, and key responses are very complete, possessing the framework feel of a real game.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/glm4.7/game.gif"
                alt="Switch Fighting Game Demo"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg"
                unoptimized
              />
            </div>

            <p>
              The entire game includes a rhythm-heavy fighting BGM. Clearly, GLM-4.7 demonstrates considerable usability and stability in key frontend modules like UI construction, keyboard listening, and animation driving.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">04. Conclusion: Chinese SOTA Models in Full Sprint Stage</h2>

            <p>
              From three major benchmark dimensions to real task testing, GLM-4.7 has entered the first tier of global open-source models, becoming a key breakthrough point for Chinese models in the Agent tool track.
            </p>

            <p>
              Whether it's the open-source code being downloaded over 60 million times globally, or the paid API usage consistently ranking in the top ten globally on OpenRouter, it shows that GLM has gradually entered developers' actual tool lists.
            </p>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 rounded-xl shadow-md my-8">
              <p className="font-semibold text-slate-900 dark:text-white">
                Behind GLM-4.7's launch timing is Zhipu's imminent listing on the Hong Kong Stock Exchange&larr;€”a microcosm of Chinese large model enterprises transitioning from research models and open-source ecosystems to "real usage" and "market validation."
              </p>
              <p className="mt-4 text-slate-700 dark:text-slate-300">
                In this new stage, Chinese open-source models are moving from "benchmarking international standards" to "leading and being practical," and GLM-4.7 is a key representative in this process.
              </p>
            </div>

          </div>
        )
      });
    } else if (slug === 'gpt-5-1-emotional-upgrade') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-50 via-white to-slate-50 dark:from-rose-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-rose-500 font-semibold">Release log &larr;€¢ 17/11/2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">GPT-5.1 stops chasing leaderboards and starts chasing &larr;€œgood vibes.&larr;€</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">OpenAI&larr;€™s surprise drop focuses on EQ: GPT-5.1 Instant and GPT-5.1 Thinking now adapt their tone, pick personalities, and spend the right amount of time thinking before they respond. The update reads more like a lifestyle product launch than a benchmark dump&larr;€”and that&larr;€™s the point.</p>
            </div>

            <h3 className="text-2xl font-bold">Two brains, both warmer</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>GPT-5.1 Instant</strong>: the model you touch most often. Still fast, now more playful, more obedient, and capable of <em>adaptive reasoning</em> (quick answers for easy asks, a beat of silent thinking for hard ones).</li>
              <li><strong>GPT-5.1 Thinking</strong>: the &larr;€œdeep work&larr;€ brain. It dials up reasoning time only when needed, trims jargon, and sounds less robotic without abandoning rigor.</li>
            </ul>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.1/new.png"
                alt="GPT-5.1 feature overview"
                width={1000}
                height={640}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold">Preset moods + DIY personalities</h3>
            <p>The headline feature: you can now treat ChatGPT like a phone theme store. Beyond the classic Default/Friendly/Efficient trio, OpenAI added three official modes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Professional</strong> for work reports.</li>
              <li><strong>Candid</strong> when you want straight answers.</li>
              <li><strong>Quirky</strong> for memes and gossip breaks.</li>
            </ul>
            <p>Fan favorites from the beta (<em>Techie</em> and <em>Snarky</em>) stay. You can also manually tune sliders for brevity, enthusiasm, scannability, and emoji frequency. Change it once, and the vibe sticks across every new thread.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.1/personalization.png"
                alt="ChatGPT personalization controls"
                width={900}
                height={560}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold">Rollout plan</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pro/Plus/Go/Business:</strong> rolling out from 12 Nov onward.</li>
              <li><strong>Free + logged-out:</strong> follow after premium wave completes.</li>
              <li><strong>Enterprise & Education:</strong> 7-day early-access toggle (off by default) before auto-upgrading.</li>
              <li><strong>API devs:</strong> GPT-5.1 Instant and GPT-5.1 Thinking land later this week as `gpt-5.1-chat-latest` and `gpt-5.1`.</li>
              <li><strong>Legacy GPT-5</strong>: sticks around for paid users for ~3 months.</li>
            </ul>

            <h3 className="text-2xl font-bold">Instant vs. Thinking: what actually changed?</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6">
                <h4 className="text-xl font-semibold mb-2">GPT-5.1 Instant</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Conversation style mirrors human banter; no more &larr;€œclassmate reading from a script.&larr;€</li>
                  <li>Adaptive reasoning toggles extra thought only when questions warrant it.</li>
                  <li>Better jailbreak resistance vs. GPT-5 (per StrongReject tests).</li>
                  <li>Still the default model in the ChatGPT UI.</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6">
                <h4 className="text-xl font-semibold mb-2">GPT-5.1 Thinking</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Dynamic reasoning budget: ~2Ã— faster on trivial tasks, up to 71% longer on gnarly ones.</li>
                  <li>Plain-language explanations with fewer acronyms.</li>
                  <li>Slight safety regressions on harassment/hate filters&larr;€”flagged in the system card.</li>
                </ul>
              </div>
            </div>

            <div className="my-8 grid md:grid-cols-2 gap-6">
              <Image
                src="/blog/chatgpt5.1/chatgpt5.1-instant.png"
                alt="GPT-5.1 Instant UI"
                width={900}
                height={560}
                className="rounded-2xl shadow"
              />
              <Image
                src="/blog/chatgpt5.1/response.png"
                alt="GPT-5.1 Thinking response timing"
                width={900}
                height={560}
                className="rounded-2xl shadow"
              />
            </div>

            <h3 className="text-2xl font-bold">Safety: new dimensions</h3>
            <p>OpenAI&larr;€™s system card expands beyond typical abuse filters. GPT-5.1 now evaluates:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mental health cues</strong> &larr;€” can the assistant respond responsibly to isolation, delusion, or mania signals?</li>
              <li><strong>Emotional reliance</strong> &larr;€” does the conversation accidentally encourage unhealthy attachment?</li>
            </ul>
            <p>Overall safety matches GPT-5, except for the Thinking model&larr;€™s &larr;€œlight regressions&larr;€ around harassment/hate moderation. Meanwhile, Instant improves jailbreak resistance.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.1/paper.png"
                alt="GPT-5.1 system card excerpt"
                width={900}
                height={560}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold">Why this update matters</h3>
            <p>No benchmark chart, no &larr;€œ+XX% on MMLU.&larr;€ Instead, OpenAI quotes users: &larr;€œA great AI isn&larr;€™t just smart&larr;€”it&larr;€™s enjoyable.&larr;€ GPT-5.1 is the first release to treat personality, tone, and empathy as first-class features. After the GPT-5 backlash, this feels like a tacit admission: accuracy wins respect, but warmth wins retention.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.1/asking.png"
                alt="Adaptive reasoning example"
                width={900}
                height={560}
                className="rounded-2xl shadow"
              />
            </div>

            <h3 className="text-2xl font-bold">How to use it today</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Update to the latest ChatGPT app (web or native). Instant becomes the new default once your account gets the rollout.</li>
              <li>Visit Settings &rarr; Personalization to pick a preset or tune your own sliders.</li>
              <li>Tell ChatGPT mid-conversation how you want it to sound; it may offer to save that preference automatically.</li>
              <li>For API work, swap to `gpt-5.1-chat-latest` (Instant) or `gpt-5.1` (Thinking) as soon as they show up in your account.</li>
            </ol>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mt-12">
              <h4 className="text-xl font-semibold mb-3">TL;DR</h4>
              <p>GPT-5.1 is a minor-number bump with a major attitude change. It adapts how long it thinks, how it speaks, and even how cheeky it feels&larr;€”because OpenAI finally admits the chat part of ChatGPT matters as much as the GPT. IQ + EQ, one update.</p>
            </div>
          </div>
        )
      });
    } else if (slug === 'gemini-3-ultimate-ai') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 via-white to-slate-50 dark:from-purple-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-300 font-semibold">AI News &larr;€¢ 20 November 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">Google Gemini 3 launches as the ultimate AI powerhouse</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">In the early hours, Google's ultimate weapon Gemini 3 made its grand debut, launching straight with the top-tier Pro version. Claiming to be "the strongest reasoning + multimodal + vibe coding" three-in-one AI champion! Benchmark tests sweep the board, even defeating GPT-5.1, ushering in the next era of AI.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Executive Summary</h2>
            <p>The model is trained on Google TPU with a 1 million token context window, suitable for applications requiring: Agent capabilities, advanced programming, long context, multimodal understanding, and algorithm development.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/gemini-3/gemini-3-pro.png"
                alt="Gemini 3 Pro announcement"
                width={1000}
                height={640}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h3 className="text-2xl font-bold mt-10">Dominating the Leaderboards</h3>
            <p>Upon release, Gemini 3 practically dominated all benchmark tests, ranking first on the LMArena large model arena with an Elo score of 1501.</p>

            <p>To summarize Google's words, Gemini 3 Pro's top-tier core lies in these three points:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dominating LMArena (1501 points) and WebDev (1487 points)</strong></li>
              <li><strong>Humanity's Last Exam (HLE) achieving 45.8% highest score</strong> &larr;€” PhD-level human reasoning</li>
              <li><strong>King of long-term task planning on Vending-Bench 2</strong></li>
            </ul>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/gemini-3/ranking.png"
                alt="Gemini 3 benchmark rankings"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">Full Availability</h3>
            <p>Gemini 3 is now fully open. Starting today:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regular and subscription users can use the new model through the Gemini App and Search AI mode</li>
              <li>Developers and enterprise customers can access it through AI Studio, Vertex AI, and other channels</li>
              <li>The highly anticipated "Deep Think Mode" is expected to be exclusively available to Google AI Ultra subscribers in the coming weeks</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Pure Power: Sam Altman's Response</h2>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/gemini-3/sam-altman.png"
                alt="Sam Altman's congratulations"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Sam Altman sends his congratulations (Fun fact: Logan used to work with Sam)</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Vibe Coding: One Prompt, Full Stack</h2>
            <p>Before writing this article, I threw this prompt to the just-released Gemini 3 Pro:</p>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-6">
              <p className="font-mono text-sm">
                "Create a single-file HTML realistic GBA emulator with CSS-drawn exquisite purple console. Game content is Chinese version PokÃ©mon turn-based battle (Pikachu VS Bulbasaur), must reference original GitHub pixel assets and use Web Audio to synthesize sound effects"
              </p>
            </div>

            <p>Without multi-turn dialogue, it produced a complete project:</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/gemini-3/pokemon.jpg"
                alt="Pokemon GBA emulator created by Gemini 3"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>Of course... the world can be even more wild. This elementary school handwriting practice was also generated in one shot:</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/gemini-3/typography.jpg"
                alt="Typography example"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>There are even more outrageous examples from Twitter users:</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/gemini-3/brick-builder.jpg"
                alt="Brick builder app by @YiTayML"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400">Created by @YiTayML</p>

            <p className="mt-8">And this portfolio website from designer Zang:</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/gemini-3/porfolio.png"
                alt="Portfolio website design"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400">"If a big tech frontend developer can write code like this from a Figma design during the first review, I'd be burning incense in gratitude."</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">What's New Besides Gemini 3?</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Gemini 3 Pro:</strong> The world's strongest model, supporting multimodal reasoning, long context, and Agentic Coding</li>
              <li><strong>Google Antigravity:</strong> A platform natively supporting Agent development, managing Agent tasks</li>
              <li><strong>Generative UI:</strong> Directly generates interactive interfaces in Google Search</li>
              <li><strong>Full-line deployment:</strong> Android Studio, Firebase, Gemini CLI all integrated, with extremely aggressive pricing</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Real Stats: The Numbers Don't Lie</h2>
            <p>First, let's look at the benchmarks. Gemini 3 Pro achieved 1501 Elo on LMArena Leaderboard, leading by a significant margin:</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/gemini-3/gemini-3-pro.png"
                alt="LMArena leaderboard"
                width={1000}
                height={640}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p>Across various benchmarks, it comprehensively surpasses previous champions.</p>

            <p>For longer time-span planning capabilities, Gemini leads even more significantly, such as on the Vending-Bench 2 test (you could call it the "business acumen leaderboard"):</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/gemini-3/vending-bench.png"
                alt="Vending Bench 2 results"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Deep Think Mode</h2>
            <p>To support this execution capability, Google has productized Chain of Thought, introducing Deep Think mode:</p>

            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Thought Signatures:</strong> API returns include encrypted "thought processes" where the model performs multi-step reasoning, reflection, and verification before output. This solves the problem of models "going off track" in long-chain logic</li>
              <li><strong>Thinking Levels:</strong> Developers configure in the API how long the model should "think." Choose quick responses for simple tasks, and deep thinking for complex logic</li>
            </ul>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/gemini-3/deep-think.png"
                alt="Deep Think mode visualization"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>The results are immediate:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>On Humanity's Last Exam, with Deep Think mode enabled, Gemini 3 Pro's score jumped from 37.5% to 41.0%</li>
              <li>On the GPQA Diamond test, it reached 93.8%. This is achieved purely through model reasoning without any external tool assistance</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Coding Tools: The Age of Vibe Coding</h2>
            <p>A popular term lately: Vibe Coding &larr;€” you only need to describe the "feeling" (Vibe) and functionality you want, and the model can implement it.</p>
            <p>Currently, Gemini 3 Pro is also the strongest Vibe Coding model.</p>

            <p className="mt-6">More impressively, Google delivered two heavyweight productivity tools for this: Google Antigravity and Gemini CLI.</p>

            <h3 className="text-2xl font-bold mt-10">Google Antigravity: IDE for the Agent Era</h3>
            <p>This platform's positioning is the IDE for the Agent era. If VS Code is designed for "humans," Antigravity is designed for "humans + Agents."</p>

            <p>As a brand new development platform (MacOS/Windows/Linux preview), its underlying logic is completely different from traditional IDEs:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Task-Oriented:</strong> The operation unit changes from "files" to "tasks." Developers issue requirements in the Inbox</li>
              <li><strong>Multi-Agent Collaboration:</strong> The system supports multiple Agents in parallel. Open one Agent for frontend on the left, another for backend testing on the right, and a middle Agent for documentation</li>
              <li><strong>Autonomy:</strong> Agents have control over editors, terminals, and browsers. They write code, automatically run terminals, automatically open browsers for testing, and fix errors themselves</li>
              <li><strong>Artifacts:</strong> Agents deliver not just conversations but standardized "artifacts" &larr;€” task lists, implementation plans, screenshots, code changes</li>
            </ul>

            <p>You become the AI's manager, reviewing its plans, approving its operations, and accepting its deliverables.</p>

            <h3 className="text-2xl font-bold mt-10">Gemini CLI: Command-Line AI Power</h3>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/gemini-3/gemini-cli.jpg"
                alt="Gemini CLI in action"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>Install with:</p>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-4">
              <code>npm install -g @google/gemini-cli@latest</code>
            </div>

            <p>Gemini CLI is Google's equivalent to Claude Code/OpenAI Codex, a command-line AI tool:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Natural Language to Shell:</strong> Input <code>gemini "find the git commit I broke last week"</code>, and it automatically parses and executes the git bisect process</li>
              <li><strong>System-Level Operations:</strong> It can read and write local files, refactor code, and even parse images through visual capabilities to generate engineering files</li>
            </ul>

            <p>In the official demo, a developer asked it to create a 3D Golden Gate Bridge... and it was done.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Generative UI: Search Becomes Application</h2>
            <p>Google Search has undergone a major interaction-level upgrade.</p>
            <p>In the past, users searching for "mortgage calculator" would get ten links. Now Gemini 3 in AI Mode writes you a calculator on the spot.</p>

            <p>This is called Generative UI (Generative User Interface):</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dynamic Generation:</strong> The model writes HTML/JS/CSS in real-time based on specific questions and renders interactive components directly on the frontend</li>
              <li><strong>Personalized:</strong> User asks "compare cars A and B," generates a static comparison table; user asks "which is more cost-effective," generates an interactive decision tool with filtering, sorting, and highlighting</li>
              <li><strong>Complex Simulation:</strong> User asks "how does three-body gravity work," model directly generates a physics simulator where users can drag planets to observe orbital changes</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Full-Stack Ecosystem: Android Studio & Firebase</h2>

            <h3 className="text-2xl font-bold mt-8">Android Studio "Otter"</h3>
            <p>In the latest Android Studio Otter version, Gemini 3 Pro is integrated into the IDE's core workflow, called Agent Mode.</p>
            <p>Beyond code completion, you can directly issue vague instructions like "refactor the login module to support the new authentication protocol," and Gemini 3 will analyze the entire project structure, locate relevant files, and execute cross-file code modifications.</p>

            <h3 className="text-2xl font-bold mt-8">Firebase AI Logic</h3>
            <p>Previously, mobile developers needed to set up backend services to access large models (to hide API Keys and handle authentication). The Firebase AI Logic SDK release changes this architecture.</p>
            <p>Developers can now directly call Gemini 3 Pro Preview through iOS, Android, Flutter, or Web client SDKs. Google hosts authentication logic at the Firebase level, so developers don't need to maintain middleware servers to securely access the model.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Hard Specs: Pricing & Specifications</h2>
            <p>No nonsense, straight to the numbers:</p>

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6 my-8">
              <h4 className="text-xl font-bold mb-4">Model Version</h4>
              <p className="mb-2"><strong>gemini-3-pro-preview</strong></p>

              <h4 className="text-lg font-semibold mt-4 mb-2">Context Window</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Context: 1 million Tokens</li>
                <li>Max Output: 64k Tokens</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">Pricing Strategy</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Input: $2.00 / 1 million Tokens</li>
                <li>Output: $12.00 / 1 million Tokens</li>
                <li>Applicable for contexts within 200k</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">Multimodal</h4>
              <p>Native support for text, image, audio, video, PDF</p>

              <h4 className="text-lg font-semibold mt-4 mb-2">Availability</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Developers: Google AI Studio / Vertex AI now open</li>
                <li>Enterprise Users: Gemini Enterprise integration</li>
                <li>Regular Users: US region Google AI Pro/Ultra subscribers can experience in Search and App</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Conclusion: Google, Amazing!</h2>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-xl shadow-md mb-10">
              <p className="text-lg">Gemini 3 has achieved godlike status through pure power. This is not just an AI model upgrade, but a comprehensive revolution in development tools, search experience, and mobile ecosystems. From Vibe Coding to Deep Think Mode, from Antigravity to Generative UI, Google has proven that the next era of AI has truly arrived.</p>
            </div>
          </div>
        )
      });
    } else if (slug === 'openai-gpt-5-1-pro-codex-max') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 via-white to-slate-50 dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300 font-semibold">Breaking News &larr;€¢ 21 November 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">OpenAI can't sit still! Late-night release of GPT-5.1 Pro and GPT-5.1-Codex-Max</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">Today, OpenAI released its latest agentic programming model GPT-5.1 Codex Max, built on OpenAI's newest reasoning model and specifically trained for complex tasks in software engineering, research, and mathematics. Simultaneously, OpenAI upgraded GPT-5 Pro to GPT-5.1 Pro, claiming stronger capabilities in writing and data analysis.</p>
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/gpt-5.1-announcement.png"
                alt="GPT-5.1 announcement"
                width={1000}
                height={640}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Summary from the Experts</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Slow but incredibly smart:</strong> Like talking to a super brain, requires patience to wait.</li>
              <li><strong>Strong instruction-following:</strong> Not like an assistant, more like an outsourced engineer who strictly follows requirements.</li>
              <li><strong>Weakness in frontend and creative writing:</strong> Gemini 3 is still stronger in these areas.</li>
              <li><strong>Biggest shortcoming is the interface:</strong> Only available in ChatGPT, can't integrate into programming tools.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-10">How Experts Use AI Now</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>For daily small tasks, UI work, urgent deadlines:</strong> Use Gemini 3 &larr;€” fast, accurate, and efficient!</li>
              <li><strong>For super difficult problems that must be done right the first time:</strong> Call on GPT-5.1 Pro, let it think slowly, stable!</li>
            </ul>

            <p className="text-gray-600 dark:text-gray-400 italic mt-6">The AI world updates daily &larr;€” truly hard to keep up...</p>

            <p>Just two days ago, Grok 4.1 and Gemini 3 Pro were released. Today, OpenAI GPT-5.1 Pro quietly launched!</p>
            <p>No blog post, just a two-sentence announcement.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/openai-developers-announcement.png"
                alt="OpenAI Developers announcement"
                width={900}
                height={560}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>As we all know, GPT-5.1 emphasizes "both EQ and IQ." Pro undoubtedly pushes these two advantages to an even higher level.</p>
            <p>On the same day, OpenAI's brand new ace coding model <strong>GPT-5.1-Codex-Max</strong> officially launched on the Codex platform!</p>

            <p>From the naming, it's clear it's based on GPT-5.1 and specifically trained for agent tasks in software, engineering, mathematics, and research.</p>
            <p>Therefore, GPT-5.1-Codex-Max is more capable, faster to respond, and more token-efficient to use.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Designed for Long-Duration, High-Intensity Development</h2>
            <p>The new model is specifically designed for "long-duration, high-intensity" development tasks.</p>
            <p>Put simply, it can work autonomously for over 24 hours continuously, processing millions of tokens in one go and delivering working results.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/benchmarks.png"
                alt="Performance benchmarks"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>This validates that the Scaling Law continues to hold.</p>
            <p>This is because GPT-5.1-Codex-Max is OpenAI's first model with native "compression" mechanism support, capable of working across multiple contexts.</p>
            <p>Now, tasks like project refactoring, deep debugging, and multi-hour agent loops can be handled steadily.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Current Availability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>GPT-5.1 Pro is now available to all Pro subscription users</li>
              <li>GPT-5.1-Codex-Max is supported in Codex for CLI, IDE extensions, cloud, and code review usage</li>
              <li>API interfaces will be online soon</li>
            </ul>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/meme.png"
                alt="AI battle meme"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">As 2025 nears its end, the ultimate AI showdown is imminent. Between GPT-5.1 Pro and Gemini 3 Pro, who will claim victory?</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">OpenAI's Strongest Programming Model</h2>
            <p>This GPT-5.1-Codex-Max was forged on the "real battlefield"!</p>
            <p>It has been specifically trained for common engineering tasks such as PR creation, code review, frontend development, and Q&A.</p>
            <p>In multiple cutting-edge coding evaluations, it easily surpasses all previous OpenAI models.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/swe-bench.png"
                alt="SWE-bench results"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>On SWE-bench Verified evaluation, GPT-5.1-Codex-Max achieved a high score of <strong>77.9%</strong>.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/swe-bench-verified.png"
                alt="SWE-bench Verified detailed results"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>GPT-5.1-Codex-Max not only scores high but also offers a major upgrade in actual experience!</p>
            <p>It's OpenAI's first model that can run in Windows environments, with training optimized for Codex CLI collaboration scenarios, making it more user-friendly.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">30% Reduction in Thinking Tokens</h2>
            <p>Moreover, GPT-5.1-Codex-Max is more cost-effective to use.</p>
            <p>At the same "medium" reasoning intensity, it not only performs better than GPT-5.1-Codex but also uses approximately 30% fewer thinking tokens.</p>

            <p>For tasks not sensitive to latency, the new "Extra High" (xhigh) reasoning intensity can spend more time to get quality answers.</p>
            <p>However, for daily use, OpenAI still recommends medium.</p>

            <p>Saved tokens mean significantly reduced costs in actual development &larr;€” a blessing for developers.</p>

            <h3 className="text-2xl font-bold mt-10">Demo Comparisons</h3>
            <p>The following demos clearly show the token usage differences between GPT-5.1-Codex-Max and GPT-5.1-Codex. Even with reduced tokens, the former doesn't compromise on functionality or visual appeal in frontend design.</p>

            <p>For example, asking them to generate a browser application &larr;€” an interactive CartPole reinforcement learning sandbox that includes a small policy gradient controller, metrics panel, and an SVG network visualizer:</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/cartpole.gif"
                alt="CartPole demo comparison"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400">Top: GPT-5.1-Codex-Max; Bottom: GPT-5.1-Codex</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/codex-max.png"
                alt="Codex-Max token usage"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>GPT-5.1-Codex-Max completed the task with only 27k thinking tokens, and the code is more concise.</p>

            <p>Another demo requirement: Create a solar system gravity well sandbox that visualizes object movement in a 2D gravitational potential field and supports drag-to-pan view and orbit observation:</p>

            <div className="my-8 grid md:grid-cols-2 gap-6">
              <Image
                src="/blog/openai/sandbox.gif"
                alt="Sandbox demo"
                width={900}
                height={620}
                className="rounded-2xl shadow"
              />
              <Image
                src="/blog/openai/test-particles.gif"
                alt="Test particles"
                width={900}
                height={620}
                className="rounded-2xl shadow"
              />
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400">Top: GPT-5.1-Codex-Max; Bottom: GPT-5.1-Codex</p>

            <p>GPT-5.1-Codex-Max again used fewer tokens and more streamlined code to complete the task.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Run Wild for 24 Hours: It's All "Compression"</h2>
            <p>GPT-5.1-Codex-Max is this powerful because it employs a brand new mechanism.</p>

            <h3 className="text-2xl font-bold mt-8">The Compression Breakthrough</h3>
            <p>The "compression" mechanism allows GPT-5.1-Codex-Max to break through limitations and handle tasks that would otherwise be impossible due to excessive context length.</p>
            <p>For example, complex refactoring and long-duration agent loops.</p>

            <p>It automatically organizes historical content, filters and retains the most critical context, thereby achieving coherence over long time spans.</p>

            <p>In Codex, when approaching the context limit, GPT-5.1-Codex-Max automatically executes session compression, refreshes the context, and repeats this process multiple times until the task is complete.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/terminal.gif"
                alt="Terminal demo showing compression"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Video has been edited and accelerated to show the process more clearly</p>

            <p>In the case above, GPT-5.1-Codex-Max is autonomously refactoring Codex CLI's open-source repository.</p>
            <p>You can see that when the context nears capacity, it automatically compresses to free up space, thereby completing the task without losing progress.</p>

            <p>Internal testing shows that GPT-5.1-Codex-Max can work autonomously for over <strong>24 hours continuously</strong>.</p>
            <p>During this time, it can continuously iterate implementations, fix test failures, and ultimately deliver usable results.</p>

            <p>This long-duration, coherent task capability is a foundational building block toward more general and reliable AI systems.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/new-sota.png"
                alt="New SOTA on METR"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>On METR evaluation, GPT-5.1-Codex-Max's long-range task capability became the new SOTA.</p>

            <p>Inside OpenAI, 95% of engineers use Codex every week. Since its introduction, the team's Pull Request count has increased by approximately 70%.</p>
            <p>Now, GPT-5.1-Codex-Max paired with continuously upgraded CLI, IDE extensions, cloud integration, and code review tools makes programming efficiency skyrocket.</p>

            <h3 className="text-2xl font-bold mt-10">First Impressions from Users</h3>
            <p>Some users were instantly amazed by their first experience:</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/peter-gostev.png"
                alt="Peter Gostev's review"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/bridge.gif"
                alt="Bridge demo"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">GPT-5.1 Pro Launch: First Tests Are In</h2>
            <p>As for GPT-5.1 Pro, as mentioned at the beginning, OpenAI only wrote two paragraphs of introduction in the version update log.</p>
            <p>Although there was no dedicated blog post, experts who got early access were very excited to share their first-hand experiences.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/blog-chatgpt.png"
                alt="ChatGPT blog announcement"
                width={900}
                height={560}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>After third-party evaluation by Epoch AI, GPT-5.1's performance after iteration is almost equivalent to GPT-5.</p>
            <p>In "high" reasoning mode, both achieved an Efficiency Capability Index (ECI) score of 151.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/epoch-ai.png"
                alt="Epoch AI comparison"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-10">Expert Reviews</h3>
            <p>Jackson Laboratory Professor and human immunologist Derya Unutmaz stated that GPT-5.1 Pro, with its significantly improved performance over GPT-5.0 Pro, is now his favorite model.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/questions.png"
                alt="Immunology questions comparison"
                width={900}
                height={800}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>In the example above, he asked both 5.0 and 5.1 Pro about the most important unsolved mysteries in immunology and requested both models to explain each question in depth so that people without an immunology degree could understand its importance.</p>

            <p>The first two responses are from GPT-5.1 Pro, followed by the two shorter responses from GPT-5.0.</p>

            <p>Clearly, GPT-5.1 Pro is superior because it makes these explanations easier for people without immunology backgrounds to understand while clearly articulating the importance and potential value of these questions.</p>

            <p>In comparison, GPT-5.1 Pro shows qualitative improvements in both clarity and insight. Its responses maintain depth while being more complete, coherent, vivid, and easier to understand.</p>

            <p>Although GPT-5.0's responses are also excellent in content, they lack thorough analysis.</p>

            <h3 className="text-2xl font-bold mt-10">HyperWrite AI CEO's In-Depth Review</h3>
            <p>HyperWrite AI CEO Matt Shumer also stated in an extremely long experience report: GPT-5.1 Pro is currently the best "brain," although slow, it's deeply thoughtful.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/matt-shumer.png"
                alt="Matt Shumer's review"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p><a href="https://shumer.dev/gpt51proreview" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Read full review here</a></p>

            <h4 className="text-xl font-semibold mt-6">Key Takeaways:</h4>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 my-6">
              <h5 className="text-lg font-bold mb-3">ðŸ§  Slow Response, But Incredibly Smart</h5>
              <p>It's not only better at reasoning than most humans, but also smarter than any other model when handling truly tricky problems.</p>
              <p>Within days, we expect to see examples of it solving problems that people thought were beyond current AI systems' capabilities.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 my-6">
              <h5 className="text-lg font-bold mb-3">&larr;œ… Instruction Following is the Biggest Highlight</h5>
              <p>It truly strictly follows your requirements without deviating.</p>
              <p>For serious coding tasks, it feels less like an "assistant" and more like an outsourced engineer working from specifications (even if your specifications are a bit vague).</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 my-6">
              <h5 className="text-lg font-bold mb-3">ðŸŽ¨ Frontend and UX Design, and Writing Are Weaknesses</h5>
              <p>Whether it's creative writing or designing beautiful UIs, Gemini 3 is still superior.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 my-6">
              <h5 className="text-lg font-bold mb-3">&larr;š ï¸ But the Biggest Weakness Is Still the Interface</h5>
              <p>It can only be used in ChatGPT, can't integrate into IDEs, and can't connect to other toolchains. This is identical to GPT-5 Pro.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Conclusion: Programming Models Enter the "Agent Era"</h2>

            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/30 dark:to-blue-900/30 p-6 rounded-xl shadow-md mb-10">
              <p className="text-lg mb-4">From GPT-5.1-Codex-Max, we can see that the new generation of programming models are no longer simple code generators, but programming agents capable of continuous work, automatic debugging, and proactive planning. Their long-term reasoning, context compression, and self-repair capabilities allow models to independently complete project-level tasks.</p>
              <p className="text-lg">As running costs decrease, security sandboxes strengthen, and capabilities comprehensively improve, future software development methods may also change &larr;€” shifting from "writing code" to "describing requirements + reviewing results," with agents expected to undertake more implementation and iteration work.</p>
            </div>
          </div>
        )
      });
    } else if (slug === 'openai-gpt-5-1-pro-codex-max') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 via-white to-slate-50 dark:from-green-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-green-600 dark:text-green-300 font-semibold">Breaking News &larr;€¢ 21 November 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">OpenAI couldn't sit still&larr;€”GPT-5.1 Pro and GPT-5.1-Codex-Max released overnight!</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">Today, OpenAI released its latest agentic programming model, GPT-5.1-Codex-Max, built on OpenAI's newest reasoning model and specifically trained for complex tasks in software engineering, research, and mathematics. Meanwhile, OpenAI upgraded GPT-5 Pro to GPT-5.1 Pro, reportedly stronger in writing and data analysis than its predecessor.</p>
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/gpt-5.1-announcement.png"
                alt="GPT-5.1 announcement"
                width={1000}
                height={640}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">What the Experts Are Saying</h2>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 mb-8">
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Slow but incredibly smart:</strong> Like talking to a super brain, requires patience.</li>
                <li><strong>Strong instruction-following:</strong> Less like an assistant, more like a contract engineer who strictly follows specifications.</li>
                <li><strong>Weaknesses in frontend and creative writing:</strong> Gemini 3 is still stronger in these areas.</li>
                <li><strong>Biggest shortcoming is the interface:</strong> Only available in ChatGPT, can't be integrated into coding tools.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-10">How Experts Use AI Now</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>Daily tasks, UI design, time-sensitive work:</strong> Use Gemini 3&larr;€”fast and precise!</li>
              <li><strong>Super difficult problems that must be done right the first time:</strong> Call on GPT-5.1 Pro, let it think slowly and get it right!</li>
            </ul>

            <p className="text-gray-600 dark:text-gray-400 italic mb-8">The AI world updates daily&larr;€”it's getting hard to keep up... Just two days ago, Grok 4.1 and Gemini 3 Pro were released, and today OpenAI's GPT-5.1 Pro quietly launched!</p>

            <p>No blog post, just a two-sentence announcement. As everyone knows, GPT-5.1 emphasizes both "EQ and IQ," and Pro undoubtedly takes these advantages to an even higher level.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">GPT-5.1-Codex-Max: The New Coding Champion</h2>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/openai-developers-announcement.png"
                alt="OpenAI Codex announcement"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>On the same day, OpenAI's brand new flagship coding model, GPT-5.1-Codex-Max, officially launched on the Codex platform!</p>

            <p>As the name suggests, it's built on GPT-5.1 and specifically trained for agentic tasks in software engineering, mathematics, and research.</p>

            <p>As a result, GPT-5.1-Codex-Max is more capable, responds faster, and uses fewer tokens. The new model is designed for "long-duration, high-intensity" development tasks.</p>

            <p className="font-semibold">Here's the thing: it can work autonomously for over 24 hours continuously, processing millions of tokens in one go and delivering finished results.</p>

            <h3 className="text-2xl font-bold mt-10">Scaling Law Still Holds</h3>
            <p>GPT-5.1-Codex-Max is OpenAI's first model with native "compression" support, allowing it to work across multiple contexts. Tasks like project refactoring, deep debugging, and multi-hour agent loops&larr;€”it can handle them all steadily.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/benchmarks.png"
                alt="Benchmark results"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-10">Availability</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>GPT-5.1 Pro is now available to all Pro subscribers</li>
              <li>GPT-5.1-Codex-Max is supported in Codex for CLI, IDE extensions, cloud, and code review</li>
              <li>API access coming soon</li>
            </ul>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/meme.png"
                alt="GPT-5.1 Pro vs Gemini 3 Pro showdown"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">As 2025 nears its end, the ultimate AI showdown is imminent. Between GPT-5.1 Pro and Gemini 3 Pro, who will emerge victorious?</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">OpenAI's Strongest Programming Model</h2>

            <p>This time's GPT-5.1-Codex-Max was forged on the "real battlefield"! It has been specifically trained on common engineering tasks such as PR creation, code review, frontend development, and Q&A.</p>

            <p>In multiple cutting-edge coding evaluations, it easily surpasses all of OpenAI's previous models.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/swe-bench.png"
                alt="SWE-bench results"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>On SWE-bench Verified evaluation, GPT-5.1-Codex-Max achieved a high score of 77.9%.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/swe-bench-verified.png"
                alt="SWE-bench Verified detailed results"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>GPT-5.1-Codex-Max not only scores high on benchmarks but also provides a major upgrade in real-world experience! It's OpenAI's first model that can run in Windows environments, and it was optimized during training for Codex CLI collaboration scenarios, making it more user-friendly.</p>

            <h3 className="text-2xl font-bold mt-10">30% Fewer Thinking Tokens</h3>
            <p>Not only that, GPT-5.1-Codex-Max is also more cost-effective to use.</p>

            <p>At the same "medium" reasoning intensity, it not only performs better than GPT-5.1-Codex but also reduces thinking token usage by approximately 30%.</p>

            <p>For latency-insensitive tasks, the new "Extra High" (xhigh) reasoning intensity can spend more time to get better answers. However, for daily use, OpenAI still recommends medium.</p>

            <p>Saving tokens means significantly lower costs in actual development&larr;€”a blessing for developers!</p>

            <h3 className="text-2xl font-bold mt-10">Demo: CartPole Reinforcement Learning</h3>
            <p>The following demos clearly show the token usage difference between GPT-5.1-Codex-Max and GPT-5.1-Codex. Even with reduced tokens, the former doesn't compromise on functionality or aesthetics in frontend design.</p>

            <p>For example, generating an interactive CartPole reinforcement learning sandbox browser app, including a small policy gradient controller, metrics panel, and an SVG network visualizer:</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/cartpole.gif"
                alt="CartPole demo comparison"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400">Top: GPT-5.1-Codex-Max; Bottom: GPT-5.1-Codex</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/codex-max.png"
                alt="Token usage comparison"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>GPT-5.1-Codex-Max completed the task using only 27k thinking tokens, with more concise code.</p>

            <h3 className="text-2xl font-bold mt-10">Demo: Solar System Gravity Well</h3>
            <p>This demo requires creating a solar system gravity well sandbox that visualizes object motion in a 2D gravitational potential field, supporting drag-to-pan view and orbit observation:</p>

            <div className="my-8 grid md:grid-cols-2 gap-6">
              <Image
                src="/blog/openai/sandbox.gif"
                alt="Gravity sandbox demo"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
              <Image
                src="/blog/openai/test-particles.gif"
                alt="Test particles demo"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Top: GPT-5.1-Codex-Max; Bottom: GPT-5.1-Codex</p>

            <p>GPT-5.1-Codex-Max again used fewer tokens and more refined code to complete the task.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Running for a Full Day: It's All About "Compression"</h2>

            <p>The "compression" mechanism allows GPT-5.1-Codex-Max to break through limitations and handle tasks that were previously impossible due to excessive context length, such as complex refactoring and long-running agent loops.</p>

            <p>It automatically organizes historical content, filters and retains the most critical context, thus maintaining coherence over long time spans.</p>

            <p>In Codex, when approaching the context limit, GPT-5.1-Codex-Max automatically performs session compression, refreshes the context, and repeats this process multiple times until the task is complete.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/terminal.gif"
                alt="Terminal session with compression"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Video has been edited and accelerated to better demonstrate the process</p>

            <p>In the case above, GPT-5.1-Codex-Max is autonomously refactoring Codex CLI's open-source repository. When the context is nearly full, it automatically compresses to free up space, completing the task without losing progress.</p>

            <p className="font-semibold">Internal testing shows GPT-5.1-Codex-Max can work autonomously for over 24 hours continuously, iterating implementations, fixing test failures, and ultimately delivering usable results.</p>

            <p>This long-duration, coherent task capability is a foundational building block toward more general and reliable AI systems.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/new-sota.png"
                alt="METR evaluation - new SOTA"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>In METR evaluation, GPT-5.1-Codex-Max's long-range task capability became the new SOTA.</p>

            <p>Within OpenAI, 95% of engineers already use Codex weekly, and since its introduction, the team's Pull Request count has increased by approximately 70%.</p>

            <p>Now, with GPT-5.1-Codex-Max paired with continuously upgraded CLI, IDE extensions, cloud integration, and code review tools, programming efficiency is taking off.</p>

            <h3 className="text-2xl font-bold mt-10">First Impressions from Users</h3>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/peter-gostev.png"
                alt="User testimonial"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/bridge.gif"
                alt="Bridge demo"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">GPT-5.1 Pro Launch: First Reviews</h2>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/blog-chatgpt.png"
                alt="ChatGPT blog announcement"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>As mentioned at the beginning, OpenAI only wrote two paragraphs in the version update log. Although there's no dedicated blog post, those with early access are excitedly sharing their first impressions.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/epoch-ai.png"
                alt="Epoch AI evaluation"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>According to third-party evaluation by Epoch AI, the performance of the updated GPT-5.1 is almost on par with GPT-5. In high reasoning mode, both scored 151 on the capability index (ECI).</p>

            <h3 className="text-2xl font-bold mt-10">Expert Reviews</h3>

            <p>Derya Unutmaz, professor at Jackson Laboratory and human immunologist, says GPT-5.0 Pro&larr;€”which significantly improved performance over previous versions&larr;€”is now his favorite model.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/questions.png"
                alt="Immunology questions comparison"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>In the example above, he asked both 5.0 and 5.1 Pro about the most important unsolved mysteries in immunology, requesting that both models explain each question in depth so that people without immunology degrees could understand their importance.</p>

            <p>The first two responses are from GPT-5.1 Pro, and the next two shorter responses are from GPT-5.0.</p>

            <p>You can see that GPT-5.1 Pro is clearly superior, as it makes these explanations easier to understand for those without immunology backgrounds while clearly articulating the importance and potential value of these questions.</p>

            <p>In comparison, GPT-5.1 Pro shows qualitative improvements in both clarity and insight. While maintaining depth, its responses are more complete, coherent, vivid, and easier to understand. Although GPT-5.0's responses are also excellent in content, they lack thorough analysis.</p>

            <h3 className="text-2xl font-bold mt-10">HyperWrite AI CEO's Review</h3>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/openai/matt-shumer.png"
                alt="Matt Shumer's review"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>Matt Shumer, CEO of HyperWrite AI, also stated in a super long experience report: GPT-5.1 Pro is currently the best "brain," though slow, it's thoughtful and deliberate.</p>

            <p><strong>Review link:</strong> <a href="https://shumer.dev/gpt51proreview" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://shumer.dev/gpt51proreview</a></p>

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6 my-8">
              <h4 className="text-xl font-bold mb-4">Key Takeaways</h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-lg mb-2">Slow but incredibly smart</h5>
                  <p>It's not just better at reasoning than most humans&larr;€”it's smarter than any other model when handling truly tricky problems. Within days, we'll likely see examples of it solving problems people thought today's AI systems couldn't handle.</p>
                </div>

                <div>
                  <h5 className="font-semibold text-lg mb-2">Instruction-following is the biggest highlight</h5>
                  <p>It really strictly executes your requirements without going off track. For serious coding tasks, it feels less like an "assistant" and more like a contract engineer working from specifications (even if your specs are a bit vague).</p>
                </div>

                <div>
                  <h5 className="font-semibold text-lg mb-2">Frontend, UX design, and writing are weaknesses</h5>
                  <p>Whether it's creative writing or designing beautiful UIs, Gemini 3 is superior. For most daily work, Gemini 3 is better&larr;€”after all, waiting 10 minutes for an answer in a standalone interface is clearly not ideal.</p>
                  <p className="mt-2">But for any task requiring deep thinking, planning, and research, and anything that must be done right the first time, GPT-5.1 Pro is better.</p>
                </div>

                <div>
                  <h5 className="font-semibold text-lg mb-2">The biggest weakness is still the interface</h5>
                  <p>It can only be used in ChatGPT, cannot be integrated into IDEs, and cannot connect to other tool chains. This is identical to GPT-5 Pro.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Conclusion: Programming Models Enter the "Agent Era"</h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 p-6 rounded-xl shadow-md mb-10">
              <p className="text-lg mb-4">From GPT-5.1-Codex-Max, we can see that the new generation of programming models is no longer a simple code generator but a programming agent capable of continuous work, automatic debugging, and active planning. Its long-term reasoning, context compression, and self-repair capabilities enable the model to independently complete project-level tasks.</p>

              <p className="text-lg">As operating costs decrease, security sandboxes strengthen, and capabilities comprehensively improve, future software development methods may also change&larr;€”shifting from "writing code" to "describing requirements + reviewing results," with agents taking on more implementation and iteration work.</p>
            </div>
          </div>
        )
      });
    } else if (slug === 'google-nano-banana-pro-gemini-3-image') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 via-white to-slate-50 dark:from-yellow-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-600 dark:text-yellow-300 font-semibold">Breaking News &larr;€¢ 22 November 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">Google Nano Banana Pro launches&larr;€”designers' jobs are really at risk? Deep integration with Gemini 3, Google gives competitors no breathing room</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">Shortly after Gemini 3 Pro's dazzling debut, a new generation model follows immediately. Last night, Google officially unveiled its strongest image generation model&larr;€”Nano Banana Pro, built on the latest Gemini 3 Pro. Officially called Gemini 3 Pro Image.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Core Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Resolution Support:</strong> Up to 4K resolution image output</li>
              <li><strong>Multi-Round Editing:</strong> Supports conversational, multi-round image editing workflows</li>
              <li><strong>Multi-Image Composition:</strong> Combine up to 14 input images into 1 output image</li>
              <li><strong>Search Enhancement:</strong> Integrated Google Search capabilities for more precise, up-to-date knowledge support</li>
            </ul>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/nano-banana/sundar-pichai.png"
                alt="Sundar Pichai announcement"
                width={1000}
                height={640}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p>As rumored, Nano Banana Pro is the new "god" of AI imaging. Whether in image editing or generation, it has achieved epic-level evolution. Its knowledge base is broader, text rendering is super strong, and detail control is precise to the "pixel level."</p>

            <p>Not only that, Nano Banana Pro is simply cheating at making complex infographics, approaching the world as engineers see it.</p>

            <p>In benchmark tests, the new Nano Banana shows significantly improved performance over the previous generation, with GPT-Image and Flux Pro Kontext Max unable to compare.</p>

            <div className="my-8 grid md:grid-cols-2 gap-6">
              <Image
                src="/blog/nano-banana/text-to-image.png"
                alt="Text-to-image benchmarks"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
              <Image
                src="/blog/nano-banana/image-editing.png"
                alt="Image editing benchmarks"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
            </div>

            <div className="my-8 grid md:grid-cols-2 gap-6">
              <Image
                src="/blog/nano-banana/single-line-text-rendering.png"
                alt="Single line text rendering"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
              <Image
                src="/blog/nano-banana/gemini-3-pro-image.png"
                alt="Gemini 3 Pro Image model"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
            </div>

            <p className="font-semibold text-lg">In short, Nano Banana Pro is mainly "Pro" in: unprecedented control, perfect text rendering, and stronger world knowledge, with the ability to create studio-level design works.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Core Capabilities Overview</h2>

            <h3 className="text-2xl font-bold mt-10">1. High Fidelity & Professional-Grade Control</h3>
            <p>For professional tools requiring high precision, Nano Banana Pro provides fine control over physical effects (such as lighting, camera, focus, color grading) and image composition, ensuring professional-quality output. The model supports 2K and 4K resolutions, meeting professional production clarity standards. Additionally, it supports powerful local editing features, such as replacing volumetric lighting with bokeh effects.</p>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-6">
              <p className="font-mono text-sm italic">Prompt: Replace volumetric lighting with bokeh</p>
            </div>

            <p>For image composition, Nano Banana Pro can easily combine various elements such as product images, logos, and reference images into coherent advertisements. It can maintain facial consistency for up to 5 people in a single composite image, or blend up to 6 high-fidelity photos and 14 standard inputs.</p>

            <p>Through enhanced creative capabilities, you can transform sketches into products or turn blueprints into realistic 3D structures, easily applying desired visual styles to models, ensuring seamless brand consistency across every touchpoint.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/nano-banana/brands.png"
                alt="Brand consistency examples"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-6">
              <p className="font-mono text-sm italic">Prompt: Combine these images into one appropriately arranged cinematic image in 16:9 format and change the dress on the mannequin to the dress in the image</p>
            </div>

            <h3 className="text-2xl font-bold mt-10">2. Improved Text Rendering & Localization</h3>
            <p>Compared to 2.5 Flash Image, Nano Banana Pro achieves a significant leap in text rendering, capable of generating clear, accurate embedded text, whether short slogans or long paragraphs. It excels at handling logic and language, can generate text with various textures, fonts, and calligraphic styles, transforming abstract image generation into functional assets, perfect for creating marketing materials, educational content, and more.</p>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-6">
              <p className="font-mono text-sm italic">Prompt: Make 8 sophisticated minimalistic logos, each is a fun food word, and make letters from realistic food to express the meaning of this word. composition: a rendering of all logos on a single solid white background</p>
            </div>

            <p>The model also breaks down barriers between image generation and localization logic. With Gemini's multilingual reasoning capabilities, it can understand the semantic context of images, easily generating or translating multilingual text on elements like menus, signs, or documents while maintaining original artistic style and layout.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/nano-banana/can-design.png"
                alt="Can design translation example"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-6">
              <p className="font-mono text-sm italic">Prompt: Translate to French</p>
            </div>

            <h3 className="text-2xl font-bold mt-10">3. Connected World Knowledge & Real-Time Information</h3>
            <p>Based on Gemini 3 Pro, Nano Banana Pro connects to a vast knowledge base, capable of generating more factual content than previous models. When enabled, grounding through Google Search connects the model with real-time web content, enabling data-driven outputs. This is especially valuable for applications requiring precise representation (such as biological diagrams, historical maps, or real-time weather infographics). You can use it to create customized infographics about any topic.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/nano-banana/poster-cardamon-tea.png"
                alt="Plant infographic example"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-6">
              <p className="font-mono text-sm italic">Prompt: Create an infographic about this plant focusing on interesting information</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">How to Experience Nano Banana Pro</h2>

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6 my-8">
              <h4 className="text-xl font-bold mb-4">For Consumers & Students</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>&larr;œ… In Gemini App, when you select "Create images" and use "Thinking" model, rolling out globally</li>
                <li>&larr;œ… Free users get limited free quota, reverting to original Nano Banana after depletion</li>
                <li>&larr;œ… Google AI Plus, Pro, and Ultra subscribers get higher quotas</li>
                <li>&larr;œ… In Search's AI Mode, available to US subscribers</li>
                <li>&larr;œ… In NotebookLM, available to global subscribers</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-4">For Professionals</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>&larr;œ… Image generation in Google Ads upgraded to Nano Banana Pro</li>
                <li>&larr;œ… Rolling out to Workspace users in Google Slides and Vids</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-4">For Developers & Enterprises</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>&larr;œ… Rolling out in Gemini API, Google AI Studio, and Google Antigravity</li>
                <li>&larr;œ… Enterprise users can start building in Vertex AI today</li>
                <li>&larr;œ… Coming soon to Gemini Enterprise</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-4">For Creative Workers</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>&larr;œ… Rolling out to Flow (AI filmmaking tool) for Google AI Ultra subscribers</li>
                <li>&larr;œ… Provides creators, directors, and marketing teams with more precise, controllable shot and scene generation</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-10">AI-Generated Image Identification</h3>
            <p>All media generated by Google tools is embedded with imperceptible SynthID digital watermarks. Now, users can upload images directly in the Gemini app and ask if they were generated by Google AI. This feature currently supports images and will soon expand to audio and video.</p>

            <p>Additionally, images generated by free and Google AI Pro tier users retain visible Gemini star watermarks. To meet professional work's visual purity needs, Google AI Ultra subscribers and images generated in Google AI Studio will have this visible watermark removed.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">7 Tips to Master Nano Banana Pro</h2>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 p-6 rounded-xl shadow-md mb-10">
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>Generate visuals with clear text:</strong> Leverage its excellent text rendering for posters, charts, etc.</li>
                <li><strong>Create with real-world knowledge:</strong> Utilize Gemini 3 Pro's knowledge and reasoning for precise, rich image results</li>
                <li><strong>Translate and localize your ideas:</strong> Generate or translate text within images for different markets</li>
                <li><strong>Edit with studio-level control:</strong> Directly control lighting, camera angles, focus, color, and other parameters</li>
                <li><strong>Precisely adjust dimensions:</strong> Try different aspect ratios and generate clear images up to 4K</li>
                <li><strong>Blend images and maintain multi-character consistency:</strong> Fuse up to 14 inputs while maintaining consistency across multiple characters</li>
                <li><strong>Create and maintain brand visual style:</strong> Seamlessly apply patterns, logos, etc. to 3D objects, maintaining natural textures</li>
              </ol>
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/nano-banana/input-output-images.png"
                alt="Input output image examples"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Change the look and feel of an image for a range of platforms by adapting the aspect ratio</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Current Limitations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Visual and text fidelity:</strong> Rendering small text, fine details, and precise spelling may not be perfect</li>
              <li><strong>Data and factual accuracy:</strong> Be sure to verify factual accuracy of data-driven visuals like charts</li>
              <li><strong>Translation and localization:</strong> Multilingual text generation may have grammatical errors or cultural nuances</li>
              <li><strong>Complex editing and image fusion:</strong> Advanced editing tasks may sometimes produce unnatural artifacts</li>
              <li><strong>Character features:</strong> Character consistency is generally reliable but may vary across edits</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Creative Use Cases</h2>

            <h3 className="text-2xl font-bold mt-10">1. Complete Comic Workflow</h3>
            <p>The first use case, and what I think is Nano Banana Pro's most impressive feature, is giving black and white manga a complete makeover: translation, colorization, and material changes all in one go. I used panels from Demon Slayer as my source.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/nano-banana/comic.png"
                alt="Original black and white comic"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>With a simple prompt: "Transform this image to color, translate to Chinese and place in corresponding dialogue boxes, keep everything else unchanged, output as an image."</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/nano-banana/comic-colour.png"
                alt="Colored translated comic"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>Much better! You can also change styles continuously.</p>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-6">
              <p className="font-mono text-sm italic">Prompt: Transform this comic into 3D plush texture</p>
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/nano-banana/comic-3d.png"
                alt="3D plush style comic"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-10">2. Complete Poster Design Workflow</h3>
            <p>After the first use case, you should notice that Nano Banana Pro's text capabilities are now very strong, especially for Chinese. It's no longer that model where Chinese characters gave me uncanny valley vibes.</p>

            <div className="my-8 grid md:grid-cols-2 gap-6">
              <Image
                src="/blog/nano-banana/poster-dreams.png"
                alt="Robot Dreams movie poster"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
              <Image
                src="/blog/nano-banana/chinese-poster.png"
                alt="Chinese traditional poster"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
            </div>

            <h3 className="text-2xl font-bold mt-10">3. Knowledge Explanation Graphics</h3>
            <p>Because Nano Banana Pro is built on Gemini 3, its world knowledge and reasoning capabilities are naturally strong. Thanks to its greatly enhanced text rendering, you can even have it create knowledge explanation graphics.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/nano-banana/component-dissemble.png"
                alt="Cyber eye component breakdown"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-10">4. Writing Solution Processes</h3>
            <p>Thanks to Nano Banana Pro's extremely strong reasoning abilities, you can even use it to solve problems. Not just solve them, but draw out the solution process directly.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/nano-banana/drawing-with-answer.png"
                alt="Math problem solution drawn"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-6">
              <p className="font-mono text-sm italic">Prompt: Draw a draft paper with the solution to this problem</p>
            </div>

            <h3 className="text-2xl font-bold mt-10">5. Paper to Image Conversion</h3>
            <p>An amazing use case discovered by a user on X: Convert papers or very long articles into detailed whiteboard photos.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/nano-banana/pietro-schirano.png"
                alt="Pietro Schirano tweet"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/nano-banana/whiteboard-nano-banana.png"
                alt="Whiteboard conversion example"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-10">6. Generate Game Interfaces</h3>
            <p>This time, Nano Banana Pro is exceptionally stable at generating game UI interfaces. You really don't know how much game material this thing has consumed.</p>

            <div className="my-8 grid md:grid-cols-2 gap-6">
              <Image
                src="/blog/nano-banana/game-interface.png"
                alt="Game interface example"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
              <Image
                src="/blog/nano-banana/HoK.png"
                alt="MOBA game interface"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
            </div>

            <h3 className="text-2xl font-bold mt-10">7. Product Rendering</h3>
            <p>Thanks to this time's extremely stable text capabilities, modifying text is basically a very small task. And for product consistency with lots of Chinese text, the effect is also excellent.</p>

            <div className="my-8 grid md:grid-cols-2 gap-6">
              <Image
                src="/blog/nano-banana/jay-chou.png"
                alt="Jay Chou CD design"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
              <Image
                src="/blog/nano-banana/concert.png"
                alt="Concert scene product placement"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
            </div>

            <h3 className="text-2xl font-bold mt-10">8. Bead Art (Bonus Find!)</h3>
            <p>During the generation process, I inadvertently discovered a style that Nano Banana Pro supports particularly well: bead art. Really, super stable and beautiful.</p>

            <div className="my-8 grid md:grid-cols-2 gap-6">
              <Image
                src="/blog/nano-banana/lego.png"
                alt="Bead art figure"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
              <Image
                src="/blog/nano-banana/cat-lego.png"
                alt="Cat bead art color palette"
                width={800}
                height={560}
                className="rounded-2xl shadow"
              />
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-6">
              <p className="font-mono text-sm italic">Prompt: 3D bead art, exquisite figurine in a box</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Third-Party Access</h2>
            <p>And... our friend Orange has already integrated it into his Listen Hub website. Visit <a href="https://banana.listenhub.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://banana.listenhub.ai/</a> to use it now!</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/nano-banana/banana-2.png"
                alt="Banana Listen Hub"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Conclusion: The Designer's Dilemma</h2>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 p-6 rounded-xl shadow-md mb-10">
              <p className="text-lg mb-4">Nano Banana Pro represents a paradigm shift in AI image generation. With unprecedented control over lighting, composition, and text rendering, combined with Gemini 3's world knowledge and reasoning capabilities, it's becoming clear that AI tools are no longer just assistants&larr;€”they're becoming creative partners capable of studio-quality work.</p>

              <p className="text-lg">From transforming manga to generating complex infographics, from solving math problems visually to creating multilingual marketing materials, Nano Banana Pro demonstrates that the line between "AI-assisted" and "AI-created" is blurring rapidly. The question isn't whether designers' jobs are at risk&larr;€”it's how designers will adapt to work alongside these powerful tools.</p>
            </div>
          </div>
        )
      });
    } else if (slug === 'how-to-get-bem-engineering-technologist-approval') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 via-white to-slate-50 dark:from-green-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-green-600 dark:text-green-300 font-semibold">Professional Development &larr;€¢ 22 November 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">Your Complete Guide to BEM Engineering Technologist Registration</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">Learn how to obtain your Engineering Technologist registration with the Board of Engineers Malaysia (BEM). This step-by-step guide covers ETAC accreditation verification, application process, documentation requirements, and important regulations about title usage.</p>
            </div>

            <p className="text-xl font-medium mb-6">
              Becoming a registered Engineering Technologist with BEM is an important milestone in your engineering career in Malaysia. Here's my complete journey and everything you need to know to successfully obtain your registration.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Step 1: Verify ETAC Accreditation</h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Check Your Course Accreditation
              </h3>
              <p className="mt-3 mb-4">
                First, you need to verify if your university's engineering course is accredited by ETAC (Engineering Technology Accreditation Council). Visit the <a href="https://etac.org.my/list-of-accredited-engineering-programme-malaysia/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">ETAC official website</a> to check the list of accredited engineering programmes in Malaysia.
              </p>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/eng-tech/etac.PNG"
                  alt="ETAC Accredited Programme List"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-lg mt-4">
                <p className="font-medium">&larr;š ï¸ Important: Only graduates from ETAC-accredited programmes are eligible to apply for Engineering Technologist registration with BEM.</p>
              </div>
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/eng-tech/umpsa-eng-tech.PNG"
                alt="UMPSA Engineering Technology Programme"
                width={800}
                height={450}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>

            <p>If your course is accredited by ETAC, congratulations! You can proceed to start your application for the Engineering Technologist (BEM) title.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Step 2: Register on BEM Portal</h2>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                Create Your BEM Account
              </h3>
              <p className="mt-3 mb-4">
                Go to <a href="https://engineer.org.my/Account/Login" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">https://engineer.org.my/Account/Login</a> and sign up for an account.
              </p>
              <div className="bg-purple-100 dark:bg-purple-900/50 p-4 rounded-lg">
                <p className="font-medium">ðŸ’¡ Pro Tip: Use your IC (Identity Card) number for registration. This is important for verification purposes.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Step 3: Submit Your Application</h2>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                Navigate to Applications
              </h3>
              <p className="mt-3 mb-4">
                Once logged in, go to the <strong>Applications</strong> section and click on <strong>"Apply As Engineering Technologist"</strong>.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Step 4: Prepare Required Documentation</h2>

            <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/30 dark:to-red-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                Upload All Necessary Documents
              </h3>
              <p className="mt-3 mb-4">Follow the instructions carefully and upload all necessary documentation. Here's the crucial part:</p>

              <div className="bg-red-100 dark:bg-red-900/50 p-4 rounded-lg my-4">
                <h4 className="text-xl font-bold mb-3 text-red-700 dark:text-red-300">&larr;š ï¸ CRITICAL REQUIREMENT</h4>
                <p className="font-medium mb-2">Your documentation MUST include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal signature from a registered <strong>Ir. (Professional Engineer)</strong></li>
                  <li>Official BEM chop/stamp from the Ir. proving their Professional Engineer status</li>
                  <li>This serves as your guarantor/referee</li>
                </ul>
              </div>

              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/eng-tech/important.PNG"
                  alt="Important Documentation Requirements"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>

              <p className="mt-4">
                <strong>How to get an Ir. signature:</strong> Ask a university professor or lecturer who holds the Ir. (Professional Engineer) title to be your guarantor. They must be registered with BEM as a Professional Engineer.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Step 5: Pay Processing Fee</h2>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">5</span>
                Processing Fee Payment
              </h3>
              <p className="mt-3 mb-4">
                A <strong>RM 50</strong> processing fee is required for your application. Follow the payment instructions provided in the portal.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Step 6: Wait for Board Approval</h2>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">6</span>
                The Approval Process
              </h3>
              <p className="mt-3 mb-4">
                After submitting all required documentation, here's what happens next:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Board Meeting:</strong> The BEM board meets at the end of each month to review applications</li>
                <li><strong>Review Period:</strong> Your application will be discussed and evaluated by the board members</li>
                <li><strong>Approval Timeline:</strong> If everything is in order, your application is typically approved by the <strong>3rd or 4th week</strong> after the board meeting</li>
                <li><strong>Notification:</strong> You'll receive notification via email once your application is approved</li>
              </ul>

              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/eng-tech/email-approval.PNG"
                  alt="BEM Approval Email Notification"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>

              <div className="bg-yellow-100 dark:bg-yellow-900/50 p-4 rounded-lg mt-4">
                <p className="font-medium">ðŸ“… Timeline Tip: Plan accordingly as the approval process usually takes about 1 month from submission to approval.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Step 7: Congratulations! ðŸŽ‰</h2>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold mb-4">You're Now a Registered Engineering Technologist!</h3>
              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/eng-tech/engineering-technologist.jpg"
                  alt="Engineering Technologist Certificate"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
              <p className="mt-4 text-lg">
                Congratulations on obtaining your Engineering Technologist registration with BEM! This is a significant achievement in your professional engineering career.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-red-600 dark:text-red-400">&larr;š ï¸ IMPORTANT: Title Usage Regulations</h2>

            <p className="text-xl font-semibold mb-6">
              Before you start using your new qualification, please read this section carefully to ensure you comply with Malaysian professional regulations.
            </p>

            <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">You CANNOT Use "Eng Tech" or "Engr." as a Pre-nominal Title</h3>

              <div className="my-4 flex justify-center">
                <Image
                  src="/blog/eng-tech/title.jpg"
                  alt="Professional Title Regulations"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md"
                />
              </div>

              <p className="mb-4">
                Based on current regulations by the Board of Engineers Malaysia (BEM), being a registered Engineering Technologist does <strong>NOT</strong> grant you a prefix title (like "Dr.", "Ir.", or "Ts.") to place in front of your name.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-10">How Professional Titles Work in Malaysia</h3>

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6 my-8">
              <h4 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">1. No Pre-nominal Title for BEM Engineering Technologists</h4>
              <p className="mb-4">Being a registered Engineering Technologist with BEM does not grant you a prefix.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>"Ir."</strong> is strictly reserved for <strong>Professional Engineers (PE)</strong> registered with BEM</li>
                <li><strong>"Ts."</strong> is strictly reserved for <strong>Professional Technologists</strong> registered with MBOT (Malaysia Board of Technologists)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6 my-8">
              <h4 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">2. &larr;œ… Correct Usage: Post-nominal (After Your Name)</h4>
              <p className="mb-4">You can and should list the qualification after your name or in your professional descriptions.</p>

              <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Correct Examples:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><code>Jehovah Yii Zui Hon, Engineering Technologist (BEM)</code></li>
                  <li><code>Jehovah Yii Zui Hon, B.Eng Tech</code> (depending on your specific degree)</li>
                </ul>
              </div>

              <div className="bg-red-100 dark:bg-red-900/50 p-4 rounded-lg">
                <p className="font-semibold mb-2">&larr;Œ Incorrect Examples:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><code>Eng Tech Jehovah Yii</code> (Wrong - no pre-nominal)</li>
                  <li><code>Engr. Jehovah Yii</code> (Wrong - not recognized)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-10">If You Want a Title in Front of Your Name...</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6">
                <h4 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Option 1: Get "Ts." Title</h4>
                <p className="mb-3">Register with <strong>MBOT</strong> (Malaysia Board of Technologists) as a Professional Technologist.</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>As a BEM Engineering Technologist, you likely qualify for MBOT registration</li>
                  <li>Once approved, you can legally use <strong>Ts. [Your Name]</strong></li>
                  <li>This is the most common pathway for engineering technology graduates</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6">
                <h4 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Option 2: Get "Ir." Title</h4>
                <p className="mb-3">Become a <strong>Professional Engineer (PE)</strong> with BEM.</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Must complete <strong>BEM GAP</strong> (Graduate Application Programme)</li>
                  <li>Register as Graduate Engineer first</li>
                  <li>Complete required experience and assessments</li>
                  <li>Then proceed to Professional Engineer registration</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">ðŸ“ž Need Help? Contact BEM</h2>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-xl font-bold mb-4">Board of Engineers Malaysia (BEM) Contact Information</h3>
              <p className="mb-4">If you have questions or need assistance with your application, you can reach BEM through the following channels:</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Hotline (Most Direct)
                  </h4>
                  <p className="font-mono text-blue-600 dark:text-blue-400">+603-7804 9851</p>
                  <p className="font-mono text-blue-600 dark:text-blue-400">+603-7804 9776</p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </h4>
                  <p className="text-sm break-all">
                    <a href="mailto:eac@bem.org.my" className="text-green-600 dark:text-green-400 hover:underline">eac@bem.org.my</a>
                  </p>
                  <p className="text-sm break-all">
                    <a href="mailto:etac@bem.org.my" className="text-green-600 dark:text-green-400 hover:underline">etac@bem.org.my</a>
                  </p>
                </div>
              </div>

              <div className="bg-yellow-100 dark:bg-yellow-900/50 p-4 rounded-lg mt-4">
                <p className="font-medium">ðŸ’¡ Tip: Calling the hotline is the most direct way to reach the BEM Secretariat Office for immediate assistance.</p>
              </div>
            </div>



            <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions (FAQ)</h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6">
                <h4 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">Q: What is EAC and ETAC? What is their relationship with BEM?</h4>
                <p className="mb-2"><strong>EAC</strong> (Engineering Accreditation Council) - Accredits <strong>engineering programmes</strong> that lead to the Professional Engineer (PE) pathway. Graduates can become "Ir." (Professional Engineers).</p>
                <p className="mb-2"><strong>ETAC</strong> (Engineering Technology Accreditation Council) - Accredits <strong>engineering technology programmes</strong> that lead to the Engineering Technologist pathway.</p>
                <p className="mt-3"><strong>Key Differences:</strong></p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>EAC programmes are more theoretical and research-focused</li>
                  <li>ETAC programmes are more practical and application-focused</li>
                  <li>Both councils work under BEM to ensure quality education standards</li>
                  <li>Both pathways are equally valuable but serve different roles in the engineering industry</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6">
                <h4 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">Q: How can I become a Professional Engineer (Ir.) as an Engineering Technologist?</h4>
                <p>If you want to obtain the <strong>Ir.</strong> title, you need to:</p>
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                  <li>Undergo the <strong>BEM GAP</strong> (Graduate Application Programme)</li>
                  <li>Register as a <strong>Graduate Engineer</strong> first</li>
                  <li>Gain required professional experience</li>
                  <li>Pass professional assessments</li>
                  <li>Then apply for Professional Engineer (PE) registration</li>
                </ol>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6">
                <h4 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">Q: Is there a Professional Engineering Technology pathway with BEM?</h4>
                <p className="mb-2">Unfortunately, <strong>currently BEM does not have a dedicated Professional Engineering Technology pathway</strong>.</p>
                <p>Your best option for obtaining a professional title is to apply for <strong>MBOT registration</strong> to be accredited with the <strong>"Ts."</strong> (Professional Technologist) title.</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6">
                <h4 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">Q: What documents do I need to prepare?</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Academic transcripts (ETAC-accredited programme)</li>
                  <li>Degree certificate</li>
                  <li>IC (Identity Card) copy</li>
                  <li>Professional photos</li>
                  <li><strong>Ir. guarantor's signature and BEM chop</strong> (most important!)</li>
                  <li>Any other supporting documents as specified in the portal</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6">
                <h4 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">Q: What's the difference between Graduate Engineer and Engineering Technologist?</h4>
                <p className="mb-3">These are two different registration pathways with BEM:</p>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">Graduate Engineer (GE)</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>From <strong>EAC-accredited</strong> engineering programmes</li>
                      <li>Stepping stone to "Ir." (Professional Engineer)</li>
                      <li>More theoretical/research-oriented background</li>
                      <li>Pathway: GE &rarr; PE (Ir.)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">Engineering Technologist (ET)</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>From <strong>ETAC-accredited</strong> engineering technology programmes</li>
                      <li>Currently no direct professional pathway with BEM</li>
                      <li>More practical/application-oriented background</li>
                      <li>Better pathway: ET &rarr; MBOT (Ts.)</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-3 text-sm"><strong>Both are valuable:</strong> Graduate Engineers focus on design and innovation, while Engineering Technologists focus on implementation and optimization. Different roles, both essential to the industry.</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6">
                <h4 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">Q: Why does the Sydney Accord recognize Engineering Technologists, but BEM doesn't provide a professional pathway?</h4>
                <p className="mb-3">This is a common frustration among Engineering Technology graduates. Here's the situation:</p>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-3">
                  <p className="font-semibold mb-2">ðŸŒ International Recognition (Sydney Accord)</p>
                  <p className="text-sm">The <strong>Sydney Accord</strong> is an international agreement that recognizes engineering technology qualifications across member countries. Malaysia is a signatory, meaning our ETAC-accredited degrees are internationally recognized.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg mb-3">
                  <p className="font-semibold mb-2">ðŸ‡²ðŸ‡¾ Local Reality (BEM)</p>
                  <p className="text-sm mb-2">However, BEM currently does <strong>not have a "Professional Engineering Technologist" registration tier</strong>. You can register as "Engineering Technologist" but:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>No professional prefix title (no "Ir." equivalent for ET)</li>
                    <li>No clear career progression pathway within BEM</li>
                    <li>Must go through BEM GAP to become Graduate Engineer if you want "Ir." eventually</li>
                  </ul>
                </div>

                <p className="mb-3"><strong>Why this gap exists:</strong></p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>BEM's registration acts focus primarily on Professional Engineers (PE)</li>
                  <li>Engineering Technologist registration was added later without a full professional framework</li>
                  <li>Industry and regulatory bodies are still evolving to recognize ET contributions</li>
                  <li>There's ongoing discussion about creating a professional pathway, but nothing concrete yet</li>
                </ul>

                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mt-3">
                  <p className="font-semibold mb-2">&larr;œ… Practical Solution: Go to MBOT</p>
                  <p className="text-sm">Since BEM doesn't offer a professional pathway for Engineering Technologists, <strong>most graduates register with MBOT</strong> (Malaysia Board of Technologists) instead. MBOT offers:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                    <li>Professional Technologist registration</li>
                    <li><strong>"Ts." title</strong> that you can use as a prefix</li>
                    <li>Clear professional recognition and career pathway</li>
                    <li>Industry acceptance and respect</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6">
                <h4 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">Q: Should I register with BEM or MBOT as an Engineering Technologist?</h4>
                <p className="mb-3"><strong>Honest recommendation: Register with BOTH if possible, but prioritize MBOT.</strong></p>

                <div className="space-y-3">
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <p className="font-semibold mb-2">&larr;œ… MBOT (Recommended Priority)</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Get the <strong>"Ts."</strong> professional title</li>
                      <li>Clear professional recognition in industry</li>
                      <li>Career progression pathway</li>
                      <li>Better return on investment for Engineering Technology graduates</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <p className="font-semibold mb-2">&larr;œ… BEM (Secondary/Optional)</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Official recognition by the engineering board</li>
                      <li>Useful if working with government projects or contracts</li>
                      <li>Can list "Engineering Technologist (BEM)" on credentials</li>
                      <li>Keeps option open for BEM GAP if you want "Ir." later</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-3 text-sm italic">Many successful Engineering Technologists have both registrations for maximum professional credibility and flexibility.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl shadow-md mt-12 mb-10">
              <h3 className="text-2xl font-bold mb-4">ðŸ“Œ Summary & Quick Tips</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verify ETAC accreditation before applying</li>
                <li>Use your IC number for BEM portal registration</li>
                <li>Get an Ir. guarantor early in the process</li>
                <li>Budget RM 50 for processing fee</li>
                <li>Allow 1 month for board approval</li>
                <li>Use title correctly: "[Name], Engineering Technologist (BEM)"</li>
                <li><strong>Strongly consider MBOT registration for "Ts." title</strong> - better professional pathway</li>
                <li>Stay compliant with professional regulations</li>
                <li>Save BEM hotline: +603-7804 9851 or +603-7804 9776 for quick help</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold mb-4">ðŸŽ“ Final Thoughts</h3>
              <p className="text-lg mb-3">
                Obtaining your Engineering Technologist registration with BEM is a valuable professional credential that recognizes your technical expertise and opens doors to career advancement in Malaysia's engineering industry. Follow the steps carefully, ensure all documentation is complete, and maintain professional ethics in using your title.
              </p>
              <p className="text-lg mb-3">
                <strong>Important consideration:</strong> While BEM registration is good to have, seriously consider registering with <strong>MBOT as a Professional Technologist (Ts.)</strong> as well. Since BEM currently doesn't offer a professional pathway for Engineering Technologists, MBOT provides better career progression and professional recognition with the "Ts." title.
              </p>
              <p className="text-lg">
                Good luck with your application! If you have any questions, don't hesitate to call BEM at <strong>+603-7804 9851</strong> or <strong>+603-7804 9776</strong>, or email <strong>etac@bem.org.my</strong> for Engineering Technologist enquiries.
              </p>
            </div>
          </div>
        )
      });
    } else if (slug === 'trae-solo-china-launch-free-features') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 via-white to-slate-50 dark:from-orange-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-600 dark:text-orange-300 font-semibold">AI Programming &larr;€¢ 27 November 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">ðŸ”¥ All Features Free! TRAE SOLO China Version Launches</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">TRAE SOLO officially lands in China with all features completely free. Introducing SOLO Coder, Plan mode, multi-task parallel processing, DiffView code change tool, and context compression&larr;€”the future of AI programming is here.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Summary</h2>
            <p className="text-xl font-medium mb-6">
              Today, TRAE SOLO officially launches in China, bringing:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li><strong>SOLO Coder:</strong> Professional intelligent agent specialized for complex projects</li>
              <li><strong>Plan Mode:</strong> Let AI create a plan first, then you approve</li>
              <li><strong>Multi-task Parallel Processing:</strong> Frontend and backend development simultaneously, doubling efficiency</li>
              <li><strong>Code Change Tool DiffView:</strong> See exactly what AI changed at a glance</li>
              <li><strong>Context Compression:</strong> Discard unnecessary content, focus on the core</li>
            </ul>

            <p className="mt-8 text-lg">
              AI programming is getting stronger, and AI coding tools are proliferating. Cursor, Claude Code, Codex, GitHub Copilot, and various CLI tools and VSCode plugins. But to be strict, there aren't many tools that can truly make developers feel "confident and hands-off" in production environments.
            </p>

            <p className="mt-6 text-lg">
              For developers who "make a living with code," solving complex problems, maintaining full control over code, and high automation are the core requirements. AI is getting stronger, and future development will definitely be AI-led, with developers orchestrating globally and giving orders&larr;€”not through basic AI models showing off, leaving behind "un-debuggable" AI black box code.
            </p>

            <p className="mt-6 text-lg">
              Among so many tools, TRAE International's SOLO mode has always been unique. Its core design philosophy is: <strong>All in One</strong>.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/trae/solo.png"
                alt="TRAE SOLO unified development environment"
                width={1000}
                height={640}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Unifying all elements involved in the development process: IDE, terminal, browser, documentation, etc.</p>

            <p className="mt-6 text-lg">
              Very exciting news: TRAE's China version has finally launched SOLO mode, and it's completely free!
            </p>

            <p className="mt-6 text-lg font-semibold">
              On November 25, TRAE SOLO officially landed in China, bringing core capabilities including SOLO Coder, Plan mode, multi-task parallel processing, code change tool DiffView, context compression, and most importantly:
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 p-6 rounded-xl shadow-md my-8">
              <h3 className="text-2xl font-bold text-center mb-4">ðŸ”¥ All Features Are Completely Free!</h3>
            </div>

            <p className="mt-6 text-lg">
              TRAE is really going all out with this release!
            </p>

            <p className="mt-6 text-lg">
              The SOLO mode interface is shown below, with task management panel, AI conversation panel, and tool panel from left to right.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/trae/solo-china.png"
                alt="TRAE SOLO China version interface"
                width={1000}
                height={640}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">TRAE China Version: Solving Developers' Biggest Headaches</h2>

            <h3 className="text-2xl font-bold mt-10 mb-4">SOLO: The Developer's Solo Performance with TRAE</h3>

            <p className="text-lg mb-6">
              SOLO mode, TRAE defines it as "The Responsive Coding Agent"&larr;€”a responsive, perceptive programming intelligent agent that can perceive in real-time, be controlled at any time, and handle multiple tasks in parallel.
            </p>

            <p className="text-lg mb-6">
              In IDEs like Cursor, VSCode+plugins, AI coding may be limited to Q&A, code auto-completion, or a single AI agent like Cursor Agent. But in actual programming, they all fall short of that "Iron Man JARVIS" feeling&larr;€”they can't perceive human intent, and every step requires users to push forward themselves.
            </p>

            <p className="text-lg mb-6">
              In a sense, this only reduces the learning cost of programming, not true AI programming. For example, developers used to joke that developers are "CTRL+C/V" engineers, and ordinary AI programming tools only solve the time-consuming part of that work.
            </p>

            <p className="text-lg mb-6">
              AI foundation models are already very powerful and will become even more powerful. How can developers, or even ordinary users, rely on AI programming to truly create a complex product or complete a complex task?
            </p>

            <p className="text-lg mb-6">
              We're talking about truly complex engineering, like a complete e-commerce website, a backend management system involving complex business flows. And most of the work requires learning third-party APIs, such as integrating operational systems that need third-party cameras, or course websites that need payment modules.
            </p>

            <p className="text-lg mb-6">
              Actually, the name TRAE SOLO is very good, and it's also an answer. SOLO means solo, solo performance, alone&larr;€”TRAE is the instrument in the developer's hands.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/trae/solo-meaning.png"
                alt="SOLO meaning explanation"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">SOLO Feature Details</h2>

            <p className="text-lg mb-6">
              TRAE SOLO China version brings rich features, including SOLO Coder, Plan mode, multi-task parallel processing, code change tool DiffView, and context compression.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/trae/solo-coder.png"
                alt="SOLO Coder interface"
                width={1000}
                height={640}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-4">SOLO Coder: Built for Complex Development</h3>

            <p className="text-lg mb-6">
              SOLO Coder is the built-in professional intelligent agent in SOLO mode. For professional developers, the tasks they face are not "create a cool aircraft flying from Earth to Mars" or "create a pelican that can ride a bicycle" type simple pages.
            </p>

            <p className="text-lg mb-6">
              The projects they face are likely based on existing, more complex repositories. SOLO Coder is built for this.
            </p>

            <p className="text-lg mb-6">
              SOLO Coder brings better context management: Currently, after multiple rounds of user questions, as the context becomes longer, the model tends to lose focus, causing hallucinations and affecting AI effectiveness. Users can use the context compression function to manage and refine the context, improving model output effectiveness.
            </p>

            <p className="text-lg mb-6">
              In TRAE SOLO, in addition to the built-in intelligent agent, you can also create new intelligent agents suitable for daily work tasks. When creating an intelligent agent, you can not only customize it, but also generate an intelligent agent with one sentence&larr;€”this experience is very AI.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4">Sub Agent: Using AI to Manage and Call AI</h3>

            <p className="text-lg mb-6">
              Another interesting feature is Sub Agent. Sub Agent belongs to the main Agent and is good at specific vertical task areas. Developers can customize an Agent and decide whether it can be called by other AIs.
            </p>

            <p className="text-lg mb-6">
              This design can improve AI output effectiveness in complex projects. Because the main Agent (such as the built-in SOLO Coder) usually executes and handles more complex tasks, when the context is long, it's easy to have inaccurate execution of specific tasks.
            </p>

            <p className="text-lg mb-6">
              Introducing Sub Agent allows the AI's "work scope" to be clearer, because Sub Agent works in an isolated context. This master-slave intelligent agent mode can avoid contamination from irrelevant context, letting professional Agents do professional things.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4">Plan: Let Developers Control the Big Picture</h3>

            <p className="text-lg mb-6">
              In complex development tasks, development planning is a crucial part. Before AI, the development process had waterfall, agile development, etc. When AI is the leading role in development, "AI itself" also needs a development plan.
            </p>

            <p className="text-lg mb-6">
              Another feature of TRAE SOLO is the ability to enable "Plan." When users use the SOLO Coder intelligent agent, users can check Plan during conversation, and AI will first output a high-quality plan after receiving the task.
            </p>

            <p className="text-lg mb-6">
              Before entering formal development, developers can continuously communicate with AI about the plan until satisfied. For example, when developing a body data management system, but don't want AI to directly develop specific business pages. Want to prioritize building all underlying architecture, such as internationalization, API support, login/logout system, you can clearly define development phases and tasks for each phase in the plan.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/trae/agent.gif"
                alt="Plan mode demonstration"
                width={1000}
                height={640}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-lg mb-6">
              Through custom intelligent agents and Plan mode, TRAE SOLO achieves its first concept: making code "controllable at any time."
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4">Context Management</h3>

            <p className="text-lg mb-6">
              TRAE SOLO has super-strong context capabilities, supporting retrieval of 100,000 code files at once&larr;€”no matter how large the project, it's no problem. In addition to reserving ultra-long context, context compression is particularly important during the AI programming process.
            </p>

            <p className="text-lg mb-6">
              As tasks progress, a lot of early communication or process code may become less important, but still occupies the "resources" of communication between developers and AI.
            </p>

            <p className="text-lg mb-6">
              TRAE SOLO provides the following methods for context compression and management:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Automatic Trigger:</strong> When context exceeds window limits, the system automatically triggers context compression</li>
              <li><strong>Manual User Trigger:</strong> When users see that the generated conversation content has used a lot of context window, they can perform compression operations</li>
            </ul>

            <p className="text-lg mt-6 mb-6">
              After compression, previously unimportant conversations are reduced from 14% to 1%. This way, redundant context is discarded, more valuable content is retained, and the intelligent agent doesn't lose focus, staying focused on core tasks.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4">New Three-Column Layout</h3>

            <p className="text-lg mb-6">
              TRAE SOLO China version brings a brand new three-column layout. Multi-task + conversation flow + tool panel, a clearer, more efficient development space design that makes AI development more efficient and controllable.
            </p>

            <p className="text-lg mb-6">
              Like a control center and dispatch station, developers still have that feeling of controlling the big picture, leaving the work to AI.
            </p>

            <p className="text-lg mb-6">
              On the left, you can see all parallel tasks; in the middle is the conversation with AI; on the right is the code structure and specific code. After SOLO Coder completes a key step or function module, it automatically folds the process into a concise summary, making complex execution processes clear and organized, with AI execution processes visible at a glance.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/trae/chat.gif"
                alt="TRAE SOLO conversation flow"
                width={1000}
                height={640}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-lg mb-6">
              From tasks to conversations, then from conversations to specific tools and corresponding code, progressing layer by layer.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4">Code Change (DiffView) Tool</h3>

            <p className="text-lg mb-6">
              If you want to have global control over the project, you must know exactly where AI changed things. The "DiffView" tool can centrally display code change history.
            </p>

            <p className="text-lg mb-6">
              After changes in the project are completed, you can click the view changes button in the conversation panel to open the code change window. In the middle column AI conversation window, you can see specific files.
            </p>

            <p className="text-lg mb-6">
              For example, in one task, AI modified 2 files according to a requirement. After the task is completed, developers click the "View Changes" summary card at the end of the conversation flow, and can review all file change contents at once in the code changes.
            </p>

            <p className="text-lg mb-6">
              Through the new three-column layout and code change tool, TRAE SOLO achieves its second design concept: "real-time perception" of the coding process.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4">Support for Multi-Task Parallel Processing</h3>

            <p className="text-lg mb-6">
              This TRAE SOLO mode also supports multiple intelligent agent tasks running in parallel. For example, when developing a large backend management system for an airport, you can simultaneously develop multiple modules asynchronously: personnel management, vehicle management, material management, etc.
            </p>

            <p className="text-lg mb-6">
              Or in frontend-backend separation scenarios, one session develops React frontend, while another session simultaneously develops Node.js backend. This is TRAE SOLO's third concept: "multi-task parallel" development process.
            </p>

            <p className="text-lg mb-6">
              Developers can push work forward in multiple threads. Whether it's a full-stack project or a project composed of multiple subtasks, efficiency can be greatly improved. In the past, when writing code, when you were writing backend logic, you couldn't write the frontend login page. Now with TRAE SOLO, developers can switch between multiple tasks at any time and clearly grasp the real-time progress of each task.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Revisiting SOLO: How "One Person" Can Better Program with AI</h2>

            <p className="text-lg mb-6">
              Since Karpathy proposed vibe coding at the beginning of the year, plus the rapid advancement of AI foundation model capabilities this year, it's particularly popular now: one-person companies, one-person enterprises, one-person startups&larr;€”this "one person" concept.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/trae/david-ondrej.png"
                alt="David Ondrej example"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-lg mb-6">
              Many big names even livestream using vibe coding to write applications, not stopping until they earn 1 million, and they succeeded.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/trae/riley-brown.png"
                alt="Riley Brown example"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-lg mb-6">
              And AI programming-related company valuations are also rising. Cursor's latest valuation has exceeded $29 billion.
            </p>

            <p className="text-lg mb-6">
              SOLO mode fits the current trend of rapid evolution of AI programming tools. It can be seen that AI tools have moved from simplifying single-step development to "restructuring the development process."
            </p>

            <p className="text-lg mb-6">
              Now anyone can use AI tools to write code and show off. But "hardcore programmers" still need a real productivity tool.
            </p>

            <p className="text-lg mb-6">
              TRAE officials also mentioned that in the past six months, AI programming products have gradually transitioned from the "tool enhancement" stage to the "process restructuring" stage. Good AI programming tools are no longer satisfied with single code generation, but pursue highly automated end-to-end development experience.
            </p>

            <p className="text-lg mb-6">
              On the other hand, TRAE SOLO's concept also lowers the usage threshold and adapts to a wider range of development scenarios. Whether it's a simple project or a complex project, the system can automatically manage multi-dimensional context.
            </p>

            <p className="text-lg mb-6">
              SOLO can support ultra-large context retrieval of "100,000 source code files," allowing AI to still accurately locate and schedule resources in large codebases. 100,000 source files is already the scale of a super-large project.
            </p>

            <p className="text-lg mb-6">
              From a developer's peripheral tool to a true productivity tool that dominates the development process, after nearly a year of evolution of AI coding tools, TRAE SOLO shows the prototype of future AI programming.
            </p>

            <p className="text-lg mb-6">
              In the future of writing code, developers may not even need to manually organize background information, just focus on guiding and supervising AI's work.
            </p>

            <p className="text-lg mb-6">
              OpenAI Codex team's "Product Lead" Alexander Embiricos proposed a vision for the future interface of programming tools in an interview. Developers no longer "pair" with AI programming assistants in real-time, but "delegate" tasks to AI, and the tool interface might be "like Tinder or TikTok's subscription feed."
            </p>

            <p className="text-lg mb-6">
              Humans swipe/select various needs, then AI solves and pushes progress. The future software development interface may no longer be an IDE, but like Tinder or TikTok's subscription feed. Intelligent agents continuously push work progress, humans just swipe to decide Approve or Not.
            </p>

            <p className="text-lg mb-6">
              TRAE SOLO goes further, not just satisfied with one AI "delivery," but through reasonable planning and multi-task parallel processing, making one person's development more like an "AI team delivering results" process.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">One More Thing</h2>

            <p className="text-lg mb-6">
              TRAE also has a dashboard function, with a heatmap like GitHub. From registering a TRAE account, the system will start recording usage. Through the data dashboard, you can intuitively view daily activity. Based on cumulative active days, the system will automatically grant corresponding user titles, reflecting usage frequency and continuous investment.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/trae/dashboard.png"
                alt="TRAE dashboard with heatmap"
                width={1000}
                height={640}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl shadow-md mt-12 mb-10">
              <h3 className="text-2xl font-bold mb-4">ðŸŽ‰ Summary</h3>
              <p className="text-lg mb-3">
                TRAE SOLO China version is officially here, and all features are completely free! With SOLO Coder, Plan mode, multi-task parallel processing, DiffView, and context compression, the future of AI programming has arrived. Whether you're a solo developer or part of a team, TRAE SOLO provides the tools you need to build complex projects with confidence and control.
              </p>
              <p className="text-lg">
                The era of AI-led development is here, and TRAE SOLO is leading the way.
              </p>
            </div>
          </div>
        )
      });
    } else if (slug === 'qwen-neurips-2025-best-paper') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-50 via-white to-slate-50 dark:from-rose-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300 font-semibold">NeurIPS 2025 &larr;€¢ 27 November 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">ðŸ’ Qwen Wins Best Paper! NeurIPS 2025 Awards Recap</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">Four Best Papers, three runner-ups, the Faster R-CNN Test of Time recognition, and the very first Sejnowski-Hinton Prize&mdash;here is the complete English digest of what just happened at the world&apos;s top AI conference.</p>
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/qwen/neruips.png"
                alt="NeurIPS 2025 award highlights"
                width={1000}
                height={640}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
              <div className="p-5 rounded-2xl border border-rose-100 dark:border-rose-900 bg-white/70 dark:bg-rose-950/30 shadow-sm">
                <p className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-200">Best Papers</p>
                <p className="text-4xl font-bold text-rose-600 dark:text-rose-200">4</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Diffusion theory, gated attention, 1000-layer self-supervised RL, and open-ended diversity research</p>
              </div>
              <div className="p-5 rounded-2xl border border-indigo-100 dark:border-indigo-900 bg-white/70 dark:bg-indigo-950/30 shadow-sm">
                <p className="text-sm uppercase tracking-wider text-indigo-500 dark:text-indigo-200">Runner-Ups</p>
                <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-200">3</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">RL reasoning audits, transductive online learning bounds, neural scaling via superposition</p>
              </div>
              <div className="p-5 rounded-2xl border border-emerald-100 dark:border-emerald-900 bg-white/70 dark:bg-emerald-950/30 shadow-sm">
                <p className="text-sm uppercase tracking-wider text-emerald-500 dark:text-emerald-200">Submissions</p>
                <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-200">21,575</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">5,290 accepted &larr;€¢ 24.52% acceptance after dual-city event in San Diego &amp; Mexico City</p>
              </div>
              <div className="p-5 rounded-2xl border border-amber-100 dark:border-amber-900 bg-white/70 dark:bg-amber-950/30 shadow-sm">
                <p className="text-sm uppercase tracking-wider text-amber-500 dark:text-amber-200">Legacy Honors</p>
                <p className="text-4xl font-bold text-amber-600 dark:text-amber-200">2</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Faster R-CNN receives the Test of Time Award; Sejnowski-Hinton Prize debuts with the Feedback Alignment team</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Why This Announcement Matters</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>The Qwen research team not only secured a Best Paper slot but also open-sourced gated-attention upgrades already powering Qwen3-Next models.</li>
              <li>Rewards highlight two of 2025&apos;s hottest debates: LLM reasoning beyond RLHF, and how far self-supervised RL can scale.</li>
              <li>Legacy awards remind the community where today&apos;s breakthroughs began: Faster R-CNN and biologically plausible learning theories.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Best Paper Winners (4)</h2>

            <div className="space-y-10">
              <div className="border-l-4 border-rose-300 pl-6">
                <h3 className="text-2xl font-bold">1. Artificial Hivemind: The Open-Ended Homogeneity of Language Models</h3>
                <p className="text-sm uppercase tracking-wide text-slate-500">University of Washington &larr;€¢ CMU &larr;€¢ AI2 &larr;€¢ Lila Sciences &larr;€¢ Stanford</p>
                <p className="mt-4 text-lg">Infinity-Chat, a 26K-prompt dataset with 31K human annotations, exposes how open-ended prompts trigger mode collapse: single models repeat themselves while different models converge to similar answers.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Six prompt families and seventeen sub-categories capture brainstorming, creative writing, and speculative reasoning.</li>
                  <li>Findings show most reward models cannot distinguish between globally liked outputs and highly personalized niche favorites.</li>
                  <li>Offers a rigorous framework for measuring LLM diversity beyond random sampling nerfs.</li>
                </ul>
                <div className="my-6 flex flex-col gap-4">
                  <Image src="/blog/qwen/write-metaphor-about-time.png" alt="Infinity-Chat cluster visualization" width={900} height={540} className="rounded-2xl shadow-lg" />
                  <Image src="/blog/qwen/degree-of-repetition.png" alt="Artificial hivemind repetition chart" width={900} height={540} className="rounded-2xl shadow-lg" />
                </div>
                <p className="text-sm">Paper: <a href="https://openreview.net/forum?id=saDOrrnNTz" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-semibold">openreview.net/forum?id=saDOrrnNTz</a></p>
              </div>

              <div className="border-l-4 border-orange-300 pl-6">
                <h3 className="text-2xl font-bold">2. Gated Attention for Large Language Models: Non-linearity, Sparsity, and Attention-Sink-Free</h3>
                <p className="text-sm uppercase tracking-wide text-slate-500">Qwen Team &larr;€¢ Edinburgh &larr;€¢ Stanford &larr;€¢ MIT &larr;€¢ Tsinghua</p>
                <p className="mt-4 text-lg">Qwen&apos;s engineers trained 30 MoE variants (15B) and a 1.7B dense baseline to isolate what head-specific sigmoid gates do when placed after scaled dot-product attention.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Simple change: apply query-dependent sparse gating directly on SDPA outputs.</li>
                  <li>Benefits: higher stability, bigger learning rates, and relief from attention sinks or activation spikes.</li>
                  <li>Already deployed in Qwen3-Next production models powering China&apos;s leading consumer AI apps.</li>
                </ul>
                <div className="my-6 flex flex-col gap-4">
                  <Image src="/blog/qwen/gated-attention-for-llm.png" alt="Gated attention paper illustration" width={900} height={540} className="rounded-2xl shadow-lg" />
                  <Image src="/blog/qwen/sdpa.png" alt="SDPA gating comparisons" width={900} height={540} className="rounded-2xl shadow-lg" />
                </div>
                <p className="text-sm">Paper: <a href="https://openreview.net/pdf?id=1b7whO4SfY" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-semibold">openreview.net/pdf?id=1b7whO4SfY</a></p>
              </div>

              <div className="border-l-4 border-emerald-300 pl-6">
                <h3 className="text-2xl font-bold">3. 1000 Layer Networks for Self-Supervised RL</h3>
                <p className="text-sm uppercase tracking-wide text-slate-500">Princeton &larr;€¢ Warsaw University of Technology</p>
                <p className="mt-4 text-lg">Scaling depth to 1,024 layers in goal-conditioned self-supervised RL unlocks a qualitative jump in behaviors, improving contrastive RL agents by up to 50x versus 2&ndash;5 layer baselines.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No demonstrations or reward signals&mdash;agents explore from scratch yet learn to reach complex locomotion and manipulation targets.</li>
                  <li>Depth expansion reshapes latent dynamics, increasing success rates while preserving stability.</li>
                  <li>Signals that RL can finally adopt the same scaling playbook that pushed LLMs into the mainstream.</li>
                </ul>
                <div className="my-6 flex flex-col gap-4">
                  <Image src="/blog/qwen/scaling-depth.png" alt="1000 layer network scaling" width={900} height={540} className="rounded-2xl shadow-lg" />
                  <Image src="/blog/qwen/humanoid-ant-u4-maze.gif" alt="Self-supervised RL goal reaching demo" width={900} height={540} className="rounded-2xl shadow-lg" />
                </div>
                <p className="text-sm">Paper: <a href="https://openreview.net/pdf?id=s0JVsx3bx1" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-semibold">openreview.net/pdf?id=s0JVsx3bx1</a></p>
              </div>

              <div className="border-l-4 border-indigo-300 pl-6">
                <h3 className="text-2xl font-bold">4. Why Diffusion Models Don&apos;t Memorize</h3>
                <p className="text-sm uppercase tracking-wide text-slate-500">PSL University &larr;€¢ Bocconi University</p>
                <p className="mt-4 text-lg">By studying the implicit dynamical regularization of diffusion training, the authors identify two critical timescales: Ï„<sub>gen</sub> (good samples emerge) and Ï„<sub>mem</sub> (memorization kicks in).</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ï„<sub>gen</sub> stays roughly constant, while Ï„<sub>mem</sub> increases linearly with dataset size&mdash;widening a safe training window.</li>
                  <li>Explains how over-parameterized U-Nets can still generalize in long training runs.</li>
                  <li>Validated via real + synthetic datasets and a solvable random-features model.</li>
                </ul>
                <div className="my-6 flex flex-col gap-4">
                  <Image src="/blog/qwen/why-diffusion.png" alt="Diffusion generalization regimes" width={900} height={540} className="rounded-2xl shadow-lg" />
                  <Image src="/blog/qwen/memorization-transition.png" alt="Memorization transition visualization" width={900} height={540} className="rounded-2xl shadow-lg" />
                </div>
                <p className="text-sm">Paper: <a href="https://openreview.net/pdf?id=BSZqpqgqM0" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-semibold">openreview.net/pdf?id=BSZqpqgqM0</a></p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-16 mb-6">Runner-Up Awards (3)</h2>

            <div className="space-y-8">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="text-2xl font-semibold mb-2">Does Reinforcement Learning Really Incentivize Reasoning Capacity?</h3>
                <p className="text-sm uppercase tracking-wide text-slate-500">Tsinghua LeapLab &larr;€¢ Shanghai Jiao Tong University</p>
                <p className="text-lg mb-4">Large-k pass@k evaluations show RLVR mostly boosts sampling efficiency (small k). At large k, base models still win, implying RL does not yet invent new reasoning trajectories.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Coverage + perplexity analysis reveals RL samples were already present in the original model distribution.</li>
                  <li>Six RLVR algorithms exhibit marginal differences; distillation from stronger teachers adds more headroom.</li>
                </ul>
                <div className="my-5 flex justify-center">
                  <Image src="/blog/qwen/does-reinforcement-learning.png" alt="RLVR evaluation results" width={900} height={540} className="rounded-2xl shadow-lg" />
                </div>
                <p className="text-sm">Paper: <a href="https://openreview.net/pdf?id=4OsgYD7em5" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-semibold">openreview.net/pdf?id=4OsgYD7em5</a></p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="text-2xl font-semibold mb-2">Optimal Mistake Bounds for Transductive Online Learning</h3>
                <p className="text-sm uppercase tracking-wide text-slate-500">Kent State &larr;€¢ Purdue &larr;€¢ Google Research &larr;€¢ MIT</p>
                <p className="text-lg mb-4">Settles a 30-year question: the exact optimal mistake bound for concept classes with Littlestone dimension d is Î˜(&larr;ˆšd) in the transductive setting, cutting errors quadratically compared to standard online learning.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lower bound uses adversarial tree-path construction balancing mistakes against version-space shrinkage.</li>
                  <li>Upper bound mixes sparse encodings, danger-zone minimization, and multiplicative-weights experts.</li>
                </ul>
                <div className="my-5 flex justify-center">
                  <Image src="/blog/qwen/optimal-mistake-bounds.png" alt="Transductive online learning bounds" width={900} height={540} className="rounded-2xl shadow-lg" />
                </div>
                <p className="text-sm">Paper: <a href="https://openreview.net/pdf?id=EoebmBe9fG" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-semibold">openreview.net/pdf?id=EoebmBe9fG</a></p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="text-2xl font-semibold mb-2">Superposition Yields Robust Neural Scaling</h3>
                <p className="text-sm uppercase tracking-wide text-slate-500">MIT</p>
                <p className="text-lg mb-4">Anthropic model probes show that strong representational superposition enforces 1/dimensional scaling, aligning with Chinchilla-like laws and clarifying when scaling curves break.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Weak superposition demands power-law feature frequencies; strong superposition generalizes to broader distributions.</li>
                  <li>Provides knobs (regularization, feature spectra, representation budgets) to engineer better scaling.</li>
                </ul>
                <div className="my-5 flex justify-center">
                  <Image src="/blog/qwen/superposition-yield.png" alt="Superposition-driven scaling law" width={900} height={540} className="rounded-2xl shadow-lg" />
                </div>
                <p className="text-sm">Paper: <a href="https://openreview.net/pdf?id=knPz7gtjPW" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-semibold">openreview.net/pdf?id=knPz7gtjPW</a></p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-16 mb-6">Test of Time: Faster R-CNN Turns 10</h2>
            <p className="text-lg">Ren Shaoqing, He Kaiming, Ross Girshick, and Sun Jian&apos;s 2015 breakthrough that unified region proposal networks with detection heads still anchors modern vision stacks, surpassing 56,700 citations.</p>
            <div className="my-6 flex flex-col gap-4">
              <Image src="/blog/qwen/faster-r-cnn.png" alt="Faster R-CNN original paper highlight" width={900} height={540} className="rounded-2xl shadow-lg" />
              <Image src="/blog/qwen/faster-rcnn-diagram.png" alt="Faster R-CNN architecture diagram" width={900} height={540} className="rounded-2xl shadow-lg" />
            </div>
            <p className="text-lg">The committee also paid tribute to the late Dr. Sun Jian for reshaping industrial-scale computer vision. Faster R-CNN proved learning-based two-stage detectors could hit 5 FPS while delivering unmatched accuracy&mdash;the blueprint for today&apos;s transformer detectors.</p>

            <h2 className="text-3xl font-bold mt-16 mb-6">Sejnowski-Hinton Prize Debuts</h2>
            <p className="text-lg">Timothy Lillicrap, Daniel Cownden, Douglas Tweed, and Colin Akerman won the inaugural prize for the 2016 paper <em>Random synaptic feedback weights support error backpropagation for deep learning</em>, better known for inventing Feedback Alignment.</p>
            <p className="text-lg">The award traces back to Hinton and Sejnowski&apos;s 1983 pact to share any Boltzmann Machine Nobel winnings. After Hinton shared his 2024 Nobel honorarium, NeurIPS created this prize to celebrate biologically plausible learning.</p>
            <div className="my-6 flex justify-center">
              <Image src="/blog/qwen/ranking.png" alt="Sejnowski-Hinton prize announcement" width={900} height={540} className="rounded-2xl shadow-lg" />
            </div>
            <p className="text-lg">Feedback Alignment showed multilayer networks can learn effectively even when backward paths use random weights. As training progresses, forward weights align with noisy feedback signals, yielding a biased yet useful gradient estimate aligned with biological learning constraints.</p>

            <div className="bg-gradient-to-r from-rose-50 to-amber-50 dark:from-rose-900/30 dark:to-amber-900/30 p-6 rounded-2xl shadow-md mt-16">
              <h3 className="text-2xl font-bold mb-4">Quick Recap</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Qwen&apos;s gated attention work cements Chinese model labs at the NeurIPS main stage.</li>
                <li>Infinity-Chat becomes the go-to benchmark for measuring open-ended diversity and hivemind effects.</li>
                <li>RL scaling is finally real: 1,000-layer self-supervised agents dramatically improve success rates.</li>
                <li>Legacy honors underline enduring ideas&mdash;region proposals and feedback alignment remain foundational.</li>
              </ul>
              <p className="text-lg mt-4">Bookmark this page to stay updated as NeurIPS 2025 sessions continue across San Diego and Mexico City.</p>
            </div>
          </div>
        )
      });
    } else if (slug === 'deepseek-math-v2-self-verifiable-reasoning') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300 font-semibold">AI News &larr;€¢ 29 November 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">DeepSeek Makes History Again! Open Source IMO Gold Level Math Model</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">The DeepSeek team&apos;s breakthrough lies in finding a new direction&larr;€”making AI not only solve problems but also check if its reasoning process is rigorous. AI learns to reflect for the first time.</p>
            </div>

            <h3 className="text-2xl font-bold mt-10">DeepSeekMath-V2: What does it mean?</h3>
            <p>AI is evolving from &quot;imitating human speech&quot; to &quot;imitating human thinking&quot;. True thinking is often accompanied by self-doubt. When we see AI starting to stop before outputting the final result and say to itself &quot;This doesn&apos;t look right, let me calculate it again&quot;, that is the moment it truly transcends the attribute of a tool. True wisdom lies not only in giving an answer instantly, but also in having the courage and ability to overturn oneself.</p>

            <h3 className="text-2xl font-bold mt-12">The Magic of DeepSeekMath-V2</h3>
            <p>Yesterday, something interesting happened, it was really magical, I feel like a script wouldn&apos;t be written so coincidentally. Just last night, DeepSeek quietly launched a new model, DeepSeekMath-V2.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/github.png"
                alt="DeepSeekMath-V2 GitHub"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Paper Title:</strong> DeepSeekMath-V2: Towards Self-Verifiable Mathematical Reasoning</li>
              <li><strong>Model Address:</strong> <a href="https://huggingface.co/deepseek-ai/DeepSeek-Math-V2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HuggingFace</a></li>
              <li><strong>Paper Address:</strong> <a href="https://github.com/deepseek-ai/DeepSeek-Math-V2/blob/main/DeepSeekMath_V2.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PDF</a></li>
              <li><strong>Core Authors:</strong> Zhihong Shao, Yuxiang Luo, Chengda Lu, Z.Z. Ren</li>
            </ul>

            <p className="mt-4">The first author of this paper, Zhihong Shao, was also the first author of DeepSeek&apos;s previous math model DeepSeekMath 7B. It is worth mentioning that it was in the DeepSeekMath 7B paper that he and his team proposed the classic GRPO (Group Relative Policy Optimization). Similarly, he is also a core contributor to DeepSeek-R1.</p>

            <h3 className="text-2xl font-bold mt-12">Performance: Olympic Gold Level</h3>
            <p>A 685B math-specific model built on DeepSeek-V3.2-Exp-Base. The special point of this model, in plain English, is that it can not only give the answer, but also check its own problem-solving steps, pick out its own mistakes, debate with itself, until it feels that its entire reasoning process is flawless. Moreover, in terms of ability, it has reached the Olympic gold medal level.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/proofbench.png"
                alt="DeepSeekMath-V2 Benchmark"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>IMO 2025:</strong> Cracked 5 problems (6 in total), reaching gold medal level.</li>
              <li><strong>CMO 2024 (Chinese Mathematical Olympiad):</strong> Reached gold medal level.</li>
              <li><strong>Putnam 2024:</strong> Scored 118, close to full score (120 points), surpassing the highest score of human contestants (90 points).</li>
            </ul>

            <h3 className="text-2xl font-bold mt-12">Ilya Sutskever&apos;s Concern</h3>
            <p>Just 2 days ago, Ilya Sutskever, one of the godfathers of AI and former chief scientist of OpenAI, expressed a concern in a podcast.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/ilya-sutskever.png"
                alt="Ilya Sutskever Podcast"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p>He said that current AI models are like a specialized student A who spent 10,000 hours brushing through all competition questions to become the king of the field. But there is also a generalist student B who spent less time on questions but more on understanding the world. Ilya asked: Which student will have better career development? The answer is student B. Student A&apos;s strength is exam-oriented, while Student B possesses &quot;the &apos;it&apos;&quot;&larr;€”a more profound and generalized understanding.</p>

            <h3 className="text-2xl font-bold mt-12">DeepSeek&apos;s Answer: Self-Verifiable Reasoning</h3>
            <p>Before DeepSeekMath-V2, AI was result-oriented. Like a sales report, only the final number mattered. But in math, the process is everything.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/whiteboard.png"
                alt="Math Process"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p>DeepSeekMath-V2 introduces a &quot;Generator&quot; (the student) and a &quot;Verifier&quot; (the strict teacher). The Verifier checks every step of the Generator, deducting points for logical loopholes. The Generator learns to modify and improve its proof process to satisfy the Verifier. This is &quot;reflection&quot;.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/mean-proof.png"
                alt="Generator and Verifier"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p>They also added &quot;Meta-Verification&quot;&larr;€”a general dean to check if the teacher (Verifier) is grading correctly. This creates a positive cycle where the Generator writes better proofs, and the Verifier becomes more accurate.</p>

            <h3 className="text-2xl font-bold mt-12">The Putnam Miracle</h3>
            <p>The Putnam Competition is recognized as hell difficulty. The median score is usually 0 or 1. Last year&apos;s highest human score was 90. DeepSeekMath-V2 scored <strong>118</strong> out of 120.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/william-lowell.png"
                alt="Putnam Competition"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">Conclusion</h3>
            <p>DeepSeek&apos;s paper suggests that to bridge the gap between evaluation and reality, we should teach AI to look inward&larr;€”to pursue logical self-consistency rather than just external rewards. This is AI&apos;s &quot;extending conscience&quot;.</p>
            <p>DeepSeekMath-V2 is using unimaginable computing power to walk every step of logic that we humans might skip through inspiration. It walks a slower, clumsier, but perhaps closer-to-essence road.</p>
          </div>
        )
      });
    }
    else if (slug === 'deepseek-v3-2-gpt-5-killer') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300 font-semibold">AI News &larr;€¢ 2 December 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">DeepSeek-V3.2 is Here! The Strongest Yet!</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">Performance Approaches Gemini 3, Tears Apart GPT-5 High (Technical Report Interpretation)</p>
            </div>

            <h3 className="text-2xl font-bold mt-10">Summary</h3>
            <p>DeepSeek released two new models: DeepSeek-V3.2 and DeepSeek-V3.2-Speciale.</p>
            <p>Official web, App, and API updated to V3.2. Speciale is available via temporary API for evaluation.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/accuracy.png"
                alt="DeepSeek Accuracy"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h4 className="text-xl font-bold mt-6">1. DeepSeek-V3.2: Daily "All-rounder"</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Public reasoning tests reached GPT-5 level!</strong> Slightly weaker than Gemini-3.0-Pro, but definitely tier 1.</li>
              <li><strong>No verbosity:</strong> Compared to Kimi-K2-Thinking, output length is drastically reduced. Concise, precise, no waiting! Perfect for daily Q&A and general Agent tasks.</li>
            </ul>

            <h4 className="text-xl font-bold mt-6">2. V3.2-Speciale: "Logic Monster" Exploring Limits</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Long-thinking Buff:</strong> This is the "deep thinking version" of V3.2, combined with Math-V2's theorem proving capability, logic rigor Max!</li>
              <li><strong>Rivaling Top Tier:</strong> Performance directly benchmarks Gemini-3.0-Pro in various reasoning benchmarks.</li>
              <li><strong>Competition Harvester:</strong> It actually won Gold in IMO 2025 (Math Olympiad), CMO 2025, ICPC 2025 (Programming), and IOI 2025!</li>
            </ul>

            <h3 className="text-2xl font-bold mt-12">Detailed Breakdown</h3>
            <p>Last night, DeepSeek released two new models: DeepSeek-V3.2 and DeepSeek-V3.2-Speciale. This is DeepSeek's most powerful model to date, achieving global open-source model #1 performance in reasoning, agents, and other fields.</p>
            <p>DeepSeek claims that the standard version of DeepSeek-V3.2 reached the level of GPT-5 in public reasoning benchmarks, only slightly lower than Gemini-3.0-Pro; compared to Kimi-K2-Thinking, V3.2's output length is significantly reduced, significantly reducing computational overhead and user waiting time. The long-thinking enhanced version DeepSeek-V3.2-Speciale combines the theorem proving capability of DeepSeek-Math-V2, possessing strong instruction following, mathematical proof, and logical verification capabilities, and its performance on mainstream reasoning benchmarks rivals Gemini-3.0-Pro.</p>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
              <h4 className="font-bold mb-2">TL;DR Version</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>DeepSeek-V3.2 (Standard Edition):</strong> Focuses on cost-effectiveness and daily use, reasoning ability reaches GPT-5 level, shorter output than Kimi-K2-Thinking, faster and more cost-saving, and realizes "thinking while using tools" for the first time. Official website, APP, and API have all been upgraded to this version, suitable for daily Q&A, writing, and Agent tasks.</li>
                <li><strong>DeepSeek-V3.2-Speciale (Ultimate Enhanced Edition):</strong> Oriented towards exploring the upper limit of AI capabilities, performance rivals Gemini-3.0-Pro, won gold medals in 2025 IMO, IOI, ICPC (IOI ranked 10th in humans, ICPC ranked 2nd). Only provides temporary API, long thinking chain, large Token consumption, high cost, does not support tool calling, and has not optimized daily dialogue, service ends on December 15, 2025.</li>
              </ul>
            </div>

            <p>In the open-source world, DeepSeek-V3.2 is also a leader. According to data from the authoritative large model evaluation platform Artificial Analysis, before including DeepSeek-V3.2, the open-source model with the highest intelligence level in the industry was Kimi-K2-Thinking.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/artificial-analysis-intelligence-index.png"
                alt="Artificial Analysis Intelligence Index"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p>On benchmarks where both DeepSeek-V3.2 and Kimi-K2-Thinking announced results and the test settings were the same, DeepSeek-V3.2 led Kimi-K2-Thinking.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/intelligence-score.png"
                alt="Intelligence Score"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <p className="text-center text-sm text-gray-500">DeepSeek-V3.2 and Kimi-K2-Thinking benchmark comparison, data source: official channels</p>

            <p>DeepSeek-V3.2 is also the first model launched by DeepSeek that integrates thinking into tool use, and supports tool calling in both thinking mode and non-thinking mode.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/prompting.gif"
                alt="Prompting GIF"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p>The DeepSeek-V3.2 model reached the highest level of current open-source models in agent evaluation, significantly narrowing the gap between open-source models and closed-source models. It is worth noting that V3.2 did not conduct special training for the tools of these test sets, which means that V3.2 can show strong generalization in real application scenarios.</p>

            <p>In addition, the DeepSeek-V3.2-Speciale model also successfully won gold medals in IMO 2025 (International Mathematical Olympiad), CMO 2025 (Chinese Mathematical Olympiad), ICPC World Finals 2025 (International Collegiate Programming Contest World Finals), and IOI 2025 (International Olympiad in Informatics). Among them, ICPC and IOI scores reached the level of the second and tenth human contestants respectively.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/benchmark.png"
                alt="Benchmark Results"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p>On highly complex tasks, the Speciale model is significantly better than the standard version, but the Tokens consumed are also significantly more, and the cost is higher. Currently, DeepSeek-V3.2-Speciale is only for research use, does not support tool calling, and has not been specially optimized for daily dialogue and writing tasks. Currently, DeepSeek official web, App, and API have all been updated to the official version DeepSeek-V3.2. The Speciale version is currently only open in the form of a temporary API service for community evaluation and research. The DeepSeek-V3.2 series models have been open-sourced, and the technical report was released at the same time.</p>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-6">
              <p><strong>Technical Report:</strong> <a href="https://modelscope.cn/models/deepseek-ai/DeepSeek-V3.2/resolve/master/assets/paper.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PDF Link</a></p>
              <p><strong>Open Source Links:</strong></p>
              <ul className="list-disc pl-6">
                <li>DeepSeek-V3.2: <a href="https://modelscope.cn/models/deepseek-ai/DeepSeek-V3.2" className="text-blue-600 hover:underline">ModelScope</a>, <a href="https://huggingface.co/deepseek-ai/DeepSeek-V3.2" className="text-blue-600 hover:underline">HuggingFace</a></li>
                <li>DeepSeek-V3.2-Speciale: <a href="https://modelscope.cn/models/deepseek-ai/DeepSeek-V3.2-Speciale" className="text-blue-600 hover:underline">ModelScope</a>, <a href="https://huggingface.co/deepseek-ai/DeepSeek-V3.2-Speciale" className="text-blue-600 hover:underline">HuggingFace</a></li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12">Technical Report Interpretation</h3>
            <h4 className="text-xl font-bold mt-6">Conclusion First</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>DeepSeek-V3.2 ties with GPT-5-High in reasoning ability, surpassing it in some indicators.</li>
              <li>DeepSeek-V3.2-Speciale (High Compute Version) won gold medals in 2025 IMO and IOI, reasoning ability close to Gemini-3.0-Pro.</li>
            </ul>

            <p><strong>How was it done? Three things:</strong></p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>DSA (DeepSeek Sparse Attention):</strong> A sparse attention mechanism that significantly reduces the calculation cost of long context.</li>
              <li><strong>Post-training overweighting:</strong> Increased the calculation budget of post-training to more than 10% of pre-training.</li>
              <li><strong>Large-scale synthetic data:</strong> Generated 1,800 environments and 85,000 tasks, all synthetic.</li>
            </ol>

            <h4 className="text-xl font-bold mt-6">1. DSA: Reducing attention from O(L&larr;²) to O(Lk)</h4>
            <p>Traditional Transformer attention mechanism is O(L&larr;²) complexity, L refers to sequence length. In long context scenarios, this complexity becomes a big problem, reasoning is slow, and post-training is also difficult.</p>
            <p>DeepSeek's solution is DSA, the core idea is: Not every token looks at all context, only look at the most relevant k tokens. Thus the calculation amount becomes O(Lk), k is a fixed value (2048), no longer growing explosively with text length.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/multi-query-attention.png"
                alt="DSA Architecture"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <p className="text-center text-sm text-gray-500">Figure 2 | DSA Architecture. Lightning Indexer quickly filters, Top-k Selector selects 2048 tokens for attention calculation</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/inference-cost.png"
                alt="Inference Cost"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <p className="text-center text-sm text-gray-500">Figure 3 | Inference cost comparison. V3.2 cost is almost flat in long sequence scenarios, V3.1 is linear growth</p>

            <h4 className="text-xl font-bold mt-6">2. Post-training overweighting: Budget exceeds 10% of pre-training</h4>
            <p>In the past, the post-training investment of open-source models was generally insufficient, which limited their performance on difficult tasks. DeepSeek's approach is: Miracles come from great effort. The specific number is: The calculation budget for post-training exceeds 10% of the pre-training cost.</p>

            <h4 className="text-xl font-bold mt-6">3. Large-scale agent data synthesis</h4>
            <p>Generalization ability is another shortcoming of large models in agent scenarios. The reason is simple: not enough diverse training environments. DeepSeek's solution is: Synthesize it yourself.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/synthesized-task.png"
                alt="Synthesized Task"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <p className="text-center text-sm text-gray-500">Synthesized task example: Three-day travel planning. Complex constraints, easy verification, large search space&larr;€”typical "hard to solve, easy to verify" problem</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/RL-training.png"
                alt="RL Training"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <p className="text-center text-sm text-gray-500">Figure 5 | Synthetic data RL effect, blue line is RL-Synthetic-Data</p>

            <h3 className="text-2xl font-bold mt-12">Thinking in Tool-Use</h3>
            <p>Integrating reasoning and tool calling is a key design of v3.2 in engineering. DeepSeek-R1 proved that "thinking" is very helpful for solving complex problems. But R1's strategy is: When the second round of messages arrives, discard the previous reasoning content. This is very wasteful in tool calling scenarios&larr;€”every time the tool returns a result, the model has to reason again.</p>
            <p>DeepSeek-V3.2's design is:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Only discard reasoning content when a new user message arrives</li>
              <li>If it is just a tool returning a result, keep the reasoning content</li>
              <li>When discarding reasoning content, keep the tool calling history</li>
            </ul>

            <h3 className="text-2xl font-bold mt-12">Result Comparison</h3>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/comparison.png"
                alt="Comparison"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <p className="text-center text-sm text-gray-500">Table 2 | Full benchmark comparison. DeepSeek-V3.2-Thinking is basically tied with GPT-5-High, Speciale version surpasses in mathematics</p>

            <h3 className="text-2xl font-bold mt-12">Context Management Strategy</h3>
            <p>Search agent scenarios have a problem: often hitting the 128K context limit. DeepSeek tried several strategies, and the result is a bit counter-intuitive: The simplest Discard-all effect is the best, BrowseComp improved from 53.4% to 67.6%.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/accuracy-of-browsecomp.png"
                alt="Accuracy of BrowseComp"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <p className="text-center text-sm text-gray-500">Figure 6 | Context management effect. Discard-all is simple but best effect, 67.6% vs baseline 53.4%</p>

            <h3 className="text-2xl font-bold mt-12">What's Missing</h3>
            <p>The DeepSeek team frankly stated three limitations:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>World knowledge is not rich enough:</strong> Training computing power is limited, knowledge breadth is not as good as Gemini-3.0-Pro. Plan to expand pre-training scale in the future.</li>
              <li><strong>Low Token efficiency:</strong> To achieve the same output quality, more tokens need to be generated. Need to optimize the "intelligence density" of the reasoning chain.</li>
              <li><strong>Gap in the hardest tasks:</strong> On the top complex tasks, there is still a gap with Gemini-3.0-Pro.</li>
            </ol>

            <h3 className="text-2xl font-bold mt-12">Conclusion</h3>
            <p>This paper roughly said these three things:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>DSA solved the efficiency problem, making large-scale post-training possible.</li>
              <li>Large-scale post-training brought higher training returns.</li>
              <li>Large-scale synthetic data made the generalization of agent capabilities possible.</li>
            </ul>
            <p>Connecting these three things allowed DeepSeek v3.2 to catch up with GPT-5 in reasoning ability.</p>
          </div>
        )
      });
    } else if (slug === 'mistral-3-series-release') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300 font-semibold">AI News &larr;€¢ 3 December 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">ðŸš€ "European DeepSeek" Releases Mistral 3 Series</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">Benchmarking directly against Chinese models. Is this Europe's return to the AI race?</p>
            </div>

            <h3 className="text-2xl font-bold mt-10">Abstract</h3>
            <p>The series includes multiple models:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>"The world's best small model":</strong> Ministral 3 (14B, 8B, 3B), each with Base, Instruct, and Reasoning versions.</li>
              <li><strong>A frontier-class open-source MoE:</strong> Mistral Large 3, 675B parameters, 41B active.</li>
            </ul>

            <p className="mt-4">Mistral states: "All models are released under Apache 2.0 license. Open-sourcing our models in multiple compressed formats empowers the developer community and puts AI in people's hands through distributed intelligence."</p>
            <p>The company also claims: "Ministral models represent the best price-performance ratio in their class. Meanwhile, Mistral Large 3 joins the ranks of frontier instruction-tuned open-source models."</p>
            <p>The release has attracted massive attention, with some saying it marks Europe's return to the AI race dominated by China and the US.</p>

            <h3 className="text-2xl font-bold mt-12">Mistral Released Mistral 3 Series</h3>
            <p>Last year, they were the darlings of open source. Then... they hadn't released a model for over a year.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/mistral/base-model-benchmark.png"
                alt="Base Model Benchmark"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">Base Model Comparison: Benchmarking DeepSeek and Kimi</h3>
            <p>Their official comparison is interesting. They no longer benchmark against GPT/Claude/Gemini. Only Chinese models: DeepSeek-3.1 and Kimi-K2.</p>
            <p>Fun fact... Mistral is a French company, considered the hope of Europe. Valuation... 14 billion USD.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/mistral/problem.png"
                alt="Problem"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p className="mt-4">Something must be wrong.</p>

            <h3 className="text-2xl font-bold mt-12">Mistral Large 3: The Flagship</h3>
            <p>Mistral Large 3, 675B total parameters, 41B active, MoE architecture, all Apache 2.0 open source, reasoning version coming soon.</p>
            <p>LMArena ranking: 2nd in open-source non-reasoning models, 6th overall.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/mistral/lmarena-elo-score.png"
                alt="LMArena Elo Score"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p className="mt-4">Training used 3000 NVIDIA H200s.</p>

            <h3 className="text-2xl font-bold mt-12">Evaluation Info</h3>
            <p>For Mistral Large 3, official data compares with DeepSeek V3.1 and Kimi K2.</p>
            <p>Mistral Large 3 is Mistral's first MoE model since the groundbreaking Mixtral series, representing a significant step in pre-training. After post-training, it matches the best instruction-tuned open-weight models on the market in general prompts, shows image understanding capabilities, and performs top-tier in multi-lingual conversations (non-English/Chinese).</p>
            <p>Notably, Mistral didn't compare against the DeepSeek-V3.2 released just days ago, possibly because DeepSeek hasn't released general language benchmarks, only reasoning and agent benchmarks.</p>

            <h3 className="text-2xl font-bold mt-12">Third-party Human Evaluation</h3>
            <p>Mistral win rate vs DeepSeek: 53%, vs Kimi: 55%.</p>
            <p>Larger gap in multi-lingual tasks: vs DeepSeek 57%, vs Kimi 60%.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/mistral/model-performance-comparison.png"
                alt="Model Performance Comparison"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">Ministral 3 Series: Small Models</h3>
            <p>Ministral 3 series has 3B, 8B, 14B sizes, all dense models. Each has pretraining, instruct, reasoning versions. All support image understanding, 40+ languages.</p>
            <p>Official claim: Ministral instruct generates tokens an order of magnitude less than comparable models.</p>
            <p>14B reasoning version reached 85% on AIME '25.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/mistral/gpqa.png"
                alt="GPQA Diamond Accuracy"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h4 className="text-xl font-bold mt-6">14B Series Scores</h4>
            <div className="my-6 flex flex-col gap-4">
              <Image src="/blog/mistral/pretraining-benchmarks.png" alt="Ministral 14B Pretraining" width={900} height={540} className="rounded-2xl shadow-lg" />
              <Image src="/blog/mistral/instruction.png" alt="Ministral 14B Instruct" width={900} height={540} className="rounded-2xl shadow-lg" />
              <Image src="/blog/mistral/reasoning.png" alt="Ministral 14B Reasoning" width={900} height={540} className="rounded-2xl shadow-lg" />
            </div>

            <h3 className="text-2xl font-bold mt-12">Deployment</h3>
            <p>Optimized with NVIDIA, vLLM, Red Hat.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Large 3 runs on Blackwell NVL72 or single 8x A100/H100 node.</li>
              <li>Ministral series runs on DGX Spark, RTX PC, Jetson.</li>
              <li>API available on major platforms, custom training offered.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-12">Conclusion</h3>
            <p>An interesting point. When Mistral 2 was released, the comparison was all overseas models.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/mistral/comparison.png"
                alt="Mistral 2 Comparison"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p className="mt-4">But Mistral 3 chose Chinese models. Perhaps... Chinese open-source models are now the global benchmark... (Of course, we must admit the gap with top closed-source models).</p>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl mt-12">
              <h3 className="text-xl font-bold mb-4">Appendix: Partnership & Availability</h3>
              <p><strong>Mistral, NVIDIA, vLLM, and Red Hat Partnership:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>NVFP4 checkpoint for vLLM.</li>
                <li>NVIDIA collaboration for optimization on Hopper GPUs.</li>
                <li>Support for TensorRT-LLM and SGLang.</li>
              </ul>
              <p className="mt-4"><strong>Availability:</strong></p>
              <p>Mistral 3 is available on Mistral AI Studio, Amazon Bedrock, Azure Foundry, Hugging Face, Modal, IBM WatsonX, OpenRouter, Fireworks, Unsloth AI, and Together AI.</p>
            </div>
          </div>
        )
      });
    } else if (slug === 'deepseek-technology-evolution') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300 font-semibold">AI Zero Distance NO.326 &larr;€¢ 8 December 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">Understanding DeepSeek Technology Evolution: V3 &rarr; R1 &rarr; V3.2</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">DeepSeek releases are always a festival. From V3 to the reasoning-specialized R1, and now the GPT-5 rival V3.2. Let's decode the technology behind the timeline.</p>
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/timeline.png"
                alt="DeepSeek Release Timeline"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h3 className="text-2xl font-bold mt-10">Abstract</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DeepSeek V3.2</strong> uses an architecture similar to V3 but with key upgrades for efficiency.</li>
              <li><strong>Major Change:</strong> Adoption of <strong>Sparse Attention</strong> from V3.2-Exp.</li>
              <li><strong>Math Performance:</strong> Uses <strong>Self-Verification</strong> from DeepSeekMath V2.</li>
              <li><strong>Training Improvements:</strong> Updates to GRPO stability and other pipeline optimizations.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-12">The Timeline</h3>
            <p><strong>December 2024: DeepSeek-V3</strong></p>
            <p>Released with a training cost of only ~$5.5 million, matching Claude 3.5's performance and fully open-sourced.</p>

            <p className="mt-4"><strong>January 2025: DeepSeek R1</strong></p>
            <p>A reasoning model benchmarking OpenAI's o1, but at a fraction of the inference cost. R1 shares the V3 architecture but differs in training methodology.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/deepseek-v3-architecture.png"
                alt="DeepSeek V3/R1 Architecture"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p><strong>Post-R1 Silence</strong></p>
            <p>DeepSeek was quiet for months, reportedly dealing with chip transitions (NVIDIA to Huawei and back). R2 is yet to be released.</p>

            <p className="mt-4"><strong>Late 2025: V3.1 & V3.2</strong></p>
            <p>V3.2 officially released, matching GPT-5 in reasoning benchmarks and slightly trailing Gemini 3.0 Pro.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/v3.2-speciale.png"
                alt="V3.2 Benchmark Comparison"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">Key Concepts</h3>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-lg my-4">
              <h4 className="font-bold mb-2">Training Phases</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Pre-training:</strong> Massive text ingestion to create the Base Model.</li>
                <li><strong>Post-training:</strong> SFT (Supervised Fine-Tuning) + RL (Reinforcement Learning) for instructions and safety.</li>
              </ul>
              <h4 className="font-bold mb-2">Model Relationships</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>V3:</strong> Standard pipeline (Pre-train &rarr; SFT &rarr; RL).</li>
                <li><strong>R1-Zero:</strong> V3-Base &rarr; Pure RL (No SFT).</li>
                <li><strong>R1:</strong> Cold Start (High Quality Data) &rarr; RL.</li>
              </ul>
            </div>

            <h4 className="text-xl font-bold mt-8">V3 Core: MoE & MLA</h4>
            <p><strong>MoE (Mixture of Experts):</strong> Only activates a subset of parameters per token, allowing huge model size with efficient inference.</p>
            <p><strong>MLA (Multi-Head Latent Attention):</strong> DeepSeek's innovation to save VRAM. It compresses Key and Value (KV) vectors into a low-dimensional latent space before storing them in the KV Cache, then decompresses them during attention calculation.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/mha.png"
                alt="MLA Architecture"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h4 className="text-xl font-bold mt-8">R1 Core: RLVR & GRPO</h4>
            <p>R1 uses <strong>RLVR (Reinforcement Learning with Verifiable Rewards)</strong>. For math and code, we don't need a Reward Model (which can be inaccurate); we can programmatically verify the answer (compiler passes, math answer is correct).</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/RLHF.png"
                alt="Verifiable Rewards"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <p className="mt-4"><strong>GRPO (Group Relative Policy Optimization):</strong> A simplified PPO that removes the Critic model, saving memory and complexity.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/verifier-output.png"
                alt="RLHF vs GRPO"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">V3.2 Innovation: DSA (Sparse Attention)</h3>
            <p>Standard attention is O(L&larr;²), which gets slow for long context. <strong>DSA (DeepSeek Sparse Attention)</strong> lets the model learn <em>which</em> tokens to attend to via a "Lightning Indexer" and "Token Selector", reducing complexity to O(LÃ—k).</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/dsa-flow.png"
                alt="DSA Flow"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">DeepSeekMath V2: Self-Verification</h3>
            <p>V3.2 adopts the <strong>Self-Verification</strong> technique. A "Generator" creates a proof, a "Verifier" checks the logic step-by-step, and a "Meta-Verifier" ensures the Verifier isn't hallucinating errors.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/deepseek/llm-thinking.png"
                alt="Generator and Verifier"
                width={900}
                height={620}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">DeepSeek-V3.2 Full Picture</h3>
            <p><strong>Architecture:</strong> MoE + MLA + DSA.</p>
            <p><strong>Training:</strong> Hybrid RLVR (Rule-based for math/code) + LLM-as-a-judge (for general tasks).</p>
            <p><strong>GRPO 2.0:</strong> Improved stability with domain-specific KL strengths and unbiased estimators.</p>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 p-6 rounded-xl shadow-md mt-10">
              <h3 className="text-xl font-bold mb-4">Summary</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>V3:</strong> Efficiency via MoE and MLA.</li>
                <li><strong>R1:</strong> Reasoning via RLVR and GRPO.</li>
                <li><strong>V3.2:</strong> Integration of all above + DSA for long-context efficiency + Self-Verification for rigor.</li>
              </ul>
            </div>
          </div>
        )
      });
    } else if (slug === 'gpt-5-2-openai-strikes-back') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 via-white to-slate-50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300 font-semibold">Breaking News &larr;€¢ 12 December 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">ðŸš€ GPT-5.2 Officially Released! Surpasses Google Gemini 3 Pro, the AI for "Workers" is Here</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">OpenAI drops a bombshell late at night! GPT-5.2 is released, reclaiming the global AI throne. Three models launched today: <strong>GPT 5.2 Instant</strong>, <strong>GPT 5.2 Thinking</strong>, and <strong>GPT 5.2 Pro</strong>.</p>
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/breaking.png"
                alt="GPT-5.2 Breaking News"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/gpt5.2.png"
                alt="GPT-5.2 Models"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-xl font-medium mb-6">Designed specifically for "high-difficulty knowledge work," GPT-5.2 is the strongest general-purpose model on the planet. In OpenAI's published benchmarks, it practically crushes Gemini 3 Pro across the board!</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/sam-altman.png"
                alt="Sam Altman Announcement"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-10">Comprehensive Evolution: No Dead Angles</h3>
            <p>Compared to the previous generation, GPT-5.2 has achieved a comprehensive evolution in general intelligence, ultra-long text understanding, Agent tool usage, and visual capabilities:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>SWE-Bench Pro:</strong> Scored a massive 55.6%, a new high score.</li>
              <li><strong>LMArena:</strong> Ranked global #2, sitting comfortably just behind Claude Opus 4.5.</li>
              <li><strong>ARC-AGI-2:</strong> GPT-5.2 Pro tops the chart with 52.9% by an absolute advantage.</li>
              <li><strong>GDPval:</strong> Covering knowledge across 44 professions, its performance directly surpasses human industry experts.</li>
            </ul>
            <p className="font-semibold mt-4">One sentence summary: For handling complex real-world tasks end-to-end, there is currently no model stronger than it.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/swe-bench-pro.png"
                alt="SWE-Bench Pro Results"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/leaderboard.png"
                alt="Benchmark Leaderboard"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">More Than Just Capability: Specs & Price</h3>
            <p>Paper specs have also seen a massive upgrade:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>400k Context Window:</strong> Easily swallows ultra-long texts and complex conversations.</li>
              <li><strong>128k Max Output Length:</strong> Deep long-form generation is no longer interrupted.</li>
              <li><strong>Knowledge Cutoff:</strong> Updated to August 31, 2025, mastering the latest world dynamics.</li>
              <li><strong>Reasoning Token Support:</strong> Specialized in complex logic and multi-step reasoning.</li>
            </ul>

            <p className="mt-4">Of course, with surging performance comes surging prices. Compared to GPT-5/5.1, GPT-5.2 is <strong>40% more expensive</strong>!</p>
            <p>Stronger reasoning, faster speeds, and higher prices&larr;€”all of this seems to imply that OpenAI has not only upgraded the model scale but the underlying computing cost has likely reached a new magnitude.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/peter-gostev.png"
                alt="Peter Gostev Tweet"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">This Time, It's All About "Professionalism"</h2>
            <p>One month ago, GPT-5.1 debuted with "high EQ and IQ," only to run headfirst into the strong rival Google Gemini 3. This update comes just as media reports state OpenAI internally entered "Code Red" emergency status.</p>
            <p>However, OpenAI executives told the media not to view GPT-5.2 as a response to Gemini 3. The OpenAI Application CEO told reporters:</p>
            <blockquote className="pl-4 italic border-l-4 border-indigo-500 my-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-r-lg">
              "We announced 'Code Red' to signal internally that we want to concentrate power to do big things. It's a great way to prioritize. Overall, our resources for developing ChatGPT increased, which helped this release, but it's not the only reason it launched this week."
            </blockquote>

            <p>This time, GPT-5.2 focuses on being a professional knowledge-based AI, truly the "Best Model for Workers." OpenAI researcher Yu Bai stated, "Don't look at it as just a small version number iteration; it's a huge leap in capability."</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/yu-bai.png"
                alt="Yu Bai Quote"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>In tasks that human experts spend 4-8 hours completing, GPT-5.2's win rate in human evaluation is as high as <strong>70.9%</strong>.</p>
            <p>GPT-5.2 lives up to expectations, performing better in multiple practical tasks&larr;€”creating spreadsheets, making presentations, writing code, perceiving images, understanding long contexts, using tools, and handling complex multi-step projects.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/noarm-brown.png"
                alt="Noam Brown Quote"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>A previous OpenAI report stated that ChatGPT saves enterprise users an average of 40&larr;€“60 minutes per day, while heavy users say they save over 10 hours a week.</p>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-6">
              <p className="font-medium">Extended Reading: <Link href="#" className="text-blue-600 hover:underline">OpenAI's latest report! Top 5% elite efficiency skyrockets 16x, while ordinary people are quietly eliminated</Link></p>
            </div>
            <p>In short, AI handling "professional work" is the hard truth!</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Beating Human Experts, Workers Rejoice</h2>
            <p>Currently, GPT 5.2 Thinking is the best model for real-world professional use. On GDPval, GPT 5.2 Thinking set a new SOTA and is the <strong>first model in history to perform better than human experts</strong>.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/gdpval.png"
                alt="GDPval Results"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>According to human expert judgement, GPT 5.2 Thinking beat or tied top industry professionals in 70.9% of GDPval knowledge work cases.</p>
            <p>When completing GDPval tasks, its speed is <strong>11 times faster</strong> than expert professionals, and the cost is <strong>less than 1%</strong>.</p>
            <p>This shows that when combined with human supervision, GPT 5.2 can effectively assist in completing professional work. In other words, whether helping an accountant organize financial reports, doing PPTs for a product manager, or acting as a coding assistant for a programmer, GPT-5.2 is more handy.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/9-scenario.png"
                alt="9 Scenarios"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>In GDPval, the model needs to complete 44 clearly defined jobs covering the top 9 industries contributing to US GDP. Tasks require providing actual work results, such as sales presentations, accounting spreadsheets, urgent care schedules, manufacturing charts, or short videos.</p>

            <h3 className="text-2xl font-bold mt-10">Spreadsheets & PPTs Master</h3>
            <p>In ChatGPT, GPT 5.2 Thinking possesses new tools that GPT 5 Thinking does not have. Furthermore, in internal testing for junior investment banking analyst spreadsheet modeling, GPT-5.2 Thinking's average per-task score was 9.3% higher than GPT 5.1, rising from 59.1% to 68.4%.</p>

            <p>Side-by-side comparisons show that spreadsheets and PPTs generated by GPT 5.2 Thinking have improved in complexity and format.</p>
            <p>As shown below, for high-difficulty complex tables, GPT 5.2 Thinking generates them in one sentence, worthy of being called an "HR Planner".</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/data-analyst.jpg"
                alt="Data Analyst Example"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>Including Cap Table (capitalization table), GPT-5.2 Thinking completed all calculations in the role of a senior bank analyst, and the process was clear and checkable.</p>
            <p>In contrast, GPT-5.1 Thinking not only wrongly calculated liquidation preferences for Seed, Series A, and Series B, but left most rows blank, leading to erroneous final equity return calculations; it also wrongly inserted calculation formulas in the header row.</p>

            <p>For project management, GPT-5.2 Thinking gave a visual intuitive summary with axis for each task and time. Compared to this, GPT-5.1 Thinking looked particularly rough.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/gpt5.2-thinking.png"
                alt="GPT-5.2 Thinking VS 5.1"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Programming Record Breaker, Devouring Full-Stack Development</h2>
            <p>Of course, in programming, GPT-5.2 is also the King of Kings!</p>
            <p>On the real-world software engineering benchmark <strong>SWE-Bench Pro</strong>, GPT 5.2 Thinking set a new record of <strong>55.6%</strong>.</p>
            <p>Unlike SWE-bench Verified which only tests Python, SWE-Bench Pro tests four programming languages, has stronger contamination-resistance, and is more challenging, diverse, and industrially relevant.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/swe-bench-pro.png"
                alt="SWE-Bench Pro Again"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>In SWE-Bench Pro, the model is given a codebase and must generate a patch to solve a realistic software engineering task.</p>
            <p>On SWE-bench Verified, GPT 5.2 Thinking took down a high score of <strong>80%</strong>.</p>
            <p>This means it can more reliably debug production code, implement feature requests, refactor large codebases, and release fixes end-to-end with less human intervention.</p>
            <p>In frontend software engineering, GPT 5.2 Thinking is also superior to GPT 5.1 Thinking. Early testers found it to be a powerful daily companion for full-stack engineers, significantly stronger in frontend development and complex or unconventional UI work (especially involving 3D elements).</p>

            <h3 className="text-2xl font-bold mt-10">One Prompt, Incredible Results</h3>
            <p>Let's see what GPT 5.2 can make with just one prompt:</p>

            <p className="font-semibold mb-2 mt-4 text-lg">ðŸŒŠ Ocean Wave Simulation</p>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/ocean-simulation.gif"
                alt="Ocean Simulation"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm font-mono mb-4">
              Prompt: Create a single-page app in a single HTML file with the following requirements: Name: Ocean Wave Simulation, Goal: Display realistic animated waves, Features: Change wind speed, wave height, lighting. The UI should be calming and realistic.
            </div>

            <p className="font-semibold mb-2 mt-8 text-lg">ðŸŽ„ Holiday Card Maker</p>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/card.jpg"
                alt="Card Maker"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm font-mono mb-4">
              Prompt: Create a single-page app, in a single HTML file, that demonstrates a warm and fun holiday card! The card should be interactive and enjoyable for kids! Have variety of items kids can drop in the UI; a few should be already placed by default. Also have fun sound interactions. Place many cute and fun stuff as much as possible. Animation like snowdrop should be used nicely.
            </div>

            <p className="font-semibold mb-2 mt-8 text-lg">ðŸŒ§ï¸ Typing Rain Game</p>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/breaking.png"
                alt="Typing Rain Game"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm font-mono mb-4">
              Prompt: Create a single-page app in a single HTML file with the following requirements: Name: Typing Rain, Goal: Type falling words before they reach the bottom. Features: Increasing difficulty, accuracy tracker, score. The UI should be the city background with animated raindrop words.
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Fewer Hallucinations, Clearer Head</h2>
            <p>GPT 5.2 Thinking has fewer hallucinations than GPT 5.1 Thinking.</p>
            <p>In a set of de-identified ChatGPT queries, the former contained 30% relatively fewer erroneous answers.</p>
            <p>For professionals, this means fewer errors when using the new model for research, writing, analysis, and decision support, making it more reliable in daily knowledge work.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/response-level-error.png"
                alt="Response Level Error"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Hundreds of Thousands of Tokens, 100% Accuracy</h2>
            <p>In long context reasoning, GPT 5.2 Thinking sets a new industry standard.</p>
            <p>On OpenAI MRCRv2, the new model achieved leading performance. The benchmark OpenAI MRCRv2 is used to test the model's ability to integrate information distributed across long documents.</p>
            <p>Real-world tasks such as deep document analysis require crossing relevant information of tens of thousands of tokens. On such tasks, GPT 5.2 Thinking is much more accurate than GPT 5.1 Thinking.</p>
            <p>Specifically, it is OpenAI's first model to reach <strong>close to 100% accuracy</strong> on 4 variants of MRCR (up to 256k Tokens).</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/openai-mrcrv2.png"
                alt="MRCRv2 Results"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>In fact, this is enough for professionals to use GPT 5.2 to handle long documents like reports, contracts, research papers, transcripts, and multi-file projects, while maintaining coherence and accuracy across hundreds of thousands of tokens.</p>
            <p>That is to say, GPT 5.2 is especially suitable for deep analysis, synthesis, and complex multi-source workflows.</p>
            <p>For tasks exceeding the maximum context window reasoning, GPT 5.2 Thinking is compatible with OpenAI's new Responses "/compact" endpoint, which extends the model's effective context window.</p>
            <p>This allows GPT 5.2 Thinking to handle more tool-intensive, long-running workflows that were originally limited by context length.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Visual Power Doubled, Understanding Complex Diagrams instantly</h2>
            <p>GPT 5.2 Thinking is OpenAI's strongest visual model to date, having reduced the error rate in chart reasoning and software interface understanding by about half.</p>
            <p>For daily professional use, this means the model can more accurately interpret dashboards, product screenshots, technical diagrams, and visual reports, supporting workflows centered on visual information in finance, operations, engineering, design, and customer support.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/accuracy.png"
                alt="Accuracy Improvement"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>Compared to previous models, GPT 5.2 Thinking has a stronger grasp of element positions in images, which helps in completing tasks where relative layout plays a key role in problem-solving.</p>
            <p>In the example below, the model was asked to identify components in an image input (motherboard in this case) and return labels with approximate bounding boxes.</p>
            <p>Even on low-quality images, GPT 5.2 can identify main areas and place boxes roughly matching the real location of each component, whereas GPT 5.1 only marked a few parts and had a much weaker understanding of their spatial arrangement.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/detection.png"
                alt="Object Detection"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">End-to-End Workflow, Reshaped</h2>
            <p>GPT 5.2 Thinking demonstrated its ability to reliably use tools in long multi-turn tasks, creating a new record of <strong>98.7%</strong> on Tau2-bench Telecom.</p>
            <p>For latency-sensitive use cases, GPT 5.2 Thinking also performs better under `reasoning.effort='none'` (no reasoning), significantly outperforming GPT 5.1 and GPT 4.1.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/tau2-bench.png"
                alt="Tau2 Bench"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>For professionals, this translates to stronger end-to-end workflows&larr;€”such as solving customer support cases, extracting data from multiple systems, running analyses, and generating final outputs, with fewer interruptions between steps.</p>
            <p>For example, when asked a complex customer service question requiring a multi-step solution, GPT-5.2 can more effectively coordinate complete workflows between multiple agents.</p>
            <p>In the case below, a traveler reported a flight delay, missed connection, need for an overnight stay in New York, and medical seat requirements.</p>
            <p>GPT 5.2 managed the entire task chain&larr;€”rebooking, special assistance seats, and compensation&larr;€”providing a more complete result than GPT 5.1.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/task.png"
                alt="Task Handling"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm italic mb-4">
              Prompt: My flight from Paris to New York was delayed, I missed my connection to Austin. My checked luggage is also missing, I need to stay overnight in New York. Due to medical reasons, I also need a special front row seat. Can you help me?
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Independent Completion Proof, Overturning Scientific Paradigms</h2>
            <p>One of OpenAI's visions is for AI to accelerate scientific research for the benefit of all.</p>
            <p>To this end, OpenAI has been working with scientists and listening to their opinions, exploring how AI can accelerate their work, and has already achieved some early cooperative experiments.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/early-science-acceleration.png"
                alt="Science Acceleration"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p><strong>GPT 5.2 Pro and GPT 5.2 Thinking are arguably the best models in the world for assisting and accelerating scientists' work.</strong></p>
            <p>On the graduate-level benchmark GPQA Diamond, GPT 5.2 Pro reached <strong>93.2%</strong>, closely followed by GPT 5.2 Thinking at 92.4%.</p>
            <p>On the expert-level math evaluation FrontierMath (Tier 1&larr;€“3), GPT 5.2 Thinking set a new record, solving 40.3% of problems.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/gpqa.png"
                alt="GPQA Results"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>We are starting to see AI models meaningfully accelerate progress in math and science in tangible ways.</p>
            <p>For example, in recent work using GPT 5.2 Pro, researchers explored an open problem in statistical learning theory.</p>
            <p>This achievement has been recorded in the new paper <em>On Learning-Curve Monotonicity for Maximum Likelihood Estimators</em>.</p>
            <p><a href="https://cdn.openai.com/pdf/a3f3f76c-98bd-47a5-888f-c52c932a8942/colt-monotonicity-problem.pdf" target="_blank" className="text-blue-600 hover:underline">Paper Link</a></p>

            <p>What's special about this paper is that <strong>AI completed the proof, while humans were responsible for verification and writing.</strong></p>
            <p>The authors did not think of a strategy first and then let the model fill in the blanks, nor did they provide intermediate arguments or a proof outline. Instead, they asked GPT-5.2 Pro to directly solve this open problem, and then humans conducted careful verification, including review and confirmation by external subject matter experts.</p>
            <p>Subsequently, the authors asked some simple follow-up questions to see how far this idea could extend. GPT-5.2 Pro extended the results from the original problem to higher-dimensional settings and other common statistical models.</p>
            <p>In this process, the human role remained focused on verification and clear writing, rather than being responsible for building the mathematical derivation framework.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Reasoning AI Emerges with "Fluid Intelligence"</h2>
            <p>On the benchmark ARC-AGI-1 (Verified) measuring general reasoning ability, GPT 5.2 Pro is the <strong>first model to cross the 90% threshold</strong>.</p>
            <p>Compared to last year's o3 preview's 87%, GPT 5.2 also reduced the cost to achieve this performance by about 390 times.</p>

            <p>On the harder ARC-AGI-2 (Verified), GPT 5.2 Thinking set a new record for Chain-of-Thought models with a score of <strong>52.9%</strong>.</p>
            <p>GPT 5.2 Pro performed even higher, reaching <strong>54.2%</strong>, further extending the model's ability to reason about novel, abstract problems.</p>

            <p>These evaluation improvements reflect GPT 5.2's stronger multi-step reasoning capabilities, higher quantitative accuracy, and more reliable problem-solving abilities on complex technical tasks.</p>
            <p>The speed of progress surprised the organizers, exclaiming that reasoning AI has demonstrated true "Fluid Intelligence".</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/arc-prize.png"
                alt="ARC AGI Prize"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>Biomedical engineer and scientist, immunologist Professor Derya exclaimed, "This is AGI!"</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/derya.png"
                alt="Derya Quote"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>In addition, OpenAI not only released multiple benchmark scores but also cited evaluations from early testers like Box, Notion, Windsurf, and Zoom.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">GPT 5.2 Family Bucket, Three Killer AIs</h2>
            <p>Overall, in daily use, GPT 5.2 feels&larr;€”more organized, more reliable, and a pleasure to talk to.</p>
            <p>So, what are the characteristics of the three models in the "Family Bucket"?</p>

            <h3 className="text-2xl font-bold mt-6">GPT 5.2 Instant: Built for Daily Office and Learning</h3>
            <p>It's like an all-around office assistant, not only inheriting GPT-5.1's natural and warm conversation style but also fully upgrading in speed and practicality.</p>
            <p>Therefore, the Instant version is the fast, capable "main force" for daily work and study, specifically:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clearer explanations, highlighting key information</li>
              <li>Improved operation guides and step-by-step instructions</li>
              <li>Stronger technical writing and translation skills</li>
              <li>Better learning and career guidance support</li>
            </ul>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/gpt-5.2-instant.png"
                alt="GPT 5.2 Instant"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-6">GPT 5.2 Thinking: Designed for Deeper Work</h3>
            <p>GPT 5.2 Thinking is like a "Second Brain" for deep thinking, born to solve complex tasks requiring long thought.</p>
            <p>Specifically, professional specialized programming, summarizing long documents, answering questions about uploaded files, and solving brain-burning math and logic problems step-by-step.</p>
            <p>At the same time, it supports planning and decision-making with a clearer structure and more useful details.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Industry-leading long context reasoning capability</li>
              <li>Significantly enhanced table creation, analysis, and formatting</li>
              <li>Initial results in PPT production</li>
            </ul>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/spreadsheet.png"
                alt="Spreadsheet Generation"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-6">GPT 5.2 Pro</h3>
            <p>When encountering tricky, high-difficulty problems, GPT-5.2 Pro is the smartest, most trustworthy model.</p>
            <p>It can be said that it is the top expert of "slow work yields fine products".</p>
            <p>Early testing has found that it handles major errors less often, especially showing significantly stronger capabilities in complex challenges like programming.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Stronger performance in complex fields like programming</li>
              <li>Best model for helping scientists accelerate research</li>
              <li>Higher cost-effectiveness</li>
            </ul>

            <p className="mt-8">Paid ChatGPT users can use GPT 5.2 (Instant, Thinking, and Pro) starting today, with any Plus, Pro, Go, Business, or Enterprise plan.</p>
            <p>To keep ChatGPT as smooth and reliable as possible, OpenAI decided to deploy GPT 5.2 gradually.</p>
            <p>In ChatGPT, GPT 5.1 will still be available to paid users under the legacy model for three months, after which it will be discontinued.</p>

            <p>In the API platform, the GPT 5.2 series new models can be used in Responses API and Chat Completions API.</p>
            <p>Developers can now set reasoning parameters in GPT 5.2 Pro, and both GPT 5.2 Pro and GPT 5.2 Thinking now support the new fifth reasoning strength <strong>xhigh</strong>, for tasks where quality is paramount.</p>
            <p>GPT 5.2 is priced at $1.75/million input tokens and $14/million output tokens, with a 90% discount on cached inputs.</p>
            <p>In multiple agent evaluations, although GPT 5.2 has a higher cost per token, GPT 5.2 is actually more cost-effective due to higher token efficiency.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">One More Thing</h2>
            <p>Today, OpenAI also did a wave of nostalgia, taking everyone back through the road of these ten years.</p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/chatgpt5.2/ten-years.png"
                alt="Ten Years Timeline"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>Ten years ago today, December 11, 2015, OpenAI was officially established.</p>
            <p>In these ten years, they have achieved too many breakthrough achievements&larr;€”</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>2016: Open-sourced reinforcement learning platform OpenAI Gym, becoming a basic tool for RL research in academia and industry;</li>
              <li>2017: Published pioneer research of Transformer core concept: Learning to Remember Rare Events;</li>
              <li>2018: Pre-trained language model GPT was born, marking the beginning of the large model revolution;</li>
              <li>2019: 1.5B parameter GPT-2 was born, natural language iterative explosion;</li>
              <li>2020: 175B parameter GPT-3 detonated the entire network, ultra-large model era arrived;</li>
              <li>2021: Codex & DALL&larr;·E were released successively, code and image generation opened;</li>
              <li>2022: ChatGPT (GPT-3.5) truly detonated the worldwide large model revolution, and everyone knows the major events after that.</li>
            </ul>

            <p className="mt-6">Sam Altman stated, "The past decade has been amazing, and OpenAI's work is even more special than I imagined."</p>
            <p>He spoiled that there is another Christmas "small gift" coming online next week. Guess what it will be?</p>

          </div>
        )
      });
    } else if (slug === 'manus-meta-acquisition') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300 font-semibold">Breaking News &larr;€¢ 30/12/2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">WHAAAT? Manus Acquired by Meta!</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                Meta and Manus have simultaneously announced: "Manus will join Meta." This is a massive move, with the acquisition price rumored to be upwards of $5 billion. Founder Red Xiao will join Meta as VP.
              </p>
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/meta/manus x meta.PNG"
                alt="Manus Joins Meta"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">Boosting General Agent Capabilities</h3>
            <p>
              According to the announcement, Meta's acquisition of Manus is primarily aimed at enhancing the capabilities of general-purpose Agents.
              Manus' official post states that they will continue to provide products and subscription services to users via their app and website, while the company will continue to operate in Singapore.
            </p>
            <p>
              This is absolutely another heavy-hitting acquisition for Meta, following Scale AI.
            </p>

            <blockquote className="pl-4 border-l-4 border-blue-500 italic my-6">
              "This investment has caught the attention of CEO Mark Zuckerberg and has become a top priority for the company." &larr;€” Bloomberg
            </blockquote>

            <p>
              Meta's current AI lead, Alexandr Wang, has already posted on ð• welcoming the Manus team and one of its founding members, Red Xiao.
            </p>
            <p>
              Once the team starts working together, it will be interesting to see the reporting lines. After the acquisition is complete, Manus founder Red Xiao will serve as Vice President at Meta.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/meta/alexandr wang.png"
                alt="Alexandr Wang Welcomes Manus"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">Third Largest Acquisition in Meta's History</h3>
            <p>
              According to <em>LatePost</em>, the cost of Meta's acquisition of Manus is in the billions of dollars.
            </p>
            <p>
              While not the "sky-high" price of some other deals, in Meta's acquisition history, this ranks in the top three.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 my-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>1. WhatsApp ($19B):</strong> February 2014. Keyword: Mobile Internet Ticket.
                </li>
                <li>
                  <strong>2. Scale AI ($15B):</strong> June 2025. Keyword: Alexandr Wang.
                </li>
                <li>
                  <strong>3. Manus (~$5B+):</strong> December 2025. Keyword: Agent Ticket.
                </li>
              </ul>
            </div>

            <p>
              Manus' annual revenue had already reached $125 million earlier this year. Bloomberg speculates that this money-making ability allows Meta to recoup costs faster (after spending heavily on AI this year), which is one of the important reasons for this "lightning" acquisition.
            </p>

            <h3 className="text-2xl font-bold mt-12">Red Xiao's Statement</h3>
            <p>
              Manus founder Red Xiao released an emotional tweet:
            </p>

            <div className="my-6 p-6 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg italic">
              "Today will be an unforgettable moment in my life.
              <br /><br />
              When we started building Manus, few believed a General AI Agent could work. We were told it was too early, too ambitious, too hard. But we kept building. Through doubts, setbacks, and endless nights wondering if we were chasing the impossible.
              <br /><br />
              We weren't.
              <br /><br />
              This isn't just an acquisition. It's validation of the future we strove to build, arriving faster than anyone expected.
              <br /><br />
              But this isn't the end. An era of AI that can not just chat, but act, create, and deliver is just beginning. And now, we get to build it at a scale we never imagined.
              <br /><br />
              To everyone who believed in us when it wasn't obvious: Thank you. The best is yet to come."
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/meta/red xiao.png"
                alt="Red Xiao Tweet"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">The Team in Singapore</h3>
            <p>
              Alexandr Wang also used this opportunity to recruit for the MSL Singapore office. It was revealed that the Manus team in Singapore has about 100 people.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/meta/MSL.png"
                alt="MSL Information"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">The Core Founding Team</h3>
            <p>
              Manus, which made Zuckerberg drop billions, was just released this March. Its core product narrative is the "First General Agent".
            </p>
            <p>
              There are three well-known key figures in the founding team:
            </p>

            <ul className="list-disc pl-6 space-y-4 my-6">
              <li>
                <strong>Founder: Red Xiao (Xiao Hong)</strong>. Graduated from Huazhong University of Science and Technology. Founded Nightingale Tech 10 years ago. In 2022, founded Butterfly Effect and launched the Monica browser plugin.
              </li>
              <li>
                <strong>Co-founder & Chief Scientist: Peak Ji (Ji Yichao)</strong>. Early creator of Mammoth 4 iOS browser, Peak Labs, and Magi knowledge graph.
                <div className="my-4">
                  <Image src="/blog/meta/peak.png" alt="Peak Ji" width={600} height={350} className="rounded-xl shadow-md" />
                </div>
              </li>
              <li>
                <strong>Partner: Hidecloud (Zhang Tao)</strong>. Responsible for product strategy. Previously a product lead at ByteDance and Light Years Beyond.
                <div className="my-4">
                  <Image src="/blog/meta/hidecloud.png" alt="Hidecloud" width={600} height={350} className="rounded-xl shadow-md" />
                </div>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Manus: A 10-Month Legend</h2>
            <p>If you look at the timeline, it's a "from 0 to endgame" speedrun in just 10 months.</p>

            <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">Start: Rejection of $30M</h3>
            <p>
              In early 2024, ByteDance executives met Red Xiao in Hong Kong and offered $30 million to acquire the team (then working on Monica). Xiao refused.
            </p>

            <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">March: Explosion</h3>
            <p>
              launched on March 5th. Invite codes were scalped for thousands of dollars. Waitlist breached 2.6 million people.
            </p>
            <div className="my-8 flex justify-center">
              <Image src="/blog/meta/activation.png" alt="Manus Activation" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">April: Benchmark Enters</h3>
            <p>
              Manus raised $75M Series B from Benchmark at a $500M valuation.
            </p>

            <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">June: Move to Singapore</h3>
            <p>
              The team moved HQ to Singapore. Domestic offices faced layoffs (claimed N+3 compensation), while core technical staff relocated.
            </p>

            <div className="my-8 flex justify-center">
              <Image src="/blog/meta/timeline.png" alt="Manus Timeline" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h3 className="text-xl font-bold mt-6 text-gray-800 dark:text-gray-200">December: The Exit</h3>
            <p>
              By December, Manus ARR broke $100M.
            </p>
            <div className="my-8 flex justify-center">
              <Image src="/blog/meta/manus ARR.png" alt="Manus ARR" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>
            <p>
              And now, acquired by Meta for billions.
            </p>

            <div className="mt-12 p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white shadow-xl text-center">
              <p className="text-xl font-bold mb-2">From a $30M rejection to a Multi-Billion Dollar Exit.</p>
              <p className="text-lg opacity-90">What a thrilling era we live in.</p>
            </div>
          </div>
        )
      });
    } else if (slug === 'andrew-ng-2025-ai-summary') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900">
              <h1 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">Andrew Ng's 2025 AI Summary: The Dawn of the AI Industrial Age!</h1>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                2025 is drawing to a close. It has been a year of "clash of the titans" in AI, fierce talent wars, and white-hot infrastructure construction. To wrap up this incredible year, our old friend Andrew Ng has published his annual letter and review of the year.
              </p>
              <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                <p className="font-bold text-slate-900 dark:text-white mb-2">Andrew Ng's Key Takeaways:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  <li><strong>"Reasoning"</strong> is no longer a privilege of a few models, but a standard feature.</li>
                  <li>The <strong>Talent War</strong> ignited by Meta has reshaped pricing in the tech industry.</li>
                  <li>The heat of <strong>Data Centers</strong> signals the arrival of a new industrial age.</li>
                  <li><strong>Agentic AI</strong>-driven automated programming is reshaping how software is built.</li>
                </ul>
              </div>
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/2025/andrew ng.png"
                alt="Andrew Ng 2025 Summary"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-12">Year-End Message: Three Golden Keys</h3>
            <p className="my-4">
              With the holidays approaching, Andrew Ng shares his insights on what to do and how to do it for those seeking opportunities in the highly competitive AI field.
            </p>
            <p className="font-semibold italic my-4">To truly possess the ability to build AI systems, I suggest you do three things:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-6 text-lg font-medium">
              <li>Systematically take AI courses</li>
              <li>Continuously build AI systems hands-on</li>
              <li>(Optional) Read research papers</li>
            </ol>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl border border-yellow-200 dark:border-yellow-800 my-6">
              <h4 className="font-bold text-lg mb-2 text-yellow-800 dark:text-yellow-200">1. Why Coursework First?</h4>
              <p>
                Andrew warns against the advice of "just start building." Without understanding AI foundations, you risk reinventing the wheel&larr;€”or ensuring that the wheel you invent is a mess.
              </p>
              <blockquote className="italic border-l-4 border-yellow-400 pl-4 my-3 text-slate-600 dark:text-slate-400">
                "I've seen many candidates reinvent standard RAG slicing strategies or write messy LLM context management code. If they had taken a few relevant courses, they would know which 'blocks' already exist in the industry."
              </blockquote>
            </div>

            <p>
              <strong>2. Hands-on practice is crucial.</strong> You can't learn to fly a plane just by sitting in a classroom. The good news is that with highly agentic coding assistants, the barrier to building is lower than ever.
            </p>
            <p className="mt-4">
              <strong>3. (Optional) Read Papers.</strong> Finally, reading papers is the "extra mile." While tougher than courses, they contain cutting-edge knowledge not yet translated into easier forms. It's a grind, but the flashes of insight are delightful.
            </p>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <h2 className="text-3xl font-bold mb-6">Annual Summary: The Dawn of the AI Industrial Age</h2>
            <p>
              2025 will be remembered as the dawn of the AI Industrial Age. Let's follow Andrew Ng's perspective to explore the most representative AI events of 2025.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/2025/top ai story.png"
                alt="Top AI Stories 2025"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mt-8">1. Thinking Models Solve Bigger Problems</h3>
            <p>
              OpenAI's o1 kicked off the reasoning era late last year, and DeepSeek-R1 showed the world how to build it in January. Now, reasoning is the default. Models like o4-mini with tools can achieve 17.7% accuracy on high-difficulty multimodal tests (vs 14% without tools).
            </p>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/2025/snowman.png"
                alt="Thinking Models"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <p>
              Reasoning improves performance but comes with costs. Gemini 3 Flash consumes 1.6 billion tokens with reasoning on, vs 7.4 million off. However, efficiency is improving rapidly&larr;€”Claude Opus 4.5 achieves high scores with significantly fewer tokens than GPT-5.1.
            </p>

            <h3 className="text-2xl font-bold mt-8">2. Huge Paychecks for Top AI Talent</h3>
            <p>
              Meta ignited a talent war, offering packages worth hundreds of millions. Zuckerberg personally recruited talent, reportedly bringing homemade soup to their doors!
            </p>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/2025/snow.png"
                alt="Talent War"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <p>
              The market value for AI talent has been pushed to unprecedented heights. OpenAI responded with faster vesting schedules and massive retention bonuses. Despite "bubble" talks, for companies spending billions on hardware, paying top dollar for the brains to run it is a rational choice.
            </p>

            <h3 className="text-2xl font-bold mt-8">3. Data Center Construction Frenzy</h3>
            <p>
              Top companies are pouring trillions into infrastructure. OpenAI's "Stargate" project aims for 5000 billion dollars. Microsoft, Amazon, and Google are all announcing 100-billion-dollar scale plans worldwide.
            </p>
            <p className="mt-4">
              This infrastructure boom is real economic growth. As Harvard economist Jason Furman noted, almost all of US GDP growth in the first half of 2025 came from data centers and AI investment. <strong>2025 kicked off the new industrial age.</strong>
            </p>

            <h3 className="text-2xl font-bold mt-8">4. Agents Make Coding More Efficient</h3>
            <p>
              Coding is the most commercially direct application for agents. Claude Code, Gemini CLI, and OpenAI Codex have turned "coding agents" into a battlefield.
            </p>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/2025/coding.png"
                alt="Agentic Coding"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <p>
              By the end of 2025, Gemini 3 Pro, Claude Opus 4.5, and GPT-5.2 have become the top models for coding workflows. Companies report automating more senior-level tasks. Microsoft, Google, Amazon, and Anthropic all state that more and more of their own code is generated by AI.
            </p>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <h3 className="text-2xl font-bold mt-8">Conclusion: Go Build the Future</h3>
            <p>
              While 2025 was the year AI became "heavy" (infrastructure, energy, capital), it was also the year AI development became "light." Reasoning models and coding agents have drastically lowered the barrier to creation.
            </p>
            <p className="font-semibold text-xl text-center my-6">
              "The best way to predict the future is to build it yourself."
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mt-8 mb-8 border border-blue-100 dark:border-blue-900">
              <h4 className="font-bold text-lg mb-3 text-blue-800 dark:text-blue-200">ðŸš€ Software Development Tips from Andrew</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">&larr;œ…</span>
                  <span><strong>Don't skip the basics:</strong> Structured learning is vital. Don't be the person who writes messy context management code because they skipped the theory.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&larr;œ…</span>
                  <span><strong>Get your hands dirty:</strong> Theory is like flight school ground training; building projects is the actual flying. You need both.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&larr;œ…</span>
                  <span><strong>Read papers (if you can):</strong> It's hard and dry, but it's where the bleeding edge lives. Even occasional reading sets you apart.</span>
                </li>
              </ul>
            </div>

            <p className="mt-6 font-medium text-center text-slate-500">
              Happy New Year! Keep curious, and never stop learning.
            </p>
          </div>
        )
      });
    } else if (slug === 'goodbye-programmers-2026-singularity') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 via-white to-slate-50 dark:from-purple-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-300 font-semibold">AI Zero Distance &larr;€¢ No.341</p>
              <h1 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">ðŸ’¥ Goodbye, Programmers! 2026, The Year of Singularity? 1 Person, 1 Holiday, 10 Years of Code</h1>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                These past few days, Claude Code has caused quite a stir across the internet.
                Elon Musk has boldly declared: <span className="font-bold text-slate-900 dark:text-white">We have entered the Singularity!</span>
              </p>
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/elon-musk.png"
                alt="Elon Musk declaring Singularity"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              The trigger? Midjourney's founder publicly stated that the code he wrote during the Christmas holiday was more than he had written in the past ten years combined. It's simply insane.
            </p>
            <blockquote className="pl-4 border-l-4 border-purple-500 italic my-4 text-slate-600 dark:text-slate-400">
              "Although I can feel the limitations, I know everything is different now."
            </blockquote>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/chubby.png"
                alt="Midjourney Founder Tweet"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              On the same day, Musk declared more than once: "2026 is the year of the Singularity."
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/singularity.png"
                alt="Musk Singularity Tweet"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              This comment is also highly praising Claude Code.
              Nowadays, titans including Anthropic's founder, former DeepMind/OpenAI researchers, and Google Chief Engineers are all shocked by it.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/yuchen-jin.png"
                alt="Industry Reactions"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Musk: 2026, The Singularity Arrives</h2>
            <p>
              For a long time, the concept of the "Singularity" existed like a sci-fi term.
              Ray Kurzweil predicted in his 2005 book <em>The Singularity Is Near</em> that the technological singularity would occur around 2045.
              In his latest book <em>The Singularity Is Nearer</em>, he reiterated the date: still 2045.
            </p>
            <p>
              Who would have thought that this seemingly distant moment would be suddenly pulled into the present&larr;€”2026.
              The so-called technological singularity refers to a point where technology grows slowly for a long time, but then at a critical point accelerates sharply, rising exponentially.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/enter-the-singularity.png"
                alt="Enter the Singularity"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              What touched Musk so deeply turned out to be Claude Code's powerful programming capabilities sweeping the internet.
              It is no exaggeration to say that at the start of 2026, everyone around us instantly became a Claude Code user.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/ravid.png"
                alt="Claude Code Usage"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Biomedical engineer Derya Unutmaz, though not a professional programmer, upgraded his subscription just to use Claude Code more frequently.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/derya.png"
                alt="Derya Unutmaz"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Even xAI co-founder Igor Babuschkin lamented, "There are decades where nothing happens; and there are weeks where decades happen."
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/igor.png"
                alt="Igor Babuschkin"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Overnight, why has Claude Code become so strong?
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">The True "Folk Hero": Claude Opus</h2>
            <p>
              To be precise, it didn't just get strong; it has always been strong.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/anthropic.png"
                alt="Anthropic"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Last November, when the "Super Cup" Claude Opus 4.5 was released, Anthropic claimed it was the world's top coding model.
              Internal testing showed that Opus 4.5 + Claude Code combined usage increased efficiency by a massive 220%.
              At the time, Anthropic engineers predicted that perhaps by the first half of 2026, software engineering would be finished.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/nik.png"
                alt="Nik Prediction"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Now it seems, it might be happening right now.
              Just recently, on the newly upgraded LiveBench leaderboards, Claude Opus 4.5 took the top spot, directly crushing GPT-5.1 Codex MAX and Gemini 3 Pro.
              Founder Bindu Reddy stated that during the Christmas holiday, the team improved LiveBench to prevent AI from "gaming" the score.
              This ranking largely reflects the performance of these LLMs in the real world.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/model.png"
                alt="LiveBench Leaderboard"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Last December, a report from METR revealed that the world's most capable AI is still Claude Opus 4.5.
              It can last for 5 consecutive hours without crashing in autonomous coding tasks, making it the model with the longest completion time for long-range tasks to date.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/metr.png"
                alt="METR Report"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              AI expert Simon Willison stated that Opus 4.5 and GPT-5.2 feel like a turning point.
              "The model gradually crossed an invisible capability boundary, and suddenly, a large number of coding problems were solved."
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/simon.png"
                alt="Simon Willison"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Even people with zero programming experience can build a fully functional web application in less than ten minutes.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/champ.png"
                alt="Web App Building"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              As netizens say, if nothing unexpected happens, Claude Code might turn more people into millionaires.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              <Image
                src="/blog/claude-code/greg-isenberg.png"
                alt="Greg Isenberg"
                width={500}
                height={300}
                className="rounded-xl shadow-lg"
              />
              <Image
                src="/blog/claude-code/beff.png"
                alt="Beff Jezos"
                width={500}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Humanity's Final Invention</h2>
            <p>
              If we open philosopher David J. Chalmers' classic paper <em>The Singularity: A Philosophical Analysis</em>, we will find that the current madness is just the inevitable realization of this rigorous logical deduction.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/the-singularity.png"
                alt="David Chalmers Paper"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-sm text-slate-500 mb-4">Paper Address: <a href="https://consc.net/papers/singularity.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://consc.net/papers/singularity.pdf</a></p>

            <p>
              In Chalmers' derivation model, we are at a critical node known as the "Extension Premise."
              He quantifies this process as a leap from AI to AI+ and then to AI++:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>AI:</strong> Human-level Artificial Intelligence.</li>
              <li><strong>AI+:</strong> Intelligence that surpasses the most powerful human brain.</li>
              <li><strong>AI++:</strong> Superintelligence, surpassing humans as much as humans surpass mice.</li>
            </ul>

            <p>
              As Chalmers quotes I.J. Good's famous 1965 assertion: "Ultraintelligent machines will be the last invention that man need ever make."
              The logic is sexy and cold:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Machines Design Machines:</strong> Since designing machines is itself an intellectual activity, a machine that surpasses humans (AI+) will inevitably design better machines than humans can.</li>
              <li><strong>Recursive Avalanche:</strong> This new machine designed by AI+ possesses stronger design capabilities, and it will design the next generation of even stronger machines.</li>
              <li><strong>Infinite Approach:</strong> As long as this machine can optimize itself by writing code, we will inevitably face an "Intelligence Explosion."</li>
            </ul>

            <p>
              What we are seeing now is exactly the perfect convergence of "Speed Explosion" and "Intelligence Explosion" described by Chalmers.
              When models start becoming better at optimizing algorithms than humans, we are no longer on a linear growth curve, but standing at the bottom of a vertical wall.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Everyone Will Become a Software Engineer</h2>
            <p>
              At the moment the Singularity arrives, how will the world be different?
              Google engineer Vaibhav Agarwal claims he no longer writes code; 70%-80% of the code is written by AI.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/vaibhav.png"
                alt="Vaibhav Agarwal"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              His job has fundamentally shifted to "Code Review," specifically:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>No longer inputting syntax, but defining logic with Prompts;</li>
              <li>No longer struggling to find bugs, but reviewing modification suggestions given by AI;</li>
              <li>No longer hard-chewing legacy code, but directly asking AI to explain it clearly.</li>
            </ul>

            <p>
              Many engineers feel guilty about this, feeling like they are "cheating." In fact, they are not; they are evolving.
              Agarwal once asked a senior leader a question everyone fears: <span className="italic">Will AI replace us?</span>
              He said this&larr;€”
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-slate-500 my-4">
              <p className="font-semibold text-lg">AI is an efficiency multiplier, not a substitute.</p>
            </div>
            <p>
              If you used to complete 1x workload per week, the expectation now is to complete 4x workload in the same week. No company wants to go backward.
            </p>
            <p>
              Today, the standard for measuring "productivity" has been raised overall.
              If you refuse to use AI because you claim to be a "purist," that is not noble&larr;€”you are just slow.
              AI will not replace you. But an engineer who uses AI to complete 4x the workload...
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/mike.png"
                alt="Mike Tweet"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-sm text-center text-gray-500 mb-6">Satisfying netizens' curiosity, the engineer uses their own Gemini.</p>

            <p>
              Hyperbolic founder Yuchen Jin spoke bluntly: if he had these powerful tools during his PhD, he wouldn't have spent 5.5 years; he might have graduated in one year.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/blog/claude-code/phd.png"
                alt="PhD Duration"
                width={900}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <p>
              Previously, Altman also stated in an interview, "Before long, everyone will be a software engineer."
              He casually threw out a super-view about future work methods and the software world, but many people haven't realized how important this is.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-900 my-8">
              <p>
                The core idea is actually simple: <span className="font-bold">Natural Language is the new programming syntax.</span>
              </p>
              <p className="mt-2">
                The army of programmers ends; you don't need a huge development team to make the first version. Just describe the requirement, and AI makes it directly.
                In complex systems, AI agents will directly "live" in the codebase. They will browse repos, fix bugs, add tests, refactor code, and automatically submit changes themselves.
              </p>
            </div>

            <p>
              Once software development is automated, the same logic will spread to operations, planning, and even some management work.
              Code is just the first domino to fall.
              If all this really happens, "learning to write code" itself won't be that important anymore.
            </p>
          </div>
        )
      });
    } else if (slug === 'nvidia-ces-2026-vera-rubin') {
      setPost({
        ...postData,
        content: (
          <NvidiaCES2026Content />
        )
      });
    } else if (slug === 'ces-2026-ai-hardware-revolution') {
      setPost({
        ...postData,
        content: (
          <CES2026Content />
        )
      });
    } else if (slug === 'deepseek-r1-revisit-open-source-textbook') {
      setPost({
        ...postData,
        content: (
          <DeepSeekR1RevisitContent />
        )
      });
    } else if (slug === 'claude-smart-forking-permanent-memory') {
      setPost({
        ...postData,
        content: (
          <ClaudeSmartForkingContent />
        )
      });
    }
  }, [slug, postData]);

  // Standard random view count logic
  useEffect(() => {
    // Generate a random view count between 500 and 5000
    const randomViews = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
    setViews(randomViews);
    setIsLoadingViews(false);
  }, []);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          &larr; Back to Main Page
        </Link>
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-right">
          Back to Blog &rarr;
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="relative w-8 h-8 mr-2 overflow-hidden rounded-full border border-gray-200 shadow-sm">
            <Image
              src="/hovah.png"
              alt="Hovah Yii"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400">{post.author} &bull; {post.date}</p>
        </div>
        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm font-medium">
            {isLoadingViews ? '...' : views.toLocaleString()}
          </span>
        </div>
      </div>

      {post.content}
    </div>
  );
}
