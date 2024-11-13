import Image from 'next/image';
import NewsLetterForm from './NewsLetterForm';

const CustomNewsLetter: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row md:items-center gap-6 bg-[#FFBE98] rounded-3xl  mt-10 p-10 overflow-visible">
      <div className="md:w-1/2 z-10">
        <p className="text-5xl text-[#47715B] font-bold">
          Don&apos;t miss the chance to <br />
          be part of the fashion <br /> revolution in{' '}
          <span className="italic font-light">Dubai </span>!
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center z-10">
        <NewsLetterForm />
      </div>
      <div className="absolute bottom-0 sm:right-[10] md:right-[-12%] md:top-[4%] lg:top-[-25%] lg:right-[2%] transform">
        <Image
          src="/images/fille.png"
          alt="Fashion"
          width={320}
          height={200}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default CustomNewsLetter;
