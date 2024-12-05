import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const AboutUsPage = () => {
  const sections = {
    sustainability: {
      image: "/assets/Sustainability.jpg",
      text: "At Velpack, we prioritize environmental protection and employee safety, adhering to rigorous standards and conducting regular audits.",
      heading: "Sustainability"
    },
    environment: {
      image: "/assets/Enviroment_Protection.jpg",
      text: "We implement preventive actions and regular monitoring to avoid environmental damage, including ambient air quality checks, stack gas monitoring, ambient noise level monitoring, and STP water checks.",
      heading: "Environment Protection"
    },
    safety: {
      image: "/assets/Employee_Health.jpg",
      text: "Our comprehensive measures ensure the well-being of our employees, fostering a safe and healthy work environment.",
      heading: "Employee Health and Safety"
    },
    audits: {
      image: "/assets/Regular_Audits.jpg",
      text: "Velpack is independently audited under SMETA criteria by SEDEX and by the Pharmaceutical Supply Chain Initiative (PSCI) for better social, environmental, and economic outcomes.",
      heading: "Regular Audits"
    }
  };

  const teamMembers = [
    {
      name: "Bernie Phillips",
      role: "Director",
      education: "Printing Technology - J.J. School of Arts, Mumbai."
    },
    {
      name: "Rohan Phillips",
      role: "Director",
      education: "B.Sc. Mechanical Engineering - Georgia Institute of Technology, USA."
    },
    {
      name: "Bobbie Phillips",
      role: "Managing Director",
      education: "MBA - Finance - University of Scranton, USA."
    },
    {
      name: "Lyssa Phillips",
      role: "Director",
      education: [
        "B.A. Economics & Global Studies - U.C.L.A, USA;",
        "Diploma in Packaging - Indian Institute of Packaging, Mumbai."
      ]
    }
  ];

  const [activeSection, setActiveSection] = useState('sustainability');

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Banner Section with Improved Layout */}
        <div className="relative w-full flex">
          <div className="w-1/3 h-[600px] overflow-hidden">
            <img
              src="/assets/AU_Banner.jpg"
              alt="Manufacturing equipment"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-1/3 bg-stone-300 p-8 flex items-center justify-center">
            <p className="text-gray-800 text-center">
              Founded in 1956, Velpack has grown from a small family business
              into a global supplier of premium paper-based packaging. Our
              state-of-the-art facility in Navi Mumbai spans 42,000 sq. ft.,
              enabling us to produce millions of cartons and inserts daily.
            </p>
          </div>
          <div className="w-1/3 bg-[#e81d2d] p-8 flex items-center justify-center text-white text-center">
            <p>VELPACKS JOURNEY:</p>
            <h2 className="text-3xl font-hmed mt-2">Wrapping Responsibly since 1956</h2>
          </div>
        </div>

        {/* Rest of the existing content remains the same */}
        <div className="text-center py-8">
          {/* Rest of the content */}
        </div>

        {/* Team and other sections remain unchanged */}
        <div className="bg-[#b7162a] py-16 mt-16">
          {/* Team section content */}
        </div>

        {/* Sections with Improved Image Layout */}
        <div className="mt-16">
          <div className="bg-black py-4 flex justify-between px-32">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                className={`text-lg font-medium px-4 py-2 ${
                  activeSection === section
                    ? 'text-red-500'
                    : 'text-white'
                } transition-colors duration-300`}
                onClick={() => setActiveSection(section)}
              >
                {sections[section].heading}
              </button>
            ))}
          </div>

          <div className="relative w-full flex">
            <div className="w-1/3 h-[600px] overflow-hidden">
              <img
                src={sections[activeSection].image}
                alt={sections[activeSection].heading}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-1/3 bg-stone-300 p-8 flex items-center justify-center">
              <p>{sections[activeSection].text}</p>
            </div>
            <div className="w-1/3 bg-[#e81d2d] p-8 flex items-center justify-center text-white text-center">
              <p>VELPACK'S JOURNEY:</p>
              <h2 className="text-3xl font-hmed mt-2">Wrapping Responsibly since 1956</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
