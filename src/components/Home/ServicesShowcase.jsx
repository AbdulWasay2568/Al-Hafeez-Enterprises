import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaRobot, FaArrowRight } from 'react-icons/fa';

const ServicesShowcase = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-blue-500" />,
      title: 'Web Development',
      subtitle: 'Modern & Responsive',
      description: 'Create stunning websites that captivate your audience and drive conversions.',
      link: '/services#web-development',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: <FaMobileAlt className="text-4xl text-teal-500" />,
      title: 'Mobile Apps',
      subtitle: 'iOS & Android',
      description: 'Transform ideas into powerful mobile applications users love.',
      link: '/services#mobile-app-development',
      gradient: 'from-teal-500 to-teal-600',
      bgGradient: 'from-teal-50 to-teal-100'
    },
    {
      icon: <FaRobot className="text-4xl text-purple-500" />,
      title: 'AI Solutions',
      subtitle: 'Intelligent Automation',
      description: 'Harness AI to automate processes and enhance user experiences.',
      link: '/services#ai-solutions',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl text-gray-900 font-inter font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={service.link}>
                <div className={`bg-gradient-to-br ${service.bgGradient} rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    <span className="font-semibold">Learn More</span>
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            to="/services"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Services
            <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
