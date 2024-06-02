"use client";

import * as React from "react";
import QRCode from 'qrcode.react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MdQrCodeScanner } from "react-icons/md";

interface QRCodeProps {
  isDarkMode: boolean;
}

const QRCodeDrawer: React.FC<QRCodeProps> = ({ isDarkMode }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className={`flex items-center dark:text-white space-x-2 ${isDarkMode ? 'text-white' : 'text-gray-600'} hover:text-gray-800`}>
            <MdQrCodeScanner size="1.5em" />
          <span>QR Code</span>
        </button>
      </DrawerTrigger>
      <DrawerContent className="p-6">
        <DrawerHeader className="flex justify-between items-center">
          <DrawerTitle className="text-3xl w-full text-center font-bold">Profile QR Code</DrawerTitle>
          <DrawerClose asChild>
            <button className="text-gray-500 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </DrawerClose>
        </DrawerHeader>
        <div className="p-4 pb-0 flex flex-col items-center">
          <div className="bg-white p-2">
            <QRCode value="https://hovahyii.vercel.app" size={200} />
          </div>
          <p className={`mt-4 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Share the profile by letting your friends scan this QR code!</p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default QRCodeDrawer;
