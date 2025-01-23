import React, { useRef, useEffect, useState } from 'react';

const LogoCarousel = ({ logos, speed = 30 }) => {
  const [duplicatedLogos, setDuplicatedLogos] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Duplicate logos to create a seamless loop
    setDuplicatedLogos([...logos, ...logos]);
  }, [logos]);

  useEffect(() => {
    if (carouselRef.current) {
      // Get the scroll width of the carousel element
      const scrollWidth = carouselRef.current.scrollWidth;
      const containerWidth = carouselRef.current.offsetWidth;

      // Set the animation duration based on the scroll width and container width
      carouselRef.current.style.animationDuration = `${(scrollWidth / containerWidth) * speed}s`;
    }
  }, [speed, duplicatedLogos]);

  return (
    <div className="overflow-hidden bg-white py-2 md:py-6 flex justify-center items-center">
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        
        .logos-slide {
          display: inline-flex;
          align-items: center;
          animation: slide linear infinite;
          width: max-content;
        }
        
        .logos-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div 
        ref={carouselRef}
        className="logos-slide w-full overflow-hidden"
      >
        {duplicatedLogos.map((logo, index) => (
          <div 
            key={`${logo}-${index}`} 
            className={`flex-shrink-0 flex items-center justify-center 
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
