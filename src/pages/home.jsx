import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

import Navbar from '../components/navbar'
import Footer from '../components/footer';
import Footprint from '../components/Footprint';


const Home = () => {
    const HeroSection = () => {
        const images = [
            "/assets/2B_01679.JPG",
            "/assets/_DSC0076 (1).JPG",
            "/assets/2B_01718.JPG"
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
                className="relative h-[calc(100vh-5rem)]">
                {images.map((img, index) => (
                    <img
                        key={img}
                        src={img}
                        alt={`Team in packaging facility ${index + 1}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-center pb-24">
                    <motion.h1
                        variants={fadeIn("left", 1.2)}
                        initial="hidden"
                        whileInView={"show"}
                        className="text-4xl mb-8 text-white text-center tracking-wider font-hmed">
                        PAPER-BASED PACKAGING SOLUTIONS SINCE 1956
                    </motion.h1>
                    <motion.button
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className="px-6 py-2 border-2 border-[#e81d2d] text-white bg-white-600 rounded-md hover:bg-[#b7162a] hover:text-white transition duration-300 font-hbold">
                        GET IN TOUCH
                    </motion.button>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                                }`}
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
            className="my-20 bg-[#b7162a] text-white  ">


            <div className="w-full mx-auto flex relative">
                {/* Left Side - WHO ARE WE */}
            <div className="absolute right-[4rem] top-[-3rem] w-[45vw] h-[400px] bg-gray-300 flex items-center justify-center shadow-lg">
                <p className="text-gray-600 text-2xl font-bold">VELPACK VIDEO</p>
            </div>


                <div className="w-1/2 p-12 flex flex-col justify-center z-10">
                    <h2 className="text-4xl mb-2 font-hbold">WHO ARE WE?</h2>
                    <div className="w-16 h-1 bg-white mb-6 ml-2 "></div>

                    <p className="mb-8 text-lg font-hmed">
                        Velpack has been a pioneer in the paper-based packaging
                        industry since 1956. We specialize in providing high-quality folded
                        cartons for the pharmaceutical, FMCG and industrial sectors.
                    </p>
                    <button className=" font-hbold bg-transparent border-2 border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-[#b7162a] transition duration-300 self-start">
                        KNOW MORE
                    </button>
                </div>

                {/* Right Side - Video Section */}
            </div>
        </motion.section>
    );


   const ServicesSection = () => (
        <section className="bg-white py-16">
            <div className="container mx-auto">
                <motion.h2
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="text-3xl font-hbold text-center text-[#b7162a] mb-10 ">
                    We offer specialized paper-based packaging solutions for various
                    industries,<br />
                    ensuring each product meets stringent quality standards.
                </motion.h2>
                <div className="flex justify-center space-x-8">
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className="w-1/3 relative">
                        <img
                            src="/assets/pharmaceutical.png"
                            alt="Pharmaceutical Packaging"
                            className="w-full h-64 object-cover"
                        />
                        <motion.div
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                            <p className="text-xl font-semibold text-center">Pharmaceutical Packaging</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className="w-1/3 relative">
                        <img
                            src="/assets/P2-1.webp"
                            alt="FMCG Packaging"
                            className="w-full h-64 object-cover"
                        />
                        <motion.div
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                            <p className="text-xl font-semibold text-center">FMCG Packaging</p>
                        </motion.div>
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
            className="bg-[#b7162a] text-white py-12">
            <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView="show"
                className="container mx-auto px-4">
                <motion.h2
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="text-4xl font-bold text-center">
                    OUR CAPABILITIES
                    <div className="w-16 h-1 bg-white mb-6 mx-auto mt-3"></div>

                    </motion.h2>

                <motion.p
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="show" className="text-xl text-center mb-8">
                    With state-of-the-art machinery and advanced manufacturing processes, Velpack delivers precision and quality in every product.
                </motion.p>

                <div className="flex justify-between mb-4">
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className="w-1/3 bg-[#e81d2d] p-4 rounded-lg mx-1 text-center">
                        <motion.h3
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView="show"
                            className="text-xl font-bold mb-1">Our facility spans</motion.h3>
                        <motion.p
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView="show"
                            className="text-4xl font-bold mb-1">42,000 sq. ft.</motion.p>
                        <motion.p
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView="show"
                        >in Navi Mumbai, India</motion.p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className="w-1/3 bg-[#e81d2d] p-4 rounded-lg mx-1 text-center">
                        <motion.h3
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView="show"
                            className="text-xl font-bold mb-1">We produce</motion.h3>
                        <motion.p
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView="show"
                            className="text-4xl font-bold mb-1">3 million</motion.p>
                        <motion.p
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView="show">cartons per day</motion.p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className="w-1/3 bg-[#e81d2d] p-4 rounded-lg mx-1 text-center">
                        <motion.h3
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView="show"
                            className="text-xl font-bold mb-1">We print</motion.h3>
                        <motion.p
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView="show"
                            className="text-4xl font-bold mb-1">1 million</motion.p>
                        <motion.p
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView="show">inserts per day</motion.p>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn("up", 0.7)}
                    initial="hidden"
                    whileInView="show"
                    className="bg-white text-black p-6 rounded-lg mb-8">
                    <motion.h3
                        variants={fadeIn("up", 0.7)}
                        initial="hidden"
                        whileInView="show"
                        className="text-2xl font-bold text-center mb-4 text-[#e81d2d]">WE ARE CERTIFIED BY</motion.h3>
                    <div className="flex justify-around items-center pb-4">
                        <img src="/assets/iso.jpg" alt="ISO" className="h-14" />
                        <img src="/assets/ps_image.png" alt="PS" className="h-14" />
                        <img src="/assets/brc.png" alt="BRC" className="h-14" />
                        <img src="/assets/sedex.png" alt="Sedex" className="h-14" />
                        <img src="/assets/psci.jpeg" alt="PSCI" className="h-14" />
                        <img src="/assets/gmi.png" alt="gmi" className="h-14" />
                    </div>
                </motion.div>

                <Footprint />
            </motion.div>
        </motion.section>
    );

    const TrustedBrandsSection = () => {
        return (
            <section className="bg-[#e81d2d] py-10 overflow-hidden">
                <h2 className="text-4xl font-bold text-center mb-8 text-white">TRUSTED BY LEADING BRANDS</h2>
                <div className="relative">
                    <div className="flex animate-scroll bg-white py-6 h-xl">
                        <div className="flex shrink-0">
                            <img src="/assets/Marksans.png" alt="Logo 1" className="h-14 mx-10" />
                            <img src="/assets/Lupin.png" alt="Logo 2" className="h-14 mx-10" />
                            <img src="/assets/Piramal.png" alt="Logo 3" className="h-14 mx-10" />
                            <img src="/assets/Ipca.png" alt="Logo 4" className="h-14 mx-10" />
                            <img src="/assets/Indoco.png" alt="Logo 5" className="h-14 mx-10" />
                        </div>
                        <div className="flex shrink-0">
                            <img src="/assets/Marksans.png" alt="Logo 1" className="h-14 mx-10" />
                            <img src="/assets/Lupin.png" alt="Logo 2" className="h-14 mx-10" />
                            <img src="/assets/Piramal.png" alt="Logo 3" className="h-14 mx-10" />
                            <img src="/assets/Ipca.png" alt="Logo 4" className="h-14 mx-10" />
                            <img src="/assets/Indoco.png" alt="Logo 5" className="h-14 mx-10" />
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
            className="bg-white py-16">
            <div className="container mx-auto px-4">
                <motion.h2
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="text-4xl font-bold text-center mb-2 text-[#e81d2d]">OUR FEATURES</motion.h2>
                <div className="w-20 h-1 bg-[#e81d2d] mx-auto mb-12"></div>

                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="grid grid-cols-4 gap-8">
                    {[
                        { name: "EMBOSSING", image: "/assets/embossing_image.jpg" },
                        { name: "MICRO EMBOSSING", image: "/assets/micro_embossing_image.jpg" },
                        { name: "GRAINING", image: "/assets/graining_image.jpg" },
                        { name: "ACCUBRAILLE", image: "/assets/accubraille_image.jpg" },
                        { name: "SPOT GLOSS", image: "/assets/spot_gloss_image.jpg" },
                        { name: "FOIL STAMPING", image: "/assets/foil_stamping_image.jpg" },
                        { name: "TEXTURE UV", image: "/assets/texture_uv_image.jpg" },
                        { name: "TEXTURE UV", image: "/assets/texture_uv_image2.jpg" },
                    ].map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-full aspect-square bg-gray-200 mb-4 rounded-lg overflow-hidden">
                                <img src={feature.image} alt={feature.name} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-center font-bold">{feature.name}</p>
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
            className="bg-black text-white py-6">
            <div className="container">
                <div className="flex justify-center">
                    <motion.h3
                        variants={fadeIn( 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className="text-2xl text-center font-bold whitespace-nowrap  px-2 ">SECURITY FEATURES:</motion.h3>

                    <p className="text-xl ">
                         Micro Printing | Invisible Ink Printing | Hologram Foil | Coin-Reactive Ink | Tamper-Evident Cartons
                    </p>
                </div>
            </div>
        </motion.section>
    );

    const ReviewCard = ({ review, isCenter }) => (
        <div className={`bg-red-500 rounded-lg p-6 text-white ${isCenter ? 'bg-red-800 shadow-lg transform scale-105 z-10' : 'z-0'} w-96 h-74 flex flex-col justify-between`}>
            <div>
                <h3 className="text-xl font-bold mb-2 text-center">{review.name}</h3>
                <p className="text-sm mb-2 text-center">{review.company}</p>
            </div>
            <p className="text-sm text-center mb-16">{review.content}</p>
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
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-3 text-[#e81d2d]">WHAT OUR CLIENTS SAY</h2>
                    <div className="w-16 h-1 bg-[#e81d2d] mb-12 mx-auto "></div>

                    <div className="relative">
                        <div className="flex justify-center items-center">
                            <button onClick={prevReview} className="absolute left-0 z-20 text-4xl text-[#000000]">&lt;</button>
                            <div className="flex justify-center items-center space-x-4 relative">
                                <div className="w-96 absolute -left-80 transform scale-90">
                                    <ReviewCard review={reviews[(currentIndex - 1 + reviews.length) % reviews.length]} isCenter={false} />
                                </div>
                                <div className="w-96 z-10">
                                    <ReviewCard review={reviews[currentIndex]} isCenter={true} />
                                </div>
                                <div className="w-96 absolute -right-80 transform scale-90">
                                    <ReviewCard review={reviews[(currentIndex + 1) % reviews.length]} isCenter={false} />
                                </div>
                            </div>
                            <button onClick={nextReview} className="absolute right-0 z-20 text-4xl text-[#000000]">&gt;</button>
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
