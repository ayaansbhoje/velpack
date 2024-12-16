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
    { top: "32%", left: "24%" },
    { top: "30%", left: "65%" },
    { top: "50%", left: "50%" },
    { top: "71%", left: "75%" },
    { top: "65%", left: "35%" },
    { top: "43%", left: "63%" },
    { top: "70%", left: "52%" },
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
        }, index * 1000);
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
        <img src="/assets/map_full[1].png" alt="World Map" className="w-[80%] mx-auto" />
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
            }}
          >
            <span role="img" aria-label="tick">
              <img
                src="/assets/tick.png"
                alt="tick"
                className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
              />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Footprint;
