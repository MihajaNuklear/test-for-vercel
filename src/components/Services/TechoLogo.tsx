import React, { FC } from 'react';
import Image from 'next/image';
import { StrapiPictureType } from '@/types';
import { useTheme } from 'next-themes';
import { getStrapiMedia } from '@/utils/utils.helpers';
import { cn } from '@/lib/utils';
type TechoLogoProps = {
  techno_logo: {
    title: string;
    logo_dark: StrapiPictureType;
    logo_light: StrapiPictureType;
  }[];
  classNames?: string;
};

const TechoLogo: FC<TechoLogoProps> = ({ techno_logo, classNames }) => {
  const { theme } = useTheme();
  return (
    <section id="TechoLogo-service" className={cn('w-full h-16', classNames)}>
      {techno_logo && techno_logo.length > 0 && (
        <section className=" grid grid-cols-4 gap-12 h-16 w-full">
          {techno_logo.map(({ logo_dark, logo_light }, index) => {
            const logoDarkUrl = getStrapiMedia(logo_dark?.data?.attributes.url);
            const logoLightUrl = getStrapiMedia(
              logo_light?.data?.attributes.url,
            );
            return (
              <div
                key={'techno_logo-' + index}
                className="flex justify-between h-16 w-full"
              >
                {theme === 'dark' ? (
                  <>
                    {logo_dark && logoDarkUrl && (
                      <div
                        key={'service-image-dark' + index}
                        className="w-full h-full"
                      >
                        <Image
                          src={logoDarkUrl || ''}
                          alt={
                            logo_dark?.data?.attributes?.alternativeText ||
                            'service image'
                          }
                          width={500}
                          height={500}
                          className="object-contain object-center w-full h-full"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {logo_light && logoLightUrl && (
                      <div
                        key={'service-image-light' + index}
                        className="w-full h-full"
                      >
                        <Image
                          src={logoLightUrl || ''}
                          alt={
                            logo_light?.data?.attributes?.alternativeText ||
                            'service image'
                          }
                          width={500}
                          height={500}
                          className="object-contain object-center w-full h-full"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default TechoLogo;
