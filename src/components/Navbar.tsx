"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/svgs/logo.svg";

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);

  const menuItems = [
    "WORK WITH DOT",
    "LEARN WITH DOT",
    "TRAVEL / EAT WITH DOT"
  ];

  return (
    <nav className="w-full p-4 font-gilroy">
      <div className="flex items-center justify-between">
      <Image src={Logo} alt="Logo" width={50} />
        
        <div className="max-w-3xl flex-1 mx-20 text-xs">
          <div className="relative">
            <div className="border border-white flex w-full">
              <a 
                href="/about"
                className="w-1/4 px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-r border-white"
              >
                ABOUT
              </a>
              
              <div className="w-1/2 relative">
                <div className="absolute w-full h-[1px] bg-white transform -rotate-[5.2deg] top-1/2 -translate-y-1/2 z-10"></div>
                <div className="h-full" />
              </div>

              <div 
                className="relative w-1/4"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <a 
                  href="/what-i-do"
                  className="block px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-l border-white"
                >
                  WHAT I DO
                </a>
                
                {/* Dropdown Menu */}
                {isHovering && (
                  <div className="absolute left-0 w-full z-20">
                    {menuItems.map((item, index) => (
                      <div
                        key={item}
                        className={`border border-white border-t-0 
                          animate-fadeIn opacity-0 transform translate-y-6
                          ${index === 0 ? 'animation-delay-0' : ''}
                          ${index === 1 ? 'animation-delay-150' : ''}
                          ${index === 2 ? 'animation-delay-300' : ''}`}
                      >
                        <a
                          href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-3 text-white hover:text-orange-500 transition-colors text-center text-xs"
                        >
                          {item}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <a 
          href="/contact"
          className="text-white hover:text-orange-500 transition-colors text-center text-xs"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;