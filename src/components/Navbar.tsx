"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "../../public/assets/svgs/logo.svg";
import { PathNames } from "../routes/index.route";
import { Squash as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";
import { cn } from "../lib/cn";
import RippleButton from "./RippleButton";
import { motion } from "framer-motion";
import Link from "next/link";


const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const currentPath = usePathname();
  const [mousePosition, setMousePosition] = useState({ x: 0 });
  
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX });
  };

  const navItemActive = (path: string) => {
    if (path == currentPath) return "text-secondary";

  };

  const menuItems = [
    { title: "ABOUT", path: PathNames.about, border: true },
    {title: false},
    { title: "HOME", path: PathNames.home, border: false },
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
      <nav className="w-full p-4 font-gilroy mt-2 hidden md:flex justify-between items-center z-[100]">
        <RippleButton  href={PathNames.home} onMouseMove={handleMouseMove} className="fixed">
          <motion.div
            className="absolute w-[17px] h-[17px] bg-primary top-[8px] left-[40px] rounded-full"
            animate={{
              x: mousePosition.x / 5 - 50, 
            }}
            whileHover={{
              x: (mousePosition.x / 5 - 50) - 15, 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <Image src={Logo} alt="Logo" width={55} height={40}/>
        </RippleButton>
        <div className="max-w-3xl flex-1 mx-auto justify-center text-xs z-[100]">
          <div className="border border-white flex w-full">
            <RippleButton
              href={PathNames.about}
              className={cn("w-1/4 px-6 py-3 hover:text-secondary transition-colors text-center border-r border-white", navItemActive(PathNames.about))}
            >
              ABOUT
            </RippleButton>
            <div className="w-1/2 relative">
              <div className="absolute w-full h-[1px] bg-white transform -rotate-[5.8deg] top-1/2 -translate-y-1/2 z-10"></div>
              <div className="h-full" />
            </div>
            <div
              className="relative w-1/4"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="block px-6 py-3 cursor-pointer text-white hover:text-secondary transition-colors text-center border-l border-white">
                WHAT I DO
              </div>
              {isHovering && (
                <div className="absolute left-0 w-full z-[99999]">
                  {desktopMenuItems.map((item, index) => (
                    <div
                      key={item.title}
                      className={`border border-white opacity-0 bg-primary
                        ${index === 0 ? 'animate-slide-in-1' : ''}
                        ${index === 1 ? 'animate-slide-in-2' : ''}
                        ${index === 2 ? 'animate-slide-in-3' : ''}`}
                    >
                      <RippleButton
                        href={item.path}
                        className={`block px-4 py-3 hover:text-secondary transition-colors text-center z-[999999] text-xs ${navItemActive(item.path)}`}
                      >
                        {item.title}
                      </RippleButton>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <RippleButton
          href={PathNames.contact}
          className="hover:text-secondary transition-colors text-center text-xs fixed right-6"
        >
          CONTACT
        </RippleButton>
      </nav>

      {/* Mobile Navbar */}
      <nav className="w-full font-gilroy md:hidden flex flex-col items-center relative text-white z-[100]">
        <div className="flex justify-between w-full items-center">
          <RippleButton className="fixed top-4 left-3 z-[100]" href={PathNames.home}>
              <motion.div
              className="absolute w-[17px] h-[17px] bg-primary top-[8px] left-[40px] rounded-full"
              animate={{
                x: mousePosition.x / 5 - 50, 
              }}
              whileHover={{
                x: (mousePosition.x / 5 - 50) - 15, 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <Image src={Logo} alt="Logo" width={50} />
          </RippleButton>
          <div className="fixed top-3 right-3 z-[100]">
            <Hamburger toggled={isMobileMenuOpen} toggle={setIsMobileMenuOpen} color="#F64C3E"/>
          </div>
        </div>

        <Link target="_blank" href="https://www.domestika.org/es/courses/1102-estrategias-de-instagram-para-desarrollo-de-marcas" className="font-gilroy text-white text-[0.75rem] hover:text-secondary transition-colors flex items-center gap-2 absolute right-[80px] top-[26px]">
          LIVE NOW!
          <div className="w-[10px] h-[10px] rounded-full bg-secondary animate-fade-loop" />
          <style jsx>{`
            @keyframes fadeLoop {
              0%, 100% {
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
            }

            .animate-fade-loop {
              animation: fadeLoop 2s ease-in-out infinite;
            }
          `}</style>
        </Link>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="w-full h-screen fixed bg-gradient-to-b from-[#4D05E8]/90 to-[#4D05E8]/90 z-50">
            <div
              className="w-[220px] mt-4 flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 top-20"
            >
              {menuItems.map((item, idx) => {
                if (item.title) {
                  return (
                    <RippleButton 
                      key={idx}
                      href={item.path}
                      className={`w-full ${item.title === "CONTACT" && "border-b"} ${item.border ? "border-t border-r border-l" : "border-r border-l"} border-white font-gilroy text-[0.8125rem] h-[50px] flex items-center justify-center ${(item.path != PathNames.contact) && navItemActive(item.path)} hover:text-secondary transition-colors`}
                      onClick={toggleMobileMenu}
                    >
                      {item.title}
                    </RippleButton>
                  );
                } else {
                  return (<div key={idx} className="relative border w-full h-[50px] overflow-hidden">
                    <div className="absolute w-[103%] h-[1px] bg-white transform -rotate-[12.5deg] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"></div>
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
