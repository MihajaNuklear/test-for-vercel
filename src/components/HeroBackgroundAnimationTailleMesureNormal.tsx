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

  const animateCubeInLeftLarge = () => {
    if (cubeRefInLeftLarge.current) {
      gsap.fromTo(
        cubeRefInLeftLarge.current,
        { x: 0, y: 0, rotation: 0 },
        {
          x: -100,
          y: -100,
          rotation: -120,
          duration: 2,
          repeat: -1,
          yoyo: true,
          repeatDelay: 2,
          ease: 'power1.inOut',
        },
      );
    }
  };

  const animateCubeInLeftMedium = () => {
    if (cubeRefInLeftMedium.current) {
      gsap.fromTo(
        cubeRefInLeftMedium.current,
        { x: 0, y: 0, rotation: 0, scale: 1 },
        {
          x: -100,
          y: -100,
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
  };

  const animateCubeInLeftSmall = () => {
    if (cubeRefInLeftSmall.current) {
      gsap.fromTo(
        cubeRefInLeftSmall.current,
        { x: 0, y: 0, rotation: 0 },
        {
          x: 50,
          y: 200,
          duration: 2,
          repeat: -1,
          yoyo: true,
          repeatDelay: 2,
          ease: 'power1.inOut',
        },
      );
    }
  };

  const animateCubeInRightLarge = () => {
    if (cubeRefInRightLarge.current) {
      gsap.fromTo(
        cubeRefInRightLarge.current,
        { x: 0, y: 0, rotation: 0 },
        {
          x: -50,
          y: 60,
          duration: 2,
          repeat: -1,
          yoyo: true,
          repeatDelay: 2,
          ease: 'power1.inOut',
        },
      );
    }
  };

  const animateCubeInRightMedium = () => {
    if (cubeRefInRightMedium.current) {
      gsap.fromTo(
        cubeRefInRightMedium.current,
        { x: 0, y: 0, rotation: 0 },
        {
          x: -50,
          y: -150,
          rotation: 10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          repeatDelay: 2,
          ease: 'power1.inOut',
        },
      );
    }
  };
  const animateCubeInRightSmall = () => {
    if (cubeRefInRightSmall.current) {
      gsap.fromTo(
        cubeRefInRightSmall.current,
        { x: 0, y: 0, rotation: 0 },
        {
          x: -15,
          y: 60,
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

  useEffect(() => {
    //animateCubeInRightSmall();
    //animateCubeInRightMedium();
    //animateCubeInRightLarge();
    animateCubeInLeftLarge();
    animateCubeInLeftMedium();
    animateCubeInLeftSmall();
  }, []);

  return (
    <>
      {/* Right section */}
      <div
        className="absolute w-[111.21px] h-[126.78px]"
        ref={cubeRefInRightSmall}
        style={{
          position: 'absolute',
          right: '14%',
          top: '32%',
          backgroundImage: "url('/images/cube-in-right-small.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 2,
        }}
      />
      <div
        className="absolute w-[188.46px] h-[224px]"
        ref={cubeRefInRightMedium}
        style={{
          position: 'absolute',
          right: '7%',
          top: '41%',
          backgroundImage: "url('/images/cube-in-right-medium.png')",
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
          top: '21%',
          backgroundImage: "url('/images/cube-in-right-large.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: -0.5,
        }}
      />
      {/* Left section */}
      <div
        className="absolute w-[474.91px] h-[529.97px]"
        ref={cubeRefInLeftLarge}
        style={{
          position: 'absolute',
          left: '5%',
          top: '22%',
          backgroundImage: "url('/images/cube-in-left-large.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(-20deg)',
          zIndex: 2,
        }}
      />
      <div
        className="absolute w-[428.73px] h-[410.85px]"
        ref={cubeRefInLeftMedium}
        style={{
          position: 'absolute',
          left: '17%',
          top: '29%',
          backgroundImage: "url('/images/cube-in-left-medium.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />

      <div
        className="absolute w-[428.73px] h-[410.85px]"
        ref={cubeRefInLeftSmall}
        style={{
          position: 'absolute',
          left: '21%',
          top: '9%',
          backgroundImage: "url('/images/cube-in-left-small.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />
    </>
  );
};

export default HeroBackgroundAnimation;
