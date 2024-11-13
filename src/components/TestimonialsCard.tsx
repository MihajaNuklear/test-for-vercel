import { FC } from 'react';
import Image from 'next/image';

import { Testimonial } from '@/types/Testimonial';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
const TestimonialsCard: FC<Testimonial> = ({ name, role, image, quote }) => {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        'bg-opacity-40 text-white rounded-2xl p-6 shadow-md',
        theme === 'dark' ? 'bg-accent-950' : 'bg-neutral-800',
      )}
    >
      <div className="text-yellow-400 text-5xl mb-4 font-extrabold">“</div>
      <p className={`text-sm mb-6`}>{quote}</p>
      <div className="flex items-center">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-4">
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-200">{role}</p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialsCard;
