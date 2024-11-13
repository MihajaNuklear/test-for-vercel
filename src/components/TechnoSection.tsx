import React from 'react';
import { TechnoCard } from '@/components/TechnoCard';
import { CustomSection } from '@/components/CustomSection';

function TechnoSection() {
  
  return (
    //   <Image
    //       src="/images/cube-in-left-small.png"
    //       alt="Cube in left small rotated and scaled"
    //       width={750}
    //       height={750}
    //       className="absolute top-20 rotate-45 scale-150 -left-0"
    //   />
    <CustomSection>
      <TechnoCard
        title={'la techno nextjs'}
        description={
          'Le Framework Idéal pour des Applications Web Rapides et SEO-Friendly'
        }
        details={[
          {
            title: 'Performance Optimale :',
            description:
              'Next.js offre le rendu côté serveur et le pré-rendu statique, garantissant des temps de chargement rapides.',
          },
          {
            title: 'SEO Amélioré :',
            description:
              'Grâce au rendu côté serveur, les pages sont mieux indexées par les moteurs de recherche, améliorant la visibilité en ligne.',
          },
        ]}
        image={'/images/Group 982.png'}
        reverse={true}
      ></TechnoCard>
    </CustomSection>
  );
}

export default TechnoSection;
