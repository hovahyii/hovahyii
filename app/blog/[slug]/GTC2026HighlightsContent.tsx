"use client";

import Image from 'next/image';

export default function GTC2026HighlightsContent() {
    return (
        <div className="prose lg:prose-xl max-w-none text-slate-900 dark:text-slate-100 pb-20">
            {/* Hero Section */}
            <div className="mb-12 p-8 md:p-12 rounded-[2.5rem] border border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 via-white to-slate-50 dark:from-green-950/40 dark:via-slate-900 dark:to-slate-900 shadow-2xl overflow-hidden relative">
                <div className="relative z-10">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs font-bold tracking-widest uppercase mb-6">
                        Keynote Recap • NVIDIA GTC 2026
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-3 mb-6 text-slate-900 dark:text-white leading-[1.1] tracking-tight text-balance">
                        NVidia GTC 2026: The Era of <span className="text-green-600 dark:text-green-500">Agent Computers</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
                        Jensen Huang celebrates 20 years of CUDA and unveils the transition from a chip manufacturer to a <strong>full-stack AI computing platform</strong>.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-500">
                        <span className="flex items-center">⏱️ 3:50: Outlining the Platform Transition</span>
                        <span className="flex items-center">⏱️ 4:09: AI Factories & Tokens</span>
                    </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/10 rounded-full -mr-32 -mt-32 blur-[100px] opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-32 -mb-32 blur-[100px] opacity-40"></div>
            </div>

            <p className="text-xl md:text-2xl leading-relaxed my-12 font-medium text-slate-800 dark:text-slate-200 border-l-4 border-green-500 pl-8 italic">
                "Accelerated computing is the building of AI factories to generate the knowledge of humanity. Tokens are the foundational building blocks of this new world."
            </p>

            {/* CUDA Section */}
            <div className="my-24 group">
                <div className="flex flex-col items-center mb-12">
                    <Image
                        src="/blog/GTC2026/20-years-of-cuda.PNG"
                        alt="20 Years of CUDA Flywheel"
                        width={1000}
                        height={562}
                        className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-200 dark:border-slate-800 group-hover:scale-[1.01] transition-all duration-700"
                    />
                    <div className="mt-8 text-center max-w-2xl">
                        <h3 className="text-2xl font-bold mb-3">The CUDA Ecosystem: 20-Year Flywheel</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            Celebrating 20 years of CUDA, Jensen Huang highlighted the massive installed base of hundreds of millions of GPUs that act as the fuel for AI breakthroughs (6:02-7:49).
                        </p>
                    </div>
                </div>
            </div>

            {/* AI Factories Detailed Section */}
            <div className="my-32 py-20 px-8 md:px-16 rounded-[3.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-4xl font-black mb-12 text-center text-green-400">Understanding "AI Factories"</h3>
                    
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-10">
                            <div className="relative pl-12">
                                <span className="absolute left-0 top-0 text-3xl">🧩</span>
                                <h4 className="text-2xl font-bold mb-4">Token Generation</h4>
                                <p className="text-slate-400 leading-relaxed font-medium">The purpose of an AI factory is to serve as a generator of tokens (0:16), the fundamental building blocks of AI (0:19).</p>
                            </div>
                            <div className="relative pl-12">
                                <span className="absolute left-0 top-0 text-3xl">🏺</span>
                                <h4 className="text-2xl font-bold mb-4">Data into Knowledge</h4>
                                <p className="text-slate-400 leading-relaxed font-medium">Processing massive amounts of information to create actionable intelligence—turning raw data into value (0:28).</p>
                            </div>
                            <div className="relative pl-12">
                                <span className="absolute left-0 top-0 text-3xl">🔋</span>
                                <h4 className="text-2xl font-bold mb-4">Powering Systems</h4>
                                <p className="text-slate-400 leading-relaxed font-medium">Generating tokens necessary to fuel agentic AI and physical AI (robotics) at scale (0:32, 0:53).</p>
                            </div>
                            <div className="relative pl-12 text-green-400 font-bold bg-white/5 p-6 rounded-2xl border border-white/10">
                                💡 Maximizing Production: Operating as a high-throughput factory to convert electrical power into revenue as efficiently as possible (1:02:10, 1:43:10).
                            </div>
                        </div>
                        <div className="relative group">
                            <Image
                                src="/blog/GTC2026/nvidia-dsx-ai-factory-platform.PNG"
                                alt="NVIDIA DSX AI Factory Platform Blueprint"
                                width={600}
                                height={337}
                                className="rounded-2xl shadow-2xl relative z-10 border border-white/20 group-hover:scale-[1.03] transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full scale-110 opacity-40"></div>
                            <p className="mt-6 text-sm text-slate-400 italic text-center">
                                The DSX AI Factory Platform operates as an Omniverse digital twin blueprint for simulating factory performance (1:42:03).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vera Rubin Architecture In-Depth */}
            <div className="my-32 flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2 space-y-8">
                    <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white border-l-8 border-green-500 pl-8">Vera Rubin: A Full-Stack Vertical Leap</h3>
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                        Differing from Hopper and Blackwell, <strong>Vera Rubin</strong> is architected specifically as a horizontally and vertically integrated system for the era of agentic AI (1:10:04).
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800">
                            <div className="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-900/50 rounded-2xl text-2xl">🧊</div>
                            <div className="flex-1">
                                <h5 className="font-extrabold text-sm uppercase tracking-wider text-slate-500 mb-1">Cooling</h5>
                                <p className="font-bold">100% Liquid Cooled (45°C Hot-Water)</p>
                                <p className="text-sm text-slate-500 font-medium">Reduces data center cooling costs significantly (1:14:15).</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800">
                            <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl text-2xl">⚡</div>
                            <div className="flex-1">
                                <h5 className="font-extrabold text-sm uppercase tracking-wider text-slate-500 mb-1">Performance</h5>
                                <p className="font-bold">350x Token Generation Speed Leap</p>
                                <p className="text-sm text-slate-500 font-medium">Massive gains over traditional Moore's Law progression (1:35:31).</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800">
                            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-900/50 rounded-2xl text-2xl">🏭</div>
                            <div className="flex-1">
                                <h5 className="font-extrabold text-sm uppercase tracking-wider text-slate-500 mb-1">Modular Scaling</h5>
                                <p className="font-bold">Kyber Rack (144 GPUs)</p>
                                <p className="text-sm text-slate-500 font-medium">Connecting 144 GPUs in a single NVLink domain with LPDDR5 (1:17:58).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 flex flex-col gap-6">
                    <Image
                        src="/blog/GTC2026/nvidia-vera-rubin-system.PNG"
                        alt="Vera Rubin Rack System"
                        width={600}
                        height={400}
                        className="rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800"
                    />
                    <Image
                        src="/blog/GTC2026/vera-rubin.PNG"
                        alt="Vera Rubin Architecture Component"
                        width={600}
                        height={400}
                        className="rounded-3xl shadow-xl"
                    />
                </div>
            </div>

            {/* Storage Section */}
            <div className="my-24 p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-indigo-50 to-white dark:from-slate-900 dark:to-slate-900 border border-indigo-100 dark:border-slate-800 shadow-xl flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <h3 className="text-3xl font-black mb-6 text-indigo-900 dark:text-indigo-400 tracking-tight">BlueField-4 STX: AI-Native Storage</h3>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                        The BlueField-4 STX is a new platform introduced as part of the Vera Rubin ecosystem (1:10:41). It is designed to bridge compute and storage to handle the massive data demands of agentic AI.
                    </p>
                    <ul className="mt-8 space-y-4">
                        <li className="flex gap-4">
                            <span className="shrink-0 w-6 h-6 flex items-center justify-center bg-indigo-600 text-white rounded-full text-[10px] font-bold">1</span>
                            <span className="font-bold">Integrated Networking:</span> High-speed Spectrum-X integration (1:16:45).
                        </li>
                        <li className="flex gap-4">
                            <span className="shrink-0 w-6 h-6 flex items-center justify-center bg-indigo-600 text-white rounded-full text-[10px] font-bold">2</span>
                            <span className="font-bold">Efficiency & Security:</span> Utilizing DPUs to manage storage traffic, freeing up CPU resources (1:10:43).
                        </li>
                    </ul>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/blog/GTC2026/nvidia-bluefield-4 stx.PNG"
                        alt="BlueField-4 STX Rack"
                        width={600}
                        height={337}
                        className="rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-slate-700"
                    />
                </div>
            </div>

            {/* Open Claw Framework */}
            <div className="my-32 py-20 bg-emerald-50 dark:bg-white/5 rounded-[4rem] px-8 md:px-20 border border-emerald-100 dark:border-white/10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full mb-4">OPEN SOURCE ECOSYSTEM</div>
                        <h3 className="text-4xl font-black">Open Claw: The OS for Agents</h3>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-medium">
                            An open-source framework aiming to become the <strong>"operating system of agent computers"</strong> (1:51:38-1:52:03).
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center text-3xl mb-6">💡</div>
                            <h5 className="font-bold text-lg mb-3">Reason & Plan</h5>
                            <p className="text-sm text-slate-500 font-medium">Decompose complex prompts into step-by-step tasks (1:51:04).</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center text-3xl mb-6">📂</div>
                            <h5 className="font-bold text-lg mb-3">Manage Assets</h5>
                            <p className="text-sm text-slate-500 font-medium">Access tools, file systems, and LLM models seamlessly (1:50:50).</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
                            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center text-3xl mb-6">⚙️</div>
                            <h5 className="font-bold text-lg mb-3">Execute Actions</h5>
                            <p className="text-sm text-slate-500 font-medium">Call sub-agents and handle I/O across modalities (1:51:13).</p>
                        </div>
                    </div>

                    <div className="mt-16 bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h4 className="text-2xl font-bold mb-4 text-emerald-600">Enterprise Core: Nemo Claw</h4>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                Nemo Claw solves critical security issues inherent in open-source agent frameworks. It adds <strong>Open Shell</strong> to manage risks, a policy guardrail, and a privacy router to ensure sensitive corporate data never leaves the network (1:55:18, 1:56:32).
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Image
                                src="/blog/GTC2026/nemoclaw.PNG"
                                alt="Nemo Claw Interface"
                                width={300}
                                height={200}
                                className="rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Physical AI & Disney Olaf */}
            <div className="my-32">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2 relative group">
                        <div className="absolute -inset-4 bg-green-500/10 blur-[100px] rounded-full scale-125 opacity-50"></div>
                        <Image
                            src="/blog/GTC2026/olaf.PNG"
                            alt="Olaf learned to walk in Omniverse"
                            width={600}
                            height={600}
                            className="rounded-[4rem] shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-700 ring-[20px] ring-white dark:ring-slate-800"
                        />
                    </div>
                    <div className="lg:w-1/2 space-y-10">
                        <div>
                            <div className="inline-block px-4 py-1 bg-green-600 text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Disney Research Milestone</div>
                            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">Character Robotics: <br />Olaf Learned to Walk!</h3>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mt-6 leading-relaxed">
                                A surprise appearance by Disney's Olaf (2:12:40) demonstrated how robots can learn to walk and navigate the world using simulation (2:13:00 - 2:14:18).
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex gap-6">
                                <div className="shrink-0 w-12 h-12 bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 rounded-2xl flex items-center justify-center text-2xl">🌍</div>
                                <div>
                                    <h5 className="font-bold text-lg">Omniverse Training</h5>
                                    <p className="text-slate-500 font-medium">Olaf explained that he learned to walk specifically inside <strong>NVIDIA Omniverse</strong> using synthetic data (2:13:20).</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="shrink-0 w-12 h-12 bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 rounded-2xl flex items-center justify-center text-2xl">⚖️</div>
                                <div>
                                    <h5 className="font-bold text-lg">Newton Physics Solver</h5>
                                    <p className="text-slate-500 font-medium">Demonstrates the power of the Newton physics solver running on <strong>NVIDIA Warp</strong> (2:13:30).</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="shrink-0 w-12 h-12 bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 rounded-2xl flex items-center justify-center text-2xl">🔮</div>
                                <div>
                                    <h5 className="font-bold text-lg">Cosmos World Models</h5>
                                    <p className="text-slate-500 font-medium">AI models used for <strong>neural simulation</strong> to create massive amounts of diverse training data (2:10:55).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ending Statement */}
            <div className="mt-40 text-center max-w-4xl mx-auto px-6">
                <div className="w-24 h-1 bg-green-500 mx-auto mb-12 rounded-full"></div>
                <h3 className="text-3xl md:text-5xl font-black italic text-slate-900 dark:text-white leading-[1.2] tracking-tight">
                    "We are no longer just making chips. We are building the factories that will manufacture the intelligence of the next generation."
                </h3>
                <p className="mt-12 text-lg font-extrabold text-green-600 uppercase tracking-[0.4em]">— JENSEN HUANG, GTC 2026 —</p>
            </div>

            {/* Bonus Image */}
            <div className="mt-32 max-w-5xl mx-auto px-4 group">
                <Image
                    src="/blog/GTC2026/structured-data-is-the-ground-truth-of-ai.PNG"
                    alt="Structured Data Ground Truth"
                    width={1000}
                    height={300}
                    className="rounded-[2.5rem] shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-700"
                />
            </div>
        </div>
    );
}
