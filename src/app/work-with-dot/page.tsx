"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from 'framer-motion';
import DotImage from "../../assets/images/work-with-Dot.png";
import ShapeBg from "../../components/ShapeBg";

const WorkWithDot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div className="container mx-auto">
      <ShapeBg />
      <div className="flex items-end">
        <Image className="w-[980px] bg-transparent" src={DotImage} alt="dot Image" />
        <div className="-ml-40">
          <h1 className="text-[80px] font-extrabold font-gilroy leading-[85px]">WORK <br /> WITH DOT</h1>
          <p className="font-caslon text-lg w-[380px] mt-5 mb-14"><span className="italic text-secondary">Mythical digital magic.</span> I have worked worldwide weaving wonders for top brands, events, and concepts.</p>
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
            animate={{ x: mousePosition.x / 10 - 50, y: mousePosition.y / 10 - 50 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          />
          
          <div className="absolute left-10 top-1/4 max-w-md font-caslon">
            <p className="text-2xl italic text-secondary">Together we can make my magic.</p>
            <p className="text-2xl mt-2">
              I create dominant and in demand online identities and communities by developing kick ass campaigns utilizing unique content specific to your brand ethos.
            </p>
          </div>
          
          <div className="absolute right-10 top-1/2 max-w-sm">
            <p className="text-sm leading-relaxed font-asty">
            The digital world can be a difficult one to navigate. Sometimes you need that unicorn to guide you through the good and the bad to enhance, target, and execute your best strategy. This is where I thrive. I&apos;ve run campaigns for agencies, headed up social media teams for a variety of companies, and have initiated my own start ups in graphic design, video production and more. I can not only lend my expertise and experience, but I&apos;ve walked the walk, not just talked the talk!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithDot;