import React from "react";

const LogoCarousel = ({ logos, speed = 30 }) => {
  return (
    <div className="overflow-hidden bg-white py-4 flex justify-center items-center relative w-full">
      <div className="relative w-full overflow-hidden">
        {/* First slide */}
        <div className="inline-flex items-center animate-scroll hover:pause">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo}-${index}`} 
              className="flex items-center justify-center mx-4 lg:mx-8 
                        w-20 h-12 md:w-32 md:h-16 lg:w-40 lg:h-20"
            >
              <img
                src={`/assets/${logo}.png`}
                alt={`${logo} Logo`}
                className="max-h-full max-w-full object-contain 
                          hover:scale-105 transition-transform duration-300 
                          p-2"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll ${speed}s linear infinite;
          width: max-content;
        }

        .hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;
