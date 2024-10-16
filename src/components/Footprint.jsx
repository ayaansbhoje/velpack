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

  // Intersection Observer to trigger the animation when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // 20% of the section needs to be in view
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

  // Trigger the ticks animation sequentially when the section is visible
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
      </motion.h2>

      <div className="relative">
        <img src="/assets/world_map.png" alt="World Map" className="w-[80%] mx-auto" />

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
            <span role="img" aria-label="tick" className="text-red-500 text-4xl">
              <img src="/assets/tick.png" alt="tick" />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Footprint;
