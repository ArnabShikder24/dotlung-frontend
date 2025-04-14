"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "../../public/assets/svgs/logo.svg";
import Link from "next/link";
import { PathNames } from "../routes/index.route";
import { Squash as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";
import { cn } from "../lib/cn";


const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const currentPath = usePathname();

  const navItemActive = (path: string) => {
    if (path == currentPath) return "text-secondary";

  };

  const menuItems = [
    { title: "ABOUT", path: PathNames.about, border: true },
    {title: false},
    { title: "WORK WITH DOT", path: PathNames.workWithDot, border: false },
    { title: "LEARN WITH DOT", path: PathNames.learnWithDot, border: false },
    { title: "TRAVEL & EAT WITH DOT", path: PathNames.travelEat, border: false },
    { title: "BLOG", path: PathNames.blog, border: true },
    { title: "CONTACT", path: PathNames.contact, border: true },
  ];

  const desktopMenuItems = [
    { title: "WORK WITH DOT", path: PathNames.workWithDot },
    { title: "LEARN WITH DOT", path: PathNames.learnWithDot },
    { title: "TRAVEL & EAT WITH DOT", path: PathNames.travelEat },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const hamburgerBtn = document.querySelector(".hamburger-react");
  
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerBtn &&
        !hamburgerBtn.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);
  
  

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full p-4 font-gilroy mt-2 hidden md:flex justify-between items-center z-50">
        <Link href={PathNames.home} className="fixed">
          <Image src={Logo} alt="Logo" width={50} />
        </Link>
        <div className="max-w-3xl flex-1 mx-auto justify-center text-xs">
          <div className="border border-white flex w-full">
            <Link
              href={PathNames.about}
              className={cn("w-1/4 px-6 py-3 hover:text-orange-500 transition-colors text-center border-r border-white", navItemActive(PathNames.about))}
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
                <div className="absolute left-0 w-full z-20">
                  {desktopMenuItems.map((item, index) => (
                    <div
                      key={item.title}
                      className={`border border-white opacity-0
                        ${index === 0 ? 'animate-slide-in-1' : ''}
                        ${index === 1 ? 'animate-slide-in-2' : ''}
                        ${index === 2 ? 'animate-slide-in-3' : ''}`}
                    >
                      <Link
                        href={item.path}
                        className={`block px-4 py-3 hover:text-orange-500 transition-colors text-center text-xs ${navItemActive(item.path)}`}
                      >
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <Link
          href={PathNames.contact}
          className="hover:text-orange-500 transition-colors text-center text-xs fixed right-6"
        >
          CONTACT
        </Link>
      </nav>

      {/* Mobile Navbar */}
      <nav className="w-full font-gilroy md:hidden flex flex-col items-center relative text-white z-[99999]">
        <div className="flex justify-between w-full items-center">
          <Link className="fixed top-4 left-3 z-[99999]" href={PathNames.home}>
            <Image src={Logo} alt="Logo" width={50} />
          </Link>
          <div className="fixed top-3 right-3 z-[99999]">
            <Hamburger toggled={isMobileMenuOpen} toggle={setIsMobileMenuOpen} color="#F64C3E"/>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="w-full h-screen fixed bg-gradient-to-b from-[#4D05E8]/100 to-[#4D05E8]/80 z-50">
            <div
              className="w-[55%] mt-4 flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 top-20"
            >
              {menuItems.map((item, idx) => {
                if (item.title) {
                  return (
                    <Link
                      key={idx}
                      href={item.path}
                      className={`w-full ${item.border ? "border" : "border-r border-l"} border-white text-center py-3 ${(item.path != PathNames.contact) && navItemActive(item.path)} hover:text-orange-500 transition-colors`}
                      onClick={toggleMobileMenu}
                    >
                      {item.title}
                    </Link>
                  );
                } else {
                  return (<div key={idx} className="relative border w-full h-14">
                    <div className="absolute w-full h-[1px] bg-white transform -rotate-[9deg] top-1/2 -translate-y-1/2"></div>
                    <div className="h-full" />
                  </div>);
                }
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
