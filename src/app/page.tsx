"use client";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <img src="/assets/svgs/SVG/Asset1.svg" style={{ width: "33rem"}} />
      </div>
      <div
        className="flex justify-center items-center h-full w-4/12"
        style={{ width: "25%", height: "auto" }}
      >
        <div className=" z-10 text-left max-w-3xl px-6">
          <h1 className="text-5xl font-bold uppercase ">
            Hey, I am Dot.
            <br />
            Mother of Social Media Dragons
          </h1>
          <p style={{ marginTop: "2rem" }}>
            <span className="text-secondary">
              Hatching new eggs and startups
            </span>
            {" "} nurturing and growing them using my methodology into fully fledged
            digital dragons with
            <span className="text-secondary">
            {' '}  strong online identities & communities
            </span>
          </p>
          <button className="mt-6  py-3 text-white font-bold">
            Comm&apos;on Chase the Dragon!
          </button>
        </div>
      </div>
    </div>
  );
}
