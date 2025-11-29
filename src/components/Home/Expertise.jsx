import React from "react";
import aiImage from "../../assets/images/image 25.png"; // Replace with your actual image paths
import avVrImage from "../../assets/images/image 28.png";
import blockchainImage from "../../assets/images/image 26.png";
import iotImage from "../../assets/images/image 27.png";

const expertiseStyles = {
  width: "15rem",
  height: "9rem",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "1.5rem",
  boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  color: "white", // Ensure text color is white
  fontSize: "1.25rem",
  fontWeight: "bold",
};

const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 128, 128, 0.6)", // Teal blue color with 60% opacity
};

const textStyles = {
  position: "relative",
  // padding:"2%",
  zIndex: 1, // Ensure text is above the overlay
  fontSize: "2rem",
  fontWeight: 600,
  padding: "3%",
  lineHeight: "38.73px",
  textAlign: "center",
};

const ExpertiseSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-3xl font-bold mb-8 text-gray-500">
          Expertise
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div
            className="expertise-item"
            style={{ ...expertiseStyles, backgroundImage: `url(${aiImage})` }}
            //style={{ ...expertiseStyles }}
          >
            <div style={overlayStyles}></div>
            <span className="font-inter" style={textStyles}>
              Generative<br></br> AI
            </span>
          </div>
          <div
            //className="expertise-item"
            style={{ ...expertiseStyles, backgroundImage: `url(${avVrImage})` }}
            //    style={{ ...expertiseStyles }}
          >
            <div style={overlayStyles}></div>
            <span style={textStyles} className="p-1 font-inter">
              Full Stack <br></br>Web Solutions
            </span>
          </div>
          <div
            className="expertise-item"
            style={{
              ...expertiseStyles,
              backgroundImage: `url(${blockchainImage})`,
            }}
            //style={{ ...expertiseStyles }}
          >
            <div style={overlayStyles}></div>
            <span style={textStyles}>Mobile App Development</span>
          </div>
          <div
            className="expertise-item"
            style={{ ...expertiseStyles, backgroundImage: `url(${iotImage})` }}
            //style={{ ...expertiseStyles }}
          >
            <div style={overlayStyles}></div>
            <span style={textStyles}>Cloud Computing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
