import Link from "next/link";
import React from "react";

const DotSection = ({
  topRightText = 'WORK WITH DOT',
  topRightLink = '#',
  bottomLeftText = 'TRAVEL & EAT WITH DOT',
  bottomLeftLink = '#',
}) => {
  return (
    <div className="flex flex-col items-center justify-center md:hidden my-24 font-gilroy">
      <div className="grid grid-cols-3 grid-rows-2 w-[350px] h-[120px] border border-white relative">

        {/* Top Left Triangle */}
        <div className="border-r border-white col-span-1 row-span-1 relative flex items-start justify-start h-full
            before:content-[''] before:absolute before:w-[111%] before:h-[1px] before:bg-white before:rotate-[-27.5deg] before:top-1/2 before:left-[-5%]" />

        {/* Top Right - Customizable Link */}
        <Link
          href={topRightLink}
          className="flex items-center justify-center px-3 text-[0.75rem] text-white font-bold col-span-2 row-span-1 relative z-10 hover:underline"
        >
          {topRightText.split(' ').map((word, i) => (
            <span key={i} className={i === 2 ? 'block' : 'mr-2'}>
              {word}
            </span>
          ))}
          <span className="text-secondary ml-2">&#8594;</span>
        </Link>

        {/* Bottom Left - Customizable Link */}
        <Link
          href={bottomLeftLink}
          className="border-t border-r border-white text-[0.75rem] col-span-2 row-span-1 relative flex items-start justify-start hover:underline"
        >
          <div className="flex items-center justify-center px-3 text-white font-bold relative z-10 text-left h-full w-full">
            <span className="text-secondary">&#8592;</span>
            <span className="ml-2 block">{bottomLeftText}</span>
          </div>
        </Link>

        {/* Bottom Right Triangle */}
        <div className="border-t border-white col-span-1 row-span-1 relative flex items-end justify-end h-full
           before:content-[''] before:absolute before:w-[111%] before:h-[1px] before:bg-white before:rotate-[26.5deg] before:top-1/2 before:left-[-5%]" />
      </div>
    </div>
  );
};

export default DotSection;