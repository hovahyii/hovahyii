import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white dark:bg-black text-black dark:text-white">
       
          {children}
       
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
