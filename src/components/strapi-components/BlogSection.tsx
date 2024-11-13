'use client';
import { useTheme } from 'next-themes';
import React, { FC } from 'react';
import CardBlog from '@/components/CardBlog';
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

type BlogSectionData = {
  data: {
    title: string;
    blogs: {
      data: {
        id: number;
        attributes: {
          title: string;
          description: string;
          slug: string;
          cover: StrapiPictureType;
          category: {
            data: {
              id: number;
              attributes: {
                name: string;
                slug: string;
              };
            };
          };
          authorsBio?: {
            data: {
              attributes: {
                name: string;
                avatar: StrapiPictureType;
              };
            };
          };
          updatedAt: string;
        };
      }[];
    };
  };
};

const BlogSection: FC<BlogSectionData> = ({ data }) => {
  const { theme } = useTheme();
  if (!data) return null;
  const { title, blogs } = data;

  return (
    <CustomSection>
      <HighlightedText
        text={title}
        className={`text-3xl md:text-4xl font-bold mb-14 leading-tight uppercase text-center ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}
      />
      {blogs && blogs.data.length > 0 && (
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
          {blogs.data.map(({ attributes, id }, index) => {
            const imgUrl = getStrapiMedia(attributes.cover.data.attributes.url);
            return (
              <SwiperSlide key={'BlogSection-CardBlog-' + index + id}>
                <CardBlog
                  image={imgUrl || ''}
                  date={attributes.updatedAt}
                  title={attributes.title}
                  description={attributes.description}
                  authors={attributes.authorsBio?.data.attributes.name}
                  avatarUrl={attributes?.authorsBio?.data.attributes.avatar}
                  url={`/blog/${attributes.category.data.attributes.slug}/${attributes.slug}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </CustomSection>
  );
};

export default BlogSection;
