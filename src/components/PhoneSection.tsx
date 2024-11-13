'use client';
import Image from 'next/image';
import React from 'react';
import GreenButton from '@/components/GreenButton';
import CustomNewsLetter from './CustomNewsLetter';

type Props = {};

const PhoneSection = (props: Props) => {
  return (
    <div className="container mx-auto p-10">
      <CustomNewsLetter />
      <section className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0  ">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[312.59px] h-[479px] md:w-[389px] md:h-[596px]">
            <Image
              src="/images/Group 14.png"
              width={389}
              height={596}
              alt="Group 14"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-[#47715B] p-6 md:pl-0 md:pr-[15%]">
          <h3 className="font-bold text-center text-[70px] md:text-left md:text-[90px]">
            Sellers
          </h3>
          <p className="text-justify mt-4 text-lg leading-relaxed">
            Clear out your wardrobe and make money with WEARTWICE! Sell your
            clothes and accessories quickly, with no commission. Download the
            free app, snap a photo of your item(s), set your price, and voilà –
            your listing is live. Have your items delivered within 24 hours to
            the location of your choice.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <GreenButton
              text="Get the app"
              onClick={() => console.log('Button clicked!')}
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 bg-[#F3F3F3] px-6 md:px-[10%]">
        <div className="w-full md:w-1/2 text-[#47715B] p-6 md:pl-0 md:pr-[5%] flex flex-col justify-center items-start">
          <h3 className="font-bold text-center md:text-left text-[50px] md:text-[70px] lg:text-[90px] leading-tight">
            Buyers
          </h3>
          <p className="text-justify mt-4 text-lg md:text-xl leading-relaxed">
            WEARTWICE, fashion made accessible and sustainable! Thousands of
            clothes and accessories are waiting for you. Download the app for
            free, purchase your items or negotiate with sellers, and pay
            securely through our partner: MAMO. Get your items delivered within
            24 hours to the location of your choice.
          </p>
          <div className="mt-8">
            <GreenButton
              text="Get the app"
              onClick={() => console.log('Button clicked!')}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[312.59px] h-[479px] md:w-[389px] md:h-[596px]">
            <Image
              src="/images/Group 15.png"
              width={389}
              height={596}
              alt="Group 15"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0  ">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[312.59px] h-[479px] md:w-[389px] md:h-[596px]">
            <Image
              src="/images/Group 16.png"
              width={389}
              height={596}
              alt="Group 16"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-[#47715B] p-6 md:pl-0 md:pr-[15%]">
          <h3 className="font-bold text-center text-[70px] md:text-left md:text-[90px]">
            Negotiate
          </h3>
          <p className="text-justify mt-4">
            Get the best deals with our ultra-simple and direct negotiation
            system. Make your offer, receive a counter-offer from the seller and
            quickly finalize the transaction. With Weartwice, every transaction
            is an opportunity to score great deals.
          </p>
          <GreenButton
            text="Get the app"
            onClick={() => console.log('Button clicked!')}
          />
        </div>
      </section>
    </div>
  );
};

export default PhoneSection;
