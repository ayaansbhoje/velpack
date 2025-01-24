import React from "react";

const LogoCarousel = ({ logos, speed = 50 }) => {
  return (
    <div className="overflow-hidden bg-white py-2 md:py-6 flex justify-center items-center">
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
          align-items: center;
          animation: slide ${speed}s linear infinite;
          width: max-content;
        }
        
        .logos-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="logos-slide">
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div 
            key={`${logo}-${index}`} 
            className={`flex items-center justify-center 
              mx-2 md:mx-4 lg:mx-8 
              ${['Bells_Healthcare', 'CVS'].includes(logo) 
                ? 'w-24 md:w-40 lg:w-56 h-14 md:h-24 lg:h-28' 
                : 'w-16 md:w-24 lg:w-32 h-10 md:h-16 lg:h-16'
              }`}
          >
            <img
              src={`/assets/${logo}.png`}
              alt={`${logo} Logo`}
              className="max-h-full max-w-full object-contain 
                hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
