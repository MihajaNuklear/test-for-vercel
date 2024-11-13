'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ErrorPage: React.FC = () => {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Oups ! Un problème s'est produit.
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Nous ne parvenons pas à trouver la page que vous recherchez.
      </p>
      <button
        onClick={handleReturnHome}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      >
        Retour à l'accueil
      </button>
    </div>
  );
};
export default ErrorPage;
