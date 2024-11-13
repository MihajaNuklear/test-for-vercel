'use client';
import CardBlog from '@/components/CardBlog';
import { getStrapiMedia } from '@/utils/utils.helpers';
import { useTheme } from 'next-themes';
import { BlogData } from '@/types/blog';
import qs from 'qs';
import useSWR from 'swr';
import fetcherSwr from '@/utils/fetcherSwr';
import { LoadingScreen } from '@/components/LoadingScreen';

const CategoryRoute = ({ params }: { params: { category: string } }) => {
  const filter = params.category;
  const { theme } = useTheme();
  const query = qs.stringify({
    ...(filter && {
      filters: {
        category: {
          slug: {
            $eqi: filter,
          },
        },
      },
    }),

    populate: {
      cover: { fields: ['url'] },
      category: { populate: '*' },
      authorsBio: {
        populate: '*',
      },
    },
  });

  const { data, error, isLoading } = useSWR<{ data: BlogData[] }>(
    `/articles?${query}`,
    fetcherSwr,
  );
  if (isLoading) return <LoadingScreen />;

  if (error) return <div>error</div>;

  return (
    <section
      className={`py-16  transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#070b14] to-[#07071b] text-white'
          : 'bg-white text-black'
      }`}
    >
      <div className="container mx-auto px-4">
        <hr
          className={`border mb-12 ${
            theme === 'dark' ? `border-white` : `border-black`
          }`}
        />
        <h1
          className={`text-4xl md:text-[48px] font-bold mb-14 leading-tight uppercase`}
        >
          Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data &&
            data.data.map(({ attributes }, index) => (
              <CardBlog
                key={'category-route-' + index}
                image={
                  getStrapiMedia(attributes.cover?.data?.attributes.url) || ''
                }
                date={attributes.updatedAt}
                title={attributes.title}
                description={attributes.description}
                url={`/blog/${attributes.category.data.attributes.slug}/${attributes.slug}`}
                authors={attributes.authorsBio?.data.attributes.name}
                avatarUrl={attributes.authorsBio?.data.attributes.avatar}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
export default CategoryRoute;
