import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface AnimationConfig {
  floating: {
    y: string; // Small floating effect
    duration: number; // Longer duration for smooth float
    yoyo: boolean; // Reverse the animation to create floating
    repeat: number; // Infinite loop
    ease: string;
  };
  toB: {
    x?: string;
    y?: string; // For vertical movement
    rotation?: number | string; // Rotation in degrees
    duration: number; // Duration of the movement to B
    ease?: string; // Easing function
    delay?: number | string;
  };
  toA: {
    x?: string;
    y?: string; // For vertical movement
    rotation?: number | string; // Rotation in degrees
    duration: number; // Duration of the return to A
    ease?: string; // Easing function
    delay?: number | string;
  };
}

interface AnimatedImageProps {
  src: string; // Image source
  animationConfig: AnimationConfig; // Animation configuration
  className?: string; // Additional class names for the image container (optional)
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  animationConfig,
  className, // Use 'className' directly
}) => {
  const animatedImageRef = useRef<HTMLImageElement | null>(null);

  const animateImage = () => {
    // Move to position B
    gsap.to(animatedImageRef.current, {
      ...animationConfig.toB,
      onComplete: () => {
        // Pause at position B
        gsap.delayedCall(3, () => {
          // Move back to position A
          gsap.to(animatedImageRef.current, {
            ...animationConfig.toA,
            onComplete: () => {
              // Pause at position A
              gsap.delayedCall(3, animateImage); // Restart the animation after the pause
            },
          });
        });
      },
    });
  };

  // Start the animation on render
  animateImage();

  return (
    <div className={`absolute ${className}`} ref={animatedImageRef}>
      <Image src={src} alt="" layout="fill" objectFit="cover" />
    </div>
  );
};

export default AnimatedImage;
