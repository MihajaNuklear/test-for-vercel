'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { getStrapiMedia } from '@/utils/utils.helpers';
import { StrapiPictureType } from '@/types';

type WhyStrapiSectionProps = {
  data: {
    title: string;
    description: string;
    items: { title: string; description: string }[];
    picture: StrapiPictureType;
    reverse: boolean;
  };
};

const WhyStrapiSection: FC<WhyStrapiSectionProps> = ({ data }) => {
  if (!data) return null;
  const { title, description, items, picture, reverse } = data;

  const imgUrl = getStrapiMedia(picture.data.attributes.url);

  return (
    <section
      className={
        `
         py-8 md:py-16 relative prose max-w-none h-fit flex items-center justify-center`
      }
    >
      <div className={'px-5 md:px-20 2xl:px-40 w-full relative z-10'}>
        <article
          className={`z-20 relative flex flex-col lg:flex-row gap-7 ${reverse && 'lg:flex-row-reverse flex-row-reverse'}`}
        >
          <div className="w-full lg:w-7/12 space-y-7">
            <h2 className="uppercase text-lg md:text-2xl tracking-wide sm:tracking-wider md:tracking-widest">
              {title}
            </h2>
            <p className="text-2xl sm:text-4xl leading-tight md:leading-normal font-bold">
              {description}
            </p>
            <ul className="list-none p-0 space-y-7">
              {items.map((detail, index) => (
                <li className="flex items-start gap-6 pl-0 md:pl-8" key={index}>
                  <div className="mt-2.5 w-12 h-[2px] bg-gradient-to-l from-accent-500 to-primary-400" />
                  <div>
                    <p className={''}>
                      <span className={'font-bold'}>{detail.title}</span>{' '}
                      {detail.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="relative hidden md:block w-[50%] mx-auto z-20 mt-2 md:mt-10">
              <Image
                src="/images/courbe-in-why-strapi.png"
                alt="Strapi courbe image"
                className="rounded-lg w-full"
                width={300}
                height={250}
                priority
              />
            </div>
          </div>
          <div className="mx-auto w-full md:w-8/12 lg:w-5/12 mt-10 lg:mt-0 h-full flex items-center">
            <div
              className={`relative w-full max-w-96 md:max-w-[500px] mx-auto ${reverse ? 'lg:mr-auto' : 'lg:ml-auto'} aspect-square`}
            >
              <Image
                src={imgUrl || ''}
                alt={`Illustration for ${title}`}
                fill
                className="object-contain" // Change to object-contain to avoid cropping
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhyStrapiSection;