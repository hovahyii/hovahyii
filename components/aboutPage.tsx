import React from 'react'
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Work from "./work"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineAim } from "react-icons/ai";
import { MdLocationCity } from "react-icons/md";
import Link from 'next/link'
import { SiHuawei } from "react-icons/si";

export default function About(){
  return (
   <div className=" lg:block lg:w-1/3 overflow-y-auto">
    <div className="mt-12 flex flex-col items-center md:items-start text-center md:text-left">
      <Avatar className="w-1/3 h-1/2">
        <AvatarImage alt="Hovah Yii" src="/hovah.jpeg?height=512&width=512" />
      </Avatar>
      <h1 className="mt-4 text-4xl font-bold">Hovah Yii</h1>
      <div className="mt-2 flex items-center">
        <MdLocationCity   className="text-gray-500" size="1.2em"/>
        <span className="ml-1 text-sm md:text-lg  text-gray-500"> Selangor, Malaysia</span>
        <SiHuawei    className="ml-2 md:ml-4 text-red-500" size="1.2em"/>
        <span className="ml-1 text-sm  md:text-lg "> RF Engineer Intern</span>
      </div>
      <p className="mt-4 text-xl font-semibold">Student, Mentor, Developer</p>
      <p className="mt-2 text-gray-600">
        Need a solution designed by me? 🚀
      </p>
      <div className="mt-4 flex w-full max-w-xs flex-col sm:flex-row sm:space-x-4">
        <Input placeholder="Your enquiry..." />
        <Button className="mt-2 sm:mt-0"><Link href="https://api.whatsapp.com/send?phone=601110501375&text=Hi,%20Hovah.%20I%20need%20asssitance">Message</Link></Button>
      </div>
      <div className="mt-4 flex space-x-4">
        <Link href="https://www.linkedin.com/in/jehovah-yii-zui-hon/" target="_blank"><FaLinkedin  className="text-gray-500" size="1.5em"/> </Link>
        <Link href="https://github.com/hovahyii" target="_blank"><FaGithub   className="text-gray-500" size="1.5em" /></Link>

      </div>
    </div>
      <Work />

  </div>
  )
}

