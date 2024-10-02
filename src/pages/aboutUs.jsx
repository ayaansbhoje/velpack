import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { fadeIn } from './variant'

const AboutUsPage = () => {
  const sections = {
    sustainability: {
      image: "/assets/sustain.JPG",
      text: "At Velpack, we prioritize environmental protection and employee safety, adhering to rigorous standards and conducting regular audits.",
      heading: "Sustainability"
    },
    environment: {
      image: "/assets/environment.JPG",
      text: "We implement preventive actions and regular monitoring to avoid environmental damage, including ambient air quality checks, stack gas monitoring, ambient noise level monitoring, and STP water checks.",
      heading: "Environment Protection"
    },
    safety: {
      image: "/assets/safety.JPG",
      text: "Our comprehensive measures ensure the well-being of our employees, fostering a safe and healthy work environment.",
      heading: "Employee Health and Safety"
    },
    audits: {
      image: "/assets/audits.JPG",
      text: "Velpack is independently audited under SMETA criteria by SEDEX and by the Pharmaceutical Supply Chain Initiative (PSCI) for better social, environmental, and economic outcomes.",
      heading: "Regular Audits"
    }
  };

  const [activeSection, setActiveSection] = useState('sustainability');

  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold mb-2">
            VELPACKS JOURNEY:
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
                <p className="text-gray-800 text-centre">
                  Founded in 1956, Velpack has grown from a small family business into a global supplier of premium paper-based packaging. Our state-of-the-art facility in Navi Mumbai spans 42,000 sq. ft., enabling us to produce millions of cartons and inserts daily.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-red-700 py-16 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-white text-4xl font-bold text-center mb-4">OUR TEAM</h2>
            <p className="text-white text-center mb-12">
              Combining seasoned expertise with dynamic innovation, our leadership team drives Velpack's success.
            </p>
            
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-red-600 font-bold mb-1">Rohan Phillips</h3>
                  <p className="text-red-600 mb-4">Director</p>
                  <p className="text-sm">
                    B.Sc. Mechanical Engineering - Georgia Institute of Technology, USA.
                  </p>
                  <p className="text-sm">
                    
                  </p>
                </div>
              ))}
            </div>
            
            <p className="text-white text-center mt-12">
              As a family-owned business, we prioritize integrity, innovation, and excellence in all we do. Our commitment to quality and customer satisfaction sets us apart.
            </p>
          </div>
        </div>

        <div className="mt-16">
          
          <div className="bg-black py-4 flex justify-between px-32">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                className={`text-lg font-medium px-4 py-2 ${
                  activeSection === section ? 'text-red-500' : 'text-white'
                } transition-colors duration-300`}
                onClick={() => setActiveSection(section)}
              >
                {sections[section].heading}
              </button>
            ))}
          </div>
          
          <div className="relative w-full h-[400px]">
            <img 
              src={sections[activeSection].image}
              alt={sections[activeSection].heading}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-8 right-8 w-1/3 bg-red-600 p-6 text-centre text-white">
              <p>
                {sections[activeSection].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
