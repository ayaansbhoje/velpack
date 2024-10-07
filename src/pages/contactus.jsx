import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar'
import Footer from '../components/footer';


const ContactPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Contact Form Section */}
      <div className="bg-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">We Would Love to Hear from You.</h1>
          
          <form className="max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2">Your name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block mb-2">Mobile no.</label>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full p-2 rounded text-gray-800"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2">Email address</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded text-gray-800"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="query" className="block mb-2">Your query</label>
              <textarea
                id="query"
                rows={6}
                className="w-full p-2 rounded text-gray-800"
              ></textarea>
            </div>
            
            <div className="text-right">
              <button
                type="submit"
                className="bg-white text-red-700 px-8 py-2 rounded hover:bg-gray-100 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Map and Contact Details Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Map */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 w-full h-64 rounded-lg">
              {/* Replace this div with actual Google Map implementation */}
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                Google map location
              </div>
            </div>
          </div>
          
          {/* Contact Details */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Velpack Pvt. Ltd.</h2>
            <p className="text-gray-600">
              A-233, TTC Area, MIDC,<br />
              Mahape,<br />
              Navi Mumbai 400 710, India
            </p>
            <p className="text-gray-600">
              <a href="mailto:info@velpack.com" className="hover:text-red-700">
                info@velpack.com
              </a>
            </p>
            <p className="text-gray-600">
              <a href="tel:+912227781277" className="hover:text-red-700">
                +91 22 2778 1277
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
