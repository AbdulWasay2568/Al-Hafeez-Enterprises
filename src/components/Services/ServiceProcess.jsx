import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaPenFancy, FaCode, FaRocket, FaCog, FaCheckCircle } from "react-icons/fa";

const ServiceProcess = () => {
  const processSteps = [
    {
      icon: <FaLightbulb className="text-3xl text-yellow-500" />,
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and project requirements. This phase includes market research, competitor analysis, and defining the project scope.",
      details: [
        "Business Analysis",
        "Market Research", 
        "Competitor Analysis",
        "Project Scope Definition",
        "Technology Stack Selection"
      ]
    },
    {
      icon: <FaPenFancy className="text-3xl text-blue-500" />,
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and interactive prototypes. We focus on user experience (UX) and user interface (UI) design to ensure your product is both beautiful and functional.",
      details: [
        "Wireframing",
        "UI/UX Design",
        "Interactive Prototypes",
        "Design System Creation",
        "User Testing"
      ]
    },
    {
      icon: <FaCode className="text-3xl text-green-500" />,
      title: "Development",
      description: "Our experienced developers bring your design to life using the latest technologies and best practices. We follow agile methodologies for efficient and transparent development.",
      details: [
        "Frontend Development",
        "Backend Development",
        "Database Design",
        "API Integration",
        "Quality Assurance"
      ]
    },
    {
      icon: <FaCog className="text-3xl text-purple-500" />,
      title: "Testing & Optimization",
      description: "We conduct thorough testing across all devices and browsers, optimize performance, and ensure your product meets the highest quality standards before launch.",
      details: [
        "Cross-browser Testing",
        "Performance Optimization",
        "Security Testing",
        "User Acceptance Testing",
        "Bug Fixing"
      ]
    },
    {
      icon: <FaRocket className="text-3xl text-red-500" />,
      title: "Launch & Support",
      description: "We handle the deployment process and provide ongoing support and maintenance to ensure your product continues to perform optimally and evolves with your business needs.",
      details: [
        "Deployment",
        "Performance Monitoring",
        "Ongoing Support",
        "Feature Updates",
        "Maintenance"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology that ensures your project is delivered on time, 
            within budget, and exceeds your expectations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-teal-200"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white rounded-xl shadow-md mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                            Step {index + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What We Do:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-gray-600">
                            <FaCheckCircle className="text-green-500 mr-3 text-sm" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
