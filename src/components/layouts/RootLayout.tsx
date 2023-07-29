import React, { ReactNode } from "react";
import Navbar from "../shared/Navbar";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <h2>Footer</h2>
    </>
  );
};

export default RootLayout;
