import React from "react";
import image1 from "../../assets/images/logo1.png"; // Replace with your actual image paths
import image2 from "../../assets/images/logo2.png";
import image3 from "../../assets/images/logo3.png";
import image4 from "../../assets/images/logo7.png";
import image5 from "../../assets/images/logo5.png";

const ImageSection = () => {
  return (
    <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
      <div className="relative w-96 h-64 sm:w-80 sm:h-80">
        <img
          src={image1}
          alt="image1"
          className="absolute top-0 right-80 w-32 h-36 sm:w-40 sm:h-40 object-cover rounded-full"
        />
        {/* <img src={image2} alt="image2" className="absolute -top-20 right-36 w-36 h-36 sm:w-40 sm:h-60 object-cover rounded-full" />
         */}
       
        <img src={image2} alt="image2" className="absolute  -top-20 right-32 w-full h-full sm:w-60 sm:h-60  rounded-full" />
        <img src={image3} alt="image3" className="absolute -bottom-12 -left-72 w-32 h-36 sm:w-48 sm:h-48 object-cover rounded-full" />
        <img
          src={image4}
          alt="image4"
          className="absolute -bottom-8 right-60 w-36 h-36 sm:w-40 sm:h-60 object-cover rounded-full"
        />

        <img
          src={image5}
          alt="image5"
          className="absolute -bottom-5 right-7 w-28 h-32 sm:w-48 sm:h-40 object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default ImageSection;
