"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '../data/blogPosts';

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
              <h2 className="text-2xl font-bold mb-4">🎉 Congratulations!</h2>
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
              <p className="font-bold text-xl mb-2">🚨 BREAKING NEWS: May 7, 2025 🚨</p>
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
                <p className="font-medium">⚠️ Pro Tip: Set a calendar reminder for 11 months from now to review your subscription if you don't want it to auto-renew.</p>
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
              <h2 className="text-2xl font-bold mb-4">🎉 Mission Accomplished: Welcome to Premium! 🎉</h2>
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
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300 font-semibold">Field Notes • 17/11/2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">Alibaba launches the Qwen App public beta—one brand, one flagship personal AI.</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">The codename project is now official: the former Tongyi app has been reborn as <strong>Qwen App</strong>, powered by the same trillion-parameter Qwen3-Max model that already leads open benchmarks. The mission is blunt: build the Chinese equivalent of ChatGPT by aligning the strongest model and the most visible consumer entry point under the exact same name.</p>
            </div>

            <h3 className="text-2xl font-bold mt-10">Brand discipline: from scattered squads to one battalion</h3>
            <p>Alibaba’s AI stack used to sound like a field manual: Tongyi, Qwen, Wan, Qwen Chat. Each name belonged to a different team, surface, or repo. The Qwen App announcement translates the original Chinese briefing into a single takeaway—<em>brand consolidation concentrates attention</em>. Models keep their codenames, but now the consumer interface shares the model’s public identity. “Have a question? Ask Qwen.”</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Same badge for every layer:</strong> the top open-source models are Qwen, and the app you tap on your phone is also Qwen.</li>
              <li><strong>Unified storytelling:</strong> developers and everyday users finally talk under the same keyword instead of juggling Tongyi vs. Qwen vs. Wan.</li>
              <li><strong>Attention routing:</strong> fewer entry points mean cleaner data loops and clearer default habits—exactly what a consumer AI war requires.</li>
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
            <p>The visual refresh strips away Tongyi’s dual gradients in favor of a single Qwen cyan tone. Inside, the interface goes ultra-minimal: one chat box, a horizontal tray of intents, and a persistent search toggle that defaults to “on.”</p>
            <div className="my-10 grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-4">
                <Image
                  src="/blog/qwen/qwen-app-ui.png"
                  alt="Qwen App UI walkthrough"
                  width={800}
                  height={600}
                  className="rounded-xl"
                />
                <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3">The new single-tone UI: “one prompt bar to rule them all.”</p>
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

            <h3 className="text-2xl font-bold mt-12">Why people call it “China’s ChatGPT”</h3>
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
              <p>Translated from the original memo, here are the parallels:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Super-app ambition:</strong> daily personal assistant spanning work notes, creative writing, search, coding, shopping, and multimodal creation from one entry point.</li>
                <li><strong>Latest models, no lag:</strong> Qwen App exposes <em>the</em> strongest internal models (Qwen3-Max, Qwen3-Omni, Qwen3-VL) on day one, just like ChatGPT ships OpenAI’s newest releases directly.</li>
                <li><strong>Default to online reasoning:</strong> search stays enabled because consumer users expect fresh knowledge without toggles—an answer to the hallucination complaints heard during the DeepSeek news cycle.</li>
                <li><strong>Chinese-native UX:</strong> in Chinese contexts the assistant feels smoother than ChatGPT; intents, idioms, and policies read naturally.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12">What the models are actually doing</h3>
            <p>Alibaba’s open brief emphasized that the tech card matters as much as the brand card. The new stack includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Qwen3-Max:</strong> 1+ trillion parameters, 36T-token pretrain mix, capable of 69.6 on SWE-Bench and 74.8 on Tau2 Bench—both first-tier scores.</li>
              <li><strong>Qwen3-VL & Omni:</strong> 32/36 publicly reported audiovisual benchmarks at SOTA across speech, vision, and video understanding.</li>
              <li><strong>Qwen3-Coder:</strong> accelerated reasoning plus safer completions for IDE workflows.</li>
              <li><strong>Open ecosystem:</strong> 300+ models released, 600M cumulative downloads, 170k derivative checkpoints—making Qwen arguably the world’s largest open-model matrix.</li>
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
            <p>The callout from Alibaba’s comms team made it explicit: technology earns attention, but brand keeps it. Without a recognizable flag, trillion-parameter feats are just GitHub release notes.</p>

            <h3 className="text-2xl font-bold mt-12">Putting the assistant to the test</h3>
            <p>I ran the same narrative-writing request that originally circulated inside Alibaba (“Write an Oppenheimer confession right before the Trinity test”). Qwen3-Max responded with startlingly human cadence—especially the closing line, “before the night has fully ended.”</p>
            <div className="my-8 flex justify-center">
              <Image
                src="/blog/qwen/qwen-conversation.png"
                alt="Qwen conversation sample"
                width={900}
                height={620}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <p>The math and vision sandbox is equally confident. Need a 3×3 grid meme or annotated homework sheet? Just drop the photo, describe the edit, and Qwen routes to Wan image edit or Omni reasoning without manual mode switching.</p>
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
              <li><strong>Intent routing in one chat box:</strong> no need to “find the AI photo button”; just describe the edit.</li>
              <li><strong>Access to Qwen3-Max:</strong> first time regular users can run Alibaba’s flagship model inside an official app–with system prompts tuned for friendliness.</li>
              <li><strong>Wan + Omni integration:</strong> image editing, video calls, real-time transcription, and AI video generation now share the same conversation log.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-12">Timeline recap: Tongyi → Qwen</h3>
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow divide-y divide-slate-100 dark:divide-slate-800">
              <div className="p-5">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">2023</p>
                <p className="mt-1"><strong>April:</strong> Tongyi Qianwen debuts; August sees Qwen-7B open-sourced; September welcomes the Tongyi App public launch.</p>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">2023 Q4 – 2024</p>
                <p className="mt-1">Org reshuffles move the Tongyi app from Alibaba Cloud to the Intelligent Information Group; April 2024 ships Tongyi App 3 with Thousand-Question 3 models.</p>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">January 2025</p>
                <p className="mt-1">Qwen Chat launches on the web (chat.qwen.ai) under Alibaba Cloud’s Tongyi Lab—serving as the playground for raw model capability demos.</p>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">March – October 2025</p>
                <p className="mt-1">Quark (Ali’s information app) is redefined as the AI flagship, adds conversation modes, and incubates “Project C” (C for Chat) around Qwen models.</p>
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
            <p className="font-semibold text-slate-900 dark:text-white">So yes, Qwen App might be “China’s ChatGPT.” But the deeper story is that even trillion-parameter breakthroughs need a name people can tap on. Have a question? Ask Qwen.</p>
          </div>
        )
      });
    } else if (slug === 'gpt-5-1-emotional-upgrade') {
      setPost({
        ...postData,
        content: (
          <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-50 via-white to-slate-50 dark:from-rose-950/40 dark:via-slate-900 dark:to-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-rose-500 font-semibold">Release log • 17/11/2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">GPT-5.1 stops chasing leaderboards and starts chasing “good vibes.”</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">OpenAI’s surprise drop focuses on EQ: GPT-5.1 Instant and GPT-5.1 Thinking now adapt their tone, pick personalities, and spend the right amount of time thinking before they respond. The update reads more like a lifestyle product launch than a benchmark dump—and that’s the point.</p>
            </div>

            <h3 className="text-2xl font-bold">Two brains, both warmer</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>GPT-5.1 Instant</strong>: the model you touch most often. Still fast, now more playful, more obedient, and capable of <em>adaptive reasoning</em> (quick answers for easy asks, a beat of silent thinking for hard ones).</li>
              <li><strong>GPT-5.1 Thinking</strong>: the “deep work” brain. It dials up reasoning time only when needed, trims jargon, and sounds less robotic without abandoning rigor.</li>
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
                  <li>Conversation style mirrors human banter; no more “classmate reading from a script.”</li>
                  <li>Adaptive reasoning toggles extra thought only when questions warrant it.</li>
                  <li>Better jailbreak resistance vs. GPT-5 (per StrongReject tests).</li>
                  <li>Still the default model in the ChatGPT UI.</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6">
                <h4 className="text-xl font-semibold mb-2">GPT-5.1 Thinking</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Dynamic reasoning budget: ~2× faster on trivial tasks, up to 71% longer on gnarly ones.</li>
                  <li>Plain-language explanations with fewer acronyms.</li>
                  <li>Slight safety regressions on harassment/hate filters—flagged in the system card.</li>
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
            <p>OpenAI’s system card expands beyond typical abuse filters. GPT-5.1 now evaluates:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mental health cues</strong> — can the assistant respond responsibly to isolation, delusion, or mania signals?</li>
              <li><strong>Emotional reliance</strong> — does the conversation accidentally encourage unhealthy attachment?</li>
            </ul>
            <p>Overall safety matches GPT-5, except for the Thinking model’s “light regressions” around harassment/hate moderation. Meanwhile, Instant improves jailbreak resistance.</p>

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
            <p>No benchmark chart, no “+XX% on MMLU.” Instead, OpenAI quotes users: “A great AI isn’t just smart—it’s enjoyable.” GPT-5.1 is the first release to treat personality, tone, and empathy as first-class features. After the GPT-5 backlash, this feels like a tacit admission: accuracy wins respect, but warmth wins retention.</p>

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
              <li>Visit Settings → Personalization to pick a preset or tune your own sliders.</li>
              <li>Tell ChatGPT mid-conversation how you want it to sound; it may offer to save that preference automatically.</li>
              <li>For API work, swap to `gpt-5.1-chat-latest` (Instant) or `gpt-5.1` (Thinking) as soon as they show up in your account.</li>
            </ol>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mt-12">
              <h4 className="text-xl font-semibold mb-3">TL;DR</h4>
              <p>GPT-5.1 is a minor-number bump with a major attitude change. It adapts how long it thinks, how it speaks, and even how cheeky it feels—because OpenAI finally admits the chat part of ChatGPT matters as much as the GPT. IQ + EQ, one update.</p>
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
              <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-300 font-semibold">AI News • 20 November 2025</p>
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
              <li><strong>Humanity's Last Exam (HLE) achieving 45.8% highest score</strong> — PhD-level human reasoning</li>
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
                "Create a single-file HTML realistic GBA emulator with CSS-drawn exquisite purple console. Game content is Chinese version Pokémon turn-based battle (Pikachu VS Bulbasaur), must reference original GitHub pixel assets and use Web Audio to synthesize sound effects"
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
            <p>A popular term lately: Vibe Coding — you only need to describe the "feeling" (Vibe) and functionality you want, and the model can implement it.</p>
            <p>Currently, Gemini 3 Pro is also the strongest Vibe Coding model.</p>

            <p className="mt-6">More impressively, Google delivered two heavyweight productivity tools for this: Google Antigravity and Gemini CLI.</p>

            <h3 className="text-2xl font-bold mt-10">Google Antigravity: IDE for the Agent Era</h3>
            <p>This platform's positioning is the IDE for the Agent era. If VS Code is designed for "humans," Antigravity is designed for "humans + Agents."</p>

            <p>As a brand new development platform (MacOS/Windows/Linux preview), its underlying logic is completely different from traditional IDEs:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Task-Oriented:</strong> The operation unit changes from "files" to "tasks." Developers issue requirements in the Inbox</li>
              <li><strong>Multi-Agent Collaboration:</strong> The system supports multiple Agents in parallel. Open one Agent for frontend on the left, another for backend testing on the right, and a middle Agent for documentation</li>
              <li><strong>Autonomy:</strong> Agents have control over editors, terminals, and browsers. They write code, automatically run terminals, automatically open browsers for testing, and fix errors themselves</li>
              <li><strong>Artifacts:</strong> Agents deliver not just conversations but standardized "artifacts" — task lists, implementation plans, screenshots, code changes</li>
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
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300 font-semibold">Breaking News • 21 November 2025</p>
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
              <li><strong>For daily small tasks, UI work, urgent deadlines:</strong> Use Gemini 3 — fast, accurate, and efficient!</li>
              <li><strong>For super difficult problems that must be done right the first time:</strong> Call on GPT-5.1 Pro, let it think slowly, stable!</li>
            </ul>

            <p className="text-gray-600 dark:text-gray-400 italic mt-6">The AI world updates daily — truly hard to keep up...</p>

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

            <p>Saved tokens mean significantly reduced costs in actual development — a blessing for developers.</p>

            <h3 className="text-2xl font-bold mt-10">Demo Comparisons</h3>
            <p>The following demos clearly show the token usage differences between GPT-5.1-Codex-Max and GPT-5.1-Codex. Even with reduced tokens, the former doesn't compromise on functionality or visual appeal in frontend design.</p>

            <p>For example, asking them to generate a browser application — an interactive CartPole reinforcement learning sandbox that includes a small policy gradient controller, metrics panel, and an SVG network visualizer:</p>

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
              <h5 className="text-lg font-bold mb-3">🧠 Slow Response, But Incredibly Smart</h5>
              <p>It's not only better at reasoning than most humans, but also smarter than any other model when handling truly tricky problems.</p>
              <p>Within days, we expect to see examples of it solving problems that people thought were beyond current AI systems' capabilities.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 my-6">
              <h5 className="text-lg font-bold mb-3">✅ Instruction Following is the Biggest Highlight</h5>
              <p>It truly strictly follows your requirements without deviating.</p>
              <p>For serious coding tasks, it feels less like an "assistant" and more like an outsourced engineer working from specifications (even if your specifications are a bit vague).</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 my-6">
              <h5 className="text-lg font-bold mb-3">🎨 Frontend and UX Design, and Writing Are Weaknesses</h5>
              <p>Whether it's creative writing or designing beautiful UIs, Gemini 3 is still superior.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 my-6">
              <h5 className="text-lg font-bold mb-3">⚠️ But the Biggest Weakness Is Still the Interface</h5>
              <p>It can only be used in ChatGPT, can't integrate into IDEs, and can't connect to other toolchains. This is identical to GPT-5 Pro.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Conclusion: Programming Models Enter the "Agent Era"</h2>
            
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/30 dark:to-blue-900/30 p-6 rounded-xl shadow-md mb-10">
              <p className="text-lg mb-4">From GPT-5.1-Codex-Max, we can see that the new generation of programming models are no longer simple code generators, but programming agents capable of continuous work, automatic debugging, and proactive planning. Their long-term reasoning, context compression, and self-repair capabilities allow models to independently complete project-level tasks.</p>
              <p className="text-lg">As running costs decrease, security sandboxes strengthen, and capabilities comprehensively improve, future software development methods may also change — shifting from "writing code" to "describing requirements + reviewing results," with agents expected to undertake more implementation and iteration work.</p>
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
              <p className="text-sm uppercase tracking-[0.3em] text-green-600 dark:text-green-300 font-semibold">Breaking News • 21 November 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">OpenAI couldn't sit still—GPT-5.1 Pro and GPT-5.1-Codex-Max released overnight!</h2>
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
              <li><strong>Daily tasks, UI design, time-sensitive work:</strong> Use Gemini 3—fast and precise!</li>
              <li><strong>Super difficult problems that must be done right the first time:</strong> Call on GPT-5.1 Pro, let it think slowly and get it right!</li>
            </ul>

            <p className="text-gray-600 dark:text-gray-400 italic mb-8">The AI world updates daily—it's getting hard to keep up... Just two days ago, Grok 4.1 and Gemini 3 Pro were released, and today OpenAI's GPT-5.1 Pro quietly launched!</p>

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
            <p>GPT-5.1-Codex-Max is OpenAI's first model with native "compression" support, allowing it to work across multiple contexts. Tasks like project refactoring, deep debugging, and multi-hour agent loops—it can handle them all steadily.</p>

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

            <p>Saving tokens means significantly lower costs in actual development—a blessing for developers!</p>

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

            <p>Derya Unutmaz, professor at Jackson Laboratory and human immunologist, says GPT-5.0 Pro—which significantly improved performance over previous versions—is now his favorite model.</p>

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
                  <p>It's not just better at reasoning than most humans—it's smarter than any other model when handling truly tricky problems. Within days, we'll likely see examples of it solving problems people thought today's AI systems couldn't handle.</p>
                </div>

                <div>
                  <h5 className="font-semibold text-lg mb-2">Instruction-following is the biggest highlight</h5>
                  <p>It really strictly executes your requirements without going off track. For serious coding tasks, it feels less like an "assistant" and more like a contract engineer working from specifications (even if your specs are a bit vague).</p>
                </div>

                <div>
                  <h5 className="font-semibold text-lg mb-2">Frontend, UX design, and writing are weaknesses</h5>
                  <p>Whether it's creative writing or designing beautiful UIs, Gemini 3 is superior. For most daily work, Gemini 3 is better—after all, waiting 10 minutes for an answer in a standalone interface is clearly not ideal.</p>
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
              
              <p className="text-lg">As operating costs decrease, security sandboxes strengthen, and capabilities comprehensively improve, future software development methods may also change—shifting from "writing code" to "describing requirements + reviewing results," with agents taking on more implementation and iteration work.</p>
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
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-600 dark:text-yellow-300 font-semibold">Breaking News • 22 November 2025</p>
              <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">Google Nano Banana Pro launches—designers' jobs are really at risk? Deep integration with Gemini 3, Google gives competitors no breathing room</h2>
              <p className="text-lg text-slate-700 dark:text-slate-200">Shortly after Gemini 3 Pro's dazzling debut, a new generation model follows immediately. Last night, Google officially unveiled its strongest image generation model—Nano Banana Pro, built on the latest Gemini 3 Pro. Officially called Gemini 3 Pro Image.</p>
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
                <li>✅ In Gemini App, when you select "Create images" and use "Thinking" model, rolling out globally</li>
                <li>✅ Free users get limited free quota, reverting to original Nano Banana after depletion</li>
                <li>✅ Google AI Plus, Pro, and Ultra subscribers get higher quotas</li>
                <li>✅ In Search's AI Mode, available to US subscribers</li>
                <li>✅ In NotebookLM, available to global subscribers</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-4">For Professionals</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>✅ Image generation in Google Ads upgraded to Nano Banana Pro</li>
                <li>✅ Rolling out to Workspace users in Google Slides and Vids</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-4">For Developers & Enterprises</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>✅ Rolling out in Gemini API, Google AI Studio, and Google Antigravity</li>
                <li>✅ Enterprise users can start building in Vertex AI today</li>
                <li>✅ Coming soon to Gemini Enterprise</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-4">For Creative Workers</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>✅ Rolling out to Flow (AI filmmaking tool) for Google AI Ultra subscribers</li>
                <li>✅ Provides creators, directors, and marketing teams with more precise, controllable shot and scene generation</li>
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
              <p className="text-lg mb-4">Nano Banana Pro represents a paradigm shift in AI image generation. With unprecedented control over lighting, composition, and text rendering, combined with Gemini 3's world knowledge and reasoning capabilities, it's becoming clear that AI tools are no longer just assistants—they're becoming creative partners capable of studio-quality work.</p>
              
              <p className="text-lg">From transforming manga to generating complex infographics, from solving math problems visually to creating multilingual marketing materials, Nano Banana Pro demonstrates that the line between "AI-assisted" and "AI-created" is blurring rapidly. The question isn't whether designers' jobs are at risk—it's how designers will adapt to work alongside these powerful tools.</p>
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
              <p className="text-sm uppercase tracking-[0.3em] text-green-600 dark:text-green-300 font-semibold">Professional Development • 22 November 2025</p>
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
                <p className="font-medium">⚠️ Important: Only graduates from ETAC-accredited programmes are eligible to apply for Engineering Technologist registration with BEM.</p>
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
                <p className="font-medium">💡 Pro Tip: Use your IC (Identity Card) number for registration. This is important for verification purposes.</p>
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
                <h4 className="text-xl font-bold mb-3 text-red-700 dark:text-red-300">⚠️ CRITICAL REQUIREMENT</h4>
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
              
              <div className="bg-yellow-100 dark:bg-yellow-900/50 p-4 rounded-lg mt-4">
                <p className="font-medium">📅 Timeline Tip: Plan accordingly as the approval process usually takes about 1 month from submission to approval.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Step 7: Congratulations! 🎉</h2>

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

            <h2 className="text-3xl font-bold mt-12 mb-6 text-red-600 dark:text-red-400">⚠️ IMPORTANT: Title Usage Regulations</h2>

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
              <h4 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">2. ✅ Correct Usage: Post-nominal (After Your Name)</h4>
              <p className="mb-4">You can and should list the qualification after your name or in your professional descriptions.</p>
              
              <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Correct Examples:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><code>Jehovah Yii Zui Hon, Engineering Technologist (BEM)</code></li>
                  <li><code>Jehovah Yii Zui Hon, B.Eng Tech</code> (depending on your specific degree)</li>
                </ul>
              </div>

              <div className="bg-red-100 dark:bg-red-900/50 p-4 rounded-lg">
                <p className="font-semibold mb-2">❌ Incorrect Examples:</p>
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

            <h2 className="text-3xl font-bold mt-12 mb-6">📞 Need Help? Contact BEM</h2>

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
                <p className="font-medium">💡 Tip: Calling the hotline is the most direct way to reach the BEM Secretariat Office for immediate assistance.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Need Help? Contact BEM</h2>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-xl shadow-md mb-10">
              <h3 className="text-2xl font-bold mb-4">📞 BEM Contact Information</h3>
              <p className="mb-4">If you have questions or need assistance with your application, you can reach the Board of Engineers Malaysia (BEM) through:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-600 dark:text-blue-400">📱 Phone (Hotline)</h4>
                  <p><a href="tel:+60378049851" className="text-blue-600 hover:underline">+603-7804 9851</a></p>
                  <p><a href="tel:+60378049776" className="text-blue-600 hover:underline">+603-7804 9776</a></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">☎️ Calling is the most direct way to reach the Secretariat Office</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-600 dark:text-blue-400">✉️ Email</h4>
                  <p><a href="mailto:eac@bem.org.my" className="text-blue-600 hover:underline">eac@bem.org.my</a> (EAC enquiries)</p>
                  <p><a href="mailto:etac@bem.org.my" className="text-blue-600 hover:underline">etac@bem.org.my</a> (ETAC enquiries)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">📧 For Engineering Technologist matters, use ETAC email</p>
                </div>
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
                      <li>Pathway: GE → PE (Ir.)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">Engineering Technologist (ET)</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>From <strong>ETAC-accredited</strong> engineering technology programmes</li>
                      <li>Currently no direct professional pathway with BEM</li>
                      <li>More practical/application-oriented background</li>
                      <li>Better pathway: ET → MBOT (Ts.)</li>
                    </ul>
                  </div>
                </div>
                
                <p className="mt-3 text-sm"><strong>Both are valuable:</strong> Graduate Engineers focus on design and innovation, while Engineering Technologists focus on implementation and optimization. Different roles, both essential to the industry.</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6">
                <h4 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">Q: Why does the Sydney Accord recognize Engineering Technologists, but BEM doesn't provide a professional pathway?</h4>
                <p className="mb-3">This is a common frustration among Engineering Technology graduates. Here's the situation:</p>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-3">
                  <p className="font-semibold mb-2">🌏 International Recognition (Sydney Accord)</p>
                  <p className="text-sm">The <strong>Sydney Accord</strong> is an international agreement that recognizes engineering technology qualifications across member countries. Malaysia is a signatory, meaning our ETAC-accredited degrees are internationally recognized.</p>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg mb-3">
                  <p className="font-semibold mb-2">🇲🇾 Local Reality (BEM)</p>
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
                  <p className="font-semibold mb-2">✅ Practical Solution: Go to MBOT</p>
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
                    <p className="font-semibold mb-2">✅ MBOT (Recommended Priority)</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Get the <strong>"Ts."</strong> professional title</li>
                      <li>Clear professional recognition in industry</li>
                      <li>Career progression pathway</li>
                      <li>Better return on investment for Engineering Technology graduates</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <p className="font-semibold mb-2">✅ BEM (Secondary/Optional)</p>
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
              <h3 className="text-2xl font-bold mb-4">📌 Summary & Quick Tips</h3>
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
              <h3 className="text-2xl font-bold mb-4">🎓 Final Thoughts</h3>
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
    }
  }, [slug, postData]);

  // Track and fetch view count
  useEffect(() => {
    const trackView = async () => {
      try {
        // Increment view count every time the page loads
        const response = await fetch('/api/views', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug }),
        });

        const data = await response.json();
        setViews(data.views || 0);
        setIsLoadingViews(false);
      } catch (error) {
        console.error('Error tracking views:', error);
        setIsLoadingViews(false);
      }
    };

    trackView();
  }, [slug]);

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
          ← Back to Main Page
        </Link>
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-right">
          Back to Blog →
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
          <p className="text-gray-600 dark:text-gray-400">{post.author} • {post.date}</p>
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