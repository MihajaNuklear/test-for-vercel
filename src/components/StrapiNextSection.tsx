import React from 'react';
import { CustomSection } from '@/components/CustomSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export const StrapiNextSection = () => {
  const { theme } = useTheme();
  return (
    <CustomSection>
      <div
        className={'w-full md:w-11/12 xl:w-10/12 2xl:w-8/12 space-y-7 mx-auto'}
      >
        <h2 className="uppercase text-lg md:text-2xl tracking-widest text-center">
          la combinaison strapi-nextjs
        </h2>
        <p className="text-2xl mt-0 md:text-4xl font-bold text-center">
          Boostez Vos Projets Web avec Strapi et Next.js&nbsp;: Le&nbsp;Duo
          Parfait pour des Applications Web Rapides et Flexibles
        </p>
      </div>
      <div
        className={
          'flex flex-col justify-center items-center lg:flex-row pt-16 md:justify-between md:items-stretch'
        }
      >
        <div
          className={
            'flex-1 w-full md:w-10/12 lg:w-96 mx-auto flex flex-col border border-primary-600 p-10 rounded-2xl'
          }
        >
          {theme === 'dark' ? (
            <Image
              width={500}
              height={500}
              src="/images/strapi-ligh.png"
              className="mb-4"
              alt=""
            />
          ) : (
            <Image
              width={500}
              height={500}
              src="/images/strapi-dark.png"
              className="mb-4"
              alt=""
            />
          )}

          <ul className="list-disc list-inside text-2xl ml-5 flex-grow flex flex-col justify-between">
            <li>Headless</li>
            <li>CMS</li>
            <li>Personnalisé</li>
            <li>Type contenu</li>
          </ul>
        </div>
        <div className={'hidden lg:flex h-[300px] my-auto items-center px-4'}>
          <Image
            src="/images/Group%201079.png"
            alt=""
            className=" h-full w-auto object-contain"
            width={500}
            height={500}
          />
        </div>
        <div className="flex justify-center w-full lg:hidden px-4">
          <Image
            src="/images/Group%201081.png"
            alt=""
            className="h-auto w-8/12 object-contain"
            width={500}
            height={500}
          />
        </div>
        <div className={'flex mx-auto items-center'}>
          <motion.img
            src="/images/solar_settings-linear-1.png"
            alt="Big Gear"
            height={500}
            width={500}
            className="w-20 h-20 md:w-24 md:h-24 xl:w-40 xl:h-40"
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.img
            src="/images/solar_settings-linear.png"
            alt="Small Gear"
            className="w-16 h-16 md:w-20 md:h-20 mt-5 md:mt-0 xl:w-24 xl:h-24"
            animate={{ rotate: -360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
        <div
          className={
            'scale-[-1] hidden lg:flex h-[300px] my-auto items-center px-4'
          }
        >
          <Image
            width={500}
            height={500}
            src="/images/Group%201079.png"
            alt=""
            className=" h-full w-auto object-contain"
          />
        </div>
        <div className="scale-[-1] flex justify-center w-full lg:hidden px-4">
          <Image
            width={500}
            height={500}
            src="/images/Group%201081.png"
            alt=""
            className="h-auto w-8/12 object-contain"
          />
        </div>
        <div
          className={
            'flex-1 m w-full md:w-10/12 lg:w-96 mx-auto flex flex-col border border-primary-600 p-10 rounded-2xl'
          }
        >
          {theme === 'dark' ? (
            <Image
              width={500}
              height={500}
              src="/images/next-light.png"
              alt=""
              className="mb-4 mx-auto"
            />
          ) : (
            <Image
              width={500}
              height={500}
              src="/images/next-dark.png"
              alt=""
              className="mb-4 mx-auto"
            />
          )}

          <ul className="list-disc mt-5 list-inside text-2xl ml-5 flex-grow flex flex-col justify-between">
            <li>Performant</li>
            <li>Rapide</li>
            <li>SEO amélioré</li>
            <li>Scalable</li>
          </ul>
        </div>
      </div>
    </CustomSection>
  );
};
