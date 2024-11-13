// src/app/[...slug]/metadata.ts
import { getPageBySlug } from '@/utils/get-page-by-slug';
import { FALLBACK_SEO } from '@/utils/constants';

type Props = {
  params: {
    lang: string;
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const page = await getPageBySlug(params.slug, params.lang);

  if (!page.data[0]?.attributes?.seo) return FALLBACK_SEO;
  const metadata = page.data[0].attributes.seo;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
  };
}
