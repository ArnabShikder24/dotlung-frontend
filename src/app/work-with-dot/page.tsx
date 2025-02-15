import Image from "next/image";
import React from "react";
import DotImage from "../../assets/images/work-with-Dot.png";
import ShapeBg from "../../components/ShapeBg";

const WorkWithDot = () => {
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
    </div>
  );
};

export default WorkWithDot;