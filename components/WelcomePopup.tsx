"use client";

import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTimes } from 'react-icons/fa';

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = sessionStorage.getItem('hasSeenWelcomePopup');
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenWelcomePopup', 'true');
      }, 1000); // 1 second delay

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-75 p-4 animate-in fade-in duration-300 overflow-y-auto"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
          aria-label="Close popup"
        >
          <FaTimes className="h-6 w-6" />
        </button>
        
        <div className="p-6 border-b dark:border-gray-700 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
          <h3 className="font-bold text-xl dark:text-white flex items-center gap-2">
            <FaInstagram className="text-pink-600" /> Huawei ICT Academy Interview
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Welcome! Check out my journey and experience with Huawei ICT Academy
          </p>
        </div>

        <div className="w-full bg-black">
          <iframe
            src="https://www.instagram.com/p/DPVC-5vESxX/embed"
            className="w-full h-[500px]"
            frameBorder="0"
            scrolling="yes"
            allowTransparency={true}
            allow="encrypted-media"
            title="Huawei ICT Academy Interview"
          />
        </div>
        
        <div className="p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-900 flex justify-center">
          <a 
            href="https://www.instagram.com/p/DPVC-5vESxX/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-semibold"
          >
            <FaInstagram /> View on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

