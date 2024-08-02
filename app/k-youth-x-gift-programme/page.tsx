"use client"

import React, { useState, useEffect } from 'react';
import { FaHeart, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const VideoPage: React.FC = () => {
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        fetchLikeCount();
    }, []);

    const fetchLikeCount = async () => {
        const response = await fetch('/api/like');
        const data = await response.json();
        setLikeCount(data.likeCount);
    };

    const handleLike = async () => {
        console.log('Like button clicked');
        try {
            const response = await fetch('/api/like', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Response from like API:', data);
            setLikeCount(data.likeCount);
        } catch (error) {
            console.error('Error liking video:', error);
        }
    };

    const transcript = `Hi, I'm Jehovah Yii Zui Hon. I'm excited about joining the GIFT programme for a few key reasons. First, I'm looking forward to connecting with like-minded individuals who are also driven to learn and grow. As someone with a strong growth mindset, I'm always eager to develop new skills. But what really excites me is the opportunity to use these skills to give back to the community. For me, it's about receiving knowledge and then using it to make a positive impact.

As for my future plans, I have some exciting steps coming up. Soon, I'll be attending my last camp for Navy ROTU at MPS, Johor. Then on September 21st, I'll be inaugurated as Leftenan Muda in the navy. On 30th September, I'll be starting my internship as Radio Frequency Engineer at Huawei Malaysia.

Looking ahead, I plan to work as employee for Huawei Malaysia to gain experience for few years while pursuing a PhD engineering. At the same time, I plan to pursue also my IR title for the professional engineer. I see the GIFT programme as a crucial step in this journey, helping me connect my current experiences with my future goals.

I really hope to be part of this programme and ready to give it my all. Please consider my application. Thank you.`;

    return (
        <div className="container mx-auto px-4 py-4 sm:py-8 max-w-3xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
                <Link href="/" className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition duration-300 mb-2 sm:mb-0">
                    <FaArrowLeft />
                    <span>Go Back</span>
                </Link>
                <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-right w-full sm:w-auto">K-Youth x GIFT Programme Video</h1>
            </div>
            <div className="relative w-full aspect-video mb-4">
                <iframe 
                    src="https://www.youtube.com/embed/iZjo-cvkoiI" 
                    title="K-Youth x GIFT Programme Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
            </div>
            <div className="flex items-center justify-start mb-4 mt-4 sm:mt-6">
                <button
                    onClick={handleLike}
                    className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition duration-300 text-sm sm:text-base"
                >
                    <FaHeart />
                    <span>{likeCount} Likes</span>
                </button>
            </div>
            <div className="mt-4 sm:mt-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Transcript</h2>
                <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">{transcript}</p>
            </div>
        </div>
    );
};

export default VideoPage;