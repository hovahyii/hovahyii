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
                "Accelerated computing is the building of AI factories to generate the knowledge of humanity. Tokens are foundational blocks."
            </p>

            {/* Key Highlights Quick Access */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="text-sm font-bold text-green-600 mb-2">⏱️ 0:41</div>
                    <h4 className="font-bold mb-2">DLSS 5 & Neuro Rendering</h4>
                    <p className="text-sm text-slate-500">Fusion of 3D graphics and generative AI for controllable virtual worlds.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="text-sm font-bold text-green-600 mb-2">⏱️ 3:52</div>
                    <h4 className="font-bold mb-2">AI Agentic Computing</h4>
                    <p className="text-sm text-slate-500">Shift to AI agents that reason, plan, and use tools to solve complex problems.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="text-sm font-bold text-green-600 mb-2">⏱️ 5:07</div>
                    <h4 className="font-bold mb-2">Vera Rubin Hardware</h4>
                    <p className="text-sm text-slate-500">Unveiling of the 100% liquid-cooled system with 6th-gen NVLink.</p>
                </div>
            </div>

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
                            The massive installed base of hundreds of millions of GPUs acts as the flywheel accelerating AI breakthroughs (6:02-7:49).
                        </p>
                    </div>
                </div>
            </div>

            {/* Vera Rubin Architecture */}
            <div className="my-32 flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2 space-y-8">
                    <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white border-l-8 border-green-500 pl-8">Vera Rubin: A Full-Stack Vertical Leap</h3>
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                        The Vera Rubin system (5:07) is architected for the era of agentic AI, maximizing token throughput for models that need to reason and plan (1:24:54).
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800">
                            <div className="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-900/50 rounded-2xl text-2xl">🧊</div>
                            <div className="flex-1">
                                <h5 className="font-extrabold text-sm uppercase tracking-wider text-slate-500 mb-1">Cooling</h5>
                                <p className="font-bold">100% Liquid Cooled (45°C Hot-Water)</p>
                                <p className="text-sm text-slate-500 font-medium">Vertical integration reduces installation from days to hours (1:14:15).</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800">
                            <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl text-2xl">⚡</div>
                            <div className="flex-1">
                                <h5 className="font-extrabold text-sm uppercase tracking-wider text-slate-500 mb-1">Scale</h5>
                                <p className="font-bold">Kyber Rack & 6th-Gen NVLink</p>
                                <p className="text-sm text-slate-500 font-medium">350x token generation speed increase over two years (1:35:31).</p>
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
                                <h4 className="text-2xl font-bold mb-4">Token Generation (0:16)</h4>
                                <p className="text-slate-400 leading-relaxed font-medium">Operating as a high-throughput factory to convert electrical power into token throughput (revenue) as efficiently as possible (1:02:10, 1:43:10).</p>
                            </div>
                            <div className="relative pl-12">
                                <span className="absolute left-0 top-0 text-3xl">🏺</span>
                                <h4 className="text-2xl font-bold mb-4">Data into Knowledge (0:28)</h4>
                                <p className="text-slate-400 leading-relaxed font-medium">Turning data into knowledge through massive processing to create actionable intelligence.</p>
                            </div>
                            <div className="relative pl-12">
                                <span className="absolute left-0 top-0 text-3xl">🔋</span>
                                <h4 className="text-2xl font-bold mb-4">Powering Systems (0:32)</h4>
                                <p className="text-slate-400 leading-relaxed font-medium">Generating tokens necessary to fuel agentic AI and physical physical AI (robotics).</p>
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
                                DSX SIM, Max-Q, and Flex optimize performance across the physical, electrical, and thermal grid (1:42:03).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Autonomous Driving Section - THE $1 TRILLION OPPORTUNITY */}
            <div className="my-32 p-10 md:p-16 rounded-[4rem] bg-gradient-to-br from-green-600 to-indigo-900 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-3/5 space-y-8">
                            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-[0.2em] mb-4">Market Potential (52:59 - 53:48)</div>
                            <h3 className="text-4xl md:text-5xl font-black leading-tight text-white">The <br /><span className="text-green-300 animate-pulse font-black">$1 Trillion</span> <br />Opportunity</h3>
                            
                            <p className="text-xl text-slate-100 leading-relaxed font-medium">
                                Markets previously estimated at $500 billion have now ballooned into a <strong>$1 trillion opportunity</strong> through 2027. The "Chat GPT moment" for self-driving cars has finally arrived (206:37).
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-all">
                                    <h5 className="font-bold text-green-300 mb-2">Robo-Taxi Ready</h5>
                                    <p className="text-sm text-slate-200">Partnering with <strong>BYD, Hyundai, Nissan, and Ji</strong> to bring autonomous platforms to market (206:48).</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-all">
                                    <h5 className="font-bold text-green-300 mb-2">Uber Integration</h5>
                                    <p className="text-sm text-slate-200">A major partnership with <strong>Uber</strong> to deploy robo-taxis across multiple cities (207:20).</p>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-black/30 border border-white/10 italic">
                                "Cars can now <strong>reason</strong> about their actions, narrating lane changes and decision-making around obstacles in real-time." (208:48-209:24).
                            </div>
                        </div>
                        <div className="lg:w-2/5 shrink-0">
                            <div className="bg-slate-200/10 backdrop-blur-xl h-[400px] w-full rounded-[3rem] flex items-center justify-center relative z-10 border border-white/20 group overflow-hidden">
                                 <div className="absolute inset-0 bg-green-500/20 blur-[100px] opacity-20"></div>
                                 <span className="text-white font-black text-2xl uppercase tracking-[0.4em] text-center px-10 leading-loose">NVIDIA <br />ALPAYO <br />SYSTEM</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-[120px] -mr-32 -mt-32"></div>
            </div>

            {/* Open Claw Framework */}
            <div className="my-32 py-20 bg-emerald-50 dark:bg-white/5 rounded-[4rem] px-8 md:px-20 border border-emerald-100 dark:border-white/10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full mb-4">8:12 • OPEN SOURCE ECOSYSTEM</div>
                        <h3 className="text-4xl font-black">OpenClaw: The OS for Agents</h3>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-medium">
                            An open-source framework aiming to make creating personal AI agents as accessible as personal computing once was (1:51:38-1:52:03).
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center text-3xl mb-6">💡</div>
                            <h5 className="font-bold text-lg mb-3">Reason & Plan</h5>
                            <p className="text-sm text-slate-500 font-medium tracking-tight">Decompose complex prompts into step-by-step tasks (1:51:04).</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center text-3xl mb-6">📂</div>
                            <h5 className="font-bold text-lg mb-3">Manage Assets</h5>
                            <p className="text-sm text-slate-500 font-medium tracking-tight">Access tools, file systems, and LLM models seamlessly (1:50:50).</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
                            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center text-3xl mb-6">⚙️</div>
                            <h5 className="font-bold text-lg mb-3">Execute Actions</h5>
                            <p className="text-sm text-slate-500 font-medium tracking-tight">Call sub-agents and handle I/O across modalities (1:51:13).</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Physical AI & Disney Olaf */}
            <div className="my-40">
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
                        <div className="absolute bottom-10 right-10 z-20 bg-black/60 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/20 text-white">
                            <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1">Compute Heart</div>
                            <div className="text-sm font-bold">NVIDIA Jetson System</div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-10">
                        <div>
                            <div className="inline-block px-4 py-1 bg-green-600 text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Disney Research • 211:27</div>
                            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">Physical AI: <br />Bringing Olaf to Life</h3>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mt-6 leading-relaxed">
                                Developed in partnership with <strong>Disney Research</strong>, Olaf utilizes a <strong>Jetson computer</strong> in its "tummy" to process physical AI and reasoning (213:06 - 213:16).
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex gap-6 items-start">
                                <div className="shrink-0 w-12 h-12 bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 rounded-2xl flex items-center justify-center text-2xl">🌍</div>
                                <div>
                                    <h5 className="font-bold text-lg">Omniverse Virtual Training</h5>
                                    <p className="text-slate-500 font-medium">The robot learns how to walk inside the <strong>Omniverse digital twin</strong> before physical deployment (213:18).</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="shrink-0 w-12 h-12 bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 rounded-2xl flex items-center justify-center text-2xl">⚖️</div>
                                <div>
                                    <h5 className="font-bold text-lg">Newton Physics Simulation</h5>
                                    <p className="text-slate-500 font-medium">Policies for movement are trained using <strong>Newton physics</strong> to bridge the sim-to-real gap (212:52).</p>
                                </div>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-xl relative overflow-hidden group">
                                <div className="relative z-10 flex gap-6 items-center">
                                    <div className="shrink-0 text-3xl">🤝</div>
                                    <p className="text-sm font-medium leading-relaxed opacity-90">
                                        NVIDIA worked with <strong>Google, DeepMind, and Disney</strong> to make character robots navigate the world safely and naturally.
                                    </p>
                                </div>
                                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all"></div>
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
