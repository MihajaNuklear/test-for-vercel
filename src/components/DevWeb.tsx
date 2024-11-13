'use client';

import Image from 'next/image';
import { CustomSection } from '@/components/CustomSection';
import { useTheme } from 'next-themes';

const DevWeb: React.FC = () => {
  const { theme } = useTheme();
  return (
    <CustomSection className={''}>
      <div
        className={`flex flex-col justify-center
         lg:px-0`}
      >
        <div
          id="container-dev-web"
          className="flex flex-col-reverse lg:flex-row justify-between items-center w-full h-auto md:h-[60%] gap-10 md:gap-28 relative"
        >
          <div
            id="left-dev-web"
            className="flex flex-col justify-center w-full lg:w-1/2 xl:w-1/2 gap-[50px] mb-6 md:mb-0 "
          >
            <h2
              id="title-service-dev-web"
              className="flex justify-center lg:justify-start text-2xl md:text-[50px] font-bold text-justify"
            >
              Développement web
            </h2>

            <div
              id="logo-service-dev-web"
              className="flex justify-center gap-[5%] md:justify-between items-center"
            >
              <Image
                className="w-[70px] h-[15px] sm:w-[85px] sm:h-[18px] md:w-[105px] md:h-[21px]"
                src={`/images/${theme === 'dark' ? 'Next-JS-dev-web' : 'pageService/next-js-black-services'}.png`}
                alt="Next.js logo"
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
                className="w-[35px] h-[18px] sm:w-[45px] sm:h-[22px] md:w-[59px] md:h-[35px]"
                src={`/images/tailwind-dev-web.png`}
                alt="Tailwind CSS logo"
                width={1000}
                height={1000}
                priority
              />
              <Image
                className="w-[70px] h-[18px] sm:w-[85px] sm:h-[20px] md:w-[113px] md:h-[32px]"
                src={`/images/${theme === 'dark' ? 'node-dev-web' : 'pageService/node-black-services'}.png`}
                alt="Node.js logo"
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
              src="/images/realisation-violet.png"
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

export default DevWeb;
