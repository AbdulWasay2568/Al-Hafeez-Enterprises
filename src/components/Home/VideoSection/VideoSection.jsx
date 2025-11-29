import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import video from "../../../assets/videos/video.mp4";
import { ScrollContext } from "../../../ScrollContext";


const HeroSection = () => {
  const { setScrollToForm } = useContext(ScrollContext);
  const navigate = useNavigate();

  const handleScrollToForm = () => {
    setScrollToForm(true);
    navigate("/");
  };

  return (
    <div
      id="video-section"
      className="relative w-full h-screen overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-1/2 w-full h-full object-cover transform -translate-x-1/2 z-10"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4 mt-16 z-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-24 leading-normal">
          Innovating Tomorrow,
          <br />
          <span className="block mt-6">Delivering Today.</span>
        </h1>
        <button
          className="text-base md:text-lg lg:text-xl py-2 pb-3 px-5 bg-black bg-opacity-50 border border-white hover:bg-opacity-75 transition duration-300 rounded-lg"
          onClick={handleScrollToForm}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
