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

      <div className="relative w-full aspect-[16/9] max-h-[600px]">
         
          <div className="absolute inset-0">
            
            <div className="relative w-full h-full">
              <img 
                src="/assets/Aboutus.JPG"
                alt="Manufacturing equipment" 
                className="absolute w-full h-full object-cover"
              />
              
           
              <div className="absolute top-0 right-0 w-1/5 h-full bg-red-700" />
              
              <div className="absolute bottom-8 right-1/4 transform translate-x-1/2 w-1/4 bg-stone-300 p-8  shadow-lg z-10">
                <p className="text-gray-800">
                  Founded in 1956, Velpack has grown from a small family business into a global supplier of premium paper-based packaging. Our state-of-the-art facility in Navi Mumbai spans 42,000 sq. ft., enabling us to produce millions of cartons and inserts daily.
                </p>
              </div>
            </div>
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
  
