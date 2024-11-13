'use client';
import React, { FC, FormEvent, useEffect, useState } from 'react';
import Loader from './Loader';
import { createSubscriber } from '@/actions/createSubscriber';
import Link from 'next/link';
import AlertSuccess from '../common/Alerts/AlertSuccess';
import AlertError from '../common/Alerts/AlertError';
import Image from 'next/image';

type NewsletterProps = {
  data: {
    title: string;
    description: string;
    policyLink: string;
  };
};

interface SubscriberForm {
  name: string;
  surname: string;
  email: string;
}

const Newsletter: FC<NewsletterProps> = ({ data }) => {
  const [formData, setFormData] = useState<SubscriberForm>({
    name: '',
    surname: '',
    email: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { description, policyLink, title } = data;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { name, surname, email } = formData;

    if (!name || !surname) {
      setErrorMessage('Name and surname are required.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await createSubscriber({ email, name, surname });
      if (response.data) {
        setSuccessMessage('Subscription successful!');
        setFormData({ name: '', surname: '', email: '' });
      } else if (response.error === 'This attribute must be unique') {
        throw new Error('This email is already subscribed.');
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An error occurred during subscription.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (errorMessage || successMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
        setSuccessMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage, successMessage]);

  if (!data) {
    return <Loader />;
  }

  return (
    <section className="bg-[#272727] py-16 sm:py-24 lg:py-20 shadow-lg relative overflow-hidden">
      {successMessage && <AlertSuccess message={successMessage} />}
      {errorMessage && <AlertError message={errorMessage} />}

      {/* <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">{title}</h2>

                <div className="flex justify-center">
                    <div className="bg-white/10 p-4 rounded-lg shadow-md max-w-sm w-full">
                        <h3 className="text-lg font-semibold text-white mb-4 text-center">Subscribe Now</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-y-4">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/20 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                />
                                <input
                                    id="surname"
                                    name="surname"
                                    type="text"
                                    required
                                    placeholder="Enter your surname"
                                    value={formData.surname}
                                    onChange={handleInputChange}
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/20 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/20 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#47715b] shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    disabled={loading || !formData.name || !formData.surname || !formData.email}
                                >
                                    {loading ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </div>
                            {policyLink && (
                                <div className="mt-4 text-sm leading-6 text-gray-300 text-center">
                                    We care about your data. Read our{' '}
                                    <Link href={policyLink} className="font-semibold text-white hover:text-indigo-50">
                                        privacy&nbsp;policy.
                                    </Link>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div> */}

      <div className="bg-gray-900 text-white p-8 rounded-lg flex items-center justify-between">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4">
            Don&apos;t miss the chance to be part of the fashion revolution in{' '}
            <span className="italic">Dubai</span>!
          </h2>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Subscribe Now</h3>
          <input
            type="text"
            placeholder="Enter your name"
            className="mb-2 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="mb-2 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
          />
          <button className="bg-white text-gray-900 px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>
        <div className="ml-8">
          <Image
            src="/path-to-your-image.jpg"
            alt="Fashion"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
