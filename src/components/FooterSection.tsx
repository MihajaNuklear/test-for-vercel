'use client';

import React from 'react';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { CustomSection } from '@/components/CustomSection';
import { usePathname } from 'next/navigation';

// Types
interface ContactInfo {
  icon: string;
  alt: string;
  text: string;
  link?: string;
}

// Constantes
const CONTACT_INFO: ContactInfo[] = [
  {
    icon: '/images/Mail.svg',
    alt: 'Icône email',
    text: 'contact@french4dev.com',
    link: 'mailto:contact@french4dev.com'
  },
  {
    icon: '/images/Phone.svg',
    alt: 'Icône téléphone',
    text: '+48 508 708 250',
    link: 'tel:+48508708250'
  },
  {
    icon: '/images/Location.svg',
    alt: 'Icône localisation',
    text: 'Żmujdzka 31 / 4, 31-217 Kraków'
  }
];

const FooterSection: React.FC = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  const getContrastClass = (element: 'text' | 'background' | 'border') => {
    switch (element) {
      case 'text':
        return theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
      case 'background':
        return theme === 'dark' ? 'bg-[#1a1c30]' : 'bg-white';
      case 'border':
        return theme === 'dark' ? 'border-gray-700' : 'border-gray-300';
      default:
        return '';
    }
  };

  return (
    <CustomSection>
      <div className="z-10 relative overflow-x-hidden">
        {/* Section Titre */}
        <div className="text-center mb-10">
          <h2 className={cn(
            "text-[50px] md:text-[80px] lg:text-[80px] font-medium mb-4",
            getContrastClass('text')
          )}>
            Besoin d&apos;
            <span className={cn(
              "font-bold",
              theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
            )}>
              aide
            </span> pour vos <br />
            <span className={cn(
              "font-bold",
              theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
            )}>
              Projets&nbsp;?
            </span>
          </h2>
        </div>

        {/* Section Formulaire */}
        {!isContactPage && (
          <div className="flex flex-col items-center md:flex-row justify-center mb-12 gap-5">
            <div className="w-full md:w-4/12">
              <label htmlFor="email" className="sr-only">
                Votre adresse email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className={cn(
                  'w-full backdrop-blur-md border-2 rounded-lg py-4 px-6',
                  'focus:outline-none focus:ring-2 focus:ring-blue-600',
                  'transition-colors duration-200',
                  getContrastClass('text'),
                  getContrastClass('background'),
                  getContrastClass('border')
                )}
              />
            </div>

            <div className="relative p-[2px] rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-l from-[#28C8D3] to-[#7662F9] rounded-xl opacity-75" />
              <button
                className={cn(
                  'relative px-6 py-3 rounded-xl font-bold text-xl',
                  'flex items-center gap-2 transition-all duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-blue-500',
                  theme === 'dark' ? 'text-white bg-[#1a1c30]' : 'text-white bg-[#1a1c30]'
                )}
                aria-label="Nous contacter"
              >
                <span>Nous contacter</span>
                <IoIosArrowRoundForward 
                  size={38} 
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1" 
                />
              </button>
            </div>
          </div>
        )}

        {/* Section Informations de Contact */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTACT_INFO.map((info, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-3xl mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={info.icon}
                    alt={info.alt}
                    fill
                    className={cn(
                      'object-contain',
                      theme === 'dark' ? 'opacity-90' : 'opacity-85'
                    )}
                  />
                </div>
              </div>
              {info.link ? (
                <a
                  href={info.link}
                  className={cn(
                    'text-center font-semibold hover:underline',
                    getContrastClass('text')
                  )}
                >
                  {info.text}
                </a>
              ) : (
                <p className={cn(
                  'text-center font-semibold',
                  getContrastClass('text')
                )}>
                  {info.text}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Section Logo et Footer */}
        <div className="text-center mt-12 pt-8">
          <div className="flex h-full items-center justify-center">
            <Image
              src="/images/french4dev.svg"
              alt="Logo French4dev"
              width={500}
              height={500}
              className={cn(
                'h-12 w-auto object-contain',
                theme === 'dark' ? 'opacity-90' : 'opacity-85'
              )}
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className={cn(
              'my-4 border-t w-full max-w-[705px]',
              getContrastClass('border')
            )} />

            <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-16 text-center md:text-left space-y-2 md:space-y-0 text-[14px] md:text-[18px]">
              <p className={getContrastClass('text')}>
                © 2024, French4dev. Tous droits réservés
              </p>
              <div className="flex space-x-4 ml-0 md:ml-4">
                <span className={cn(
                  'mx-1',
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                )}>•</span>
                <Link
                  href="/mentions-legales"
                  className={cn(
                    'hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded',
                    getContrastClass('text')
                  )}
                >
                  Mentions légales
                </Link>
                <span className={cn(
                  'mx-1',
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                )}>•</span>
                <Link
                  href="/cookies"
                  className={cn(
                    'hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded',
                    getContrastClass('text')
                  )}
                >
                  Gestion des cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default FooterSection;