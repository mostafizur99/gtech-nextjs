import React, { useState } from "react";
import categoryData from "@/data/categoryData.json";

interface MobileMenuProps {
  isMenuOpen: boolean;
}

const MobileMenu = ({ isMenuOpen }: MobileMenuProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
      <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <li>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-white hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300"
          >
            Home
          </a>
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
                  <a
                    href="#"
                    className="block px-4 py-2   text-themePrimary hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300"
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
