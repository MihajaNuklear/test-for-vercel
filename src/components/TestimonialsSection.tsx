'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import TestimonialsCard from '@/components/TestimonialsCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';
import { CustomSection } from '@/components/CustomSection';
import Image from 'next/image';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Nicolas San-Alexandre',
      role: 'Consultant Society',
      image: '/images/author.png',
      quote:
        'Praesent placerat felis a felis maximus semper. Aliquam lobortis eu justo ut venenatis.',
    },
    {
      name: 'Nicolas San-Alexandre',
      role: 'Consultant Society',
      image: '/images/author.png',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec eros est.',
    },
    {
      name: 'Nicolas San-Alexandre',
      role: 'Consultant Society',
      image: '/images/author.png',
      quote:
        'Praesent placerat felis a felis maximus semper. Aliquam lobortis eu justo ut venenatis.',
    },
    {
      name: 'Nicolas San-Alexandre',
      role: 'Consultant Society',
      image: '/images/author.png',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec eros est.',
    },
    // Ajoutez d'autres témoignages ici
  ];

  return (
    <CustomSection>
      <>
        <Image
          src="/images/cube-in-left-medium.png"
          alt="Cube in left medium"
          width={750}
          height={750}
          className="absolute -ml-20 left-0 rotate-180 z-0"
        />
        <Image
          src="/images/cube-in-left-small.png"
          alt="Cube in left small rotated"
          width={750}
          height={750}
          className="absolute -top-1/2 rotate-180 scale-110 right-24 z-0"
        />
        <Image
          src="/images/cube-in-left-small.png"
          alt="Cube in left small rotated and scaled"
          width={750}
          height={750}
          className="absolute top-20 rotate-45 scale-150 -right-96 z-0"
        />
      </>
      <div className={'z-10 relative'}>
        <h2
          className={`text-3xl md:text-4xl font-bold mb-14 leading-tight uppercase text-center`}
        >
          Témoignages
        </h2>
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={'testimonials-card-' + index}>
              <TestimonialsCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </CustomSection>
  );
};

export default TestimonialsSection;
