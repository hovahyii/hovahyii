'use client';

import Image from 'next/image';

export default function DeepSeekR1RevisitContent() {
    return (
        <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 via-white to-slate-50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-900">
                <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300 font-semibold">AI Zero Distance • 08/01/2026</p>
                <h1 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">🐋 DeepSeek "Teaches You" How R1 Was Trained: The "Open Source Textbook of the AI World"</h1>
                <p className="text-lg text-slate-700 dark:text-slate-200">
                    Shocking the whole internet! Two days ago, DeepSeek quietly updated the R1 paper, expanding it from 22 pages to 86 pages. The new paper proves: <strong>Pure Reinforcement Learning is enough to boost AI reasoning capabilities!</strong>
                </p>
            </div>

            <p>
                DeepSeek seems to be holding back a big move. Some netizens even speculate that pure reinforcement learning methods might appear in R2.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/hassan.png" alt="Hassan Tweet" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                This update directly upgrades the original paper into: <strong>A Technical Report Fully Reproducible by the Open Source Community.</strong>
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/deepseek-R1.png" alt="DeepSeek R1 Paper" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                <strong>Paper Address:</strong> <a href="https://arxiv.org/abs/2501.12948" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://arxiv.org/abs/2501.12948</a>
            </p>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl my-6">
                <h3 className="text-xl font-bold mb-4">DeepSeek-R1 New Content Highlights:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Precise Data Recipe:</strong> Explicitly gives data scale (26k math problems, 17k code samples) and specific creation processes.</li>
                    <li><strong>Infrastructure Explanation:</strong> vLLM/DualPipe setup diagrams.</li>
                    <li><strong>Training Cost Breakdown:</strong> Total ~$294,000 (R1-Zero used 198 hours of H800 GPUs).</li>
                    <li><strong>"Failed Attempts" Review:</strong> In-depth explanation of why PRM (Process Reward Model) didn't succeed.</li>
                    <li><strong>Model Comparison:</strong> Systematic comparison with DS-V3, Claude, GPT-4o (previously only included o1).</li>
                    <li><strong>10-Page Safety Report:</strong> Detailed safety evaluation and risk analysis.</li>
                </ul>
            </div>

            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/cedric.png" alt="Cedric Tweet" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                Results show DeepSeek R1 rivals OpenAI o1 in multiple capabilities, and even surpasses o1-mini, GPT-4o, and Claude 3.5.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/benchmark.png" alt="Benchmark Results" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                Moreover, the paper's core contributor list details specific contributions.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/teortaxes.png" alt="Teortaxes Tweet" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/author list.png" alt="Author List" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                Netizens say this update is a "textbook"! Especially the details on <strong>DeepSeek-R1-Zero's self-evolution</strong> are the real highlight.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/ai nate.png" alt="AI Nate Tweet" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                It is worth mentioning that the DeepSeek app updated a few days ago to support voice input. Some guess they might be pushing into multimodal.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/kevinzhow.png" alt="Voice Input" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">DeepSeek R1 Explodes, Matching o1</h2>
            <p>
                First, let's look at the specific evaluation results of DeepSeek-R1. The latest assessment covers Math Reasoning, Coding, General Knowledge & Understanding, and Fact & Instruction Following.
            </p>
            <p>
                On educational knowledge benchmarks (MMLU, MMLU-Pro, GPQA Diamond), DeepSeek-R1 overall surpasses DS-V3. Especially on STEM-related questions, accuracy improved significantly—the biggest credit goes to <strong>RL (Reinforcement Learning)</strong>.
            </p>
            <p>
                Additionally, on long-context QA tasks (FRAMES), DeepSeek-R1 performs outstandingly in document understanding and analysis.
            </p>
            <p>
                In Math and Code tasks, DeepSeek-R1 is basically on par with OpenAI-o1-1217, significantly leading other models. In more practical programming tasks, OpenAI-o1-1217 performs better on Aider, but they are tied on SWE Verified. DeepSeek believes this is mainly because engineering RL training data is not enough yet, so R1's potential here hasn't been fully unleashed. The next version might see a clear improvement.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/table 8.png" alt="Table 8 Benchmarks" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                The chart below compares DeepSeek R1 and R1-Zero against human experts in benchmarks:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>AIME Math Competition:</strong> DeepSeek-R1 score surpasses the average human level.</li>
                <li><strong>Codeforces:</strong> DeepSeek-R1 outperforms 93.6% of participants.</li>
                <li><strong>GPQA Science QA:</strong> Human experts are still stronger overall.</li>
            </ul>
            <p>DeepSeek thinks if R1 could also browse the web, it might catch up to or exceed human levels.</p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/performance.png" alt="Performance vs Humans" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                In the human evaluation phase (ChatbotArena style Elo), R1 achieved impressive results. Notably, in <strong>"Style Control"</strong>, it tied for first place with OpenAI-o1 and Gemini-Exp-1206.
            </p>
            <p>
                "Style Control" design addresses a key question: Does the model "please" human judges with longer, prettier answers even if the content isn't stronger?
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/figure 11.png" alt="Figure 11 Style Control" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                DeepSeek emphasizes that an <strong>MIT-licensed open-source model</strong> matching multiple closed-source AI models is undoubtedly a major milestone. Especially given DeepSeek-R1's much lower cost.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/rank.png" alt="Ranking" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Data Scale Revealed</h3>
            <p>
                DeepSeek released specific scales for RL data and fine-tuning data.
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>RL Phase:</strong> Math (26k), Code (17k), STEM (22k), Logic (15k), General (66k).</li>
                <li><strong>Fine-tuning Phase:</strong> ~800k, covering reasoning, general instructions, and format/language consistency samples.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Distillation: One-Click Inference Migration</h2>
            <p>
                DeepSeek answered this question: <em>Can the "reasoning capability" learned by DeepSeek-R1 be effectively and stably transferred to smaller models?</em>
            </p>
            <p>
                Here, DeepSeek acts as the "Teacher" model, generating high-quality, explicit reasoning trajectory data, and "distilling" reasoning capability to smaller "Student" models via SFT, rather than running RL on small models again. Through distillation, small models directly learn the reasoning patterns validated by R1 without re-exploring the reward space.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/comparison.png" alt="Model Comparison" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                Compared to models of the same size, distilled performance improved across the board. A key phenomenon is that <strong>reasoning capability is not "locked" in large models</strong> but can be transferred to small models via data.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/distilled.png" alt="Distilled Results" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Training Cost</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>R1-Zero:</strong> 64x8 H800 GPUs, ~198 hours.</li>
                <li><strong>R1 Training:</strong> Same config, ~4 days (80 hours).</li>
                <li><strong>SFT Dataset Construction:</strong> ~5000 GPU hours.</li>
                <li><strong>Total:</strong> ~$294,000.</li>
            </ul>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/training cost.png" alt="Training Cost" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>
            <p>Netizens say: It's time for Alex Wang to apologize; all the evidence is here.</p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/tom.png" alt="Tom Tweet" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Emergence! R1-Zero Self-Evolves</h2>
            <p>
                On the MATH dataset, DeepSeek-R1-Zero is like a human copy! Simple reasoning tasks are mastered early, while capability on complex problems (difficulty 3-5) improves significantly with training.
            </p>
            <p>
                Figure 8 reveals different learning modes:
                <br />
                <strong>Simple problems (Levels 1-3):</strong> Quickly reach high accuracy (0.90-0.95) and stay stable.
                <br />
                <strong>Hard problems:</strong> Conquered gradually. Level 5 problems rose from 0.55 to 0.90.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/math.png" alt="Math Progress" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                Interestingly, on harder problems, R1-Zero sometimes beats its own performance on simpler problems.
            </p>
            <p>
                <strong>The "Aha" Moment (Reflection):</strong>
                <br />
                1. <strong>Reinforcement Learning plays a key role</strong> in generating long-chain intermediate tokens.
                <br />
                2. <strong>AI learns different forms of reflection</strong> at specific training stages.
            </p>
            <p>
                They tracked reflective words like <em>wait, mistake, however, but, retry, error, verify, wrong, evaluate, check</em>. The frequency of these words increased 5-7x.
                <br />
                Specific strategies like <strong>"Wait"</strong> appeared almost out of nowhere after 8000 steps (Figure b).
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/reasoning.png" alt="Reasoning Patterns" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Safety: Industry Focus on Jailbreak Attacks</h2>
            <p>DeepSeek analyzed 5 safety aspects:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>System Risk Control</li>
                <li>Comparison on 6 public safety benchmarks</li>
                <li>Internal safety test set research</li>
                <li>Multilingual safety</li>
                <li>Robustness against jailbreak attacks</li>
            </ol>
            <p>
                <strong>System Risk Control:</strong> Filters input risks and uses model-based review (sending "risk review prompts" to V3) to decide on retraction.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/risk review.png" alt="Risk Review" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                <strong>Results:</strong> Comparable safety to other frontiers. Weak on "IP" issues in HarmBench, but strong on discrimination, violence, and privacy.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/comparison of deepseek.png" alt="Safety Comparison" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                <strong>Internal Taxonomy:</strong> 4 categories, 28 subclasses. 1,120 test questions. Risk control lowered unsafe rate but raised refusal rate (~25%).
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/taxonomy.png" alt="Taxonomy" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/unsafe.png" alt="Unsafe Rate" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                <strong>Multilingual:</strong> Expanded to 50 languages. DeepSeek-R1 (85.9%) is close to Claude-3.7 (88.3%).
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/multilingual.png" alt="Multilingual Safety" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                <strong>Jailbreak:</strong>
                <br />1. Threatens all models.
                <br />2. Reasoning models rely more on risk control systems.
                <br />3. Open source models have higher jailbreak risk.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/jailbreaking.png" alt="Jailbreaking" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Summary: Base Model & Verifier Matter</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
                <ul className="space-y-4">
                    <li>
                        <strong>Base Model Matters:</strong> Small models as RL starting points failed. Larger capacity models showed clear RL gains.
                    </li>
                    <li>
                        <strong>Verifier Matters:</strong> Reliable reward signals are key. Rules + LLM Judges helped mitigate reward hacking.
                    </li>
                    <li>
                        <strong>Pipeline:</strong> RL and SFT are both indispensable. Pure RL risks reward hacking on vague tasks; pure SFT limits exploration.
                    </li>
                </ul>
            </div>
            <div className="my-8 flex justify-center">
                <Image src="/blog/deepseek/paper/multi stage.jpg" alt="Training Pipeline" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>
            <p>
                They failed with PRM and Monte Carlo Tree Search (MCTS) this time, but that doesn't mean these methods won't work in the future.
            </p>
        </div>
    );
}
