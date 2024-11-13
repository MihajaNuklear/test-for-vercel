import React, { ReactNode } from 'react';
import type { Metadata } from 'next';

interface LayoutProps {
  children: ReactNode;
}
export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Page not found',
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
