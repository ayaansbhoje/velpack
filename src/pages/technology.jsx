import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Technologypage = () => {
  const technologies = [
    {
      title: "Prepress Technology",
      image: "/assets/prepress-tech.jpg",
      items: [
        "ESKO Packaging Prepress Software",
        "FFEI CTP",
        "Glunz & Jensen CTP Processor",
        "AOKE Sample Maker",
        "Tec 4 Check Media Check Print Inspection"
      ]
    },
    {
      title: "Cutting-Edge Machinery for Cartons",
      image: "/assets/carton-machinery.jpg",
      items: [
        "Polar Guillotine – 115",
        "Heidelberg XL 75 – 6 Colour + Coater",
        "Komori GL 640 – 6 Color + Coater",
        "Heidelberg UV Varnishing",
        "UCS Spot UV",
        "Heidelberg Foil Stamping (2 nos.)",
        "Bobst Die Cutting – 76E",
        "Bobst Novacut 2.0 – 106",
        "Bobst Novacut 3.0 – 106",
        "Gargi Platen Die Cutting",
        "Suba Stripping and Blanking",
        "Checkmate 50 – Carton Inspection System",
        "Checkmate 25 – Carton Inspection System"
      ]
    },
    {
      title: "Precision Machinery for Inserts",
      image: "/assets/precision-machinery.jpg",
      items: [
        "Polar Guillotine – 115",
        "Polar Guillotine – 76",
        "Komori 2 Colour Perfector – 28",
        "Komori 2 Colour Perfector – 40",
        "Pratham Insert Folder (2 nos.)",
        "GUK Insert Folder",
        "Bobst Expertfold Folder Gluer with Accubraille and Baumer hhs Quality Assurance System (2 nos.)",
        "Bobst Ambition Folder Gluer with Lock Bottom pasting and Baumer hhs Quality Assurance System"
      ]
    },
    {
      title: "Quality Department Equipment",
      image: "/assets/quality-equipment.jpg",
      items: [
        "Bursting Strength Tester",
        "Digital GSM Testing Machine",
        "Electronic Weighing Scale",
        "Digital Thickness Gauge",
        "Rub Resistance Tester",
        "BYK Gloss Meter",
        "B4 Ford Cup Viscometer",
        "Bar Code Reader",
        "Tech4Check with Graphtech Scanner"
      ]
    }
  ];

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <img 
          src="/assets/tech-hero.jpg"
          alt="Technology at Velpack" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-20">
          <h1 className="text-white text-5xl font-bold">OUR TECHNOLOGIES</h1>
        </div>
      </div>

      {/* Added white space gap */}
      <div className="h-18"></div>

      {/* Technologies Section */}
      <div className="bg-[#b7162a] pt-16 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-4xl font-bold text-center mb-2">
            STATE OF THE ART MACHINERY
          </h2>
          <p className="text-white text-center mb-16">
            With state-of-the-art machinery and advanced manufacturing processes, Velpack delivers precision and quality in every product.
          </p>

          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex bg-[#e81d2d] rounded-lg overflow-hidden shadow-lg">
                <div className="w-1/3">
                  <img 
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-white text-2xl font-bold mb-4">{tech.title}</h3>
                  <div className="space-y-2">
                    {tech.items.map((item, i) => (
                      <p key={i} className="text-white">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Technologypage;
