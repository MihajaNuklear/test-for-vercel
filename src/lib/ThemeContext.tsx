'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
interface ThemeContextType {
  isDarkTheme: boolean;
  setIsDarkTheme: (isDarkTheme: boolean) => void;
}

export const Context = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  return (
    <Context.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </Context.Provider>
  );
};
