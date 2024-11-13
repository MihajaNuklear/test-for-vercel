import { FC } from 'react';
import { TechnoCard } from '@/components/TechnoCard';
import { CustomSection } from '@/components/CustomSection';
import Image from 'next/image';

const WhyStrapiSection: FC = () => {
  return (
    <CustomSection>
      <Image
        src="/images/cube-in-left-medium.png"
        alt="Cube in left medium"
        width={750}
        height={750}
        className="z-0 absolute -ml-20 left-0 "
      />
      <Image
        src="/images/cube-in-left-small.png"
        alt="Cube in left small rotated"
        width={750}
        height={750}
        className="z-0 absolute top-1/2 rotate-180 scale-110 right-24"
      />
      <Image
        src="/images/cube-in-left-small.png"
        alt="Cube in left small rotated and scaled"
        width={750}
        height={750}
        className="z-0 absolute top-20 rotate-45 scale-150 -right-80"
      />
      <TechnoCard
        title={'pourquoi strapi ?'}
        description={
          'Le CMS Headless Ultime pour des API Flexibles et Performantes.'
        }
        details={[
          {
            title: 'Flexibilité Totale :',
            description:
              'Strapi permet de créer des API REST ou GraphQL et de choisir librement les technologies front-end.',
          },
          {
            title: 'Gestion de Contenu Simplifiée :',
            description:
              "L'interface intuitive facilite la gestion du contenu, même pour les non-développeurs.",
          },
          {
            title: 'Open-Source et Extensible :',
            description:
              "L'architecture modulaire permet d'ajouter facilement des fonctionnalités et de s'adapter aux besoins.",
          },
        ]}
        image={'/images/Group 978.png'}
        reverse={false}
      ></TechnoCard>
    </CustomSection>
    // </section>
  );
};

export default WhyStrapiSection;
