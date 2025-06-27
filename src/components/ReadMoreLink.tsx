import React from "react";
import RippleButton from "./RippleButton";
import NavigationArrow from "./NavigationArrow";

interface ReadMoreLinkProps {
  href?: string;
}

const ReadMoreLink: React.FC<ReadMoreLinkProps> = ({ href = "#" }) => {
  return (
    <RippleButton
      href={href}
      className="group text-[0.75rem] flex items-center gap-2 font-gilroy mt-3 font-bold"
    >
      READ MORE
      <NavigationArrow
        direction="right"
        className="mr-2 transform transition-transform duration-300 group-hover:-translate-x-1 group-hover:fill-[#fff]"
      />
    </RippleButton>
  );
};

export default ReadMoreLink;
