import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col justify-between items-center border-t">
      <div className={`w-full flex justify-between items-center px-4 py-2 ${isDarkMode ? 'bg-white' : 'bg-gray-300'}`} style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>
        <Link href="https://vercel.com/">
          <Image src="/logo/vercel.png" alt="Deployed on Vercel" width={100} height={40} />
        </Link>
        <p className=' text-black'>© {year} Hovah Yii</p>
      </div>
      <div className={`w-full flex justify-center items-center px-4 py-2 order-last md:order-none ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-600'}`} style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>
        <span className="text-sm mr-2">Powered By</span>
        <Link href="https://tapnex-card.vercel.app/" style={{ fontFamily: 'Mokoto', fontSize: '1.0rem' }}>
          TapNex
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
