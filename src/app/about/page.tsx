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
    <div className="container mx-auto overflow-x-hidden mt-20 md:mt-0">
      <div className="flex flex-col justify-between lg:justify-start lg:flex-row items-center font-gilroy h-[100vh] lg:h-auto">
        <div className="flex-1 flex justify-center items-center lg:flex-none">
          <Image
            className="w-full scale-[1.2] md:scale-100 md:w-[780px] -z-20"
            src={DotImage}
            alt="Dotlung"
          />
        </div>
        <div
          className="h-auto lg:w-[510px]"
        >
          <div className="z-10 text-left max-w-2xl px-6">
            <h1 className="text-[2rem] lg:text-[4.9rem] font-bold uppercase leading-[33px] lg:leading-[75px] -z-10">
              CREATING DIGITAL EXPERIENCES
            </h1>
            <p className="font-caslon lg:text-2xl mt-6 lg:mt-8" style={{lineHeight:"1.5"}}>
              <span className="text-secondary italic">
                Digital is literally my life.
              </span>{" "}
                I live 24/7 on all platforms, whether it’s Facebook, Instagram or the latest and greatest app wanting to change the world.
            </p>
            <p className="uppercase items-center mt-2 lg:mt-10 py-3 text-white font-light font-gilroy" style={{fontSize:"12px"}}>
              Explore
              <span
                className="block w-[1px] h-24 bg-secondary ml-5 mt-3"
              ></span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div
          className="relative h-screen w-[1000px] flex items-center justify-center overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="absolute w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] bg-[#e74c3c] rounded-full"
            animate={{
              x: mousePosition.x / 10 - 50,
              y: mousePosition.y / 10 - 50,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />

          <div className="absolute mx-5 lg:mx-0 lg:left-10 top-1/4 max-w-md font-caslon">
            <p className="text-2xl italic text-secondary">
              Digital equals life in todo
            </p>
            <p className="text-2xl mt-2">
            I can help you navigate the challenging landscape that is digital to showcae your best you!
            </p>
          </div>

          <div className="absolute mx-5 lg:mx-0 lg:right-10 top-1/2 max-w-sm">
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
