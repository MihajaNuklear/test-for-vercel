'use client';
import { useState } from 'react';
import CardBlog from '@/components/CardBlog';
import { getStrapiMedia } from '@/utils/utils.helpers';
import qs from 'qs';
import useSWR from 'swr';
import fetcherSwr from '@/utils/fetcherSwr';
import CategoryFilters, {
  CategoryAttr,
  CategoryData,
} from '@/common/Fiters/CategoryFilters';
import { CustomSection } from '@/components/CustomSection';
import { LoadingScreen } from '@/components/LoadingScreen';
import { StrapiPictureType } from '@/types/index';
type CategoryType = {
  data: {
    id: number;
    attributes: CategoryAttr;
  };
};

export interface BlogData {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    cover: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
    authorsBio?: {
      data: {
        attributes: {
          name: string;
          avatar: StrapiPictureType;
        };
      };
    };
    category: CategoryType;
    updatedAt: Date;
  };
}
const BlogPageLayout = () => {
  const [category, setCategory] = useState<string[] | []>([]);

  const query = qs.stringify({
    ...(category && {
      filters: {
        category: {
          name: {
            $eqi: category,
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

  const { data: categoriesData } = useSWR<CategoryData>(
    `/categories`,
    fetcherSwr,
  );

  if (error) return <div>error</div>;
  if (isLoading) return <LoadingScreen />;

  return (
    <CustomSection className={''}>
      <div className="mb-10">
        <div className="custom-scrollbar category-filters flex max-w-full overflow-x-scroll  space-x-4 mb-8">
          {categoriesData && (
            <CategoryFilters
              categoriesData={categoriesData}
              selectedCategories={category}
              setSelectedCategories={setCategory}
            />
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28">
          {data?.data?.map(({ attributes }, index) => (
            <CardBlog
              key={'profile' + index}
              image={
                getStrapiMedia(attributes.cover?.data?.attributes?.url) || ''
              }
              date={attributes.updatedAt}
              title={attributes.title}
              description={attributes.description}
              authors={attributes.authorsBio?.data?.attributes?.name as string}
              avatarUrl={attributes.authorsBio?.data.attributes.avatar}
              url={`/blog/${attributes.category?.data?.attributes?.slug}/${attributes.slug}`}
            />
          ))}
        </div>
      </div>
    </CustomSection>
  );
};
export default BlogPageLayout;
