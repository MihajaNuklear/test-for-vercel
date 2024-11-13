import React from 'react';
import Image from 'next/image';
import { CustomSection } from '@/components/CustomSection';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export interface ServiceItemProps {
  images: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  images,
  title,
  description,
}) => {
  const { theme } = useTheme();

  return (
    <div className="relative flex-1 p-[3px] bg-gradient-to-r from-[#28C8D3]/75 to-[#7662F9]/75 rounded-[18px]">
      <div
        className={`${theme === 'dark' ? 'bg-[#0C1226]' : 'bg-white'} h-full p-10 flex flex-col gap-4 rounded-[19px]`}
      >
        <div className="flex w-full items-center justify-between h-auto">
          <Image
            src={`/images/${theme === 'dark' ? images : images + '_l'}.svg`}
            alt={title}
            width={500}
            height={500}
            className="object-cover w-full h-full"
            priority
            layout="intrinsic"
          />
        </div>
        <div>
          <p
            className={`font-bold text-2xl ${theme === 'dark' ? 'text-white' : 'text-primary-950'}`}
          >
            {title}
          </p>
          <p
            className={`text-justify ${theme === 'dark' ? 'text-white' : 'text-primary-950'}`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Divider = () => {
  const { theme } = useTheme();
  return (
    <div className="relative">
      <div
        className={`absolute inset-y-0 left-0 border-l ${theme === 'dark' ? 'border-gray-300' : 'border-gray-700'}`}
      ></div>
    </div>
  );
};
const ServicesSection = () => {
  const { theme } = useTheme();
  const services: ServiceItemProps[] = [
    {
      images: 'services_web',
      title: 'Développement Web',
      description:
        'Nous créons des sites web performants et réactifs en utilisant les dernières technologies du web. Grâce à Next.js et React.js, nous développons des applications rapides et évolutives qui offrent une expérience utilisateur exceptionnelle. Notre expertise en Tailwind CSS et Node.js nous permet de concevoir des interfaces modernes et des backends robustes, adaptés à vos besoins spécifiques.',
    },
    {
      images: 'services_mobile',
      title: 'Développement Mobile',
      description:
        'Nous développons des applications mobiles natives et multiplateformes qui fonctionnent parfaitement sur iOS et Android. Avec Flutter et React.js, nous garantissons des performances optimales et une interface utilisateur fluide. Nos solutions mobiles sont conçues pour être intuitives et engageantes, tout en intégrant les dernières fonctionnalités technologiques.',
    },
    {
      images: 'services_web_saas',
      title: 'Application Web/SaaS',
      description:
        'Nous concevons des applications web et SaaS sur mesure qui répondent aux besoins spécifiques de votre entreprise. En utilisant Strapi et React.js, nous développons des solutions flexibles et évolutives. Nos compétences en bases de données, telles que PostgreSQL et MongoDB, assurent une gestion efficace et sécurisée de vos données.',
    },
    {
      images: 'services_ui_ux',
      title: 'Design UI / UX',
      description:
        "Notre équipe de design UI/UX crée des interfaces utilisateur attrayantes et intuitives qui améliorent l'expérience utilisateur. En utilisant des outils de pointe comme Figma et Adobe, nous concevons des designs qui captivent et engagent vos utilisateurs. Nous nous concentrons sur l'ergonomie et l'esthétique pour garantir que chaque interaction avec votre produit est agréable et efficace.",
    },
  ];

  return (
    <CustomSection>
      <Image
        src="/images/cube-in-left-medium.png"
        alt="Cube in left small rotated"
        width={750}
        height={750}
        className="absolute rotate-3 ml-52 left-0 top-0 brightness-50 z-0"
      />
      <div className="z-20 min-h-[500px] mx-auto rounded-3xl rounded-tl-none relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 leading-tight uppercase text-center">
          Nos Services
        </h2>
        <div className="w-full flex flex-col justify-between mt-0 ld:mt-8 gap-1 md:gap-10 h-fit place-items-stretch">
          <div className="flex h-fit w-full gap-5 flex-col lg:flex-row lg:gap-10 xl:gap-16">
            <ServiceItem {...services[0]} />
            <Divider />
            <ServiceItem {...services[1]} />
          </div>
          <div
            className={cn(
              'hidden lg:block border-t h-1',
              theme === 'dark' ? 'border-gray-300' : 'border-gray-800',
            )}
          ></div>
          <div className="flex mt-5 md:mt-0 h-fit w-full gap-5 flex-col lg:gap-10 lg:flex-row xl:gap-16">
            <ServiceItem {...services[2]} />
            <Divider />
            <ServiceItem {...services[3]} />
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default ServicesSection;
