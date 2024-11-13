import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className=" py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <a href="/terms-conditions" className="mx-2 hover:underline">
              Mentions légales
            </a>
            <span className="mx-2 hidden md:inline">•</span>
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <a href="/conditions-of-use" className="mx-2 hover:underline">
              Conditions d&apos;utilisations
            </a>
            <span className="mx-2 hidden md:inline">•</span>
          </div>
          <p className="mx-2">© 2024 Weartwice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
