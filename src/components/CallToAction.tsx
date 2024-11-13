import { AppStoreLink } from './AppStoreLink';
import { CircleBackground } from './CircleBackground';
import { Container } from './Container';
import Image from 'next/image';

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-[#47715b] py-10 sm:py-12"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center flex flex-col items-center">
          <Image
            src="/images/logo.png"
            alt="weartwice"
            width={150}
            height={150}
            className="object-contain"
          />
          {/* <h2 className="text-3xl font-medium tracking-tight text-white sm:text-3xl mt-4">
            Embrace Sustainable Fashion
          </h2>
          <p className="mt-4 text-mg text-gray-300">
            Join Weartwice today and start transforming your wardrobe with our unique collection of pre-loved clothing. Download the app to explore sustainable fashion options and make a positive impact on the environment.
          </p> */}
          {/* <div className="mt-8 flex justify-center">
            <AppStoreLink color="white" />
          </div> */}
        </div>
      </Container>
    </section>
  );
}
