"use client";

import React from 'react';
import { MdDownloadForOffline } from "react-icons/md";

interface ContactVCFProps {
  isDarkMode: boolean;
}

const ContactVCFComponent: React.FC<ContactVCFProps> = ({ isDarkMode }) => {
  const handleDownloadVCF = () => {
    const vcfData = `
        BEGIN:VCARD
        VERSION:3.0
        PRODID:-//Apple Inc.//macOS 11.5.2//EN
        N:Yii; Hovah;;;
        FN:Jehovah Yii Zui Hon;  
        PHOTO;VALUE=URL;TYPE=JPEG:https://hovahyii.vercel.app/hovah.png
        ORG:Huawei Technologies Malaysia Sdn. Bhd;
        EMAIL;type=INTERNET;type=HOME;type=pref:hovahyii@gmail.com
        EMAIL;type=INTERNET;type=WORK:support@tapnex-card.com
        TEL;type=CELL;type=VOICE;type=pref:01110501375
        ADR;type=WORK:;;Menara Exchange 106, Lingkaran TRX;Businesstown;KL;55188;Malaysia
        NOTE:Discover the Future of Networking with TapNex E-Card!        
        URL;WORK:https://hovahyii.vercel.app
        URL;WORK:https://tapnex-card.vercel.app
        END:VCARD
    `;
    const blob = new Blob([vcfData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact.vcf';
    a.click();
  };

  return (
    <button onClick={handleDownloadVCF} className={`flex items-center dark:text-white  space-x-2 ${isDarkMode ? 'text-white' : 'text-gray-600'} hover:text-gray-800`}>
      <MdDownloadForOffline size="1.5em"/>
      <span>Save Contact</span>
    </button>
  );
};

export default ContactVCFComponent;
