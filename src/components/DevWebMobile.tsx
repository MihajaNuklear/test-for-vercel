'use client';
import Image from 'next/image';
import { CustomSection } from '@/components/CustomSection';
import { useTheme } from 'next-themes';

const DevMobile = () => {
  const { theme } = useTheme();
  return (
    <CustomSection>
      <div className="flex flex-col justify-center lg:px-0 ">
        <div
          id="container-dev-web"
          className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center w-full h-auto md:h-[60%] gap-10 md:gap-28 relative"
        >
          <div
            id="left-dev-web"
            className="flex flex-col justify-center w-full lg:w-1/2 xl:w-1/2 gap-[50px] mb-6 md:mb-0 "
          >
            <h2
              id="title-service-dev-web"
              className="flex justify-center lg:justify-start text-2xl md:text-[50px] font-bold text-justify"
            >
              Développement Mobile
            </h2>

            <div
              id="logo-service-dev-web"
              className="flex justify-center gap-[5%] md:justify-between items-center"
            >
              <Image
                className="w-[87.62px] h-[25.03px] sm:w-[128.15px] sm:h-[36.62px] md:w-[128.15px] md:h-[36.62px]"
                src={`/images/${theme === 'dark' ? 'flutter-dev-mobile' : 'pageService/flutter-black-services'}.png`}
                alt="Flutter logo"
                width={1000}
                height={1000}
                priority
              />
              <Image
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[62px] md:h-[62px]"
                src={`/images/react-dev-web.png`}
                alt="react.js logo"
                width={1000}
                height={1000}
                priority
              />
              <Image
                className="w-[76.89px] h-[38.45px] sm:w-[112.46px] sm:h-[56.23px] md:w-[112.46px] md:h-[56.23px]"
                src={`/images/${theme === 'dark' ? 'expo-dev-mobile' : 'pageService/expo-black-services'}.png`}
                alt="Expo logo"
                width={1000}
                height={1000}
                priority
              />
              <Image
                className="w-[68.84px] h-[22.88px] sm:w-[100.69px] sm:h-[33.46px] md:w-[100.69px] md:h-[33.46px]"
                src={`/images/${theme === 'dark' ? 'kotlin-dev-mobile' : 'pageService/kotlin-black-services'}.png`}
                alt="Kotlin logo"
                width={1000}
                height={1000}
                priority
              />
            </div>

            <span id="mini-text-service-dev-web" className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              consequat erat eget mauris auctor, ac hendrerit nisl maximus. In
              egestas, orci eget feugiat fermentum, leo urna fa mauris auctor,
              ac hendrerit nisl maximus. In egestas, orci eget feugiat
              fermentum, leo urna fa. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis consequat erat eget mauris auctor, ac
              hendrerit nisl maximus. In
            </span>
            <span id="mini-text-2-service-dev-web" className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              consequat erat eget mauris auctor, ac hendrerit nisl maximus. In
              egestas, orci eget feugiat fermentum, leo urna fa mauris auctor,
              ac hendrerit nisl maximus. In egestas, orci eget feugiat
              fermentum, leo urna fa.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis consequat
            </span>
          </div>
          <div
            id="right-dev-web"
            className="flex justify-center items-center w-full lg:w-1/2 xl:w-1/2 relative"
          >
            <Image
              src="/images/fond-dev-mobile.png"
              alt="Service Web Development"
              width={1000}
              height={1000}
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        <div className={'h-fit pt-32'}>
          <hr
            className={`w-full h-[2px] mt-16' ${theme === 'dark' ? 'bg-white' : 'bg-black'} `}
          />
        </div>
      </div>
    </CustomSection>
  );
};

export default DevMobile;
