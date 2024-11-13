import React, { ReactNode } from 'react';


interface CustomContainerProps {
  children: ReactNode;
  className?: string;
}

export const CustomSection: React.FC<CustomContainerProps> = ({
  children,
  className,
}) => {
 
  return (
    <section
      className={
        `
         py-8 md:py-16 relative prose max-w-none h-fit flex items-center justify-center ` +
        className
      }
    >
      <div className={'px-5 md:px-20 2xl:px-40 w-full relative z-10'}>
        {children}
      </div>
    </section>
  );
};
