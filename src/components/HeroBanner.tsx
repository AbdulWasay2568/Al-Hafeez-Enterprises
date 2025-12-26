import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import hero4 from "../assets/images/hero4.png";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";


const HeroBanner = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [hero1, hero2, hero3, hero4];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="video-section"
      className="relative w-full h-screen overflow-hidden"
    >
      <img
        src={images[currentImageIndex]}
        alt="Hero Banner"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />
      
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className="cursor-pointer absolute left-8 top-1/2 transform -translate-y-1/2 z-30 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full transition duration-300"
      >
        <IoChevronBack size={28} />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="cursor-pointer absolute right-8 top-1/2 transform -translate-y-1/2 z-30 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full transition duration-300"
      >
        <IoChevronForward size={28} />
      </button>

      <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4 mt-16 z-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-24 leading-normal">
          The Success partner for,
          <br />
          <span className="block mt-6">BRANDS AND BUSINESSES</span>
        </h1>
        <div className="flex gap-4 justify-center">
          <button
            className="cursor-pointer text-base md:text-lg lg:text-xl py-2 pb-3 px-6 bg-teal-600 hover:bg-teal-700 text-white transition duration-300 rounded-lg font-semibold"
          >
            OUR BUSINESS
          </button>
          <button
            className="cursor-pointer text-base md:text-lg lg:text-xl py-2 pb-3 px-6 bg-white hover:bg-gray-100 text-black transition duration-300 rounded-lg font-semibold"
            onClick={() => navigate("/services")}
          >
            OUR SERVICES
          </button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentImageIndex ? "bg-teal-600" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
