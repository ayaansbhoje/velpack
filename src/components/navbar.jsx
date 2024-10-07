import React from 'react'
import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// import { fadeIn } from './variant';


const Navbar = () => {
    return (
        <nav className="w-full bg-white py-4 px-8 flex justify-between items-center">
            <div className="flex items-center">
                <Link to="/" >
                <img src="/assets/Velpack_logo_fullcolor_rgb.png" alt="Velpack Logo" className="h-8" />
                </Link>
            </div>
            <div className="flex items-center space-x-6">
                {/* <a href="/aboutus.jsx" className="text-sm text-black hover:text-red-600">About Us</a> */}
                <Link to="/aboutUs" className="text-sm text-black hover:text-red-600">About Us</Link>

                <a href="#services" className="text-sm text-black hover:text-red-600">Our Services</a>
                <a href="#certifications" className="text-sm text-black hover:text-red-600">Certifications</a>
                <Link to="/technology" className="text-sm text-black hover:text-red-600">Technology</Link>
                {/*  <a href="#technology" className="text-sm text-black hover:text-red-600">Technology</a> */}
                <a href="#contact" className="text-sm text-black hover:text-red-600">Contact Us</a>
                <button className="text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </nav>

    )
}

export default Navbar
