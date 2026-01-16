import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export { metadata, viewport } from "./metadata";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Hovah Yii Blog RSS Feed"
          href="/feed.xml"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          title="Hovah Yii Blog JSON Feed"
          href="/feed.json"
        />
      </head>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
