import Image from "next/image";

const HeroBanner = ({ imageSrc, title, description, exploreText }) => {
  return (
    <div className="flex items-end">
      <Image className="w-[980px] bg-transparent" src={imageSrc} alt="Dot Image" />
      <div className="-ml-40">
        <h1 className="text-[80px] w-[70%] font-extrabold font-gilroy leading-[85px]">
          {title}
        </h1>
        <p className="font-caslon text-lg w-[380px] mt-5 mb-14">
          <span className="italic text-secondary">Mythical digital magic.</span>{" "}
          {description}
        </p>
        <p className="font-gilroy text-sm">{exploreText}</p>
        <div className="w-[1px] h-24 bg-secondary ml-6 mt-5" />
      </div>
    </div>
  );
};

export default HeroBanner;