import { useTheme } from 'next-themes';
import React from 'react';
 

const Techno: React.FC = () => {
  const logos = [
    'images/Strapi-logo-white.png',
    'images/Next-JS-logo-white.png',
    'images/iconFlutterService.png',
    'images/services-kotlin.png',
    'images/vercel-white.png',
    'images/nest-logo.png',
    'images/figma-logo.png',
    'images/lottie-file-logo.png',
  ];

  const { theme } = useTheme();

  return (
    <section className={`py-16 transition-colors duration-300 mb-20`}>
      <div className="container mx-auto px-4">
        <hr
          className={`border mb-12 ${theme ? `border-white` : `border-black`}`}
        ></hr>
        <h2
          className={`text-4xl md:text-5xl font-bold mb-14 leading-tight uppercase`}
        >
          Les techno de French4Dev
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-16 gap-x-8 justify-items-center items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={logo}
                alt={`Logo de la référence ${index + 1}`}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techno;
