"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DotImage from "../../assets/images/Trapezoid 2.png";
import DotImage1 from "../../assets/images/Trapezoid.png";
import { PathNames } from "../../routes/index.route";
import DotSection from "../../components/DotSection";
import AnimatedLineVertical from "../../components/AnimatedLineVertical";
import RevealOnScroll from "../../components/RevealOnScroll";
import RevealOnScrollSpan from "../../components/RevealOnScrollSpan";

const WorkWithDot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div className="container mx-auto overflow-x-hidden mt-20 md:mt-0">
      <div className="flex flex-col justify-between lg:justify-start lg:flex-row items-center font-gilroy h-[90vh] lg:h-[75vh]">
        <div className="lg:w-[50%] flex-1 flex justify-center items-center lg:flex-none">
          <RevealOnScroll className="-z-10 lg:absolute">
            <Image
              className="w-full scale-[1.2] md:scale-100 md:w-[780px] -z-20 hidden lg:block"
              src={DotImage}
              alt="Dotlung"
            />
            <Image
              className="w-full scale-[1.2] md:scale-100 md:w-[780px] -z-20 block lg:hidden"
              src={DotImage1}
              alt="Dotlung"
            />
          </RevealOnScroll>
        </div>
        <div
          className="h-auto lg:w-[510px] -mt-24 lg:mt-0"
        >
          <div className="z-10 text-left max-w-2xl px-6 lg:mt-52">
            <RevealOnScroll>
              <h1 className="text-[2.5rem] lg:text-[4.9rem] font-bold uppercase leading-[38px] lg:leading-[75px] -z-10">
                CREATING DIGITAL EXPERIENCES
              </h1>
            </RevealOnScroll>
            <p className="font-caslon lg:text-2xl mt-6 lg:mt-8" style={{ lineHeight: "1.5" }}>
              <RevealOnScrollSpan>
                <span className="text-secondary italic">
                  Digital is literally my life.
                </span>{" "}
              </RevealOnScrollSpan>
              <RevealOnScrollSpan>
                I live 24/7 on all platforms, whether it’s Facebook, Instagram or the latest and greatest app wanting to change the world.
              </RevealOnScrollSpan>
            </p>
            <p className="uppercase items-center mt-2 lg:mt-10 py-3 text-white font-light font-gilroy" style={{ fontSize: "12px" }}>
              <RevealOnScroll>
                Explore
              </RevealOnScroll>
              <RevealOnScroll>
                <AnimatedLineVertical />
              </RevealOnScroll>
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
              <RevealOnScrollSpan>
                Digital equals life in todo 
              </RevealOnScrollSpan>
            </span>
            <RevealOnScrollSpan>
              I can help you navigate the challenging landscape that is digital to showcae your best you!
            </RevealOnScrollSpan>
          </p>

          <div className="absolute mx-5 lg:mx-0 lg:right-0 top-[350px] md:top-[40%] lg:top-1/2 max-w-[500px] text-sm md:text-base leading-relaxed font-asty">
              <RevealOnScrollSpan>I&apos;m Dot Lung. Dot stands for Dorothy, and Lung means “Dragon”</RevealOnScrollSpan>
              <RevealOnScrollSpan>in Mandarin. After growing up in Los Angeles, I traveled the world</RevealOnScrollSpan>
              <RevealOnScrollSpan>working on a variety of campaigns until I found a home in</RevealOnScrollSpan>
              <RevealOnScrollSpan>Barcelona. Since 2011, Barcelona has inspired me to be the</RevealOnScrollSpan>
              <RevealOnScrollSpan>magical and fierce being I am today. I started my social media</RevealOnScrollSpan>
              <RevealOnScrollSpan>career formally at OFFF Festival, where I was in charge of the</RevealOnScrollSpan>
              <RevealOnScrollSpan>online community and audience engagement. We developed their</RevealOnScrollSpan>
              <RevealOnScrollSpan>first steps of an authentic, organic messages which continues to</RevealOnScrollSpan>
              <RevealOnScrollSpan>this day. Before OFFF, I had been an active social media user since</RevealOnScrollSpan>
              <RevealOnScrollSpan>the days of MySpace where I had not only my personal profile, but</RevealOnScrollSpan>
              <RevealOnScrollSpan>was also selling real estate through the platform! Not a digital</RevealOnScrollSpan>
              <RevealOnScrollSpan>extremist like me? It&apos;s not for everyone, but based on my total</RevealOnScrollSpan>
              <RevealOnScrollSpan>immersion, I can help you create the optimum digital experience</RevealOnScrollSpan>
              <RevealOnScrollSpan>for your brand, your personal identity, or your campaign. My goal</RevealOnScrollSpan>
              <RevealOnScrollSpan>is to empower creatives to achieve their dreams. Plus, I have</RevealOnScrollSpan>
              <RevealOnScrollSpan>access to the top talent to incorporate your most magical</RevealOnScrollSpan>
              <RevealOnScrollSpan>aspiration and achieve your greatest goals.</RevealOnScrollSpan>
          </div>
        </div>
      </div>

      <RevealOnScroll>
        <DotSection
          bottomLeftText="LEARN WITH DOT"
          bottomLeftLink={PathNames.learnWithDot}
          topRightText="WORK WITH DOT"
          topRightLink={PathNames.workWithDot}
        />
      </RevealOnScroll>
    </div>
  );
};

export default WorkWithDot;
