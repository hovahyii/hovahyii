import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  BriefcaseBusiness,
  Car,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  CloudUpload,
  Download,
  ExternalLink,
  FileArchive,
  FileSpreadsheet,
  FileText,
  Gauge,
  HardDrive,
  KeyRound,
  Mail,
  Map,
  MapPinned,
  MessageSquareText,
  Monitor,
  Navigation,
  Phone,
  RadioTower,
  Route,
  Satellite,
  ShieldAlert,
  Signal,
  Smartphone,
  TableProperties,
  Target,
  Users,
  Wrench,
  X,
  type LucideIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hanoi Drive Test Sharing | Huawei–MobiFone Vietnam Intern Field Guide',
  description:
    'A detailed English field guide for Huawei–MobiFone Vietnam interns covering Hanoi drive-test preparation, 4G/5G FTP and MOS execution, route control, log uploads, reporting, troubleshooting, and handover.',
  keywords: [
    'Hanoi drive test',
    'Huawei MobiFone Vietnam',
    'RAN intern guide',
    'benchmark drive test',
    'FTP DL UL',
    'MOS CQT CDT',
    'Huawei PHU',
    'PHU Assistant Lite',
    'OsmAnd Tracklia',
  ],
  openGraph: {
    title: 'Hanoi Drive Test Field Guide',
    description: 'An intern-ready workflow from task briefing to verified logs and an actionable RF report.',
    url: 'https://hovahyii.vercel.app/hanoi-drive-test-sharing',
    siteName: 'Hovah Yii',
    locale: 'en_US',
    type: 'article',
  },
};

const navigationItems = [
  ['overview', 'Start here'],
  ['tools', 'Tool stack'],
  ['workflow', 'Field runbook'],
  ['methods', 'Test recipes'],
  ['routes', 'Route plan'],
  ['cases', 'Field lessons'],
  ['reporting', 'Reporting'],
  ['handover', 'Contacts & handover'],
  ['sources', 'Source files'],
];

const roles = [
  ['Miao Peiqian', 'm00907087', 'RF Delivery Leader', 'Direct leader for DT tasks; interference, load, and RF follow-up.'],
  ['Ouyang Changjun', 'o60125604', 'Delivery Leader', 'Overall delivery, VIP complaints, MobiFone coordination, and SIM purchase arrangement.'],
  ['Hoang Minh Thao', 'h00708566', 'Local MobiFone RF', 'Approves DT plans and reviews reports before customer delivery.'],
  ['Phan Tuan Anh', 'p60120025', 'Local engineer', 'Coordinates MobiFone/VIP access and tracks cross-feeder updates.'],
  ['Su Xiaobo', 's00921749', 'GSC engineer', 'Performs log analysis and report writing.'],
  ['Nguyen Ha Phan', 'n50066043', 'Local engineer', 'Field-testing partner.'],
  ['Phan Truong Khang', 'p50065883', 'Local engineer', 'Field-testing partner.'],
  ['Luo Yanyang', 'l00947656', 'RF engineer', 'VIP complaint testing and Riverside DT support.'],
];

const glossary = [
  ['DT', 'Drive Test', 'A mobile field measurement along a planned road or indoor route.'],
  ['CDT', 'Continuous / walk drive test', 'A moving test that follows a route or floor map while the logger records continuously.'],
  ['CQT', 'Call Quality Test', 'A fixed-point campaign covering accessibility, retainability, coverage, RxQual, one-way audio/crosstalk, and voice quality.'],
  ['MOC / MTC', 'Originated / terminated call', 'MOC is dialed by the test UE; MTC is received by the test UE. A CQT voice plan may require both roles.'],
  ['MOS', 'Mean Opinion Score', 'A voice-quality KPI, usually 1–5. The handover treats ≥3.0 as acceptable and ≥4.0 as good; always follow the current customer threshold.'],
  ['FTP DL / UL', 'Downlink / uplink throughput', 'File-transfer tests used to measure user-plane speed and stability.'],
  ['RSRP', 'Reference Signal Received Power', 'A primary LTE/NR coverage-strength KPI.'],
  ['SINR', 'Signal-to-Interference-plus-Noise Ratio', 'A quality KPI that helps distinguish weak coverage from interference.'],
  ['PCI', 'Physical Cell ID', 'Identifies the serving or detected cell and helps reveal handover, overlap, and pollution behavior.'],
  ['EARFCN / NR-ARFCN', 'LTE / NR channel number', 'EARFCN identifies an LTE frequency channel; NR-ARFCN identifies a 5G NR channel.'],
  ['IBC', 'In-building coverage', 'The indoor coverage layer; compare IBC serving behavior with outdoor macro coverage.'],
  ['Spatial dotting', 'Indoor manual dot trace', 'Manual points placed on a floor plan to map PHU samples when indoor GPS is unreliable.'],
  ['BasicInfo', 'Radio information screen', 'Capture LTE and NR serving-cell details at the same place and time as a static or speed test.'],
  ['VUE Trace', 'Network-side UE trace', 'A trace used when deeper analysis is required; record the trace ID and exact test window.'],
];

const benchmarkRoutes = [
  ['1', 'MobiFone Office → Government Office', 'Completed', 'FTP UL/DL completed; MOS pending in the 29–31 Aug run.'],
  ['2', 'MobiFone Office → MPS Branch Office', 'Completed', 'Also recorded as a pre-FTPDL benchmark on 30 Aug.'],
  ['3', 'MobiFone Office → MPS HQ', 'Completed', 'The handover history also records Route 3 to Government Office; verify the latest route master before departure.'],
  ['4', 'MPS Branch Office → MPS HQ', 'Completed', 'Pre-FTPDL benchmark recorded on 30 Aug.'],
  ['5', 'MPS Branch Office → Government Office', 'Completed', 'Pre-FTPDL benchmark recorded on 30 Aug.'],
  ['6', 'MobiFone Office → Northern MobiFone Network Center', 'Completed', 'Separate pre-FTPDL and pre-FTPUL runs recorded on 30 Aug.'],
  ['7', 'MPS HQ → Government Office', 'Completed', 'Separate FTP DL and FTP UL runs recorded on 31 Aug.'],
  ['8', 'MPS HQ → Vinhomes Riverside', 'Retest', 'FTP UL completed; FTP DL blocked by low Viettel 4G / VNPT 4G balance.'],
  ['9', 'MPS HQ → National Data Center', 'Completed', 'Longest route: about 2.5 hours; consider splitting the segment or reducing test scope.'],
];

const beforeChecklist = [
  'Confirm the latest route, operator × RAT × test-case matrix, direction, deadline, and report owner.',
  'Import the KML/KMZ into OsmAnd or Tracklia; verify start, end, direction, closures, and an alternate path.',
  'Secure restricted-area access, field partner, vehicle, driver, meeting point, and test window.',
  'Charge and label every phone; map each UE to its SIM, operator, RAT, and PHU task.',
  'Prove SIM balance/quota, 4G/5G registration, data service, and VoLTE/MOS function with a real test.',
  'Open PHU, sync the correct project/task, check GPS, storage, time, license, script, and log-size settings.',
  'Send the tentative plan and state that it may change.',
];

const duringChecklist = [
  'Run a short proof log, then confirm PHU is recording, GPS is stable, and the correct task is active.',
  'Follow the approved track in OsmAnd/Tracklia while watching PHU for gaps, crashes, heat, or storage errors.',
  'Record every deviation or anomaly with time, location, reason, impact, and retest need.',
  'Capture BasicInfo/screenshots at static points and repeat inconsistent trials two or three times.',
  'The driver drives; the tester operates the phones and logger.',
];

const afterChecklist = [
  'Before leaving, compare the PHU trace and task matrix with the planned route and confirm no log is truncated.',
  'Back up raw logs, then inspect them in PHU Assistant Lite for route continuity, KPI visibility, and valid trials.',
  'Upload to the approved dated folder, share the exact path, and identify incomplete or retest items.',
  'Notify analysis/report owners; include the issue, suspected cause, evidence, next action, owner, and due time.',
  'Recharge and hand over every phone, SIM, cable, power bank, and key.',
];

const kmzCoordinates = [
  [105.8296792965062, 21.01800952324185],
  [105.8307430953707, 21.01722518670728],
  [105.831537538535, 21.01664108819053],
  [105.8322032088896, 21.01609699238859],
  [105.8324478187191, 21.01586698720815],
  [105.8322905826203, 21.01568026036967],
  [105.8319702130124, 21.01538336705248],
  [105.8317376192615, 21.01514376093427],
  [105.8313037093513, 21.01549776936385],
  [105.83170590676, 21.015888161462],
  [105.8317389614097, 21.01586732889077],
  [105.8318593931074, 21.01598651522542],
  [105.8319465043398, 21.01592508347945],
  [105.8321693942775, 21.01612482473539],
] as const;

function routePoints() {
  const width = 600;
  const height = 270;
  const pad = 34;
  const longitudes = kmzCoordinates.map(([longitude]) => longitude);
  const latitudes = kmzCoordinates.map(([, latitude]) => latitude);
  const minX = Math.min(...longitudes);
  const maxX = Math.max(...longitudes);
  const minY = Math.min(...latitudes);
  const maxY = Math.max(...latitudes);

  return kmzCoordinates.map(([longitude, latitude]) => {
    const x = pad + ((longitude - minX) / (maxX - minX)) * (width - pad * 2);
    const y = height - pad - ((latitude - minY) / (maxY - minY)) * (height - pad * 2);
    return [x, y] as const;
  });
}

function SectionHeading({ icon: Icon, eyebrow, title, description }: { icon: LucideIcon; eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-400">
        <Icon className="h-4 w-4" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white md:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">{description}</p>
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-emerald-500 text-xs font-bold text-emerald-700 dark:text-emerald-400">
            {index + 1}
          </span>
          <span className="text-sm leading-6 text-slate-700 dark:text-slate-200">{item}</span>
        </li>
      ))}
    </ol>
  );
}

function Status({ children, tone = 'green' }: { children: React.ReactNode; tone?: 'green' | 'amber' | 'red' | 'blue' }) {
  const styles = {
    green: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
    amber: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
    red: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300',
    blue: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300',
  };

  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${styles[tone]}`}>{children}</span>;
}

export default function HanoiDriveTestSharingPage() {
  const points = routePoints();
  const polyline = points.map(([x, y]) => `${x},${y}`).join(' ');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <header className="border-b border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Hovah Yii
          </Link>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            <RadioTower className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            RAN field playbook
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.12),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              Huawei × MobiFone Vietnam · Hanoi · 2026
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Hanoi drive test field guide
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              An intern-ready operating guide for moving from a tentative plan to a safe field run, complete logs, actionable analysis, and a customer-ready report.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#workflow" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-400">
                Start the workflow <Navigation className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#sources" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:border-slate-500">
                Source downloads <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-400">Core tools: PHU · PHU Assistant Lite · OsmAnd · Tracklia</p>
            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ['9', 'VIP benchmark routes'],
                ['3', 'Operators compared'],
                ['4G + 5G', 'LTE and NR'],
                ['UL · DL · MOS', 'Core test scope'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <dt className="text-xs leading-5 text-slate-400">{label}</dt>
                  <dd className="mt-1 text-xl font-black text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-[2rem] border border-slate-700 bg-slate-900/90 p-5 shadow-2xl shadow-emerald-950/30 md:p-7">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">KMZ route preview</p>
                <h2 className="mt-2 text-xl font-bold">“test path 1” · 14 points</h2>
              </div>
              <MapPinned className="h-7 w-7 text-emerald-400" aria-hidden="true" />
            </div>
            <svg viewBox="0 0 600 270" role="img" aria-label="Preview of the route contained in TEST route.kmz" className="w-full rounded-2xl bg-slate-950">
              <defs>
                <linearGradient id="route-line" x1="0" x2="1">
                  <stop offset="0" stopColor="#22d3ee" />
                  <stop offset="1" stopColor="#34d399" />
                </linearGradient>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="600" height="270" fill="url(#grid)" />
              <polyline points={polyline} fill="none" stroke="#0f172a" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points={polyline} fill="none" stroke="url(#route-line)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              {points.map(([x, y], index) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r={index === 0 || index === points.length - 1 ? 7 : 3.5} fill={index === 0 ? '#22d3ee' : index === points.length - 1 ? '#34d399' : '#e2e8f0'} stroke="#0f172a" strokeWidth="2" />
              ))}
              <text x={points[0][0] + 11} y={points[0][1] - 10} fill="#67e8f9" fontSize="13" fontWeight="700">START</text>
              <text x={points[points.length - 1][0] + 10} y={points[points.length - 1][1] + 20} fill="#6ee7b7" fontSize="13" fontWeight="700">END</text>
            </svg>
            <div className="mt-5 grid gap-3 text-xs text-slate-400 sm:grid-cols-2">
              <p><span className="font-bold text-slate-200">Start:</span> 21.0180095, 105.8296793</p>
              <p><span className="font-bold text-slate-200">End:</span> 21.0161248, 105.8321694</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12 lg:py-12">
        <aside className="hidden lg:block">
          <nav aria-label="Documentation sections" className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
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
              <strong className="block text-emerald-300">Field rule</strong>
              Verify the live task, route, and project profile before testing.
            </div>
          </nav>
        </aside>

        <div className="min-w-0">
          <details className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:hidden">
            <summary className="cursor-pointer font-black">Browse this guide</summary>
            <nav aria-label="Mobile documentation sections" className="mt-4 grid grid-cols-2 gap-2">
              {navigationItems.map(([id, label]) => <a key={id} href={`#${id}`} className="rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold dark:bg-slate-950">{label}</a>)}
            </nav>
          </details>

        <div className="mb-16 flex gap-4 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
          <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden="true" />
          <div>
            <h2 className="font-black">Authorized project use</h2>
            <p className="mt-1 text-sm leading-6">
              This page consolidates a project handover dated 1 September 2026. Group IDs, account IDs, test identifiers, routes, and issue counts are historical operational references. Verify them in WeLink before acting, follow Huawei and MobiFone information-security rules, and never forward logs, customer data, access photos, credentials, or restricted-site details outside approved channels.
            </p>
          </div>
        </div>

        <section id="overview" className="scroll-mt-24 border-b border-slate-200 pb-20 dark:border-slate-800">
          <SectionHeading
            icon={Target}
            eyebrow="01 · Mission and context"
            title="What an intern is expected to deliver"
            description="A drive test is complete only when the route is covered, the requested test cases are valid, the raw evidence is safe, the team can find it, and the report explains what should happen next."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              [Route, 'Plan the right test', 'Confirm route, operator, RAT, direction, test case, access, vehicle, people, timing, and the latest customer-approved scope.'],
              [Signal, 'Collect trustworthy evidence', 'Maintain GPS lock and continuous logging; capture RSRP, SINR, PCI, throughput, events, BasicInfo, screenshots, and trace IDs where required.'],
              [MessageSquareText, 'Close the loop', 'Upload promptly, state incomplete items visibly, request analysis, include root cause and optimization suggestions, and track every dependency to confirmation.'],
            ].map(([Icon, title, body]) => {
              const CardIcon = Icon as LucideIcon;
              return (
                <article key={title as string} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <CardIcon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body as string}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h3 className="text-xl font-black">Project scope captured in the handover</h3>
              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                {[
                  ['Project', 'MobiFone RAN 2026 · Vietnam · Hanoi / North'],
                  ['Handover scope', 'Drive-test work performed from August 2026 onward'],
                  ['Benchmark operators', 'Viettel, MobiFone, and Vinaphone/VNPT'],
                  ['Radio layers', 'LTE 4G and NR 5G'],
                  ['Test cases', 'FTP uplink, FTP downlink, idle, Ookla 5G speed test, VUE trace, and VoLTE MOS'],
                  ['Core KPIs', 'RSRP, SINR, PCI, throughput, latency, call accessibility/retainability, and MOS'],
                  ['Log format', '.gen.zip'],
                ].map(([label, value], index) => (
                  <div key={label} className={`grid gap-1 px-5 py-4 sm:grid-cols-[150px_1fr] ${index % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-900/50'}`}>
                    <dt className="text-sm font-bold text-slate-500 dark:text-slate-400">{label}</dt>
                    <dd className="text-sm leading-6 text-slate-800 dark:text-slate-100">{value}</dd>
                  </div>
                ))}
              </div>
            </div>
            <aside className="rounded-2xl bg-slate-950 p-6 text-white">
              <BookOpen className="h-7 w-7 text-cyan-300" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-black">CQT and MOS are not the same thing</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">CQT is the comprehensive fixed-location test methodology. MOS is one voice-quality score that may be collected during CQT or DT.</p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="rounded-xl bg-slate-900 p-4"><strong className="text-cyan-300">CQT asks:</strong> Can the user access, retain, and use the service at this location?</div>
                <div className="rounded-xl bg-slate-900 p-4"><strong className="text-emerald-300">MOS asks:</strong> How good did the speech sound?</div>
                <div className="rounded-xl bg-slate-900 p-4"><strong className="text-slate-200">Formula:</strong> MOS = (M₁ + M₂ + … + Mₙ) / n</div>
              </div>
            </aside>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-black">Essential vocabulary</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {glossary.map(([term, name, meaning]) => (
                <details key={term} className="group rounded-xl border border-slate-200 bg-white p-4 open:border-emerald-300 dark:border-slate-800 dark:bg-slate-900 dark:open:border-emerald-800">
                  <summary className="cursor-pointer list-none font-bold">
                    <span className="mr-2 text-emerald-700 dark:text-emerald-400">{term}</span>{name}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{meaning}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="scroll-mt-10 border-b border-slate-200 py-16 dark:border-slate-800">
          <SectionHeading
            icon={Monitor}
            eyebrow="02 · Required tool stack"
            title="Know which tool owns each part of the job"
            description="PHU collects the field evidence, PHU Assistant Lite checks the logs, and OsmAnd or Tracklia keeps the team on the approved route. A navigation app never replaces the drive-test logger."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {[
              [Smartphone, 'PHU', 'Primary field collection', 'Use the approved Huawei PHU project and task to run the assigned LTE/NR, FTP, idle, voice, or mobility test and record the radio/GPS log.', ['Sync the correct project and assigned task.', 'Map one accepted task to the correct phone/UE.', 'Verify GPS, SIM/operator, RAT/test script, storage, and log-size settings.', 'Watch task state and recording health throughout the route.']],
              [Monitor, 'PHU Assistant Lite', 'Post-test log verification', 'Open the PHU log after the run to check route continuity, events, RSRP, SINR, PCI, throughput, test status, and whether the file is suitable for upload and reporting.', ['Confirm the expected KPIs and map trace are present.', 'Identify gaps, wrong RAT/operator, failed service, or invalid trials.', 'Use the project-approved workspace/profile and export settings.', 'Do not modify or delete the only raw copy of a log.']],
              [Navigation, 'OsmAnd', 'Offline route following', 'Import the project KML/KMZ, which OsmAnd converts to a GPX track, download the Hanoi offline map, and use Follow track so the driver can see the approved path without depending on mobile data.', ['Check the imported start/end and travel direction.', 'Keep the original geometry visible; do not snap it to roads unless the plan owner approves.', 'Use offline maps as a resilience measure.', 'Record detours in the DT event notes, not only in the navigation app.']],
              [Map, 'Tracklia', 'Route inspection and repair', 'Use Tracklia on Android to import, inspect, combine, or carefully edit GPX/KML/KMZ tracks and waypoints. It is especially useful when a supplied path needs checking before field execution.', ['Inspect every point and segment before departure.', 'Keep an untouched copy of the customer route.', 'Export the corrected route only after approval.', 'Use it for route data—not as the RF measurement source.']],
            ].map(([Icon, name, role, description, steps]) => {
              const ToolIcon = Icon as LucideIcon;
              return (
                <article key={name as string} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"><ToolIcon className="h-6 w-6" /></span>
                    <Status tone={name === 'PHU' ? 'green' : name === 'PHU Assistant Lite' ? 'blue' : 'amber'}>{role as string}</Status>
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{name as string}</h3>
                  {name === 'OsmAnd' && <p className="mt-1 text-xs font-semibold text-slate-400">Correct product spelling; sometimes written “OmsAnd” in team messages.</p>}
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description as string}</p>
                  <ul className="mt-5 space-y-2 border-t border-slate-200 pt-4 text-sm dark:border-slate-800">
                    {(steps as string[]).map((step) => <li key={step} className="flex gap-2 leading-6"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />{step}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="mt-6 grid overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 md:grid-cols-4">
            {[
              ['1', 'Route file', 'Open and verify in OsmAnd or Tracklia.'],
              ['2', 'Field task', 'Collect the assigned test in PHU.'],
              ['3', 'Log QA', 'Inspect the result in PHU Assistant Lite.'],
              ['4', 'Delivery', 'Back up, upload, analyze, and report.'],
            ].map(([number, title, body]) => <div key={number} className="border-b border-slate-200 p-5 last:border-0 dark:border-slate-800 md:border-b-0 md:border-r"><span className="text-xs font-black text-emerald-600">STEP {number}</span><h4 className="mt-2 font-black">{title}</h4><p className="mt-1 text-xs leading-5 text-slate-500">{body}</p></div>)}
          </div>

          <div className="mt-4 flex flex-col gap-2 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>PHU and PHU Assistant Lite are project-controlled Huawei tools. Screens, task names, permissions, and menus vary by build; use the current project APK/license/profile and the team’s approved SOP.</p>
            <div className="flex shrink-0 gap-3"><a href="https://www.osmand.net/docs/user/personal/tracks/manage-tracks/" target="_blank" rel="noreferrer" className="font-bold text-cyan-700 hover:underline dark:text-cyan-400">OsmAnd track docs</a><a href="https://tracklia.app/" target="_blank" rel="noreferrer" className="font-bold text-cyan-700 hover:underline dark:text-cyan-400">Tracklia formats</a></div>
          </div>
        </section>

        <section id="workflow" className="scroll-mt-24 border-b border-slate-200 py-20 dark:border-slate-800">
          <SectionHeading
            icon={ClipboardCheck}
            eyebrow="03 · Field runbook"
            title="One checklist, organized by field phase"
            description="This replaces the repeated workflow and checklist sections. Run it top to bottom for benchmark routes, walk tests, store tests, and VIP complaint verification."
          />
          <div className="grid gap-8 xl:grid-cols-3">
            <div><div className="mb-4 flex items-center gap-2"><Clock3 className="h-5 w-5 text-cyan-600" /><h3 className="text-lg font-black">Before departure</h3></div><Checklist items={beforeChecklist} /></div>
            <div><div className="mb-4 flex items-center gap-2"><Satellite className="h-5 w-5 text-emerald-600" /><h3 className="text-lg font-black">During collection</h3></div><Checklist items={duringChecklist} /></div>
            <div><div className="mb-4 flex items-center gap-2"><CloudUpload className="h-5 w-5 text-amber-600" /><h3 className="text-lg font-black">Before close-out</h3></div><Checklist items={afterChecklist} /></div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="flex items-center gap-2 text-lg font-black"><Phone className="h-5 w-5 text-emerald-600" />SIM pre-flight</h3>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">{['Correct operator', 'Enough balance/quota', '4G/5G registers', 'VoLTE/MOS works', 'Correct phone/slot', 'Real traffic passes'].map((item) => <div key={item} className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 dark:bg-slate-950"><CheckCircle2 className="h-4 w-4 text-emerald-500" />{item}</div>)}</div>
              <p className="mt-4 text-xs leading-5 text-slate-500">28 Aug snapshot: two VNPT data + two voice SIMs; two Viettel data + two voice SIMs; MobiFone SIMs available at stores. Reconfirm current inventory.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="flex items-center gap-2 text-lg font-black"><HardDrive className="h-5 w-5 text-cyan-600" />Known equipment references</h3>
              <dl className="mt-4 space-y-3 text-sm"><div className="flex justify-between gap-4"><dt className="text-slate-500">Collection / QA</dt><dd className="text-right font-semibold">PHU · PHU Assistant Lite</dd></div><div className="flex justify-between gap-4"><dt className="text-slate-500">Route apps</dt><dd className="font-semibold">OsmAnd · Tracklia</dd></div><div className="flex justify-between gap-4"><dt className="text-slate-500">Log format</dt><dd className="font-semibold">.gen.zip</dd></div><div className="flex justify-between gap-4"><dt className="text-slate-500">Handover DT phone</dt><dd className="font-semibold">841212953022</dd></div><div className="flex justify-between gap-4"><dt className="text-slate-500">Recorded VUE trace</dt><dd className="font-semibold">977718</dd></div></dl>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30"><AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-red-600 dark:text-red-400" /><div><h3 className="font-black text-red-950 dark:text-red-100">Stop and escalate when validity or safety is at risk</h3><p className="mt-2 text-sm leading-6 text-red-900 dark:text-red-200">Wrong SIM/task, no GPS, broken PHU logging, unknown RAT lock, expired access, unsafe traffic, missing permission, or an unapproved route change are stop conditions.</p></div></div>
        </section>

        <section id="methods" className="scroll-mt-24 border-b border-slate-200 py-20 dark:border-slate-800">
          <SectionHeading
            icon={Gauge}
            eyebrow="04 · Execution recipes"
            title="CQT, MOS, 5G verification, and indoor dotting"
            description="These are the operational details that must be checked during collection—not inferred later from a 5G icon, a route line, or a completed-call counter."
          />

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="border-b border-slate-200 bg-slate-950 p-6 text-white dark:border-slate-800 md:p-8">
              <div className="flex items-center gap-3"><Phone className="h-6 w-6 text-emerald-400" /><h3 className="text-2xl font-black">CQT call cycle: MOC, MTC, and MOS</h3></div>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">A CQT voice test needs both call directions and a working audio path. “Call connected” is not enough when the task also requires speech quality.</p>
            </div>
            <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
              <div className="rounded-xl bg-emerald-50 p-5 dark:bg-emerald-950/30"><p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">MOC · Mobile Originated Call</p><p className="mt-2 text-sm leading-6">The test UE starts the call to the configured called number. Verify attempt, setup, alerting, connection, speech period, MOS result, and normal release.</p></div>
              <div className="rounded-xl bg-cyan-50 p-5 dark:bg-cyan-950/30"><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">MTC · Mobile Terminated Call</p><p className="mt-2 text-sm leading-6">The test UE receives the call. Verify paging/ringing, answer or auto-answer, two-way audio, call retainability, MOS result, and release.</p></div>
            </div>
            <div className="grid gap-8 px-6 pb-8 md:grid-cols-[1fr_1.08fr] md:px-8">
              <div>
                <h4 className="text-lg font-black">Bluetooth MOS connection</h4>
                <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {[
                    'Identify the approved Bluetooth MOS headset/audio accessory for each MOC and MTC phone; do not swap labels between UEs.',
                    'Enable Bluetooth on the phone, place the MOS accessory in pairing mode, select its device name, and complete the PIN/confirmation prompt.',
                    'In the paired-device settings, enable Calls or Phone audio. Disconnect old headsets, watches, or car audio that may take the call audio route.',
                    'Place one short manual call. Confirm ringing, answer, microphone, and speech in both directions; verify the call screen shows Bluetooth audio.',
                    'Keep the project-defined volume/gain unchanged, disable mute, keep the microphone unobstructed, and prevent the accessory from sleeping.',
                    'Open the matching PHU MOS tasks only after both Bluetooth links are stable. If either device reconnects, repeat the audio proof call.',
                  ].map((step, index) => <li key={step} className="flex gap-3"><span className="font-black text-emerald-700 dark:text-emerald-400">{index + 1}.</span>{step}</li>)}
                </ol>
              </div>
              <div>
                <h4 className="text-lg font-black">Run the paired PHU tasks</h4>
                <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {[
                    'Confirm both SIMs have call credit, correct phone numbers, LTE service, IMS/VoLTE registration, and normal manual calling.',
                    'Assign one phone as MOC and the other as MTC. Check that the MOC called number matches the MTC SIM and that MTC answer/auto-answer follows the project script.',
                    'Start log recording on both phones. Arm the MTC side so it is ready, then start the MOC dialing task; follow the current PHU task order if it differs.',
                    'Watch for call attempt → alerting → connected → speech sample/MOS → normal release. Record setup failure, no answer, drop, one-way audio, or missing MOS as separate failures.',
                    'Verify both uplink and downlink MOS results are populated. A connected call with blank MOS is an incomplete MOS trial.',
                    'Repeat the required cycles and reverse MOC/MTC roles only when the test plan requires both directions. Keep the failed attempts in the evidence set.',
                  ].map((step, index) => <li key={step} className="flex gap-3"><span className="font-black text-cyan-700 dark:text-cyan-400">{index + 1}.</span>{step}</li>)}
                </ol>
              </div>
            </div>
          </article>

          <article className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 md:p-8">
            <div className="flex items-center gap-3"><Signal className="h-6 w-6 text-emerald-600" /><h3 className="text-2xl font-black">PHU: verify whether 5G is actually connected</h3></div>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">LTE PCI and EARFCN identify the LTE serving/anchor cell. They do not, by themselves, prove that the UE has an active NR connection.</p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full min-w-[700px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="px-4 py-3">PHU readout</th><th className="px-4 py-3">Interpretation</th><th className="px-4 py-3">Action</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800"><tr><td className="px-4 py-4 font-semibold">LTE PCI + LTE EARFCN only</td><td className="px-4 py-4">LTE serving cell or NSA anchor is visible; NR is not yet proven.</td><td className="px-4 py-4">Start active traffic and check the NR/SCG fields.</td></tr><tr><td className="px-4 py-4 font-semibold">LTE anchor + EN-DC/SCG connected + NR PCI + NR-ARFCN</td><td className="px-4 py-4">5G NSA is active.</td><td className="px-4 py-4">Capture LTE and NR radio KPIs during FTP/Speedtest.</td></tr><tr><td className="px-4 py-4 font-semibold">Serving RAT = NR/5G SA + NR PCI + NR-ARFCN</td><td className="px-4 py-4">5G SA is active.</td><td className="px-4 py-4">Capture NR serving-cell and registration details.</td></tr><tr><td className="px-4 py-4 font-semibold">5G icon, but no NR PCI/NR-ARFCN/NR measurements</td><td className="px-4 py-4">“False 5G” or NR not active at that moment.</td><td className="px-4 py-4">Do not report 5G as verified; generate traffic and retest.</td></tr></tbody></table>
            </div>
            <ol className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                'Open PHU BasicInfo/Parameter view and record RAT, LTE PCI, EARFCN, band, RSRP, RSRQ, and SINR.',
                'Compare the LTE PCI/EARFCN with the latest engineering parameters to confirm the expected anchor/serving cell.',
                'Start FTP DL/UL or Ookla traffic because NSA NR may be added only when data demand begins.',
                'Look for EN-DC/SCG/NR serving status plus NR PCI, NR-ARFCN, NR RSRP/RSRQ/SINR, and NR throughput contribution.',
                'Take one BasicInfo screenshot before traffic and one while traffic is active; include time and indoor/outdoor position.',
                'If LTE fields change unexpectedly or NR disappears, annotate the location and time for handover/cross-coverage analysis.',
              ].map((step, index) => <li key={step} className="flex gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 dark:bg-slate-950"><span className="font-black text-emerald-700 dark:text-emerald-400">{index + 1}.</span>{step}</li>)}
            </ol>
            <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:bg-amber-950/30 dark:text-amber-100"><strong>Channel naming:</strong> EARFCN is the LTE channel number. The 5G channel is NR-ARFCN. Record both for NSA; record NR-ARFCN and NR PCI for SA.</p>
          </article>

          <article className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 md:p-8">
            <div className="flex items-center gap-3"><MapPinned className="h-6 w-6 text-cyan-600" /><h3 className="text-2xl font-black">Indoor spatial dotting · manual dot trace</h3></div>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">GPS is unreliable indoors. Spatial dotting anchors the PHU samples to the floor plan so Assistant Lite can replay the walk in the correct location.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                ['1', 'Load the correct floor plan', 'Verify building, floor, orientation, scale, public/restricted boundary, and planned start/end points.'],
                ['2', 'Select indoor/manual dotting', 'Use the project indoor map and begin one log for one floor and one clearly named test case.'],
                ['3', 'Place the first dot', 'Stand at a recognizable landmark, tap the exact position on the floor plan, then start moving.'],
                ['4', 'Dot every geometry change', 'Tap at every corner, corridor junction, entrance, escalator/elevator, direction change, and route deviation.'],
                ['5', 'Walk steadily between dots', 'PHU distributes/interpolates samples along the segment; irregular speed or late dots distort the plotted location.'],
                ['6', 'Handle pauses correctly', 'Add a dot at the actual pause/static test point and annotate the reason; do not let stationary samples appear along a moving segment.'],
                ['7', 'Separate floors', 'Stop or segment the log before changing floors, load the next floor plan, and restart dotting from a confirmed landmark.'],
                ['8', 'Verify before leaving', 'Replay the floor trace in PHU Assistant Lite and check that lines do not cut through walls, jump floors, or miss tested areas.'],
              ].map(([number, title, body]) => <div key={number} className="flex gap-4 rounded-xl bg-slate-50 p-4 dark:bg-slate-950"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-xs font-black text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300">{number}</span><div><h4 className="font-black">{title}</h4><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div></div>)}
            </div>
          </article>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><Car className="h-6 w-6 text-emerald-600" /><h3 className="mt-4 text-xl font-black">Outdoor benchmark route</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Verify direction and task-to-phone mapping, run a proof log, follow the KML in OsmAnd/Tracklia, record detours, and reconcile operator × RAT × FTP UL/DL × MOS before leaving.</p></article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><Smartphone className="h-6 w-6 text-cyan-600" /><h3 className="mt-4 text-xl font-black">Indoor/outdoor 5G store test</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Run the project-required 5G Speedtest at both positions, prove NR in PHU during active traffic, capture BasicInfo, speed, latency, server, time, and compare conditions before escalating an indoor gap.</p></article>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="bg-slate-950 px-6 py-4 text-white"><h3 className="font-black">Minimum evidence package</h3></div>
            <div className="grid divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-900 md:grid-cols-3 md:divide-x md:divide-y-0">
              {[
                [Satellite, 'Spatial', 'KML/floor map, trace, direction, start/end time, deviations, public/restricted coverage.'],
                [Signal, 'Radio and service', 'Operator, RAT, band/lock, RSRP, SINR, PCI, throughput, latency, drops, MOS, BasicInfo.'],
                [FileArchive, 'Traceability', 'UE/SIM mapping, test-case name, raw log, screenshot, VUE trace ID, event notes, valid-trial marker.'],
              ].map(([Icon, title, body]) => {
                const EvidenceIcon = Icon as LucideIcon;
                return <div key={title as string} className="p-6"><EvidenceIcon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" /><h4 className="mt-3 font-black">{title as string}</h4><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{body as string}</p></div>;
              })}
            </div>
          </div>
        </section>

        <section id="routes" className="scroll-mt-24 border-b border-slate-200 py-20 dark:border-slate-800">
          <SectionHeading
            icon={Route}
            eyebrow="05 · Benchmark control"
            title="Nine-route benchmark matrix"
            description="The 29–31 August benchmark compared Viettel, MobiFone, and Vinaphone across LTE/NR FTP UL/DL. MOS remained incomplete because voice-test SIMs malfunctioned."
          />
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr><th className="px-5 py-4">Route</th><th className="px-5 py-4">Description</th><th className="px-5 py-4">FTP status</th><th className="px-5 py-4">Operational note</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {benchmarkRoutes.map(([number, description, status, note]) => (
                  <tr key={number} className="align-top">
                    <td className="px-5 py-4 font-black text-emerald-700 dark:text-emerald-400">{number}</td>
                    <td className="px-5 py-4 font-semibold">{description}</td>
                    <td className="px-5 py-4"><Status tone={status === 'Retest' ? 'amber' : 'green'}>{status}</Status></td>
                    <td className="px-5 py-4 leading-6 text-slate-600 dark:text-slate-300">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-black">Route quality-control matrix</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Before leaving the endpoint, mark every required combination—not just the route—as complete.</p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {['Viettel LTE', 'Viettel NR', 'MobiFone LTE', 'MobiFone NR', 'Vinaphone LTE', 'Vinaphone NR', 'FTP UL', 'FTP DL', 'MOS / VoLTE', 'Event notes', 'Route trace', 'Upload path'].map((item) => <div key={item} className="flex min-h-16 items-center gap-2 rounded-xl border border-slate-200 p-3 text-xs font-bold dark:border-slate-700"><span className="h-4 w-4 shrink-0 rounded border-2 border-emerald-500" />{item}</div>)}
              </div>
            </div>
            <aside className="rounded-2xl bg-amber-50 p-6 dark:bg-amber-950/30">
              <h3 className="flex items-center gap-2 text-lg font-black text-amber-950 dark:text-amber-100"><AlertTriangle className="h-5 w-5" />Route master conflict</h3>
              <p className="mt-3 text-sm leading-6 text-amber-900 dark:text-amber-200">Two source sections describe Route 3 differently. Treat the latest customer/plan file as authoritative, show the route on the map to the driver, and confirm direction in writing before testing.</p>
            </aside>
          </div>
        </section>

        <section id="cases" className="scroll-mt-24 border-b border-slate-200 py-20 dark:border-slate-800">
          <SectionHeading
            icon={Wrench}
            eyebrow="06 · August 2026 lessons"
            title="Real cases and what they teach"
            description="Use these examples to recognize common failure patterns: false 5G, macro cross-coverage, interference, access constraints, incomplete reporting, and missing resource follow-up."
          />
          <div className="space-y-5">
            {[
              ['16 Aug', 'Noi Bai Airport T2 · Shop 1 / Shop 2 uplink', 'Shop 1 improved after optimization. Shop 2 remained below the >10 Mbps UL target. A nearby VNPT antenna was about 12–15 m horizontally from the referenced building floor; the team requested interference and load checks.', 'Do multiple static trials, preserve comparison points, and do not call the problem solved when one location improves.'],
              ['13 & 19 Aug', 'MobiFone store · 21B Ba La', 'Indoor 5G was poor or absent while outdoor service was normal. One screenshot showed a 5G icon without a real NR connection.', 'Verify serving NR in BasicInfo. An icon is not proof of a 5G bearer. Compare indoor and outdoor under the same evidence package.'],
              ['20 Aug', 'MobiFone store · 16 Dien Bien Phu', 'Indoor and outdoor 5G Speedtest plus FTP DL were collected at 21.0298, 105.8422 and combined with Ba La into one report.', 'Keep location identity and indoor/outdoor context clear when several stores share one deliverable.'],
              ['25 Aug', 'Noi Bai Airport T1 · post-optimization walk test', 'Public areas on floors 1–3 were tested with 4G and 5G FTP DL. IBC improved, but some areas still handed over to macro. Restricted access had expired; Floor 3 public-area shape differed from the PPTX. 3G was not tested.', 'Report actual access and route coverage, state untested layers, and reconcile map mismatches before interpreting coverage.'],
              ['26 Aug', 'VIP Cluster 21 · Riverside complaint', 'Immediate DT required a local MobiFone staff member because interns could not enter the VIP area.', 'Access is a test dependency. Coordinate through Phan Tuan Anh and never attempt unapproved entry.'],
              ['27–28 Aug', 'VIP residential complaint report', 'The report showed poor 4G/5G coverage but initially lacked analysis and optimization suggestions. The suspected root cause was severe cross-coverage; post-DT optimization was pending and relocation/transmission work was needed first.', 'A customer report needs cause, evidence, proposed action, dependency, owner, and next verification—not screenshots alone.'],
              ['29 Aug–1 Sep', 'VIP nine-road benchmark', 'Most LTE/NR FTP UL/DL completed across three operators. Route 8 FTP DL failed because of low balance; all MOS tests failed because voice SIMs malfunctioned; Route 9 took about 2.5 hours and a missed turn added distance.', 'Test SIM balance and MOS function before departure, split long routes, brief the driver, and keep incomplete cells visibly red with a reason.'],
            ].map(([date, title, finding, lesson]) => (
              <article key={title} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 md:grid-cols-[120px_1fr_1fr]">
                <div><Status tone="blue">{date}</Status></div>
                <div><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{finding}</p></div>
                <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/40"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">Intern takeaway</p><p className="mt-2 text-sm leading-6 text-emerald-950 dark:text-emerald-100">{lesson}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="reporting" className="scroll-mt-24 border-b border-slate-200 py-20 dark:border-slate-800">
          <SectionHeading
            icon={Mail}
            eyebrow="07 · Communication and reporting"
            title="Make the result easy to scan and act on"
            description="The source notes use a fixed six-block email structure, an operator-by-RAT status table, explicit failure colors, and a report template aligned before customer output."
          />
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-3">
              {[
                ['1', 'Greeting + overview', 'State whether this is a plan, result, or update. For plans: “This is just a plan (tentative) and may change.”'],
                ['2', 'Change / precondition', 'Explain route, timing, access, SIM, vehicle, or scope changes before the table.'],
                ['3', 'Test-plan/result table', 'Use No. · Route · Operator · RAT · Test case · Status · Remarks. Expand every route by operator and LTE/NR.'],
                ['4', 'Reference images', 'Attach or CID-inline route maps, floor plans, BasicInfo, and screenshots with clear captions.'],
                ['5', 'Vehicle / people / time', 'List driver, testers, field partner, start/end time, and access contact when relevant.'],
                ['6', 'Notice + action + signature', 'State the one core request, owner, deadline, disclaimer, and fixed signature.'],
              ].map(([number, title, body]) => (
                <div key={number} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-sm font-black text-white">{number}</span><div><h3 className="font-black">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div></div>
              ))}
            </div>
            <div className="rounded-2xl bg-slate-950 p-6 text-white md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Result email pattern</p>
              <h3 className="mt-3 text-2xl font-black">Lead with the conclusion, then show the matrix</h3>
              <div className="mt-6 space-y-5 text-sm leading-6 text-slate-300">
                <p><strong className="text-white">Subject:</strong> VIP 9 Road Benchmark Drive Test Result (29–31 Aug) – Viettel / MobiFone / Vinaphone</p>
                <p><strong className="text-white">Opening:</strong> Please find below the benchmark drive test result for VIP 9 Road conducted from 29 to 31 Aug 2026, covering three operators: Viettel, MobiFone and Vinaphone.</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-300"><Check className="mb-2 h-4 w-4" /><strong>Complete</strong><br />Green ✓</div>
                  <div className="rounded-xl bg-red-500/10 p-3 text-red-300"><X className="mb-2 h-4 w-4" /><strong>Not tested</strong><br />Red ✗</div>
                  <div className="rounded-xl bg-amber-500/10 p-3 text-amber-300"><AlertTriangle className="mb-2 h-4 w-4" /><strong>Incomplete</strong><br />Reason in remarks</div>
                </div>
                <p><strong className="text-white">Action wording:</strong> Route 8 FTP DL could not be completed because the Viettel 4G and VNPT 4G SIM cards had insufficient balance. New SIM cards have been requested; arrange the retest when availability is confirmed.</p>
                <p className="rounded-xl border border-slate-700 bg-slate-900 p-4"><strong className="text-cyan-300">Rule:</strong> The table carries the complete facts. The body carries the conclusion, risk, and one actionable request.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><h3 className="flex items-center gap-2 font-black"><TableProperties className="h-5 w-5 text-emerald-600" />Report templates</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300"><li><strong>Primary:</strong> Standard Template for VIP T1 Assurance_20260810 V1.pptx</li><li><strong>Statistics reference:</strong> MBF RF Performance_20260808.pptx</li><li>Both front-line and GSC teams produce reports. Confirm the latest version before editing.</li><li>Customer output must include poor-area analysis and optimization suggestions.</li></ul></div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><h3 className="flex items-center gap-2 font-black"><ClipboardCheck className="h-5 w-5 text-cyan-600" />Pre-send gate</h3><ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">{['Correct subject and recipients', 'Latest route and report template', 'Status colors match facts', 'Failure reason in remarks', 'Analysis and optimization', 'Owner and follow-up date', 'Images render in Outlook', 'Fixed signature and disclaimer'].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{item}</li>)}</ul></div>
          </div>
        </section>

        <section id="handover" className="scroll-mt-24 border-b border-slate-200 py-20 dark:border-slate-800">
          <SectionHeading
            icon={Users}
            eyebrow="08 · Operational directory"
            title="Where work lives and who closes it"
            description="Use role-based escalation first, then confirm the current person and account in WeLink. Never assume a historical contact still owns the task."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ['DT Management', '936714420879622473', 'Main coordination group for all drive-test activity.'],
              ['10/08–16/08 Drive Test Record', '997212977222389807', 'Noi Bai Airport T2 shop testing.'],
              ['Hanoi Airport DT Assurance', '994063112594419792', 'Airport T1 assurance and MobiFone store testing.'],
            ].map(([name, id, purpose]) => <article key={name} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><MessageSquareText className="h-6 w-6 text-emerald-600" /><h3 className="mt-4 font-black">{name}</h3><p className="mt-1 font-mono text-xs text-slate-500">{id}</p><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{purpose}</p></article>)}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="flex items-center gap-2 text-lg font-black"><CloudUpload className="h-5 w-5 text-cyan-600" />Approved log path</h3>
            <code className="mt-4 block overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-emerald-300">Group Space &gt; DT Management &gt; North &gt; Benchmark DT Log &gt; [date] &gt; [location]</code>
            <a href="https://onebox.huawei.com/#eSpaceGroupFile/1/2926/21491566" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 hover:underline dark:text-cyan-400">Open the handover Onebox location <ExternalLink className="h-4 w-4" /></a>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <table className="w-full min-w-[900px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="px-5 py-4">Name</th><th className="px-5 py-4">Account</th><th className="px-5 py-4">Role</th><th className="px-5 py-4">Use this contact for</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{roles.map(([name, account, role, use]) => <tr key={account}><td className="px-5 py-4 font-black">{name}</td><td className="px-5 py-4 font-mono text-xs text-slate-500">{account}</td><td className="px-5 py-4 font-semibold">{role}</td><td className="px-5 py-4 leading-6 text-slate-600 dark:text-slate-300">{use}</td></tr>)}</tbody></table>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-black">Open issue register · 27–28 Aug snapshot</h3>
              <div className="mt-5 space-y-4">
                {[
                  ['ITC cross-feeder', '14 pending', '64 issued · 40 resolved · historical counts do not fully reconcile; confirm current tracker.'],
                  ['MobiFone-S cross-feeder', '9 pending', '75 issued · 66 resolved.'],
                  ['ITC hardware', '57 pending', '93 issued · 36 resolved.'],
                  ['MobiFone-S hardware', '24 pending', '51 issued · 27 resolved.'],
                ].map(([item, status, note]) => <div key={item} className="grid gap-2 rounded-xl bg-slate-50 p-4 dark:bg-slate-950 sm:grid-cols-[1fr_auto]"><div><p className="font-bold">{item}</p><p className="mt-1 text-xs leading-5 text-slate-500">{note}</p></div><Status tone="amber">{status}</Status></div>)}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">The handover totals 104 pending items. Phan Tuan Anh supplied ongoing updates.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-black">Outstanding handover actions</h3>
              <div className="mt-5 space-y-4">
                {[
                  ['CQT report retest', 'Not done', 'Installation-quality issues require a retest.'],
                  ['VIP residential analysis', 'Needs action', 'Add optimization suggestions and address relocation/transmission dependencies.'],
                  ['Shop 2 uplink', 'Low UL persists', 'Interference and load check requested; target was >10 Mbps.'],
                  ['Route 8 FTP DL', 'Retest', 'Wait for confirmed Viettel/VNPT SIM balance.'],
                  ['MOS for routes 1–9', 'Retest', 'Replace or repair voice/MOS SIMs, then complete all operators.'],
                ].map(([item, status, note]) => <div key={item} className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0 dark:border-slate-800"><div><p className="font-bold">{item}</p><p className="mt-1 text-xs leading-5 text-slate-500">{note}</p></div><Status tone="red">{status}</Status></div>)}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-950 p-6 text-white md:p-8">
            <h3 className="text-xl font-black">Fast escalation map</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [KeyRound, 'VIP access', 'Phan Tuan Anh · send access documents only through approved channels.'],
                [RadioTower, 'Site on-air check', 'Nguyen Trong Giap · 00079600; also check [War Room] MBF 5G project – Ha Noi cutover.'],
                [Phone, 'More SIMs', 'Ouyang Changjun coordinates with Dang Hong Quan / Thai Huu Tuan Ha.'],
                [Signal, 'Interference / load', 'Miao Peiqian for RF checks; Su Xiaobo for log analysis.'],
              ].map(([Icon, title, body]) => { const EscalationIcon = Icon as LucideIcon; return <div key={title as string} className="rounded-xl border border-slate-800 bg-slate-900 p-4"><EscalationIcon className="h-5 w-5 text-emerald-400" /><h4 className="mt-3 font-bold">{title as string}</h4><p className="mt-2 text-xs leading-5 text-slate-400">{body as string}</p></div>; })}
            </div>
          </div>
        </section>

        <section id="sources" className="scroll-mt-24 py-20">
          <SectionHeading
            icon={Download}
            eyebrow="09 · Original handover files"
            title="Download the working references"
            description="Use the live team workspace as the operational source of truth. These files are the dated references used to build this guide."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [FileText, 'DT handover document', 'Detailed August 2026 project history, groups, contacts, methods, storage, equipment, and open items.', '/hanoi-drive-test-sharing/DT_Handover_Document.md', 'Markdown'],
              [FileSpreadsheet, 'Drive test checklist', 'The before, during, and after field checklist in an editable workbook.', '/hanoi-drive-test-sharing/Drive_Test_Checklist.xlsx', 'Excel'],
              [BookOpen, 'VIP 9 road field notes', 'Chinese-language benchmark retrospective covering routes, SIM failures, email structure, MOS/CQT, and follow-up actions.', '/hanoi-drive-test-sharing/VIP9_Road_DriveTest_%E5%B7%A5%E4%BD%9C%E5%BF%83%E5%BE%97.docx', 'Word'],
              [MapPinned, 'Test route', 'The original KMZ route named “test path 1,” containing 14 coordinate points.', '/hanoi-drive-test-sharing/TEST%20route.kmz', 'KMZ'],
            ].map(([Icon, title, body, href, type]) => {
              const SourceIcon = Icon as LucideIcon;
              return (
                <a key={title as string} href={href as string} download className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-700">
                  <span className="rounded-xl bg-slate-100 p-3 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-800 dark:bg-slate-950 dark:text-slate-300"><SourceIcon className="h-6 w-6" /></span>
                  <span className="flex-1"><span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{type as string}</span><span className="mt-1 block text-lg font-black">{title as string}</span><span className="mt-2 block text-sm leading-6 text-slate-600 dark:text-slate-300">{body as string}</span></span>
                  <Download className="h-5 w-5 text-slate-400 transition group-hover:text-emerald-600" />
                </a>
              );
            })}
          </div>

          <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-emerald-600 to-cyan-700 p-8 text-white md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-100">Before you leave for the field</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight">If the route, SIM, access, logger, and owner are not confirmed, the test is not ready.</h2>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
              {['Scope confirmed', 'SIM proven', 'Access approved', 'Route opened', 'Logger validated', 'Upload owner named'].map((item) => <span key={item} className="rounded-full bg-white/15 px-4 py-2 backdrop-blur"><Check className="mr-1 inline h-4 w-4" />{item}</span>)}
            </div>
          </div>
        </section>
        </div>
      </div>

      <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
          <p>Hanoi Drive Test Sharing · Prepared for Huawei–MobiFone Vietnam interns</p>
          <p>Source handover dated 1 September 2026 · Verify live project data before use</p>
        </div>
      </footer>
    </main>
  );
}
