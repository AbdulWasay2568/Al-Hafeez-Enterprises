import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaEye, FaHeart, FaCode, FaUsers, FaGlobe } from "react-icons/fa";

const MissionValues = () => {
  const missionData = {
    mission: {
      icon: <FaRocket className="text-4xl text-blue-500" />,
      title: "Our Mission",
      description: "To empower businesses and individuals through innovative technology solutions that drive growth, enhance productivity, and create meaningful digital experiences.",
      details: [
        "Deliver cutting-edge digital solutions",
        "Foster innovation and creativity",
        "Ensure exceptional user experiences",
        "Drive sustainable business growth"
      ]
    },
    vision: {
      icon: <FaEye className="text-4xl text-teal-500" />,
      title: "Our Vision",
      description: "To be the leading force in digital transformation, shaping the future of technology and creating a world where innovation meets purpose.",
      details: [
        "Lead digital transformation globally",
        "Create technology that matters",
        "Build lasting partnerships",
        "Shape the future of innovation"
      ]
    },
    values: {
      icon: <FaHeart className="text-4xl text-purple-500" />,
      title: "Our Values",
      description: "We are guided by principles that define who we are and how we work, ensuring every project reflects our commitment to excellence.",
      details: [
        "Integrity in everything we do",
        "Collaboration and teamwork",
        "Continuous learning and growth",
        "Client success is our success"
      ]
    }
  };

  const coreValues = [
    {
      icon: <FaCode className="text-3xl text-blue-500" />,
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
    },
    {
      icon: <FaUsers className="text-3xl text-teal-500" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients to achieve shared goals."
    },
    {
      icon: <FaGlobe className="text-3xl text-purple-500" />,
      title: "Impact",
      description: "We create solutions that make a real difference in people's lives and business operations."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Mission, Vision, Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Foundation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define our commitment to excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {Object.entries(missionData).map(([key, data], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {data.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{data.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {data.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Focus Areas:</h4>
                  <ul className="space-y-2">
                    {data.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Core <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Values</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The fundamental principles that shape our culture and drive our success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
