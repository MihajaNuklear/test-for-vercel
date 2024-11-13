import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { CustomSection } from '@/components/CustomSection';

const ReferencesSection: React.FC = () => {
  const logos = [
    'images/custom/ref_logo/ref_1_w.svg',
    'images/custom/ref_logo/ref_2_w.svg',
    'images/custom/ref_logo/ref_3_w.svg',
    'images/custom/ref_logo/ref_4_w.svg',
    'images/custom/ref_logo/ref_5_w.svg',
    'images/custom/ref_logo/ref_6_w.svg',
    'images/custom/ref_logo/ref_7_w.svg',
    'images/custom/ref_logo/ref_8_w.svg',
  ];

  const { theme } = useTheme();

  return (
    <CustomSection>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-14 leading-tight uppercase text-center`}
      >
        Références F4D
      </h2>
      <Marquee>
        {logos.map((logo, index) => (
          <div key={index} className="ml-20">
            <Image
              src={logo}
              alt={`Logo de la référence ${index + 1}`}
              width={200}
              height={200}
              className={`h-12 w-auto object-contain opacity-85 ${
                theme === 'dark' ? 'invert-0' : 'invert'
              }`}
            />
          </div>
        ))}
      </Marquee>
    </CustomSection>
  );
};

export default ReferencesSection;
