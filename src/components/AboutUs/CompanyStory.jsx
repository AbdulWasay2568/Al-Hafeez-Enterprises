import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaTrophy, FaGlobe, FaCode, FaLightbulb } from "react-icons/fa";

const CompanyStory = () => {
  const timeline = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Founded with a vision to revolutionize digital solutions and empower businesses through technology.",
      icon: <FaRocket className="text-2xl text-blue-500" />,
      achievements: ["Company founded", "First client partnership", "Core team assembled"]
    },
    {
      year: "2020",
      title: "Rapid Growth",
      description: "Expanded our services and built strong partnerships while navigating the challenges of a global pandemic.",
      icon: <FaUsers className="text-2xl text-teal-500" />,
      achievements: ["10+ projects delivered", "Remote work implementation", "Team expansion"]
    },
    {
      year: "2021",
      title: "Innovation Focus",
      description: "Launched our AI solutions division and began developing cutting-edge applications for clients worldwide.",
      icon: <FaLightbulb className="text-2xl text-purple-500" />,
      achievements: ["AI division launched", "International expansion", "Award recognition"]
    },
    {
      year: "2022",
      title: "Global Reach",
      description: "Established offices in multiple countries and became a trusted partner for enterprise clients.",
      icon: <FaGlobe className="text-2xl text-green-500" />,
      achievements: ["Global presence", "Enterprise partnerships", "100+ projects milestone"]
    },
    {
      year: "2023",
      title: "Excellence Achieved",
      description: "Received industry recognition and continued to push boundaries in web development and mobile applications.",
      icon: <FaTrophy className="text-2xl text-yellow-500" />,
      achievements: ["Industry awards", "Advanced AI solutions", "Client satisfaction 99%"]
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Continuing to innovate with emerging technologies and expanding our impact in the digital transformation space.",
      icon: <FaCode className="text-2xl text-red-500" />,
      achievements: ["Next-gen solutions", "Sustainability focus", "Community impact"]
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
            Our <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to industry leadership, discover the milestones that shaped our success
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-teal-200"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
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
                  <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gray-50 rounded-xl mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                            {item.year}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3"></div>
                            {achievement}
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

        {/* Future Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              The Future is <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Bright</span>
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              As we look ahead, we're excited about the possibilities that emerging technologies bring. 
              Our commitment to innovation, excellence, and client success remains unwavering as we continue 
              to shape the future of digital solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2025+</div>
                <div className="text-gray-300">Next-Gen Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">Global</div>
                <div className="text-gray-300">Worldwide Impact</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Innovation</div>
                <div className="text-gray-300">Continuous Evolution</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStory;
