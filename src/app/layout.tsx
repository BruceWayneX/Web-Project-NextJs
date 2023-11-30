import React, { ReactNode } from 'react';
import Navigation from '../../components/navigation';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://bootswatch.com/5/quartz/bootstrap.min.css" />
        </head>
        <body>
          <Navigation />
          <div className="container p-4">
            {children}
          </div>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
