"use client";

import About from "@/components/aboutPage";
import ProjectPage from "@/components/projects";
import Footer from "@/components/footer";
import RootLayout from "@/app/layout";
import { useState } from "react";

export default function main() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row m-4">
        {/* About Page */}
        <About isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        {/* Cards Section */}
        <ProjectPage isDarkMode={isDarkMode} />
      </div>
      <Footer />
    </>
  );
}
