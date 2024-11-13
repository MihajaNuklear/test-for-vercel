import React, { FC } from 'react';
import RealisationCard from '@/components/RealisationCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CustomSection } from '@/components/CustomSection';
// import { useTheme } from 'next-themes';

const RealisationSection: FC = () => {
  // const { theme } = useTheme();

  const realisations = [
    {
      image: '/images/ordinateur.png',
      title: 'Lorem ipsum title',
      type: 'App.web',
    },
    {
      image: '/images/portfolio.png',
      title: 'Lorem ipsum title',
      type: 'App.web',
    },
    {
      image: '/images/ordinateur-2.png',
      title: 'Lorem ipsum title',
      type: 'Mobile',
    },
    {
      image: '/images/ordinateur.png',
      title: 'Lorem ipsum title',
      type: 'Design',
    },
  ];
  return (
    <CustomSection>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-14 leading-tight uppercase text-center`}
      >
        Nos Réalisations
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="swiper-container w-full"
      >
        {realisations.map((realisation, index) => (
          <SwiperSlide
            key={'SwiperSlide-Realisation' + index}
            className="w-full"
          >
            <RealisationCard
              key={index}
              image={realisation.image}
              title={realisation.title}
              type={realisation.type}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </CustomSection>
  );
};

export default RealisationSection;
