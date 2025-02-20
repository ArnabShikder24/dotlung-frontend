import { motion } from "framer-motion";
import { useState } from "react";

const MagicSection = ({ text1, text2, text3 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  // const items = [
  //   { width: "200%", title: "OFFF" },
  //   { width: "180%", title: "Motionographer" },
  //   { width: "200%", title: "F5" },
  //   { width: "170%", title: "Sonar+D" },
  //   { width: "180%", title: "DDD" },
  //   { width: "200%", title: "Ladies Wine Design" },
  //   { width: "170%", title: "Catalunya Cannabis" },
  //   { width: "160%", title: "360VR.Barcelona" },
  // ];
  return (
    <div className="flex items-center justify-center">
      <div
        className="relative h-screen w-[1000px] flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="absolute w-[500px] h-[500px] bg-[#e74c3c] rounded-full"
          animate={{
            x: mousePosition.x / 10 - 50,
            y: mousePosition.y / 10 - 50,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        />

        <div className="absolute left-10 top-1/4 max-w-md font-caslon">
          <p className="text-2xl italic text-secondary">{text1}</p>
          <p className="text-2xl mt-2">{text2}</p>
        </div>

        <div className="absolute right-10 top-1/2 max-w-sm">
          <p className="text-sm leading-relaxed font-asty">{text3}</p>
        </div>
      </div>
    </div>
  );
};

export default MagicSection;
