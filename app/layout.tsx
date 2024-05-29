"use client"

import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  isDarkMode: boolean;
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ isDarkMode, children }) => {
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <html lang="en" className={`${inter.className} ${isDarkMode ? 'dark' : ''}`}>
      <metadata />
      <body className="bg-white dark:bg-black text-black dark:text-white">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export default RootLayout;
