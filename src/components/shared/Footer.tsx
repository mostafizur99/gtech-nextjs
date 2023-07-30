import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const FullYear = new Date().getFullYear();

  return (
    <footer className=" bg-themePrimary">
      <div className="container mx-auto px-5 md:px-0">
        <div className="md:grid gap-8 grid-cols-1 md:grid-cols-2 py-10 md:py-16">
          {/* site logo  */}
          <div className="flex items-center justify-center md:justify-center mb-8 md:mb-0">
            <Link href={"/"} className="text-white font-bold text-lg  italic">
              <span className="text-themeSecondary">G</span>Tech
            </Link>
          </div>
          {/* social link  */}
          <div className="">
            <ul className="text-themeSecondary flex justify-center md:justify-start gap-10">
              <li>
                <Link href="/">
                  <p className="bg-themeSecondary/10 p-2 rounded hover:bg-themeSecondary/20 ase-in duration-300">
                    <FaFacebookF />
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="bg-themeSecondary/10 p-2 rounded hover:bg-themeSecondary/20 ase-in duration-300">
                    <FaTwitter />
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="bg-themeSecondary/10 p-2 rounded hover:bg-themeSecondary/20 ase-in duration-300">
                    <FaYoutube />
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="bg-themeSecondary/10 p-2 rounded hover:bg-themeSecondary/20 ase-in duration-300">
                    <FaLinkedinIn />
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="flex justify-center py-5"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
        >
          <p className="text-xs text-white">
            © {FullYear} gTech | All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
