"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DotImage from "../../assets/images/work-with-Dot.png";
import ShapeBg from "../../components/ShapeBg";

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
    <div className="container mx-auto">
      <ShapeBg />
      <div className="flex items-end">
        <Image
          className="w-[980px] bg-transparent"
          src={DotImage}
          alt="dot Image"
        />
        <div className="-ml-40">
          <h1 className="text-[80px] font-extrabold font-gilroy leading-[85px]">
            WORK <br /> WITH DOT
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
            className="absolute w-[500px] h-[500px] bg-[#e74c3c] rounded-full"
            animate={{
              x: mousePosition.x / 10 - 50,
              y: mousePosition.y / 10 - 50,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />

          <div className="absolute left-10 top-1/4 max-w-md font-caslon">
            <p className="text-2xl italic text-secondary">
              Together we can make my magic.
            </p>
            <p className="text-2xl mt-2">
              I create dominant and in demand online identities and communities
              by developing kick ass campaigns utilizing unique content specific
              to your brand ethos.
            </p>
          </div>

          <div className="absolute right-10 top-1/2 max-w-sm">
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
      <div className="w-full p-4 font-gilroy mt-2">
        <div className="flex items-center justify-between">
          {/* <Image className="fixed" src={Logo} alt="Logo" width={50} /> */}
          <div className="w-[50px]" />

          <div className="max-w-3xl flex-1 mx-20 text-xs">
            <div className="relative">
              <div className="border border-white flex w-full">
                <div className="w-3/4 relative">
                  <div className="absolute w-full h-[1px] bg-white transform -rotate-[3.9deg] top-1/2 -translate-y-1/2 z-10"></div>
                  <div className="h-full" />
                </div>

                <div className="relative w-1/4">
                  <p className="block px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-l border-white">
                    PROJECTS
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[50px]" />
        </div>
      </div>
      <div className=" flex items-center justify-center ">
        <div className="text-white text-2xl font-serif">
          {items.map((item, index) => (
            <div key={index} className="mb-4 relative">
              <span className="block pb-2 ">{item.title}</span>
              <div
                className=" border-b-2 absolute top-4"
                style={{
                  border: "1px solid rgb(241, 67, 54)",
                  width: item.width,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <nav className="w-full p-4 font-gilroy mt-32 mb-32">
        <div className="flex items-center justify-between">
          <div className="w-[50px]" />

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

          <div className="w-[50px]" />
        </div>
      </nav>
      <nav className="w-full p-4 font-gilroy mt-5">
        <div className="flex items-center justify-center">
          <div className="max-w-3xl flex-1 mx-20  flex justify-center">
            <div className="  flex w-full">
              <div style={{width:"85%"}}>
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-5xl font-bold">LET’S TALK</h1>
                  </div>
                  <div>
                    <p className="text-lg font-caslon">+1 661 368 5864</p>
                    <p className="text-lg font-caslon">hello@dotlung.com</p>
                  </div>
                </div>
                <div className="flex justify-between mt-10">
                  <div>
                    <p className="italic text-secondary mt-4">
                      Don’t miss out on this!
                    </p>
                    <p className="mt-2 text-lg font-caslon">
                      Get my top 5 tips to grow your Instagram / LinkedIn <br/>by
                      entering your e-mail address here:
                    </p>
                  </div>
                  <div className="flex flex-col text-lg  mt-4" style={{width:140}}>
                    <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                      FACEBOOK
                    </a>
                    <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                      INSTAGRAM
                    </a>
                    <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                      TWITTER
                    </a>
                    <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                      SNAPCHAT
                    </a>
                    <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                      SKYPE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default WorkWithDot;
