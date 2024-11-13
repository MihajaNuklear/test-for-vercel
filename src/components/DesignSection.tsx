import React from 'react';
import Image from 'next/image';
// import { useTheme } from 'next-themes';
import { CustomSection } from '@/components/CustomSection';

function DesignSection() {
  // const { theme } = useTheme();
  return (
    <CustomSection>
      <article className={`z-20 relative flex flex-col lg:flex-row gap-7`}>
        <div className="w-full lg:w-7/12 space-y-7">
          <h2 className="uppercase text-lg md:text-2xl tracking-wide sm:tracking-wider md:tracking-widest">
            Design ui/ux
          </h2>
          <p className="text-2xl sm:text-4xl leading-tight md:leading-normal font-bold">
            L’Atout Essentiel pour Captiver et Fidéliser vos Utilisateurs
          </p>
          <p>
            Design ui/ux L’Atout Essentiel pour Captiver et Fidéliser vos
            Utilisateurs Le design UI/UX est fondamental pour concevoir des
            interfaces intuitives et attrayantes qui séduisent les utilisateurs
            dès le premier contact. En optimisant la navigation et en répondant
            à leurs besoins, il augmente leur satisfaction et leur fidélité. Un
            bon design est également un atout majeur pour se démarquer dans un
            marché concurrentiel.
          </p>
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
              src="/images/Group_999.png"
              alt={`Illustration for ${'title'}`}
              fill
              className="object-fill"
            />
          </div>
        </div>
      </article>
    </CustomSection>
  );
}

export default DesignSection;
