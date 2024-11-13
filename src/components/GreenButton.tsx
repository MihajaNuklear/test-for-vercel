import React, { FC } from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const GreenButton: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center px-4 py-2 bg-white text-[#47715B] my-5 rounded transition duration-300 ease-in-out transform hover:bg-[#47715B] hover:scale-105 hover:text-white"
    >
      <span className="mr-2">{text}</span>
      <svg
        className="w-4 h-4 transition-transform duration-300 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <style jsx>{`
        button:hover svg {
          transform: translateX(5px);
        }
      `}</style>
    </button>
  );
};

export default GreenButton;
