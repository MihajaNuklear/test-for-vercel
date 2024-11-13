'use client';
import React, { FC } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

const ContactSection: FC = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <section
      className={`h-auto transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#070b14] to-[#07071b] text-white'
          : 'bg-white text-black'
      }`}
    >
      <div className="relative w-full h-[320px] md:h-[520px] bg-gradient-to-b from-[#1c2541] to-[#0b132b] flex flex-col pt-[30px] md:pt-[50px] items-center gap-[30px] md:gap-[50px]">
        <div
          className="absolute bottom-0 flex justify-center items-end"
          style={{
            backgroundImage: "url('/images/background-contact.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            opacity: 1,
            zIndex: 0,
            width: '90%',
            height: '30%',
            left: '50%',
            transform: 'translate(-50%, -9%)',
          }}
        />
        <h2 className="text-white font-bold text-[50px] md:text-[80px] lg:text-[120px] uppercase">
          Un projet ?
        </h2>
        {pathname !== '/contact' && (
          <button className="flex flex-row w-[250px] md:w-[342px] h-[50px] md:h-[60px] justify-between items-center bg-blue-600 text-white pl-[5%] font-semibold rounded-full px-4 relative z-0">
            <span className="text-[16px] md:text-[20px]">Nous contacter</span>
            <span className="bg-gray-200 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
