"use client";
import { useState } from "react";
import DotImage from "../../assets/images/work-with-Dot.png";
import ShapeBg from "../../components/ShapeBg";
import Image from "next/image";
import { motion } from "framer-motion";

const TravelEat = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    const tableItems = [
        { width: "160%", title: "Universitat de Barcelona" },
        { width: "190%", title: "Toulouse Business School" },
        { width: "180%", title: "ESdesign Barcelona" },
        { width: "170%", title: "La Salle" },
      ];

    return (
        <div className="container mx-auto">
          <ShapeBg />
          <div className="flex items-end">
            <Image
              className="w-[980px]"
              src={DotImage}
              alt="dot Image"
            />
            <div className="-ml-40">
              <h1 className="text-[80px] font-extrabold font-gilroy leading-[85px]">
              Learn <br /> WITH DOT
              </h1>
              <p className="font-caslon text-lg w-[380px] mt-5 mb-14">
                <span className="italic text-secondary">
                  Magical minds develop strong dragon fire.
                </span>{" "} <br />
                  Step-by-step I show you the way to become the best dragon version of you!
              </p>
              <p className="font-gilroy text-sm">EXPLORE</p>
              <div className="w-[1px] h-24 bg-secondary ml-6 mt-5" />
            </div>
          </div>
        
          <div className="flex items-center justify-center">
            <div
              className="relative h-screen w-[1000px] flex items-center justify-center overflow-hidden"
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="absolute w-[500px] h-[500px] bg-[#e74c3c] rounded-full"
                animate={{
                  x: mousePosition.x / 10 - 50,
                  y: mousePosition.y / 10 - 50,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              />

              <div className="absolute left-10 top-1/4 max-w-md font-caslon">
                <p className="text-2xl mt-2">
                <span className="text-2xl italic text-secondary">
                  Make your mind magic.
                </span> It&apos;s not just your mind by itself, but without <br />
                understanding the concepts of online, you will not fully appreciate what you can accomplish utilising the digital landscape.
                </p>
              </div>

              <div className="absolute right-10 top-1/2 max-w-sm">
                <p className="text-sm leading-relaxed font-asty">
                  I have been teaching social media, online marketing, digital design and more at several institutions based in Barcelona, including Universitat de Barcelona, Toulouse Business School, ESdesign Escuela Superior de Diseño de Barcelona, and more. My teaching is not just in the classroom, as I love to share my knowledge with my clients in order for them to share the great message of social! I also create learning communities online between many of my clients, in order to leverage all the great things we can learn from each. So yes, I teach, but I also facilitate, led and direct you in the best ways to become your own fabulous unicorns!
                </p>
              </div>
            </div>
          </div>
      
          <div className="flex items-center justify-center font-gilroy">
            <div className="max-w-3xl flex-1 mx-20 text-xs">
              <div className="relative">
                <div className="border border-white flex w-full">
                  <div className="w-3/4 relative">
                    <div className="absolute w-full h-[1px] bg-white transform -rotate-[3.9deg] top-1/2 -translate-y-1/2 z-10"></div>
                    <div className="h-full" />
                  </div>

                  <div className="relative w-[30%]">
                    <p className="block px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-l border-white">
                    TEACHING ENGAGEMENTS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-16">
            <div className="text-white text-2xl font-serif">
              {tableItems.map((data, index) => (
                <div key={index} className="mb-4 relative">
                    <span className="block pb-2 ">{data.title}</span>
                    <div
                    className=" border-b-2 absolute top-4"
                    style={{
                        border: "1px solid rgb(241, 67, 54)",
                        width: data.width,
                    }}
                    ></div>
                </div>
              ))}
            </div>
          </div>
              
          <div className="flex items-center justify-center font-gilroy mt-32 mb-32">
            <div className="max-w-3xl flex-1 mx-20 text-xs">
              <div className="relative">
                <div className="border border-white flex w-full">
                  <a
                    href="/about"
                    className="w-1/4 px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-r border-white"
                  >
                    TRAVEL & EAT WITH DOT
                  </a>

                  <div className="w-1/2 relative">
                    <div className="absolute w-full h-[1px] bg-white transform -rotate-[5.8deg] top-1/2 -translate-y-1/2 z-10"></div>
                    <div className="h-full" />
                  </div>

                  <div className="relative w-1/4">
                    <a
                      href="/what-i-do"
                      className="block px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-l border-white"
                    >
                      LEARN WITH DOT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
        </div>
    );
};

export default TravelEat;