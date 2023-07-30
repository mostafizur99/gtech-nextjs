import Link from "next/link";
import React from "react";

const SiteBanner = () => {
  return (
    <div
      className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/banner-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-opacity-75 bg-themePrimary/70 z-20"></div>
      <div className="text-center z-50">
        <h1 className="text-4xl font-bold mb-2">GTech World</h1>
        <p className="text-xl mb-8 italic text-themeSecondary font-medium">
          Get The Best with Updated Tech!
        </p>
        <Link
          href={"/pc-builder"}
          className="px-6 py-3 bg-themeSecondary text-themePrimary font-semibold rounded hover:bg-themeSecondary/90 ase-in duration-300"
        >
          Build PC
        </Link>
      </div>
    </div>
  );
};

export default SiteBanner;
