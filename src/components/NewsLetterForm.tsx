'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { customCreateSubscriber } from '@/actions/customSubscriber';

const NewsLetterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { name, email } = formData;

    if (!name || !email) {
      setErrorMessage('Name and email are required.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await customCreateSubscriber({ email, name });
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full">
      <h3 className="md:text-3xl lg:text-4xl font-bold mb-2 text-[#47715b]">
        Subscribe Now
      </h3>
      <input
        id="name"
        name="name"
        type="text"
        required
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleInputChange}
        className="min-w-0 flex-auto p-3 rounded-full border bg-white/20 px-3.5 py-2 text-[#47715B] shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-[#47715B]/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-full"
      />
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleInputChange}
        className="min-w-0 flex-auto p-3 rounded-full border bg-white/20 px-3.5 py-2 text-[#47715B] shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-[#47715B]/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
      />

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}

      <button
        type="submit"
        className="flex-none rounded-full bg-white px-3.5 py-2.5 text-lg font-bold text-[#47715b] shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        disabled={loading || !formData.name || !formData.email}
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
};
export default NewsLetterForm;
