import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const CertificationPage = () => {


    const certifications = [
        {
            image: "/assets/iso-9001-logo.svg",
            title: "ISO 9001: 2015",
            description: "Widely accepted standard for quality management systems."
        },
        {
            image: "/assets/ps-9000-logo.svg",
            title: "PS 9000: 2016",
            description: "GMP framework for best practices in pharmaceutical packaging."
        },
        {
            image: "/assets/brc-global-standard-logo.svg",
            title: "BRC GLOBAL STANDARD",
            description: "Recognized framework for managing product quality and operational criteria."
        },
        {
            image: "/assets/sedex-logo.svg",
            title: "SEDEX",
            description: "Ethical and responsible business practices certification."
        },
        {
            image: "/assets/psci-logo.svg",
            title: "PSCI",
            description: "A coalition of healthcare companies committed to excellence in safety, environmental, and social outcomes."
        },
        {
            image: "/assets/gmi-logo.svg",
            title: "GMI",
            description: "A certification that holds packaging suppliers accountable to established brand owner standards."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.h1 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center mb-12 text-[#e81d2d]"
            >
                Our Certifications
            </motion.h1>
            
            {certifications.map((cert, index) => (
                <motion.div 
                    key={cert.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`flex items-center mb-12 border-2 border-[#e81d2d] rounded-lg overflow-hidden bg-white bg-opacity-10 ${
                        index % 2 === 1 ? 'flex-row-reverse' : ''
                    }`}
                >
                    {/* Image Section */}
                    <div className="w-1/2 p-4">
                        <img 
                            src={cert.image} 
                            alt={cert.title} 
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    
                    {/* Text Section */}
                    <div className="w-1/2 p-8">
                        <h2 className="text-3xl font-bold mb-6 text-[#e81d2d]">
                            {cert.title}
                        </h2>
                        <p className="text-gray-700">{cert.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default CertificationPage;
