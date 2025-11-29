import React, { useState, useEffect } from "react";
import customer1 from "../../assets/images/img1.jpg"; // Replace with your actual image paths
import customer2 from "../../assets/images/img2.jpeg";
import customer3 from "../../assets/images/img3.jpg";
import customer4 from "../../assets/images/img1.jpg";
import customer5 from "../../assets/images/img1.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: customer1,
      name: "Mike Torello",
      title: "Executive Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
      image: customer2,
      name: "Rick Wright",
      title: "Executive Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
      image: customer3,
      name: "Devon Miles",
      title: "Executive Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
      image: customer4,
      name: "Alex Johnson",
      title: "Executive Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
      image: customer5,
      name: "Emily Carter",
      title: "Executive Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-teal-600">What Our Customers Say</h2>
        <p className="mb-20 text-gray-500 px-80">
          Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <div className="relative flex">
          <div className="animate-scroll flex flex-nowrap">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`inline-block bg-blue-100 border-blue-600 border px-6 py-2 rounded-xl shadow-lg text-center mx-2 relative flex flex-col items-center transition-transform duration-500 ${
                  currentIndex === index ? "transform scale-110" : "transform scale-90"
                }`}
                style={{ width: "450px", height: "250px" }}
              >
                <div className="absolute -top-10 border-blue-600">
                  <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-20 h-20 border-4 border-white" />
                </div>
                <p className="font-proxima-nova text-gray-500 mb-4 mt-12 px-4" style={{ fontSize: "12px", fontWeight: "400", lineHeight: "18px" }}>
                  {testimonial.text}
                </p>
                <h3 className="text-lg text-teal-600 font-bold">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
          <button onClick={goToPrevious} className="text-teal-600 mx-2">&lt;</button>
          <button onClick={goToNext} className="text-teal-600 mx-2">&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
