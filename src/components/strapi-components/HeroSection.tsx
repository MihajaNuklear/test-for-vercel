'use client';

import React, { FC, lazy, Suspense, memo } from 'react';
import { useTheme } from 'next-themes';
import HighlightedText from '@/common/HighlightedText';
import Link from 'next/link';

// Lazy loading des composants lourds
const AnimatedLogo = lazy(() => import('@/components/AnimatedLogo'));
const AnimatedButton = lazy(() => import('@/components/AnimatedButton'));
const HeroBackgroundAnimation = lazy(() => import('@/components/HeroBackgroundAnimation'));

// Composant SVG mémorisé
const ArrowIcon = memo(() => (
  <svg
    width="43"
    height="16"
    viewBox="0 0 43 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
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
));

ArrowIcon.displayName = 'ArrowIcon';

// Types
interface HeroSectionProps {
  data: {
    title: string;
    description: string;
    linkUrl: string;
  };
}


// Composant principal mémorisé
const HeroSection: FC<HeroSectionProps> = memo(({ data }) => {
  const { theme } = useTheme();

  if (!data) return null;
  const { description, title, linkUrl } = data;

  return (
    <section
      id="hero"
      className="z-10 flex-grow h-full overflow-hidden w-full px-5 md:w-9/12 lg:w-8/12 mx-auto gap-10 md:gap-10 flex flex-col items-center justify-start sm:justify-center xl:justify-start prose max-w-none mt-0 xl:mt-10"
    >
      <div className="absolute w-full h-screen max-h-screen overflow-hidden inset-0 z-0">
        <Suspense fallback={<div style={{ height: '100vh', width: '100%' }} />}>
          <HeroBackgroundAnimation />
        </Suspense>
      </div>

      <Suspense fallback={<div style={{ height: '100px', width: '100%' }} />}>
        <AnimatedLogo />
      </Suspense>

      <HighlightedText
        text={title}
        className={`z-10 w-full font-bold h-fit -mt-8 text-4xl md:text-5xl lg:text-6xl text-center ${
          theme === 'dark' ? '' : 'text-primary-950'
        }`}
      />

      <Suspense fallback={<div style={{ height: '50px', width: '100%' }} />}>
        <AnimatedButton />
      </Suspense>

      <HighlightedText
        text={description}
        className={`z-10 text-center ${
          theme === 'dark' ? 'text-white' : 'text-primary-950'
        }`}
      />

      <div className="relative p-[2px] w-auto">
        <div className="absolute inset-0 bg-gradient-to-l from-[#28C8D3]/75 to-[#7662F9]/75 rounded-xl" />
        <Link
          href={linkUrl || '#'}
          className={`relative text-xl px-8 font-bold justify-between py-3 flex items-center rounded-xl gap-4 transition-colors duration-200 ${
            theme === 'dark'
              ? 'text-white bg-[#1a1c30] hover:bg-opacity-80'
              : 'text-black bg-white hover:bg-opacity-90'
          }`}
        >
          <span className="sr-only">Demander une démo</span>
          <span>Demander une démo</span>
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;