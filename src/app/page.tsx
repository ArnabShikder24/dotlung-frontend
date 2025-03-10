import Image from "next/image";
import Link from "next/link";
import React from "react";
import dot from "../../public/Dotlungimages/Dotlungimages/dragon-Dot.png";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="lg:flex items-center font-gilroy">
        <div>
          <Image
            className="w-[1000px]"
            src={dot}
            alt="Dotlung"
          />
        </div>
        <div
          className="h-auto w-[390px] mx-auto lg:-ml-[300px]"
        >
          <div className="z-10 text-left max-w-2xl px-6">
            <h1 className="text-5xl font-bold uppercase">
              Hey, I am Dot. Mother of social media dragons
            </h1>
            <p className="font-caslon mt-8 mb-12">
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
                className="block w-24 h-[2.5px] bg-red-600"
              ></span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-5 w-full">
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
