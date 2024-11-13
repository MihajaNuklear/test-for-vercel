'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { CustomSection } from '@/components/CustomSection';
import HighlightedText from '@/common/HighlightedText';
import { StrapiPictureType } from '@/types';
import { getStrapiMedia } from '@/utils/utils.helpers';

type DesignSectionProps = {
  data: {
    title: string;
    subtitle: string;
    description: string;
    picture: StrapiPictureType;
  };
};

const DesignSection: FC<DesignSectionProps> = ({ data }) => {
  if (!data) return null;
  const { title, subtitle, description, picture } = data;
  const imgUrl = getStrapiMedia(picture.data.attributes.url);

  return (
    <CustomSection>
      <article className={`z-20 relative flex flex-col lg:flex-row gap-7`}>
        <div className="w-full lg:w-7/12 space-y-7">
          <HighlightedText
            text={title}
            className="ppercase uppercase text-lg md:text-2xl tracking-wide sm:tracking-wider md:tracking-widest"
          />
          <HighlightedText
            text={subtitle}
            className="text-2xl sm:text-4xl leading-tight md:leading-normal font-bold"
          />
          <HighlightedText text={description} className="" />

          <div className="relative hidden md:block w-[50%] mx-auto z-20 mt-2 md:mt-10">
            <Image
              src="/images/courbe-in-why-strapi.png"
              alt="Strapi courbe image"
              className="rounded-lg w-full"
              width={300} // These values are still needed for the aspect ratio calculation
              height={250}
            />
          </div>
        </div>
        <div className="mx-auto w-full md:w-8/12 lg:w-5/12 mt-10 lg:mt-0 h-full flex items-center">
          <div
            className={`relative w-full max-w-96 md:max-w-[500px] mx-auto lg:ml-auto aspect-square`}
          >
            <Image
              src={imgUrl || ''}
              alt={`Illustration for ${'title'}`}
              fill
              className="object-fill"
            />
          </div>
        </div>
      </article>
    </CustomSection>
  );
};

export default DesignSection;
