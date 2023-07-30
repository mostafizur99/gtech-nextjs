import React, { ReactNode } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
