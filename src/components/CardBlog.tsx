import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { getStrapiMedia, formatDate } from '@/utils/utils.helpers';
import { StrapiPictureType } from '@/types';
type CardProps = {
  image: string;
  date: string | Date;
  title: string;
  description: string;
  authors?: string;
  avatarUrl?: StrapiPictureType;
  url?: string;
};

const CardBlog: FC<CardProps> = ({
  image,
  date,
  title,
  description,
  authors,
  avatarUrl,
  url = '',
}) => {
  const { theme } = useTheme();
  const avatarImage = getStrapiMedia(avatarUrl?.data.attributes.url);

  return (
    <section>
      <div className={'w-full xl:w-96 mx-auto'}>
        <div className="relative aspect-square rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#28C8D3]/75 to-[#7662F9]/75 rounded-5xl"></div>
          <div
            className={`absolute inset-[2px] rounded-5xl overflow-hidden ${
              theme === 'dark' ? 'bg-[#1a1c30]' : 'bg-[#6D80FF]'
            }`}
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
        <div className="p-4 md:h-[210px]">
          <h2
            className={`text-2xl line-clamp-2 mt-3 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
          >
            {title}
          </h2>{' '}
          <p className=" opacity-80 line-clamp-2 mt-3 ">{description}</p>
          <div className="flex flex-row justify-between  text-[18px] md:text-[14px] lg:text-[18px]   my-2 ">
            <div className="flex flex-row gap-2 items-center  ">
              <span className=" opacity-50">
                {formatDate(date.toString())}{' '}
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center  ">
              <span className=" opacity-50">{authors} </span>
              {avatarImage && (
                <Image
                  src={avatarImage}
                  alt={title}
                  width={500}
                  height={380}
                  className=" w-[39.66px] md:w-[30px] lg:w-[39px] aspect-square rounded-full "
                />
              )}
            </div>
          </div>
        </div>

        <div className="relative w-full p-[2px]">
          <div className="absolute inset-0 bg-gradient-to-l from-[#28C8D3]/75 to-[#7662F9]/75 rounded-xl"></div>
          <Link
            href={`${url}`}
            className={cn(
              'relative transition-colors duration-300 text-xl px-4 font-bold justify-between w-full py-2 flex items-center rounded-xl',
              theme === 'dark'
                ? 'text-white bg-[#1a1c30] hover:bg-opacity-80'
                : 'text-black bg-white hover:bg-opacity-90',
            )}
          >
            <span className="absolute inset-[1px] bg-inherit rounded-md -z-10"></span>
            <span></span>
            <span>Voir</span>
            <IoIosArrowRoundForward size={38} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardBlog;
