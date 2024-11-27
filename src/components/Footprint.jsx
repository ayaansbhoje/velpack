import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const tickVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const Footprint = () => {
  const [visibleTicks, setVisibleTicks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const tickPositions = [
    { top: "35%", left: "24%", size: "2.5rem" },
    { top: "33%", left: "64%", size: "2rem" },
    { top: "52%", left: "50%", size: "2.5rem" },
    { top: "70%", left: "74%", size: "2rem" },
    { top: "64%", left: "36%", size: "2.5rem" },
    { top: "46%", left: "62%", size: "2rem" },
    { top: "69%", left: "53%", size: "2rem" },
    { top: "50%", left: "21%", size: "2rem" },
    { top: "59%", left: "67%", size: "2.5rem" },
    { top: "41%", left: "41%", size: "2rem" },
    { top: "70%", left: "43%", size: "2.5rem" },
    { top: "57%", left: "32%", size: "2rem" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      tickPositions.forEach((_, index) => {
        setTimeout(() => {
          setVisibleTicks((prev) => [...prev, index]);
        }, index * 800);
      });
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="relative my-10">
      <motion.h2
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { delay: 0.3 } },
        }}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        className="text-4xl font-bold text-center mb-4"
      >
        OUR FOOTPRINT
        <div className="w-16 h-1 bg-white mb-6 mx-auto mt-3"></div>
      </motion.h2>
      <div className="relative">
        <img src="/assets/map_full[1].png" alt="World Map" className="w-full" />
        {visibleTicks.map((index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={tickVariants}
            transition={{ duration: 0.5 }}
            className="absolute"
            style={{
              top: tickPositions[index].top,
              left: tickPositions[index].left,
              fontSize: tickPositions[index].size,
            }}
          >
            <span role="img" aria-label="tick" className="text-red-500">
              <img src="/assets/tick.png" alt="tick" />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Footprint;
