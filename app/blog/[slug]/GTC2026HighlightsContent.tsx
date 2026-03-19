"use client";

import Image from 'next/image';

export default function GTC2026HighlightsContent() {
    return (
        <div className="prose lg:prose-xl max-w-none text-slate-900 dark:text-slate-100">
            {/* Hero Section */}
            <div className="mb-8 p-6 rounded-2xl border border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 via-white to-slate-50 dark:from-green-950/40 dark:via-slate-900 dark:to-slate-900 shadow-xl overflow-hidden relative">
                <div className="relative z-10">
                    <p className="text-sm uppercase tracking-[0.3em] text-green-600 dark:text-green-400 font-semibold mb-2">EVENT RECAP • 2026-03-19</p>
                    <h2 className="text-4xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white leading-tight">NVidia GTC 2026: What Shocked Me and Highlights</h2>
                    <p className="text-xl text-slate-700 dark:text-slate-200 max-w-2xl leading-relaxed">
                        Jensen Huang's 20th anniversary CUDA keynote marks transition from chip manufacturer to a <strong>full-stack AI computing platform</strong>.
                    </p>
                </div>
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            </div>

            <p className="text-xl font-medium leading-relaxed my-12">
                The theme of accelerated computing and the building of <strong>AI factories</strong> to generate tokens—the foundational building blocks of AI—defined this year's keynote. It's no longer just about chips; it's about the next generation of data processing (0:16, 4:09).
            </p>

            <div className="my-16 flex flex-col items-center">
                <Image
                    src="/blog/GTC2026/20-years-of-cuda.PNG"
                    alt="20 Years of CUDA"
                    width={950}
                    height={534}
                    className="rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 hover:scale-[1.01] transition-transform duration-500"
                />
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-6 text-center italic font-medium">Celebrating two decades of the CUDA ecosystem: Hundreds of millions of GPUs as the flywheel (6:02-7:49)</p>
            </div>

            {/* Key Highlights Section */}
            <div className="my-24">
                <h3 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white border-l-8 border-green-500 pl-6">Key Highlights and Segments</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
                        <div className="text-green-500 text-3xl mb-4 group-hover:scale-110 transition-transform">🎨</div>
                        <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Neural Rendering (DLSS 5)</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Fusing 3D graphics and generative AI to create highly realistic virtual worlds and simulations (13:33-14:59).</p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
                        <div className="text-green-500 text-3xl mb-4 group-hover:scale-110 transition-transform">🏗️</div>
                        <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">AI Factories & Vera Rubin</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">The next-generation architecture designed specifically to scale for agentic AI with unprecedented throughput (1:10:04-1:11:16).</p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
                        <div className="text-green-500 text-3xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                        <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Open Claw & Agentic AI</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">An open-source "operating system for agent computers" enabling autonomous AI agents to reason and act (1:50:08-1:52:03).</p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
                        <div className="text-green-500 text-3xl mb-4 group-hover:scale-110 transition-transform">🌎</div>
                        <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Physical AI and Robotics</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Showcasing autonomous vehicles and humanoid robots with partnerships like BYD, Hyundai, and Uber (2:05:46-2:09:27).</p>
                    </div>
                </div>
            </div>

            <div className="my-16">
                <Image
                    src="/blog/GTC2026/nvidia-vera-rubin.PNG"
                    alt="NVIDIA Vera Rubin Unveiling"
                    width={950}
                    height={534}
                    className="rounded-3xl shadow-2xl"
                />
            </div>

            {/* AI Factories Section */}
            <div className="my-24 py-16 px-8 rounded-[3rem] bg-slate-900 dark:bg-black text-white overflow-hidden relative">
                <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
                    <h3 className="text-4xl font-bold mb-6 text-green-400">The Purpose of an AI Factory</h3>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        An AI factory serves as a generator of <strong>tokens</strong>—the fundamental building blocks of AI—converting electrical power into revenue efficiently (1:02:10).
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16 relative z-10">
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                        <div className="text-4xl mb-6">🧠</div>
                        <h4 className="text-xl font-bold mb-3 text-green-400">Data to Knowledge</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">Processing massive data to create actionable intelligence (0:28).</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                        <div className="text-4xl mb-6">⚡</div>
                        <h4 className="text-xl font-bold mb-3 text-green-400">Power Intelligence</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">Generating tokens to fuel agentic AI and physical robotics (0:32).</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                        <div className="text-4xl mb-6">📈</div>
                        <h4 className="text-xl font-bold mb-3 text-green-400">Max Production</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">High-throughput conversion of power into token throughput (revenue) (1:43:10).</p>
                    </div>
                </div>

                <div className="relative flex justify-center px-4">
                    <Image
                        src="/blog/GTC2026/nvidia-dsx-ai-factory-platform.PNG"
                        alt="NVIDIA DSX AI Factory Platform"
                        width={850}
                        height={478}
                        className="rounded-2xl shadow-2xl relative z-10 border border-white/10"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-500/20 rounded-full blur-[120px] opacity-30"></div>
                </div>
            </div>

            {/* Vera Rubin Detail Section */}
            <div className="my-32 flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2 space-y-8">
                    <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">Vera Rubin Architecture: Designed for Agentic AI</h3>
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                        Vera Rubin differs significantly from Blackwell by being designed as a <strong>full-stack, vertically integrated system</strong>. It focuses heavily on maximizing token throughput for massive models that need to reason and plan (1:24:54).
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
                            <span className="shrink-0 text-xl">💧</span>
                            <div>
                                <h5 className="font-bold">100% Liquid Cooled</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Uses 45°C hot-water cooling to reduce energy costs and improve efficiency (1:14:15).</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
                            <span className="shrink-0 text-xl">💻</span>
                            <div>
                                <h5 className="font-bold">The Vera CPU</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">New CPU designed for high single-threaded performance and massive data output for tool use (1:13:14).</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                            <span className="shrink-0 text-xl">🚀</span>
                            <div>
                                <h5 className="font-bold">350x Performance Leap</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Enables massive token generation speed increases compared to traditional Moore's Law (1:35:31).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <Image
                        src="/blog/GTC2026/nvidia-vera-rubin-system.PNG"
                        alt="Vera Rubin Vertically Integrated System"
                        width={600}
                        height={800}
                        className="rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800"
                    />
                </div>
            </div>

            {/* Storage Section */}
            <div className="my-24 p-10 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">BlueField-4 STX: AI-Native Storage</h3>
                    <p className="text-slate-700 dark:text-slate-300">
                        A new platform introduced as part of the Vera Rubin ecosystem to handle the massive data demands of agentic AI. It bridges compute and storage using BlueField-4 DPUs (Data Processing Units) to manage storage traffic, freeing up CPU resources (1:10:43).
                    </p>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/blog/GTC2026/nvidia-bluefield-4 stx.PNG"
                        alt="NVIDIA BlueField-4 STX"
                        width={500}
                        height={280}
                        className="rounded-2xl shadow-lg border border-white dark:border-slate-700"
                    />
                </div>
            </div>

            {/* Olaf & Physical AI Section */}
            <div className="my-32">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h3 className="text-4xl font-extrabold mb-6">Olaf's Milestone: Physical AI in Action</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400">A surprise appearance by Disney's Olaf showcased how robots learn to walk and navigate the world inside NVIDIA Omniverse (2:12:45).</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <Image
                            src="/blog/GTC2026/olaf.PNG"
                            alt="Olaf Robot Simulation"
                            width={500}
                            height={500}
                            className="rounded-[3rem] shadow-2xl ring-8 ring-green-50 dark:ring-slate-800"
                        />
                    </div>
                    <div className="order-1 md:order-2 space-y-8">
                        <div>
                            <h4 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">Simulated Training</h4>
                            <p className="leading-relaxed">Robots practice actions safely in digital twins within <strong>Isaac Lab</strong>, using <strong>Cosmos World Models</strong> for neural simulation (2:10:55).</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">The Newton Solver</h4>
                            <p className="leading-relaxed">Olaf demonstrated the power of the Newton physics solver running on <strong>NVIDIA Warp</strong> to ensure simulated behavior matches real-world physics (2:13:30).</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border-l-4 border-slate-900 dark:border-white italic">
                            "Character robotics are reaching a point where they can learn, reason, and narrate their own actions in real-time."
                        </div>
                    </div>
                </div>
            </div>

            {/* Nemo Claw vs Open Claw */}
            <div className="my-32 p-12 rounded-[3.5rem] bg-gradient-to-tr from-green-600 to-indigo-700 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-8 text-center text-white">Why Nemo Claw is Superior for Enterprise</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                            <h5 className="font-bold text-lg mb-2 text-green-300">Enterprise Security</h5>
                            <p className="text-sm text-slate-200">Adds <strong>Open Shell</strong> to manage the risks of autonomous agents accessing sensitive data (1:55:53).</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                            <h5 className="font-bold text-lg mb-2 text-green-300">Data Protection</h5>
                            <p className="text-sm text-slate-200">A privacy router ensures sensitive corporate data never leaves the secure network (1:56:45).</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                            <h5 className="font-bold text-lg mb-2 text-green-300">Frontier Models</h5>
                            <p className="text-sm text-slate-200">Tightly integrated with models like <strong>Neotron</strong>, ranked top for reasoning and safety (1:57:07).</p>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <div className="inline-block p-1 px-4 rounded-full bg-black/30 border border-white/10 text-xs font-bold uppercase tracking-widest text-green-400">Ref: Nemo Claw reference design</div>
                    </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
            </div>

            <p className="text-center font-bold text-3xl mt-40 mb-20 text-slate-900 dark:text-white italic px-4 leading-tight">
                "Accelerated computing is the building of AI factories to generate the knowledge of humanity."
            </p>
        </div>
    );
}
