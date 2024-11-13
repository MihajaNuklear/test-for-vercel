import { useTheme } from 'next-themes';
const Divider = () => {
  const { theme } = useTheme();
  return (
    <div className="relative">
      <div
        className={`absolute inset-y-0 left-0 border-l ${theme === 'dark' ? 'border-gray-300' : 'border-gray-700'}`}
      ></div>
    </div>
  );
};
export default Divider;
