'use client';
import { formatDate, getStrapiMedia } from '@/utils/utils.helpers';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { CustomSection } from '../CustomSection';
import React from 'react';

interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    authorsBio?: {
      data: {
        attributes: {
          name: string;
          avatar: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      };
    };
    blocks: Block[];
    category: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    publishedAt: string;
  };
}

interface Block {
  __component: string;
  body?: string;
  url?: string;
}

const renderBlock = (block: Block, index: number) => {
  switch (block.__component) {
    case 'shared.rich-text':
      const paragraphs = (block.body || '').split(/\n\n/);

      return (
        <div
          key={index}
          className="flex flex-col justify-center gap-6 mb-6 rich-text-content "
        >
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="mb-4">
              {paragraph.split('\n').map((line, j) => (
                <span key={j}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          ))}
        </div>
      );
    case 'shared.video-embed':
      const embedUrl = block.url ? block.url.replace('watch?v=', 'embed/') : '';
      return (
        <div
          key={index}
          className="video-embed-content w-full h-[200px] md:h-[307px] lg:h-[400px] rounded-[40px] overflow-hidden"
        >
          <iframe
            src={embedUrl}
            title="Video Embed"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      );
    default:
      return null;
  }
};

export default function RealisationDetails({ data }: { data: Article }) {
  const { theme } = useTheme();
  const { title, description, publishedAt, cover, blocks } = data.attributes;

  const imageUrl = getStrapiMedia(cover.data?.attributes.url);
  console.log(data);

  return (
    <div>
      <CustomSection>
        <article>
          <div className="flex items-center justify-between text-[20px] md:text-[30px] lg:text-[64px] relative   mb-12">
            <Link href={'/realisation'}>
              <div
                id="arrow"
                className="flex flex-row justify-center items-center  w-[149px] h-[45px] gap-3 border-2  rounded-[10px]"
                style={{ borderColor: 'rgb(0, 122, 255)' }}
              >
                <Image
                  src={`/images/Arrow-left.png`}
                  alt="Retour"
                  width={500}
                  height={380}
                  className="w-[30px] h-[16px]"
                />
                <span className="hidden md:block text-[20px] ">Retour</span>
              </div>
            </Link>
            <h1
              id="title"
              className={`text-3xl md:text-[64px] font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} text-center flex-1`}
            >
              Réalisation
            </h1>
          </div>

          <div
            id="container-dev-web"
            className="flex flex-col-reverse lg:flex-row justify-between items-start w-full h-auto md:h-[60%] gap-10 md:gap-28 relative"
          >
            <div
              id="left-blog-details"
              className="flex justify-center aspect-square items-center w-full lg:w-1/2 xl:w-1/2 relative"
            >
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt="article cover image"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-[40px]"
                />
              )}
            </div>
            <div
              id="right-blog-details"
              className="flex flex-col justify-center w-full lg:w-1/2 xl:w-1/2 gap-[20px] mb-6 md:mb-0"
            >
              <h2 className="font-bold text-[20px] md:text-[30px] lg:text-[35px]">
                {title}
              </h2>
              <div
                id="bottom-title"
                className="flex flex-row justify-between items-center"
              >
                <span className="opacity-50">{formatDate(publishedAt)}</span>
                <div className="flex justify-center items-center min-w-[107px] px-4 py-2 rounded-[30px] border text-[14px] md:text-[16px] lg:text-[18px] border-blue-500 h-[45px] ">
                  {data.attributes.category.data.attributes.name}
                </div>
              </div>

              <span
                id="mini-text-service-dev-web"
                className="text-justify mt-[15px]"
              >
                {description}
              </span>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full h-auto relative mt-16  ">
            <div
              id="mini-text-2-service-dev-web"
              className="text-justify text-sm md:text-base lg:text-lg flex-grow"
            >
              {blocks.map((block, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col  w-full  ">
                    {renderBlock(block, index)}
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="flex-grow hidden lg:block"></div>
          </div>
        </article>
      </CustomSection>
    </div>
  );
}
