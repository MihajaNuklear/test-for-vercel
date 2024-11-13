'use client';
import React, { FC } from 'react';
import RealisationCard from '@/components/RealisationCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CustomSection } from '@/components/CustomSection';
import { StrapiPictureType } from '@/types';
import HighlightedText from '@/common/HighlightedText';
import { getStrapiMedia } from '@/utils/utils.helpers';

type RealistionData = {
  data: {
    title: string;
    realisations: {
      data: {
        id: number;
        attributes: {
          title: string;
          description: string;
          slug: string;
          cover: StrapiPictureType;
        };
      }[];
    };
  };
};

const RealisationSection: FC<RealistionData> = ({ data }) => {
  if (!data) return null;
  const { title, realisations } = data;

  //   {
  //     image: '/images/ordinateur.png',
  //     title: 'Lorem ipsum title',
  //     type: 'App.web',
  //   },
  //   {
  //     image: '/images/portfolio.png',
  //     title: 'Lorem ipsum title',
  //     type: 'App.web',
  //   },
  //   {
  //     image: '/images/ordinateur-2.png',
  //     title: 'Lorem ipsum title',
  //     type: 'Mobile',
  //   },
  //   {
  //     image: '/images/ordinateur.png',
  //     title: 'Lorem ipsum title',
  //     type: 'Design',
  //   },
  // ];
  return (
    <CustomSection>
      <HighlightedText
        text={title}
        className="text-3xl md:text-4xl font-bold mb-14 leading-tight uppercase text-center"
      />
      {realisations && (
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
          {realisations.data.map(({ attributes }, index) => {
            const imgUrl = getStrapiMedia(attributes.cover.data.attributes.url);
            return (
              <SwiperSlide
                key={'RealisationCard-swiper' + index}
                className="w-full"
              >
                <RealisationCard
                  image={imgUrl || ''}
                  title={attributes.title}
                  type={attributes.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </CustomSection>
  );
};

export default RealisationSection;
