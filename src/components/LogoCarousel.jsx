import React from "react";

const LogoCarousel = ({ logos, speed = 30 }) => {
  return (
    <div className="overflow-hidden bg-white py-4 md:py-6">
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .logos-slide {
          display: inline-flex;
          animation: slide ${speed}s linear infinite;
          width: max-content;
        }
        
        .logos-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="logos-slide">
        {[...logos, ...logos].map((logo, index) => (
          <div 
            key={`${logo}-${index}`} 
            className="flex items-center justify-center mx-4 md:mx-8"
            style={{ width: '120px', height: '60px' }}
          >
            <img
              src={`/assets/${logo}.png`}
              alt={`${logo} Logo`}
              className="max-h-full max-w-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
