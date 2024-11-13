'use client';
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLargeLine } from 'react-icons/ri';
import { cn } from '@/lib/utils';
import ThemeTabsSwitch from '@/components/layout/Tab';
import Image from 'next/image';

interface NavItemsProps {
  id: number;
  title: string;
  url: string;
  description?: string;
}

interface NavbarColors {
  id: number;
  light: string;
  dark: string;
  isTransparent: boolean;
}

type NavbarProps = {
  logo_light: string;
  logo_dark: string;
  links: {
    url: string;
    newTab: boolean;
    text: string;
    nav_items?: NavItemsProps[];
  }[];
  navbar_colors: NavbarColors;
};

const Navbar: FC<NavbarProps> = ({
  logo_dark,
  logo_light,
  links,
  navbar_colors,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={cn(
        'sticky top-0 h-[80px] md:py-[31px] px-10 md:px-20 2xl:px-40 w-full flex justify-between z-[999] backdrop-blur-3xl ',
        theme === 'dark'
          ? 'text-white bg-primary-950 bg-opacity-75'
          : 'text-black bg-white bg-opacity-80',
      )}
    >
      <div
        id="logoFrench4Dev"
        className="flex w-full lg:w-fit justify-between lg:justify-start lg:flex-1 items-center z-10"
      >
        <Link href="/" passHref className="text-[24px] font-bold">
          {theme === 'dark' ? (
            <Image
              src={logo_dark}
              width={500}
              height={500}
              alt="logo_dark"
              className="w-full h-5"
            />
          ) : (
            <Image
              src={logo_light}
              width={500}
              height={500}
              alt="logo_light"
              className="w-full h-5"
            />
          )}
        </Link>
        <button
          className="block md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <RiCloseLargeLine size={27} />
          ) : (
            <GiHamburgerMenu size={27} />
          )}
        </button>
      </div>

      <ul
        id="navigation"
        className={`
          fixed md:relative
          top-0 left-0
          h-screen md:h-full
          w-[300px] md:w-[450px] lg:w-[485px]
          bg-black md:bg-transparent
          z-1
          flex flex-col md:flex-row
          items-center md:items-center
          gap-4 md:gap-[30px]
          pt-20 md:pt-0
          lg:ml-[9px]
          lg:justify-between
          transition-transform transform
          ${isMenuOpen ? `translate-x-0 ${theme === 'dark' ? 'backdrop-blur-3xl bg-primary-950' : 'backdrop-blur-3xl bg-white md:bg-transparent'} ` : '-translate-x-full '}
          md:translate-x-0
        `}
      >
        {links?.map(({ newTab, text, url }) => (
          <li key={url} className="relative text-center md:text-left group">
            <Link
              href={url}
              target={newTab ? '_blank' : '_self'}
              className={`block py-2 md:py-0 uppercase font-bold font-montserrat transition-opacity duration-300 ${
                pathname === url ? 'opacity-50' : 'opacity-100'
              } ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            >
              {text}
            </Link>

            {pathname === url ? (
              <div
                id="Line-active-link"
                className="absolute -bottom-2 left-0 w-full h-[4px] rounded-md"
                style={{
                  background: 'linear-gradient(to right, #7662F9, #28C8D3)',
                }}
              />
            ) : (
              <div
                id="Line-hover-link"
                className=" rounded-md absolute  left-0 w-full h-[4px] transform scale-x-0 group-hover:scale-x-100 group-hover:-bottom-2 transition-transform duration-300 ease-out"
                style={{
                  background: 'linear-gradient(to right, #7662F9, #28C8D3)',
                }}
              ></div>
            )}
          </li>
        ))}
      </ul>

      <div
        id="ThemeTabsSwitch"
        className="hidden md:flex items-center lg:justify-end lg:flex-1"
      >
        <ThemeTabsSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
