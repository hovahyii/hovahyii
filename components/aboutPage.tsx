"use client"

import React, { useState } from 'react';
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

export default function About(){
  const [enquiry, setEnquiry] = useState('');

  const handleInputChange = (e: any) => {
    setEnquiry(e.target.value);
  };

  const whatsappLink = `https://api.whatsapp.com/send?phone=601110501375&text=Hi,%20Hovah.${encodeURIComponent(enquiry)}`;

  return (
    <div className="lg:block lg:w-1/3 overflow-y-auto">
      <div className="mt-12 flex flex-col items-center md:items-start text-center md:text-left">
        <Avatar className="w-1/3 h-1/2">
          {/* Priority attribute added to improve LCP */}
          <Image alt="Hovah Yii" width={512} height={512} src="/formal.png" priority />
        </Avatar>
        <h1 className="mt-4 text-4xl font-bold">Hovah Yii</h1>
        <div className="mt-2 flex items-center">
          <MdLocationCity className="text-gray-500" size="1.2em"/>
          <span className="ml-1 text-sm md:text-lg text-gray-500">Selangor, Malaysia</span>
          <SiHuawei className="ml-2 md:ml-4 text-red-500" size="1.2em"/>
          <span className="ml-1 text-sm md:text-lg">RF Engineer Intern</span>
        </div>
        <p className="mt-4 text-xl font-semibold">Student, Mentor, Developer</p>
        <p className="mt-2 text-gray-600">
          Need a solution designed by me? 🚀
        </p>
        <div className=" mt-4 flex w-full max-w-xs flex-col sm:flex-row sm:space-x-4">
        <Input 
            placeholder="Your enquiry..." 
            className="shadow border border-gray-300  " 
            value={enquiry} 
            onChange={handleInputChange} 
          />
          <Button className="mt-2 sm:mt-0">
            <Link href={whatsappLink} target="_blank">Message</Link>
          </Button>
        </div>
          <SocialMedia />
      </div>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold text-center">Professional Summary</h2>
        <p className="mt-4">
          Honored with the "Best of the Best" Staff award at Citrex 2024 for the project DISTILWISE IoT 🏆. A mentor at Chumbaka since the second year, teaching secondary students about Arduino and programming 👨‍🏫. Developed more than seven web and two mobile applications 🌐📱. Created the Leica Official Store Malaysia Shopify website at Go-Emerge Sdn Bhd, increasing web traffic and customer subscriptions 📈.
        </p>
        <p className="mt-4">
          Achieved a threefold increase in daily web traffic and enhanced SEO at Go E-Merge Sdn Bhd 🔍. Completed five Laravel projects at Mahiran Digital Sdn Bhd, improving system integration and client satisfaction 👍.
        </p>
        <p className="mt-4">
          Actively involved in volunteer work 🤝. Appointed as the Backend Team Lead for TEDxPetalingStreet, leading an Agile team to upgrade the web infrastructure 💻. Certified in Google Project Management, HCIA-AI, and Microsoft Azure AI Fundamentals. Proficient in Chinese, English, and Malay 📜. Dedicated to continuous learning and ready for future technological challenges and achievements 🚀.
        </p>
      </div>
      <Work />
      <Badge />
    </div>
  );
}
