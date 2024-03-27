import React from 'react';
import Image from 'next/image';
import { Link } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full h-24 flex justify-between items-center bg-gray-200 border-t border-gray-300 px-4">
     
      <a href="https://vercel.com/">
          <Image src="/logo/vercel.png" alt="Deployed on Vercel" width={100} height={40} />
      </a>
      <p>© {year} Hovah Yii </p>
    </footer>
  );
};

export default Footer;
