import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

type CardProps = {
  image: string;
  date: string | Date;
  title: string;
  description: string;
  subtitle: string; // New subtitle prop for professional title
  url?: string;
};

const CardRealisation: FC<CardProps> = ({
  image,
  date,
  title,
  description,
  subtitle,
  url = '',
}) => {
  const { theme } = useTheme();

  const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link href={url}>
      <div className={'w-full mx-auto'}>
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
        <div className="p-4 md:h-[170px]">
          <h2
            className={`text-2xl line-clamp-2 mb-2 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
          >
            {title}
          </h2>{' '}
          <p className="opacity-80 line-clamp-2">{description}</p>
          <div className="flex items-center text-[20px] opacity-50 md:mt-3 ">
            <span>{subtitle}</span>
          </div>
        </div>

        <div className="relative w-full p-[2px]">
          <div className="absolute inset-0 bg-gradient-to-l from-[#28C8D3]/75 to-[#7662F9]/75 rounded-xl"></div>
          <div
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardRealisation;
