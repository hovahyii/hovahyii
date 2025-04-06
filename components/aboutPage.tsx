"use client";

import React, { useState, useEffect } from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Work from "./work";
import Badge from './badges';
import Image from 'next/image';
import Link from 'next/link';
import { SiHuawei } from "react-icons/si";
import { MdLocationCity } from "react-icons/md";
import SocialMedia from './socialMedia';


interface Props {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ToggleButton: React.FC<Props> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div  className={`mt-2 mb-2 toggle-button ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
      <div className="toggle-icon">{isDarkMode ? '🌙' : '☀️'}</div>
    </div>
  );
};

const About: React.FC<Props> = ({ isDarkMode, toggleDarkMode }) => {
  const [enquiry, setEnquiry] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnquiry(e.target.value);
  };

  const whatsappLink = `https://api.whatsapp.com/send?phone=601110501375&text=Hi,%20Hovah.${encodeURIComponent(enquiry)}`;

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`lg:block lg:w-1/3 overflow-y-auto ${isDarkMode ? 'dark' : ''}`}>

      <div className="flex flex-col items-center lg:items-start text-center md:text-left">
        <Avatar className="w-1/3 h-1/2">
          <Image alt="Hovah Yii" width={512} height={512} src="/formal.png" priority />
        </Avatar>
        <h1 className={`mt-4 text-4xl  font-bold dark:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>Jehovah Yii Zui Hon</h1>
        <ToggleButton  isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <div className="mt-2 flex items-center">
          <MdLocationCity className={`text-gray-500  ${isDarkMode ? 'text-gray-300 ' : 'text-gray-500'}`} size="1.2em" />
          <span className={`ml-1 text-sm md:text-lg dark:text-white ${isDarkMode ? 'text-white ' : 'text-black'}`}>Selangor, Malaysia</span>
          <SiHuawei className="ml-2 md:ml-4 text-red-500" size="1.2em" />
          <span className={`ml-1 text-sm md:text-lg dark:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>Radio Frequency Engineer</span>
        </div>
        <p className={`mt-4 text-xl font-semibold dark:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>Master's Student, Mentor, Developer</p>
        <p className={`mt-2 dark:text-red-400 ${isDarkMode ? 'text-red-400' : 'text-gray-600'}`}>
          Need a solution designed by me? 🚀
        </p>
        <div className="mt-4 flex w-full max-w-xs flex-col sm:flex-row sm:space-x-4">
          <Input
            placeholder="Your enquiry..."
            className="  dark:bg-white text-black"
            value={enquiry}
            onChange={handleInputChange}
          />
          <Button className={`mt-2 sm:mt-0 dark:bg-red-600 dark:text-white hover:bg-slate-300 hover:text-black ${isDarkMode ? 'bg-red-600 text-white hover:bg-gray-500 hover:text-white' : 'bg-red-600 text-white'}`}>
            <Link href={whatsappLink} target="_blank">Message</Link>
          </Button>
        </div>
        <SocialMedia isDarkMode={isDarkMode} />
      </div>

      <div className={`mt-8 p-4 rounded-lg ${isDarkMode ? 'bg-white text-black' : 'bg-gray-100 text-black'}`}>
        <h2 className="text-2xl font-bold text-center text-black">Professional Summary</h2>
        <p className="mt-4 text-black">
          Awarded the "Best of the Best" Staff Award at CITREX 2024 for my final year innovation, DISTILWISE IoT, I've built a career defined by technical depth, mentorship, and cross-border collaboration. As a Radio Frequency Engineer at Huawei Malaysia, I specialize in optimizing 4G and 5G network performance across diverse global regions using advanced tools like QGIS, ThreeCloud, and GeneCloud—delivering real-time diagnostics, performance insights, and infrastructure strategy.
        </p>
        <p className="mt-4 text-black">
          In tandem with my engineering career, I serve as a mentor at CodingBar, nurturing young tech minds through hands-on teaching and project guidance. I'm also the founder of Hovah Digital Solutions, a growing tech company dedicated to crafting smart digital ecosystems for SMEs—recently delivering websites for HLF Cooling and Panca Hydrau-Pneumatic Sdn Bhd.
        </p>
        <p className="mt-4 text-black">
          From building performance dashboards across the Asia Pacific, Middle East, Southern Africa, and Latin America during my internship to launching 7+ web apps and 2 mobile apps, my work spans continents and codebases. At Go-Emerge Sdn Bhd, I developed the Leica Official Store Malaysia Shopify site and tripled web traffic through SEO and design. At Mahiran Digital, I completed five Laravel systems that streamlined business operations.
        </p>
        <p className="mt-4 text-black">
          I've led Agile backend teams at TEDxPetalingStreet, mentored through Chumbaka, and earned certifications in Google Project Management, HCIA-AI, and Microsoft Azure AI Fundamentals. Fluent in Chinese, English, and Malay, I thrive in multicultural, cross-functional teams.
        </p>
        <p className="mt-4 text-black">
          Whether leading, coding, teaching, or building—I move with vision. I'm not just chasing innovation. I'm engineering the future, one connection, one line of code, one bold step at a time. 🚀
        </p>
      </div>

      <Work isDarkMode={isDarkMode} />
      <Badge isDarkMode={isDarkMode} />
    </div>
  );
};

export default About;
