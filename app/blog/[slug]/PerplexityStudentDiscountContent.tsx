"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function PerplexityStudentDiscountContent() {
  return (
    <div className="prose lg:prose-xl max-w-none text-slate-900 dark:text-slate-100 pb-20">
      {/* Hero Banner Section */}
      <div className="mb-12 p-8 md:p-12 rounded-[2.5rem] border border-blue-200 dark:border-blue-900 bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 dark:from-blue-950/40 dark:via-slate-900 dark:to-indigo-950/40 shadow-2xl overflow-hidden relative">
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 text-xs font-bold tracking-widest uppercase mb-6">
            <span>🎓</span>
            <span>Perplexity Education Program • Student Verified</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 text-slate-900 dark:text-white leading-[1.15] tracking-tight">
            How I Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Perplexity Pro at 50% Off</span> as a Student
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
            Perplexity runs an <strong>Education Program</strong> that cuts the $20/month Pro plan in half for verified students. Here is my complete walkthrough: the student verification form, the <strong>$9/month Education Pro</strong> checkout (~RM 45 for Malaysian students), and the model picker that gives you access to every frontier model — GPT-5.6, Kimi K3 and the rest.
          </p>

          {/* Quick Stat Pill Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-blue-600 dark:text-blue-400 font-bold block text-base">💰 $9/month</span>
              50% Off the $20 Pro Plan
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold block text-base">🇲🇾 ~RM 45</span>
              Malaysian Monthly Cost
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-purple-600 dark:text-purple-400 font-bold block text-base">🎓 1 Form</span>
              Student Verification
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold block text-base">🤖 GPT-5.6, Kimi K3</span>
              Every Frontier Model
            </div>
          </div>
        </div>

        {/* Ambient Blur circles */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full -mr-28 -mt-28 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full -ml-28 -mb-28 blur-[100px] pointer-events-none"></div>
      </div>

      {/* Intro Hook */}
      <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-200 font-normal">
        If you are a student, you are probably already paying for at least one AI subscription — and <strong>$20/month for Perplexity Pro</strong> is no exception. But most people do not know that Perplexity quietly runs an <strong>Education Program</strong> that slashes the price to <strong>$9/month</strong> once your student status is verified.
      </p>
      <p>
        I went through the whole flow myself, and in this post I will show you exactly what each screen looks like — from the student verification form, to the <strong>Education Pro</strong> checkout, to the model picker where you can switch between <strong>GPT-5.6, Kimi K3</strong>, and every other frontier model in one place.
      </p>

      {/* Pricing Comparison Section */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        Regular Pro vs. Education Pro: The Numbers
      </h2>
      <p>
        The Education Program does not give you a stripped-down product — it gives you the <strong>same Pro feature set at student pricing</strong>. The only difference is the price tag after verification:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Standard</span>
            <span className="text-xl">💳</span>
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Perplexity Pro</h4>
          <p className="text-3xl font-black text-slate-400 line-through mb-3">$20 / month</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The regular Pro subscription. Unlimited deep research, priority access to the latest models, higher usage limits, Labs features, file uploads, and image generation — at the full price.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 dark:border-emerald-600 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">Verified Students</span>
            <span className="text-xl">🎓</span>
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Education Pro</h4>
          <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mb-3">$9 / month</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The exact same Pro tier, verified-student priced. That is a straight <strong>50% discount</strong> — roughly <strong>RM 45 a month</strong> at current exchange rates, billed in USD.
          </p>
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <h2 className="text-3xl font-extrabold mt-16 mb-4 text-slate-900 dark:text-white">
        Step-by-Step: Claiming Your Student Discount
      </h2>

      <div className="relative border-l-2 border-blue-500/30 dark:border-blue-400/20 pl-6 ml-4 space-y-8 my-10">
        {/* Step 1 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
            1
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Create Your Perplexity Account
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Head to <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold underline">perplexity.ai</a> and sign up with your email, Google, or Apple account. A free account works fine — the student discount is applied when you upgrade, not at signup.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
            2
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Open the Pro Subscription Page
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Go to your <strong>Settings → Subscription</strong> (or the <a href="https://www.perplexity.ai/pro" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold underline">Pro pricing page</a>) and select the <strong>monthly</strong> plan. This is where the education pricing becomes visible once you start the checkout.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
            3
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Fill in the Student Verification Form
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Before the payment goes through, you will be prompted to verify that you are an enrolled student. The form asks for your study details and proof of enrollment — use your official academic email where possible. Mine cleared within minutes:
          </p>
          <div className="my-6 flex flex-col items-center">
            <Image
              src="/blog/perplexity/student-verification.png"
              alt="Perplexity Student Verification Form"
              width={940}
              height={592}
              className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
            />
            <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-3">
              The student verification form — study level, institution, and enrollment proof.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
            4
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Check Out Education Pro at $9/month
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Once verification passes, the pricing page flips to the education tier: <strong>Education Pro at $9/month — 50% off the regular $20 Pro price</strong>. For Malaysian students that works out to about <strong>RM 45 per month</strong>, billed in USD:
          </p>
          <div className="my-6 flex flex-col items-center">
            <Image
              src="/blog/perplexity/education-pro-pricing.png"
              alt="Perplexity Education Pro Pricing Page at $9 per month"
              width={940}
              height={592}
              className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
            />
            <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-3">
              The checkout page showing Education Pro at $9/month — half of the standard $20 Pro plan.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="relative">
          <div className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
            5
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Pick Any Frontier Model and Start Working
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            The payoff: the model picker on a Pro account lists <strong>every latest frontier model</strong> — GPT-5.6, Kimi K3, and the rest of the current lineup — and you can switch between them per conversation. No juggling multiple subscriptions:
          </p>
          <div className="my-6 flex flex-col items-center">
            <Image
              src="/blog/perplexity/model-picker.png"
              alt="Perplexity Model Picker with GPT-5.6, Kimi K3 and Other Frontier Models"
              width={940}
              height={592}
              className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
            />
            <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-3">
              The model picker — all current frontier models in one dropdown, switchable per conversation.
            </p>
          </div>
        </div>
      </div>

      {/* Important Alert Box */}
      <div className="p-6 rounded-2xl border-l-4 border-amber-500 bg-amber-50/80 dark:bg-amber-950/30 text-slate-800 dark:text-amber-100 my-8 shadow-sm">
        <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300 text-lg mb-2">
          <span>⚠️</span>
          <span>Things to Know Before Subscribing</span>
        </div>
        <ul className="text-base leading-relaxed space-y-2 pl-5 list-disc m-0">
          <li><strong>Keep your student status active.</strong> The education price is tied to your verified enrollment — use a real academic email or valid enrollment proof.</li>
          <li><strong>Billing is in USD.</strong> The $9/month is charged in US dollars, so your effective ringgit cost will drift slightly with the exchange rate.</li>
          <li><strong>Check the renewal terms.</strong> If you graduate mid-cycle, the plan reverts to the regular Pro price — cancel or adjust from Settings before the next billing date if that applies to you.</li>
        </ul>
      </div>

      {/* Final Thoughts / Call to Action */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white my-12 shadow-xl">
        <h3 className="text-2xl font-black mb-3 text-white">Is It Worth It? Absolutely.</h3>
        <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-6">
          If you are already a Pro user, paying <strong className="text-white">$9 instead of $20</strong> for the exact same feature set is a free ~$110 a year. And if you are deciding between AI search tools for study, having GPT-5.6, Kimi K3, and the whole frontier lineup behind one verified account — for the price of a few cups of coffee a month — is hard to beat.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.perplexity.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-blue-700 font-bold shadow-md hover:bg-blue-50 transition-all text-sm md:text-base"
          >
            Open Perplexity 🚀
          </a>
          <a
            href="https://www.perplexity.ai/pro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-800/80 hover:bg-blue-800 text-white font-semibold transition-all text-sm md:text-base"
          >
            View Pro Pricing 💰
          </a>
        </div>
      </div>

      {/* Footer Navigation Back to Blog */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm">
        <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1">
          &larr; Back to all articles
        </Link>
        <span className="text-slate-500">Published on 14 September 2026 • Hovah Yii</span>
      </div>
    </div>
  );
}
