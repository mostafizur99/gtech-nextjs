import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import categoryData from "@/data/categoryData.json";

interface MobileMenuProps {
  isMenuOpen: boolean;
}

const MobileMenu = ({ isMenuOpen }: MobileMenuProps) => {
  const { data: loginSession } = useSession();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
      <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <li>
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-white hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/pc-builder"
            className="block px-3 py-2 rounded-md text-white hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300"
          >
            PC Builder
          </Link>
        </li>
        <li>
          <div className="relative">
            <a
              onClick={toggleDropdown}
              className="block px-3 py-2 rounded-md text-white hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300"
            >
              Categories {" >"}
            </a>
            <ul
              className={`mt-2 bg-white rounded-md shadow-lg z-10 ${
                dropdownOpen ? "block" : "hidden"
              } `}
            >
              {categoryData.map((category, index) => (
                <li key={index}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="block px-4 py-2   text-themePrimary hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        {loginSession ? (
          <li>
            <a
              className="block text-center px-3 py-2 font-medium text-themePrimary bg-themeSecondary ase-in duration-300 rounded-md cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </a>
          </li>
        ) : (
          <li>
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-white hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MobileMenu;
