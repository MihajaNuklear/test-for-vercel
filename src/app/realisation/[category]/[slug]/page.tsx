import RealisationDetails from '@/components/realisation-view/realisationDetails';
import { fetchAPI } from '@/utils/fetch-api';

async function getPostBySlug(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/realisations`;
  const urlParamsObject = {
    filters: { slug },
    populate: {
      cover: { fields: ['url'] },
      authorsBio: { populate: '*' },
      category: { fields: ['name'] },
      blocks: {
        populate: {
          __component: '*',
          files: '*',
          file: '*',
          url: '*',
          body: '*',
          title: '*',
          author: '*',
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchAPI(path, urlParamsObject, options);
  return response;
}

export default async function PostRoute({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = await getPostBySlug(slug);
  if (data.data.length === 0) return <h2>no post found</h2>;

  return (
    <div>
      <RealisationDetails data={data.data[0]} />
    </div>
  );
}

export async function generateStaticParams() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/realisations`;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const articleResponse = await fetchAPI(
    path,
    {
      populate: ['category'],
    },
    options,
  );

  return articleResponse.data.map(
    (article: {
      attributes: {
        slug: string;
        category: {
          slug: string;
        };
      };
    }) => ({
      slug: article.attributes.slug,
      category: article.attributes.slug,
    }),
  );
}
