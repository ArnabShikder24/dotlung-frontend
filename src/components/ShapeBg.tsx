import Image from "next/image";
import React from "react";
import shape from "../../public/assets/images/bg-sphere.png";

const ShapeBg = () => {
  return (
    <div>
      <Image
          src={shape}
          width={30}
          alt="shape"
          className="fixed right-[20%] top-[90%] -z-50"
        />
      <Image
          src={shape}
          width={30}
          alt="shape"
          className="fixed right-[15%] top-[20%] -z-50"
        />
      <Image
          src={shape}
          width={30}
          alt="shape"
          className="fixed left-[30%] top-[90%] -z-50"
        />
    </div>
  );
};

export default ShapeBg;