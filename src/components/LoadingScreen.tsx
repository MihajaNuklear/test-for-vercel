import { GridLoader } from 'react-spinners';
import { useTheme } from 'next-themes';

export const LoadingScreen = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`h-screen w-screen min-h-screen flex justify-center items-center ${
        theme === 'dark' ? 'bg-[#070b14]' : 'bg-white '
      }`}
    >
      <div className="text-center">
        <GridLoader size={30} color={'#1c3a5e'} />
        <p className="mt-4 text-lg font-semibold text-gray-700">
          Chargement...
        </p>
      </div>
    </div>
  );
};
