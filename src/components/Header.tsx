'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';
import { getCookie, deleteCookie } from 'cookies-next';
import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'https://weartwice.strapi-pro.com';
const DEFAULT_PROFILE_IMAGE = 'https://via.placeholder.com/100';

interface UserData {
  id: number;
  username: string;
  email: string;
  picture: {
    id: number;
    name: string;
    url: string;
  } | null;
}

interface Subcategory {
  id: number;
  name: string;
  background: string | null;
}

interface Family {
  id: number;
  attributes: {
    title: string;
    background: string;
  };
}

interface Picto {
  data: {
    id: number;
    attributes: {
      name: string;
      url: string;
    };
  };
}

interface Category {
  id: number;
  attributes: {
    category: string;
    background: string;
    subcategory: Subcategory[];
    families: {
      data: Family[];
    };
    picto: Picto;
  };
}

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]); // État pour les catégories
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null); // État pour la catégorie survolée
  const router = useRouter();

  const fetchUserData = useCallback(async () => {
    const token = getCookie('token');
    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    setIsLoggedIn(true);
    try {
      const queryData = {
        populate: {
          picture: { fields: ['url', 'name', 'id'] }, // Populate the picture field
        },
      };
      const queryStringData = qs.stringify(queryData, {
        encodeValuesOnly: true,
      });
      const response = await axios.get<UserData>(
        `${BASE_URL}/api/users/me?${queryStringData}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setUserData(response.data);
      const fullUrl = response.data.picture
        ? `${BASE_URL}${response.data.picture.url}`
        : DEFAULT_PROFILE_IMAGE;
      setProfileImageUrl(fullUrl);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/product-categories?populate=*`,
      );
      setCategories(response.data.data); // Stocker les catégories directement
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
    fetchCategories(); // Appel pour récupérer les catégories
  }, [fetchUserData, fetchCategories]);

  const handleLogout = () => {
    deleteCookie('token');
    setIsLoggedIn(false);
    setUserData(null);
    router.push('/login');
  };

  const renderAuthButton = () => {
    if (isLoggedIn && pathname === '/dashboard') {
      return (
        <button
          onClick={handleLogout}
          className="bg-[#47715b] hover:bg-[#3a5a49] text-white font-bold rounded flex items-center justify-center h-10 min-w-[80px] text-sm leading-none"
        >
          Logout
        </button>
      );
    } else if (pathname === '/login') {
      return (
        <Link href="/public">
          <button className="bg-[#47715b] hover:bg-[#3a5a49] text-white font-bold rounded flex items-center justify-center h-10 min-w-[80px] text-sm leading-none">
            Back
          </button>
        </Link>
      );
    }
    // Supprimer le bouton Login
    return null;
  };

  return (
    <>
      <header className="bg-[#f9f9f9] text-[#47715b] flex flex-col md:flex-row justify-between items-center p-4  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-2 md:mb-0">
          <Image
            src="/images/weartwice-vert.png"
            alt="Logo"
            width={100}
            height={100}
            className="mr-4"
          />
          {userData && (
            <div className="flex items-center ml-4">
              <Image
                src={profileImageUrl || '/images/default.png'} // Utiliser l'URL de l'image de profil
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full mr-2"
              />
              <div className="flex flex-col">
                <span className="text-gray-800">Welcome,</span>
                <span className="text-gray-800 font-bold">
                  {userData.username}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center w-full max-w-md relative mb-2 md:mb-0">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-[#47715b] rounded-md p-2 pl-10 pr-12 w-full text-[#47715b] focus:outline-none focus:ring-2 focus:ring-[#47715b] focus:border-transparent"
          />
          <button className="absolute right-2 bg-[#47715b] text-white rounded-md px-3 py-2">
            <FaSearch />
          </button>
        </div>
        <div className="flex items-center ml-4">
          <Link
            href="/sell"
            className="bg-[#47715b] text-white rounded-md px-4 py-2 mr-2 hover:bg-[#3a5a49]"
          >
            Sell your product
          </Link>
          {renderAuthButton()}
        </div>
      </header>

      {/* Bandeau des catégories */}
      <div className="bg-[#47715b] text-white py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-nowrap justify-between mt-0 w-full overflow-x-auto">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center mx-2"
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="flex items-center">
                  {/* Affichage de l'icône de la catégorie à gauche */}
                  {category.attributes.picto.data && (
                    <Image
                      src={`${BASE_URL}${category.attributes.picto.data.attributes.url}`}
                      alt={category.attributes.category}
                      width={40}
                      height={40}
                      className="mr-2 filter invert" // Appliquer le filtre pour rendre l'icône blanche
                    />
                  )}
                  <Link
                    href={`/category/${category.attributes.category}`}
                    className="flex-1 hover:underline"
                  >
                    {category.attributes.category}
                  </Link>
                </div>
                {/* Affichage des sous-catégories au survol */}
                {hoveredCategory === category.id && (
                  <div className="absolute left-0 right-0 bg-[#47715b] bg-opacity-90 text-white p-2 mt-10 z-10">
                    <div className="flex flex-wrap justify-center">
                      {' '}
                      {/* Centrer les sous-catégories */}
                      {category.attributes.subcategory.map((subcategory) => (
                        <Link
                          key={subcategory.id}
                          href={`/subcategory/${subcategory.name}`}
                          className="hover:underline w-auto p-2"
                        >
                          {subcategory.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
