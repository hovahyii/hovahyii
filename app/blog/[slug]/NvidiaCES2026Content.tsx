'use client';

import Image from 'next/image';

export default function NvidiaCES2026Content() {
    return (
        <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 via-white to-slate-50 dark:from-green-950/40 dark:via-slate-900 dark:to-slate-900">
                <p className="text-sm uppercase tracking-[0.3em] text-green-600 dark:text-green-300 font-semibold">AI Zero Distance • 06/01/2026</p>
                <h1 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">🚀 NVIDIA CES 2026: Vera Rubin Chip Architecture Officially Unveiled & In Full Production</h1>

                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm mt-4">
                    <p className="font-bold text-lg mb-2">TL;DR Summary:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>
                            <strong>NVIDIA Released Next-Gen AI Platform "Rubin":</strong>
                            <ul className="list-disc pl-5 mt-1 text-sm text-slate-600 dark:text-slate-400">
                                <li>Vera CPU: Self-developed, 88 custom Olympus cores</li>
                                <li>Rubin GPU: Next-gen, 336 billion transistors</li>
                                <li>NVLink 6 Switch: 3.6TB/s per GPU bandwidth</li>
                                <li>ConnectX-9 SuperNIC: 800Gb/s</li>
                                <li>BlueField-4 DPU: Security and storage</li>
                                <li>Spectrum-6 Ethernet Switch: 102.4Tb/s</li>
                                <li>Concept: <strong>"Extreme Codesign"</strong></li>
                            </ul>
                        </li>
                        <li>
                            <strong>5 Major Domain Releases:</strong> Nemotron (Agentic AI), Cosmos (Physical AI), Alpamayo (Autonomous Driving), Isaac GR00T (Robotics), Clara (Biomedical).
                        </li>
                        <li>
                            <strong>Resource Open Sourcing:</strong> 10T language tokens, 500k robot trajectories, 455k protein structures, 100TB vehicle sensor data.
                        </li>
                    </ol>
                    <p className="mt-2 font-semibold text-green-600 dark:text-green-400">Core Theme: Physical AI</p>
                </div>
            </div>

            <p>
                NVIDIA Founder and CEO Jensen Huang delivered the first keynote of 2026 at CES. Once again in his signature leather jacket, he announced 8 major releases in just 1.5 hours, covering everything from chips and racks to network design, offering a deep dive into the entire new generation platform.
            </p>

            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/ces2026.gif" alt="Jensen Huang CES 2026 Keynote" width={900} height={500} className="rounded-2xl shadow-lg" unoptimized />
            </div>

            <p>
                In the field of accelerated computing and AI infrastructure, NVIDIA released the <strong>NVIDIA Vera Rubin POD AI Supercomputer</strong>, <strong>NVIDIA Spectrum-X Ethernet Co-Packaged Optics</strong>, <strong>NVIDIA Inference Context Memory Storage Platform</strong>, and the <strong>NVIDIA DGX SuperPOD</strong> based on DGX Vera Rubin NVL72.
            </p>

            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/DGX.png" alt="NVIDIA DGX" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                The NVIDIA Vera Rubin POD features 6 major self-developed chips, covering CPU, GPU, Scale-up, Scale-out, storage, and processing capabilities. All parts are co-designed to meet advanced model needs and reduce computing costs.
            </p>
            <p>
                Among them, the <strong>Vera CPU</strong> adopts the custom Olympus core architecture. The <strong>Rubin GPU</strong> introduces the Transformer Engine, achieving NBFP4 inference performance of up to <strong>50 PFLOPS</strong>, with NVLink bandwidth per GPU reaching <strong>3.6 TB/s</strong>. It supports the third-generation universal confidential computing (the first rack-level TEE), realizing a complete trusted execution environment across CPU and GPU domains.
            </p>

            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/rubin.png" alt="NVIDIA Rubin Platform" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                These chips have all been taped out. NVIDIA has validated the entire NVIDIA Vera Rubin NVL72 system, and partners have begun running their internally integrated AI models and algorithms. The entire ecosystem is preparing for the deployment of Vera Rubin.
            </p>
            <p>
                Among other releases, <strong>NVIDIA Spectrum-X Ethernet Co-Packaged Optics</strong> significantly optimizes power efficiency and application uptime; the <strong>NVIDIA Inference Context Memory Storage Platform</strong> redefines the storage stack to reduce redundant computation and improve inference efficiency; and the <strong>NVIDIA DGX SuperPOD</strong> based on DGX Vera Rubin NVL72 reduces the token cost of large MoE models to <strong>1/10th</strong>.
            </p>

            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/superpod.png" alt="NVIDIA DGX SuperPOD" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                Regarding open models, NVIDIA announced the expansion of its open-source model family, releasing new models, datasets, and libraries. This includes the NVIDIA Nemotron open-source model series adding Agentic RAG models, safety models, and voice models, as well as new open models suitable for all types of robots. However, Jensen Huang did not detail these in the speech.
            </p>
            <p>
                On <strong>Physical AI</strong>, the "ChatGPT moment" for Physical AI has arrived. NVIDIA's full-stack technology enables the global ecosystem to transform industries through AI-driven robotics. NVIDIA's extensive AI tool library, including the new <strong>Alpamayo</strong> open-source model portfolio, enables the global transportation industry to quickly achieve safe L4 driving. The NVIDIA DRIVE autonomous driving platform is now in production, powering all new Mercedes-Benz CLAs for L2++ AI-defined driving.
            </p>

            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/drive.png" alt="NVIDIA DRIVE" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">
                01. New AI Supercomputer: 6 Self-Developed Chips, 3.6 EFLOPS per Rack
            </h2>

            <p>
                Jensen Huang believes that every 10 to 15 years, the computer industry undergoes a complete reshaping. But this time, two platform revolutions are happening simultaneously: from CPU to GPU, and from "programming software" to "training software." Accelerated computing and AI have reconstructed the entire computing stack. The $10 trillion computing industry of the past decade is undergoing modern transformation.
            </p>
            <p>
                Meanwhile, demand for computing power has skyrocketed. Model sizes grow 10x annually, the number of tokens used for model thinking grows 5x annually, while the price per token drops 10x annually.
            </p>

            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/demand.png" alt="Computing Demand" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                To meet this demand, NVIDIA decided to release new computing hardware every year. Huang revealed that <strong>Vera Rubin has fully started production</strong>. The new NVIDIA Vera Rubin POD AI supercomputer adopts 6 self-developed chips: Vera CPU, Rubin GPU, NVLink 6 Switch, ConnectX-9 (CX9) SuperNIC, BlueField-4 DPU, and Spectrum-X 102.4T CPO.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">(1) Vera CPU</h3>
            <p>
                Designed for data movement and agent processing, boasting 88 NVIDIA custom Olympus cores and 176 threads of NVIDIA spatial multi-threading. 1.8TB/s NVLink-C2C supports CPU:GPU unified memory. System memory reaches 1.5TB (3x that of Grace CPU), SOCAMM LPDDR5X memory bandwidth is 1.2TB/s, and it supports rack-level confidential computing, doubling data processing performance.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/vera.png" alt="Vera CPU" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">(2) Rubin GPU</h3>
            <p>
                Introducing the Transformer Engine, NVFP4 inference performance reaches a staggering <strong>50 PFLOPS</strong> (5x that of Blackwell GPU). It is backward compatible, enhancing BF16/FP4 level performance while maintaining inference accuracy. NVFP4 training performance reaches 35 PFLOPS (3.5x Blackwell). Rubin is also the first platform to support <strong>HBM4</strong>, with bandwidth reaching 22TB/s (2.8x previous gen), providing the necessary performance for demanding MoE models and AI workloads.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/rubin-gpu.png" alt="Rubin GPU" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">(3) NVLink 6 Switch</h3>
            <p>
                Single lane rate increased to 400Gbps, using SerDes technology for high-speed signal transmission. Each GPU can achieve <strong>3.6TB/s</strong> full interconnect bandwidth (2x previous gen), with a total bandwidth of 28.8TB/s. FP8 in-network computing performance reaches 14.4 TFLOPS, supporting 100% liquid cooling.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/nvlink6.png" alt="NVLink 6 Switch" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">(4) NVIDIA ConnectX-9 SuperNIC</h3>
            <p>
                Provides 1.6Tb/s bandwidth per GPU, optimized for large-scale AI, featuring a fully software-defined, programmable, accelerated data path.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/connectx9.png" alt="ConnectX-9 SuperNIC" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">(5) NVIDIA BlueField-4</h3>
            <p>
                800Gbps DPU for smart NICs and storage processors, equipped with a 64-core Grace CPU combined with ConnectX-9 SuperNIC. Used to offload network and storage-related computing tasks while enhancing network security. Compute performance is 6x previous gen, memory bandwidth 3x, and GPU data storage access speed increased by 2x.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/bluefield.png" alt="BlueField-4 DPU" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">(6) NVIDIA Vera Rubin NVL72</h3>
            <p>
                Integrates all the above components into a single rack processing system at the system level. Features 2 trillion transistors, NVFP4 inference performance of 3.6 EFLOPS, and NVFP4 training performance of 2.5 EFLOPS. LPDDR5X memory capacity is 54TB (2.5x previous gen); total HBM4 memory is 20.7TB (1.5x previous gen); HBM4 bandwidth is 1.6PB/s (2.8x previous gen); total scale-up bandwidth reaches 260TB/s, exceeding the total bandwidth of the global internet.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/nvl72.png" alt="Vera Rubin NVL72" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                Based on the 3rd generation MGX rack design, the compute tray uses a modular, host-less, cable-less, fan-less design, making assembly and maintenance 18x faster than GB200. What used to take 2 hours now takes about 5 minutes. While the previous system used ~80% liquid cooling, this is now <strong>100% liquid cooled</strong>. A single system weighs 2 tons, reaching 2.5 tons with coolant.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/mgx.png" alt="MGX Rack" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                The NVLink Switch tray achieves zero-downtime maintenance and fault tolerance; the rack can still run when trays are removed or partially deployed. The second-generation RAS engine performs zero-downtime health checks. These features improve system uptime and throughput, further reducing training and inference costs, meeting data center requirements for high reliability and maintainability. Over 80 MGX partners are ready to support Rubin NVL72 deployment in hyperscale networks.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">
                02. Three New Products Exploding AI Inference Efficiency
            </h2>
            <p>
                NVIDIA also released 3 important new products: NVIDIA Spectrum-X Ethernet Co-Packaged Optics, NVIDIA Inference Context Memory Storage Platform, and NVIDIA DGX SuperPOD based on DGX Vera Rubin NVL72.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. NVIDIA Spectrum-X Ethernet Co-Packaged Optics</h3>
            <p>
                Based on the Spectrum-X architecture, using a 2-chip design with 200Gbps SerDes, each ASIC provides 102.4Tb/s bandwidth. The switching platform includes a 512-port high-density system and a 128-port compact system, with each port rate at 800Gb/s.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/spectrum-x.png" alt="Spectrum-X" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>
            <p>
                The CPO (Co-Packaged Optics) switching system achieves 5x energy efficiency improvement, 10x reliability improvement, and 5x application uptime improvement. This means processing more tokens daily, further reducing Data Center Total Cost of Ownership (TCO).
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. NVIDIA Inference Context Memory Storage Platform</h3>
            <p>
                A POD-level AI-native storage infrastructure for storing KV Cache. Based on BlueField-4 and Spectrum-X Ethernet acceleration, closely coupled with NVIDIA Dynamo and NVLink to achieve collaborative context scheduling between memory, storage, and network. The platform treats context as a first-class data type, achieving 5x inference performance and 5x better energy efficiency.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/context memory.png" alt="Context Memory" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                This is crucial for improving long-context applications like multi-turn dialogue, RAG, and Agentic multi-step reasoning. These workloads highly depend on the ability to efficiently store, reuse, and share context throughout the system. AI is evolving from chatbots to <strong>Agentic AI</strong>—reasoning, using tools, and maintaining long-term state. Context windows have expanded to millions of tokens.
            </p>
            <p>
                Saving these contexts in KV Cache is necessary because recalculating every step wastes GPU time and adds huge latency. However, GPU VRAM is fast but scarce, and traditional network storage is too inefficient for short-term context. The AI inference bottleneck is shifting from compute to context storage. Thus, a new memory layer optimized for inference, sitting between GPU and storage, is needed.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/context.png" alt="Context Layer" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                This layer cannot be an afterthought; it must be co-designed with network storage to move context data with minimal overhead. As a new storage tier, the NVIDIA Inference Context Memory Storage Platform doesn't exist directly in the host system but connects outside the compute device via BlueField-4. Its key advantage is efficiently scaling the storage pool size, avoiding redundant KV Cache computation. NVIDIA is working closely with storage partners to introduce this platform into the Rubin platform.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. NVIDIA DGX SuperPOD Built on Vera Rubin</h3>
            <p>
                At the system level, the NVIDIA DGX SuperPOD serves as a blueprint for large-scale AI factory deployment. It uses 8 sets of DGX Vera Rubin NVL72 systems, employing NVLink 6 for scale-up network and Spectrum-X Ethernet for scale-out network, with built-in NVIDIA Inference Context Memory Storage Platform. Managed by NVIDIA Mission Control software for extreme efficiency.
            </p>
            <p>
                Due to extreme co-design across 6 chips, trays, racks, Pods, data centers, and software, the Rubin platform achieves a massive reduction in training and inference costs. Compared to the previous generation Blackwell, training the same scale MoE model requires only <strong>1/4 of the GPUs</strong>; at the same latency, the token cost for large MoE models is reduced to <strong>1/10th</strong>.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/six new chips.png" alt="Six New Chips" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                With the Vera Rubin architecture, NVIDIA is building the world's largest, most advanced, and lowest-cost AI systems with partners. Rubin infrastructure will be available via CSPs and system integrators in the second half of this year, with Microsoft among the first huge deployments.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/vera rubin.png" alt="Vera Rubin" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">
                03. Open Model Universe Expansion
            </h2>
            <p>
                At the software and model level, NVIDIA continues to increase open-source investment. Platforms like OpenRouter show AI model usage grew 20x in the past year, with about 1/4 of tokens from open-source models.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/openrouter.png" alt="OpenRouter Stats" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                In 2025, NVIDIA was the largest contributor of open-source models, data, and recipes on Hugging Face, releasing 650 open models and 250 open datasets.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/open model.png" alt="Open Models" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                NVIDIA's open models rank high on multiple leaderboards. Developers can not only use these but also learn from them, continue training, expand datasets, and use open-source tools to build AI systems.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/leaderboard.png" alt="Leaderboard" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                Inspired by Perplexity, Huang observed that Agents should be multi-model, multi-cloud, and hybrid-cloud. This is the basic architecture of Agentic AI systems, adopted by almost all startups.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/agent.png" alt="Agent Architecture" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                Using NVIDIA's open models and tools, developers can customize AI systems. NVIDIA has integrated these frameworks into "Blueprints" integrated into SaaS platforms.
            </p>
            <p>
                In live demos, this system automatically judged whether a task should be handled by a local private model or a cloud frontier model based on user intent. It also called external tools (email API, robot control, calendar) and achieved multimodal fusion.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/code.png" alt="Blueprints Code" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">
                04. Open Source Alpamayo: Letting Cars "Think"
            </h2>
            <p>
                NVIDIA believes Physical AI and robotics will become the world's largest consumer electronics segment. Everything that moves will eventually be autonomous, driven by Physical AI. We have passed Perceptual AI, Generative AI, Agentic AI, and are now entering the <strong>Physical AI era</strong>.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/full stack.png" alt="Full Stack AI" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                Physical AI must learn common sense—object permanence, gravity, friction. This relies on three computers: Training (DGX), Inference (Robot/Car chips), and Simulation (Omniverse). The core is the <strong>Cosmos World Foundation Model</strong>.
            </p>
            <p>
                Yellow Huang believes autonomous driving is the first large-scale application of Physical AI. NVIDIA released <strong>Alpamayo</strong>, a complete system of open models, simulation tools, and datasets.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/robotaxi.png" alt="Alpamayo Robotaxi" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                Alpamayo is the industry's first model to truly let cars "think". It reasons through all possibilities and selects the safest path. It breaks down problems into steps.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/aipamayo.png" alt="Alpamayo Reasoning" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                Alpamayo has 10 billion parameters, large enough for driving tasks but light enough for workstations. It takes text, surrounds cameras, vehicle history, and navigation as input, outputting trajectories and reasoning processes.
            </p>
            <p>
                Huang announced that the Mercedes-Benz CLA equipped with the NVIDIA DRIVE platform (and likely utilizing these technologies) is now in production and was just rated as the world's safest car by NCAP.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/benz cla.png" alt="Mercedes CLA" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <p>
                Additionally, global robotics leaders like Boston Dynamics, Franka Robotics, and Zhiyuan Robotics are building on NVIDIA Isaac and GR00T.
            </p>
            <div className="my-8 flex justify-center">
                <Image src="/blog/nvidia/bots.png" alt="Robotics Ecosystem" width={900} height={500} className="rounded-2xl shadow-lg" />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">
                05. Conclusion: Left Hand Open Source, Right Hand Irreplaceable Hardware
            </h2>
            <p>
                As AI infrastructure shifts from training to huge-scale inference, platform competition has evolved from single-point compute to system engineering covering chips, racks, networks, and software. The goal: maximum inference throughput at lowest TCO.
            </p>
            <p>
                NVIDIA focuses on system-level design. Rubin improves performance and economics for both training and inference. By aggressively open-sourcing on one side while making hardware, interconnects, and system designs increasingly "irreplaceable" on the other, NVIDIA is building an even stronger moat.
            </p>
        </div>
    );
}
