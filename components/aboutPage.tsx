"use client";

import React, { useState } from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Work from "./work";
import Badge from './badges';
import BlogSection from './blogSection';
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
    <div className={`mt-2 mb-2 toggle-button ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
      <div className="toggle-icon">{isDarkMode ? '🌙' : '☀️'}</div>
    </div>
  );
};

const About: React.FC<Props> = ({ isDarkMode, toggleDarkMode }) => {
  const [enquiry, setEnquiry] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnquiry(e.target.value);
  };

  const whatsappLink = `https://api.whatsapp.com/send?phone=601110501375&text=${encodeURIComponent(enquiry)}`;

  return (
    <div className={`lg:block lg:w-1/3 overflow-y-auto ${isDarkMode ? 'dark' : ''}`}>

      <div className="flex flex-col items-center lg:items-start text-center md:text-left">
        <Avatar className="w-1/3 h-1/2">
          <Image alt="Hovah Yii" width={512} height={512} src="/formal.png" priority />
        </Avatar>
        <h1 className={`mt-4 text-4xl  font-bold dark:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>Lt  M. Jehovah Yii Zui Hon</h1>
        <ToggleButton isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <div className="mt-2 flex items-center">
          <MdLocationCity className={`text-gray-500  ${isDarkMode ? 'text-gray-300 ' : 'text-gray-500'}`} size="1.2em" />
          <span className={`ml-1 text-sm md:text-lg dark:text-white ${isDarkMode ? 'text-white ' : 'text-black'}`}>Selangor, Malaysia</span>
          <SiHuawei className="ml-2 md:ml-4 text-red-500" size="1.2em" />
          <span className={`ml-1 text-sm md:text-lg dark:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>Radio Frequency Engineer </span>
        </div>
        <p className={`mt-4 text-xl font-semibold dark:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>Master's Student, Mentor, Developer</p>
        <p className={`mt-2 text-sm dark:text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Engineering Technologist (BEM) | CITREX '24 Best of Best | PSM '25 Best Innovation | Huawei ICT '24 (Cloud) 3rd | HCIA-AI | HCIP-GaussDB (pursuing)</p>
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
          Holding dual roles at Huawei Malaysia — primarily a Radio Frequency Engineer, also an Intermediate Data Analyst.
        </p>
        <p className="mt-4 text-black">
          As RF Engineer, I drive the U Mobile 5G rollout in Malaysia — end-to-end optimization across KPI monitoring, OSS analysis, planning, UAT and antenna verification — and built the HW-LTE-Traffic-Volume tool, whose 23 daily monitoring cycles and 46 regional reports verified traffic migration across the Swap &amp; Mod workstream and underpinned the 4G MOD close-out.
        </p>
        <p className="mt-4 text-black">
          In Vietnam, I led drive test &amp; network assurance for MobiFone&apos;s RAN 2026 5G delivery in Hanoi — benchmarking 14 VIP routes in a single field day — where my in-house NE Sitename Automapper tool was awarded by the Southeast Asia Delivery &amp; Service Business Department (Jul 2026).
        </p>
        <p className="mt-4 text-black">
          As Data Analyst, I build performance dashboards and deliver insights across APAC, the Middle East, Southern Africa, and Latin America — and I am pursuing HCIP-GaussDB. Beyond work, I mentor at CodingBar and founded Hovah Digital Solutions.
        </p>
      </div>

      <Work isDarkMode={isDarkMode} />
      <Badge isDarkMode={isDarkMode} />
      <BlogSection isDarkMode={isDarkMode} />
    </div>
  );
};

export default About;
