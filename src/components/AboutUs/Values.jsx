import React from 'react';
import missionImage from '../../assets/images/Featured icon (9).png'; // Replace with your actual image paths
import visionImage from '../../assets/images/Featured icon (10).png';
import valuesImage from '../../assets/images/Featured icon (11).png';

const MissionStatement = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-500">
          Our Mission Statement
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="w-full md:w-1/3  px-0 mb-8 md:mb-0">
            <div className="bg-white rounded-lg text-center p-6    -gray-200">
              <div className="rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <img src={missionImage} alt="Mission" className="w-12 h-12" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">MISSION</h3>
              <p className="text-sm sm:text-lg text-gray-600">
                Rhodium's mission is to empower humanity through cutting-edge technology that enhances productivity, creativity, and connectivity, while promoting sustainability and social responsibility for a brighter, more equitable future.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3  px-2 mb-8 md:mb-0">
            <div className="bg-white rounded-lg text-center py-6    -gray-200">
              <div className="rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <img src={visionImage} alt="Vision" className="w-12 h-12" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">VISION</h3>
              <p className="text-sm sm:text-lg text-gray-600">
                Our vision is to be at the forefront of technological advancement, driving progress, and shaping the future. In so doing, we are committed to enriching lives, connecting communities, and transforming industries.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3  px-0">
            <div className="bg-white rounded-lg text-center p-6    -gray-200">
              <div className="rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <img src={valuesImage} alt="Values" className="w-12 h-12" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">VALUES</h3>
              <p className="text-sm sm:text-lg text-gray-600">
                We recognize our responsibility to promote sustainable development, minimize environment impact, foster diversity and inclusion, and contribute to social well being in all our operations and products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
