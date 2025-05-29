"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseFollower = () => {
  const [isClicking, setIsClicking] = useState(false);

  // Raw mouse position (updates instantly)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothed values for trailing effect
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="hidden lg:block fixed w-[10px] h-[10px] bg-secondary rounded-full pointer-events-none z-50"
      style={{
        x: smoothX,
        y: smoothY,
        scale: isClicking ? 1.4 : 1,
      }}
    />
  );
};

export default MouseFollower;
