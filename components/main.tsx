"use client";

import About from "@/components/aboutPage";
import ProjectPage from "@/components/projects";
import Footer from "@/components/footer";
import ContactVCFComponent from "@/components/ContactVCFComponent";
import QRCodeDrawer from "@/components/QRCodeDrawer";
import WelcomePopup from "@/components/WelcomePopup";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Main() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before checking theme to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkMode = mounted && currentTheme === 'dark';

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <>
      <WelcomePopup />
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow p-4 flex justify-center space-x-12 md:space-x-24 ">
        <ContactVCFComponent isDarkMode={isDarkMode} />
        <QRCodeDrawer isDarkMode={isDarkMode} />
      </div>
      <div className="mx-auto px-4 mb-4 sm:px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row pt-20">
        {/* About Page */}
        <About isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        {/* Cards Section */}
        <ProjectPage isDarkMode={isDarkMode} />
      </div>
      <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
