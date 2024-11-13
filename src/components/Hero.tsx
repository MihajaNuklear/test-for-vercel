'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const calculateRotation = (x: number, y: number) => {
    const rotationX = (y / windowSize.height - 0.5) * 80;
    const rotationY = (x / windowSize.width - 0.5) * -80;
    return `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  };

  return (
    <section
      className="relative container mx-auto px-4 py-8 text-[#47715B] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background images */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/images/Layer_2.png"
          alt="Background Layer"
          width={600}
          height={600}
          style={{
            objectFit: 'cover',
            opacity: 0.5,
            position: 'absolute',
            left: '5%',
            top: '24%',
            transform: 'rotate(-10deg)',
          }}
        />
        <Image
          src="/images/Layer_2.png"
          alt="Background Layer"
          width={600}
          height={600}
          style={{
            objectFit: 'cover',
            opacity: 0.5,
            position: 'absolute',
            right: '-5%',
            top: '2%',
            transform: 'rotate(20deg)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center mb-8">
          <Image
            src="/images/logo_weartwice.png"
            width={150}
            height={50}
            alt="WearTwice Logo"
            className="object-contain"
          />
          <hr className="border-[#47715B] border-1 w-full ml-4" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h2
              className="font-bold text-5xl lg:text-8xl mb-4"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            >
              Sell{' '}
              <span
                className="italic font-normal text-[#8CA390]"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                easily
              </span>
            </h2>
            <p
              className="text-sm lg:text-base mb-4"
              style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 600 }}
            >
              Discover the new, simple and fast way to sell and buy your
              second-hand clothing and accessories in Dubai! Our revolutionary
              app is coming soon to the App Store and Google Play.
            </p>
          </div>

          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <Image
              src="/images/Mockup.png"
              width={1000}
              height={1000}
              alt="App Mockup"
              className="object-contain mx-auto"
              style={{
                transform: calculateRotation(mousePosition.x, mousePosition.y),
              }}
            />
          </div>

          <div className="w-full lg:w-1/3 text-right">
            <p
              className="text-sm lg:text-base mb-4"
              style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 600 }}
            >
              Clear out your wardrobe, make money, and embrace a more
              sustainable way to enjoy fashion.
            </p>
            <h2
              className="font-bold text-5xl lg:text-8xl"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            >
              Buy{' '}
              <span
                className="italic font-normal text-[#8CA390]"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                sustainably
              </span>
            </h2>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 mt-0">
          <button className="mx-2">
            <Image
              src="/images/app-store-badge.svg"
              width={180}
              height={60}
              alt="Download on the App Store"
            />
          </button>
          <button className="mx-2">
            <Image
              src="/images/google-play-badge.svg"
              width={180}
              height={60}
              alt="Get it on Google Play"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
