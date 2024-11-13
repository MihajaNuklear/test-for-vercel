'use client';
import React, { FC } from 'react';
import { useTheme } from 'next-themes';

type HeadingProps = {
  data: {
    heading: string;
  };
};

const Heading: FC<HeadingProps> = ({ data }) => {
  const { theme } = useTheme();
  if (!data) return null;
  const { heading } = data;
  return (
    <section className="py-8 md:py-16">
      <h1 className="text-center  text-3xl md:text-[64px] font-bold">
        {heading}
      </h1>
      <hr
        className={`border mt-16 ${
          theme === 'dark' ? `border-white` : `border-black`
        }`}
      />
    </section>
  );
};

export default Heading;
