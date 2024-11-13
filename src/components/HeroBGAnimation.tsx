import { motion } from 'framer-motion';
import React from 'react';
import AnimatedImage from '@/components/AnimatedImage';

const HeroBgAnimation = React.memo(() => {
  return (
    <div className={'w-full h-full overflow-hidden absolute top-0 left-0 z-0'}>
      <div className={'relative w-full h-full'}>
        {/* Blurred background */}
        <AnimatedImage
          src="/images/custom/hero_bg/1.png"
          className={'absolute top-1/2 transform -translate-y-1/2'}
          animationConfig={{
            floating: {
              y: '+=10',
              duration: 4,
              yoyo: true,
              repeat: -1,
              ease: 'power1.inOut',
            },
            toB: {
              y: '+=150',
              rotation: 45,
              duration: 2.5,
              delay: 0, // No delay for the first one
              ease: 'power1.inOut',
            },
            toA: {
              y: '-=150',
              rotation: 0,
              duration: 2.5,
              delay: 0,
              ease: 'power1.inOut',
            },
          }}
        />
        <AnimatedImage
          src="/images/custom/hero_bg/2.png"
          className={
            'left-[250px] absolute top-1/2 transform -translate-y-[450px]'
          }
          animationConfig={{
            floating: {
              y: '+=10',
              duration: 4,
              yoyo: true,
              repeat: -1,
              ease: 'power1.inOut',
            },
            toB: {
              y: '-=150',
              rotation: 45,
              duration: 2.5,
              delay: 0.5, // 0.5s delay for the second image
              ease: 'power1.inOut',
            },
            toA: {
              y: '+=150',
              rotation: 0,
              duration: 2.5,
              delay: 0.5,
              ease: 'power1.inOut',
            },
          }}
        />
        <AnimatedImage
          src="/images/custom/hero_bg/3.png"
          className={
            'scale-125 hidden sm:block -right-24 absolute top-1/3 transform -translate-y-1/2'
          }
          animationConfig={{
            floating: {
              y: '+=10',
              duration: 4,
              yoyo: true,
              repeat: -1,
              ease: 'power1.inOut',
            },
            toB: {
              y: '-=150',
              rotation: 45,
              duration: 2.5,
              delay: 1, // 1s delay for the third image
              ease: 'power1.inOut',
            },
            toA: {
              y: '+=150',
              rotation: 0,
              duration: 2.5,
              delay: 1,
              ease: 'power1.inOut',
            },
          }}
        />
        <AnimatedImage
          src="/images/custom/hero_bg/4.png"
          className={
            'left-[25px] scale-[0.6] absolute top-1/2 transform -translate-y-1/2'
          }
          animationConfig={{
            floating: {
              y: '+=10',
              duration: 4,
              yoyo: true,
              repeat: -1,
              ease: 'power1.inOut',
            },
            toB: {
              x: '+=120',
              y: '+=25',
              rotation: '+=100',
              duration: 2.5,
              delay: 1.5, // 1.5s delay for the fourth image
              ease: 'power1.inOut',
            },
            toA: {
              x: '-=120',
              y: '-=25',
              rotation: '-=100',
              duration: 2.5,
              delay: 1.5,
              ease: 'power1.inOut',
            },
          }}
        />
        <AnimatedImage
          src="/images/custom/hero_bg/5.png"
          className={
            'hidden sm:block right-[250px] absolute top-1/2 transform -translate-y-[300px]'
          }
          animationConfig={{
            floating: {
              y: '+=10',
              duration: 4,
              yoyo: true,
              repeat: -1,
              ease: 'power1.inOut',
            },
            toB: {
              y: '+=50',
              rotation: 45,
              duration: 2.5,
              delay: 2, // 2s delay for the fifth image
              ease: 'power1.inOut',
            },
            toA: {
              y: '-=50',
              rotation: 0,
              duration: 2.5,
              delay: 2,
              ease: 'power1.inOut',
            },
          }}
        />
        <AnimatedImage
          src="/images/custom/hero_bg/6.png"
          className={
            'hidden sm:block right-[150px] rotate-45 absolute top-1/2 transform -translate-y-1/2'
          }
          animationConfig={{
            floating: {
              y: '+=20',
              duration: 4,
              yoyo: true,
              repeat: -1,
              ease: 'power1.inOut',
            },
            toB: {
              y: '-=50',
              rotation: 45,
              duration: 2.5,
              delay: 2.5, // 2.5s delay for the sixth image
              ease: 'power1.inOut',
            },
            toA: {
              y: '+=50',
              rotation: 0,
              duration: 2.5,
              delay: 2.5,
              ease: 'power1.inOut',
            },
          }}
        />
      </div>
    </div>
  );
});

export default HeroBgAnimation;
