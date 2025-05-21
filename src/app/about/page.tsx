"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DotImage from "../../assets/images/Trapezoid.png";
import { PathNames } from "../../routes/index.route";
import DotSection from "../../components/DotSection";

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
            <h1 className="text-[2.5rem] lg:text-[4.9rem] font-bold uppercase leading-[38px] lg:leading-[75px] -z-10">
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
          className="relative h-screen w-[1050px] flex items-center justify-center"
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
              Digital equals life in todo 
            </span>
            I can help you navigate the challenging landscape that is digital to showcae your best you!
          </p>

          <div className="absolute mx-5 lg:mx-0 lg:right-0 top-[350px] md:top-[40%] lg:top-1/2 max-w-[500px] text-sm md:text-base leading-relaxed font-asty">
              I&apos;m Dot Lung. Dot stands for Dorothy, and Lung means “Dragon”
              in Mandarin. After growing up in Los Angeles, I traveled the world
              working on a variety of campaigns until I found a home in
              Barcelona. Since 2011, Barcelona has inspired me to be the
              magical and fierce being I am today. I started my social media
              career formally at OFFF Festival, where I was in charge of the
              online community and audience engagement. We developed their
              first steps of an authentic, organic messages which continues to
              this day. Before OFFF, I had been an active social media user since
              the days of MySpace where I had not only my personal profile, but
              was also selling real estate through the platform! Not a digital
              extremist like me? It&apos;s not for everyone, but based on my total
              immersion, I can help you create the optimum digital experience
              for your brand, your personal identity, or your campaign. My goal
              is to empower creatives to achieve their dreams. Plus, I have
              access to the top talent to incorporate your most magical
              aspiration and achieve your greatest goals.
          </div>
        </div>
      </div>

      <DotSection
        bottomLeftText="LEARN WITH DOT"
        bottomLeftLink={PathNames.learnWithDot}
        topRightText="WORK WITH DOT"
        topRightLink={PathNames.workWithDot}
      />
    </div>
  );
};

export default WorkWithDot;
