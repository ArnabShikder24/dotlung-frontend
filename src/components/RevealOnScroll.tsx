import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
};

const RevealOnScroll = ({ children, className = "" }: RevealOnScrollProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
