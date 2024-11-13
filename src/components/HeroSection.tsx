'use client';
import React, { FC } from 'react';
import { useTheme } from 'next-themes';
import AnimatedLogo from '@/components/AnimatedLogo';
import AnimatedButton from '@/components/AnimatedButton';
import HeroBackgroundAnimation from '@/components/HeroBackgroundAnimation';
const HeroSection: FC = () => {
  const { theme } = useTheme();
  return (
    <section
      id={'hero'}
      className={`z-10 flex-grow h-full overflow-hidden w-full px-5 md:w-9/12 lg:w-8/12 mx-auto gap-10 md:gap-10 flex flex-col items-center justify-start sm:justify-center xl:justify-start prose max-w-none mt-0 xl:mt-10`}
    >
      <div className="absolute w-full h-screen max-h-screen overflow-hidden inset-0 z-0">
        <HeroBackgroundAnimation />
      </div>
      <AnimatedLogo />
      <h1
        className={`z-10 w-full  h-fit -mt-8 text-4xl md:text-5xl lg:text-6xl font-light text-center ${theme === 'dark' ? '' : 'text-primary-950'}`}
      >
        <span className="font-bold">Solutions</span> de développement <br />
        <span className="font-bold">rapides</span> et{' '}
        <span className="font-bold">flexibles</span> avec
      </h1>
      <AnimatedButton></AnimatedButton>
      <p
        className={`z-10 text-center ${theme === 'dark' ? 'text-white' : 'text-primary-950'}`}
      >
        Nous créons des applications web sur mesure, rapides et évolutives grâce
        à Strapi pour une gestion de contenu flexible et Next.js pour des
        performances optimales et un SEO renforcé.
      </p>
      <div className="relative w- p-[2px]">
        <div className="absolute inset-0 bg-gradient-to-l from-[#28C8D3]/75 to-[#7662F9]/75 rounded-xl"></div>
        <button
          className={`relative text-xl px-8 font-bold justify-between w-full py-2 flex items-center rounded-xl ${
            theme === 'dark'
              ? 'text-white bg-[#1a1c30] hover:bg-opacity-80'
              : 'text-black bg-white hover:bg-opacity-90'
          } gap-4 py-3`}
        >
          <span></span>
          <span>Demander une démo</span>
          <svg
            width="43"
            height="16"
            viewBox="0 0 43 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.7071 8.70715C43.0976 8.31663 43.0976 7.68346 42.7071 7.29294L36.3432 0.928972C35.9526 0.538447 35.3195 0.538446 34.9289 0.92897C34.5384 1.31949 34.5384 1.95266 34.9289 2.34318L40.5858 8.00004L34.9289 13.6569C34.5384 14.0474 34.5384 14.6806 34.9289 15.0711C35.3195 15.4616 35.9526 15.4616 36.3431 15.0711L42.7071 8.70715ZM-1.08991e-06 9L42 9.00005L42 7.00005L1.08991e-06 7L-1.08991e-06 9Z"
              fill="url(#paint0_linear_1430_293)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1430_293"
                x1="42"
                y1="8.50005"
                x2="-5.44957e-07"
                y2="8.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#28C8D3" />
                <stop offset="0.5" stopColor="#9747FF" />
                <stop offset="1" stopColor="#7662F9" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
