import React, { FC } from 'react';
import { Realisation } from '@/types/Realisation';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const RealisationCard: FC<Realisation> = ({ image, title, type }) => {
  const { theme } = useTheme();
  return (
    <div className={'w-full xl:w-96 mx-auto'}>
      <div className="relative aspect-square rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#28C8D3]/75 to-[#7662F9]/75 rounded-5xl"></div>
        <div
          className={` absolute inset-[2px] rounded-5xl overflow-hidden ${theme === 'dark' ? 'bg-[#1a1c30]' : 'bg-[#6D80FF]'}`}
        >
          <Image
            src={image}
            alt={title}
            width={500}
            height={380}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-4">
        <h3
          className={`font-bold text-2xl uppercase ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        >
          {title}
        </h3>
        <p
          className={`text-2xl line-clamp-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
        >
          {type}
        </p>
      </div>

      <div className="relative w-full p-[2px]">
        <div className="absolute inset-0 bg-gradient-to-l from-[#28C8D3]/75 to-[#7662F9]/75 rounded-xl"></div>
        <button
          className={`relative text-xl px-8 py-3 font-bold justify-between w-full flex items-center rounded-xl ${
            theme === 'dark'
              ? 'text-white bg-[#1a1c30] hover:bg-opacity-80'
              : 'text-black bg-white hover:bg-opacity-90'
          } transition-colors duration-300`}
        >
          <span className="absolute inset-[1px] bg-inherit rounded-md -z-10"></span>
          <span></span>
          <span>Voir Plus</span>
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
    </div>
  );
};
export default RealisationCard;
