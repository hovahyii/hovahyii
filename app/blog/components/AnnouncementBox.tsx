'use client';

interface AnnouncementBoxProps {
  title: string;
  message: string;
  linkText: string;
  linkUrl: string;
}

export default function AnnouncementBox({ title, message, linkText, linkUrl }: AnnouncementBoxProps) {
  return (
    <div className="my-6 p-4 border rounded-lg bg-blue-50 dark:bg-blue-900 shadow-md">
      <p className="font-bold text-lg">{title}</p>
      <p className="text-md italic">{message}</p>
      <a 
        href={linkUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
      >
        {linkText}
      </a>
    </div>
  );
}