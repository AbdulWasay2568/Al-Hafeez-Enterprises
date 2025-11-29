import React from 'react';

const TrustSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-7">
          Businesses all over the world trust<br /> Buffer to build their brand
        </h2>
        <div className="mt-20 flex flex-col sm:flex-row justify-center space-y-10 sm:space-y-0 sm:space-x-10">
          <div className="flex flex-col items-center">
            <span className="text-teal-600 text-3xl sm:text-4xl lg:text-5xl font-extrabold">2+</span>
            <span className="mt-2 text-gray-600 text-md sm:text-lg lg:text-xl">Years in Business</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-teal-600 text-3xl sm:text-4xl lg:text-5xl font-extrabold">100+</span>
            <span className="mt-2 text-gray-600 text-md sm:text-lg lg:text-xl">Employees Worldwide</span>
          </div>
          <div className="flex flex-col items-center sm:hidden">
            <span className="text-teal-600 text-3xl sm:text-4xl lg:text-5xl font-extrabold">100+</span>
            <span className="mt-2 text-gray-600 text-md sm:text-lg lg:text-xl">Users Globally</span>
          </div>
          <div className="flex flex-col items-center sm:hidden">
            <span className="text-teal-600 text-3xl sm:text-4xl lg:text-5xl font-extrabold">5+</span>
            <span className="mt-2 text-gray-600 text-md sm:text-lg lg:text-xl">Products</span>
          </div>
          <div className="flex flex-col items-center sm:hidden">
            <span className="text-teal-600 text-3xl sm:text-4xl lg:text-5xl font-extrabold">5+</span>
            <span className="mt-2 text-gray-600 text-md sm:text-lg lg:text-xl">Countries Served</span>
          </div>
          <div className="hidden sm:flex flex-col items-center">
            <span className="text-teal-600 text-3xl sm:text-4xl lg:text-5xl font-extrabold">100+</span>
            <span className="mt-2 text-gray-600 text-md sm:text-lg lg:text-xl">Users Globally</span>
          </div>
          <div className="hidden sm:flex flex-col items-center">
            <span className="text-teal-600 text-3xl sm:text-4xl lg:text-5xl font-extrabold">5+</span>
            <span className="mt-2 text-gray-600 text-md sm:text-lg lg:text-xl">Products</span>
          </div>
          <div className="hidden sm:flex flex-col items-center">
            <span className="text-teal-600 text-3xl sm:text-4xl lg:text-5xl font-extrabold">5+</span>
            <span className="mt-2 text-gray-600 text-md sm:text-lg lg:text-xl">Countries Served</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
