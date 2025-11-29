import React, { useState, useEffect } from "react";
import Frame16 from "../../assets/images/img3.jpg";
import Frame17 from "../../assets/images/img1.jpg";
import Frame18 from "../../assets/images/img2.jpeg";

const images = [Frame16, Frame17, Frame18];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const reorderedImages = [
    images[(currentIndex - 1 + images.length) % images.length],
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
  ];

  return (
    <div className="flex gap-6 w-[80%] mt-24 lg:mt-0 mb-8 lg:mb-0 lg:h-auto lg:w-1/2 lg:mr-28 relative md:left-[4%]">
      {reorderedImages.map((image, index) => (
        <img
          src={image}
          key={index}
          alt={`Slide ${index}`}
          onClick={() => {
            if (index === 0) goToPrevious();
            if (index === images.length - 1) goToNext();
          }}
          className={`${
            index === 1 ? "w-[60%]" : "w-[20%]  lg:h-[90%] mt-[2.5%]"
          } rounded-3xl object-cover cursor-pointer`}
        />
      ))}
      <div className="absolute -bottom-10 left-12 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-6 h-1 lg:w-12 lg:h-2 mx-1 rounded-full ${
              currentIndex === index ? "bg-[#289997]" : "bg-[#28999775]"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
