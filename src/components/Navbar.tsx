"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/svgs/logo.svg";
import Link from "next/link";
import { PathNames } from "../routes/index.route";

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);

  const menuItems = [
    { title: "WORK WITH DOT", path: PathNames.workWithDot },
    { title: "LEARN WITH DOT", path: PathNames.learnWithDot },
    { title: "TRAVEL / EAT WITH DOT", path: PathNames.travelEat }
];

  return (
    <nav className="w-full p-4 font-gilroy mt-2">
      <div className="flex items-center justify-between">
        <Link href={PathNames.home} className="fixed">
          <Image src={Logo} alt="Logo" width={50} />
        </Link>
        <div className="w-[50px]" />
        
        <div className="max-w-3xl flex-1 mx-20 text-xs">
          <div className="relative">
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
                <div
                  className="block px-6 py-3 cursor-pointer text-white hover:text-orange-500 transition-colors text-center border-l border-white"
                >
                  WHAT I DO
                </div>
                
                {/* Dropdown Menu */}
                {isHovering && (
                  <div className="absolute left-0 w-full z-20">
                    {menuItems.map((item, index) => (
                      <div
                        key={item.title}
                        className={`border border-white border-t-0 opacity-0
                          ${index === 0 ? 'animate-slide-in-1' : ''}
                          ${index === 1 ? 'animate-slide-in-2' : ''}
                          ${index === 2 ? 'animate-slide-in-3' : ''}`}
                      >
                        <Link
                          href={item.path}
                          className="block px-4 py-3 text-white hover:text-orange-500 transition-colors text-center text-xs"
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
        </div>
        
        <div className="w-[50px]" />
        <Link
          href={PathNames.contact}
          className="text-white hover:text-orange-500 transition-colors text-center text-xs fixed right-6"
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;