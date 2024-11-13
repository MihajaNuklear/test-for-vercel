'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const CursorFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const controls = useAnimation();
  const { theme } = useTheme();
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    controls.start(isMoving ? 'moving' : 'idle');
  }, [isMoving, controls]);

  const variants = {
    idle: {
      x: [0, 20, -20, 0],
      y: [0, -20, 20, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },

    moving: {
      scale: 1,
      rotate: 0,
    },
  };
  return (
    <motion.div
      className="hidden lg:block fixed pointer-events-none z-10"
      animate={controls}
      variants={variants}
      style={{
        top: mousePosition.y - 250,
        left: mousePosition.x - 250,
        width: '500px',
        height: '500px',
      }}
    >
      <motion.div
        className={cn(
          'w-full h-full rounded-full blur-3xl bg-opacity-30',
          theme === 'dark' ? 'bg-primary-500' : 'bg-accent-700',
        )}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </motion.div>
  );
};

export default CursorFollower;
