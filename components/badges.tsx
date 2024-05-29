import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import badges from '../public/badges.json'; // Import the JSON data
import { SlBadge } from "react-icons/sl";

interface BadgeProps {
  isDarkMode: boolean;
}


function Badge({ isDarkMode }: BadgeProps) {
  return (
    <div className={`mt-12 flex  rounded-lg border shadow p-6 flex-col items-center md:items-start text-center md:text-left ${isDarkMode ? 'bg-white text-black' : 'bg-gray-100 text-black'}`}>
      <div className="w-full  dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <SlBadge className="h-6 w-6 flex-none" />
          <span className="ml-3">Certificates & Achievements</span>
        </h2>
        <ol className="mt-6 flex">
          {badges.map((role, roleIndex) => (
            <li key={roleIndex} className="flex gap-4">
              <Link href={role.link} target="_blank">
                <Image width={512} height={512} className="w-14 h-14" src={role.logo} alt={role.name} />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Badge;
