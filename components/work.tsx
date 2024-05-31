
import Image from "next/image";
import {formatDate} from '../lib/formatDate'
import { FaFileArrowDown } from "react-icons/fa6";
import { Button } from "./ui/button";
import { FaBriefcase } from "react-icons/fa";
import experiences from '../public/experiences.json';

interface ExperienceProps {
  isDarkMode: boolean;
}

function Experience({ isDarkMode }: ExperienceProps) {
 

  
  return (
    <div className={`mt-12 flex flex-col md:items-start text-left border-2 rounded p-4 ${isDarkMode ? 'bg-white text-black' : 'bg-gray-100 text-black'}`}>
      <h2 className="flex text-sm font-semibold text-zinc-900  z">
        <FaBriefcase  className="h-4 w-10 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {experiences.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
              <Image src={role.logo} width={500} height={500} alt={role.alt} className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-left text-sm font-medium text-zinc-900  ">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 ">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400  "
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button   variant="secondary" className="group mt-6 w-full bg-red-600 text-white hover:text-black hover:bg-red-200">
        Download CV &nbsp;
        <FaFileArrowDown className="h-4 w-4" />
      </Button> */}
    </div>
  );
}
  
  export default Experience;

