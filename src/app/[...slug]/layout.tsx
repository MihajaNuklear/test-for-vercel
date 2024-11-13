// src/app/[...slug]/metadata.ts
import { getPageBySlug } from '@/utils/get-page-by-slug';
import { FALLBACK_SEO } from '@/utils/constants';
import { Metadata } from 'next';
type Props = {
  params: {
    lang: string;
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPageBySlug(params.slug, params.lang);
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://www.french4dev.com';
  if (!page.data[0]?.attributes?.seo) return FALLBACK_SEO;
  const metadata = page.data[0].attributes.seo;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    alternates: {
      canonical: `${url}/${params.slug}`,
    },
  };
}

export default async function LayoutRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
