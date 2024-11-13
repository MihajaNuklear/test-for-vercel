import React from 'react';
import type { Metadata } from 'next';
import { fetchAPI } from '@/utils/fetch-api';

async function getMetaData(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/realisations`;
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
  children,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
    category: string;
  };
}) {
  return <div>{children}</div>;
}
