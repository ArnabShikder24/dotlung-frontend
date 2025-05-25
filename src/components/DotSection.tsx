import React from "react";
import RippleButton from "./RippleButton";
import NavigationArrow from "./NavigationArrow";

interface DotSectionProps {
  topRightText?: string;
  topRightLink?: string;
  bottomLeftText?: string;
  bottomLeftLink?: string;
  isShowArrow?: boolean;
}

const DotSection: React.FC<DotSectionProps> = ({
  topRightText = "WORK WITH DOT",
  topRightLink = "#",
  bottomLeftText = "TRAVEL & EAT WITH DOT",
  bottomLeftLink = "#",
  isShowArrow = true,
}) => {
  return (
    <>
      {/* Mobile View (below md) */}
      <div className="flex flex-col items-center justify-center md:hidden my-24 font-gilroy">
        <div className="grid grid-cols-3 grid-rows-2 w-[350px] h-[120px] border border-white relative">
          {/* Top Left Triangle */}
          <div className="border-r border-white col-span-1 row-span-1 relative flex items-start justify-start h-full
              before:content-[''] before:absolute before:w-[111%] before:h-[1px] before:bg-white before:rotate-[-27.5deg] before:top-1/2 before:left-[-5%]" />

          {/* Top Right - Customizable Link */}
          <RippleButton
            href={topRightLink}
            className="flex items-center justify-center px-3 text-[0.75rem] text-white font-bold col-span-2 row-span-1 relative z-10 transition-colors hover:text-secondary"
          >
          {topRightText.split(" ").map((word, i) => (
            <span key={i} className={i === 2 ? "block" : "mr-2"}>
              {word}
            </span>
          ))}
            {/* <ArrowRight size={18} className="ml-2 text-secondary" /> */}
            {
              isShowArrow && <NavigationArrow direction="right" className="ml-2 text-secondary" />
            }
          </RippleButton>

          {/* Bottom Left - Customizable Link */}
          <RippleButton
            href={bottomLeftLink}
            className="border-t border-r border-white text-[0.75rem] col-span-2 row-span-1 relative flex items-start justify-start "
          >
            <div className="flex items-center justify-center px-3 text-white font-bold relative z-10 text-left h-full w-full transition-colors hover:text-secondary">
              {/* <ArrowLeft size={18} className="text-secondary" /> */}
              {
                isShowArrow && <NavigationArrow direction="left" className="text-secondary" />
              }
              <span className="ml-2 block">{bottomLeftText}</span>
            </div>
          </RippleButton>

          {/* Bottom Right Triangle */}
          <div className="border-t border-white col-span-1 row-span-1 relative flex items-end justify-end h-full
            before:content-[''] before:absolute before:w-[111%] before:h-[1px] before:bg-white before:rotate-[26.5deg] before:top-1/2 before:left-[-5%]" />
        </div>
      </div>

      {/* Desktop View (md and up) */}
      <div className="md:flex items-center justify-center font-gilroy mt-32 mb-32 hidden relative">
        <div className="max-w-3xl flex-1 mx-5 lg:mx-20 text-[0.75rem]">
          <div className="relative">
            <div className="border border-white flex w-full">
              {/* Bottom Left Text */}
              <RippleButton
                href={bottomLeftLink}
                className="w-[30%] lg:w-1/4 whitespace-nowrap px-6 py-3 text-white hover:text-secondary transition-colors text-center border-r border-white"
              >
                {bottomLeftText}
              </RippleButton>
              {/* <ArrowLeft size={18} className="mr-2 text-secondary absolute -left-3 top-3" /> */}
              {
                isShowArrow && <NavigationArrow direction="left" className="mr-2 text-secondary absolute -left-4 top-[9px]" />
              }

              {/* Middle Line */}
              <div className="w-[40%] lg:w-1/2 relative">
                <div className="absolute w-full h-[1px] bg-white transform -rotate-[6deg] top-1/2 -translate-y-1/2 z-10"></div>
                <div className="h-full" />
              </div>

              {/* Top Right Text */}
              <div className="relative w-[30%] lg:w-1/4">
                <RippleButton
                  href={topRightLink}
                  className="block px-6 py-3 whitespace-nowrap text-white hover:text-secondary transition-colors text-center border-l border-white"
                >
                  {topRightText}
                </RippleButton>
                {/* <ArrowRight size={18} className="mr-2 text-secondary absolute -right-5 top-3" /> */}
                {
                  isShowArrow && <NavigationArrow direction="right" className="mr-2 text-secondary absolute -right-6 top-[9px]" />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DotSection;
