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
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 block">
        ← Back to Main Page
      </Link>
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