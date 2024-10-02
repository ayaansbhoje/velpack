import React from 'react';
import  { useState,useEffect } from 'react';
import {motion} from 'framer-motion';
// import { fadeIn } from './variant'





const AboutUsPage = () => {
  return (
    <>
     {/* <Navbar /> */}

    <div className="bg-white min-h-screen">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold mb-2">
            VELPACKS JOURNEY:
          </h1>
          <h2 className="text-3xl font-bold text-red-500">
            Wrapping Responsibly since 1956
          </h2>
        </div>
        
        {/* First section with image and red box */}
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
        
        {/* Team section */}
        <div className="bg-red-700 py-16 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-white text-4xl font-bold text-center mb-4">OUR TEAM</h2>
            <p className="text-white text-center mb-12">
              Combining seasoned expertise with dynamic innovation, our leadership team drives Velpack's success.
            </p>
            
            {/* Grid for team members */}
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-red-600 font-bold mb-1">Bernie Phillips</h3>
                  <p className="text-red-600 mb-4">Director</p>
                  <p className="text-sm">
                    B.A. Economics & Global Studies - University of Economics, USA
                  </p>
                  <p className="text-sm">
                    Diploma in Packaging - Indian Institute of Packaging, Mumbai.
                  </p>
                </div>
              ))}
            </div>
            
            <p className="text-white text-center mt-12">
              As a family-owned business, we prioritize integrity, innovation, and excellence in all we do. Our commitment to quality and customer satisfaction sets us apart.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


// const App = () => (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <aboutuspage />
      
//     </div>
//   );
  export default AboutUsPage;
  
