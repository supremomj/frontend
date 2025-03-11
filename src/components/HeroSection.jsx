import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/slide1.jpg", 
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden bg-black">
      {/* Slideshow Background */}
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: i === 0 ? 1 : 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl font-bold drop-shadow-lg">
          Find Your Perfect Job Match with AI
        </h1>
        <p className="mt-2 text-lg drop-shadow">
          Upload your resume and let AI
          
          
           match you with the best job opportunities.
        </p>
        <button className="mt-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full shadow-lg hover:from-red-600 hover:to-orange-600 transition duration-300">
          Start Your Search
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
