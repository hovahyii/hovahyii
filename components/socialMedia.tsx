import React from 'react'
import {SiBuymeacoffee } from "react-icons/si";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { SiGooglecloud } from "react-icons/si";


interface SocialMediaProps {
  isDarkMode: boolean;
}


const SocialMedia = ({ isDarkMode }: SocialMediaProps) => {
  return (
    <div className="ml-2 mt-4 flex space-x-4">
    <Link href="https://www.linkedin.com/in/hovahyii" aria-label="Connect with Hovah on Linkedin" target="_blank">
      <FaLinkedin  size="1.5em"  className={` text-gray-500 dark:text-white" size="1.5em ${isDarkMode ? '  text-white' : ''}`}/> 
    </Link>
    <Link href="https://github.com/hovahyii" aria-label="Checkout Hovah's repo" target="_blank">
      <FaGithub  size="1.5em"  className={` text-gray-500 dark:text-white" size="1.5em ${isDarkMode ? '  text-white' : ''}`}/> 
    </Link>
    <Link href="https://www.cloudskillsboost.google/public_profiles/0c67c603-196b-4f60-81d1-ecef0d6454b3" aria-label="Checkout Hovah's repo" target="_blank">
      <SiGooglecloud  size="1.5em"  className={` text-gray-500 dark:text-white" size="1.5em ${isDarkMode ? '  text-white' : ''}`}/> 
    </Link>
    <Link href="https://www.hackerrank.com/profile/hovahyii" aria-label="Connect with Hovah on HackerRank" target="_blank">
      <FaHackerrank  size="1.5em"  className={` text-gray-500 dark:text-white" size="1.5em ${isDarkMode ? '  text-white' : ''}`}/> 
    </Link>
    <Link href="mailto:hovahyii@proton.me" aria-label="Email me" target="_blank">
      <MdEmail  size="1.5em"  className={` text-gray-500 dark:text-white" size="1.5em ${isDarkMode ? '  text-white' : ''}`}/> 
    </Link>
    <Link href="https://buymeacoffee.com/hovahyii" aria-label="Consider buying Hovah a coffee" target="_blank">
      <SiBuymeacoffee  size="1.5em"  className={` text-gray-500 dark:text-white" size="1.5em ${isDarkMode ? '  text-white' : ''}`}/> 
    </Link>

  </div>
  )
}

export default SocialMedia