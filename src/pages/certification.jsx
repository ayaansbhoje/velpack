import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const CertificationPage = () => {
    const certifications = [
        {
            image: "/assets/iso-certification.jpg",
            title: "ISO 9001:2015 Certification",
            points: [
                "Demonstrates commitment to quality management",
                "Ensures consistent product and service quality",
                "Focuses on customer satisfaction and continuous improvement",
                "Internationally recognized standard of excellence"
            ]
        },
        {
            image: "/assets/fsc-certification.jpg",
            title: "FSC Certified Packaging",
            points: [
                "Responsible forest management certification",
                "Ensures sustainable sourcing of paper materials",
                "Supports environmental conservation efforts",
                "Promotes responsible use of forest resources"
            ]
        },
        {
            image: "/assets/green-certification.jpg",
            title: "Environmental Sustainability Certification",
            points: [
                "Commitment to reducing carbon footprint",
                "Innovative eco-friendly packaging solutions",
                "Minimizes waste and environmental impact",
                "Supports circular economy principles"
            ]
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
                        <ul className="space-y-3">
                            {cert.points.map((point, pointIndex) => (
                                <li 
                                    key={pointIndex} 
                                    className="flex items-start"
                                >
                                    <svg 
                                        className="w-5 h-5 text-[#e81d2d] mr-3 mt-1 flex-shrink-0" 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                    >
                                        <path 
                                            fillRule="evenodd" 
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                            clipRule="evenodd" 
                                        />
                                    </svg>
                                    <span className="text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default CertificationPage;
