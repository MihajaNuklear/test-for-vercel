'use client';

import { ThemeProvider } from '@/lib/ThemeContext';
import React from 'react';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <main className="min-h-screen relative w-full"> {children}</main>
    </ThemeProvider>
  );
};

export default ClientLayout;
