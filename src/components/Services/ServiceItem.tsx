'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { StrapiPictureType } from '@/types';
import TechoLogo from '@/components/Services/TechoLogo';

export interface ServiceItemProps {
  title: string;
  description: string;
  techno_logo: {
    title: string;
    logo_dark: StrapiPictureType;
    logo_light: StrapiPictureType;
  }[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  description,
  techno_logo,
  title,
}) => {
  const { theme } = useTheme();

  return (
    <div className="relative flex-1 p-[3px] bg-gradient-to-r from-[#28C8D3]/75 to-[#7662F9]/75 rounded-[18px] overflow-hidden">
      <div
        className={`${theme === 'dark' ? 'bg-[#0C1226]' : 'bg-white'} h-full p-10 flex flex-col gap-4 rounded-[19px] overflow-hidden`}
      >
        {techno_logo && <TechoLogo techno_logo={techno_logo} />}
        <div>
          <p
            className={`font-bold text-2xl ${theme === 'dark' ? 'text-white' : 'text-primary-950'}`}
          >
            {title}
          </p>
          <p
            className={`text-justify ${theme === 'dark' ? 'text-white' : 'text-primary-950'}`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
