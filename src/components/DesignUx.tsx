'use client';

import Image from 'next/image';
import { CustomSection } from '@/components/CustomSection';
import { useTheme } from 'next-themes';

const DesignUx = () => {
  const { theme } = useTheme();
  return (
    <CustomSection>
      <div
        className="flex flex-col justify-center
         lg:px-0"
      >
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
              Design UI/UX
            </h2>

            <div
              id="logo-service-dev-web"
              className="flex justify-center gap-[5%] md:justify-between items-center"
            >
              <Image
                className="w-[96px] h-[48px] sm:w-[96px] sm:h-[48px] md:w-[96px] md:h-[48px]"
                src={`/images/${theme == 'light' ? 'pageService/figma-black-services' : 'figma-design-ux'}.png`}
                alt="figma logo"
                width={1000}
                height={1000}
                priority
              />
              <Image
                className="w-[44px] h-[42px] sm:w-[44px] sm:h-[42px] md:w-[44px] md:h-[42px]"
                src={`/images/adobe-design-ux.png`}
                alt="adobe logo"
                width={1000}
                height={1000}
                priority
              />
              <Image
                className="w-[45px] h-[43px] sm:w-[45px] sm:h-[43px] md:w-[45px] md:h-[43px]"
                src={`/images/ps-design-ux.png`}
                alt="ps logo"
                width={1000}
                height={1000}
                priority
              />
              <Image
                className="w-[44px] h-[46px] sm:w-[44px] sm:h-[46px] md:w-[44px] md:h-[46 px]"
                src={`/images/${theme == 'light' ? 'pageService/rond-black-services' : 'rond-design-ux'}.png`}
                alt="rond logo"
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
              src="/images/fond-design-ux.png"
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

export default DesignUx;
