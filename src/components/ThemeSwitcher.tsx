'use client';
import React, { useContext } from 'react';
import { Context } from '@/lib/ThemeContext';
import IconMoon from './icons/IconMoon';
import IconSun from './icons/IconSun';

const ThemeSwitcher: React.FC = () => {
  const themeContext = useContext(Context);

  if (!themeContext) {
    throw new Error('ThemeSwitcher must be used within a ThemeProvider');
  }

  const { isDarkTheme, setIsDarkTheme } = themeContext;

  return (
    <button
      onClick={() => setIsDarkTheme(!isDarkTheme)}
      className={`relative flex items-center p-1 rounded-full transition-colors duration-300 ${
        isDarkTheme ? 'bg-gray-700' : 'bg-blue-600'
      } w-20 h-10`}
    >
      {isDarkTheme ? (
        <span
          className={`absolute right-2 text-white text-sm font-bold transition-all duration-300`}
        >
          Dark
        </span>
      ) : (
        <span
          className={`absolute left-2 text-white text-sm font-bold transition-all duration-300`}
        >
          Light
        </span>
      )}

      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-transform transform ${
          isDarkTheme ? 'translate-x-0 bg-blue-600' : 'translate-x-10 bg-white'
        }`}
      >
        {isDarkTheme ? (
          <IconMoon className="text-white" />
        ) : (
          <IconSun className="text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitcher;
