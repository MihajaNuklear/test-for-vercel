import { fetchAPI } from '@/utils/fetch-api';
import React from 'react';
import type { Metadata } from 'next';

async function getMetaData(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/articles`;
  const urlParamsObject = {
    filters: { slug },
    populate: { seo: { populate: '*' } },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchAPI(path, urlParamsObject, options);
  return response.data;
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const meta = await getMetaData(params.slug);
  const metadata = meta[0].attributes.seo;
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://www.french4dev.com';
  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    alternates: {
      canonical: `${url}/${params.category}/${params.slug}`,
    },
  };
}

export default async function LayoutRoute({
  // params,
  children,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
    category: string;
  };
}) {
  // const { category } = params;
  // const { categories, articles } = (await fetchSideMenuData(category)) as Data;

  return <div className="">{children}</div>;
}

export async function generateStaticParams() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/articles`;
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
