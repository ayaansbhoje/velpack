import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar'
import Footer from '../components/footer';


const ServicesPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <img 
          src="/assets/services-hero.jpg"
          alt="Our Services at Velpack" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">OUR SERVICES</h1>
        </div>
      </div>

      {/* White space gap */}
      <div className="h-16"></div>

      {/* Services Section */}
      <div className="bg-[#b7162a] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side: Text and CTA */}
            <div className="w-full md:w-1/2 text-white pr-0 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Paper-Packing Done Differently</h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper 
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor 
                in hendrerit in vulputate velit esse molestie consequat.
              </p>
              <button className="bg-transparent border-2 border-white text-white py-2 px-6 -ml-10 rounded-md hover:bg-white hover:text-[#b7162a] transition duration-300 self-start">
                Contact Us
              </button>
            </div>
            
            {/* Right side: Image */}
            <div className="w-full md:w-1/2">
              <img 
                src="/assets/packing-samples.jpg"
                alt="Paper Packing Samples" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
