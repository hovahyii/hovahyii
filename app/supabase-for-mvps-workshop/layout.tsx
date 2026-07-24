import type { Metadata } from "next";
import "./workshop.css";

const title = "Supabase for MVPs — Interactive Workshop";
const description =
  "An interactive guide to Supabase for MVPs: Auth and SSR middleware, everyday SQL, Postgres policies, Storage and CDN, Cron Jobs, AI tools, and a live Memory Wall.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/supabase-for-mvps-workshop-assets/favicon.svg",
    shortcut: "/supabase-for-mvps-workshop-assets/favicon.svg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/supabase-for-mvps-workshop-assets/og.png",
        width: 1792,
        height: 922,
        alt: "Supabase for MVPs — one database, less backend glue.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/supabase-for-mvps-workshop-assets/og.png"],
  },
};

export default function SupabaseWorkshopLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="supabase-workshop-root">{children}</div>;
}