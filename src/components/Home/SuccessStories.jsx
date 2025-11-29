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
    <section ref={sectionRef} className="pt-0 pb-20 sm:px-6">
      {/* <div
        className="container mx-auto flex flex-col md:flex-row "
        style={{ width: "1151px", height: "307px", gap: "0px", opacity: "1" }}
      >
        <div
          className="md:w-6/12 pr-4"
          style={{ width: "564px", height: "240px", gap: "0px", opacity: "1" }}
        >
          <h2
            className="text-gray-500 font-inter font-bold mb-4 text-left font-inter px-4"
            style={{
              fontSize: "36px",
              fontWeight: "600",
              lineHeight: "44px",
              letterSpacing: "-0.02em",
              textAlign: "left",
            }}
          >
            Success Stories
          </h2>
          <p
            className="text-gray-500 pr-8 pl-3 tracking-tighter text-left font-inter"
            style={{
              fontSize: "20px",
              fontWeight: "400",

              lineHeight: "30px",
              textAlign: "left",
            }}
          >
            Born from a vision to revolutionize the digital landscape, Rhodium
            Tech emerged as a powerhouse in software development. From humble
            beginnings, they prioritized <br></br>quality and client
            partnerships, propelling them to the <br></br>forefront of the
            industry. By embracing cutting-edge<br></br> technologies and a
            customer-centric approach, Rhodium<br></br> Tech continues to set
            new standards for innovation and excellence, driving digital
            transformation across the globe.
          </p>
        </div>
        <div
          className="md:w-5/12 ml-32 flex justify-center mt-8 md:mt-0"
          style={{
            width: "465px",
            height: "278px",
            top: "109px",
            left: "750.5px",
            gap: "0px",
            borderRadius: "16px 0px 0px 0px",
            opacity: "1",
          }}
        >
          <div className="bg-gray-300 rounded-lg w-full h-full flex items-center justify-center">
            <svg
              className="w-24 h-24 text-teal-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <polygon points="9.5,6.5 9.5,17.5 18.5,12" />
            </svg>
          </div>
        </div>
      </div> */}
      <div className="mt-24 flex flex-wrap justify-center gap-32 px-2">
        <div className="text-center">
          {isVisible && (
            <CountUp
              end={3}
              duration={3}
              suffix="+"
              useEasing={true}
              className="text-teal-600  font-inter"
              style={{
                fontSize: "50px",
                fontWeight: "800",
                lineHeight: "55px",
                textAlign: "center",
              }}
            />
          )}
          <p
            className="text-gray-600 mt-2"
            style={{
              width: "106px",
              height: "60px",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "30.1px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
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
              className="text-teal-600  font-inter"
              style={{
                fontSize: "50px",
                fontWeight: "800",
                lineHeight: "55px",
                textAlign: "center",
              }}
            />
          )}
          <p
            className="text-gray-600 mt-2 font-inter"
            style={{
              width: "106px",
              height: "60px",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "30.1px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
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
              className="font-bold text-teal-600  font-inter"
              style={{
                fontSize: "50px",
                fontWeight: "800",
                lineHeight: "55px",
                textAlign: "center",
              }}
            />
          )}
          <p
            className="text-gray-600 mt-2  font-inter"
            style={{
              width: "106px",
              height: "60px",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "30.1px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
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
              className=" text-teal-600  font-inter"
              style={{
                fontSize: "50px",
                fontWeight: "800",
                lineHeight: "55px",
                textAlign: "center",
              }}
            />
          )}
          <p
            className="text-gray-600 mt-2 text-center font-inter max-w-fit"
            style={{
              height: "60px",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "30.1px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
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
              className="font-bold text-teal-600  font-inter"
              style={{
                fontSize: "50px",
                fontWeight: "800",
                lineHeight: "55px",
                textAlign: "center",
              }}
            />
          )}
          <p
            className="text-gray-600 mt-2 font-inter"
            style={{
              width: "106px",
              height: "60px",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "30.1px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Countries Served
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
