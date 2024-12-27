import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

import Navbar from '../components/navbar'
import Footer from '../components/footer';
import Footprint from '../components/Footprint';

const Home = () => {
const HeroSection = () => {
    const images = [
        "/assets/HP_Banner_1.jpg",
        "/assets/banner_z.jpg",
        "/assets/HP_Banner_3.jpg",
        "/assets/HP_Banner_4.jpg"
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);
    
    return (
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="relative h-[60vh] md:h-screen">
          {images.map((img, index) => (
            <img
              key={img}
              src={img}
              alt={`Team in packaging facility ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-center pb-12 md:pb-24">
            <motion.h1
              variants={fadeIn("left", 1.2)}
              initial="hidden"
              whileInView="show"
              className="text-2xl md:text-4xl mb-1 text-white text-center tracking-wider md:tracking-[0.14em] font-hmed leading-tight md:leading-[38px] px-4">
              PAPER-BASED PACKAGING SOLUTIONS SINCE 1956
            </motion.h1>
            <motion.button
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              className="px-4 py-2 md:px-6 md:py-2 mb-1 border-2 border-[#e81d2d] text-white bg-transparent rounded-md hover:bg-[#b7162a] hover:text-white transition duration-300 font-hbold">
              GET IN TOUCH
            </motion.button>
          </div>
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'}`}
              ></button>
            ))}
          </div>
        </motion.div>
    );          
};

const AboutUs = () => (
    <motion.section
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="my-10 md:my-20 bg-[#b7162a] text-white"
    >
        <div className="w-full mx-auto flex flex-col md:flex-row relative">
            {/* Desktop Version */}
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center z-10">
                <h2 className="text-3xl md:text-4xl mb-2 font-hbold">WHO ARE WE?</h2>
                <div className="w-16 h-1 bg-white mb-4 md:mb-6 ml-2"></div>
                <p className="mb-6 md:mb-8 text-base md:text-lg font-hmed">
                    Velpack has been a pioneer in the paper-based packaging
                    industry since 1956. We specialize in providing high-quality folded
                    cartons for the pharmaceutical, FMCG and industrial sectors.
                </p>
                <button className="font-hbold bg-transparent border-2 border-white text-white py-2 px-4 md:px-6 rounded-md hover:bg-white hover:text-[#b7162a] transition duration-300 self-start">
                    KNOW MORE
                </button>
            </div>

            {/* Mobile Version */}
            <div className="w-full md:w-1/2 md:absolute md:right-[4rem] md:top-[-3rem] md:h-[400px] bg-gray-300 flex items-center justify-center shadow-lg order-1 md:order-2">
                <p className="text-gray-600 text-xl md:text-2xl font-bold">VELPACK VIDEO</p>
            </div>
        </div>
    </motion.section>
);
    const ServicesSection = () => (
    <section className="bg-white py-10 md:py-16">
        <div className="container mx-auto px-4">
            <motion.h2
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                className="text-xl md:text-3xl font-hbold text-center text-[#b7162a] mb-6 md:mb-10">
                We offer specialized paper-based packaging solutions for various
                industries,<br className="hidden md:block" />
                ensuring each product meets stringent quality standards.
            </motion.h2>
            <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
                <motion.div
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="w-full md:w-1/3 relative">
                    <img
                        src="/assets/Pharmaceutical.jpg"
                        alt="Pharmaceutical Packaging"
                        className="w-full h-48 md:h-64 object-cover"
                    />
                </motion.div>
                <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="w-full md:w-1/3 relative">
                    <img
                        src="/assets/FMCG.jpg"
                        alt="FMCG Packaging"
                        className="w-full h-48 md:h-64 object-cover"
                    />
                </motion.div>
            </div>
        </div>
    </section>
);

    const CapabilitiesSection = () => (
        <motion.section
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            className="bg-[#b7162a] text-white py-10 md:py-12">
            <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView="show"
                className="container mx-auto px-4">
                <motion.h2
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="text-3xl md:text-4xl font-hbold text-center">
                    OUR CAPABILITIES
                    <div className="w-16 h-1 bg-white mb-4 md:mb-6 mx-auto mt-3"></div>
                </motion.h2>

                <motion.p
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="show" 
                    className="text-base md:text-xl text-center mb-6 md:mb-8 px-4">
                    With state-of-the-art machinery and advanced manufacturing processes, Velpack delivers precision and quality in every product.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className="bg-[#e81d2d] p-4 rounded-lg text-center">
                        <h3 className="text-lg md:text-xl font-hmed mb-1">Our facility spans</h3>
                        <p className="text-2xl md:text-4xl font-bold mb-1">42,000 sq. ft.</p>
                        <p>in Navi Mumbai, India</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className="bg-[#e81d2d] p-4 rounded-lg text-center">
                        <h3 className="text-lg md:text-xl font-hmed mb-1">We produce</h3>
                        <p className="text-2xl md:text-4xl font-bold mb-1">3 million</p>
                        <p>cartons per day</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className="bg-[#e81d2d] p-4 rounded-lg text-center">
                        <h3 className="text-lg md:text-xl font-hmed mb-1">We print</h3>
                        <p className="text-2xl md:text-4xl font-bold mb-1">1 million</p>
                        <p>inserts per day</p>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn("up", 0.7)}
                    initial="hidden"
                    whileInView="show"
                    className="bg-white text-black p-4 md:p-6 rounded-lg mb-6 md:mb-8">
                    <motion.h3
                        variants={fadeIn("up", 0.7)}
                        initial="hidden"
                        whileInView="show"
                        className="text-xl md:text-2xl font-hbold text-center mb-4 text-[#e81d2d]">
                        WE ARE CERTIFIED BY
                    </motion.h3>
                    <div className="flex flex-wrap justify-around items-center space-x-2 md:space-x-4 pb-4">
                        <img src="/assets/ISO_9001.png" alt="ISO" className="h-8 md:h-14 mb-2 md:mb-0" />
                        <img src="/assets/PS_9000.png" alt="PS" className="h-8 md:h-14 mb-2 md:mb-0" />
                        <img src="/assets/BRC_Global_Standard.png" alt="BRC" className="h-8 md:h-14 mb-2 md:mb-0" />
                        <img src="/assets/sedex.png" alt="Sedex" className="h-8 md:h-14 mb-2 md:mb-0" />
                        <img src="/assets/PSCI.png" alt="PSCI" className="h-8 md:h-14 mb-2 md:mb-0" />
                        <img src="/assets/GMI.png" alt="gmi" className="h-8 md:h-14" />
                    </div>
                </motion.div>

                <Footprint />
            </motion.div>
        </motion.section>
    );

    const TrustedBrandsSection = () => {
        return (
            <section className="bg-[#e81d2d] py-6 md:py-10 overflow-hidden">
                <h2 className="text-3xl md:text-4xl font-hbold text-center mb-4 md:mb-8 text-white">
                    TRUSTED BY LEADING BRANDS
                </h2>
                <div className="relative">
                    <div className="flex animate-scroll bg-white py-4 md:py-6 h-xl">
                        <div className="flex shrink-0">
                            {["Marksans", "Lupin", "Piramal", "Ipca", "Indoco"].map((logo) => (
                                <img 
                                    key={logo} 
                                    src={`/assets/${logo}.png`} 
                                    alt={`${logo} Logo`} 
                                    className="h-8 md:h-14 mx-4 md:mx-10" 
                                />
                            ))}
                        </div>
                        <div className="flex shrink-0">
                            {["Marksans", "Lupin", "Piramal", "Ipca", "Indoco"].map((logo) => (
                                <img 
                                    key={logo} 
                                    src={`/assets/${logo}.png`} 
                                    alt={`${logo} Logo`} 
                                    className="h-8 md:h-14 mx-4 md:mx-10" 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

const FeaturesSection = () => (
        <motion.section
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            className="bg-white py-10 md:py-16">
            <div className="container mx-auto px-4">
                <motion.h2
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="text-3xl md:text-4xl font-hbold text-center mb-2 text-[#e81d2d]">OUR FEATURES</motion.h2>
                <div className="w-20 h-1 bg-[#e81d2d] mx-auto mb-8 md:mb-12"></div>

                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {[
                        { name: "EMBOSSING", image: "/assets/Embossing.jpg" },
                        { name: "ACCUBRAILLE", image: "/assets/Accubraille.jpg" },
                        { name: "SPOT GLOSS", image: "/assets/Spot_Gloss.jpg" },
                        { name: "FOIL STAMPING", image: "/assets/Foil_Stamping.jpg" },
                        { name: "TEXTURE UV", image: "/assets/Textured_UV.jpg" },
                    ].map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-full aspect-square bg-gray-200 mb-2 md:mb-4 rounded-lg overflow-hidden">
                                <img src={feature.image} alt={feature.name} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-center font-bold text-sm md:text-base">{feature.name}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );

    const SecurityFeaturesSection = () => (
        <motion.section
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            className="bg-black text-white py-4 md:py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
                    <motion.h3
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className="text-xl md:text-2xl text-center font-hbold whitespace-nowrap">
                        SECURITY FEATURES:
                    </motion.h3>
                    <motion.p
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className="text-base md:text-xl text-center">
                        Micro Printing | Invisible Ink Printing | Hologram Foil | Coin-Reactive Ink | Tamper-Evident Cartons
                    </motion.p>
                </div>
            </div>
        </motion.section>
    );

    const ReviewCard = ({ review, isCenter }) => (
        <div className={`bg-red-500 rounded-lg p-4 md:p-6 text-white ${isCenter ? 'bg-red-800 shadow-lg transform md:scale-105 z-10' : 'z-0'} w-72 md:w-96 h-auto md:h-74 flex flex-col justify-between`}>
            <div>
                <h3 className="text-lg md:text-xl font-bold mb-1 text-center">{review.name}</h3>
                <p className="text-xs md:text-sm mb-2 text-center">{review.company}</p>
            </div>
            <p className="text-xs md:text-sm text-center mb-4 md:mb-16">{review.content}</p>
        </div>
    );

    const ReviewsSection = () => {
        const reviews = [
            { name: "Name 1", company: "Company 1", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." },
            { name: "Name 2", company: "Company 2", content: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat." },
            { name: "Name 3", company: "Company 3", content: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros." },
            { name: "Name 4", company: "Company 4", content: "Et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi." },
        ];

        const [currentIndex, setCurrentIndex] = useState(1);

        const nextReview = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        };

        const prevReview = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
        };

        return (
            <section className="bg-white py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#e81d2d]">WHAT OUR CLIENTS SAY</h2>
                    <div className="w-16 h-1 bg-[#e81d2d] mb-8 md:mb-12 mx-auto"></div>

                    <div className="relative">
                        <div className="flex justify-center items-center">
                            <button 
                                onClick={prevReview} 
                                className="absolute left-0 z-20 text-2xl md:text-4xl text-[#000000] hover:text-[#e81d2d] transition"
                            >
                                &lt;
                            </button>
                            <div className="flex justify-center items-center space-x-2 md:space-x-4 relative">
                                <div className="w-72 md:w-96 absolute -left-72 md:-left-80 transform scale-90 ">
                                    <ReviewCard review={reviews[(currentIndex - 1 + reviews.length) % reviews.length]} isCenter={false}  />
                                </div>
                                <div className="w-72 md:w-96 z-10 sm:">
                                    <ReviewCard review={reviews[currentIndex]} isCenter={true} />
                                </div>
                                <div className="w-72 md:w-96 absolute -right-72 md:-right-80 transform scale-90  ">
                                    <ReviewCard review={reviews[(currentIndex + 1) % reviews.length]} isCenter={false} />
                                </div>
                            </div>
                            <button 
                                onClick={nextReview} 
                                className="absolute right-0 z-20 text-2xl md:text-4xl text-[#000000] hover:text-[#e81d2d] transition"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutUs />
            <ServicesSection />
            <CapabilitiesSection />
            <TrustedBrandsSection />
            <FeaturesSection />
            <SecurityFeaturesSection />
            <ReviewsSection />
            <Footer />
        </>
    )
}

export default Home
