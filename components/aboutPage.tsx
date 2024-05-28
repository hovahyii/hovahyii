import React from 'react'
import { Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Work from "./work"
import Badge from './badges'
import Image from 'next/image'
import Link from 'next/link'
import { SiHuawei } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

export default function About(){
  return (
   <div className="lg:block lg:w-1/3 overflow-y-auto">
    <div className="mt-12 flex flex-col items-center md:items-start text-center md:text-left">
      <Avatar className="w-1/3 h-1/2">
        {/* Priority attribute added to improve LCP */}
        <Image alt="Hovah Yii" width={512} height={512} src="/hovah.jpeg" priority />
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
      <div className="ml-2 mt-4 flex w-full max-w-xs flex-col sm:flex-row sm:space-x-4">
        <Input placeholder="Your enquiry..." />
        <Button className="mt-2 sm:mt-0"><Link href="https://api.whatsapp.com/send?phone=601110501375&text=Hi,%20Hovah.%20I%20need%20assistance">Message</Link></Button>
      </div>
      <div className="ml-2  mt-4 flex space-x-4">
        <Link href="https://www.linkedin.com/in/hovahyii" aria-label="Connect with Hovah on Linkedin" target="_blank"><FaLinkedin className="text-gray-500" size="1.5em"/> </Link>
        <Link href="https://github.com/hovahyii" aria-label="Checkout Hovah's repo" target="_blank"><FaGithub className="text-gray-500" size="1.5em" /></Link>
        <Link href="https://www.hackerrank.com/profile/hovahyii" aria-label="Connect with Hovah on HackerRank" target="_blank"><FaHackerrank className="text-gray-500" size="1.5em"/> </Link>
        <Link href="https://buymeacoffee.com/hovahyii" aria-label="Consider buying Hovah a coffee" target="_blank"><SiBuymeacoffee className="text-gray-500" size="1.5em" /></Link>
      </div>
    </div>
    <Work />
    <Badge />
   </div>
  )
}
