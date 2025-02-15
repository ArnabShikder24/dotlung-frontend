/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center font-gilroy">
        <img
          src="/assets/images/bg-sphere.png"
          width={30}
          style={{ left: "30%", top: "90%", }}
          className=" absolute"
        />
        <img
          src="/assets/images/bg-sphere.png"
          width={30}
          style={{ top: "19%", left: "83%" }}
          className=" absolute"
        />
        <img
          src="/assets/images/bg-sphere.png"
          width={30}
          style={{ top: "91%", left: "89%" }}
          className=" absolute"
        />
        <div>
          <img
          className="absolute top-20"
            src="/Dotlungimages/Dotlungimages/dragon-Dot.png"
            style={{ maxWidth: "1000px" }}
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
    </div>
  );
}
