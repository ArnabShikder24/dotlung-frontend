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
            className="w-full scale-[1.4] md:scale-100 md:w-[1000px]"
            src={dot}
            alt="Dotlung"
          />
        </div>
        <div
          className="h-auto lg:w-[390px] mx-auto lg:-ml-[300px] z-50"
        >
          <div className="z-10 text-left max-w-2xl px-6">
            <h1 className="text-[2rem] lg:text-5xl font-bold uppercase leading-[32px]">
              Hey, I am Dot. Mother of social media dragons
            </h1>
            <p className="font-caslon mt-8 mb-6">
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
            <p className="flex items-center gap-6 mt-6 py-3 text-white font-light font-gilroy" style={{fontSize:"12px"}}>
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
