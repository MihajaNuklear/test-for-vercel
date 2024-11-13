'use client';
import Image from 'next/image';
import { CustomSection } from '@/components/CustomSection';
import { useTheme } from 'next-themes';

const DevSaas = () => {
  const { theme } = useTheme();
  return (
    <CustomSection>
      <div
        className="flex flex-col justify-center
         lg:px-0"
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
              Application Web/Saas
            </h2>

            <div
              id="logo-service-dev-web"
              className="flex justify-center gap-[5%] md:justify-between items-center"
            >
              <Image
                className="w-[82.3px] h-[21.92px] sm:w-[111.25px] sm:h-[29.63px] md:w-[111.25px] md:h-[29.63px]"
                src={`/images/${theme === 'dark' ? 'strapi-application-saas' : 'pageService/strapi-black-services'}.png`}
                alt="Strapi logo"
                width={1000}
                height={1000}
                priority
              />
              <Image
                className="w-[30.33px] h-[30.33px] sm:w-[41px] sm:h-[41px] md:w-[41px] md:h-[41px]"
                src={`/images/${theme === 'dark' ? 'triangle-application-saas' : 'pageService/triangle-black-services'}.png`}
                alt="React.js logo"
                width={1000}
                height={1000}
                priority
              />
              <Image
                className="w-[52.52px] h-[18px] sm:w-[71px] sm:h-[62px] md:w-[71px] md:h-[62px]"
                src={`/images/${theme === 'dark' ? 'postgress-application-saas' : 'pageService/postgres-black-services'}.png`}
                alt="Postgres logo"
                width={1000}
                height={1000}
                priority
              />
              <Image
                className="w-[91.73px] h-[45.87px] sm:w-[124px] sm:h-[62px] md:w-[124px] md:h-[62px]"
                src={`/images/${theme === 'dark' ? 'mongo-application-saas' : 'pageService/mongo-black-services'}.png`}
                alt="MongoDB logo"
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
              src="/images/fond-application-saas.png"
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

export default DevSaas;
