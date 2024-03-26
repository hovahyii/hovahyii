
import Image from "next/image";
import {formatDate} from '../lib/formatDate'

function Resume() {
  let resume = [
    {
        company: "Go E-Merge Sdn Bhd",
        title: "Shopify Ecommerce Developer",
        logo: "/logo/go-emerge.jpeg",
        start: "August 2023",
        end: "March 2024",
      },
    {
      company: "Mahiran Digital Sdn Bhd",
      title: "Full-stack Developer",
      logo: "/logo/mahiran.jpeg",
      start: "2021",
      end: "August 2022",
    },
    {
      company: "Rajang Digital Solutions",
      title: "Junior Web Developer",
      logo: "/logo/rajang.png",
      start: "Mar 2020",
      end: "Jun 2020",
    },
    {
      company: "Press Metal Bintulu Sdn Bhd",
      title: "Robotics Engineer",
      logo: "/logo/press-metal.jpeg",
      start: "June 2019",
      end: "August 2019",
    },
    {
      company: "iLead Solutions",
      title: "Web Designer",
      logo: "/logo/ilead.webp",
      start: "June 2018",
      end: "August 2018",
    },
  ];

  return (
    <div className="mt-12 flex flex-col items-center md:items-start shadow text-center md:text-left border rounded p-4">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} width={500} height={500} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
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
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  );
}
  
  export default Resume;

  function BriefcaseIcon(props: any) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
          className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
        <path
          d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
          className="stroke-zinc-400 dark:stroke-zinc-500"
        />
      </svg>
    )
  }