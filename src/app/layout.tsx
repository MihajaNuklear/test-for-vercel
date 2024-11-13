import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '../app/ClientLayout';
import AppThemeProvider from '@/context/theme';
import { ThemeProvider } from '@/lib/ThemeContext';
import { fetchAPI } from '@/utils/fetch-api';
import { getStrapiURL2, getStrapiMedia } from '@/utils/utils.helpers';
import { FALLBACK_SEO } from '@/utils/constants';
import FooterSection from '@/components/FooterSection';
import Navbar from '@/components/Navbar';
import CursorFollower from '@/components/CursorFollower';
import { isBrowser, isMobile } from 'react-device-detect';

const inter = Inter({ subsets: ['latin'] });

async function getGlobal(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token) {
    throw new Error('The Strapi API Token environment variable is not set.');
  }

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: [
      'metadata.shareImage',
      'favicon',
      'notificationBanner.link',
      'navbar.links',
      'navbar.links.nav_items',
      'navbar.navbarLogo.logo_light',
      'navbar.navbarLogo.logo_dark',
      'navbar.button',
      'navbar_colors',
      'footer.footerLogo.logoImg',
      'footer.menuLinks',
      'footer.legalLinks',
      'footer.socialLinks',
      'footer.categories',
      'themes',
      'currencies',
    ],
  };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getGlobal();

  if (!meta.data) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data.attributes;

  const { url } = favicon.data.attributes;
  const urlApp = process.env.NEXT_PUBLIC_APP_URL;
  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    alternates: {
      canonical: metadata.canonicalUrl || urlApp,
    },
    keywords: metadata.keywords || 'développement web',
    publisher: metadata.publisher || 'French4dev',
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [new URL(url, getStrapiURL2())],
    },
    openGraph: {
      images: ['/screen.png'],
      type: 'website',
      emails: ['French4dev'],
      url: urlApp,
      siteName: 'French4dev',
    },
    twitter: {
      images: ['/screen.png'],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const global = await getGlobal();

  if (!global.data) {
    // TODO: CREATE A CUSTOM ERROR PAGE
    return <div>Error loading global data</div>;
  }

  const {
    notificationBanner,
    navbar,
    footer,
    themes,
    currencies,
    navbar_colors,
  } = global.data.attributes;

  const navbarLogoUrlLight = getStrapiMedia(
    navbar.navbarLogo.logo_light.data?.attributes.url,
  );

  const navbarLogoUrlDark = getStrapiMedia(
    navbar.navbarLogo.logo_dark.data?.attributes.url,
  );

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'French4Dev',
              url: 'https://www.french4dev.com/',
              logo: 'https://www.french4dev.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+48 508 708 250',
                contactType: 'Customer Service',
              },
              sameAs: [
                'https://www.facebook.com/french4dev',
                'https://www.twitter.com/french4dev',
                'https://www.linkedin.com/company/french4dev',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} w-full overflow-x-hidden`}>
        <AppThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeProvider>
            {isBrowser && !isMobile && <CursorFollower />}
            <Navbar
              logo_dark={navbarLogoUrlDark || ''}
              logo_light={navbarLogoUrlLight || ''}
              links={navbar.links}
              navbar_colors={navbar_colors}
            />
            <main className="relative w-full overflow-hidden">{children}</main>
            <FooterSection />
          </ThemeProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}