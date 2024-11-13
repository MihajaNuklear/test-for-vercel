// pages/[lang]/[slug].js
'use client';

import Head from 'next/head';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import componentResolver from '@/utils/component-resolver';
import { getPageBySlug } from '@/utils/get-page-by-slug';

type Props = {
  params: {
    lang: string;
    slug: string;
  };
};

interface PageAttributes {
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  contentSections: Array<{ type: string; content: Record<string, unknown> }>;
}

interface PageData {
  data: {
    attributes: PageAttributes;
  }[];
}

export default function PageRoute({ params }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [page, setPage] = useState<PageData | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      const pageData = await getPageBySlug(params.slug, params.lang);
      if (pageData.data.length === 0) {
        router.push('/error');
      } else {
        setPage(pageData);
      }
    };

    fetchPageData();
  }, [params.slug, params.lang, router]);

  if (!page) {
    return <div>Loading...</div>; // Indicateur de chargement
  }

  const canonicalUrl = `https://www.french4dev.com${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <title>{page.data[0].attributes.seo.metaTitle}</title>
        <meta
          name="description"
          content={page.data[0].attributes.seo.metaDescription}
        />
      </Head>
      <section>
        {page.data[0].attributes.contentSections.map((section, index) =>
          componentResolver(section, index),
        )}
      </section>
    </>
  );
}