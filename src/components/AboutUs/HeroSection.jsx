import React from "react";
import imgSrc from "../../assets/images/img1.jpg";

const HomeSection = () => {
  return (
    <section id="home" className=" py-10 px-4 sm:py-10 sm:px-0 mt-20">
      <div className="container px-4 sm:px-11 mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-2xl sm:text-4xl sm:py-5 lg:text-[56px] text-[#289997] font-bold mb-2 sm:mb-4 text-center lg:text-left font-inter-700 leading-[50px] lg:leading-[70px]">
            Innovative Tech Solutions for Digital Growth
          </h1>
          <p className="text-xs md:text-center text-center sm:text-left md:text-left sm:text-sm lg:text-lg text-gray-400 font-inter font-bold lg:text-left text-[#33333380] lg:text-[21px] leading-[25.41px] font-inter-700 text-left lg:mt-0 mt-6 lg:mr-2 mr-6">
            We specialize in driving digital growth with cutting-edge SaaS
            solutions. Our focus on innovation and excellence ensures
            outstanding results. Discover how we can transform your business
            today.
          </p>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-8">
          <img
            src={imgSrc}
            alt="Image"
            className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
