"use client";

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  children: React.ReactNode;
}

export default function RootLayout({ isDarkMode, toggleDarkMode, children }: RootLayoutProps) {
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <html lang="en" className={`${inter.className} ${isDarkMode ? 'dark' : ''}`}>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
