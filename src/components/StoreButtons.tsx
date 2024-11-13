import Image from 'next/image';
const StoreButtons = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Bouton Apple Store */}
      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
      >
        <Image
          src="/images/apple-store.svg"
          alt="Apple Store"
          width={24}
          height={24}
          className="mr-2"
        />
        <span>Download on the App Store</span>
      </a>

      {/* Bouton Google Play */}
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
      >
        <Image
          src="/images/google-play.svg" // Ton image du logo Google Play
          alt="Google Play"
          width={24}
          height={24}
          className="mr-2"
        />
        <span>Get it on Google Play</span>
      </a>
    </div>
  );
};
export default StoreButtons;
