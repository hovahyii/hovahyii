"use client";

import Image from 'next/image';

export default function KimiK25Content() {
    return (
        <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 via-white to-slate-50 dark:from-purple-950/40 dark:via-slate-900 dark:to-slate-900">
                <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-300 font-semibold">AI UPDATE • 2026-01-28</p>
                <h2 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">👑 Open Source "King" Kimi K2.5 Released: "Most Powerful Open Source Model Yet"! Autonomous "Agent Army" Boosts Efficiency by 450%!</h2>
                <p className="text-lg text-slate-700 dark:text-slate-200">
                    Moonshot AI has open-sourced its new model—Kimi K2.5, with founder Yang Zhilin personally introducing it in a video. It features an autonomous agent cluster that can schedule up to 100 sub-agents, achieving a massive leap in efficiency.
                </p>
            </div>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/main.png"
                    alt="Kimi K2.5 Release"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                Yang Zhilin shared that K2.5 is Kimi's most powerful model to date. Facing complex tasks, Kimi K2.5 can autonomously schedule a cluster containing up to 100 sub-agents, executing up to 1500 tool calls in parallel. Compared to single-agent mode, its task execution efficiency has increased by up to 4.5 times. The entire Agent cluster is fully automatically created and coordinated by the K2.5 model, without any pre-defined sub-agents or workflows.
            </p>
            <p>
                The model is based on the Kimi K2 technical architecture, with continuous pre-training optimization on top of the original architecture. During training, it learned and integrated approximately 15 trillion "vision + text" mixed-format training data units.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/github.png"
                    alt="K2.5 Open Source Page"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>
            <p className="text-center text-sm text-slate-500">▲ K2.5 Model Open Source Page (Source: Hugging Face)</p>

            <p>
                In benchmarks, regarding Agents, K2.5 ranked first in three benchmarks: HLE-Full (comprehensive reasoning), BrowseComp (browsing interaction), and DeepSearchQA (deep search Q&A). In coding, K2.5 ranked first in both SWE-Bench Verified and SWE-Bench Multilingual. In image multimodality, K2.5 scored 88.8 in the document understanding test mniDocBench 1.5, taking first place.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/swe.png"
                    alt="K2.5 Benchmarks"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>
            <p className="text-center text-sm text-slate-500">▲ K2.5 Model Benchmarks</p>

            <p>
                In Agent benchmarks HLE, BrowseComp, and SWE-Verified, K2.5 achieved performance close to GPT-5.2 (xhigh) while being lower in cost.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/model-comparison.png"
                    alt="K2.5 Cost Performance"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>
            <p className="text-center text-sm text-slate-500">▲ K2.5 Model Cost-Performance Comparison</p>

            <p>
                International netizens have given Kimi K2.5 rave reviews. Dmytro Dzhulgakov, Co-founder and CTO of FireworksAI, commented: "Kimi K2.5 = Open Source SOTA Reasoning + Vision + 256K Context + Agent Coding".
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/dmytro.png"
                    alt="Review by Dmytro Dzhulgakov"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>
            <p className="text-center text-sm text-slate-500">▲ International Netizen Review (Source: X)</p>

            <p>
                0xSero, Thrive Protocol AI & Data Engineer and Ethers Club Podcast Host, said he used Kimi to create a new website page.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/oxsero.png"
                    alt="Review by 0xSero"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                Stanislaw, founder of KEA Research collaboration platform, commented that Kimi looks very potential.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/stainislaw.png"
                    alt="Review by Stanislaw"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                Besides the K2.5 model, for software engineering scenarios, the Kimi team also launched the programming product <strong>Kimi Code</strong>. Kimi Code can run directly in the terminal and supports integration with mainstream IDEs like VSCode, Cursor, and Zed. The product is open-sourced, supports image and video input, and can automatically discover existing skills and MCP protocols to migrate them to the Kimi Code working environment.
            </p>
            <p>
                In terms of pricing, K2.5 model API input (per million Tokens) is 4 RMB, cached input is 0.7 RMB; output (per million Tokens) is 21 RMB.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/price.png"
                    alt="K2.5 Price"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>
            <p className="text-center text-sm text-slate-500">▲ K2.5 Model API Price</p>

            <p>
                The K2.5 model offers four modes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Fast Mode:</strong> Provides the fastest response experience;</li>
                <li><strong>Thinking Mode:</strong> Can be used to answer complex questions;</li>
                <li><strong>Agent Mode:</strong> Excels at tasks like deep research, PPT, Excel, Word, PDF, and web page generation;</li>
                <li><strong>Agent Cluster Mode:</strong> Suitable for complex tasks requiring parallel processing.</li>
            </ul>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-8">
                <p className="font-semibold mb-2">Links:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li><a href="https://huggingface.co/moonshotai/Kimi-K2.5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Hugging Face: Kimi-K2.5</a></li>
                    <li><a href="https://modelscope.cn/models/moonshotai/Kimi-K2.5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ModelScope: Kimi-K2.5</a></li>
                </ul>
            </div>

            <hr className="my-8 border-slate-200 dark:border-slate-800" />

            <h3 className="text-2xl font-bold mt-12 mb-6">Hands-on Test: Frontend Design, catching up with Gemini 3 Pro</h3>
            <p>
                I gave the new model just 1 reference image, and it developed this webpage effect in one go ⬇️
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/ask.png"
                    alt="Kimi K2.5 Coding Prompt"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/japan.jpg"
                    alt="Japanese Kitchenware Reference"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                Excellent design, natural animations. Benchmarked against Gemini, Claude, and GPT, it can rank first.
            </p>
            <p>
                And the new Agent Cluster mode, letting it research the top 100 hottest Skills on Github at once, easily scheduling 100 sub-agents and virtual machines. (Similar to Manus's Wide Research)
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/wide search.png"
                    alt="Wide Search"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                Are you a little bit 🤏 shocked? (I still have integrity and didn't use a clickbait shock title hahaha)
            </p>
            <p>
                In short, Kimi released 3 new products right before the Lunar New Year:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>K2.5:</strong> The latest model, supporting multimodality, integrating vision + thinking, with a huge boost in Frontend Coding.</li>
                <li><strong>Agent Cluster:</strong> Can schedule hundreds or thousands of sub-agents in parallel to solve various problems for you.</li>
                <li><strong>Kimi Code:</strong> Open-source version of Claude Code.</li>
            </ul>

            <p>
                Since July '25, Kimi released K2 and Researcher, firmly securing its place in the first tier of domestic Coding models, with Agent capabilities ranking at the forefront.
            </p>
            <p>
                In this article, I will quickly chat about this wave of new Kimi products, focusing on my hands-on views of K2.5 and Agent Cluster:
                Where does it stand objectively? What scenarios is it suitable for?
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-800" />

            <h3 className="text-2xl font-bold mt-12 mb-6">🧠 Kimi K2.5: Unified Model of Vision + Thinking</h3>
            <p>
                First, the model itself. Kimi's multimodal thinking model is finally here. I've been waiting for a long time.
            </p>
            <p>
                Since the second half of last year, domestic Coding models have been quite strong.
                Previously, K2-thinking focused on programming, reasoning, and Agentic tasks, gaining approval from many programmers.
                But compared to overseas Gemini and Claude, it clearly lacked native multimodal capabilities.
            </p>
            <p>
                This time, Kimi launched the latest base model K2.5, a multimodal hybrid reasoning model that internalizes image and video understanding capabilities.
            </p>

            <div className="my-8 grid md:grid-cols-2 gap-6">
                <Image
                    src="/blog/kimi/k2.5/multimodel.png"
                    alt="Multimodal Capabilities"
                    width={800}
                    height={500}
                    className="rounded-xl shadow"
                />
                <Image
                    src="/blog/kimi/k2.5/video.png"
                    alt="Video Understanding"
                    width={800}
                    height={500}
                    className="rounded-xl shadow"
                />
            </div>

            <p>
                It can accurately identify image details and analyze video content frame by frame. Users and developers can finally input multimodal content directly to the model, enabling the "AI coding by reference image" Visual Coding capability mentioned at the beginning.
            </p>
            <p>
                At the same time, K2.5 supports toggling Thinking Mode:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Thinking Mode:</strong> For complex problems, let it slow down and think clearly to get better reasoning results.</li>
                <li><strong>Fast Mode (Non-think):</strong> For simple problems, get results directly, accelerating model response.</li>
            </ul>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/fast.png"
                    alt="Fast Mode"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                In other specs, K2.5 supports a 262K context window, similar to K2 and Qwen3 Max, ranking at the forefront domestically.
            </p>
            <p>
                Price-wise, input is 4 yuan/million tokens, output is 21 yuan/million tokens.
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-800" />

            <h3 className="text-2xl font-bold mt-12 mb-6">💡 K2.5 Highlights: Writing Apps from Images, Huge Design Aesthetic Breakthrough</h3>
            <p>
                Thanks to K2.5's enhanced multimodal and base model capabilities, Kimi's Coding level has improved significantly AGAIN.
                When testing, I hallucinated the surprise and joy from the Gemini 3 Pro frontend capability upgrade wave.
            </p>
            <p>
                People who often do AI programming know that being able to paste a reference image to the model during Coding makes prompting much more precise and effortless: "Snap," paste a picture, AI imitates the design style, changes where you point—this is an extremely important feature.
            </p>
            <p>
                This time, the Kimi K2.5 model can finally write and modify apps by looking at images.
                And it additionally integrates functionality like search, image generation, and cloud virtual machines into the K2.5 Agent, providing a more complete one-stop Vibe Coding experience, available right in the Kimi web version.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">1️⃣ Reference Image Style, Generate Website Design</h4>
            <p>
                Open K2.5 Agent mode, directly send a screenshot of a website, and use multimodal capabilities to replicate it:
            </p>
            <p>
                AI will autonomously recognize multimodal details of the reference image, including paper texture, color systems, etc.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/visual.png"
                    alt="Visual Analysis"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                Visual analysis is detailed and spot-on, more than enough for Visual Coding.
            </p>
            <p>
                The Hover interaction effect of EXPLORE on the 3rd screen is also done with great detail.
                And the web page responsiveness is also done well; this is the effect after narrowing the width, without any Coding adjustments ⬇️
            </p>
            <p>
                The moment I saw the result, my understanding of the upper limit of domestic model Frontend Coding design was refreshed.
            </p>
            <p>
                Even if you ask it to add a bit more animation, it can automatically create even more exaggerated animation effects for you.
            </p>
            <p>
                Additionally, during the Coding process, K2.5 Agent can autonomously search the web for relevant image materials as needed, greatly simplifying the preparation cost of website materials, quickly previewing the complete design effect.
                It also supports calling image generation models to instantly generate required visual assets. (Coding Agent capability is just too complete! Kudos)
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/coding-agent.jpg"
                    alt="Coding Agent"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                I also did a comparison test with three major foreign models: Gemini, Claude, and GPT. I believe you are interested:
            </p>
            <p>⬇️</p>
            <p><strong>Gemini 3 Pro:</strong> The effect aesthetic is quite good, more cyberpunk. The upper limit of design details is visible to be higher than K2.5 (because the implementation is more complex); but comparing with the original image, Kimi restores the mood and style better.</p>
            <p><strong>Claude Opus 4.5:</strong> Ran 2 or 3 rounds in the official APP and it's all like this. Maybe Claude needs clearer prompt words or Coding capability encapsulation?</p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/tokyo.png"
                    alt="Claude Result"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>Only in Antigravity did it produce decent results.</p>
            <p><strong>GPT 5.2 Codex:</strong> Several Cases run were not very stable. Just from frontend design, it is far inferior to Kimi and Gemini.</p>
            <p>
                Summarizing the Frontend Coding model effects in this Case:
                <br />
                • Design Restoration: Kimi K2.5 ＞ Gemini 3 Pro {'>'} Claude Opus 4.5 {'>'} GPT 5.2 Codex
                <br />
                • Design Ceiling: Gemini 3 Pro {'>'} Kimi K2.5 {'>'} Claude Opus 4.5 {'>'} GPT 5.2 Codex
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">2️⃣ Reference Video, Generate Cross-Page Website Interactions</h4>
            <p>
                By the way, K2.5 can also identify video content for visual reference Coding. The general operation flow is like this:
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/function.gif"
                    alt="Video Coding Flow"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                Is there any difference in application method compared to image prompting?
                Yes, absolutely—it is especially suitable for replicating interactive interfaces across multiple pages.
            </p>
            <p>
                For example, asking Kimi K2 to replicate the corresponding design based on a video of the NotebookLM interface I recorded.
                This is also the first video prompt development Case I ran.
                This is the reference video recorded from the original website:
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/notebookllm.jpg"
                    alt="NotebookLM Reference"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>This is the effect Kimi K2.5 imitated in one go:</p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/prompt-notebookllm.png"
                    alt="Kimi NotebookLM Result"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>This is Gemini 3 Pro's one-shot effect (Clause and GPT are not worth bringing up for frontend comparison):</p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/notebookllm clone.jpg"
                    alt="Gemini NotebookLM Result"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                Obviously:
                <br />
                • Even based on video modality, K2.5's overall page restoration completeness in this Case has exceeded Gemini 3 Pro.
                <br />
                • In terms of capturing design details and restoration ceiling, Gemini 3 Pro still wins slightly due to multimodality and model quality.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">3️⃣ Replicate Website from URL</h4>
            <p>
                If you want to save even more trouble, and don't need to specify replicating a specific interaction effect (video reference is better for that, because AI directly opening the webpage won't trigger specific interactions), you can also directly paste the website link.
            </p>
            <p>
                For example, the original Notion official website looks like this.
                Directly give the Notion webpage link to K2.5 Agent and ask for a replica:
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/notion prompt.png"
                    alt="Notion Prompt"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                It can autonomously scroll through the webpage, view complete content, and create a website Design.md specification:
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/design-md.png"
                    alt="Design Spec"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>Finally, Kimi K2.5 obtained the development result shown in the video in one go ⬇️</p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/kimi-notion-clone.jpg"
                    alt="Kimi Notion Clone"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                From one-shot frontend restoration completeness, Kimi K2.5 is already better than Gemini 3 Pro;
                In terms of design detail implementation, Gemini still holds the advantage.
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-800" />

            <h3 className="text-2xl font-bold mt-12 mb-6">👉 Objective Assessment of K2.5 Model Coding Level</h3>
            <p>
                From multiple Cases I ran myself:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>K2.5 and Agent's Coding ability, compared to the previous generation K2, has significantly improved in frontal design sense.</li>
                <li>Compared with top overseas models, frontend (including animation) capabilities may catch up with Gemini 3 Pro, and may have surpassed Claude 4 and GPT 5.2.</li>
                <li>Thanks to K2.5's full modality capability, K2.5 even has an advantage in understanding the design of original reference images in multiple Cases.</li>
                <li>In the implementation ceiling of design details, Gemini 3 Pro is still in the lead.</li>
            </ul>

            <p>
                I also share with you the summarized applicable scenarios for different K2.5 multimodal prompts:
                Image style reference capability is particularly excellent, very suitable for design style extraction and migration applications, convenient for optimizing project design sense 👍👍👍
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>On one hand, it has been sufficiently demonstrated in the Case at the beginning of the article.</li>
                <li>On the other hand, the migration design of Japanese kitchenware below can further prove this point.</li>
            </ul>

            <p>
                Additionally, video and links can also be used for programming prompts:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Video:</strong> Can be used to learn switching between multiple pages, interaction animations (though complex animation restoration is currently limited).</li>
                <li><strong>Link:</strong> Directly access websites autonomously, fully capturing all webpage styles.</li>
            </ul>

            <p>
                It is not difficult to see that the Kimi K2.5 model's Frontend Coding experience is expected to maintain an advantage among domestic Coding models for a period of time.
            </p>
            <p>
                K2.5 in Kimi Coding Plan and API also supports multimodal programming, which will benefit domestic AI Coding users and Agent product developers:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>For the former, Coding is more effortless:</strong> Paste reference images, circle and draw on places to change, and you can precisely explain your modification needs to AI.</li>
                <li><strong>For the latter, using K2.5 as the Agent's base model:</strong> Switching to the latest domestic multimodal Agentic model can cover more edge cases that require visual understanding to handle.</li>
            </ul>

            <p>
                Hope Kimi can come up with enough computing power to cope with the inevitably rising development and testing enthusiasm of domestic developers.
                <br />
                • Chat Address: <a href="https://www.kimi.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.kimi.com/</a>
                <br />
                • Agent Use Address: <a href="https://www.kimi.com/agent" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.kimi.com/agent</a>
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-800" />

            <h3 className="text-2xl font-bold mt-12 mb-6">🤖 Agent Cluster: Autonomously Planning 100 Sub-agents to Solve Problems</h3>
            <p>
                It can autonomously plan and coordinate a large group of Agents to work together for you to handle task requirements.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/multiagent.png"
                    alt="Agent Cluster"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                Thought of Manus's Wide Research? Somewhat similar, Kimi's Agent Swarm tested out to be very remarkable.
            </p>
            <p>For example:</p>
            <p><strong>1) Researching the top 100 hottest Skills on Github in one go, it can split into 100 sub-agents to execute in parallel at once.</strong></p>
            <p>
                Each sub-agent is directly assigned by the main Agent to be responsible for the content research of one repository, so the entire task processing process will be much faster.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/subagent.png"
                    alt="Sub-agents"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                You can see that 100 sub-agents and 100 cloud sandboxes were divided at once, greatly improving the execution speed of material research tasks.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/distribute-task.png"
                    alt="Task Distribution"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p><strong>2) Directly output a 50,000-word podcast script</strong></p>
            <p>
                It will automatically assign roles and create corresponding instructions for each sub-agent, guiding their task goals.
                For example, researching the deeds of dynasties in China's 5000 years of history:
            </p>
            <p> It will first divide into several historical material research Agents, as well as fact verification Agents, podcast writing Agents, and manuscript integration Agents, jointly splitting and integrating complex tasks. </p>
            <p>
                Each chapter is written separately, then aggregated after finishing, and finally put into the word count limit; sure enough, it is over 50k words.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/writing.png"
                    alt="Long Content Writing"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                Citing these examples is not to advocate using AI to churn out all kinds of long-winded content at once, but just to compare the level of AI progress; it inevitably requires benchmarks close to applications to locate well.
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-800" />

            <h3 className="text-2xl font-bold mt-12 mb-6">👉 Objective Evaluation of Agent Cluster</h3>
            <p>
                As early as the Kimi researcher and OK computer period, we have praised Kimi's effect in executing agentic tasks, which is one of the best in China.
            </p>
            <p>
                Kimi's new Agent Cluster based on reinforcement learning training has very obvious advantages overall:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Capable of executing tasks with very many steps at once, and the running process is also very stable (officially said it can schedule up to 100 clones, processing 1500 steps in parallel)</li>
                <li>Sub agents decompose tasks, executing faster</li>
                <li>Context engineering advantages of sub-agent architecture; contexts between sub-tasks are isolated from each other, ensuring the stability of long-term task operation</li>
                <li>Task decomposition does not require human intervention; the main Agent has extremely strong ability to reasonably assign tasks</li>
            </ul>

            <p>
                However, although it has the playwright capability of a cloud browser, it will be limited by network and login, so support for this type of task is currently limited.
                As a comparison, under the same task, Manus will choose to use a browser extension, utilizing the local browser for loading and access (similar to browser mcp).
                Also hope Kimi can learn this method, call MCP to use the local browser, supplement the Agent's access capability, and solve problems like login and network.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/manus.png"
                    alt="Comparison with Manus"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                Personally, I think Agent Cluster is very suitable for complex tasks like research and long content writing.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Multi-material research:</strong> Kimi's web search capability has always been strong, and it is also good at cross-referencing sources. You can also upload files yourself (paper materials, data tables, etc.), let it automatically divide sub-agents, process files in parallel for you, and obtain research results.</li>
                <li><strong>Podcast, video script manuscripts:</strong> Audio and video texts care more about the smoothness of oral logic and the content itself, with less attention to copywriting details. For AI, this is a sweet spot. So we can see that its standard can reach the effect of medium and long popular science videos seen daily on Bilibili.</li>
            </ul>
            <p>(Isn't this just a wild deep research where you call 100 AI thugs at once?)</p>

            <p>
                Kimi's agent cluster, besides demonstrating Kimi's own agent research strength and the model's agentic capability,
                more importantly, hands over a tool that is faster and can intelligently decompose-execute complex long-range tasks to a broad domestic office user group, lowering the usage cost and threshold of AI Agent.
                <br />
                Use Address: <a href="https://www.kimi.com/agent-swarm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.kimi.com/agent-swarm</a>
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-800" />

            <h3 className="text-2xl font-bold mt-12 mb-6">💻 Kimi Code: Open Source Version of Claude Code</h3>
            <p>
                Speaking of this, I have to mention Claude Code which got my account banned just last night...
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/kimi code.png"
                    alt="Kimi Code"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                The Kimi version of CC is also here. You can run it directly in the terminal, or integrate it into mainstream editors like VSCode, Cursor, JetBrains, and Zed.
                Because of the addition of the K2.5 multimodal model, supporting direct input of images and videos for programming assistance, the experience of Kimi Code will also get a more obvious leap.
                The advantage mainly depends on the base model. The significance of having Kimi Code is to allow more people to conveniently use CC-like Coding frameworks.
                I won't go into detail here.
                <br />
                Use Address: <a href="https://www.kimi.com/code" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.kimi.com/code</a>
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-800" />

            <h3 className="text-2xl font-bold mt-12 mb-6">🎐 Final Words</h3>
            <p>
                Kimi released new products right before the New Year this time, full of sincerity (You guys are not in a hurry to IPO, scratching head).
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/kimi/k2.5/summary.png"
                    alt="Summary"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                The biggest highlight is of course K2.5.
                While significantly improving Frontend Coding design levels, it filled the key shortcomings of domestic models in multimodal understanding and Coding capabilities.
                From various Cases I ran, its frontend level has caught up with or even partially surpassed top overseas models. Especially the understanding of reference images and the ability to migrate design tone have had a qualitative improvement.
            </p>
            <p>
                To be fair, after this improvement, I would even prioritize using Kimi for frontend style Coding construction in my own Vibe Coding projects.
            </p>
            <p>
                And Agent Cluster further amplifies Kimi's model advantages and effect quality in agentic tasks.
                Relying solely on domestic models, achieving stable and fast parallel processing of hundreds of Sub-agents, and the low threshold of being able to use it directly on the web version, will further expand the acceptance range of Agent applications among the office group.
            </p>
            <p>
                If you haven't tried it yet, I suggest you go to the web version to experience K2.5 Agent and Agent Cluster.
                Especially the ability of Coding by looking at pictures, the hands-on experience is far more exciting than watching reviews.
            </p>
        </div>
    );
}
