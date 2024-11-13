import componentResolver from '@/utils/component-resolver';
import { getPageBySlug } from '@/utils/get-page-by-slug';
import AlertError from '@/common/Alerts/AlertError';

export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  let error = null;

  try {
    const page = await getPageBySlug('accueil', params.lang);
    if (page.error && page.error.status == 401)
      throw new Error(
        'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/',
      );

    if (page.data.length === 0) return null;
    const contentSections = page.data[0].attributes.contentSections;
    return (
      <>
        {contentSections.map((section: { /* specify the type here */ }, index: number) =>
          componentResolver(section, index),
        )}
      </>
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      error = e.message;
    } else {
      error = 'An unknown error occurred';
    }
  }

  if (error) {
    return <AlertError message={error} />;
  }

  return null;
}
