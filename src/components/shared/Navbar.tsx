import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import categoryData from "@/data/categoryData.json";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: loginSession } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-themePrimary px-4 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* site logo  */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href={"/"} className="text-white font-bold text-lg  italic">
                <span className="text-themeSecondary">G</span>Tech
              </Link>
            </div>
          </div>
          {/* desktop nav  */}
          <div className="hidden md:block">
            <ul className="ml-4 flex space-x-4">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300 px-4 py-2 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pc-builder"
                  className="text-white hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300 px-4 py-2 rounded-md"
                >
                  PC Builder
                </Link>
              </li>
              <li>
                <div className="relative group">
                  <a className="cursor-pointer px-4 py-2 rounded-md text-white hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300">
                    Categories
                  </a>
                  <div className="absolute left-0 hidden group-hover:block z-10">
                    <ul className="mt-6 bg-white rounded-md w-40 shadow-lg">
                      {categoryData.map((category, index) => (
                        <li key={index}>
                          <Link
                            href={`/category/${category.slug}`}
                            className="block px-4 py-2 text-sm  text-themePrimary hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300"
                          >
                            {category.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              {loginSession ? (
                <li>
                  <a
                    className="px-4 py-2 font-medium text-themePrimary bg-themeSecondary ase-in duration-300 rounded-md cursor-pointer"
                    onClick={() => signOut()}
                  >
                    Logout
                  </a>
                </li>
              ) : (
                <li>
                  <Link
                    href="/login"
                    className="text-white hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300 px-4 py-2 rounded-md"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {/* mobile-nav toggle button  */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-themeSecondary focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile nav  */}
      <MobileMenu isMenuOpen={isMenuOpen} />
    </nav>
  );
};

export default Navbar;
