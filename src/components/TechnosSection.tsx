import React from 'react';
// import { useTheme } from '@/lib/ThemeContext';
import Image from 'next/image';

// interface ServiceItemProps {
//   icon: string;
//   title: string;
//   description: string;
// }

// const ServiceItem: React.FC<ServiceItemProps> = ({
//   icon,
//   title,
//   description,
// }) => {
//   const { isDarkTheme } = useTheme();
//   return (
//     <div className="relative flex-1 p-[2px] bg-gradient-to-r from-[#6E9BFD] to-[#223B5B] rounded-[18px]">
//       <div
//         className={`${isDarkTheme ? 'bg-[#0C1226]' : 'bg-white'} h-full p-10 flex flex-col gap-4 rounded-2xl`}
//       >
//         <div className="w-20 h-20">
//           <img src={icon} className="w-full h-full" alt={title} />
//         </div>
//         <p
//           className={`font-bold text-2xl ${isDarkTheme ? 'text-white' : 'text-primary-950'}`}
//         >
//           {title}
//         </p>
//         <p
//           className={`text-justify ${isDarkTheme ? 'text-zinc-500' : 'text-gray-700'}`}
//         >
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };
//
// const Divider = () => {
//   const { isDarkTheme } = useTheme();
//   return (
//     <div className="relative">
//       <div
//         className={`absolute inset-y-0 left-0 border-l ${isDarkTheme ? 'border-gray-300' : 'border-gray-300'}`}
//       ></div>
//     </div>
//   );
// };

function TechnosSection() {
  // const logos = [
  //   '/images/custom/technos/1.png',
  //   '/images/custom/technos/2.png',
  //   '/images/custom/technos/3.png',
  //   '/images/custom/technos/4.png',
  //   '/images/custom/technos/5.png',
  //   '/images/custom/technos/6.png',
  //   '/images/custom/technos/7.png',
  //   '/images/custom/technos/8.png',
  // ];

  return (
    <section className="relative mt-10 py-16 z-20 prose max-w-none flex items-center justify-center px-5">
      <Image
        src="/images/cube-in-left-medium.png"
        alt="Cube in left small rotated"
        width={750}
        height={750}
        className="absolute rotate-3 ml-52 left-0 top-0 brightness-50 z-0"
      />
      <div className="w-full flex flex-col justify-between mt-8 gap-1 md:gap-10 h-fit place-items-stretch">
        <div className="flex h-fit w-full gap-3 flex-col md:flex-row md:gap-10 xl:gap-16">
          {/*<ServiceItem {...services[0]} />*/}
          {/*<Divider />*/}
          {/*<ServiceItem {...services[1]} />*/}
        </div>
        <div className="hidden md:block border-t h-1 border-gray-300"></div>
        <div className="flex mt-5 md:mt-0 h-fit w-full gap-3 flex-col md:gap-10 md:flex-row xl:gap-16">
          {/*<ServiceItem {...services[2]} />*/}
          {/*<Divider />*/}
          {/*<ServiceItem {...services[3]} />*/}
        </div>
      </div>
    </section>
  );
}

export default TechnosSection;
