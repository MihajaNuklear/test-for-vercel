'use client';
import { useState } from 'react';
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
import CardRealisation from './CardRealisation';

type CategoryType = {
  data: {
    id: number;
    attributes: CategoryAttr;
  };
};

interface BlogAttr {
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
  category: CategoryType;

  updatedAt: Date;
}

export interface BlogData {
  id: number;
  attributes: BlogAttr;
}

export default function ListRealisationComponent() {
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
    `/realisations?${query}`,
    fetcherSwr,
  );

  const { data: categoriesData } = useSWR<CategoryData>(
    `/realisation-categories`,
    fetcherSwr,
  );

  if (error) return <div>error</div>;
  if (isLoading) return <LoadingScreen></LoadingScreen>;
  console.log(data);
  return (
    <CustomSection>
      <div className={``}>
        <div className="w-full overflow-x-auto max-w-full custom-scrollbar flex space-x-4 mb-8">
          {categoriesData && (
            <CategoryFilters
              categoriesData={categoriesData}
              selectedCategories={category}
              setSelectedCategories={setCategory}
            />
          )}
        </div>

        {data && data.data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28">
            {data.data.map(({ attributes }, index) => (
              <CardRealisation
                key={index}
                image={
                  getStrapiMedia(attributes.cover?.data?.attributes.url) || ''
                }
                subtitle={attributes.category.data.attributes.name}
                date={attributes.updatedAt}
                title={attributes.title}
                description={attributes.description}
                url={`/realisation/${attributes?.category?.data.attributes.slug}/${attributes.slug}`}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <p className="text-xl font-semibold">
              Aucune réalisation disponible
            </p>
          </div>
        )}
      </div>
    </CustomSection>
  );
}
