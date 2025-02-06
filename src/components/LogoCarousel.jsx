import React from "react";

const LogoCarousel = ({ logos, speed = 30 }) => {
  // Helper function to determine logo size
  const getLogoSize = (logo) => {
    // Largest logos
    if (['Bells_Healthcare', 'Dr._Reddys_Laboratories_y', 'CVS'].includes(logo)) {
      return {
        container: 'w-32 md:w-48 lg:w-64 h-16 md:h-28 lg:h-32',
        image: 'max-h-full max-w-full object-contain scale-110'
      };
    }
    
    // Medium-large logos (further reduced)
    if (['Galderma', 'walgreen_1'].includes(logo)) {
      return {
        container: 'w-24 md:w-36 lg:w-48 h-12 md:h-20 lg:h-24',
        image: 'max-h-full max-w-full object-contain scale-100'
      };
    }
    
    // Default size for other logos
    return {
      container: 'w-16 md:w-24 lg:w-32 h-10 md:h-16 lg:h-16',
      image: 'max-h-full max-w-full object-contain'
    };
  };

  return (
    <div className="overflow-hidden bg-white py-1 md:py-4 flex justify-center items-center relative w-full">
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
      `}</style>
      
      <div className="logos-container relative w-full overflow-hidden">
        <div className="logos-slide">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => {
            const sizes = getLogoSize(logo);
            
            return (
              <div 
                key={`${logo}-${index}`} 
                className={`flex items-center justify-center mx-1 md:mx-3 lg:mx-6 inline-block ${sizes.container}`}
              >
                <img
                  src={`/assets/${logo}.png`}
                  alt={`${logo} Logo`}
                  className={`${sizes.image} hover:scale-120 transition-transform duration-300`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
