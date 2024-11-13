'use client';
import React, { FC } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { CustomSection } from '@/components/CustomSection';
import { StrapiPicturesType } from '@/types';
import HighlightedText from '@/common/HighlightedText';
import { getStrapiMedia } from '@/utils/utils.helpers';
type ReferencesSectionProps = {
  data: {
    title: string;
    picture: StrapiPicturesType;
  };
};

const ReferencesSection: FC<ReferencesSectionProps> = ({ data }) => {
  const { theme } = useTheme();
  const { picture, title } = data;

  if (!data) return null;

  return (
    <CustomSection>
      <HighlightedText
        text={title}
        className="text-3xl md:text-4xl font-bold mb-14 leading-tight uppercase text-center"
      />

      <Marquee>
        {picture.data.map(({ attributes }, index) => {
          const imgUrl = getStrapiMedia(attributes.url);
          return (
            <div key={index} className="ml-20">
              <Image
                src={imgUrl || ''}
                alt={`Logo de la référence ${index + 1}`}
                width={200}
                height={200}
                className={`h-12 w-auto object-contain opacity-85 ${
                  theme === 'dark' ? 'invert-0' : 'invert'
                }`}
              />
            </div>
          );
        })}
      </Marquee>
    </CustomSection>
  );
};

export default ReferencesSection;
