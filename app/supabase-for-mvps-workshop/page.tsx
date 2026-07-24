"use client";

import { ArrowLeft, ArrowRight, Bot, CalendarClock, Check, ChevronRight, Cloud, Code2, Database, Download, ExternalLink, FileKey, Globe2, KeyRound, Layers3, LockKeyhole, MessageCircle, Moon, MousePointer2, Play, Radio, RefreshCw, Rocket, Server, ShieldCheck, Sparkles, Sun, Trash2, Upload, Users, Wifi, Zap } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { useCallback, useEffect, useRef, useState } from "react";


const url = String(process.env.NEXT_PUBLIC_SUPABASE_URL || "https://xkimiccvqhhjzagojvvv.supabase.co").replace(/^["']|["']$/g, "").trim();
const key = String(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_DLGIy9GhuPpK5UzhH8YYSw_Cz2j-jt8").replace(/^["']|["']$/g, "").trim();

// Lazy singleton – avoids calling createClient at module scope, which crashes
// Next.js static generation (the returned object is not JSON-serializable).
let _supabase: ReturnType<typeof createClient> | null = null;
function getSupabase() {
  if (!_supabase) {
    try { _supabase = createClient(url, key); }
    catch (e) { console.error("Supabase client error:", e); _supabase = createClient("https://xkimiccvqhhjzagojvvv.supabase.co", "sb_publishable_DLGIy9GhuPpK5UzhH8YYSw_Cz2j-jt8"); }
  }
  return _supabase as ReturnType<typeof createClient>;
}


type Idea = { id: string; name: string; pitch: string; category: string; votes: number };
type ConnectionState = "idle" | "testing" | "live" | "error";
type Persona = "Alice" | "Bob";
type BucketMode = "public" | "private";
type PolicyAction = "SELECT" | "INSERT" | "UPDATE" | "DELETE";
type StorageAction = "Upload" | "Download" | "Replace" | "Delete";
type AiView = "developer" | "product";
type AuthView = "signin" | "ssr" | "proxy";
type SqlRecipeKey = "schema" | "policies" | "queries" | "trigger";
type SqlMode = "recipes" | "simulator";
type SqlSimAction = "INSERT" | "UPDATE" | "UPSERT" | "DELETE";
type SimTodo = { id: number; title: string; done: boolean; updated_at: string };

const chapters = [
  ["Why", "Supabase in one sentence"], ["Connect", "Connect in three lines"],
  ["Auth", "Authentication and SSR middleware"], ["Compare", "Why it feels easier"],
  ["Data", "Postgres + generated API"], ["Policy", "What policies actually do"],
  ["SQL", "Common SQL recipes"], ["Storage", "Storage operations and access"],
  ["CDN", "Deliver files from the edge"], ["Cron", "Recurring jobs in Postgres"],
  ["AI", "AI tools and agentic workflows"], ["Wall", "Live Memory Wall"],
  ["Build", "Your practical MVP stack"], ["Follow", "Stay Connected"],
];

const fallbackIdeas: Idea[] = [
  { id: "demo-1", name: "QueueLess", pitch: "A live pickup queue for busy cafés.", category: "Commerce", votes: 8 },
  { id: "demo-2", name: "SkillSwap", pitch: "Neighbours teach one practical skill.", category: "Community", votes: 5 },
  { id: "demo-3", name: "TinyCarbon", pitch: "Small climate habits become team streaks.", category: "Climate", votes: 3 },
];
const rlsRows = [
  { owner: "Alice", record: "Investor notes", access: "private" },
  { owner: "Bob", record: "Customer interview", access: "private" },
  { owner: "Team", record: "Public launch checklist", access: "public" },
];
const connectCode = ['import { createClient } from "@supabase/supabase-js"', "", "const supabase = createClient(", '  "https://YOUR_PROJECT.supabase.co",', '  "YOUR_PUBLISHABLE_KEY"', ")"].join("\n");
const queryCode = ['const { data, error } = await supabase', '  .from("mvp_ideas")', '  .select("name, pitch, votes")', '  .order("votes", { ascending: false })'].join("\n");
const policyCodes: Record<PolicyAction, string> = {
  SELECT: ['create policy "read own notes"', 'on notes for select to authenticated', 'using ((select auth.uid()) = user_id);'].join("\n"),
  INSERT: ['create policy "create own notes"', 'on notes for insert to authenticated', 'with check ((select auth.uid()) = user_id);'].join("\n"),
  UPDATE: ['create policy "update own notes"', 'on notes for update to authenticated', 'using ((select auth.uid()) = user_id)', 'with check ((select auth.uid()) = user_id);'].join("\n"),
  DELETE: ['create policy "delete own notes"', 'on notes for delete to authenticated', 'using ((select auth.uid()) = user_id);'].join("\n"),
};
const policyNotes: Record<PolicyAction, string> = {
  SELECT: "USING decides which existing rows are visible.", INSERT: "WITH CHECK validates the new row before it is created.",
  UPDATE: "USING finds allowed rows; WITH CHECK validates the result.", DELETE: "USING decides which existing rows may be removed.",
};
const storageRules: Record<StorageAction, { verb: string; note: string; code: string }> = {
  Upload: { verb: "INSERT", note: "Allow uploads only into the user’s folder.", code: ['on storage.objects for insert', 'to authenticated with check (', '  bucket_id = \'evidence\' and', '  (storage.foldername(name))[1] = (select auth.uid()::text)', ');'].join("\n") },
  Download: { verb: "SELECT", note: "Allow owners to list and download their files.", code: ['on storage.objects for select', 'to authenticated using (', '  bucket_id = \'evidence\' and owner_id = (select auth.uid()::text)', ');'].join("\n") },
  Replace: { verb: "SELECT + UPDATE", note: "Upsert needs both read and update permission.", code: ['-- create matching SELECT and UPDATE policies', 'using (owner_id = (select auth.uid()::text))', 'with check (bucket_id = \'evidence\');'].join("\n") },
  Delete: { verb: "DELETE", note: "Only the owner may remove the object metadata and file.", code: ['on storage.objects for delete', 'to authenticated using (', '  owner_id = (select auth.uid()::text)', ');'].join("\n") },
};
const cronSchedules = {
  "Every 10 min": { expression: "*/10 * * * *", job: "Process queued notifications" },
  "Nightly": { expression: "0 2 * * *", job: "Delete expired sessions" },
  "Weekly": { expression: "0 9 * * 1", job: "Refresh weekly metrics" },
};

const authExamples: Record<AuthView, { title: string; label: string; summary: string; code: string }> = {
  signin: { title: "sign-in.ts", label: "1 · Sign in", summary: "Auth returns a JWT-backed session. The client automatically sends that identity with Data API requests.", code: ["const { data, error } = await supabase.auth", "  .signInWithPassword({", "    email,", "    password,", "  })", "", "// data.user + data.session", "// RLS now sees auth.uid()"].join("\n") },
  ssr: { title: "lib/supabase/server.ts", label: "2 · SSR clients", summary: "Use @supabase/ssr when identity must be available to Server Components, Server Actions, and Route Handlers.", code: ["import { createServerClient } from '@supabase/ssr'", "import { cookies } from 'next/headers'", "", "const store = await cookies()", "return createServerClient(url, publishableKey, {", "  cookies: {", "    getAll: () => store.getAll(),", "    setAll: (items) => { try {", "      items.forEach(({ name, value, options }) =>", "        store.set(name, value, options))", "    } catch { /* Proxy handles refresh */ } }", "  }", "})"].join("\n") },
  proxy: { title: "proxy.ts", label: "3 · Refresh + protect", summary: "Next.js Server Components cannot write cookies, so a Proxy refreshes tokens and redirects visitors who have no verified claims.", code: ["export async function proxy(request: NextRequest) {", "  let response = NextResponse.next({ request })", "  const supabase = createServerClient(url, key, { cookies: {", "    getAll: () => request.cookies.getAll(),", "    setAll: (items) => {", "      items.forEach(({ name, value }) => request.cookies.set(name, value))", "      response = NextResponse.next({ request })", "      items.forEach(({ name, value, options }) =>", "        response.cookies.set(name, value, options))", "    }", "  }})", "  const { data } = await supabase.auth.getClaims()", "  if (!data?.claims && request.nextUrl.pathname.startsWith('/account'))", "    return NextResponse.redirect(new URL('/login', request.url))", "  return response", "}"].join("\n") },
};

const sqlRecipes: Record<SqlRecipeKey, { label: string; title: string; why: string; code: string }> = {
  schema: { label: "Table + index", title: "01-schema.sql", why: "A useful MVP default: generated ID, owner, constraints, timestamps, RLS, and an index that matches the common list query.", code: ["create table public.todos (", "  id bigint generated by default as identity primary key,", "  user_id uuid not null references auth.users(id) on delete cascade,", "  title text not null check (char_length(title) between 1 and 120),", "  done boolean not null default false,", "  created_at timestamptz not null default now(),", "  updated_at timestamptz not null default now()", ");", "", "alter table public.todos enable row level security;", "create index todos_user_created_idx", "  on public.todos (user_id, created_at desc);"].join("\n") },
  policies: { label: "RLS policies", title: "02-policies.sql", why: "Use USING for existing rows and WITH CHECK for new row values. Name the authenticated role explicitly.", code: ["create policy \"read own todos\" on public.todos", "for select to authenticated", "using ((select auth.uid()) = user_id);", "", "create policy \"insert own todos\" on public.todos", "for insert to authenticated", "with check ((select auth.uid()) = user_id);", "", "create policy \"update own todos\" on public.todos", "for update to authenticated", "using ((select auth.uid()) = user_id)", "with check ((select auth.uid()) = user_id);"].join("\n") },
  queries: { label: "CRUD + upsert", title: "03-everyday-queries.sql", why: "These patterns cover most MVP screens: list recent rows, create one, update one safely, and insert-or-update a unique profile.", code: ["select id, title, done, created_at", "from public.todos", "where user_id = auth.uid()", "order by created_at desc", "limit 20;", "", "insert into public.todos (user_id, title)", "values (auth.uid(), 'Interview 5 users')", "returning *;", "", "insert into public.profiles (id, display_name)", "values (auth.uid(), 'Hovah')", "on conflict (id) do update", "set display_name = excluded.display_name", "returning *;"].join("\n") },
  trigger: { label: "updated_at trigger", title: "04-trigger.sql", why: "Let Postgres maintain audit timestamps consistently, regardless of whether the change came from the browser, a function, or a scheduled job.", code: ["create or replace function public.set_updated_at()", "returns trigger language plpgsql", "set search_path = ''", "as $$ begin", "  new.updated_at = now();", "  return new;", "end; $$;", "", "create trigger todos_set_updated_at", "before update on public.todos", "for each row execute function public.set_updated_at();"].join("\n") },
};


const initialSimTodos: SimTodo[] = [
  { id: 1, title: "Interview 5 users", done: false, updated_at: "10:24:00" },
  { id: 2, title: "Ship landing page", done: true, updated_at: "10:31:00" },
];
const sqlSimulationCode: Record<SqlSimAction, string> = {
  INSERT: ["insert into public.todos (title, done)", "values ('Validate MVP idea', false)", "returning *;"].join("\n"),
  UPDATE: ["update public.todos", "set done = true, updated_at = now()", "where id = 1", "returning *;"].join("\n"),
  UPSERT: ["insert into public.todos (id, title, done)", "values (2, 'Ship MVP v2', false)", "on conflict (id) do update", "set title = excluded.title,", "    done = excluded.done,", "    updated_at = now()", "returning *;"].join("\n"),
  DELETE: ["delete from public.todos", "where done = true", "returning id;"].join("\n"),
};
const sqlSimulationNotes: Record<SqlSimAction, string> = {
  INSERT: "Adds a brand-new row and lets Postgres generate its ID.",
  UPDATE: "Changes matching rows only; RETURNING shows the new values.",
  UPSERT: "Inserts ID 2 when missing, otherwise updates that row.",
  DELETE: "Removes every row currently marked done = true.",
};

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) { setTheme(saved); }
    else if (window.matchMedia?.("(prefers-color-scheme: light)").matches) { setTheme("light"); }
  }, []);
  const [connection, setConnection] = useState<ConnectionState>("idle");
  const [latency, setLatency] = useState<number | null>(null);
  const [rowCount, setRowCount] = useState<number | null>(null);
  const [ideas, setIdeas] = useState<Idea[]>(fallbackIdeas);
  const [copied, setCopied] = useState<string | null>(null);
  const [comparison, setComparison] = useState<"traditional" | "supabase">("supabase");
  const [category, setCategory] = useState("All");
  const [rlsEnabled, setRlsEnabled] = useState(true);
  const [persona, setPersona] = useState<Persona>("Alice");
  const [bucketMode, setBucketMode] = useState<BucketMode>("public");
  const [requests, setRequests] = useState(0);
  const [features, setFeatures] = useState(["Auth + RLS", "Storage + CDN"]);
  const [policyAction, setPolicyAction] = useState<PolicyAction>("SELECT");
  const [storageAction, setStorageAction] = useState<StorageAction>("Upload");
  const [activeEdge, setActiveEdge] = useState<"MY" | "US" | "EU">("MY");
  const [edgePing, setEdgePing] = useState<{ ms: number; status: string } | null>({ ms: 14, status: "CDN Cache HIT (Served locally from MY Edge)" });
  const [isTestingEdge, setIsTestingEdge] = useState(false);
  const testEdge = (edge: "MY" | "US" | "EU") => {
    setActiveEdge(edge);
    setIsTestingEdge(true);
    const latencyMap = { MY: 14, US: 142, EU: 185 };
    window.setTimeout(() => {
      setIsTestingEdge(false);
      setEdgePing({
        ms: bucketMode === "public" ? latencyMap[edge] : latencyMap[edge] + 32,
        status: bucketMode === "public" ? "CDN Cache HIT (Served from Edge)" : "Authorized @ Origin (RLS Validated)",
      });
    }, 320);
  };
  const [cronPreset, setCronPreset] = useState<keyof typeof cronSchedules>("Nightly");
  const [cronRuns, setCronRuns] = useState(3);
  const [cronStatus, setCronStatus] = useState<"idle" | "running" | "success">("idle");
  const [aiView, setAiView] = useState<AiView>("developer");
  const [authView, setAuthView] = useState<AuthView>("signin");
  const [sqlRecipe, setSqlRecipe] = useState<SqlRecipeKey>("schema");
  const [sqlMode, setSqlMode] = useState<SqlMode>("simulator");
  const [sqlSimAction, setSqlSimAction] = useState<SqlSimAction>("INSERT");
  const [simRows, setSimRows] = useState<SimTodo[]>(initialSimTodos);
  const [simBeforeCount, setSimBeforeCount] = useState(initialSimTodos.length);
  const [simChangedIds, setSimChangedIds] = useState<number[]>([]);
  const [simNotice, setSimNotice] = useState("Choose a command, then run it.");
  const touchStart = useRef<number | null>(null);
  const stageRef = useRef<HTMLElement | null>(null);
  const go = useCallback((next: number) => setSlide(Math.max(0, Math.min(chapters.length - 1, next))), []);

  useEffect(() => { stageRef.current?.scrollTo({ top: 0 }); }, [slide]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
      if (event.key === "ArrowRight" || event.key === " ") { event.preventDefault(); go(slide + 1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); go(slide - 1); }
      if (event.key === "Home") go(0);
      if (event.key === "End") go(chapters.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, slide]);

  const testConnection = async () => {
    setConnection("testing");
    const started = performance.now();
    const { data, error, count } = await getSupabase().from("mvp_ideas").select("id, name, pitch, category, votes", { count: "exact" }).order("votes", { ascending: false }).limit(6);
    setLatency(Math.round(performance.now() - started));
    if (error) { setConnection("error"); return; }
    setIdeas((data as Idea[]) ?? fallbackIdeas); setRowCount(count ?? data?.length ?? 0); setConnection("live");
  };
  const copy = async (value: string, id: string) => { await navigator.clipboard?.writeText(value); setCopied(id); window.setTimeout(() => setCopied(null), 1400); };
  const visibleRows = rlsRows.filter((row) => !rlsEnabled || row.access === "public" || row.owner === persona);
  const filteredIdeas = category === "All" ? ideas : ideas.filter((idea) => idea.category === category);
  const categories = ["All", ...Array.from(new Set(ideas.map((idea) => idea.category)))];
  const storageRule = storageRules[storageAction];
  const cron = cronSchedules[cronPreset];
  const authExample = authExamples[authView];
  const sqlExample = sqlRecipes[sqlRecipe];
  const runCronDemo = () => { setCronStatus("running"); window.setTimeout(() => { setCronRuns((value) => value + 1); setCronStatus("success"); }, 850); };
  const toggleFeature = (feature: string) => setFeatures((current) => current.includes(feature) ? current.filter((item) => item !== feature) : [...current, feature]);
  const resetSqlSimulation = () => { setSimRows(initialSimTodos); setSimBeforeCount(initialSimTodos.length); setSimChangedIds([]); setSimNotice("Table reset to its starting rows."); };
  const runSqlSimulation = () => {
    const before = simRows.length;
    const stamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    let next = simRows.map((row) => ({ ...row }));
    let changed: number[] = [];
    let notice = "";
    if (sqlSimAction === "INSERT") {
      const id = Math.max(0, ...next.map((row) => row.id)) + 1;
      next = [...next, { id, title: "Validate MVP idea", done: false, updated_at: stamp }];
      changed = [id]; notice = "INSERT added row #" + id + ".";
    } else if (sqlSimAction === "UPDATE") {
      const exists = next.some((row) => row.id === 1);
      next = next.map((row) => row.id === 1 ? { ...row, done: true, updated_at: stamp } : row);
      changed = exists ? [1] : []; notice = exists ? "UPDATE changed row #1." : "No row matched id = 1.";
    } else if (sqlSimAction === "UPSERT") {
      const exists = next.some((row) => row.id === 2);
      next = exists ? next.map((row) => row.id === 2 ? { ...row, title: "Ship MVP v2", done: false, updated_at: stamp } : row) : [...next, { id: 2, title: "Ship MVP v2", done: false, updated_at: stamp }];
      changed = [2]; notice = exists ? "UPSERT updated existing row #2." : "UPSERT inserted missing row #2.";
    } else {
      const deleted = next.filter((row) => row.done).map((row) => row.id);
      next = next.filter((row) => !row.done);
      changed = []; notice = deleted.length ? "DELETE removed row" + (deleted.length > 1 ? "s " : " ") + deleted.map((id) => "#" + id).join(", ") + "." : "No rows matched done = true.";
    }
    setSimBeforeCount(before); setSimRows(next); setSimChangedIds(changed); setSimNotice(notice);
  };

  return <main className={"deck " + (theme === "light" ? "light-mode" : "")} onTouchStart={(e) => { touchStart.current = e.touches[0]?.clientX ?? null; }} onTouchEnd={(e) => { if (touchStart.current === null) return; const distance = (e.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current; if (Math.abs(distance) > 55) go(slide + (distance < 0 ? 1 : -1)); touchStart.current = null; }}>
    <header className="deck-header">
      <button className="brand brand-lockup" onClick={() => go(0)} aria-label="MRANTI and Supabase Kuala Lumpur — go to first slide"><img className="mranti-logo" src="/supabase-for-mvps-workshop-assets/mranti-30-logo.png" alt="MRANTI 30 Years"/><i>×</i><span className="supabase-kl-logo"><img src={theme === "light" ? "/supabase-for-mvps-workshop-assets/supabase-kl.png" : "/supabase-for-mvps-workshop-assets/supabase-kl-black.png"} alt="Supabase Kuala Lumpur"/></span></button>
      <div className="header-progress" aria-label={"Slide " + (slide + 1) + " of " + chapters.length}><span style={{ width: ((slide + 1) / chapters.length * 100) + "%" }}/></div>
      <button className="theme-toggle" onClick={() => { const next = theme === "dark" ? "light" : "dark"; setTheme(next); localStorage.setItem("theme", next); }} aria-label={"Switch to " + (theme === "dark" ? "light" : "dark") + " mode"}>{theme === "dark" ? <Sun size={14}/> : <Moon size={14}/>}<span>{theme === "dark" ? "Light" : "Dark"}</span></button>
      <div className="slide-count"><b>{String(slide + 1).padStart(2, "0")}</b><span>/ {String(chapters.length).padStart(2, "0")}</span></div>
    </header>
    <aside className="chapter-rail" aria-label="Slideshow chapters">{chapters.map((chapter, index) => <button key={chapter[0]} className={index === slide ? "active" : index < slide ? "visited" : ""} onClick={() => go(index)} aria-current={index === slide ? "step" : undefined}><span>{String(index + 1).padStart(2, "0")}</span><label>{chapter[0]}</label></button>)}</aside>

    <section ref={stageRef} className="stage" aria-live="polite">
      {slide === 0 && <article className="slide hero-slide">
        <div className="slide-copy"><span className="eyebrow"><Sparkles size={14}/> FROM IDEA TO MVP · INTERACTIVE DEMO</span><h1>One database.<br/><em>Less backend glue.</em></h1><p className="lead">Supabase is managed Postgres with the backend services an MVP usually needs—available through one dashboard and one SDK.</p><div className="hero-points"><span><Database/>Real Postgres</span><span><Code2/>Generated API</span><span><ShieldCheck/>Policies near the data</span></div><button className="primary-action" onClick={() => go(1)}>Show me how <ArrowRight size={18}/></button></div>
        <div className="stack-visual"><div className="stack-orbit orbit-one"/><div className="stack-orbit orbit-two"/><div className="stack-core"><Database size={42}/><b>POSTGRES</b><small>source of truth</small></div><span className="stack-node node-auth"><KeyRound/>AUTH</span><span className="stack-node node-api"><Code2/>API</span><span className="stack-node node-file"><Cloud/>STORAGE</span><span className="stack-node node-live"><Radio/>REALTIME</span><p>Start with the center.<br/>Add services when needed.</p></div>
      </article>}

      {slide === 1 && <article className="slide"><Heading step="01 · CONNECT" title="Connect in three lines." text="Your app needs a project URL and a publishable key. The SDK can then reach only what your policies allow."/><div className="two-col"><CodeWindow title="lib/supabase.ts" code={connectCode} action={copied === "connect" ? "COPIED" : "COPY"} onAction={() => copy(connectCode, "connect")}/><div className={"connection-card " + connection}><div className="connection-icon">{connection === "testing" ? <RefreshCw className="spin"/> : connection === "live" ? <Wifi/> : <Server/>}</div><small>LIVE WORKSHOP PROJECT</small><h3>{connection === "idle" ? "Ready to connect" : connection === "testing" ? "Asking Postgres…" : connection === "live" ? "Connection works" : "Connection blocked"}</h3><p>{connection === "idle" ? "This button runs a real SELECT against the Supabase project." : connection === "testing" ? "The request is passing through the Data API and RLS." : connection === "live" ? rowCount + " rows visible through policy · " + latency + " ms" : "Check the project or SELECT policy, then try again."}</p><button onClick={testConnection} disabled={connection === "testing"}>{connection === "live" ? "Test again" : "Test connection"}<Zap size={16}/></button><footer><ShieldCheck size={15}/>Publishable key in browser: yes. Secret/service-role key: never.</footer></div></div></article>}

      {slide === 2 && <article className="slide"><Heading step="02 · AUTH + SSR" title="Auth proves identity. RLS grants access." text="Supabase Auth issues the session; your app keeps it fresh; Postgres policies make the final authorization decision."/><div className="auth-layout"><div className="auth-story"><div className="auth-tabs">{(["signin","ssr","proxy"] as AuthView[]).map((view) => <button key={view} className={authView === view ? "active" : ""} onClick={() => setAuthView(view)}>{authExamples[view].label}</button>)}</div><p className="auth-version-note">Next.js 16+: <b>proxy.ts</b> · Next.js 15 and earlier: <b>middleware.ts</b></p><div className="auth-flow"><span><KeyRound/><b>Browser</b><small>email · OAuth · magic link</small></span><ChevronRight/><span className={authView === "proxy" ? "focus" : ""}><RefreshCw/><b>Next.js Proxy</b><small>refresh cookies</small></span><ChevronRight/><span><Database/><b>Postgres</b><small>RLS checks JWT</small></span></div><div className="auth-summary"><Sparkles/><p><small>{authExample.label}</small><b>{authExample.summary}</b></p></div><div className="auth-rules"><span><Check/><b>Use getClaims()</b><small>Protect pages with verified JWT claims.</small></span><span><Check/><b>Keep RLS enabled</b><small>Middleware is navigation control—not data security.</small></span><span><LockKeyhole/><b>Never expose service role</b><small>Browser code uses the publishable key only.</small></span></div></div><CodeWindow title={authExample.title} code={authExample.code} action={copied === "auth" ? "COPIED" : "COPY"} onAction={() => copy(authExample.code,"auth")} compact/></div></article>}

      {slide === 3 && <article className="slide"><Heading step="03 · WHY IT FEELS EASIER" title="Same product. Less to wire together." text="Supabase does not remove database design. It removes much of the glue around it."/><div className="compare-switch"><button className={comparison === "traditional" ? "active" : ""} onClick={() => setComparison("traditional")}>Traditional setup</button><button className={comparison === "supabase" ? "active" : ""} onClick={() => setComparison("supabase")}>With Supabase</button></div><div className={"compare-canvas " + comparison}>{comparison === "traditional" ? <><FlowNode icon={<MousePointer2/>} label="App UI"/><ChevronRight/><FlowNode icon={<Server/>} label="API server"/><ChevronRight/><FlowNode icon={<Layers3/>} label="ORM"/><ChevronRight/><FlowNode icon={<Database/>} label="Database"/><span className="float f1"><KeyRound/>Auth provider</span><span className="float f2"><Cloud/>File service</span><span className="float f3"><Globe2/>Server deploy</span></> : <><FlowNode icon={<MousePointer2/>} label="App UI"/><ChevronRight/><div className="supabase-box">{[[<Database key="d"/>,"Postgres","data"],[<ShieldCheck key="s"/>,"RLS","access"],[<Cloud key="c"/>,"Storage","files"],[<KeyRound key="k"/>,"Auth","identity"]].map((x) => <div key={String(x[1])}>{x[0]}<b>{x[1]}</b><small>{x[2]}</small></div>)}<span>ONE SDK · ONE PROJECT</span></div></>}</div><div className="takeaway"><Sparkles/><p><b>The real benefit</b><span>Fewer moving parts means a shorter feedback loop from idea → working user flow.</span></p></div></article>}

      {slide === 4 && <article className="slide"><Heading step="04 · DATABASE + DATA API" title="One table becomes an API endpoint—without writing a controller." text="Supabase reflects your Postgres schema into a REST API; the JavaScript SDK acts as a readable request builder while Postgres handles authorization and execution."/><div className="two-col"><CodeWindow title="ideas.ts" code={queryCode} action={copied === "query" ? "COPIED" : "COPY"} onAction={() => copy(queryCode, "query")}/><div className="result-panel"><header><div><span className={connection === "live" ? "live-dot" : ""}/>{connection === "live" ? "LIVE DATA" : "DEMO DATA"}</div><select value={category} onChange={(e) => setCategory(e.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></header><div className="idea-table">{filteredIdeas.slice(0,4).map((idea,index) => <div key={idea.id}><span>{String(index + 1).padStart(2,"0")}</span><p><b>{idea.name}</b><small>{idea.pitch}</small></p><strong>{idea.votes}<small>votes</small></strong></div>)}</div>{connection !== "live" && <button className="inline-test" onClick={testConnection}>Load from Supabase <RefreshCw size={14}/></button>}</div></div><div className="mini-note"><Database/>The SDK builds GET /rest/v1/mvp_ideas under the hood—no backend controller needed, but RLS and schema migrations still apply.</div></article>}

      {slide === 5 && <article className="slide"><Heading step="05 · ROW LEVEL SECURITY" title="A policy answers: who can do what to which rows?" text="A policy is a Postgres rule attached to a table, operation, and role. It is applied automatically to every matching request."/><div className="policy-anatomy"><span><small>WHO</small>authenticated</span><ChevronRight/><span><small>CAN DO</small>{policyAction}</span><ChevronRight/><span><small>TO WHICH ROWS</small>auth.uid() = user_id</span></div><div className="two-col"><div className="policy-control"><div className="toggle-line"><span><ShieldCheck/>RLS policy</span><button className={"switch " + (rlsEnabled ? "on" : "")} onClick={() => setRlsEnabled(!rlsEnabled)} aria-pressed={rlsEnabled} aria-label="Toggle Row Level Security"><i/></button></div><div className="operation-tabs">{(["SELECT","INSERT","UPDATE","DELETE"] as PolicyAction[]).map((action) => <button key={action} className={policyAction === action ? "active" : ""} onClick={() => setPolicyAction(action)}>{action}</button>)}</div><p className="policy-note">{policyNotes[policyAction]}</p><CodeWindow title="policy.sql" code={policyCodes[policyAction]} compact/></div><div className={"policy-result " + (rlsEnabled ? "safe" : "unsafe")}><header><div>{rlsEnabled ? <LockKeyhole/> : <Users/>}<p><b>{rlsEnabled ? persona + "'s data" : "Unprotected data"}</b><small>{rlsEnabled ? policyAction + " policy runs in Postgres" : "API key alone is not authorization"}</small></p></div><div className="persona-mini">{(["Alice","Bob"] as Persona[]).map((name) => <button key={name} className={persona === name ? "active" : ""} onClick={() => setPersona(name)}>{name}</button>)}</div></header><div className="record-list">{visibleRows.map((row) => <div key={row.owner + row.record}><span>{row.owner}</span><p>{row.record}</p><b><Check/>allowed</b></div>)}</div>{rlsEnabled && <footer><LockKeyhole/>{persona === "Alice" ? "Bob's" : "Alice's"} private row is filtered before the response.</footer>}</div></div></article>}

      {slide === 6 && <article className="slide sql-slide"><Heading step="06 · EVERYDAY SQL" title="See exactly what each SQL command changes." text="Browse production-ready recipes, or run safe commands against a simulated todos table and watch rows appear, update, merge, and disappear."/><div className="sql-mode-switch" role="tablist" aria-label="SQL learning mode"><button className={sqlMode === "simulator" ? "active" : ""} onClick={() => setSqlMode("simulator")}><Play/>Table simulator</button><button className={sqlMode === "recipes" ? "active" : ""} onClick={() => setSqlMode("recipes")}><Code2/>SQL recipes</button></div>{sqlMode === "recipes" ? <div className="sql-lab"><nav>{(Object.keys(sqlRecipes) as SqlRecipeKey[]).map((key,index) => <button key={key} className={sqlRecipe === key ? "active" : ""} onClick={() => setSqlRecipe(key)}><span>{String(index+1).padStart(2,"0")}</span><p><b>{sqlRecipes[key].label}</b><small>{key === "schema" ? "start a table" : key === "policies" ? "protect each row" : key === "queries" ? "daily data work" : "automate timestamps"}</small></p><ChevronRight/></button>)}</nav><div className="sql-recipe"><header><span><Database/></span><p><small>WHY DEVELOPERS USE THIS</small><b>{sqlExample.why}</b></p></header><CodeWindow title={sqlExample.title} code={sqlExample.code} action={copied === "sql" ? "COPIED" : "COPY"} onAction={() => copy(sqlExample.code,"sql")} compact/><footer><ShieldCheck/><span><b>SQL Editor is privileged.</b> Run schema changes as migrations; test RLS through a real anon or authenticated client.</span></footer></div></div> : <div className="sql-simulator"><section className="sim-command-card"><header><span><Code2/></span><p><small>CHOOSE A COMMAND</small><b>{sqlSimulationNotes[sqlSimAction]}</b></p></header><div className="sim-action-tabs">{(["INSERT","UPDATE","UPSERT","DELETE"] as SqlSimAction[]).map((action) => <button key={action} className={sqlSimAction === action ? "active" : ""} onClick={() => { setSqlSimAction(action); setSimChangedIds([]); setSimNotice("Ready to run " + action + "."); }}>{action}</button>)}</div><CodeWindow title={sqlSimAction.toLowerCase()+".sql"} code={sqlSimulationCode[sqlSimAction]} action={copied === "sim" ? "COPIED" : "COPY"} onAction={() => copy(sqlSimulationCode[sqlSimAction],"sim")} compact/><div className="sim-actions"><button onClick={resetSqlSimulation}><RefreshCw/>Reset</button><button className="run" onClick={runSqlSimulation}><Play/>Run {sqlSimAction}</button></div></section><section className="sim-table-card"><header><div><span><Database/></span><p><small>SIMULATED TABLE</small><b>public.todos</b></p></div><em>{simRows.length} {simRows.length === 1 ? "row" : "rows"}</em></header><div className="sim-change-strip"><span>{simBeforeCount} before</span><ArrowRight/><b>{simRows.length} after</b><p>{simNotice}</p></div><div className="sim-data-table" role="table" aria-label="Simulated todos table"><div className="sim-table-head" role="row"><b>ID</b><b>TITLE</b><b>DONE</b><b>UPDATED_AT</b></div>{simRows.length ? simRows.map((todo) => <div key={todo.id} role="row" className={simChangedIds.includes(todo.id) ? "changed" : ""}><code>{todo.id}</code><strong>{todo.title}</strong><span className={todo.done ? "yes" : "no"}>{todo.done ? "true" : "false"}</span><time>{todo.updated_at}</time></div>) : <div className="sim-empty"><Database/><b>No rows remain</b><small>Run INSERT or UPSERT to add one.</small></div>}</div><footer><ShieldCheck/><span><b>Safe browser simulation.</b> It teaches SQL behavior without changing your live Supabase project.</span></footer></section></div>}</article>}

      {slide === 7 && <article className="slide"><Heading step="07 · STORAGE" title="Files live in buckets. Access lives in policies." text="The file bytes live in Storage; file metadata lives in storage.objects. RLS policies on that table control upload, list, download, replace, and delete."/><div className="two-col"><div className="storage-browser"><header><Cloud/><p><b>evidence</b><small>private bucket</small></p><span>3 objects</span></header><div className="folder"><b>/ {persona.toLowerCase()}</b><div><FileKey/><p><strong>customer-interview.pdf</strong><small>2.4 MB · owner: {persona}</small></p><span>private</span></div><div><FileKey/><p><strong>prototype.png</strong><small>840 KB · owner: {persona}</small></p><span>private</span></div></div><footer>Public bucket changes download access—not who may upload, replace, or delete.</footer></div><div className="storage-policy"><div className="operation-tabs storage-tabs">{(["Upload","Download","Replace","Delete"] as StorageAction[]).map((action) => <button key={action} className={storageAction === action ? "active" : ""} onClick={() => setStorageAction(action)}>{action}</button>)}</div><div className="required-policy"><span>{storageAction === "Upload" ? <Upload/> : storageAction === "Download" ? <Download/> : storageAction === "Delete" ? <Trash2/> : <RefreshCw/>}</span><p><small>REQUIRED POLICY</small><b>{storageRule.verb}</b><em>{storageRule.note}</em></p></div><CodeWindow title="storage-policy.sql" code={storageRule.code} compact/><p className="storage-tip"><ShieldCheck/>Never use a service-role key in the browser—it bypasses Storage RLS.</p></div></div></article>}

      {slide === 8 && <article className="slide"><Heading step="08 · STORAGE CDN" title="Store once. Deliver from the edge." text="Every Storage request reaches the CDN first. Public files get better cache reuse; private files trade some cache efficiency for per-user authorization."/><div className="two-col"><div className="cdn-map"><div className="map-label"><Globe2/>CDN EDGE NETWORK</div><div className="edge-telemetry"><Zap className={isTestingEdge ? "spin" : ""}/><div><b>{activeEdge} Edge Node: {isTestingEdge ? "Testing latency…" : edgePing ? edgePing.ms + " ms" : "14 ms"}</b><small>{isTestingEdge ? "Sending HTTP GET request…" : edgePing ? edgePing.status : "Click an edge node below to test"}</small></div></div><div className="origin"><Cloud/><b>Supabase Storage</b><small>origin · Singapore</small></div><button className={"edge e1 " + (activeEdge === "MY" ? "active" : "")} onClick={() => testEdge("MY")}><span>MY</span><small>14 ms</small></button><button className={"edge e2 " + (activeEdge === "US" ? "active" : "")} onClick={() => testEdge("US")}><span>US</span><small>142 ms</small></button><button className={"edge e3 " + (activeEdge === "EU" ? "active" : "")} onClick={() => testEdge("EU")}><span>EU</span><small>185 ms</small></button><p>{bucketMode === "public" ? "Public Bucket (Global CDN): MY, US, and EU edges fetch Singapore origin once on Cache MISS, then serve requests locally worldwide." : "Private Bucket (Global Auth): Every request from MY, US, and EU edges checks JWT identity & RLS permissions at Origin."}</p></div><div className="bucket-panel"><div className="bucket-tabs"><button className={bucketMode === "public" ? "active" : ""} onClick={() => setBucketMode("public")}>Public bucket</button><button className={bucketMode === "private" ? "active" : ""} onClick={() => setBucketMode("private")}>Private bucket</button></div><div className="bucket-icon">{bucketMode === "public" ? <Globe2/> : <FileKey/>}</div><h3>{bucketMode === "public" ? "Product images & public assets" : "User documents & private media"}</h3><p>{bucketMode === "public" ? "Anyone with the URL can download. High CDN cache reuse and simplest delivery." : "Access is checked per user. Serves with authenticated downloads or signed URLs."}</p><ul><li><Check/>{bucketMode === "public" ? "getPublicUrl()" : "RLS or signed URL"}</li><li><Check/>{bucketMode === "public" ? "High CDN cache reuse" : "Per-user authorization"}</li></ul><div className="cdn-auto-badge"><Zap/><b>Interactive Edge Route Simulator</b><span>Click MY, US, or EU nodes to test real delivery speed</span></div></div></div></article>}

      {slide === 9 && <article className="slide"><Heading step="09 · CRON JOBS" title="Let Postgres do the recurring work." text="Supabase Cron uses pg_cron. Schedule SQL, database functions, HTTP calls, or Edge Functions—and inspect every run from the Dashboard."/><div className="two-col"><div className="cron-builder"><small>CHOOSE A SCHEDULE</small><div className="cron-presets">{(Object.keys(cronSchedules) as Array<keyof typeof cronSchedules>).map((preset) => <button key={preset} className={cronPreset === preset ? "active" : ""} onClick={() => {setCronPreset(preset);setCronStatus("idle")}}>{preset}</button>)}</div><div className="cron-expression"><CalendarClock/><p><small>CRON EXPRESSION</small><b>{cron.expression}</b><span>{cron.job}</span></p></div><CodeWindow title="schedule.sql" code={["select cron.schedule(", "  'mvp-job', '" + cron.expression + "',", "  " + String.fromCharCode(36,36) + " " + (cronPreset === "Nightly" ? "delete from sessions where expires_at < now();" : "select process_mvp_job();") + " " + String.fromCharCode(36,36), ");"].join("\n")} compact/><button className={"run-job " + cronStatus} onClick={runCronDemo} disabled={cronStatus === "running"}><Play size={14}/>{cronStatus === "running" ? "Executing test run in Postgres…" : cronStatus === "success" ? "Test run completed (logged in pg_cron)" : "Trigger manual test run"}</button></div><div className="job-history"><header><div><Radio/><p><b>mvp-job</b><small>MONITORED IN POSTGRES</small></p></div><span>{cronPreset}</span></header><div className="job-summary"><strong>{cronRuns}</strong><span>successful runs</span><i>0 failed</i></div><div className="run-list">{["just now","yesterday","2 days ago"].map((time,index) => <div key={time}><Check/><p><b>SUCCEEDED</b><small>{index === 0 && cronStatus === "success" ? "just now (manual test)" : time}</small></p><span>{index === 0 ? "128 ms" : "94 ms"}</span></div>)}</div><footer><Database/>pg_cron logs every automatic & manual run into cron.job_run_details</footer></div></div></article>}

      {slide === 10 && <article className="slide"><Heading step="10 · AI + AGENTIC DEVELOPMENT" title="Supabase gives AI tools context—and your app an AI-ready backend." text="Separate two ideas: AI agents that help developers manage Supabase, and AI features you build into your own product."/><div className="ai-switch"><button className={aiView === "developer" ? "active" : ""} onClick={() => setAiView("developer")}>Build with AI agents</button><button className={aiView === "product" ? "active" : ""} onClick={() => setAiView("product")}>Build AI into a product</button></div>{aiView === "developer" ? <div className="agent-grid"><div className="agent-flow"><span><Bot/><b>AI coding agent</b><small>Cursor · Claude · Codex</small></span><ArrowRight/><span className="mcp-node"><Sparkles/><b>Supabase MCP</b><small>scoped tools + context</small></span><ArrowRight/><span><Database/><b>Your project</b><small>schema · SQL · logs</small></span></div><div className="agent-capabilities"><article><Code2/><p><b>MCP Server</b><small>Read schema, run queries, manage migrations, inspect logs.</small></p></article><article><Layers3/><p><b>Agent Plugin + Skills</b><small>Procedural guidance and one-step agent setup.</small></p></article><article><ShieldCheck/><p><b>Safe agentic pattern</b><small>Development project, project scope, read-only mode, human review.</small></p></article></div><div className="agent-warning"><LockKeyhole/><p><b>An agent gets developer permissions—not customer permissions.</b><span>Do not connect it to production data or expose the developer MCP server to end users.</span></p></div></div> : <div className="ai-product-grid"><article><Database/><p><b>pgvector</b><small>Semantic search, recommendations, and RAG inside Postgres.</small></p></article><article><Zap/><p><b>Edge Functions</b><small>Call external LLMs while keeping provider keys off the client.</small></p></article><article><Sparkles/><p><b>Built-in embeddings</b><small>Generate gte-small text embeddings in the Edge Runtime without an external API.</small></p></article><article><Server/><p><b>Host your own MCP</b><small>Expose your product’s tools to customer agents from an Edge Function.</small></p></article><div className="ai-truth"><b>What Supabase is not</b><span>It is not a general-purpose chat model provider. For most generation you bring an LLM; Supabase supplies the data, security, vectors, functions, and agent tooling.</span></div></div>}</article>}

      {slide === 11 && <article className="slide"><Heading step="11 · LIVE MEMORY WALL" title="One tiny app. Five Supabase features." text="Turn the concepts into a real room activity: every comment is a database row, every photo is a Storage object, and Realtime keeps the wall in sync."/><div className="wall-demo-grid"><div className="wall-demo-preview"><span><MessageCircle/></span><small>LIVE WORKSHOP APP</small><h3>Leave one idea worth remembering.</h3><p>Participants post a takeaway, optionally attach a photo, and see new memories appear without refreshing.</p><a href="/supabase-for-mvps-workshop/wall">Open the live wall <ArrowRight/></a></div><div className="wall-demo-flow"><article><Database/><p><b>Database</b><small>Comments become rows in Postgres.</small></p></article><article><Cloud/><p><b>Storage + CDN</b><small>Photos upload once and load from a public URL.</small></p></article><article><ShieldCheck/><p><b>RLS policies</b><small>Anyone can read and post; clients cannot edit or delete.</small></p></article><article><Radio/><p><b>Realtime</b><small>New cards appear for everyone in the room.</small></p></article><div><LockKeyhole/><p><b>Safe browser connection</b><span>The app uses a publishable key. Policies—not a hidden secret—decide what visitors may do.</span></p></div></div></div></article>}

      {slide === 12 && <article className="slide"><Heading step="12 · THE PRACTICAL RECIPE" title="Use what the MVP needs. Nothing more." text="Start with the core flow. Add scheduling or AI only after the product has a real recurring or intelligence-driven job."/><div className="two-col"><div className="feature-picker"><small>BUILD YOUR MVP STACK</small><Feature icon={<Database/>} label="Database" detail="Always: your source of truth" active locked/><Feature icon={<KeyRound/>} label="Auth + RLS" detail="When users own private data" active={features.includes("Auth + RLS")} onClick={() => toggleFeature("Auth + RLS")}/><Feature icon={<Cloud/>} label="Storage + CDN" detail="When the product has files" active={features.includes("Storage + CDN")} onClick={() => toggleFeature("Storage + CDN")}/><Feature icon={<CalendarClock/>} label="Cron" detail="When work must repeat on a schedule" active={features.includes("Cron")} onClick={() => toggleFeature("Cron")}/><Feature icon={<Bot/>} label="AI / Agents" detail="When search, generation, or agent tools add value" active={features.includes("AI / Agents")} onClick={() => toggleFeature("AI / Agents")}/></div><div className="recipe-output"><div className="recipe-flow"><span><MousePointer2/>APP UI</span><ChevronRight/><div><b>SUPABASE</b><small>{features.length + 1} selected building blocks</small><section>{["Database",...features].map((item) => <i key={item}><Check/>{item}</i>)}</section></div></div><div className="final-message"><Rocket/><p><small>REMEMBER THIS</small><b>Postgres stores the truth. Policies protect it. Storage delivers files. Cron handles repetition. AI tools accelerate the work.</b></p></div><a href="https://supabase.com/docs" target="_blank" rel="noreferrer">Explore the official docs <ExternalLink/></a></div></div></article>}

      {slide === 13 && <article className="slide"><Heading step="13 · STAY CONNECTED" title="Follow MRANTI & Supabase Kuala Lumpur" text="Scan the QR codes below or follow us on Instagram to stay updated on future developer workshops, hackathons, and community meetups."/><div className="follow-grid"><div className="follow-card mranti"><header><img className="follow-logo mranti" src="/supabase-for-mvps-workshop-assets/mranti-30-logo.png" alt="MRANTI"/><div><b>MRANTI</b><small>@mymranti</small></div></header><div className="qr-box"><img src="/mranti-ig-qr.png" alt="MRANTI Instagram QR Code"/></div><a href="https://www.instagram.com/mymranti/" target="_blank" rel="noreferrer">Follow @mymranti <ExternalLink size={14}/></a></div><div className="follow-card supabase"><header><span className="supabase-kl-logo follow-logo"><img src={theme === "light" ? "/supabase-for-mvps-workshop-assets/supabase-kl.png" : "/supabase-for-mvps-workshop-assets/supabase-kl-black.png"} alt="Supabase KL"/></span><div><b>Supabase Kuala Lumpur</b><small>@supabase_kl</small></div></header><div className="qr-box"><img src="/supabase-kl-ig-qr.png" alt="Supabase KL Instagram QR Code"/></div><a href="https://www.instagram.com/supabase_kl/" target="_blank" rel="noreferrer">Follow @supabase_kl <ExternalLink size={14}/></a></div></div></article>}
    </section>

    <footer className="deck-footer"><button onClick={() => go(slide - 1)} disabled={slide === 0} aria-label="Previous slide"><ArrowLeft/></button><p><b>{chapters[slide][1]}</b><span>Use ← → keys or swipe</span></p><button className="next" onClick={() => go(slide + 1)} disabled={slide === chapters.length - 1}>{slide === chapters.length - 1 ? "END" : "NEXT"}<ArrowRight/></button></footer>
  </main>;
}

function Heading({step,title,text}:{step:string;title:string;text:string}) { return <div className="slide-heading"><span className="eyebrow">{step}</span><h2>{title}</h2><p>{text}</p></div> }
function CodeWindow({title,code,action,onAction,compact=false}:{title:string;code:string;action?:string;onAction?:()=>void;compact?:boolean}) { return <div className={"code-window " + (compact ? "compact" : "")}><header><span><i/><i/><i/></span><b>{title}</b>{onAction ? <button onClick={onAction}>{action}</button> : <em/>}</header><pre>{code}</pre></div> }
function FlowNode({icon,label}:{icon:React.ReactNode;label:string}) { return <div className="flow-node">{icon}<b>{label}</b></div> }
function Feature({icon,label,detail,active,locked,onClick}:{icon:React.ReactNode;label:string;detail:string;active:boolean;locked?:boolean;onClick?:()=>void}) { return <button className={active ? "active" : ""} onClick={onClick} disabled={locked}><span>{icon}</span><p><b>{label}</b><small>{detail}</small></p><i>{active ? <Check/> : "+"}</i></button> }
