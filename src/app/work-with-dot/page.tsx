"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DotImage from "../../assets/images/work-with-Dot.png";
import { PathNames } from "../../routes/index.route";
import DotSection from "../../components/DotSection";
import SectionHeader from "../../components/SectionHeader";
import RevealOnScroll from "../../components/RevealOnScroll";
import RevealOnScrollSpan from "../../components/RevealOnScrollSpan";

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
            <RevealOnScroll className="-z-10">
              <Image
                className="w-full scale-[1.2] md:scale-100 md:w-[980px] -z-20"
                src={DotImage}
                alt="Dotlung"
              />
            </RevealOnScroll>
          </div>
        <div
          className="h-auto lg:w-[510px] lg:-ml-40"
        >
          <div className="z-10 text-left max-w-2xl px-6">
            <RevealOnScroll>
              <h1 className="text-[2.5rem] lg:text-[4.9rem] font-bold uppercase leading-[38px] lg:leading-[75px] -z-10">
                WORK <br /> WITH DOT
              </h1>
            </RevealOnScroll>
              <p className="font-caslon lg:text-2xl mt-6 lg:mt-8" style={{ lineHeight: "1.5" }}>
                <RevealOnScroll>
                  <p className="text-secondary italic">
                    Together we can work miracles.
                  </p>{" "}
                </RevealOnScroll>
                <RevealOnScroll>
                  <p>I create strong</p>
                </RevealOnScroll>
                <RevealOnScroll>
                  <p>online identities & communities and develop</p>
                </RevealOnScroll>
                <RevealOnScroll>
                  <p>kickass digital campaigns &</p>
                </RevealOnScroll>
                <RevealOnScroll>
                  <p className="text-secondary italic">
                    strong online identities and communities
                  </p>{" "}
                </RevealOnScroll>
              </p>
            <p className="uppercase items-center mt-2 lg:mt-10 py-3 text-white font-light font-gilroy" style={{ fontSize: "12px" }}>
              <RevealOnScroll>
                Explore
              </RevealOnScroll>
              <RevealOnScroll>
                <span
                  className="block w-[1px] h-24 bg-secondary ml-5 mt-3"
                ></span>
              </RevealOnScroll>
              </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div
          className="relative h-screen w-[1100px] flex items-center justify-center"
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
            <p className="absolute mx-5 lg:mx-0 lg:left-10 top-[22%] max-w-[30rem] font-caslon text-[1.375rem] lg:text-[1.75rem]">
                <span className="italic text-secondary mr-1">
                  <RevealOnScrollSpan>
                    Miracles happen.
                  </RevealOnScrollSpan>
                </span>
                  <RevealOnScrollSpan>
                    But on their own. I create
                  </RevealOnScrollSpan>
                  <RevealOnScrollSpan>
                    strong online identities & communities and
                  </RevealOnScrollSpan>
                  <RevealOnScrollSpan>
                    develop kickass digital campaigns all over the
                  </RevealOnScrollSpan>
                  <RevealOnScrollSpan>
                    world.
                  </RevealOnScrollSpan>
            </p>
            <div className="absolute mx-5 mt-10 md:mt-0 lg:mx-0 lg:right-0 top-[350px] md:top-[40%] lg:top-1/2 max-w-[500px] text-sm md:text-base leading-relaxed font-asty">
              <RevealOnScrollSpan>
                I&apos;m Dot Lung. Dot stands for Dorothy, and Lung means “Dragon”
              </RevealOnScrollSpan>
              <RevealOnScrollSpan>
                in Mandarin. After growing up in Los Angeles, I traveled the world
              </RevealOnScrollSpan>
              <RevealOnScrollSpan>
                working on a variety of campaigns until I found a home in
              </RevealOnScrollSpan>
              <RevealOnScrollSpan>
                Barcelona. Since 2011, Barcelona has inspired me to be the
              </RevealOnScrollSpan>
              <RevealOnScrollSpan>
                magical and fierce being I am today. I started my social media
              </RevealOnScrollSpan>
              <RevealOnScrollSpan>
                career formally at OFFF Festival, where I was in charge of the
              </RevealOnScrollSpan>
              <RevealOnScrollSpan>
                online community and audience engagement. We developed their
              </RevealOnScrollSpan>
              <RevealOnScrollSpan>
                first steps of an authentic, organic messages which continues to
              </RevealOnScrollSpan>
              <RevealOnScrollSpan>
                this day.
              </RevealOnScrollSpan>
            </div>
        </div>
      </div>
          
      <RevealOnScroll>
        <SectionHeader title="PROJECTS" />
      </RevealOnScroll>

      <div className="flex mx-5 lg:justify-center mt-16 overflow-hidden">
        <div className="text-white text-2xl">
          {items.map((item, index) => (
            <div key={index} className="mb-4 relative">
              <RevealOnScroll>
                <span className="block pb-2 cursor-pointer lg:hover:text-secondary font-caslon">{item.title}</span>
                <div
                  className="border-b-[1px] border-secondary absolute top-4"
                  style={{
                    width: item.width,
                  }}
                ></div>
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </div>

      <RevealOnScroll>
      <DotSection
        topRightText="LEARN WITH DOT"
        topRightLink={PathNames.learnWithDot}
        bottomLeftText="TRAVEL & EAT WITH DOT"
        bottomLeftLink={PathNames.travelEat}
      />
      </RevealOnScroll>

    </div>
  );
};

export default WorkWithDot;
