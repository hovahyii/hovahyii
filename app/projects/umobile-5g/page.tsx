import type { Metadata } from 'next';
    import Link from 'next/link';
    import {
      Activity,
      ArrowLeft,
      ArrowRight,
      CheckCircle2,
      Clock3,
      Database,
      ExternalLink,
      FileText,
      Filter,
      Gauge,
      ListChecks,
      MapPin,
      RadioTower,
      Siren,
      Signal,
      Target,
      TrendingUp,
      Wrench,
      type LucideIcon,
    } from 'lucide-react';
    
    export const metadata: Metadata = {
      title: 'U Mobile 5G — Swap & Mod Traffic Assurance | Hovah Yii',
      description:
        'RF engineering case study for the U Mobile 5G swap & modernization rollout in Malaysia — building the HW-LTE-Traffic-Volume tool: 23 daily monitoring cycles and 46 regional reports that verified LTE traffic migration and closed out the 4G MOD workstream.',
      keywords: [
        'U Mobile',
        '5G',
        'LTE',
        'swap and modernization',
        'traffic monitoring',
        'RF engineer',
        'Malaysia',
        'automation',
        'Huawei',
      ],
      openGraph: {
        title: 'U Mobile 5G — Swap & Mod Traffic Assurance',
        description:
          'Built HW-LTE-Traffic-Volume: 23 daily monitoring cycles, 46 regional reports, and the evidence that closed out the 4G MOD workstream.',
        url: 'https://hovahyii.vercel.app/projects/umobile-5g',
        siteName: 'Hovah Yii',
        locale: 'en_US',
        type: 'article',
      },
    };
    
    const navigationItems = [
      ['overview', 'Overview'],
      ['role', 'My role'],
      ['tool', 'The tool'],
      ['flow', 'How it works'],
      ['timeline', 'Timeline'],
      ['results', 'Achievements'],
      ['tools', 'Tool stack'],
      ['deliverables', 'Deliverables'],
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
    
    const overviewCards: [LucideIcon, string, string][] = [
      [RadioTower, 'Swap & modernization rollout', 'U Mobile is converting and modernizing live 4G sites so users can move onto the new 5G configuration — one site at a time, across the country.'],
      [Signal, 'The measurement problem', 'A site that changes configuration does not prove its users moved. If traffic does not shift, something is wrong — coverage, steering, or the activity itself.'],
      [Target, 'The approach', 'Daily automated traffic-volume monitoring of every activity site, a clear >20% migration rule, and a shared follow-up list owned by the field PICs.'],
    ];
    
    const roleCards: [LucideIcon, string, string][] = [
      [Wrench, 'Built & owned the tool', 'Designed and built HW-LTE-Traffic-Volume end-to-end — the data rules, the filters, and the two regional dashboards.'],
      [Activity, 'Ran the daily cycle', 'Owned the full daily run for ten weeks: 23 monitoring cycles, every report verified before it was posted to the operations channel.'],
      [MapPin, 'Coordinated the field', 'Kept the shared work-site list moving with the regional field PICs (SR, NR, Central, Eastern) — from daily updates to same-day defect action.'],
    ];
    
    const toolCards: [LucideIcon, string, string][] = [
      [Database, 'Input — per-sector LTE traffic volume', 'Sector-level LTE traffic volume for every site in the swap & modernization list, measured before and after each activity.'],
      [Filter, 'Flagging — the >20% rule', 'Sectors whose traffic reduced by more than 20% after the activity are flagged: the reduction is the signal that users have moved to the new configuration. Anomalies — for example a site stuck under optimization while still losing traffic — are flagged separately for action.'],
      [ListChecks, 'False-positive filters', 'Sectors already in the modernization tracker are excluded, and critical sites carrying customer comments are removed, so the daily list only ever contains new, actionable items.'],
      [Gauge, 'Output — two daily dashboards', 'Regional dashboards for SR & NR and for Central & Eastern, posted to the operations channel before the start of the workday, with the shared work-site list kept current by the regional field PICs.'],
    ];
    
    const flowSteps: [LucideIcon, string, string][] = [
      [Database, 'Pull traffic volumes', 'Sector-level LTE traffic volume for the full swap/mod site list — before and after each activity.'],
      [Filter, 'Apply the >20% rule', 'Flag sectors where post-activity traffic reduced by more than 20% — the confirmation that users shifted to the new configuration.'],
      [ListChecks, 'Filter the noise', 'Remove sectors already in the modernization tracker and critical sites with customer comments.'],
      [Gauge, 'Publish two dashboards', 'SR & NR and Central & Eastern dashboards go to the operations channel — every morning, same cadence.'],
      [Wrench, 'Field follow-up', 'Regional PICs update the shared work-site list and action items the same day.'],
    ];
    
    const timeline = [
      ['03 Jun 2026', 'First daily cycle', 'The first two-region report (SR & NR, Central & Eastern) goes out — the daily cadence is established.'],
      ['04 Jun 2026', 'First anomaly caught', 'A site stuck under optimization for 27 days with >20% traffic loss is flagged with the trend evidence and routed for action.'],
      ['08 Jun 2026', 'Reporting tightened', 'Tracker-known sectors are auto-excluded from the daily list — only new, actionable detections are reported from then on.'],
      ['06 Jul 2026', 'COPA80 cleared, COPA90 starts', 'The COPA80 site pool runs out of sites; the tool pivots to COPA90 site inputs as the next wave begins.'],
      ['13 Jul 2026', 'KV 4G MOD closed', 'No more sites for 4G MOD in the KV workstream — regional PICs take over ownership of the remaining regions.'],
      ['05 Aug 2026', 'Final daily cycle', 'The 23rd daily cycle of the swap/mod phase is delivered, closing the monitoring window.'],
      ['27 Aug 2026', 'Field defect triage', 'A sector-swap direction defect is raised through the operations channel and resolved with the field team — the channel keeps working past the swap/mod window.'],
    ];
    
    const achievements: [LucideIcon, string, string, string][] = [
      [Gauge, '23 daily monitoring cycles', 'Built the tool and ran the full daily cycle from 3 Jun to 5 Aug 2026 — 46 regional reports across two regions, day after day.', 'Jun - Aug 2026'],
      [Activity, 'Automation over manual checks', 'Replaced manual before/after traffic verification with one automated run: pull, flag, filter, publish — delivered before the start of the workday.', 'From 03 Jun 2026'],
      [CheckCircle2, '4G MOD workstream closed', 'The daily migration evidence underpinned the KV 4G MOD workstream reaching "no more sites" on 13 Jul 2026.', '13 Jul 2026'],
      [Siren, 'Same-day anomaly detection', 'Caught a 27-day optimization stall with >20% traffic loss (4 Jun) and a sector-swap direction defect (27 Aug) — both routed for same-day action.', 'Jun & Aug 2026'],
      [MapPin, 'Two-region coverage', 'Daily dashboards for SR & NR and Central & Eastern kept every regional field PIC working from the same list.', 'Daily cadence'],
      [FileText, 'Actionable output, not noise', 'Tracker and comment filters kept the daily list to genuinely new items — the work-site list stayed current through two months of daily operations.', 'Jun - Aug 2026'],
    ];
    
    const tools: [string, string][] = [
      ['HW-LTE-Traffic-Volume', 'The daily LTE traffic-volume monitoring & verification tool — built for this project'],
      ['Sector-level LTE traffic data', 'Before/after traffic volume per sector for the swap/mod site list'],
      ['Modernization tracker', 'Site-level master tracker, used as the false-positive filter'],
      ['Shared work-site list', 'Cloud-based list kept current by the regional field PICs'],
      ['Operations channel', 'Daily dashboard distribution and issue triage with the field teams'],
    ];
    
    const deliverables = [
      ['46 regional monitoring dashboards', 'SR & NR and Central & Eastern, 3 Jun - 5 Aug 2026.'],
      ['Daily work-site list upkeep', 'The shared list kept current through the full swap/mod phase.'],
      ['Anomaly & defect reports', '27-day optimization stall (4 Jun) and sector-swap direction defect (27 Aug).'],
      ['4G MOD close-out evidence', 'Migration data supporting the KV 4G MOD workstream close on 13 Jul 2026.'],
    ];
    
    export default function UMobileCaseStudy() {
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
                Huawei x U Mobile · 5G Swap &amp; Mod · Malaysia · On-going
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                U Mobile 5G — swap &amp; modernization traffic assurance
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                When U Mobile swapped and modernized its 4G sites for 5G, someone had to prove the traffic actually moved.
                I built <strong className="font-black text-white">HW-LTE-Traffic-Volume</strong> — a daily tool that verified the
                migration sector by sector and drove the field follow-up.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#tool" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-400">
                  See the tool <Gauge className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link href="/projects/mobifone-vietnam" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:border-slate-500">
                  MobiFone case study <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ['23', 'daily monitoring cycles'],
                  ['46', 'regional reports'],
                  ['2', 'regional dashboards'],
                  ['>20%', 'migration threshold'],
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
                  June - August 2026 · Malaysia
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
                  title="Proving the 5G migration, site by site"
                  description="U Mobile is one of Malaysia's major mobile operators. The 5G rollout runs on a swap & modernization (Swap & Mod) workstream: live 4G sites are converted or modernized so their users can move onto the new 5G configuration."
                />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {overviewCards.map(([Icon, title, body]) => (
                    <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      <h3 className="mt-5 text-lg font-black">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>
                    </article>
                  ))}
                </div>
              </section>
    
              <section id="role" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
                <SectionHeading
                  icon={Signal}
                  eyebrow="02 · My role"
                  title="Tool owner and daily-cycle operator"
                  description="I owned the measurement side of the workstream — from building the tool to keeping the daily list actionable for the field."
                />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {roleCards.map(([Icon, title, body]) => (
                    <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      <h3 className="mt-5 text-lg font-black">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>
                    </article>
                  ))}
                </div>
              </section>
    
              <section id="tool" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
                <SectionHeading
                  icon={Gauge}
                  eyebrow="03 · The tool"
                  title="HW-LTE-Traffic-Volume"
                  description="A daily traffic-volume monitoring and verification tool built for the Swap & Mod workstream. Every morning it answers one question: did the users on each activity site actually move?"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  {toolCards.map(([Icon, title, body]) => (
                    <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      <h3 className="mt-5 text-lg font-black">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>
                    </article>
                  ))}
                </div>
              </section>
    
              <section id="flow" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
                <SectionHeading
                  icon={Activity}
                  eyebrow="04 · How it works"
                  title="The daily cycle"
                  description="One automated run per day, published before the field starts work."
                />
                <ol className="grid gap-4 lg:grid-cols-5">
                  {flowSteps.map(([Icon, title, body], index) => (
                    <li key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-slate-400">{String(index + 1).padStart(2, '0')}</span>
                        <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      </div>
                      <h3 className="mt-3 text-base font-black">{title}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{body}</p>
                    </li>
                  ))}
                </ol>
              </section>
    
              <section id="timeline" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
                <SectionHeading
                  icon={Clock3}
                  eyebrow="05 · Timeline"
                  title="Ten weeks of daily monitoring"
                />
                <ol className="relative space-y-6 border-l border-slate-200 pl-8 dark:border-slate-800">
                  {timeline.map(([date, title, body]) => (
                    <li key={date + title} className="relative">
                      <span className="absolute -left-[38px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
                      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-black uppercase tracking-wide text-emerald-600 dark:text-emerald-400">{date}</span>
                          <h3 className="text-base font-black">{title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
    
              <section id="results" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
                <SectionHeading
                  icon={TrendingUp}
                  eyebrow="06 · Achievements"
                  title="What the daily cycle delivered"
                />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {achievements.map(([Icon, title, body, tag]) => (
                    <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <div className="flex items-start justify-between gap-3">
                        <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                        <span className="rounded-full border border-emerald-500/30 bg-emerald-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">{tag}</span>
                      </div>
                      <h3 className="mt-4 text-lg font-black">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>
                    </article>
                  ))}
                </div>
              </section>
    
              <section id="tools" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
                <SectionHeading icon={Wrench} eyebrow="07 · Tool stack" title="What the cycle runs on" />
                <div className="grid gap-4 sm:grid-cols-2">
                  {tools.map(([name, body]) => (
                    <div key={name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <h3 className="text-sm font-black">{name}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{body}</p>
                    </div>
                  ))}
                </div>
              </section>
    
              <section id="deliverables" className="scroll-mt-24 pb-20">
                <SectionHeading icon={FileText} eyebrow="08 · Deliverables" title="What was produced" />
                <div className="grid gap-4 sm:grid-cols-2">
                  {deliverables.map(([name, body]) => (
                    <div key={name} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      <div>
                        <h3 className="text-sm font-black">{name}</h3>
                        <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href="/projects/mobifone-vietnam" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-400">
                    Read the MobiFone case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-300">
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
                  </Link>
                </div>
              </section>
            </div>
          </div>
    
          <footer className="border-t border-slate-200 py-10 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              U Mobile 5G case study · Hovah Yii · <Link href="/" className="font-bold text-emerald-600 hover:underline dark:text-emerald-400">hovahyii.vercel.app</Link>
            </div>
          </footer>
        </div>
      );
    }
    