"use client";

import React from 'react';
import { MdDownloadForOffline } from "react-icons/md";

interface ContactVCFProps {
  isDarkMode: boolean;
}

const ContactVCFComponent: React.FC<ContactVCFProps> = ({ isDarkMode }) => {
  const handleDownloadVCF = () => {
    const vcfData = `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:Jehovah Yii Zui Hon
N;CHARSET=UTF-8:Hovah;Yii;;;
EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:hovahyii@gmail.com
EMAIL;CHARSET=UTF-8;type=WORK,INTERNET:tapnex-card@gmail.com
PHOTO;TYPE=:https://hovahyii.vercel.app/hovah.png
TITLE;CHARSET=UTF-8:RF Engineer
ORG;CHARSET=UTF-8:Huawei Technologies Malaysia Sdn. Bhd.
NOTE;CHARSET=UTF-8:Order TapNex Now, WhatsApp 01110501375 
REV:2024-06-23:00:50.864Z
TEL;TYPE=Personal 01110501375:+601110501375
item0.URL:https://hovahyii.vercel.app
item0.X-ABLabel:Personal Website
item2.URL:https://tapnex.vercel.app/
item2.X-ABLabel:Company Website
END:VCARD`;
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
