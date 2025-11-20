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
    }
  }, [slug, postData]);

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
      <div className="flex items-center mb-6">
        <div className="relative w-8 h-8 mr-2 overflow-hidden rounded-full border border-gray-200 shadow-sm">
          <Image 
            src="/hovah.png" 
            alt="Hovah Yii" 
            fill
            className="object-cover"
          />
        </div>
        <p className="text-gray-600">{post.author} • {post.date}</p>
      </div>
      
      {post.content}
    </div>
  );
}