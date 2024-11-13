export const getStrapiBaseURL = () => {
  const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!baseURL) {
    console.error('NEXT_PUBLIC_STRAPI_URL is not defined');
  }
  return baseURL || ''; // Retourne une chaîne vide si non défini
};

export const getStrapiURL = (paths: string) => {
  const apiURL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  if (!apiURL) {
    console.error('NEXT_PUBLIC_STRAPI_API_URL is not defined');
  }
  return `${apiURL || ''}/${paths}`; // Retourne une chaîne vide si non défini
};

export function getStrapiMedia(url: string | null | undefined) {
  if (url == null) {
    return null; // Retourne null si l'URL est null ou undefined
  }

  if (url.startsWith('http') || url.startsWith('//')) {
    return url; // Retourne l'URL si elle est déjà complète
  }

  const baseURL = getStrapiBaseURL();
  return `${baseURL}${url}`; // Concatène l'URL de base avec l'URL relative
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('fr-FR', options);
}

export function getStrapiURL2(path = '') {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`;
}
