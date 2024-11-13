'use client';

import { useTheme } from 'next-themes';

import IconMoon from './icons/IconMoon';
import IconSun from './icons/IconSun';
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
    <div className="toggle-button fixed right-5 top-[18%] z-[10000000000]">
      {' '}
      {/* Positionné en haut à droite */}
      <button
        onClick={toggleTheme}
        type="button"
        className="flex size-8 items-center justify-center rounded-md border border-paragraph/25 text-paragraph focus:outline-none focus:ring-0 focus:ring-gray-200 dark:border-borderColor-dark dark:text-white"
      >
        {currentTheme === 'dark' ? <IconMoon /> : <IconSun />}
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
