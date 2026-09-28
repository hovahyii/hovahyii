"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function WhatsappMcmcComplaintContent() {
  const [copied, setCopied] = useState(false);

  const complaintTemplate = `Dear MCMC Consumer Redress Team,

I am writing to seek MCMC's urgent assistance regarding my WhatsApp account registered under [+60 XX-XXXX XXXX].

On [Date of Ban, e.g., 23 September 2026], my WhatsApp account was abruptly blocked/suspended without prior warning. I immediately submitted an appeal through WhatsApp's official in-app review process. However, the application returned the following status:
- "This account can't use WhatsApp."
- "Recent account activity doesn't follow our Terms of Service."
- "Requesting a review is not available."

I have not been provided any specific explanation or evidence regarding what activity caused the ban or which exact policy was allegedly violated. My account was used strictly for lawful personal and business communication, and I have never knowingly violated WhatsApp's Terms of Service.

I have also attempted to contact WhatsApp support via their automated email channels, but only received generic auto-responder messages with no human investigation or recourse.

As WhatsApp is a critical communication tool for my daily personal, family, and professional life, losing access causes immense distress and operational disruption. In light of MCMC's recent engagements with Meta regarding mass account blockages in Malaysia, I kindly request MCMC to escalate and refer my case to Meta's regulatory liaison team for an account review and restoration.

Phone Number: [+60 XX-XXXX XXXX]
Account Type: [WhatsApp Messenger / WhatsApp Business]
Date Banned: [e.g., 23 September 2026]
In-App Review Status: Exhausted ("Requesting a review is not available")

Thank you for your time, protection, and assistance.

Yours sincerely,
[Your Full Name]
[Your Email Address]
[Your Contact Number]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(complaintTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="prose lg:prose-xl max-w-none text-slate-900 dark:text-slate-100 pb-20">
      {/* Hero Banner Section */}
      <div className="mb-12 p-8 md:p-12 rounded-[2.5rem] border border-emerald-200 dark:border-emerald-900/60 bg-gradient-to-br from-emerald-50 via-white to-teal-50/50 dark:from-emerald-950/40 dark:via-slate-900 dark:to-teal-950/40 shadow-2xl overflow-hidden relative">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6">
            <span>🇲🇾</span>
            <span>Consumer Redress Guide • MCMC & Meta</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 text-slate-900 dark:text-white leading-[1.15] tracking-tight">
            How to Lodge an <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400">MCMC Complaint</span> for a Banned or Hacked WhatsApp Account
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
            Woke up to <em>&quot;This account can&apos;t use WhatsApp&quot;</em> and found your in-app review rejected with <em>&quot;Requesting a review is not available&quot;</em>? If you are stuck in an automated loop with Meta bots, here is the complete, official step-by-step walkthrough to escalate your case directly to <strong>MCMC (Malaysian Communications and Multimedia Commission)</strong>.
          </p>

          {/* Quick Stat Pill Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold block text-base">🏛️ Official Channel</span>
              aduan.mcmc.gov.my
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
              <span className="text-teal-600 dark:text-teal-400 font-bold block text-base">⏱️ 5–10 Minutes</span>
              Fast Online Submission
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
              <span className="text-blue-600 dark:text-blue-400 font-bold block text-base">🏢 Direct to Meta</span>
              Escalated to Meta Liaison
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
              <span className="text-purple-600 dark:text-purple-400 font-bold block text-base">🔒 100% Free</span>
              Official Consumer Protection
            </div>
          </div>
        </div>

        {/* Ambient Blur circles */}
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full -mr-28 -mt-28 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/20 rounded-full -ml-28 -mb-28 blur-[100px] pointer-events-none"></div>
      </div>

      {/* Intro Hook */}
      <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-200 font-normal">
        Losing access to your WhatsApp account in Malaysia isn&apos;t just an inconvenience — for many of us, it shuts down our primary communication lifeline with clients, teammates, business orders, and family groups. When your account gets blocked and the automated appeal bot rejects you within hours, it feels like hitting a brick wall.
      </p>
      <p>
        On <strong>23 September 2026</strong>, my own WhatsApp Business account was suddenly banned out of nowhere. I requested a review through the app, only to receive the dreaded final screen: <em>&quot;Recent account activity doesn&apos;t follow our Terms of Service. Requesting a review is not available. Register new number.&quot;</em> No human explanation, no proof, and no way to appeal further in the app.
      </p>
      <p>
        Fortunately, there is a legitimate regulatory path. On <strong>28 September 2026</strong>, I lodged a formal complaint through the <strong>MCMC Consumer Redress Portal</strong> (Case ID: <code className="text-sm font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-emerald-600 dark:text-emerald-400">OC260928-00027</code>), which directly escalates the issue to Meta. Here is everything you need to know, including the latest news, official guidelines, and the exact step-by-step submission process.
      </p>

      {/* Breaking News & Regulatory Context */}
      <div className="my-10 p-6 md:p-8 rounded-3xl border-2 border-amber-300 dark:border-amber-600/50 bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 dark:from-amber-950/30 dark:via-slate-900 dark:to-orange-950/20 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500 text-white text-xl font-bold shadow-md shadow-amber-500/20">
            📢
          </span>
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white m-0">
              National News: MCMC Probing & Meeting Meta
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 m-0">
              Official probe into widespread hacked and blocked WhatsApp accounts across Malaysia
            </p>
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          If your WhatsApp account was recently banned or compromised, you are not alone. Thousands of Malaysian users have experienced similar issues over the past week, prompting national coverage and regulatory intervention from the Ministry of Communications and MCMC:
        </p>

        {/* News Links Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <a
            href="https://www.businesstoday.com.my/2026/09/27/mcmc-meeting-meta-over-hacked-blocked-whatsapp-accounts-deputy-minister/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900/60 hover:border-amber-400 dark:hover:border-amber-500 transition-all hover:shadow-md no-underline"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
                <span>Business Today</span>
                <span>27 Sept 2026</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors m-0 leading-snug">
                MCMC Meeting Meta Over Hacked, Blocked WhatsApp Accounts: Deputy Minister
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 m-0 line-clamp-3">
                Deputy Minister announces high-level talks between MCMC and Meta to resolve recurring account hijacking and mass blocking.
              </p>
            </div>
            <span className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-4 group-hover:underline">
              Read article →
            </span>
          </a>

          <a
            href="https://www.nst.com.my/news/nation/2026/09/1540721/mcmc-probing-complaints-whatsapp-accounts-being-hacked-and-blocked"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900/60 hover:border-amber-400 dark:hover:border-amber-500 transition-all hover:shadow-md no-underline"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
                <span>New Straits Times</span>
                <span>25 Sept 2026</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors m-0 leading-snug">
                MCMC probing complaints on WhatsApp accounts being hacked and blocked
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 m-0 line-clamp-3">
                MCMC investigates complaints and officially refers cases to Meta for clarification and expedited remediation.
              </p>
            </div>
            <span className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-4 group-hover:underline">
              Read article →
            </span>
          </a>

          <a
            href="https://www.astroawani.com/video/mcmc-mesyuarat-dengan-meta-isu-akaun-whatsapp-digodam-dan-disekat"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900/60 hover:border-amber-400 dark:hover:border-amber-500 transition-all hover:shadow-md no-underline"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
                <span>Astro Awani</span>
                <span>28 Sept 2026</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors m-0 leading-snug">
                MCMC mesyuarat dengan Meta isu akaun WhatsApp digodam dan disekat
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 m-0 line-clamp-3">
                Video report on MCMC meeting with Meta representatives on Monday to demand urgent solutions for affected Malaysian consumers.
              </p>
            </div>
            <span className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-4 group-hover:underline">
              Watch report →
            </span>
          </a>
        </div>

        {/* Crucial takeaway quote from MCMC statement */}
        <div className="p-4 rounded-xl bg-amber-100/70 dark:bg-amber-950/60 border-l-4 border-amber-500 text-slate-800 dark:text-amber-200 text-sm leading-relaxed mt-4">
          <p className="m-0 font-medium">
            <strong>Key takeaway from MCMC&apos;s Official Statement:</strong> MCMC emphasized that compromised accounts and account blocks are closely connected. When bad actors take over accounts, they spam or conduct scam campaigns that trigger WhatsApp&apos;s automated ban filters. MCMC explicitly instructed: <em>&quot;If the issue remains unresolved through WhatsApp&apos;s official channels, users may lodge a complaint with MCMC for further action and referral of the case to Meta.&quot;</em>
          </p>
        </div>
      </div>

      {/* The Problem Screen */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        The Problem: When the In-App Review Hits a Dead End
      </h2>
      <p>
        Normally, when an account is flagged, WhatsApp displays an option to &quot;Request a review&quot; directly within the app. However, Meta&apos;s algorithm often processes these appeals without human oversight. In many instances, the review concludes within a few hours, leaving users locked out permanently with this message:
      </p>

      {/* Image: WhatsApp Banned screen */}
      <div className="my-10 flex flex-col items-center">
        <div className="relative max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-200 dark:border-slate-800">
          <Image
            src="/blog/whatsapp-mcmc/whatsapp-banned.jpg"
            alt="WhatsApp account banned screen: This account can't use WhatsApp, requesting a review is not available"
            width={450}
            height={850}
            className="w-full h-auto block m-0"
            priority
          />
        </div>
        <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-3 max-w-md">
          The dreaded ban screen on WhatsApp Business: <em>&quot;This account can&apos;t use WhatsApp. Review requested: September 23, 2026... Requesting a review is not available. Register new number.&quot;</em>
        </p>
      </div>

      <p>
        When you see <strong>&quot;Requesting a review is not available&quot;</strong>, the app will no longer allow any further submissions. Emailing <code className="text-sm font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-emerald-600 dark:text-emerald-400">support@whatsapp.com</code> typically triggers canned auto-replies saying their decision is final.
      </p>
      <p>
        This is where <strong>MCMC Consumer Redress</strong> comes into play. Because Meta operates telecommunications and messaging services in Malaysia under regulatory oversight, MCMC maintains dedicated communication channels with Meta&apos;s legal and trust &amp; safety team in Singapore/Malaysia to review escalated complaints.
      </p>

      {/* Checklist Before Starting */}
      <div className="bg-gradient-to-br from-slate-50 to-emerald-50/40 dark:from-slate-900 dark:to-emerald-950/30 p-6 md:p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/60 my-10 shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white text-sm">📋</span>
          What You Need Before Lodging Your Complaint
        </h3>
        <ul className="text-base space-y-2 text-slate-700 dark:text-slate-300 pl-5 list-disc m-0">
          <li><strong>Banned WhatsApp Phone Number</strong>: formatted in international format (e.g., <code className="text-sm font-mono">+6011-XXXX-XXXX</code>).</li>
          <li><strong>Screenshot of the Ban Screen</strong>: showing the &quot;Requesting a review is not available&quot; message (JPEG or PNG, under 20MB).</li>
          <li><strong>Account Type</strong>: whether it is standard <em>WhatsApp Messenger</em> or <em>WhatsApp Business</em>.</li>
          <li><strong>Your Malaysian IC (MyKad) / Passport &amp; Full Address</strong>: MCMC requires full address verification for telecommunications complaints.</li>
          <li><strong>Timeline Details</strong>: exact dates when the ban occurred and when the in-app review failed.</li>
        </ul>
      </div>

      {/* Step by Step Walkthrough */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        Step-by-Step Walkthrough: Lodging Your Complaint to MCMC
      </h2>
      <p>
        Follow this exact procedure to ensure your complaint is properly categorized under <strong>Online Content → Messaging App → WhatsApp</strong>, which routes it directly to MCMC&apos;s dedicated platform liaison division.
      </p>

      <div className="relative border-l-2 border-emerald-500/30 dark:border-emerald-400/20 pl-6 ml-4 space-y-12 my-10">
        
        {/* Step 1 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">
            1
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Access the MCMC Consumer Redress Portal &amp; Register
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Open your browser and navigate to the official portal: <a href="https://aduan.mcmc.gov.my" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 font-semibold underline">aduan.mcmc.gov.my</a>. If you do not have an account, register using your active email and IC/Passport. Once logged in, you will be greeted by the Consumer Redress dashboard showing your case statistics and complaint sectors.
          </p>

          <div className="my-6 flex flex-col items-center">
            <Image
              src="/blog/whatsapp-mcmc/mcmc-home.png"
              alt="MCMC Consumer Redress Portal homepage and dashboard showing case statistics and complaint sectors"
              width={1080}
              height={500}
              className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
            />
            <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2">
              The MCMC Consumer Redress dashboard tracking case statuses: New, Investigation, On-Hold, Appeal, Resolved, and Closed.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">
            2
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Verify Your Profile &amp; Complete Address Information
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Before submitting a complaint, click on <strong>&quot;My Profile&quot;</strong> in the left sidebar. Make sure your full legal name, email, and <strong>Address Information</strong> toggle is completed. MCMC notes that address details are <strong>mandatory</strong> for telecommunication and online content investigations.
          </p>

          <div className="my-6 flex flex-col items-center">
            <Image
              src="/blog/whatsapp-mcmc/mcmc-profile.png"
              alt="MCMC User Profile page requiring Address Information for telecommunications complaints"
              width={1080}
              height={500}
              className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
            />
            <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2">
              Ensure your profile has a verified email and complete address information before submitting.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">
            3
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Click &quot;New Complaint&quot; &amp; Select the Correct Hierarchy
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Click <strong>&quot;New Complaint&quot;</strong> on the left sidebar. In <strong>Step 1: Basic Details</strong>, select the following dropdown options carefully so your complaint is routed to the right division:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm">
            <div><strong className="text-emerald-700 dark:text-emerald-400">This complaint is for:</strong> Myself</div>
            <div><strong className="text-emerald-700 dark:text-emerald-400">MCMC Related Complaints:</strong> Online Content</div>
            <div><strong className="text-emerald-700 dark:text-emerald-400">Type of Service:</strong> Messaging App</div>
            <div><strong className="text-emerald-700 dark:text-emerald-400">Category:</strong> Account Suspended/Banned</div>
            <div className="sm:col-span-2"><strong className="text-emerald-700 dark:text-emerald-400">Platform:</strong> WhatsApp</div>
          </div>

          <div className="my-6 flex flex-col items-center">
            <Image
              src="/blog/whatsapp-mcmc/make-complaint.png"
              alt="MCMC New Complaint Basic Details screen selecting Online Content, Messaging App, Account Suspended/Banned, WhatsApp"
              width={1080}
              height={500}
              className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
            />
            <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2">
              Step 1 (Basic Details): Selecting Online Content → Messaging App → Account Suspended/Banned → WhatsApp.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">
            4
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Fill in Additional Details &amp; Attach Screenshots
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Click <strong>&quot;Next&quot;</strong> to proceed to <strong>Step 2: Additional Details</strong>. You will be asked for the following fields:
          </p>

          <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300 pl-5 list-disc">
            <li><strong>Mobile Number*</strong>: Enter your banned WhatsApp phone number with area code (e.g., <code className="text-xs font-mono">+601110501375</code>).</li>
            <li><strong>User Name / ID for Messaging App*</strong>: Your WhatsApp profile display name or phone number.</li>
            <li><strong>Specific URL(s) of the Group / Account*</strong>: Enter your direct WhatsApp link: <code className="text-xs font-mono">https://wa.me/60XXXXXXXXX</code>.</li>
            <li><strong>Remedy*</strong>: Choose &quot;Unban account / restore access&quot; or similar remedy.</li>
            <li><strong>Complaint Attachment</strong>: Upload your screenshot of the ban screen (<code className="text-xs font-mono">whatsapp-banned.jpg</code>) and any correspondence with WhatsApp support.</li>
          </ul>

          <div className="my-6 flex flex-col items-center">
            <Image
              src="/blog/whatsapp-mcmc/fill-the-form.png"
              alt="MCMC Step 2 Additional Details form asking for mobile number, username, URL, complaint description and attachments"
              width={1080}
              height={500}
              className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
            />
            <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2">
              Step 2 (Additional Details): Input your banned phone number, wa.me link, complaint description, and upload evidence.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">
            5
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Submit Your Complaint Description (+ Copy My Proven Template)
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Your complaint description needs to be clear, polite, and factual. Clearly state the exact date of the ban, mention that in-app reviews were exhausted, and highlight that no explanation was provided.
          </p>

          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Below is the real submission view from my case (<code className="text-xs font-mono">OC260928-00027</code>) submitted on 28 September 2026:
          </p>

          <div className="my-6 flex flex-col items-center">
            <Image
              src="/blog/whatsapp-mcmc/submission.jpeg"
              alt="MCMC Complaint Submitted screen showing case OC260928-00027 under New status with detailed description"
              width={1080}
              height={500}
              className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
            />
            <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2">
              Case OC260928-00027 recorded under &quot;New&quot; status with full timeline and description submitted to MCMC.
            </p>
          </div>

          {/* Copy-Paste Template Box */}
          <div className="my-8 rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-slate-900 text-slate-100 overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-5 py-3 bg-slate-800/90 border-b border-slate-700">
              <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase flex items-center gap-2">
                <span>📝</span>
                <span>Ready-to-Use Complaint Description Template</span>
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                {copied ? (
                  <>
                    <span>✓</span>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <span>📋</span>
                    <span>Copy Template</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-5 text-xs md:text-sm font-mono overflow-x-auto leading-relaxed text-slate-200 whitespace-pre-wrap m-0">
              {complaintTemplate}
            </pre>
          </div>
        </div>

        {/* Step 6 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">
            6
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Receive Confirmation Email &amp; Track Case Progress
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Immediately after clicking submit, the portal generates your Case ID and sends an official confirmation email from <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-emerald-600 dark:text-emerald-400">noreply-aduan@mcmc.gov.my</code> with the subject <em>&quot;CONSUMER REDRESS PORTAL: [Case ID] - PENGESAHAN PENERIMAAN ADUAN / COMPLAINT ACKNOWLEDGEMENT&quot;</em>.
          </p>

          <div className="my-6 flex flex-col items-center">
            <Image
              src="/blog/whatsapp-mcmc/mcmc-email.png"
              alt="MCMC Confirmation Email acknowledging receipt of complaint ID OC260928-00027"
              width={1080}
              height={500}
              className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
            />
            <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2">
              Official email acknowledgment received from Aduan Portal MCMC containing registered Complaint ID.
            </p>
          </div>
        </div>
      </div>

      {/* What Happens After Submission */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        What Happens Next? (The Resolution Pipeline)
      </h2>
      <p>
        Once logged in MCMC&apos;s system, your case transitions through three distinct phases:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/60 text-xs">1</span>
            <span>Initial Review</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
            MCMC officers verify the submitted details, verify that WhatsApp&apos;s in-app channels were already exhausted, and confirm jurisdiction under Online Content.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold mb-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/60 text-xs">2</span>
            <span>Referral to Meta</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
            MCMC batches verified complaints and issues formal regulatory inquiries directly to Meta&apos;s Trust &amp; Safety and Public Policy teams for account audit.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold mb-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-xs">3</span>
            <span>Resolution &amp; Notice</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
            If no malicious intent or actual Terms of Service violation is found, Meta unbans the account and MCMC notifies you via email with case closure.
          </p>
        </div>
      </div>

      {/* Safety Tips from MCMC */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        🛡️ Essential Security Tips to Protect Your WhatsApp Account
      </h2>
      <p>
        In their official advisory, MCMC and cyber-security experts strongly recommend every Malaysian WhatsApp user implement these safety measures immediately:
      </p>

      <div className="space-y-4 my-8">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-l-4 border-emerald-500 border-t border-r border-b border-slate-200 dark:border-slate-800">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white m-0 mb-1">
            1. Enable Two-Step Verification (2FA PIN)
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Go to <strong>Settings → Account → Two-step verification → Turn on</strong>. Set a 6-digit PIN and attach your email address. This prevents hijackers from registering your number even if they intercept an SMS OTP.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-l-4 border-rose-500 border-t border-r border-b border-slate-200 dark:border-slate-800">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white m-0 mb-1">
            2. Never Share 6-Digit SMS Verification Codes
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Scammers often pose as friends, group admins, or official support asking you to send back a code. No legitimate organization or friend will ever ask for your WhatsApp registration OTP.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-l-4 border-amber-500 border-t border-r border-b border-slate-200 dark:border-slate-800">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white m-0 mb-1">
            3. Beware of Paid &quot;Account Recovery&quot; Scammers
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            MCMC specifically warned the public against third-party &quot;hackers&quot; or services on Instagram, Telegram, or X claiming they can unban accounts for a fee. These are almost always secondary scams that steal money or personal data.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-l-4 border-blue-500 border-t border-r border-b border-slate-200 dark:border-slate-800">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white m-0 mb-1">
            4. Regularly Audit Linked Devices
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Navigate to <strong>Settings → Linked Devices</strong> and review any active web or desktop sessions. If you spot an unrecognized browser or old computer, tap &quot;Log out&quot; immediately.
          </p>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="space-y-4 my-8">
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <h4 className="text-base font-bold text-slate-900 dark:text-white m-0 mb-2">
            Q: Does lodging an MCMC complaint guarantee my WhatsApp account will be unbanned?
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0 leading-relaxed">
            While MCMC does not control Meta&apos;s backend servers directly, an official regulatory escalation forces a genuine review by Meta&apos;s human policy team rather than automated bot filters. For legitimate accounts banned due to bot errors or unauthorized takeover, the success rate through regulatory escalation is significantly higher than repetitive in-app emails.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <h4 className="text-base font-bold text-slate-900 dark:text-white m-0 mb-2">
            Q: How long does MCMC take to process and escalate complaints?
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0 leading-relaxed">
            According to MCMC&apos;s Client Charter, initial acknowledgment is instant (email), and initial case processing typically occurs within 3 to 15 business days depending on response turnaround from Meta.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <h4 className="text-base font-bold text-slate-900 dark:text-white m-0 mb-2">
            Q: Can I file a complaint for WhatsApp Business as well as personal WhatsApp?
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0 leading-relaxed">
            Yes! Both personal WhatsApp Messenger and WhatsApp Business are covered under the Messaging App category in the portal. Simply specify your account type in the complaint description.
          </p>
        </div>
      </div>

      {/* Summary Contact Card */}
      <div className="my-12 p-6 md:p-8 rounded-3xl border border-emerald-300 dark:border-emerald-800 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 shadow-lg text-center">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
          Need Immediate Assistance from MCMC?
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-6">
          You can also reach out to MCMC through their official hotlines and support channels during standard operating hours:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm font-semibold">
          <a
            href="https://aduan.mcmc.gov.my"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all no-underline"
          >
            Portal: aduan.mcmc.gov.my
          </a>
          <a
            href="tel:1800188030"
            className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all no-underline"
          >
            Toll-Free: 1800-188-030
          </a>
          <a
            href="mailto:aduanskmm@mcmc.gov.my"
            className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all no-underline"
          >
            Email: aduanskmm@mcmc.gov.my
          </a>
        </div>
      </div>
    </div>
  );
}
