import React from "react";

const LogoCarousel = ({ logos, speed = 30 }) => {
  return (
    <div className="overflow-hidden bg-white py-2 md:py-6 flex justify-center items-center relative w-full">
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .logos-slide {
          display: inline-flex;
          align-items: center;
          animation: slide ${speed}s linear infinite;
          animation-iteration-count: infinite;
          width: max-content;
        }
        
        .logos-slide:hover {
          animation-play-state: paused;
        }

        .logos-container::before,
        .logos-container::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50px;
          background: linear-gradient(to right, white 0%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }

        .logos-container::before {
          left: 0;
          transform: rotate(180deg);
        }

        .logos-container::after {
          right: 0;
        }
      `}</style>
      
      <div className="logos-container relative w-full overflow-hidden">
        <div className="logos-slide">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo}-${index}`} 
              className={`flex items-center justify-center 
                mx-2 md:mx-4 lg:mx-8 inline-block
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
    </div>
  );
};

export default LogoCarousel;
