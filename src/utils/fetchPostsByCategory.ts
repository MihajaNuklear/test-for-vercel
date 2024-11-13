// fetchPostsByCategory.ts
// eslint-disable-next-line prettier/prettier
import { fetchAPI } from '@/utils/fetch-api';

export async function fetchPostsByCategory(filter: string) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/realisations`;
    const urlParamsObject = {
      sort: { createdAt: 'desc' },
      filters: {
        category: {
          slug: filter,
        },
      },
      populate: {
        cover: { fields: ['url'] },
        category: {
          populate: '*',
        },
        authorsBio: {
          populate: '*',
        },
      },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (error) {
    console.error(error);
  }
}
