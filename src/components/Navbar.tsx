import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/svgs/logo.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full p-4 font-gilroy">
      <div className="flex items-center justify-between">
        <Image src={Logo} alt="Logo" width={50} />
        
        <div className="max-w-3xl flex-1 mx-20 text-sm">
          <div className="relative">
            <div className="border border-white flex w-full">
              <a 
                href="/about"
                className="w-1/4 px-6 py-2 text-white hover:text-orange-500 transition-colors text-center border-r border-white"
              >
                ABOUT
              </a>
              
              <div className="w-1/2 relative">
                {/* Diagonal Line */}
                <div className="absolute w-full h-[1px] bg-white transform -rotate-[5.2deg] top-1/2 -translate-y-1/2 z-10"></div>
                <div className="h-full" />
              </div>

              <a 
                href="/what-i-do"
                className="w-1/4 px-6 py-2 text-white hover:text-orange-500 transition-colors text-center border-l border-white"
              >
                WHAT I DO
              </a>
            </div>
          </div>
        </div>

        <a 
          href="/contact"
          className="text-white hover:text-orange-500 transition-colors text-center text-sm"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;