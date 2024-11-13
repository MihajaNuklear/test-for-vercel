import { fetchAPI } from '@/utils/fetch-api';
import { getStrapiMedia } from '@/utils/utils.helpers';
import CardRealisation from '@/components/CardRealisation';

export interface BlogData {
  id: number;
  attributes: BlogAttr;
}

export interface BlogAttr {
  title: string;
  description: string;
  cover: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  updatedAt: string;
  category: {
    data: {
      attributes: {
        slug: string;
      };
    };
  };
  subtitle?: string; // Added subtitle property
  slug: string; // Added slug property
}

async function fetchPostsByCategory(filter: string) {
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

export default async function CategoryRoute({
  params,
}: {
  params: { category: string };
}) {
  const filter = params.category;
  const data: BlogData[] = await fetchPostsByCategory(filter);

  //TODO: CREATE A COMPONENT FOR THIS
  if (data.length === 0) return <div>Not Posts In this category</div>;

  // const { name, description } = data[0]?.attributes.category.data.attributes;
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data &&
          data.map(({ attributes }, index) => (
            <CardRealisation
              key={index}
              image={
                getStrapiMedia(attributes.cover?.data?.attributes.url) || ''
              }
              date={attributes.updatedAt}
              title={attributes.title}
              description={attributes.description}
              subtitle={attributes.subtitle || 'Default Subtitle'}
              url={`/realisation/${attributes?.category?.data.attributes.slug}/${attributes.slug}`}
            />
          ))}
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return [];
}
