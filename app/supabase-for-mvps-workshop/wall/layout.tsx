import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MRANTI Memory Wall — Supabase Live Demo",
  description: "Post a comment, upload a photo, and watch Supabase Database, Storage, CDN, RLS, and Realtime work together.",
};

export default function MemoryWallLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
