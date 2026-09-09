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
      className="fixed inset-0 z-[200] flex items-start sm:items-center justify-center bg-black bg-opacity-75 overflow-y-auto animate-in fade-in duration-300"
      style={{ padding: 'env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px)' }}
      onClick={() => setIsOpen(false)}
    >
      {/* Close button — positioned outside the card, always visible */}
      <button
        onClick={() => setIsOpen(false)}
        className="fixed top-3 right-3 sm:top-5 sm:right-5 z-[210] p-2.5 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full text-white transition-all shadow-lg"
        style={{ marginTop: 'env(safe-area-inset-top, 0px)' }}
        aria-label="Close popup"
      >
        <FaTimes className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div 
        className="relative w-full max-w-3xl mt-14 sm:mt-8 mb-8 mx-4 bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
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
            className="w-full h-[400px] sm:h-[500px]"
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

