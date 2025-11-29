import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaUsers, FaTrophy, FaGlobe, FaRocket, FaHeart } from "react-icons/fa";

const Statistics = () => {
  const stats = [
    {
      icon: <FaTrophy className="text-4xl text-purple-500" />,
      number: "12+",
      label: "Awards Won",
      description: "Industry recognition and excellence"
    },
    {
      icon: <FaRocket className="text-4xl text-red-500" />,
      number: "99%",
      label: "Client Satisfaction",
      description: "Consistently high satisfaction rates"
    },
    {
      icon: <FaHeart className="text-4xl text-pink-500" />,
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance"
    },
    {
      icon: <FaCode className="text-4xl text-blue-500" />,
      number: "50+",
      label: "Technologies Mastered",
      description: "Cutting-edge tech expertise"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and client success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work With Us?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join the ranks of successful businesses that trust us with their digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
