'use client';
import React, { FC } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import HighlightedText from '@/common/HighlightedText';
import { StrapiPictureType } from '@/types';
import ServiceItem from '@/components/Services/ServiceItem';
import Divider from '@/components/Services/Divider';

type ServicesData = {
  data: {
    title: string;
    services: {
      data: {
        id: number;
        attributes: {
          title: string;
          description: string;
          techno_logo: {
            title: string;
            logo_dark: StrapiPictureType;
            logo_light: StrapiPictureType;
          }[];
        };
      }[];
    };
  };
};

const ServicesSection: FC<ServicesData> = ({ data }) => {
  const { theme } = useTheme();
  if (!data) return null;
  const { title, services } = data;

  return (
    <section
      className={
        `
         py-8 md:py-16 relative prose max-w-none h-fit flex items-center justify-center `
      }
    >
      <div className={'px-5 md:px-20 2xl:px-40 w-full relative z-10'}>
    <div className="z-20 min-h-[500px] mx-auto rounded-3xl rounded-tl-none relative">
      <HighlightedText
        text={title}
        className="text-3xl md:text-4xl font-bold mb-14 leading-tight uppercase text-center"
      />

      <div className="w-full flex flex-col justify-between mt-0 ld:mt-8 gap-1 md:gap-10 h-fit place-items-stretch">
        <div className="flex h-fit w-full gap-5 flex-col lg:flex-row lg:gap-10 xl:gap-16">
          <ServiceItem {...services.data[0].attributes} />
          <Divider />
          <ServiceItem {...services.data[1].attributes} />
        </div>
        <div
          className={cn(
            'hidden lg:block border-t h-1',
            theme === 'dark' ? 'border-gray-300' : 'border-gray-800',
          )}
        ></div>
        <div className="flex mt-5 md:mt-0 h-fit w-full gap-5 flex-col lg:gap-10 lg:flex-row xl:gap-16">
          <ServiceItem {...services.data[2].attributes} />
          <Divider />
          <ServiceItem {...services.data[3].attributes} />
        </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default ServicesSection;