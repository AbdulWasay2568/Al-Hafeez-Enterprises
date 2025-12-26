import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const SuccessStories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-0 pb-20 px-4 sm:px-6">
      <div className="mt-24 flex flex-wrap justify-center gap-12 sm:gap-20 md:gap-32 px-2">
        <div className="text-center">
          {isVisible && (
            <CountUp
              end={3}
              duration={3}
              suffix="+"
              useEasing={true}
              className="text-teal-600 font-inter font-black text-5xl md:text-6xl block leading-tight"
            />
          )}
          <p className="text-gray-600 mt-3 text-lg md:text-xl font-inter font-normal leading-8">
            Years in Business
          </p>
        </div>
        <div className="text-center">
          {isVisible && (
            <CountUp
              end={100}
              duration={3}
              suffix="+"
              useEasing={true}
              className="text-teal-600 font-inter font-black text-5xl md:text-6xl block leading-tight"
            />
          )}
          <p className="text-gray-600 mt-3 text-lg md:text-xl font-inter font-normal leading-8">
            Employees Worldwide
          </p>
        </div>
        <div className="text-center">
          {isVisible && (
            <CountUp
              end={7}
              duration={3}
              suffix="+"
              useEasing={true}
              className="text-teal-600 font-inter font-black text-5xl md:text-6xl block leading-tight"
            />
          )}
          <p className="text-gray-600 mt-3 text-lg md:text-xl font-inter font-normal leading-8">
            Products
          </p>
        </div>

        <div className="text-center">
          {isVisible && (
            <CountUp
              end={10000}
              duration={3}
              suffix="+"
              useEasing={true}
              className="text-teal-600 font-inter font-black text-5xl md:text-6xl block leading-tight"
            />
          )}
          <p className="text-gray-600 mt-3 text-lg md:text-xl font-inter font-normal leading-8">
            Users Globally
          </p>
        </div>
        <div className="text-center">
          {isVisible && (
            <CountUp
              end={32}
              duration={3}
              suffix="+"
              useEasing={true}
              className="text-teal-600 font-inter font-black text-5xl md:text-6xl block leading-tight"
            />
          )}
          <p className="text-gray-600 mt-3 text-lg md:text-xl font-inter font-normal leading-8">
            Countries Served
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
