import { useTheme } from 'next-themes';
import React from 'react';
import CardBlog from '@/components/CardBlog';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CustomSection } from '@/components/CustomSection';

const BlogSection = () => {
  const { theme } = useTheme();

  const blogs = [
    {
      image: '/images/code-1.jpeg',
      date: '12 Octobre 2023',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Consectetur adipiscing elit.',
    },
    {
      image: '/images/code-2.jpeg',
      date: '12 Octobre 2023',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Consectetur adipiscing elit.',
    },
    {
      image: '/images/code-3.jpeg',
      date: '12 Octobre 2023',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Consectetur adipiscing elit.',
    },
    {
      image: '/images/code-2.jpeg',
      date: '12 Octobre 2023',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Consectetur adipiscing elit.',
    },
  ];
  return (
    <CustomSection>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-14 leading-tight uppercase text-center ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}
      >
        Blogs
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
        {blogs.map((blog, index) => (
          <SwiperSlide key={'swiper-slide-' + index}>
            <CardBlog
              key={index}
              image={blog.image}
              date={blog.date}
              title={blog.title}
              description={blog.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </CustomSection>
  );
};

export default BlogSection;
