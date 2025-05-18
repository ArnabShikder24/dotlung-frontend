import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect } from "react";

type RevealOnScrollSpanProps = {
  children: ReactNode;
  className?: string;
};

const RevealOnScrollSpan = ({ children, className = "" }: RevealOnScrollSpanProps) => {
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
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "backInOut", delay: 0.1 },
        },
      }}
      className={className}
    >
      {children}{" "}
    </motion.span>
  );
};

export default RevealOnScrollSpan;
