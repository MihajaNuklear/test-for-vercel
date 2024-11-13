'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import TestimonialsCard from '@/components/TestimonialsCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CustomSection } from '@/components/CustomSection';
import HighlightedText from '@/common/HighlightedText';
import { StrapiPictureType } from '@/types';
import { getStrapiMedia } from '@/utils/utils.helpers';
type TestimonialsData = {
  data: {
    title: string;
    testimonials: {
      name: string;
      role: string;
      picture: StrapiPictureType;
      quote: string;
    }[];
  };
};

const TestimonialsSection: FC<TestimonialsData> = ({ data }) => {
  if (!data) return null;
  const { title, testimonials } = data;

  return (
    <CustomSection>
      <div className={'z-10 relative'}>
        <HighlightedText
          text={title}
          className="text-3xl md:text-4xl font-bold mb-14 leading-tight uppercase text-center"
        />

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          className="swiper-container"
        >
          {testimonials.map(({ name, picture, quote, role }, index) => {
            const imgUrl = getStrapiMedia(picture.data.attributes.url);
            return (
              <SwiperSlide key={'TestimonialsCard-' + index}>
                <TestimonialsCard
                  name={name}
                  role={role}
                  image={imgUrl || ''}
                  quote={quote}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </CustomSection>
  );
};

export default TestimonialsSection;
