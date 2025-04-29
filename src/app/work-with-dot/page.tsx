"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DotImage from "../../assets/images/work-with-Dot.png";
import Link from "next/link";
import { PathNames } from "../../routes/index.route";
import DotSection from "../../components/DotSection";

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
    <div className="container mx-auto overflow-hidden mt-20 md:mt-0">
      <div className="flex flex-col justify-between lg:justify-start lg:flex-row lg:items-center font-gilroy h-[100vh] lg:h-auto mt-0 md:mt-12">
        <div className="flex-1 flex justify-center items-center lg:flex-none">
          <Image
            className="w-full scale-[1.2] md:scale-100 md:w-[980px] -z-20"
            src={DotImage}
            alt="Dotlung"
          />
        </div>
        <div
          className="h-auto lg:w-[510px] lg:-ml-40"
        >
          <div className="z-10 text-left max-w-2xl px-6">
            <h1 className="text-[2.4rem] lg:text-[4.9rem] font-bold uppercase leading-[36px] lg:leading-[75px] -z-10">
              WORK <br /> WITH DOT
            </h1>
            <p className="font-caslon lg:text-2xl mt-6 lg:mt-8" style={{lineHeight:"1.5"}}>
              <p className="text-secondary italic">
                Together we can work miracles.
              </p>{" "}
                <p>I create strong</p>
                <p>online identities & communities and develop</p>
                <p>kickass digital campaigns &</p>
              <p className="text-secondary italic">
                strong online identities and communities
              </p>{" "}
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
          className="relative h-screen w-[1000px] flex items-center justify-center"
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

          <p className="absolute mx-5 lg:mx-0 lg:left-10 top-1/4 max-w-[30rem] font-caslon text-[1.375rem] lg:text-[1.75rem]">
            <span className="italic text-secondary mr-1">
              Miracles happen.
            </span>
              But on their own. I create
              strong online identities & communities and
              develop kickass digital campaigns all over the
              world.
          </p>

          <div className="absolute mx-5 mt-10 md:mt-0 lg:mx-0 lg:right-0 top-[350px] md:top-[40%] lg:top-1/2 max-w-[500px] text-sm md:text-base leading-relaxed font-asty">
              I&apos;m Dot Lung. Dot stands for Dorothy, and Lung means “Dragon”
              in Mandarin. After growing up in Los Angeles, I traveled the world
              working on a variety of campaigns until I found a home in
              Barcelona. Since 2011, Barcelona has inspired me to be the
              magical and fierce being I am today. I started my social media
              career formally at OFFF Festival, where I was in charge of the
              online community and audience engagement. We developed their
              first steps of an authentic, organic messages which continues to
              this day.
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

      <div className="flex mx-5 lg:justify-center mt-16 overflow-hidden">
        <div className="text-white text-2xl font-serif">
          {items.map((item, index) => (
            <div key={index} className="mb-4 relative">
              <span className="block pb-2 cursor-pointer lg:hover:text-secondary">{item.title}</span>
              <div
                className="border-b-[1px] border-secondary absolute top-4"
                style={{
                  width: item.width,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:flex items-center justify-center font-gilroy mt-32 mb-32 hidden">
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
    <DotSection />
    </div>
  );
};

export default WorkWithDot;
