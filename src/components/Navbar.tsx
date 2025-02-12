import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-orange-500 font-bold text-xl">
          DOT<br />LUNG
        </div>
        
        <div className="max-w-2xl flex-1 mx-20">
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
                <div className="absolute w-full h-[1px] bg-white transform -rotate-[6.5deg] top-1/2 -translate-y-1/2 z-10"></div>
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
          className="text-white hover:text-orange-500 transition-colors text-center"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;