"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dot from "../../public/Dotlungimages/Dotlungimages/dragon-Dot.png";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center font-gilroy">
        <div>
          <Image
            className="absolute top-20"
            src={dot}
            style={{ maxWidth: "1000px" }}
            alt="Dotlung"
          />
        </div>
        <div
          className="flex justify-center items-center h-full w-4/12 absolute"
          style={{
            width: "28%",
            height: "auto",
            right: "28rem",
            top: "26rem",
          }}
        >
          <div className="z-10 text-left max-w-2xl px-6 absolute ">
            <h1 className="text-5xl font-bold uppercase ">
              Hey, I am Dot. Mother of social media dragons
            </h1>
            <p style={{ marginTop: "2rem",marginBottom:"3rem" }} className=" font-caslon">
              <span className="text-secondary">
                Hatching new eggs and startups
              </span>{" "}
              nurturing and growing them using my methodology into fully fledged
              digital dragons with
              <span className="text-secondary">
                {" "}
                strong online identities & communities
              </span>
            </p>
            <p className="mt-6  py-3 text-white font-light font-gilroy" style={{fontSize:"12px"}}>
              Comm&apos;on Chase the Dragon!
              <span
                style={{
                  display: "block",
                  position: "absolute",
                  bottom: 20,
                  right: 170,
                  width: "20%",
                  height: "0.5%",
                  backgroundColor: "#f14336",
                }}
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
