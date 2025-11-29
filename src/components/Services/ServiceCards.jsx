import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaRobot, FaArrowRight } from "react-icons/fa";

const ServiceCards = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-blue-500" />,
      title: "Web Development",
      subtitle: "Modern & Responsive",
      description: "We create stunning, high-performance websites that captivate your audience and drive conversions. From sleek corporate sites to complex e-commerce platforms, we build digital experiences that work seamlessly across all devices.",
      features: [
        "Responsive Design",
        "SEO Optimization", 
        "Performance Optimization",
        "Content Management Systems",
        "E-commerce Solutions",
        "Custom Web Applications"
      ],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      icon: <FaMobileAlt className="text-4xl text-teal-500" />,
      title: "Mobile App Development",
      subtitle: "iOS & Android",
      description: "Transform your ideas into powerful mobile applications that users love. We develop native and cross-platform apps that deliver exceptional performance and user experience on both iOS and Android platforms.",
      features: [
        "Native iOS & Android",
        "Cross-Platform Development",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality"
      ],
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100"
    },
    {
      icon: <FaRobot className="text-4xl text-purple-500" />,
      title: "AI Solutions",
      subtitle: "Intelligent Automation",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and enhance user experiences. From machine learning models to intelligent chatbots, we create AI solutions that drive real business value.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Intelligent Chatbots",
        "Process Automation"
      ],
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to your business needs. 
            Each service is designed to deliver exceptional results and drive your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.title.toLowerCase().replace(/\s+/g, '-')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${service.bgGradient} rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 font-medium">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                  Learn More
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
