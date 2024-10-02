import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { fadeIn } from './variant'

const AboutUsPage = () => {
  const [activeButton, setActiveButton] = useState('sustainability');
  
  const contentData = {
    sustainability: {
      image: "/api/placeholder/1200/500",
      text: "At Velpack, we prioritize environmental protection and employee safety, adhering to rigorous standards and conducting regular audits."
    },
    environment: {
      image: "/api/placeholder/1200/500",
      text: "Our commitment to environmental protection includes sustainable practices and eco-friendly packaging solutions."
    },
    health: {
      image: "/api/placeholder/1200/500",
      text: "Employee health and safety is paramount. We maintain strict protocols and regular training programs."
    },
    audits: {
      image: "/api/placeholder/1200/500",
      text: "Regular audits ensure compliance with international standards and continuous improvement in our processes."
    }
  };

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* First section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold mb-2">
            VELPACK'S JOURNEY:
          </h1>
          <h2 className="text-3xl font-bold text-red-500">
            Wrapping Responsibly since 1956
          </h2>
        </div>
        
        <div className="relative w-full aspect-[16/9] max-h-[600px]">
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <img 
                src="/assets/Aboutus.JPG"
                alt="Manufacturing equipment" 
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 w-1/5 h-full bg-red-700" />
              <div className="absolute bottom-8 right-1/4 transform translate-x-1/2 w-1/4 bg-stone-300 p-8 shadow-lg z-10">
                <p className="text-gray-800">
                  Founded in 1956, Velpack has grown from a small family business into a global supplier of premium paper-based packaging. Our state-of-the-art facility in Navi Mumbai spans 42,000 sq. ft., enabling us to produce millions of cartons and inserts daily.
                </p>
              </div>
            </div>
          </div>
        </div>

     
        <div className="h-24"></div>

        <div className="bg-red-700 py-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-4">OUR TEAM</h2>
          <p className="text-center mb-12">
            Combining seasoned expertise with dynamic innovation, our leadership team drives Velpack's success.
          </p>
          
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-red-600 font-bold mb-1">Bernie Phillips</h3>
                <p className="text-red-600 mb-4">Director</p>
                <p className="text-sm text-gray-700">
                  B.A. Economics & Global Studies - University of Economics, USA
                </p>
                <p className="text-sm text-gray-700">
                  Diploma in Packaging - Indian Institute of Packaging, Mumbai.
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-12">
            As a family-owned business, we prioritize integrity, innovation, and excellence in all we do. Our commitment to quality and customer satisfaction sets us apart.
          </p>
        </div>

        
        <div className="h-16"></div>

       
        <div className="relative">
          
          <div className="bg-black w-full py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
              <button 
                className={`px-4 py-2 ${activeButton === 'sustainability' ? 'text-red-500 bg-white' : 'text-white'}`}
                onClick={() => setActiveButton('sustainability')}
              >
                Sustainability
              </button>
              <button 
                className={`px-4 py-2 ${activeButton === 'environment' ? 'text-red-500 bg-white' : 'text-white'}`}
                onClick={() => setActiveButton('environment')}
              >
                Environment Protection
              </button>
              <button 
                className={`px-4 py-2 ${activeButton === 'health' ? 'text-red-500 bg-white' : 'text-white'}`}
                onClick={() => setActiveButton('health')}
              >
                Employee Health and Safety
              </button>
              <button 
                className={`px-4 py-2 ${activeButton === 'audits' ? 'text-red-500 bg-white' : 'text-white'}`}
                onClick={() => setActiveButton('audits')}
              >
                Regular Audits
              </button>
            </div>
          </div>
          
          <div className="relative w-full aspect-[16/9] max-h-[500px]">
            <img 
              src={contentData[activeButton].image}
              alt={`${activeButton} illustration`}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-8 right-8 w-1/3 bg-red-700 p-6 shadow-lg">
              <p className="text-white">
                {contentData[activeButton].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
