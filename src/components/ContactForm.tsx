'use client';
import React from 'react';

import FooterSection from './FooterSection';
const ContactForm = () => {
  return (
    <section className="min-h-screen flex flex-col justify-between py-20 px-6">
      <div className="w-full max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-[64px] font-bold mb-12">
          Nous contacter
        </h1>
        <p className="text-lg mb-10">
          Une question ou une demande ? Écrivez-nous via le formulaire, <br />
          nous vous répondrons rapidement.
        </p>
        <form className="size-full max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="flex flex-col space-y-8">
            <input
              type="text"
              placeholder="Nom"
              className="bg-transparent border border-gray-600 rounded-lg py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-gray-600 rounded-lg py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            placeholder="Message"
            className="bg-transparent border border-gray-600 rounded-lg py-4 px-6 h-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </form>
        <button className="border border-blue-500 font-semibold py-4 px-8 rounded-lg flex items-center justify-center mx-auto">
          Nous contacter
          <span className="ml-2 inline-block">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="my-10">
        <hr className="w-48 mx-auto bg-white-100 border rounded md:my-10" />
      </div>
      <FooterSection />
    </section>
  );
};

export default ContactForm;
