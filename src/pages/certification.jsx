import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const CertificationPage = () => {
  const certifications = [
    {
      image: "/assets/ISO_9001.png",
      title: "ISO 9001: 2015",
      description: "Widely accepted standard for quality management systems."
    },
    {
      image: "/assets/PS_9000.png",
      title: "PS 9000: 2016",
      description: "GMP framework for best practices in pharmaceutical packaging."
    },
    {
      image: "/assets/BRC_Global_Standard.png",
      title: "BRC GLOBAL STANDARD",
      description: "Recognized framework for managing product quality and operational criteria."
    },
    {
      image: "/assets/sedex.png",
      title: "SEDEX",
      description: "Ethical and responsible business practices certification."
    },
    {
      image: "/assets/PSCI.png",
      title: "PSCI",
      description: "A coalition of healthcare companies committed to excellence in safety, environmental, and social outcomes."
    },
    {
      image: "/assets/GMI.png",
      title: "GMI",
      description: "A certification that holds packaging suppliers accountable to established brand owner standards."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-[#e81d2d]"
        >
          Our Certifications
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 border-2 border-[#e81d2d] rounded-lg overflow-hidden"
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-[#e81d2d]">
                  {cert.title}
                </h2>
                <p className="text-gray-700">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CertificationPage;
