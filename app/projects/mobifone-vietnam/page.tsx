import type { Metadata } from 'next';
    import Link from 'next/link';
    import {
      ArrowLeft,
      ArrowRight,
      Award,
      BookOpen,
      Building2,
      CheckCircle2,
      ClipboardCheck,
      Clock3,
      ExternalLink,
      FileText,
      Gauge,
      Handshake,
      Map,
      Plane,
      RadioTower,
      Route,
      ShieldAlert,
      Signal,
      Siren,
      Store,
      Target,
      TrendingUp,
      Wrench,
      type LucideIcon,
    } from 'lucide-react';
    
    export const metadata: Metadata = {
      title: 'MobiFone Vietnam — RF Drive Test Case Study | Hovah Yii',
      description:
        'RF drive-test and network-assurance case study for the MobiFone (MBF) RAN 2026 project in Hanoi, Vietnam: 14 VIP routes benchmarked in a single day, airport IBC verification across 4G/5G, VIP complaint handling, and an intern-ready handover.',
      keywords: [
        'MobiFone',
        'MBF RAN 2026',
        'drive test',
        'RF engineer',
        'Vietnam',
        'Hanoi',
        'LTE',
        '5G NR',
        'benchmark',
        'IBC',
        'Huawei',
      ],
      openGraph: {
        title: 'MobiFone Vietnam — RF Drive Test Case Study',
        description:
          '14 VIP routes in one day, airport IBC turnaround verification, VIP complaint handling, and a clean intern-ready handover.',
        url: 'https://hovahyii.vercel.app/projects/mobifone-vietnam',
        siteName: 'Hovah Yii',
        locale: 'en_US',
        type: 'article',
      },
    };
    
    const navigationItems = [
      ['overview', 'Overview'],
      ['role', 'My role'],
      ['scope', 'Scope'],
      ['timeline', 'Timeline'],
      ['results', 'Achievements'],
      ['tools', 'Tool stack'],
      ['deliverables', 'Deliverables'],
      ['handover', 'Handover'],
    ];
    
    function SectionHeading({
      icon: Icon,
      eyebrow,
      title,
      description,
    }: {
      icon: LucideIcon;
      eyebrow: string;
      title: string;
      description?: string;
    }) {
      return (
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            <Icon className="h-4 w-4" aria-hidden="true" />
            {eyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
          {description && (
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">{description}</p>
          )}
        </div>
      );
    }
    
    const scopeCards: [LucideIcon, string, string][] = [
      [Route, 'Benchmark routes', 'Nine benchmark routes across the Hanoi / North region — FTP DL/UL and MOS, pre- and post-optimization, compared against competing networks.'],
      [Target, 'VIP route assurance', 'Fourteen newly added VIP routes benchmarked, plus VIP-area retests after optimization work.'],
      [Plane, 'Airport IBC testing', 'Noi Bai International Airport T1 and T2: indoor walk tests, static CQT, UL-complaint investigation, and post-optimization verification on 4G and 5G.'],
      [Store, 'Retail store testing', 'Ookla 5G speed tests and BasicInfo evidence at MBF retail stores, including indoor vs outdoor comparison.'],
      [Siren, 'VIP complaint response', 'Immediate drive tests for VIP complaints (e.g. Riverside cluster) and customer-facing reports with analysis and optimization suggestions.'],
      [Wrench, 'Issue pipeline tracking', 'Cross-feeder and hardware issue tracking alongside the delivery team — from issuance through resolution.'],
    ];
    
    const timeline = [
      ['11 Jul 2026', 'NE Sitename Automapper', 'The in-house tool that automates bulk MML sitename replacement is awarded by the Southeast Asia Delivery & Service Business Department — a reusable delivery tool asset for future projects.'],
      ['13 Aug 2026', 'MBF retail store, Ba La', 'First indoor + outdoor 5G speed tests; a fake-5G indicator issue was captured and escalated to the optimization team.'],
      ['16 Aug 2026', 'Noi Bai Airport T2', 'UL complaint investigation at Shop 1: 4G FTP UL trials, 4G/5G idle walk tests, VUE trace captured; interfering antenna located.'],
      ['19-20 Aug 2026', 'MBF stores — Ba La, Dien Bien Phu', 'Speed-test follow-up rounds; results combined into a single store-testing report.'],
      ['24 Aug 2026', '14 VIP routes', 'All fourteen newly added VIP routes benchmarked in a single field day.'],
      ['25 Aug 2026', 'Noi Bai Airport T1', 'Post-optimization IBC walk tests on floors 1-3, both 4G and 5G — indoor coverage confirmed improved.'],
      ['26 Aug 2026', 'VIP Cluster 21, Riverside', 'Immediate DT for a VIP complaint, coordinated with local MBF staff for restricted-area access.'],
      ['27-28 Aug 2026', 'VIP residential area', 'Complaint report revised from v1.0 to v3.0 — coverage analysis and optimization suggestions added before customer delivery.'],
      ['29-31 Aug 2026', 'Benchmark + VIP 9 Road', 'Pre/post-optimization benchmark runs and the three-operator VIP 9 Road benchmark (Viettel, MobiFone, Vinaphone).'],
      ['01 Sep 2026', 'Project handover', 'Complete handover package delivered: field guide, handover document, and source files — the team took over with zero gaps.'],
    ];
    
    const achievements: [LucideIcon, string, string, string][] = [
      [Award, 'NE Sitename Automapper — SEA award', 'Built an in-house tool that automates sitename replacement across bulk MML scripts and generates a formatted Excel report — highlight marks and navigable index in one click. Recognized by the Southeast Asia Delivery & Service Business Department (11 Jul 2026) as a reusable delivery tool asset for future projects.', 'Jul 2026'],
      [TrendingUp, 'Airport T1 IBC turnaround verified', 'After optimization work, walked all three public floors of Noi Bai T1 on 4G and 5G and confirmed a significant improvement in indoor coverage — closing the loop on the original complaint.', 'Post-DT · 25 Aug 2026'],
      [Gauge, '14 VIP routes benchmarked in one day', 'Completed benchmark testing of all fourteen newly added VIP routes in a single field day, keeping the assurance schedule on track.', '24 Aug 2026'],
      [Siren, 'Same-day VIP complaint response', 'Ran an immediate drive test for a Riverside (Cluster 21) VIP complaint the same day it was raised, and delivered a customer-ready report including root-cause analysis and optimization suggestions.', '26-28 Aug 2026'],
      [Signal, 'Three-operator benchmark reporting', 'Executed the VIP 9 Road benchmark drive test across Viettel, MobiFone and Vinaphone and produced the comparative result report the customer requested.', '29-31 Aug 2026'],
      [ClipboardCheck, '280+ issue pipeline tracked', 'Maintained the cross-feeder and hardware issue pipeline with the delivery team — 283 issues logged and 169 resolved as of 27 Aug 2026.', 'Aug 2026'],
      [Award, 'Intern-ready handover', 'Authored the DT handover document and a public field guide so any intern could pick up the project — handover completed with zero gaps on 1 Sep 2026.', '01 Sep 2026'],
    ];
    
    const tools: [string, string][] = [
      ['NE Sitename Automapper', 'In-house tool — bulk MML sitename replacement + one-click Excel report with highlight marks and navigable index'],
      ['TEMS Investigation', 'Field logging and measurement platform'],
      ['PHU / PHU Assistant Lite', 'Task management, scripts, and log collection'],
      ['Ookla Speedtest', '5G speed-test evidence for store and VIP assurance'],
      ['OsmAnd / Tracklia', 'Route import (KMZ) and position verification'],
      ['VUE Trace', 'Network-side UE trace for deep analysis'],
      ['KMZ route files', 'Approved route masters for every field run'],
    ];
    
    const deliverables = [
      ['Drive Test Summary workbook', 'Consolidated DT results for the 7-16 Aug testing window, per the standard reporting template.'],
      ['Airport T1 indoor walk-test report', 'Post-optimization 4G/5G IBC verification across floors 1-3.'],
      ['MBF retail store speed-test reports', 'Ookla 5G indoor/outdoor results for the Ba La and Dien Bien Phu stores.'],
      ['VIP 9 Road benchmark report', 'Three-operator comparative benchmark result (Viettel / MobiFone / Vinaphone).'],
      ['VIP residential complaint report', 'v1.0 to v3.0, with coverage analysis and optimization suggestions.'],
      ['DT handover document + field guide', 'The public Hanoi drive-test field guide and the internal handover pack.'],
    ];
    
    export default function MobiFoneCaseStudy() {
      return (
        <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
          <header className="border-b border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-950/95">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Hovah Yii
              </Link>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                <RadioTower className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                RF case study
              </div>
            </div>
          </header>
    
          <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.12),transparent_35%)]" />
            <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                <RadioTower className="h-4 w-4" aria-hidden="true" />
                Huawei x MobiFone · RAN 2026 · Hanoi, Vietnam
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                MobiFone Vietnam — drive test &amp; network assurance
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                As RF engineer on the MBF RAN 2026 project, I owned the North-region drive-test scope: benchmark routes,
                VIP assurance, airport indoor coverage, and VIP complaint response — on both LTE 4G and NR 5G — and
                built the award-winning NE Sitename Automapper delivery tool.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#results" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-400">
                  See the achievements <TrendingUp className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link href="/hanoi-drive-test-sharing" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:border-slate-500">
                  Full field guide <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ['14', 'VIP routes · one field day'],
                  ['9', 'benchmark routes'],
                  ['3', 'operators compared'],
                  ['3', 'airport floors post-tested'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                    <dt className="text-xs leading-5 text-slate-400">{label}</dt>
                    <dd className="mt-1 text-xl font-black text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
    
          <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12 lg:py-12">
            <aside className="hidden lg:block">
              <nav aria-label="Case study sections" className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="px-3 pb-3 pt-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400">On this page</p>
                <div className="space-y-1 border-l border-slate-200 pl-2 dark:border-slate-700">
                  {navigationItems.map(([id, label], index) => (
                    <a key={id} href={`#${id}`} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800 dark:text-slate-300 dark:hover:bg-emerald-950 dark:hover:text-emerald-300">
                      <span className="text-[10px] font-black text-slate-400 group-hover:text-emerald-600">{String(index + 1).padStart(2, '0')}</span>
                      {label}
                    </a>
                  ))}
                </div>
                <div className="mt-4 rounded-xl bg-slate-950 p-4 text-xs leading-5 text-slate-300">
                  <strong className="block text-emerald-300">Period</strong>
                  August - September 2026 · Hanoi / North, Vietnam
                </div>
              </nav>
            </aside>
    
            <div className="min-w-0">
              <details className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:hidden">
                <summary className="cursor-pointer font-black">Browse this case study</summary>
                <nav aria-label="Mobile sections" className="mt-4 grid grid-cols-2 gap-2">
                  {navigationItems.map(([id, label]) => (
                    <a key={id} href={`#${id}`} className="rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold dark:bg-slate-950">{label}</a>
                  ))}
                </nav>
              </details>
    
              <section id="overview" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
                <SectionHeading
                  icon={Target}
                  eyebrow="01 · Overview"
                  title="What the project was"
                  description="MobiFone (MBF) is one of Vietnam's major mobile operators. The RAN 2026 project covers radio-access-network delivery and assurance in Hanoi and the North region — keeping benchmark KPIs ahead of the competing networks, and closing VIP and customer complaints fast."
                />
                <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                  {[
                    ['Project', 'MobiFone (MBF) RAN 2026 · Vietnam · Hanoi / North'],
                    ['My scope', 'Drive-test work for the North region, August 2026 onward'],
                    ['Radio layers', 'LTE 4G and NR 5G'],
                    ['Core KPIs', 'RSRP, SINR, PCI, FTP DL/UL throughput, latency, call retainability, MOS'],
                    ['Field evidence', 'Continuous logs (.gen.zip), Ookla speed tests, BasicInfo screenshots, VUE traces'],
                    ['Reporting', 'Standard MBF template — results plus root-cause analysis and optimization suggestions'],
                  ].map(([label, value], index) => (
                    <div key={label} className={`grid gap-1 px-5 py-4 sm:grid-cols-[160px_1fr] ${index % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-900/50'}`}>
                      <dt className="text-sm font-bold text-slate-500 dark:text-slate-400">{label}</dt>
                      <dd className="text-sm leading-6 text-slate-800 dark:text-slate-100">{value}</dd>
                    </div>
                  ))}
                </div>
              </section>
    
              <section id="role" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
                <SectionHeading
                  icon={RadioTower}
                  eyebrow="02 · My role"
                  title="RF engineer, North drive-test scope"
                  description="I planned and executed the field runs end to end: route confirmation, evidence collection, log upload, and reporting support — coordinating with the RF delivery lead, the local MobiFone RF team, and the GSC analysis team."
                />
                <div className="grid gap-5 lg:grid-cols-3">
                  {[
                    [Map, 'Plan the run', 'Confirm the route master, test-case matrix, direction, access, vehicle, and test window before leaving.'],
                    [Signal, 'Collect evidence', 'Maintain continuous logging on 4G/5G; capture throughput, idle behaviour, BasicInfo, speed tests, and traces where needed.'],
                    [CheckCircle2, 'Close the loop', 'Upload logs immediately, flag incomplete items, drive analysis with the GSC team, and track every issue to confirmation.'],
                  ].map(([Icon, title, body]) => {
                    const CardIcon = Icon as LucideIcon;
                    return (
                      <article key={title as string} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                        <CardIcon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                        <h3 className="mt-5 text-lg font-black">{title as string}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body as string}</p>
                      </article>
                    );
                  })}
                </div>
              </section>
    
              <section id="scope" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
                <SectionHeading
                  icon={Building2}
                  eyebrow="03 · Scope"
                  title="Six workstreams, one region"
                />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {scopeCards.map(([Icon, title, body]) => (
                    <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      <h3 className="mt-5 text-lg font-black">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>
                    </article>
                  ))}
                </div>
              </section>
    
              <section id="timeline" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
                <SectionHeading
                  icon={Clock3}
                  eyebrow="04 · Timeline"
                  title="July to September 2026"
                  description="Key project milestones in chronological order — from the tool award to the final drive-test handover."
                />
                <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                  {timeline.map(([date, place, note], index) => (
                    <div key={date + place} className={`grid gap-1 px-5 py-4 md:grid-cols-[130px_190px_1fr] md:gap-4 ${index % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-900/50'}`}>
                      <div className="text-sm font-black text-emerald-700 dark:text-emerald-400">{date}</div>
                      <div className="text-sm font-bold text-slate-700 dark:text-slate-200">{place}</div>
                      <div className="text-sm leading-6 text-slate-600 dark:text-slate-300">{note}</div>
                    </div>
                  ))}
                </div>
              </section>
    
              <section id="results" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
                <SectionHeading
                  icon={TrendingUp}
                  eyebrow="05 · Achievements"
                  title="What I delivered"
                  description="The results the delivery team and the customer measured, plus the handover that kept the project moving after I stepped back from the DT scope."
                />
                <div className="grid gap-5 md:grid-cols-2">
                  {achievements.map(([Icon, title, body, tag]) => (
                    <article key={title} className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm dark:border-emerald-900/60 dark:bg-slate-900">
                      <div className="flex items-start justify-between gap-3">
                        <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">{tag}</span>
                      </div>
                      <h3 className="mt-4 text-lg font-black">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>
                    </article>
                  ))}
                </div>
              </section>
    
              <section id="tools" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
                <SectionHeading
                  icon={Wrench}
                  eyebrow="06 · Tool stack"
                  title="What I worked with"
                />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {tools.map(([name, role]) => (
                    <div key={name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <div className="font-black">{name}</div>
                      <div className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{role}</div>
                    </div>
                  ))}
                </div>
              </section>
    
              <section id="deliverables" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
                <SectionHeading
                  icon={FileText}
                  eyebrow="07 · Deliverables"
                  title="Reports and artifacts"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {deliverables.map(([name, note]) => (
                    <div key={name} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <FileText className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      <div>
                        <div className="text-sm font-black">{name}</div>
                        <div className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
    
              <section id="handover" className="scroll-mt-24 pb-20">
                <SectionHeading
                  icon={Handshake}
                  eyebrow="08 · Handover"
                  title="Left the project stronger than I found it"
                  description="On 1 September 2026 I handed over the full DT scope. Instead of a list of open loose ends, the incoming team got a repeatable system: a public field guide covering workflow, test recipes, route control, reporting rules, and troubleshooting — plus the handover document and source files."
                />
                <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <BookOpen className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <div className="font-black">Hanoi drive-test field guide — public</div>
                    <div className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      The complete intern-ready guide I wrote for this project: runbook, test recipes, route plan, field lessons, and reporting rules.
                    </div>
                  </div>
                  <Link href="/hanoi-drive-test-sharing" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-400">
                    Read the guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link href="/projects/umobile-5g" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-emerald-300">
                    Next case study: U Mobile 5G <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-300">
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
                  </Link>
                </div>
                <p className="mt-10 flex gap-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                  This page is a sanitized public summary. Internal identifiers — group IDs, account IDs, trace IDs, equipment serials, and restricted-site details — are intentionally omitted in line with Huawei and MobiFone information-security rules.
                </p>
              </section>
            </div>
          </div>
    
          <footer className="border-t border-slate-200 py-10 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              MobiFone Vietnam case study · Hovah Yii · <Link href="/" className="font-bold text-emerald-600 hover:underline dark:text-emerald-400">hovahyii.vercel.app</Link>
            </div>
          </footer>
        </div>
      );
    }
    