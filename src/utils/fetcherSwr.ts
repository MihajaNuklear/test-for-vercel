import { getStrapiURL } from './utils.helpers';

const fetcherSwr = async <T>(
  path: string,
  query?: Record<string, string>,
  init?: RequestInit,
): Promise<T> => {
  const requestUrl = `${getStrapiURL(`api${path}`)}`;

  const response = await fetch(requestUrl, init);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json() as Promise<T>;
};

export default fetcherSwr;
