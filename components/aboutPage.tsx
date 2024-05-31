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
    <div className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
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
      <div className="mt-12 flex flex-col items-center md:items-start text-center md:text-left">
        <Avatar className="w-1/3 h-1/2">
          <Image alt="Hovah Yii" width={512} height={512} src="/formal.png" priority />
        </Avatar>
        <h1 className={`mt-4 text-4xl  font-bold dark:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>Jehovah Yii Zui Hon</h1>
        <ToggleButton isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <div className="mt-2 flex items-center">
          <MdLocationCity className={`text-gray-500  ${isDarkMode ? 'text-gray-300 ' : 'text-gray-500'}`} size="1.2em" />
          <span className={`ml-1 text-sm md:text-lg dark:text-white ${isDarkMode ? 'text-white ' : 'text-black'}`}>Selangor, Malaysia</span>
          <SiHuawei className="ml-2 md:ml-4 text-red-500" size="1.2em" />
          <span className={`ml-1 text-sm md:text-lg dark:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>RF Engineer Intern</span>
        </div>
        <p className={`mt-4 text-xl font-semibold dark:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>Student, Mentor, Developer</p>
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
          I was honoured with the <strong>"Best of the Best" Staff award</strong> at Citrex 2024 for my final year project DISTILWISE IoT 🏆. I have been a mentor at Chumbaka since my second year, teaching secondary students about Arduino and programming 👨‍🏫. I have developed more than seven web and two mobile applications 🌐📱.
        </p>
        <p className="mt-4 text-black">
          I developed the Leica Official Store Malaysia Shopify website at Go-Emerge Sdn Bhd, resulting in increased web traffic and more customer subscriptions 📈. Additionally, I achieved a threefold increase in daily web traffic and enhanced SEO at Go E-Merge Sdn Bhd 🔍. During my tenure at Mahiran Digital Sdn Bhd, I successfully completed five Laravel projects, enhancing system integration and ensuring client satisfaction 👍.
        </p>
        <p className="mt-4 text-black">
          I also actively involved in volunteer work 🤝. I was appointed as the Backend Team Lead for TEDxPetalingStreet this year, leading an Agile team to upgrade the web infrastructure 💻. I am certified in Google Project Management, HCIA-AI, and Microsoft Azure AI Fundamentals.
        </p>
        <p className="mt-4 text-black">
          I am proficient in Chinese, English, and Malay 📜. I am dedicated to continuous learning and ready for future technological challenges and achievements 🚀.
        </p>
      </div>

      <Work  isDarkMode={isDarkMode} />
      <Badge isDarkMode={isDarkMode} />
    </div>
  );
};

export default About;
