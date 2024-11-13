'use client';
import React, { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroBackgroundAnimation: FC = () => {
  const cubeRefInLeftSmall = useRef(null);
  const cubeRefInLeftMedium = useRef(null);
  const cubeRefInLeftLarge = useRef(null);

  const cubeRefInRightSmall = useRef(null);
  const cubeRefInRightMedium = useRef(null);
  const cubeRefInRightLarge = useRef(null);

  const isDesktop = () => window.innerWidth >= 768; // Define a breakpoint for desktop

  useEffect(() => {
    const animateLeftCubes = () => {
      if (cubeRefInLeftLarge.current) {
        gsap.fromTo(
          cubeRefInLeftLarge.current,
          { x: 0, y: 0, rotation: 0 },
          {
            x: -60,
            y: -60,
            rotation: -50,
            duration: 3,
            repeat: -1,
            yoyo: true,
            repeatDelay: 4,
            ease: 'power1.inOut',
          },
        );
      }

      if (cubeRefInLeftMedium.current) {
        gsap.fromTo(
          cubeRefInLeftMedium.current,
          { x: 0, y: 0, rotation: 0, scale: 1 },
          {
            x: -110,
            y: -110,
            rotation: -20,
            scale: 1.3,
            duration: 2,
            repeat: -1,
            yoyo: true,
            repeatDelay: 2,
            ease: 'power1.inOut',
          },
        );
      }

      if (cubeRefInLeftSmall.current) {
        gsap.fromTo(
          cubeRefInLeftSmall.current,
          { x: 0, y: 0, rotation: 0 },
          {
            x: 30,
            y: 210,
            duration: 2,
            repeat: -1,
            yoyo: true,
            repeatDelay: 2,
            ease: 'power1.inOut',
          },
        );
      }
    };

    const animateRightCubes = () => {
      if (!isDesktop()) return; // Skip animation on mobile

      const timeline = gsap.timeline({ delay: 1 }); // Add delay to the entire timeline
      if (cubeRefInRightLarge.current) {
        timeline.fromTo(
          cubeRefInRightLarge.current,
          { x: 0, y: 0, rotation: 0 },
          {
            x: -60,
            y: 70,
            duration: 2,
            repeat: -1,
            yoyo: true,
            repeatDelay: 2,
            ease: 'power1.inOut',
          },
        );
      }
      if (cubeRefInRightMedium.current) {
        timeline.fromTo(
          cubeRefInRightMedium.current,
          { x: 0, y: 0, rotation: 0 },
          {
            x: -60,
            y: -160,
            rotation: 10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            repeatDelay: 2,
            ease: 'power1.inOut',
          },
        );
      }
      if (cubeRefInRightSmall.current) {
        timeline.fromTo(
          cubeRefInRightSmall.current,
          { x: 0, y: 0, rotation: 0 },
          {
            x: -25,
            y: 70,
            rotation: -35,
            duration: 2,
            repeat: -1,
            yoyo: true,
            repeatDelay: 2,
            ease: 'power1.inOut',
          },
        );
      }
    };

    animateLeftCubes();
    animateRightCubes();
  }, []);

  return (
    <>
      {/* Right section */}
      <div
        className="absolute w-[211.21px] h-[226.78px]"
        ref={cubeRefInRightSmall}
        style={{
          position: 'absolute',
          right: '16%',
          top: '28%',
          backgroundImage: "url('/images/svg_box/cube_1.svg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />
      <div
        className="absolute w-[288.46px] h-[324px]"
        ref={cubeRefInRightMedium}
        style={{
          position: 'absolute',
          right: '4%',
          top: '37%',
          backgroundImage: "url('/images/svg_box/cube_2.svg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />
      <div
        className="absolute w-[574.82px] h-[599.83px]"
        ref={cubeRefInRightLarge}
        style={{
          position: 'absolute',
          right: '1%',
          top: '17%',
          backgroundImage: "url('/images/svg_box/bg_cube_1.svg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />
      {/* Left section */}
      <div
        className="hidden md:block absolute w-[474.91px] h-[529.97px]"
        ref={cubeRefInLeftLarge}
        style={{
          position: 'absolute',
          left: '3%',
          top: '18%',
          backgroundImage: "url('/images/svg_box/cube_3.svg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(-20deg)',
          zIndex: 1,
        }}
      />
      <div
        className="hidden md:block absolute w-[428.73px] h-[410.85px]"
        ref={cubeRefInLeftMedium}
        style={{
          position: 'absolute',
          left: '15%',
          top: '25%',
          backgroundImage: "url('/images/svg_box/bg_cube_2.svg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />
      <div
        className="hidden md:block absolute w-[428.73px] h-[410.85px]"
        ref={cubeRefInLeftSmall}
        style={{
          position: 'absolute',
          left: '16%',
          top: '5%',
          backgroundImage: "url('/images/svg_box/bg_cube_3.svg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />
    </>
  );
};

export default HeroBackgroundAnimation;