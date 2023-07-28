import React, { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <h2>Navbar</h2>
      <main className="min-h-screen">{children}</main>
      <h2>Footer</h2>
    </>
  );
};

export default RootLayout;
