import React from 'react'
import {SiBuymeacoffee } from "react-icons/si";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className="ml-2 mt-4 flex space-x-4">
    <Link href="https://www.linkedin.com/in/hovahyii" aria-label="Connect with Hovah on Linkedin" target="_blank">
      <FaLinkedin className="text-gray-500" size="1.5em"/> 
    </Link>
    <Link href="https://github.com/hovahyii" aria-label="Checkout Hovah's repo" target="_blank">
      <FaGithub className="text-gray-500" size="1.5em" />
    </Link>
    <Link href="https://www.hackerrank.com/profile/hovahyii" aria-label="Connect with Hovah on HackerRank" target="_blank">
      <FaHackerrank className="text-gray-500" size="1.5em"/> 
    </Link>
    <Link href="mailto:hovahyii@proton.me" aria-label="Email me" target="_blank">
      <MdEmail className="text-gray-500" size="1.5em"/> 
    </Link>
    <Link href="https://buymeacoffee.com/hovahyii" aria-label="Consider buying Hovah a coffee" target="_blank">
      <SiBuymeacoffee className="text-gray-500" size="1.5em" />
    </Link>

  </div>
  )
}

export default SocialMedia