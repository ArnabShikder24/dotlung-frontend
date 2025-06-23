"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dot from "../../public/assets/images/dragon-Dot.png";
import RippleButton from "../components/RippleButton";
import { PathNames } from "../routes/index.route";
import AnimatedLine from "../components/AnimatedLine";

export default function Home() {
  return (
    <div className="container mx-auto mt-10 md:mt-0 overflow-hidden h-[90vh] lg:h-auto">
      <div className="flex flex-col justify-between lg:justify-start lg:flex-row items-center font-gilroy h-[100%] lg:h-auto">
        <div className="flex-1 flex justify-center items-center lg:flex-none">
          <Image
            className="w-full scale-[1.4] md:scale-100 md:w-[1000px] -z-20"
            src={dot}
            alt="Dotlung"
          />
        </div>
        <div
          className="h-auto lg:w-[510px] mx-auto lg:mt-16 lg:-ml-[200px]"
        >
          <div className="z-10 text-left max-w-2xl px-6">
            <h1 className="text-[2rem] lg:text-[3.5rem] font-bold uppercase leading-[33px] lg:leading-[55px] -z-10">
              the Mother of
              Social
              Dragons,
              breaker of
              algorithms.
            </h1>
            <p className="font-caslon lg:text-2xl mt-6 lg:mt-8" style={{lineHeight:"1.5"}}>
              <span className="text-secondary italic">
                Hatching new eggs and startups
              </span>{" "}
              nurturing and growing them using my methodology into fully fledged
              digital dragons with
              <span className="text-secondary italic">
                {" "}
                strong online identities & communities
              </span>
            </p>
            <p className="flex uppercase items-center gap-6 mt-2 lg:mt-10 py-3 text-white font-light font-gilroy" style={{fontSize:"12px"}}>
              <RippleButton href={PathNames.about}>COME ON CHASE THE DRAGON</RippleButton>
              {/* <span
                className="block w-24 h-[1px] bg-secondary"
              ></span> */}
              <AnimatedLine />
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute left-0 bottom-4 w-full">
        <div className="flex items-center justify-between px-5">
          {/* <Link href="/blog" className="font-bold text-sm hover:text-indigo-200">
          </Link> */}
            <RippleButton href="/blog" className="font-gilroy text-[0.75rem] text-white hover:text-secondary transition-colors">
              BLOG
            </RippleButton>
          
          <Link target="_blank" href="https://www.domestika.org/es/courses/1102-estrategias-de-instagram-para-desarrollo-de-marcas" className="font-gilroy text-white text-[0.75rem] hover:text-secondary transition-colors relative">
            <div className="w-[10px] h-[10px] rounded-full bg-secondary absolute right-[25px] -top-5 animate-fade-loop" />
            <style jsx>{`
              @keyframes fadeLoop {
                0%, 100% {
                  opacity: 0;
                }
                50% {
                  opacity: 1;
                }
              }

              .animate-fade-loop {
                animation: fadeLoop 2s ease-in-out infinite;
              }
            `}</style>
            LIVE NOW!
          </Link>
        </div>
      </div>
    </div>
  );
}
