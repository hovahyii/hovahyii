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
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">A night beneath the desert stars. A slow climb through thin air. Between the silence of Kashgar and the snow of Pamir, I found myself thinking about God, my own limits, and what it means to keep walking.</p>
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
        <SectionTitle number="02">The Desert Night · Coming Before God</SectionTitle>
        <p>That night in the desert, I looked up and felt how small I was. I could say that I had always known it, but knowing something and standing beneath it are different experiences. There was so much sky above me, and so little of me beneath it.</p>
        <p>In everyday life, my attention usually settles on whatever is nearest: the next task, an unfinished plan, something I wish I had done better. Out there, those thoughts were still mine, but they took up less space. The stars had a way of interrupting the importance I gave everything.</p>
        <p>Looking at them felt like coming before God again. I did not have a carefully prepared prayer. For a while, I had very few words at all. I just stood there, aware that I was breathing, that I was alive, and that the world was much larger than the life I had been trying so hard to manage.</p>
        <p>Psalm 8 felt close that night. What is a human being, in the middle of all this? Why would the Creator of such a sky care about someone as ordinary as me? I could not make the distance between those two thoughts smaller. I could only stay with them: <strong>I am small, and I am still loved.</strong></p>
        <p>The quiet also made room for a conversation with myself. What was I so anxious to prove? Which ambitions were really mine, and which had I picked up from watching other people? Had I been giving the people I loved the attention I kept promising to give them later?</p>
        <p>I did not leave the desert with every question answered. But it was a relief to ask them without immediately reaching for a distraction. For once, I could hear a thought all the way through.</p>

        <Photo src="/blog/kashgar/heart-light.png" alt="A heart-shaped trail of light glowing above the dark terrain in Kashgar" caption="A small human sign against the darkness · Kashgar, 23:10." />
        <div className="my-8 p-6 md:p-8 rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/20">
          <h3 className="text-xl font-bold mb-4">Glorify God; Live Uprightly Toward Others</h3>
          <ul className="list-disc pl-6 space-y-4 leading-relaxed">
            <li><strong>Upward:</strong> We glorify God by acknowledging our smallness honestly — not with despair, but with worship. To say “what is man?” is already to recognize a Creator greater than the self.</li>
            <li><strong>Toward others:</strong> We live uprightly by treating every small life — including our own — as worthy of care. The torch we hold does not illuminate the universe, but it illuminates the path for the one beside us.</li>
          </ul>
        </div>
      </section>

      <hr className="my-12 border-slate-200 dark:border-slate-800" />
      <section className="mb-14">
        <SectionTitle number="03">Seeing the World, Others, and Myself</SectionTitle>
        <p>A Chinese saying came to mind. In English, I would put it this way: <em>“See heaven and earth. See all living beings. See yourself.”</em> I had encountered the words before, but this journey gave me a more personal way to understand them.</p>
        <p>To see heaven and earth was to stand before mountains and stars that did not need my approval or understanding. I could take a photograph, learn a name, or read the elevation on a sign. Even then, there was more before me than I could take home.</p>
        <p>To see others was to remember that I was never the only person making a difficult journey. Everyone I passed had a life I knew almost nothing about. Some people moved easily; others needed more time. It made me think about how quickly I judge people when all I can see is their pace.</p>
        <p>And to see myself was to meet the person who remained when my usual confidence became less useful. That happened most clearly on the snowy mountain. I had come ready to admire the view. I was less ready to discover how much help I would need to reach it.</p>
      </section>

      <hr className="my-12 border-slate-200 dark:border-slate-800" />
      <section className="mb-14">
        <SectionTitle number="04">The Snowy Mountain · One Slow Step</SectionTitle>
        <p>On the way up, altitude sickness made the climb much harder than I had expected. About halfway, I wanted to give up. The thought was very practical: I had already seen the mountain, already come this far. Perhaps that was enough.</p>
        <p>I needed oxygen. I needed to slow down. The distance ahead felt discouraging whenever I tried to take it in all at once. So I stopped thinking about the whole climb and paid attention to the little bit directly in front of me.</p>
        <p>A few steps. A pause. Oxygen. Then a few more steps.</p>
        <p>That was how I eventually reached the top of our route. It was far less impressive in the doing than it might look in a photograph. A photograph catches the moment when you are standing there smiling. It does not show all the moments before it when you wondered whether you would make it.</p>
        <Photo src="/blog/kashgar/muztagh-glacier.png" alt="Hovah standing beside the ice wall at Muztagh Glacier No. 4, with a sign showing an elevation of 4,688 metres" caption="Muztagh Glacier No. 4 · 4,688 metres · 18 October 2026. Behind the photograph: oxygen, pauses, and many slow steps." />
        <p>I was glad I had arrived, and I was grateful for the oxygen that had helped me get there. Accepting that help changed the experience. I could let go of the idea that I should be able to do everything at my normal pace.</p>
        <p>I do not take the climb as proof that every limit should be pushed through. What stayed with me was the experience of being dependent, moving slowly, and discovering that I could still be thankful for the ground I covered. I had wanted the view from the top; I had not expected to remember the pauses so clearly.</p>
        <Photo src="/blog/kashgar/eighteen-arhat-peaks.png" alt="Hovah beside the Eighteen Arhat Peaks sign, with a snow-covered mountain range behind him" caption="Eighteen Arhat Peaks, beneath the blue Pamir sky." />
      </section>

      <hr className="my-12 border-slate-200 dark:border-slate-800" />
      <section className="mb-14">
        <SectionTitle number="05">The Pilgrim’s Progress · Learning to Receive Help</SectionTitle>
        <p>The climb brought John Bunyan’s <a href="https://www.gutenberg.org/files/131/old/131-h/131-h.htm" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline"><em>The Pilgrim’s Progress</em></a> to mind. In the book, Christian encounters the Hill Difficulty, where the path leads steeply upward. As he climbs, his pace slows. Remembering that scene, I felt much closer to the tired pilgrim than to the confident traveller I had imagined being.</p>
        <p>My mountain walk was a small experience beside the spiritual journey in Bunyan’s story. Still, it gave me a way to think about it. Faith can feel straightforward when I am reading about it from somewhere comfortable. It feels different when I am tired, uncertain, and looking for a reason to stop.</p>
        <p>I often want enough strength for the entire road before I begin. On that climb, I did not have that assurance. I had the help available to me and the next few steps. That was a humbling place to be, especially for the part of me that prefers to feel capable and in control.</p>
        <p>The oxygen was something very concrete that my body needed. Later, as I thought about the climb, it also reminded me how reluctantly I sometimes receive help in the rest of life. I am happy to talk about grace, yet I still catch myself trying to earn the right to need it. On the mountain, needing help was simply a fact. There was no use pretending otherwise.</p>
        <p>I think that is why the book came back to me so strongly. A pilgrim is still on the way. There is room in that picture for weariness, dependence, and an unfinished understanding of where the road is leading.</p>
        <Photo src="/blog/kashgar/eye-of-pamir.png" alt="Hovah with arms raised beside the Eye of Pamir landmark and its 3,344-metre elevation marker" caption="Eye of Pamir · 3,344 metres. A moment from a journey I am still thinking about." />
      </section>

      <hr className="my-12 border-slate-200 dark:border-slate-800" />
      <section className="mb-14">
        <SectionTitle number="06">What I Brought Home</SectionTitle>
        <p>When I look back at the photographs, I remember two different kinds of smallness. Beneath the stars, I felt it in the scale of the sky. On the mountain, I felt it in my own body. One made me quiet; the other made me slow down.</p>
        <p>Both brought me back to things I easily forget: I have limits. I need other people. I can speak honestly to God without first making myself sound stronger or more certain than I am.</p>
        <p>I hope I remember some of that when ordinary life gets busy again. When someone needs more time than I expect, I hope I remember my own pace on the mountain. When my worries fill the whole frame, I hope I remember looking up in the desert.</p>
        <p>And when I pray, I hope I can sometimes begin as simply as I did beneath that sky: <em>God, here I am.</em></p>
      </section>

      <section className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/20 border border-indigo-200 dark:border-indigo-900/60">
        <SectionTitle number="07">A Prayer for the Road Ahead</SectionTitle>
        <div className="text-lg leading-relaxed italic"><blockquote><p>Father, thank You for the sky above Kashgar and for the road through the mountains. Thank You for meeting me in the quiet and for the help I needed along the way. Teach me to be honest about my limits, patient with other people, and willing to receive Your grace. When I return to the noise of ordinary life, help me make time to listen and to pray. Walk with me on the road ahead. In Jesus’ name. Amen.</p></blockquote></div>
      </section>
    </article>
  );
}
