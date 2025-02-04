import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar'
import Footer from '../components/footer';

const ContactusPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Contact Form Section */}
      <div className="bg-[#b7162a] text-white py-16" id='contact'>
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl font-bold mb-8 ">We Would Love to Hear from You.</h1>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Your name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 rounded bg-transparent border border-white placeholder-white text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block mb-2">Mobile no.</label>
                  <input
                    type="tel"
                    id="mobile"
                    className="w-full p-2 rounded bg-transparent border border-white placeholder-white text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2">Email address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded bg-transparent border border-white placeholder-white text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="query" className="block mb-2">Your query</label>
                <textarea
                  id="query"
                  rows={6}
                  className="w-full p-2 rounded bg-transparent border border-white placeholder-white text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="border border-white text-white px-8 py-2 rounded hover:bg-white hover:text-red-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map and Contact Details Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Map */}
          <div className="w-full md:w-1/2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.616790517668!2d72.99509761491719!3d19.086388987078534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0e936892ec7%3A0x69bc6eb3f6a36a46!2sVELPACK%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1707026849727!5m2!1sen!2sin"
              width="100%"
              height="256"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
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

export default ContactusPage;
