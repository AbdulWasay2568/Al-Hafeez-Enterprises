import React from 'react';
import image1 from '../../assets/images/logo1.png'; // Replace with your actual image paths
import image2 from '../../assets/images/logo2.png';
import image3 from '../../assets/images/logo3.png';
import image4 from '../../assets/images/logo7.png';
import image5 from '../../assets/images/logo5.png';

const ImageSectionSmall = () => {
  return (
    <div className=" flex justify-center mt-8">
      <div className="flex flex-col max-w-lg mx-auto">
        <div className="flex justify-center">
          <div className="relative">
            <img src={image1} alt="image1" className="w-full h-auto object-cover rounded-full pl-14" style={{ width: '100%' }} />
          </div>
          <div className="relative">
            <img src={image2} alt="image2" className="w-full h-auto object-cover rounded-full " style={{ width: '70%' }} />
          </div>
        </div>
        <div className="flex justify-center mt-4">
        <div className="relative">
            <img src={image3} alt="image3" className="w-full h-auto object-cover rounded-full  pl-8" style={{ width: '100%' }} />
          </div>
        
          <div className="relative pl-3">
            <img src={image4} alt="image4" className="w-96 h-36 object-cover  " style={{ }} />
          </div>
          <div className="relative" style={{ }}>
            <img src={image5} alt="image5" className="w-full h-auto object-cover rounded-full" style={{ width: '80%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSectionSmall;
