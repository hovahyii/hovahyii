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
        FN:Jehovah Yii Zui Hon
        TEL;TYPE=WORK,VOICE:01110501375
        EMAIL;TYPE=PREF,INTERNET:hovahyii@gmail.com
        ORG:Huawei Technologies Malaysia Sdn. Bhd
        TITLE:RF Engineer
        URL;TYPE=WORK:https://hovahyii.vercel.app
        URL;TYPE=WORK:https://tapnex-card.vercel.app
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
