"use client";

import Image from 'next/image';

export default function AISpringFestivalContent() {
    return (
        <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 via-white to-slate-50 dark:from-red-950/40 dark:via-slate-900 dark:to-slate-900">
                <p className="text-sm uppercase tracking-[0.3em] text-red-600 dark:text-red-300 font-semibold">AI BREAKING NEWS • 2026-02-06</p>
                <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">🔥 The REAL AI Spring Festival! ChatGPT and Claude Drop Major Updates Simultaneously</h2>
                <p className="text-lg text-slate-700 dark:text-slate-200">
                    Before the Chinese New Year arrives, overseas AI giants have launched a head-to-head battle. Workers who don't know how to be "AI managers" are about to be left behind.
                </p>
            </div>

            <p>
                In the early hours of February 6th Beijing time, Anthropic and OpenAI successively released new versions of their foundational models: <strong>Claude Opus 4.6</strong> and <strong>GPT-5.3-Codex</strong>.
            </p>

            <div className="my-8 grid md:grid-cols-2 gap-6">
                <Image
                    src="/blog/festival/sam.png"
                    alt="Sam Altman Announcement"
                    width={800}
                    height={500}
                    className="rounded-xl shadow"
                />
                <Image
                    src="/blog/festival/anthropic.png"
                    alt="Anthropic Announcement"
                    width={800}
                    height={500}
                    className="rounded-xl shadow"
                />
            </div>

            <p>
                Just yesterday, the two companies were debating about ads in AI, and today they've collided again on model releases. Without further ado, let's dive into what these models can do.
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-800" />

            <h3 className="text-2xl font-bold mt-12 mb-6">Claude Opus 4.6</h3>
            <p>
                Claude Opus 4.6 represents a major upgrade to Anthropic's flagship AI model. This generation features more cautious planning, maintains longer autonomous workflows, and surpasses competitors including GPT-5.2 in key enterprise benchmarks.
            </p>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-8">
                <h4 className="text-xl font-bold mb-3">Key Features:</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>1 Million Token Context Window:</strong> For the first time, enabling AI to process and reason over far more information than previous versions</li>
                    <li><strong>"Agent Team" Feature:</strong> Introduced in Claude Code, similar to Kimi K2.5, allowing multiple AI agents to work on different aspects of coding projects simultaneously with autonomous coordination</li>
                    <li><strong>Enhanced Work Capabilities:</strong> Running financial analysis, conducting research, creating documents, spreadsheets, and presentations</li>
                </ul>
            </div>

            <p>
                Anthropic emphasizes that in the Cowork environment, Claude can now autonomously execute multi-tasks, with Opus 4.6 applying all these skills on behalf of humans.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">Benchmark Performance</h4>
            <p>
                Opus 4.6 excels across multiple evaluations:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Achieved the highest score on <strong>Terminal-Bench 2.0</strong> (agentic coding evaluation)</li>
                <li>Leads all frontier models on <strong>"Humanity's Last Exam"</strong> (complex multi-disciplinary reasoning test)</li>
                <li>On <strong>GDPval-AA</strong> (evaluating economically valuable knowledge work in finance, law, etc.), Opus 4.6 outperforms GPT-5.2 by ~144 Elo points and Claude Opus 4.5 by 190 points</li>
                <li>Best performance on <strong>BrowseComp</strong> (measuring ability to find hard-to-locate online information)</li>
            </ul>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/festival/comparison.png"
                    alt="Claude Opus 4.6 Benchmark Comparison"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                Claude Opus 4.6 is now available on claude.ai, API, and all major cloud platforms. Pricing remains unchanged at $5/$25 per million tokens.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">Solving "Context Decay"</h4>
            <p>
                A common problem with current LLMs is "context decay" — model performance degrades when conversation tokens exceed a certain threshold. Opus 4.6 significantly outperforms its predecessor: on the <strong>MRCR v2 8-needle 1M variant test</strong> (like finding a needle in a haystack), Opus 4.6 scores 76% compared to Sonnet 4.5's mere 18.5%. This marks a qualitative leap in how much context the model can utilize while maintaining optimal performance.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">The Rust C Compiler Demo</h4>
            <p>
                To demonstrate Opus 4.6's powerful agentic capabilities, an Anthropic researcher used 16 agents to build a Rust-based C compiler from scratch, essentially setting the task and walking away.
            </p>
            <p>The results:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>100,000 lines of code</strong> output</li>
                <li>Can compile the <strong>Linux kernel</strong></li>
                <li>Cost: <strong>$20,000</strong></li>
                <li>Over <strong>2,000 Claude Code sessions</strong></li>
                <li>Completed in <strong>two weeks</strong></li>
            </ul>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/festival/compiler.png"
                    alt="Claude's C Compiler"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                The compiler can build bootable Linux 6.9 on x86, ARM, and RISC-V. It passes 99% of GCC's stress tests and can compile FFmpeg, Redis, PostgreSQL, QEMU, and even passed the ultimate developer test: compiling and running Doom!
            </p>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-8">
                <p className="font-semibold mb-2">GitHub:</p>
                <a href="https://github.com/anthropics/claudes-c-compiler" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://github.com/anthropics/claudes-c-compiler</a>
            </div>

            <p>
                While no humans participated in writing the code, researchers continuously redesigned tests, built CI pipelines when agents interfered with each other, and created workarounds when all 16 agents got stuck on the same bug.
            </p>
            <blockquote className="pl-4 border-l-4 border-red-300 italic my-4">
                It seems that in the future AI-integrated workflow, the human role has shifted from writing code to building environments that enable AI to write code.
            </blockquote>

            <hr className="my-8 border-slate-200 dark:border-slate-800" />

            <h3 className="text-2xl font-bold mt-12 mb-6">GPT-5.3-Codex</h3>
            <p>
                On OpenAI's side, the new generation model GPT-5.3-Codex followed closely behind. Sam Altman claims it has the best coding performance currently available, further unleashing Codex's potential.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">Benchmark Records</h4>
            <p>GPT-5.3-Codex breaks records across multiple benchmarks:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>SWE-Bench Pro:</strong> 56.8%</li>
                <li><strong>Terminal-Bench 2.0:</strong> 77.3%</li>
                <li>Runs faster and consumes fewer tokens than previous versions</li>
            </ul>

            <div className="my-8 grid md:grid-cols-2 gap-6">
                <Image
                    src="/blog/festival/swe.png"
                    alt="SWE-Bench Results"
                    width={800}
                    height={500}
                    className="rounded-xl shadow"
                />
                <Image
                    src="/blog/festival/terminal-bench.png"
                    alt="Terminal-Bench Results"
                    width={800}
                    height={500}
                    className="rounded-xl shadow"
                />
            </div>

            <p>
                OpenAI states that the model combines GPT-5.2-Codex's frontier coding performance with GPT-5.2's reasoning and professional knowledge capabilities, with a 25% speed improvement. This enables it to handle long-duration tasks requiring research, tool usage, and complex execution.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">Interactive Collaboration</h4>
            <p>
                Like a real colleague, you can guide and interact with GPT-5.3-Codex while it works without losing context. With GPT-5.3-Codex, Codex has evolved from an agent that can write and review code to one that can perform almost anything developers and professionals do on a computer.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">Stunning Aesthetics</h4>
            <p>
                Beyond stronger coding capabilities, GPT-5.2-Codex has once again made significant strides in the aesthetics OpenAI has long focused on.
            </p>
            <p>
                In this release, OpenAI had GPT-5.3-Codex build two games: a second version of the racing game from the Codex app launch, and a diving game.
            </p>

            <div className="my-8 grid md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                    <Image
                        src="/blog/festival/voxel.gif"
                        alt="Voxel Racing Game"
                        width={800}
                        height={500}
                        className="rounded-xl shadow"
                        unoptimized
                    />
                    <p className="text-sm text-slate-500 mt-2">Racing game (compressed, actually very clear)</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/blog/festival/fish.gif"
                        alt="Diving Game"
                        width={800}
                        height={500}
                        className="rounded-xl shadow"
                        unoptimized
                    />
                    <p className="text-sm text-slate-500 mt-2">Diving game</p>
                </div>
            </div>

            <p>
                OpenAI states that GPT-5.3-Codex leveraged its web game development skills along with preset general follow-up prompts (like "fix bugs" or "improve game") to autonomously iterate through millions of tokens of development.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">Beyond Coding</h4>
            <p>
                OpenAI's expectations for this GPT-5.3-Codex release go far beyond a smart coding model — it's an agent that can "go beyond coding" to become a work assistant.
            </p>
            <p>
                GPT-5.3-Codex can support all work throughout the software lifecycle: debugging, deployment, monitoring, writing product requirement documents, editing copy, user research, testing, metrics analysis, and more.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/festival/dual.png"
                    alt="GPT-5.3-Codex Net Worth Analysis"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>
            <p className="text-center text-sm text-slate-500 -mt-4 mb-8">GPT-5.3-Codex outputting net worth analysis tables</p>

            <p>
                OpenAI believes that as model capabilities continue to strengthen, the gap is no longer just about what agents can do, but how easily humans can interact with, guide, and supervise multiple agents working in parallel. Given this, the Codex app makes managing and guiding agents more convenient, and the addition of GPT-5.3-Codex makes it even more interactive.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">Real-time Updates</h4>
            <p>
                With the new model, Codex provides frequent updates, keeping you informed of key decisions and progress. People don't need to wait for final output — they can interact in real-time: asking questions, discussing approaches, and exploring solutions together. GPT-5.3-Codex announces its running process via voice, responds to feedback, and keeps you in control from start to finish.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">Eating Their Own Dog Food</h4>
            <p>
                Finally, OpenAI states that GPT-5.3-Codex was trained and deployed using Codex itself. Many OpenAI researchers and engineers say their work has fundamentally changed compared to two months ago.
            </p>
            <p>
                For example, the research team used Codex to monitor and debug this version's training runs. It not only accelerated debugging of infrastructure issues but also helped track patterns throughout training, conducted deep analysis of interaction quality, proposed fixes, and built rich applications enabling researchers to precisely understand differences between model behavior and previous models.
            </p>
            <p>
                The engineering team used Codex to optimize and adapt the GPT-5.3-Codex framework. When unusual edge cases affecting users emerged, team members used Codex to identify context rendering errors and find root causes of low cache hit rates. Throughout the release, GPT-5.3-Codex continuously supported the team by dynamically scaling GPU clusters to handle traffic spikes and maintain stable latency.
            </p>
            <p>
                During Alpha testing, a researcher wanted to understand how much additional work GPT-5.3-Codex could complete per turn and the resulting productivity gains. GPT-5.3-Codex generated several simple regex classifiers to estimate frequencies of user clarification requests, positive and negative feedback, and task progress, then scalably applied these classifiers to all session logs and generated a report with conclusions.
            </p>
            <p>
                GPT-5.3-Codex is included in ChatGPT's paid plans, but the API will have to wait a while longer.
            </p>
            <p>
                OpenAI reports that due to infrastructure and inference stack improvements, Codex users now run GPT-5.3-Codex 25% faster, enabling faster interactions and faster results.
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-800" />

            <h3 className="text-2xl font-bold mt-12 mb-6">Conclusion</h3>
            <p>
                Overseas AI models have taken turns on stage. In these final days before Spring Festival, domestic models will inevitably step up the competition, including DeepSeek v4 which may be arriving soon.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/festival/thu.jpg"
                    alt="THU Teaser"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p className="text-xl font-bold text-center">
                Are you excited? 🎉
            </p>
        </div>
    );
}
