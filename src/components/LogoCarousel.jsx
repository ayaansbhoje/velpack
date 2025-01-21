import React from "react";

const LogoCarousel = ({ logos, speed = 60 }) => {
  return (
    <div className="overflow-hidden bg-white py-4 md:py-6">
      <div
        className="logos-slide inline-block whitespace-nowrap"
        style={{ animation: `slide ${speed}s linear infinite` }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={`${logo}-${index}`}
            src={`/assets/${logo}.png`}
            alt={`${logo} Logo`}
            className="inline-block h-8 md:h-14 mx-4 md:mx-10 object-contain hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
