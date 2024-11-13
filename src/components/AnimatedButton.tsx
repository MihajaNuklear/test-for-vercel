import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';
export default function AnimatedButton() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;
      setMousePos({ x: x / (innerWidth / 2), y: y / (innerHeight / 2) });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`trailing_border relative border-2 border-accent-700 px-10 md:px-20 w-fit rounded-2xl my-0  py-4 trailing-border ${theme === 'dark' ? 'bg-[#070917]' : 'bg-white'}`}
    >
      {theme === 'dark' ? (
        <Image
          src="/images/custom/strapi_next.png"
          width={500}
          height={500}
          alt=""
          loading="eager"
          className={'max-w-none w-56 lg:w-[400px]'}
        />
      ) : (
        <Image
          src="/images/custom/light_strapi_next.png"
          width={500}
          height={500}
          alt=""
          loading="eager"
          className={'max-w-none w-56 lg:w-[400px]'}
        />
      )}

      <motion.div
        className={
          'blur-md bg-accent-500 absolute top-0 left-0 h-full w-full border-2 border-accent-700 rounded-2xl'
        }
        animate={{
          x: mousePos.x * 20, // Limits movement to 10px in both directions
          y: mousePos.y * 15,
          transition: { duration: 0.1, ease: 'easeOut' }, // Smooth follow
        }}
        style={{ zIndex: -1 }}
      />
    </div>
  );
}
