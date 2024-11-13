'use client';

import { useTheme } from 'next-themes';
import IconMoon from '../icons/IconMoon';
import IconSun from '../icons/IconSun';

import { useState, useEffect } from 'react';
import AppThemeProvider from '@/context/theme';

function TabThemeSwitch() {
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <div className="toggle-button  z-[10000000000]">
      <button
        onClick={toggleTheme}
        className={`relative flex items-center p-1 rounded-full transition-colors duration-300 ${
          currentTheme === 'dark' ? 'bg-gray-700' : 'bg-blue-600'
        } w-20 h-10`}
      >
        {currentTheme === 'dark' ? (
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
            currentTheme === 'dark'
              ? 'translate-x-0 bg-blue-600'
              : 'translate-x-10 bg-white'
          }`}
        >
          {currentTheme === 'dark' ? (
            <IconMoon className="text-white" />
          ) : (
            <IconSun className="text-yellow-500" />
          )}
        </div>
      </button>
    </div>
  );
}

function ThemeTabsSwitch() {
  return (
    <AppThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TabThemeSwitch />
    </AppThemeProvider>
  );
}

export default ThemeTabsSwitch;
