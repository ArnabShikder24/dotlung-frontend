"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/svgs/logo.svg";
import Link from "next/link";
import { PathNames } from "../routes/index.route";

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: "ABOUT", path: PathNames.about },
    { title: "WORK WITH DOT", path: PathNames.workWithDot },
    { title: "LEARN WITH DOT", path: PathNames.learnWithDot },
    { title: "TRAVEL & EAT WITH DOT", path: PathNames.travelEat },
    { title: "BLOG", path: PathNames.blog },
    { title: "CONTACT", path: PathNames.contact },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full p-4 font-gilroy mt-2 hidden md:flex justify-between items-center z-50">
        <Link href={PathNames.home} className="fixed">
          <Image src={Logo} alt="Logo" width={50} />
        </Link>
        <div className="max-w-3xl flex-1 mx-auto justify-center text-xs">
          <div className="">
            <div className="border border-white flex w-full">
              <Link
                href={PathNames.about}
                className="w-1/4 px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-r border-white"
              >
                ABOUT
              </Link>
              <div className="w-1/2 relative">
                <div className="absolute w-full h-[1px] bg-white transform -rotate-[5.8deg] top-1/2 -translate-y-1/2 z-10"></div>
                <div className="h-full" />
              </div>
              <div
                className="relative w-1/4"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="block px-6 py-3 cursor-pointer text-white hover:text-orange-500 transition-colors text-center border-l border-white">
                  WHAT I DO
                </div>
                {isHovering && (
                  <div className="absolute left-0 w-full z-20 bg-[#4D05E8] border-white border-t">
                    {[
                      { title: "WORK WITH DOT", path: PathNames.workWithDot },
                      { title: "LEARN WITH DOT", path: PathNames.learnWithDot },
                      { title: "TRAVEL & EAT WITH DOT", path: PathNames.travelEat },
                    ].map((item) => (
                      <Link
                        key={item.title}
                        href={item.path}
                        className="block px-4 py-3 text-white hover:text-orange-500 transition-colors text-center text-xs border border-white border-t-0"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Link
          href={PathNames.contact}
          className="text-white hover:text-orange-500 transition-colors text-center text-xs fixed right-6"
        >
          CONTACT
        </Link>
      </nav>

      {/* Mobile Navbar */}
      <nav className="w-full p-4 font-gilroy mt-2 md:hidden flex flex-col items-center relative  text-white z-50">
        <div className="flex justify-between w-full items-center">
          <Link href={PathNames.home}>
            <Image src={Logo} alt="Logo" width={50} />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon (Simple representation, replace with an SVG or icon library) */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="w-full mt-4 flex flex-col items-center">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="w-full border border-white bg-[#4D05E8] text-center py-3 text-white hover:text-orange-500 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;