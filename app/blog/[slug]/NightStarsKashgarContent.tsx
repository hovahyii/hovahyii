import Image from 'next/image';

function Photo({ src, alt, caption, portrait = false, priority = false }: {
  src: string; alt: string; caption: string; portrait?: boolean; priority?: boolean;
}) {
  return (
    <figure className="my-10 flex flex-col items-center">
      <a href={src} target="_blank" rel="noopener noreferrer" className="block w-full" aria-label={`View full photo: ${alt}`}>
        <Image src={src} alt={alt} width={portrait ? 960 : 1280} height={portrait ? 1280 : 960}
          sizes="(max-width: 896px) calc(100vw - 32px), 864px" priority={priority}
          className={`w-full h-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 ${portrait ? 'max-w-xl mx-auto' : ''}`} />
      </a>
      <figcaption className="text-sm text-center text-slate-500 dark:text-slate-400 mt-3">{caption}</figcaption>
    </figure>
  );
}

function SectionTitle({ number, children }: { number: string; children: React.ReactNode }) {
  return <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 text-lg font-bold">{number}</span>
    {children}
  </h2>;
}

export default function NightStarsKashgarContent() {
  return (
    <article className="prose lg:prose-xl max-w-none text-slate-900 dark:text-slate-100 pb-20 [&_section>p]:my-6 [&_section>p]:leading-relaxed">
      <div className="mb-12 p-8 md:p-12 rounded-[2.5rem] border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/80 via-white to-slate-50 dark:from-indigo-950/30 dark:via-slate-900 dark:to-slate-900 shadow-2xl overflow-hidden relative">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-widest uppercase mb-6">Kashgar · Travel &amp; Reflection</div>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 leading-[1.15] tracking-tight">Under the Stars, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-amber-600 dark:from-indigo-400 dark:via-violet-400 dark:to-amber-400">Small Yet Loved</span></h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">A small light beneath a vast sky. A reflection on Psalm 8, the mountains of Pamir, and the quiet significance of being seen and loved.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300">
            {[
              ['19 October 2026', 'Night in Kashgar'], ['Pamir', 'Mountains & glaciers'], ['Psalm 8:3–4', 'Scripture & reflection'], ['Six photographs', 'From the journey'],
            ].map(([label, detail]) => <div key={label} className="bg-white/80 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60"><span className="text-indigo-600 dark:text-indigo-400 font-bold block text-base">{label}</span>{detail}</div>)}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full -mr-28 -mt-28 blur-[100px] pointer-events-none" />
      </div>

      <Photo src="/blog/kashgar/torch-under-night-sky.png" alt="A figure holding a flaming torch beneath a heart-shaped trail of light at night in Kashgar" caption="Kashgar Prefecture, China · 19 October 2026, 23:11. A small light against the night." priority />

      <section className="mb-14">
        <SectionTitle number="01">Scripture · Psalm 8:3–4</SectionTitle>
        <blockquote className="my-6 p-6 md:p-8 rounded-2xl border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 text-lg leading-relaxed italic">
          <p>“When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them, human beings that you care for them?”</p>
          <footer className="mt-4 text-sm not-italic text-slate-500 dark:text-slate-400">Psalm 8:3–4</footer>
        </blockquote>
        <Photo src="/blog/kashgar/night-stars.png" alt="Scattered stars in the deep blue night sky above Kashgar" caption="The night sky above Kashgar · 19 October 2026, 23:05." portrait />
      </section>

      <hr className="my-12 border-slate-200 dark:border-slate-800" />
      <section className="mb-14">
        <SectionTitle number="02">Reflection · The Philosophy of Smallness</SectionTitle>
        <p>Tonight, standing under a sky that has watched civilizations rise and vanish, the question is not whether we matter. The question is <em>how</em> we matter when the scale is cosmic.</p>
<p>The stars do not know our names. The mountains of Pamir outlast our brief breath. Yet the same Creator who set the stars in their courses — the same One whose fingers shaped this vast darkness — also bends low to count the hairs of our heads. That is the paradox of Christian theology: <strong>we are simultaneously dust and crowned with glory</strong> (Psalm 8:5).</p>
<p>In philosophy, this tension is called the <em>antinomy of significance</em> — between existential smallness (Sartre's "abandonment," Camus's absurd) and spiritual significance (the Christian claim that every human life bears the imago Dei). The Christian answer is not to deny our smallness, but to affirm it truthfully: yes, we are minute; yes, we are loved.</p>
<p>The heart-shaped light in the image — whether made by hand, by spark, or by accident — is a small human sign against the infinite. It does not compete with the stars. It does not need to. Its value is not in brightness but in presence. So too our lives: brief, fragile, easily lost in the dark — yet seen, held, named.</p>

        <Photo src="/blog/kashgar/heart-light.png" alt="A heart-shaped trail of light glowing above the dark terrain in Kashgar" caption="A small human sign against the darkness · Kashgar, 23:10." />
        <div className="my-8 p-6 md:p-8 rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/20">
          <h3 className="text-xl font-bold mb-4">荣神义人 · Glorify God upward; live uprightly toward others</h3>
          <ul className="list-disc pl-6 space-y-4 leading-relaxed">
            <li><strong>Upward:</strong> We glorify God by acknowledging our smallness honestly — not with despair, but with worship. To say “what is man?” is already to recognize a Creator greater than the self.</li>
            <li><strong>Toward others:</strong> We live uprightly by treating every small life — including our own — as worthy of care. The torch we hold does not illuminate the universe, but it illuminates the path for the one beside us.</li>
          </ul>
        </div>
      </section>

      <hr className="my-12 border-slate-200 dark:border-slate-800" />
      <section className="mb-14">
        <SectionTitle number="03">Photographs · The Pamir Journey</SectionTitle>
        <Photo src="/blog/kashgar/muztagh-glacier.png" alt="Hovah standing beside the ice wall at Muztagh Glacier No. 4, with a sign showing an elevation of 4,688 metres" caption="Muztagh Glacier No. 4 · 4,688 metres · 18 October 2026." />
        <Photo src="/blog/kashgar/eighteen-arhat-peaks.png" alt="Hovah beside the Eighteen Arhat Peaks sign, with a snow-covered mountain range behind him" caption="十八罗汉峰 · Eighteen Arhat Peaks, beneath the blue Pamir sky." />
        <Photo src="/blog/kashgar/eye-of-pamir.png" alt="Hovah with arms raised beside the Eye of Pamir landmark and its 3,344-metre elevation marker" caption="帕米尔之眼 · Eye of Pamir · 3,344 metres." />
      </section>

      <section className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/20 border border-indigo-200 dark:border-indigo-900/60">
        <SectionTitle number="04">A Brief Original Prayer</SectionTitle>
        <div className="text-lg leading-relaxed italic"><blockquote><p>Father of stars and hearts, teach me to live within the truth of my smallness. Let me not seek to become a sun, but to carry a faithful light. When the night feels vast and my presence feels minute, remind me: You named the stars, and You named me too. Glorify Yourself in this silence. In Jesus' name. Amen.</p></blockquote></div>
      </section>
    </article>
  );
}
