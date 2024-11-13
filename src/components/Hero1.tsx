import { useId } from 'react';
import Image from 'next/image';
import { AppStoreLink } from './AppStoreLink';
import { AppStoreLink2 } from './AppStoreLink2';
import { Container } from './Container';
import { PhoneFrame } from './PhoneFrame';

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId();

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#47715b" />
            <stop offset="1" stopColor="#47715b" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#47715b" />
            <stop offset="1" stopColor="#47715b" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Hero1() {
  return (
    <div className="overflow-hidden py-16 sm:py-16 lg:pb-32 xl:pb-40">
      <Container>
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl text-center lg:col-span-7 lg:max-w-none lg:text-left lg:pt-6 xl:col-span-6">
            {/* Logo visible uniquement en mode mobile */}
            <Image
              src="/images/weartwice-vert.png"
              alt="weartwice"
              width={200}
              height={200}
              className="mx-auto mb-6 object-contain "
            />
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Sell easily, Buy sustainably
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Discover the new, simple and fast way to sell and buy your
              second-hand clothing and accessories in Dubai! <br />
              Our revolutionary app is coming soon to the App Store and Google
              Play. <br />
              Clear out your wardrobe, make money, and embrace a more
              sustainable way to enjoy fashion.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4">
              <AppStoreLink />
              <AppStoreLink2 />
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 flex justify-center lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="relative -mx-4 h-[448px] w-full sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32 flex justify-center">
              <PhoneFrame className="z-10 mx-auto max-w-[366px]" priority>
                {/*<AppDemo />*/}
              </PhoneFrame>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero1;
