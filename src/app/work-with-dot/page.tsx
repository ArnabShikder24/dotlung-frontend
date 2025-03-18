"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DotImage from "../../assets/images/work-with-Dot.png";
import Link from "next/link";
import { PathNames } from "../../routes/index.route";

const WorkWithDot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  const items = [
    { width: "200%", title: "OFFF" },
    { width: "180%", title: "Motionographer" },
    { width: "200%", title: "F5" },
    { width: "170%", title: "Sonar+D" },
    { width: "180%", title: "DDD" },
    { width: "200%", title: "Ladies Wine Design" },
    { width: "170%", title: "Catalunya Cannabis" },
    { width: "160%", title: "360VR.Barcelona" },
  ];

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="lg:flex items-end">
        <Image
          className="w-[980px] bg-transparent"
          src={DotImage}
          alt="dot Image"
        />
        <div className="lg:-ml-40 w-[380px] mx-auto">
          <h1 className="text-[65px] lg:text-[80px] font-extrabold font-gilroy leading-[85px]">
            WORK <br /> WITH DOT
          </h1>
          <p className="font-caslon text-lg mt-5 mb-14">
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

          <div className="absolute left-6 lg:left-10 top-1/4 max-w-md font-caslon">
            <p className="text-2xl italic text-secondary">
              Together we can make my magic.
            </p>
            <p className="text-2xl mt-2">
              I create dominant and in demand online identities and communities
              by developing kick ass campaigns utilizing unique content specific
              to your brand ethos.
            </p>
          </div>

          <div className="absolute lg:right-10 top-1/2 max-w-sm">
            <p className="text-sm leading-relaxed font-asty">
              The digital world can be a difficult one to navigate. Sometimes
              you need that unicorn to guide you through the good and the bad to
              enhance, target, and execute your best strategy. This is where I
              thrive. I&apos;ve run campaigns for agencies, headed up social
              media teams for a variety of companies, and have initiated my own
              start ups in graphic design, video production and more. I can not
              only lend my expertise and experience, but I&apos;ve walked the
              walk, not just talked the talk!
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center font-gilroy">
        <div className="max-w-3xl flex-1 mx-5 lg:mx-20 text-xs">
          <div className="relative">
            <div className="border border-white flex w-full">
              <div className="w-3/4 relative">
                <div className="absolute w-full h-[1px] bg-white transform -rotate-[3.9deg] top-1/2 -translate-y-1/2 z-10"></div>
                <div className="h-full" />
              </div>

              <div className="relative w-[40%] lg:w-[30%]">
                <p className="block px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-l border-white">
                  PROJECTS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-16 overflow-hidden">
        <div className="text-white text-2xl font-serif">
          {items.map((item, index) => (
            <div key={index} className="mb-4 relative">
              <span className="block pb-2 ">{item.title}</span>
              <div
                className="border-b-2 absolute top-4"
                style={{
                  border: "1px solid rgb(241, 67, 54)",
                  width: item.width,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center font-gilroy mt-32 mb-32">
        <div className="max-w-3xl flex-1  mx-5 lg:mx-20 text-xs">
          <div className="relative">
            <div className="border border-white flex w-full">
              <Link
                href={PathNames.travelEat}
                className="w-[30%] lg:w-1/4 px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-r border-white"
              >
                TRAVEL & EAT WITH DOT
              </Link>

              <div className="w-[40%] lg:w-1/2 relative">
                <div className="absolute w-full h-[1px] bg-white transform -rotate-[5.8deg] top-1/2 -translate-y-1/2 z-10"></div>
                <div className="h-full" />
              </div>

              <div className="relative w-[30%] lg:w-1/4">
                <Link
                  href={PathNames.learnWithDot}
                  className="block px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-l border-white"
                >
                  LEARN WITH DOT
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
