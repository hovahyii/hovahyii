// pages/countdown.tsx
"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const CountdownPage = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('July 4, 2024 12:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Head>
        <title>My Last Paper - Conclude My 4 Years of Studies at UMPSA</title>
      </Head>
      <main className="text-center p-12">
        <h1 className="text-4xl font-bold">My Last Paper</h1>
        <h2 className="text-3xl mt-4">Conclude My 4 Years of Studies at UMPSA (Universiti Malaysia Pahang Al-Sultan Abdullah)</h2>
        <h2 className="text-3xl mt-2">Wish me luck</h2>
        <div className="mb-8"></div>
        <h3 className="text-4xl font-bold">Countdown</h3>
        <div className="flex justify-center text-5xl mt-8">
          <div className="mx-4">{timeLeft.days} Days</div>
          <div className="mx-4">{timeLeft.hours} Hours</div>
          <div className="mx-4">{timeLeft.minutes} Minutes</div>
          <div className="mx-4">{timeLeft.seconds} Seconds</div>
        </div>
        <div className="flex justify-center mt-12">
          <Image src="/graduation.png" alt="Graduation" width={600} height={400} />
        </div>
      </main>
    </div>
  );
};

export default CountdownPage;
