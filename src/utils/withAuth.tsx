'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

export function withAuth(WrappedComponent: React.ComponentType) {
  return function AuthComponent(props: any) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const token = getCookie('token'); // Utilisez cookies-next pour obtenir le token
        if (!token) {
          router.push('/login');
        } else {
          // Vérification supplémentaire avec votre API Strapi
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );
            if (response.ok) {
              setIsAuthenticated(true);
            } else {
              // Si le token n'est pas valide, supprimez-le et redirigez
              router.push('/login');
            }
          } catch (error) {
            console.error('Error verifying token:', error);
            router.push('/login');
          }
        }
      };

      checkAuth();
    }, [router]);

    if (!isAuthenticated) {
      return <div>Loading...</div>; // Ou un composant de chargement plus élaboré
    }

    return <WrappedComponent {...props} />;
  };
}
