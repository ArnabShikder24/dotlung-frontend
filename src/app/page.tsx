import Image from "next/image";
import Link from "next/link";
import React from "react";
import dot from "../../public/Dotlungimages/Dotlungimages/dragon-Dot.png";

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
          className="h-auto lg:w-[465px] mx-auto lg:mt-16 lg:-ml-[200px]"
        >
          <div className="z-10 text-left max-w-2xl px-6">
            <h1 className="text-[2rem] lg:text-[3.5rem] font-bold uppercase leading-[33px] lg:leading-[55px] -z-10">
              Hey, I am Dot. Mother of social media dragons
            </h1>
            <p className="font-caslon lg:text-2xl mt-6 lg:mt-8">
              <p className="text-secondary italic">
                Hatching new eggs and startups
              </p>{" "}
              nurturing and <br /> growing them using my methodology into fully <br /> fledged
              digital dragons with
              <p className="text-secondary italic">
                {" "}
                strong online identities & communities
              </p>
            </p>
            <p className="flex uppercase items-center gap-6 mt-2 lg:mt-10 py-3 text-white font-light font-gilroy" style={{fontSize:"12px"}}>
              Comm&apos;on Chase the Dragon!
              <span
                className="block w-24 h-[1.5px] bg-red-600"
              ></span>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute left-0 bottom-4 w-full">
        <div className="flex items-center justify-between px-5">
          <Link href="/blog" className="font-bold text-sm hover:text-indigo-200">
            BLOG
          </Link>
          
          <Link href="/live" className="text-xs font-semibold hover:text-indigo-200">
            LIVE NOW!
          </Link>
        </div>
      </div>
    </div>
  );
}
