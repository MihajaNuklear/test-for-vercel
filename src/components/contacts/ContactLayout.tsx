'use client';
import React from 'react';
import Image from 'next/image';
import { CustomSection } from '@/components/CustomSection';
import { cn } from '@/lib/utils';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useTheme } from 'next-themes';

const ContactLayout = () => {
  const { theme } = useTheme();
  return (
    <CustomSection className={'md:pb-0'}>
      <Image
        src="/images/cube-in-left-medium.png"
        alt="Cube in left medium"
        width={750}
        height={750}
        className="absolute -ml-20 left-0 brightness-50 z-0"
      />
      <Image
        src="/images/cube-in-left-small.png"
        alt="Cube in left small rotated"
        width={750}
        height={750}
        className="absolute top-1/2 rotate-180 scale-110 right-24 z-0"
      />
      <Image
        src="/images/cube-in-left-small.png"
        alt="Cube in left small rotated and scaled"
        width={750}
        height={750}
        className="absolute top-20 rotate-45 scale-150 -right-80 z-0"
      />
      <div className="w-full text-center relative z-10">
        <h1 className="text-4xl md:text-[64px] font-bold mb-12">
          Nous contacter
        </h1>
        <p className="text-lg mb-10">
          Une question ou une demande ? Écrivez-nous via le formulaire, <br />
          nous vous répondrons rapidement.
        </p>
        <form className="size-full w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="flex flex-col space-y-8">
            <input
              type="text"
              placeholder="Nom"
              className={cn(
                'bg-opacity-50 backdrop-blur-md border-2 rounded-lg py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500',
                theme === 'dark'
                  ? 'bg-[#1a1c30] border-primary-700 text-white'
                  : 'border-primary-500 text-black bg-neutral-50',
              )}
            />
            <input
              type="email"
              placeholder="Email"
              className={cn(
                'bg-opacity-50 backdrop-blur-md bg-transparent border-2 rounded-lg py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500',
                theme === 'dark'
                  ? 'bg-[#1a1c30] border-primary-700 text-white'
                  : 'border-primary-500 text-black bg-neutral-50',
              )}
            />
          </div>

          <textarea
            placeholder="Message"
            className={cn(
              'bg-opacity-50 backdrop-blur-md bg-transparent border-2 rounded-lg py-4 px-6 h-full focus:outline-none focus:ring-2 focus:ring-blue-500',
              theme === 'dark'
                ? 'bg-[#1a1c30] border-primary-700 text-white'
                : 'border-primary-500 text-black bg-neutral-100',
            )}
          ></textarea>
        </form>
        <div className="relative w-6/12 mx-auto p-[2px]">
          <div className="absolute inset-0 bg-gradient-to-l from-[#28C8D3]/75 to-[#7662F9]/75 rounded-xl"></div>
          <button
            className={cn(
              'relative text-xl px-4 font-bold justify-between w-full py-2 flex items-center rounded-xl',
              theme === 'dark'
                ? 'text-white bg-[#1a1c30] hover:bg-opacity-80'
                : 'text-black bg-white hover:bg-opacity-90',
            )}
          >
            <span className="absolute inset-[1px] bg-inherit rounded-md -z-10"></span>
            <span></span>
            <span>Nous contacter</span>
            <IoIosArrowRoundForward size={38} />
          </button>
        </div>
      </div>
      <div className="my-10">
        <hr
          className={cn(
            'w-48 mx-auto border rounded md:my-10',
            theme === 'dark' ? 'border-gray-200' : 'border-gray-700',
          )}
        />
      </div>
    </CustomSection>
  );
};
export default ContactLayout;
