"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DotImage from "../../assets/images/about.png";
import Link from "next/link";
import { PathNames } from "../../routes/index.route";

const WorkWithDot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div className="container mx-auto">
      <div className="lg:flex items-end">
        <Image
          className="w-[780px]"
          src={DotImage}
          alt="dot Image"
        />
        <div className="w-[360px] lg:w-[400px] mx-auto lg:ml-0">
          <h1 className="text-[55px] lg:text-[80px] font-extrabold font-gilroy leading-[85px]">
            CREATING DIGITAL EXPERIENCES
          </h1>
          <p className="font-caslon text-lg w-[380px] mt-5 mb-14">
            <span className="italic text-secondary">
              Mythical digital magic.
            </span>{" "}
            I have worked worldwide weaving wonders for top brands, events, and
            concepts.
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
            className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-[#e74c3c] rounded-full"
            animate={{
              x: mousePosition.x / 10 - 50,
              y: mousePosition.y / 10 - 50,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />

          <div className="absolute left-4 lg:left-10 top-1/4 w-[95%] lg:max-w-md font-caslon">
            <p className="text-2xl italic text-secondary">
              Digital equals life in todo
            </p>
            <p className="text-2xl mt-2">
            I can help you navigate the challenging landscape that is digital to showcae your best you!
            </p>
          </div>

          <div className="absolute lg:right-10 top-1/2 max-w-sm">
            <p className="text-sm leading-relaxed font-asty">
              I&apos;m Dot Lung. Dot stands for Dorothy, and Lung means Dragon in Chinese. After growing up in Los Angeles, I traveled the world working on a variety of campaigns until I found a home in Barcelona. Since (), Barcelona has inspired me to be the magical and fierce being I am today.
            </p>
            <p className="text-sm leading-relaxed mt-5 font-asty">
              You don&apos;t have to be a digital extremist like me, but based upon my total digital immersion, I can help you create the optimum digital experience for your brand, your identity or your campaign, because I literally have been breathing digital magic since the days of MySpace and even before. Plus I have access to the top talent to incorporate your most magical aspirations to achieve your greatest goals.
            </p>
          </div>
        </div>
      </div>



      <div className="flex items-center justify-center font-gilroy mt-32 mb-32">
        <div className="max-w-3xl flex-1 mx-5 lg:mx-20 text-xs">
          <div className="relative">
            <div className="border border-white flex w-full">
              <Link
                href={PathNames.learnWithDot}
                className="w-[30%] lg:w-1/4 px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-r border-white"
              >
                LEARN WITH DOT
              </Link>

              <div className="w-[40%] lg:w-1/2 relative">
                <div className="absolute w-full h-[1px] bg-white transform -rotate-[5.8deg] top-1/2 -translate-y-1/2 z-10"></div>
                <div className="h-full" />
              </div>

              <div className="relative w-[30%] lg:w-1/4">
                <Link
                  href={PathNames.workWithDot}
                  className="block px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-l border-white"
                >
                  WORK WITH DOT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithDot;
