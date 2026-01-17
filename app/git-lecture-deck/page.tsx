'use client';

import { useEffect, useState, useRef } from 'react';
import Script from 'next/script';

export default function GitLectureDeckPage() {
    // Workflow Simulator State
    const [fileStatus, setFileStatus] = useState<'none' | 'untracked' | 'staged' | 'committed' | 'modified'>('none');
    const [commits, setCommits] = useState<number[]>([]);
    const [isPushed, setIsPushed] = useState(false);
    const [consoleLog, setConsoleLog] = useState<{ text: string, color: string }[]>([
        { text: '> System ready. Click "Create File" to start...', color: 'slate' }
    ]);

    // Workflow Simulator Actions
    const addLog = (text: string, color: string) => {
        setConsoleLog(prev => [...prev, { text, color }]);
    };

    const simAction = (action: string) => {
        if (action === 'create') {
            if (fileStatus !== 'none') {
                addLog('Error: File already exists.', 'red');
                return;
            }
            setFileStatus('untracked');
            addLog('File "script.js" created.', 'white');
        } else if (action === 'add') {
            if (fileStatus === 'untracked' || fileStatus === 'modified') {
                setFileStatus('staged');
                addLog('$ git add script.js', 'green');
            } else {
                addLog('Nothing to add (file is committed or not created).', 'yellow');
            }
        } else if (action === 'commit') {
            if (fileStatus === 'staged') {
                const newCommitNum = commits.length + 1;
                setCommits(prev => [...prev, newCommitNum]);
                setFileStatus('committed');
                addLog(`$ git commit -m "Save #${newCommitNum}"`, 'green');
            } else {
                addLog('Nothing to commit. Stage changes first!', 'red');
            }
        } else if (action === 'modify') {
            if (fileStatus === 'committed') {
                setFileStatus('modified');
                setIsPushed(false);
                addLog('File modified. Changes in Working Dir.', 'yellow');
            } else {
                addLog('Can only modify committed files.', 'yellow');
            }
        } else if (action === 'push') {
            if (fileStatus === 'committed' && commits.length > 0 && !isPushed) {
                setIsPushed(true);
                addLog('$ git push origin main', 'green');
                addLog('✓ Code pushed to GitHub!', 'green');
            } else if (isPushed) {
                addLog('Already pushed. Make changes first.', 'yellow');
            } else {
                addLog('Nothing to push. Commit changes first!', 'red');
            }
        }
    };

    const resetSim = () => {
        setFileStatus('none');
        setCommits([]);
        setIsPushed(false);
        setConsoleLog([{ text: '> System ready. Click "Create File" to start...', color: 'slate' }]);
    };

    // Get file token position based on status
    const getTokenZone = () => {
        switch (fileStatus) {
            case 'untracked':
            case 'modified':
                return 'working';
            case 'staged':
                return 'staging';
            case 'committed':
                return 'repo';
            default:
                return 'hidden';
        }
    };

    const getTokenColor = () => {
        switch (fileStatus) {
            case 'untracked': return 'bg-white border-red-300';
            case 'staged': return 'bg-indigo-100 border-indigo-300';
            case 'committed': return 'bg-emerald-100 border-emerald-300';
            case 'modified': return 'bg-amber-100 border-amber-300';
            default: return 'bg-white border-slate-200';
        }
    };

    const getStatusText = () => {
        switch (fileStatus) {
            case 'untracked': return { text: 'Untracked', color: 'text-red-500' };
            case 'staged': return { text: 'Staged', color: 'text-indigo-600' };
            case 'committed': return { text: 'Committed', color: 'text-emerald-600' };
            case 'modified': return { text: 'Modified', color: 'text-amber-600' };
            default: return { text: '', color: '' };
        }
    };

    // Branching Visualizer State
    const [activeBranch, setActiveBranch] = useState<'main' | 'feature'>('main');
    const [mainCommits, setMainCommits] = useState<string[]>(['Init']);
    const [featureCommits, setFeatureCommits] = useState<string[]>([]);
    const [isMerged, setIsMerged] = useState(false);

    const branchAction = (action: string) => {
        if (action === 'commit') {
            if (activeBranch === 'main') {
                setMainCommits(prev => [...prev, `M${prev.length + 1}`]);
            } else {
                setFeatureCommits(prev => [...prev, `F${prev.length + 1}`]);
            }
        } else if (action === 'checkout') {
            if (activeBranch === 'main' && !isMerged) {
                setActiveBranch('feature');
                if (featureCommits.length === 0) {
                    setFeatureCommits(['Branch']);
                }
            }
        } else if (action === 'merge') {
            if (activeBranch === 'feature' && featureCommits.length > 0) {
                setActiveBranch('main');
                setMainCommits(prev => [...prev, 'Merge']);
                setIsMerged(true);
            }
        }
    };

    const resetBranch = () => {
        setActiveBranch('main');
        setMainCommits(['Init']);
        setFeatureCommits([]);
        setIsMerged(false);
    };

    useEffect(() => {
        // Hide the normal layout
        document.body.style.overflow = 'hidden';
        document.body.style.backgroundColor = '#0f172a';
        document.body.style.color = '#f1f5f9';

        return () => {
            document.body.style.overflow = '';
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, []);

    useEffect(() => {
        let currentStep = 1;
        const totalSteps = 22;

        function showSlide(step: number) {
            document.querySelectorAll('.slide').forEach((s) => {
                s.classList.remove('active');
                if (parseInt((s as HTMLElement).dataset.step || '0') === step) {
                    s.classList.add('active');
                }
            });
            const pct = ((step - 1) / (totalSteps - 1)) * 100;
            const progressBar = document.getElementById('progress-bar');
            if (progressBar) {
                progressBar.style.width = pct + '%';
            }
            // Update slide counter
            const counter = document.getElementById('slide-counter');
            if (counter) {
                counter.textContent = `${step} / ${totalSteps}`;
            }
        }

        // Keyboard navigation
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                if (currentStep < totalSteps) {
                    currentStep++;
                    showSlide(currentStep);
                }
            }
            if (e.key === 'ArrowLeft') {
                if (currentStep > 1) {
                    currentStep--;
                    showSlide(currentStep);
                }
            }
        };

        // Touch/swipe navigation for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        };

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (diff > swipeThreshold) {
                // Swipe left - next slide
                if (currentStep < totalSteps) {
                    currentStep++;
                    showSlide(currentStep);
                }
            } else if (diff < -swipeThreshold) {
                // Swipe right - previous slide
                if (currentStep > 1) {
                    currentStep--;
                    showSlide(currentStep);
                }
            }
        };

        // Navigation button handlers
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        const handlePrev = () => {
            if (currentStep > 1) {
                currentStep--;
                showSlide(currentStep);
            }
        };

        const handleNext = () => {
            if (currentStep < totalSteps) {
                currentStep++;
                showSlide(currentStep);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchend', handleTouchEnd);
        prevBtn?.addEventListener('click', handlePrev);
        nextBtn?.addEventListener('click', handleNext);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchend', handleTouchEnd);
            prevBtn?.removeEventListener('click', handlePrev);
            nextBtn?.removeEventListener('click', handleNext);
        };
    }, []);

    return (
        <>
            <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Fira+Code:wght@400;600&display=swap');

        body { 
            font-family: 'Inter', sans-serif; 
            overflow: hidden; 
            background-color: #0f172a; 
            color: #f1f5f9; 
            margin: 0;
            padding: 0;
        }
        
        .slide { 
            display: none; 
            height: 100vh; 
            width: 100vw;
            flex-direction: column; 
            justify-content: center; 
            padding: 4rem; 
            position: fixed;
            top: 0;
            left: 0;
            background: linear-gradient(to bottom right, #0f172a, #1e293b);
            box-sizing: border-box;
        }

        @media (max-width: 768px) {
            .slide { 
                padding: 1.5rem; 
                overflow-y: auto; 
                display: none; /* Keep generic hide, .active override handles display */
                justify-content: flex-start; /* Allow scrolling from top */
                padding-top: 5rem; /* Space for hidden nav or just top spacing */
                padding-bottom: 6rem; /* Space for nav buttons */
            }
            .slide.active { display: flex; }
        }
        
        .slide.active { display: flex; animation: fadeIn 0.5s ease-in-out; z-index: 10; }

        .code-block { font-family: 'Fira Code', monospace; background: #020617; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0; border-left: 4px solid #6366f1; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5); }
        
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        
        #progress-bar { position: fixed; bottom: 0; left: 0; height: 6px; background: #4f46e5; width: 0%; transition: width 0.3s; z-index: 50; }
        
        .ai-badge { background: linear-gradient(135deg, #6366f1, #a855f7); color: white; padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.8rem; font-weight: bold; display: inline-block; margin-bottom: 1rem; box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4); }
        
        .os-card { background: #1e293b; border: 1px solid #334155; padding: 1.5rem; border-radius: 0.75rem; transition: transform 0.2s; }
        .os-card:hover { transform: translateY(-5px); border-color: #6366f1; }
        
        .bio-tag { display: inline-block; padding: 4px 10px; border-radius: 99px; font-size: 0.7rem; font-weight: bold; margin-right: 6px; margin-bottom: 6px; }

        .timeline-item { position: relative; padding-left: 2rem; border-left: 2px solid #475569; padding-bottom: 2rem; }
        .timeline-item:last-child { border-left: none; }
        .timeline-dot { position: absolute; left: -9px; top: 0; width: 16px; height: 16px; border-radius: 50%; background: #6366f1; border: 2px solid #1e293b; }

        .feature-card { background: rgba(30, 41, 59, 0.6); border: 1px solid #334155; padding: 1.5rem; border-radius: 0.75rem; backdrop-filter: blur(10px); }
        .feature-icon { font-size: 2rem; margin-bottom: 0.5rem; display: block; }

        /* Hide default layout elements */
        header, nav, footer { display: none !important; }

        /* Top Navigation Bar */
        .top-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(51, 65, 85, 0.5); }
        .nav-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 600; transition: all 0.2s; text-decoration: none; }
        .nav-btn-home { background: transparent; border: 1px solid #475569; color: #e2e8f0; }
        .nav-btn-home:hover { background: #334155; border-color: #6366f1; }
        .nav-btn-download { background: linear-gradient(135deg, #6366f1, #a855f7); color: white; border: none; cursor: pointer; }
        .nav-btn-download:hover { opacity: 0.9; transform: translateY(-1px); }

        /* Footer */
        .slide-footer { position: fixed; bottom: 12px; left: 0; right: 0; text-align: center; z-index: 40; font-size: 0.75rem; color: #64748b; }
        .slide-footer a { color: #818cf8; text-decoration: none; }
        .slide-footer a:hover { text-decoration: underline; }

        /* Mobile Navigation */
        .mobile-nav { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); z-index: 60; display: flex; align-items: center; gap: 1rem; background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(10px); padding: 0.5rem 1rem; border-radius: 999px; border: 1px solid rgba(99, 102, 241, 0.3); }
        .mobile-nav-btn { width: 44px; height: 44px; border-radius: 50%; background: #334155; border: none; color: white; font-size: 1.25rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
        .mobile-nav-btn:hover { background: #6366f1; }
        .mobile-nav-btn:active { transform: scale(0.95); }
        .slide-counter { color: #94a3b8; font-size: 0.875rem; font-weight: 600; min-width: 60px; text-align: center; }
      `}</style>

            {/* Top Navigation Bar */}
            <nav className="top-nav">
                <a href="https://hovahyii.vercel.app" className="nav-btn nav-btn-home">
                    🏠 Home
                </a>
                <div className="flex items-center gap-3">
                    <a href="https://github.com/hovahyii/git-race-2025/discussions/1" target="_blank" className="nav-btn nav-btn-home">
                        💬 Q&A
                    </a>
                    <button onClick={() => window.print()} className="nav-btn nav-btn-download">
                        📥 Download PDF
                    </button>
                </div>
            </nav>

            {/* SLIDE 1: Title */}
            <section className="slide active" data-step="1">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png" alt="Git Logo" className="h-24 mb-8 drop-shadow-lg filter invert" />
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold mb-6">Workshop Session</span>
                    <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Mastering Git & GitHub</h1>
                    <p className="text-2xl text-slate-400">From Manual Chaos to AI-Assisted Pro</p>
                    <div className="mt-12 text-slate-500 text-sm animate-pulse">Use ⬅️ ➡️ Arrow Keys to Navigate</div>
                </div>
            </section>

            {/* SLIDE 2: Biography */}
            <section className="slide" data-step="2">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-3xl shadow-lg">👨‍💻</div>
                        <div>
                            <h2 className="text-4xl font-bold text-white"><a href="https://hovahyii.vercel.app" target="_blank" className="hover:text-indigo-400 transition">Jehovah Yii Zui Hon (Hovah)</a></h2>
                            <h3 className="text-xl text-indigo-400 font-mono">Founder, <a href="https://hovahdigitalsolutions.com/" target="_blank" className="underline hover:text-indigo-300">Hovah Digital Solutions</a></h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-indigo-500">
                                <h4 className="font-bold text-white text-lg mb-2">🚀 Professional Experience</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <div className="font-bold text-red-400">Huawei</div>
                                        <div className="text-xs text-slate-400">Radio Frequency Engineer & Data Analyst.</div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-indigo-300"><a href="https://hovahdigitalsolutions.com/" target="_blank" className="hover:text-indigo-400 hover:underline transition">Hovah Digital Solutions</a></div>
                                        <div className="text-xs text-slate-300 mt-1">Trusted by <a href="https://leica-store.my/" target="_blank" className="text-white font-bold hover:text-indigo-400 hover:underline transition">Leica Malaysia</a> & <a href="https://hlfcooling.com.my/" target="_blank" className="text-white font-bold hover:text-indigo-400 hover:underline transition">HLF Cooling</a>.</div>
                                        <div className="text-xs text-slate-400">Building Apps & Websites.</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-green-500">
                                <h4 className="font-bold text-white text-lg mb-2">👨‍🏫 Teaching & Speaking</h4>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="bio-tag bg-green-900/40 text-green-300">CodingBar</span>
                                    <span className="bio-tag bg-green-900/40 text-green-300">Chumbaka</span>
                                    <a href="https://luma.com/q1ucw5hv" target="_blank" className="bio-tag bg-emerald-900/40 text-emerald-300 hover:bg-emerald-800/40 transition">Supabase KL #1</a>
                                    <a href="https://www.uxhmac.com/" target="_blank" className="bio-tag bg-red-900/40 text-red-300 hover:bg-red-800/40 transition">HMS Core x UMPSA</a>
                                </div>
                                <div className="text-xs">✍️ Writes blogs about Technology/AI/Engineering at <a href="http://hovahyii.vercel.app/blog" target="_blank" className="text-indigo-400 hover:underline font-mono">hovahyii.vercel.app/blog</a></div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-yellow-500">
                                <h4 className="font-bold text-white text-lg mb-2">🎓 Titles & Certifications</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bio-tag bg-slate-700 text-white border border-slate-500">MSc (Telecom/AI)</span>
                                    <span className="bio-tag bg-slate-700 text-white border border-slate-500">Eng. Technologist (BEM)</span>
                                    <span className="bio-tag bg-slate-700 text-white border border-slate-500">Leftenan Muda</span>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="bio-tag bg-red-900/30 text-red-300">Huawei Intermediate Certified Data Analyst</span>
                                    <span className="bio-tag bg-red-900/30 text-red-300">HarmonyOS Developer</span>
                                </div>
                            </div>
                            <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-purple-500">
                                <h4 className="font-bold text-white text-lg mb-2">🏆 Awards</h4>
                                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                                    <div>• CITREX &apos;24 Best of Best</div>
                                    <div>• AppGallery &apos;24 1st RU</div>
                                    <div>• Huawei ICT &apos;24 (Cloud) National 3rd</div>
                                    <div>• PSM &apos;25 Best Innovation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 3: Agenda */}
            <section className="slide" data-step="3">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-white">Today&apos;s Agenda</h2>
                    <div className="space-y-0">
                        <div className="timeline-item"><div className="timeline-dot"></div><div className="flex items-start gap-4"><div className="w-32 font-mono text-indigo-400 font-bold">2:00 PM</div><div><h3 className="text-xl font-bold text-white">Phase 1: Foundations</h3><p className="text-slate-400 text-sm mt-1">Setup, Config, Core Workflow.</p></div></div></div>
                        <div className="timeline-item"><div className="timeline-dot bg-purple-500 border-purple-900"></div><div className="flex items-start gap-4"><div className="w-32 font-mono text-purple-400 font-bold">3:00 PM</div><div><h3 className="text-xl font-bold text-white">Phase 2: Branching & Collaboration</h3><p className="text-slate-400 text-sm mt-1">Branches, Merging, PRs, GitHub Ecosystem.</p></div></div></div>
                        <div className="timeline-item border-none"><div className="timeline-dot bg-amber-500 border-amber-900"></div><div className="flex items-start gap-4"><div className="w-32 font-mono text-amber-400 font-bold">4:00 PM</div><div><h3 className="text-xl font-bold text-white">🏁 GIT RACE 2025</h3><p className="text-slate-400 text-sm mt-1">Live coding challenge! <a href="https://hovahyii.github.io/git-race-2025/git_live_leaderboard.html" target="_blank" className="text-amber-400 hover:underline">View Leaderboard →</a></p></div></div></div>
                    </div>
                </div>
            </section>

            {/* SLIDE 4: Origin Story */}
            <section className="slide" data-step="4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-white">The Origin Story (2005)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg" alt="Linus Torvalds" className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition duration-500 w-64 mx-auto mb-4 border-4 border-slate-700" />
                            <p className="text-center text-slate-400 italic">Linus Torvalds</p>
                        </div>
                        <div className="space-y-6 text-lg text-slate-300">
                            <p><strong>Who?</strong> Created by Linus Torvalds, the creator of Linux.</p>
                            <p><strong>Why?</strong> His proprietary tool (BitKeeper) revoked his license.</p>
                            <p><strong>The Legend:</strong> He disappeared for a weekend and wrote Git from scratch.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 5: The Problem */}
            <section className="slide" data-step="5">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-indigo-400">The Problem: &quot;File Chaos&quot;</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4 text-xl text-slate-300">
                            <p>Before Git, we managed versions by copying folders.</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                                <li>Project_Final</li>
                                <li>Project_Final_New</li>
                                <li>Project_Final_PLEASE_WORK</li>
                            </ul>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                            <h3 className="text-2xl font-bold mb-4">Git Solves This</h3>
                            <p className="text-lg">Git is a <span className="highlight">Time Machine</span>.</p>
                            <p className="mt-2 text-slate-400">It takes snapshots of your entire project.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 6: Git vs GitHub */}
            <section className="slide" data-step="6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12">Git vs. GitHub</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-slate-800 p-8 rounded-xl border-t-4 border-orange-500">
                            <h3 className="text-3xl font-bold mb-4">Git</h3>
                            <ul className="space-y-4 text-lg">
                                <li>📍 **Local** (On your computer)</li>
                                <li>🔧 The Tool / Engine</li>
                                <li>🚫 No Internet needed</li>
                            </ul>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-xl border-t-4 border-purple-500">
                            <h3 className="text-3xl font-bold mb-4">GitHub</h3>
                            <ul className="space-y-4 text-lg">
                                <li>☁️ **Remote** (In the Cloud)</li>
                                <li>🤝 The Social Network</li>
                                <li>🌐 Needs Internet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 7: Tooling */}
            <section className="slide" data-step="7">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8">The Tooling Landscape</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="os-card border-slate-600">
                            <div className="text-4xl mb-4">⌨️</div>
                            <h3 className="text-xl font-bold text-white mb-2">The CLI</h3>
                            <p className="text-sm text-slate-400">Git Bash, Zsh.</p>
                        </div>
                        <div className="os-card border-slate-600">
                            <div className="text-4xl mb-4">🖱️</div>
                            <h3 className="text-xl font-bold text-white mb-2">GUI Apps</h3>
                            <p className="text-sm text-slate-400">GitHub Desktop, Sourcetree.</p>
                        </div>
                        <div className="os-card border-indigo-500 bg-indigo-900/10">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold text-indigo-300 mb-2">IDE (VS Code)</h3>
                            <p className="text-sm text-slate-400">The Modern Way.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 8: Installation */}
            <section className="slide" data-step="8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6 text-emerald-400">Installation Check</h2>
                    <p className="text-xl mb-8">Run: <code className="bg-slate-800 px-2 py-1 rounded">git --version</code></p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30">
                            <h3 className="text-2xl font-bold mb-4 text-blue-300">Windows</h3>
                            <p className="text-sm text-slate-300">Download <strong>Git Bash</strong> from git-scm.com.</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
                            <h3 className="text-2xl font-bold mb-4 text-white">macOS</h3>
                            <code className="text-xs">xcode-select --install</code>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
                            <h3 className="text-2xl font-bold mb-4 text-yellow-200">Linux</h3>
                            <code className="text-xs">sudo apt-get install git</code>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 9: Config */}
            <section className="slide" data-step="9">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6 text-indigo-400">Configuration</h2>
                    <p className="text-xl mb-8">Tell Git who you are.</p>
                    <div className="code-block text-xl">
                        $ git config --global user.name &quot;Your Name&quot;<br />
                        $ git config --global user.email &quot;you@email.com&quot;
                    </div>
                </div>
            </section>

            {/* SLIDE 10: 3 Stages - Interactive Simulator */}
            <section className="slide" data-step="10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-bold">Interactive Workflow Simulator</h2>
                        <button onClick={resetSim} className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded transition border border-slate-600">Reset Demo</button>
                    </div>

                    {/* Control Panel */}
                    <div className="p-3 bg-slate-800 rounded-t-xl border border-slate-700 flex flex-wrap gap-3 justify-center">
                        <button onClick={() => simAction('create')} className="bg-slate-700 border border-slate-600 shadow-sm px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-600 active:scale-95 transition flex items-center gap-2">
                            <span className="text-emerald-400">✚</span> 1. Create File
                        </button>
                        <button onClick={() => simAction('add')} className="bg-indigo-600 text-white shadow-md px-3 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 active:scale-95 transition font-mono">
                            2. git add
                        </button>
                        <button onClick={() => simAction('commit')} className="bg-emerald-600 text-white shadow-md px-3 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 active:scale-95 transition font-mono">
                            3. git commit
                        </button>
                        <button onClick={() => simAction('push')} className={`${isPushed ? 'bg-purple-800' : 'bg-purple-600'} text-white shadow-md px-3 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 active:scale-95 transition font-mono flex items-center gap-1`}>
                            4. git push {isPushed && '✓'}
                        </button>
                        <div className="w-px h-8 bg-slate-600 mx-1"></div>
                        <button onClick={() => simAction('modify')} className="bg-slate-700 border border-slate-600 shadow-sm px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-600 active:scale-95 transition flex items-center gap-2">
                            <span className="text-amber-400">✎</span> Edit File
                        </button>
                    </div>

                    {/* 3-Zone Visualization */}
                    <div className="grid grid-cols-3 gap-4 p-4 bg-slate-900/50 border-x border-slate-700">
                        {/* Zone 1: Working Directory */}
                        <div className={`border-2 border-dashed rounded-xl p-4 min-h-[200px] flex flex-col items-center transition-all ${getTokenZone() === 'working' ? 'border-amber-500 bg-amber-500/10' : 'border-slate-600 bg-slate-800/50'}`}>
                            <div className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-1">Working Directory</div>
                            <div className="text-center text-slate-500 text-[10px] mb-4">Files are &quot;Untracked&quot; or &quot;Modified&quot;</div>
                            {getTokenZone() === 'working' && (
                                <div className={`w-28 h-14 ${getTokenColor()} shadow-lg border-2 rounded-lg flex items-center justify-center gap-2 mt-auto mb-4 animate-pulse`}>
                                    <span className="text-xl">📄</span>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-slate-700">script.js</span>
                                        <span className={`text-[10px] uppercase font-bold ${getStatusText().color}`}>{getStatusText().text}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Zone 2: Staging Area */}
                        <div className={`border-2 border-dashed rounded-xl p-4 min-h-[200px] flex flex-col items-center transition-all ${getTokenZone() === 'staging' ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-600 bg-slate-800/50'}`}>
                            <div className="text-indigo-400 font-bold uppercase tracking-wider text-xs mb-1">Staging Area</div>
                            <div className="text-center text-slate-500 text-[10px] mb-4">The &quot;Shopping Cart&quot;</div>
                            {getTokenZone() === 'staging' && (
                                <div className={`w-28 h-14 ${getTokenColor()} shadow-lg border-2 rounded-lg flex items-center justify-center gap-2 mt-auto mb-4 animate-pulse`}>
                                    <span className="text-xl">📄</span>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-slate-700">script.js</span>
                                        <span className={`text-[10px] uppercase font-bold ${getStatusText().color}`}>{getStatusText().text}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Zone 3: Repository */}
                        <div className={`border-2 rounded-xl p-4 min-h-[200px] flex flex-col items-center transition-all ${getTokenZone() === 'repo' ? 'border-emerald-500 bg-emerald-500/10' : 'border-slate-600 bg-slate-800/50'}`}>
                            <div className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-1">Repository</div>
                            <div className="text-center text-slate-500 text-[10px] mb-2">Permanent History</div>
                            {getTokenZone() === 'repo' && (
                                <div className={`w-28 h-14 ${getTokenColor()} shadow-lg border-2 rounded-lg flex items-center justify-center gap-2 mb-2`}>
                                    <span className="text-xl">📄</span>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-slate-700">script.js</span>
                                        <span className={`text-[10px] uppercase font-bold ${getStatusText().color}`}>{getStatusText().text}</span>
                                    </div>
                                </div>
                            )}
                            {/* Commit Stack */}
                            <div className="w-full mt-auto flex flex-col-reverse gap-1">
                                {commits.map((num) => (
                                    <div key={num} className="w-full h-6 bg-slate-600 rounded border border-slate-500 text-[10px] flex items-center justify-center text-slate-300">
                                        Commit #{num}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Console Log */}
                    <div className="bg-black text-green-400 font-mono text-xs p-3 h-24 overflow-y-auto rounded-b-xl border border-t-0 border-slate-700">
                        {consoleLog.map((log, i) => (
                            <div key={i} className={
                                log.color === 'red' ? 'text-red-400' :
                                    log.color === 'green' ? 'text-emerald-400' :
                                        log.color === 'yellow' ? 'text-amber-400' :
                                            log.color === 'white' ? 'text-white' : 'text-slate-400'
                            }>{log.text}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SLIDE 11: Commands */}
            <section className="slide" data-step="11">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-emerald-400">The &quot;Save&quot; Commands</h2>
                    <div className="space-y-6">
                        <div><h3 className="text-2xl font-bold">1. Check Status</h3><div className="code-block">$ git status</div></div>
                        <div><h3 className="text-2xl font-bold">2. Add to Staging</h3><div className="code-block">$ git add index.html</div></div>
                        <div><h3 className="text-2xl font-bold">3. Commit</h3><div className="code-block">$ git commit -m &quot;Added nav&quot;</div></div>
                    </div>
                </div>
            </section>

            {/* SLIDE 12: Best Practices */}
            <section className="slide" data-step="12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6">Best Practices</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-emerald-400 font-bold mb-4">Commit Messages</h3>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li>✅ &quot;Fix login button&quot;</li>
                                <li>❌ &quot;fixed stuff&quot;</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-orange-400 font-bold mb-4">.gitignore</h3>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li>🚫 node_modules</li>
                                <li>🚫 .env (API Keys)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 13: Interactive Branching Visualizer */}
            <section className="slide" data-step="13">
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-bold text-purple-400">Interactive Branching</h2>
                        <div className="flex items-center gap-3">
                            <div className={`px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2 ${activeBranch === 'main' ? 'bg-blue-500/20 text-blue-300 border border-blue-500' : 'bg-purple-500/20 text-purple-300 border border-purple-500'}`}>
                                <span className={`w-2 h-2 rounded-full ${activeBranch === 'main' ? 'bg-blue-400' : 'bg-purple-400'}`}></span>
                                Current: {activeBranch === 'main' ? 'Main' : 'Feature'}
                            </div>
                            <button onClick={resetBranch} className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded transition border border-slate-600">Reset</button>
                        </div>
                    </div>

                    {/* Branch Visualization */}
                    <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 mb-4">
                        {/* Main Branch */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-20 text-right text-sm text-blue-400 font-bold">Main</div>
                            <div className="flex-1 flex items-center gap-1 relative h-12">
                                <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                                    <div className="h-1 bg-blue-600 flex-1"></div>
                                </div>
                                {mainCommits.map((commit, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-blue-600 border-4 border-slate-900 flex items-center justify-center text-[10px] font-bold z-10 relative">
                                        {commit}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Connector Lines */}
                        {featureCommits.length > 0 && (
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-20"></div>
                                <div className="flex-1 relative h-6">
                                    <div className="absolute left-[60px] top-0 w-0.5 h-full bg-slate-500 border-dashed"></div>
                                    {isMerged && <div className="absolute right-[20px] top-0 w-0.5 h-full bg-slate-500 border-dashed"></div>}
                                </div>
                            </div>
                        )}

                        {/* Feature Branch */}
                        <div className={`flex items-center gap-2 transition-opacity ${featureCommits.length > 0 ? 'opacity-100' : 'opacity-30'}`}>
                            <div className="w-20 text-right text-sm text-purple-400 font-bold">Feature</div>
                            <div className="flex-1 flex items-center gap-1 relative h-12">
                                {featureCommits.length > 0 && (
                                    <>
                                        <div className="absolute inset-y-0 left-[60px] right-0 flex items-center">
                                            <div className={`h-1 bg-purple-600 flex-1 ${isMerged ? 'opacity-50' : ''}`}></div>
                                        </div>
                                        <div className="w-[60px]"></div>
                                        {featureCommits.map((commit, i) => (
                                            <div key={i} className={`w-10 h-10 rounded-full bg-purple-600 border-4 border-slate-900 flex items-center justify-center text-[10px] font-bold z-10 relative ${isMerged ? 'opacity-50' : ''}`}>
                                                {commit}
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-slate-500 text-center mb-4">
                        🔵 Blue = Main Branch | 🟣 Purple = Feature Branch
                    </p>

                    {/* Control Buttons */}
                    <div className="flex justify-center gap-4">
                        <button onClick={() => branchAction('commit')} className="bg-slate-700 border border-slate-600 shadow-sm px-4 py-3 rounded-lg font-semibold hover:bg-slate-600 active:scale-95 transition flex items-center gap-2">
                            <span className="bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded text-xs font-mono">git commit</span>
                            Save Snapshot
                        </button>
                        <button onClick={() => branchAction('checkout')} disabled={activeBranch === 'feature' || isMerged} className="bg-slate-700 border border-slate-600 shadow-sm px-4 py-3 rounded-lg font-semibold hover:bg-slate-600 active:scale-95 transition flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed">
                            <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs font-mono">git checkout -b</span>
                            New Branch
                        </button>
                        <button onClick={() => branchAction('merge')} disabled={activeBranch === 'main' || featureCommits.length === 0} className="bg-slate-700 border border-slate-600 shadow-sm px-4 py-3 rounded-lg font-semibold hover:bg-slate-600 active:scale-95 transition flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed">
                            <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-xs font-mono">git merge</span>
                            Merge & Finish
                        </button>
                    </div>
                </div>
            </section>

            {/* SLIDE 14: Issues & Projects */}
            <section className="slide" data-step="14">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Mastering Issues & Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="feature-card border-l-4 border-green-500">
                            <span className="feature-icon">📝</span>
                            <h3 className="text-xl font-bold text-white mb-2">GitHub Issues</h3>
                            <p className="text-sm text-slate-400 mb-4">The core of project management.</p>
                            <ul className="text-xs text-slate-300 space-y-2">
                                <li>🏷️ <strong>Labels:</strong> &quot;bug&quot;, &quot;enhancement&quot;</li>
                                <li>👤 <strong>Assignees:</strong> Who is working on it?</li>
                                <li>📅 <strong>Milestones:</strong> &quot;v1.0 Release&quot;</li>
                            </ul>
                        </div>
                        <div className="feature-card border-l-4 border-blue-500">
                            <span className="feature-icon">📋</span>
                            <h3 className="text-xl font-bold text-white mb-2">GitHub Projects</h3>
                            <p className="text-sm text-slate-400 mb-4">Kanban Boards (like Trello).</p>
                            <ul className="text-xs text-slate-300 space-y-2">
                                <li>⬜ <strong>Todo:</strong> Backlog of tasks</li>
                                <li>🚧 <strong>In Progress:</strong> Active work</li>
                                <li>✅ <strong>Done:</strong> Merged PRs</li>
                            </ul>
                        </div>
                        <div className="feature-card border-l-4 border-purple-500">
                            <span className="feature-icon">📚</span>
                            <h3 className="text-xl font-bold text-white mb-2">Wiki</h3>
                            <p className="text-sm text-slate-400 mb-4">Long-form Documentation.</p>
                            <ul className="text-xs text-slate-300 space-y-2">
                                <li>📖 How to install</li>
                                <li>📐 API References</li>
                                <li>🤝 Contributing Guidelines</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 15: Security & Ops */}
            <section className="slide" data-step="15">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center text-red-400">Security & Operations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="feature-card border-red-500/30">
                            <span className="feature-icon">🛡️</span>
                            <h3 className="text-xl font-bold text-white mb-2">Security Insights</h3>
                            <p className="text-sm text-slate-400"><strong>Dependabot:</strong> Scans dependencies for vulnerabilities. <strong>Secret Scanning:</strong> Detects leaked API keys.</p>
                        </div>
                        <div className="feature-card border-purple-500/30">
                            <span className="feature-icon">🔗</span>
                            <h3 className="text-xl font-bold text-white mb-2">Webhooks</h3>
                            <p className="text-sm text-slate-400">Real-time integrations. Send a message to Discord/Slack whenever code is pushed.</p>
                        </div>
                        <div className="feature-card border-yellow-500/30">
                            <span className="feature-icon">🔒</span>
                            <h3 className="text-xl font-bold text-white mb-2">Branch Protection</h3>
                            <p className="text-sm text-slate-400">Rules that prevent force-pushing to Main or requiring 2 approvals before merging.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 16: Automation (Actions) */}
            <section className="slide" data-step="16">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-blue-400">GitHub Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-xl text-slate-300 mb-6"><strong>CI/CD built-in.</strong> Automatically test, build, and deploy your code on every push.</p>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li>✅ Run Unit Tests</li>
                                <li>🚀 Deploy to Vercel/AWS</li>
                                <li>🧹 Linter checks</li>
                            </ul>
                        </div>
                        <div className="code-block text-xs">
                            name: Build & Deploy<br />
                            on: [push]<br />
                            jobs:<br />
                            &nbsp;&nbsp;build:<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;steps:<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- uses: actions/checkout@v2<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- run: npm install<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- run: npm test
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 17: Pull Requests */}
            <section className="slide" data-step="17">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6 text-orange-400">The Pull Request (PR)</h2>
                    <p className="text-xl mb-4 text-slate-300">It&apos;s not just merging. It&apos;s a <strong>Code Review</strong>.</p>

                    <div className="bg-slate-800 p-6 rounded-xl border border-indigo-500 mb-8">
                        <h3 className="text-white font-bold mb-4">🏆 Pro Tip: The Magic Link</h3>
                        <p className="text-sm text-slate-300 mb-4">Automatically close issues when code is merged.</p>
                        <div className="bg-black p-4 rounded font-mono text-sm border-l-4 border-green-500">
                            <span className="text-slate-500"># In your PR Description:</span><br />
                            This PR updates the login validation logic.<br /><br />
                            <span className="text-green-400 font-bold">Closes #123</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-slate-800 p-4 rounded text-sm">
                            <strong className="text-emerald-400">✅ Code Review</strong><br />
                            Teammates suggest edits.
                        </div>
                        <div className="bg-slate-800 p-4 rounded text-sm">
                            <strong className="text-red-400">😱 Conflicts</strong><br />
                            Two people edited the same line.
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 18: Conflict Example */}
            <section className="slide" data-step="18">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6">Anatomy of a Conflict</h2>
                    <p className="text-slate-400 mb-6">When Git panics, it adds these markers to your file:</p>
                    <div className="bg-black p-6 rounded-xl border border-slate-700 font-mono text-lg leading-relaxed">
                        <span className="text-yellow-500">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span><br />
                        <span className="text-green-400">&lt;div class=&quot;header&quot;&gt;Welcome&lt;/div&gt;</span> <span className="text-slate-500">// Your Code</span><br />
                        <span className="text-yellow-500">=======</span><br />
                        <span className="text-blue-400">&lt;div class=&quot;header&quot;&gt;Hello World&lt;/div&gt;</span> <span className="text-slate-500">// Incoming Code</span><br />
                        <span className="text-yellow-500">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-branch</span>
                    </div>
                    <p className="mt-6 text-center text-slate-300"><strong>Solution:</strong> Delete the markers and pick the correct line.</p>
                </div>
            </section>

            {/* SLIDE 19: AI & Git */}
            <section className="slide" data-step="19">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center">
                        <span className="ai-badge">✨ New Era</span>
                    </div>
                    <h2 className="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Git in the Age of AI</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                            <h3 className="text-xl font-bold text-slate-300 mb-4">👴 The Old Way</h3>
                            <ul className="space-y-3 text-slate-400">
                                <li>• Memorizing 50+ commands</li>
                                <li>• Googling &quot;How to undo git commit&quot;</li>
                            </ul>
                        </div>
                        <div className="bg-purple-900/20 p-6 rounded-2xl border border-purple-500/50">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">🤖 The AI Way</h3>
                            <ul className="space-y-3 text-slate-200">
                                <li>• &quot;Hey Copilot, undo my last commit&quot;</li>
                                <li>• AI auto-generates commit messages</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 20: AI Tools */}
            <section className="slide" data-step="20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-white">AI Tools for Beginners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
                            <div className="text-3xl mb-4">🖥️</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-400">Copilot CLI</h3>
                            <p className="text-sm text-slate-400">Translates English to Git commands.</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
                            <div className="text-3xl mb-4">🧠</div>
                            <h3 className="font-bold text-xl mb-2 text-emerald-400">ChatGPT</h3>
                            <p className="text-sm text-slate-400">The Universal Tutor.</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
                            <div className="text-3xl mb-4">📝</div>
                            <h3 className="font-bold text-xl mb-2 text-purple-400">Cursor / VS Code</h3>
                            <p className="text-sm text-slate-400">Auto-Write Commits.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 21: Bonus Student Pack */}
            <section className="slide" data-step="21">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-8 text-white">🎁 Bonus: Student Pack</h2>
                    <p className="text-2xl text-slate-300 mb-12">Get <strong>$200k+</strong> worth of developer tools for FREE.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-slate-800 p-6 rounded-xl border border-indigo-500/50">
                            <div className="text-4xl mb-2">🤖</div>
                            <h3 className="font-bold text-white">GitHub Copilot</h3>
                            <p className="text-sm text-slate-400">Free AI Pair Programmer.</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl border border-indigo-500/50">
                            <div className="text-4xl mb-2">🌐</div>
                            <h3 className="font-bold text-white">Free Domains</h3>
                            <p className="text-sm text-slate-400">Namecheap & .tech domains.</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl border border-indigo-500/50">
                            <div className="text-4xl mb-2">☁️</div>
                            <h3 className="font-bold text-white">Cloud Credits</h3>
                            <p className="text-sm text-slate-400">Azure & DigitalOcean.</p>
                        </div>
                    </div>

                    <div className="mt-8 p-4 border border-yellow-500/50 bg-yellow-500/10 rounded-lg max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">🏆 Want the GitHub PRO Badge?</h3>
                        <p className="text-sm text-slate-300 mb-4">Read my step-by-step guide to get verified instantly.</p>
                        <a href="https://hovah-blog.vercel.app/blogs/step-by-step-guide-to-get-pro-badge-in-github" target="_blank" className="inline-block bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition transform hover:scale-105">Read Guide</a>
                    </div>
                </div>
            </section>

            {/* SLIDE 22: Final Summary */}
            <section className="slide" data-step="22">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6">Workshop Complete</h2>
                    <p className="text-2xl text-slate-300 mb-8">You now have the power of Time Travel (Git) and Intelligence (AI).</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {/* Git Race 2025 Card */}
                        <div className="p-6 bg-amber-900/20 border border-amber-500/50 rounded-xl">
                            <div className="text-4xl mb-3">🏁</div>
                            <h3 className="text-2xl font-bold text-amber-400 mb-3">GIT RACE 2025</h3>
                            <p className="text-slate-300 mb-4 text-sm">Time to put your skills to the test!</p>
                            <a
                                href="https://hovahyii.github.io/git-race-2025/git_live_leaderboard.html"
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-black font-bold py-3 px-6 rounded-full transition transform hover:scale-105"
                            >
                                🚀 Start Challenge
                            </a>
                        </div>

                        {/* Q&A Card */}
                        <div className="p-6 bg-blue-900/20 border border-blue-500/50 rounded-xl">
                            <div className="text-4xl mb-3">💬</div>
                            <h3 className="text-2xl font-bold text-blue-400 mb-3">Q & A Session</h3>
                            <p className="text-slate-300 mb-4 text-sm">Have questions? Join the discussion!</p>
                            <a
                                href="https://github.com/hovahyii/git-race-2025/discussions/1"
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
                                GitHub Discussions
                            </a>
                        </div>

                        {/* Learning Materials Card */}
                        <div className="p-6 bg-green-900/20 border border-green-500/50 rounded-xl">
                            <div className="text-4xl mb-3">📚</div>
                            <h3 className="text-2xl font-bold text-green-400 mb-3">Materials</h3>
                            <p className="text-slate-300 mb-4 text-sm">Continue learning Git & GitHub!</p>
                            <a
                                href="https://roadmap.sh/git-github"
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105"
                            >
                                🗺️ Roadmap.sh
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div id="progress-bar"></div>

            {/* Mobile Navigation Controls */}
            <div className="mobile-nav">
                <button id="prev-btn" className="mobile-nav-btn" aria-label="Previous slide">←</button>
                <span id="slide-counter" className="slide-counter">1 / 22</span>
                <button id="next-btn" className="mobile-nav-btn" aria-label="Next slide">→</button>
            </div>

            {/* Footer */}
            <div className="slide-footer">
                This slide deck was generated with ✨ Gemini Pro | Prepared by <a href="https://hovahyii.vercel.app" target="_blank">Hovah Yii</a>
            </div>
        </>
    );
}
