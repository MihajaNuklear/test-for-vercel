'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date('2024-09-16T00:00:00'); // Date cible
      const now = new Date();
      const timeDiff = endDate.getTime() - now.getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      if (timeDiff < 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(intervalId); // Stop the interval when countdown ends
      }
    };

    calculateTimeLeft();
    const intervalId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>weartwice</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#47715b] relative">
        {/* Bouton "Go to Login" en haut à droite */}
        <Link
          href="/login"
          className="absolute top-4 right-4 bg-[#47715b] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#47715b] transition duration-300"
        >
          Login
        </Link>

        <div className="mb-20">
          <Image
            src="/images/weartwice-final-png.png"
            alt="weartwice"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center space-x-4 mb-10">
          <div className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg">
            <span className="text-4xl">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg">
            <span className="text-4xl">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg">
            <span className="text-4xl">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg">
            <span className="text-4xl">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
        <div className="text-center text-white">
          <p className="mb-0 text-xs">iOS and Android app under development</p>
        </div>
      </div>
    </>
  );
};

export default Countdown;
