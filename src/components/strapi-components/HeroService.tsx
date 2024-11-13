'use client';
import { FC } from 'react';
import Image from 'next/image';
import { CustomSection } from '@/components/CustomSection';
import { useTheme } from 'next-themes';
import { StrapiPictureType } from '@/types';
// import HighlightedText from '@/common/HighlightedText';
import { getStrapiMedia } from '@/utils/utils.helpers';
import { cn } from '@/lib/utils';
import TechoLogo from '@/components/Services/TechoLogo';

type HeroServiceProps = {
  data: {
    title: string;
    description: string;
    picture: StrapiPictureType;
    isPictureLeft: boolean;
    items: {
      id: number;
      name: string;
      description: string;
      picture: StrapiPictureType;
    }[];
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
      };
    };
  };
};

const HeroService: FC<HeroServiceProps> = ({ data }) => {
  const { theme } = useTheme();
  if (!data) return null;
  const { picture, isPictureLeft, services } = data;
  const { description, techno_logo, title } = services.data.attributes;

  const imgUrl = getStrapiMedia(picture.data.attributes.url);
  return (
    <CustomSection className={''}>
      <div
        className={`flex flex-col justify-center
         lg:px-0`}
      >
        <div
          id="container-dev-web"
          className={cn(
            'flex flex-col-reverse lg:flex-row justify-between items-center w-full h-auto md:h-[60%] gap-10 md:gap-28 relative',
            isPictureLeft && 'lg:flex-row-reverse',
          )}
        >
          <div
            id="left-dev-web"
            className="flex flex-col justify-center w-full lg:w-1/2 xl:w-1/2 gap-[50px] mb-6 md:mb-0 "
          >
            {/* <HighlightedText
              text={title}
              className="flex justify-center lg:justify-start text-2xl md:text-[50px] font-bold text-justify"
            /> */}
            <h2 className="flex justify-center lg:justify-start text-2xl md:text-[50px] font-bold text-justify">
              {title}
            </h2>

            {techno_logo && (
              <TechoLogo techno_logo={techno_logo} classNames="w-full" />
            )}
            {/* <HighlightedText text={description} className="text-justify" /> */}
            {description && <p className="text-justify">{description}</p>}
          </div>
          {imgUrl && (
            <div
              id="right-dev-web"
              className="flex justify-center items-center w-full lg:w-1/2 xl:w-1/2 relative"
            >
              <Image
                src={imgUrl}
                alt="Service Web Development"
                width={1000}
                height={1000}
                className="w-full h-full object-cover "
              />
            </div>
          )}
        </div>
        <div className={'h-fit pt-32'}>
          <hr
            className={`w-full h-[2px] mt-16' ${theme === 'dark' ? 'bg-white' : 'bg-black'} `}
          />
        </div>
      </div>
    </CustomSection>
  );
};

export default HeroService;
