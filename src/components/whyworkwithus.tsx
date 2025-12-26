import FaShieldAlt from "../assets/images/Featuredicon1.png";
import FaKey from "../assets/images/Featuredicon2.png";
import FaChartLine from "../assets/images/Featuredicon3.png";
import FaSmile from "../assets/images/Featuredicon4.png";

const WhyWorkWithUsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white flex justify-center">
      <div className="container text-center">
        <h2 className="text-3xl sm:text-4xl text-gray-500 font-inter font-bold mb-12">
          Why work with us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
          <div className="h-full bg-white rounded-lg text-center">
            <div className="flex justify-center items-center mb-4">
              <img
                src={FaShieldAlt}
                alt="Security-Focused Solutions"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Security-Focused Solutions
            </h3>
            <p className="font-inter text-center text-gray-600 text-base leading-6">
              At Rhodium Tech, We prioritize robust security measures to
              safeguard your data and ensure system integrity, giving you
              peace of mind.
            </p>
          </div>
          <div className="h-full bg-white rounded-lg text-center">
            <div className="flex justify-center items-center mb-4">
              <img
                src={FaKey}
                alt="Complete Transparency"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Complete Transparency
            </h3>
            <p className="font-inter text-center text-gray-600 text-base leading-6">
              With Rhodium Tech, clear and consistent communication is key.
              We'll keep you informed on project progress, challenges, and
              decisions, fostering a collaborative partnership.
            </p>
          </div>
          <div className="h-full bg-white rounded-lg text-center">
            <div className="flex justify-center items-center mb-4">
              <img
                src={FaChartLine}
                alt="Agile Approach"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Agile Approach
            </h3>
            <p className="font-inter text-center text-gray-600 text-base leading-6">
              We adapt, and you thrive. Rhodium Tech embraces an agile
              development approach, allowing us to adjust to your evolving
              needs and deliver solutions that perfectly align with your
              vision.
            </p>
          </div>
          <div className="h-full bg-white rounded-lg text-center">
            <div className="flex justify-center items-center mb-4">
              <img
                src={FaSmile}
                alt="Ongoing Support"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Ongoing Support
            </h3>
            <p className="font-inter text-center text-gray-600 text-base leading-6">
              Our partnership goes beyond launch. We offer comprehensive plans
              to keep your software functioning optimally and meet your
              evolving needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
