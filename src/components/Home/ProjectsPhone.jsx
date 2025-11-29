import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { name: 'VERTE CHARGE', color: 'bg-white border border-teal-600', textColor: 'text-teal-700', link: '/verte-charge' },
  { name: 'SNACK OUT', color: 'bg-teal-600', textColor: 'text-teal-100', link: '/snackout' },
  { name: 'MED TECH', color: 'bg-white border border-teal-600', textColor: 'text-teal-700', link: '/medai' },
  { name: 'OMC<br/>TECH', color: 'bg-teal-600', textColor: 'text-teal-100', link: null },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Adjust the delay as needed (3000ms = 3s)
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 sm:py-16 px-2 sm:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-3xl text-gray-500 font-inter font-bold mb-6">
          Projects
        </h2>
        <div className="relative w-full flex flex-wrap h-96 sm:h-96 justify-center items-center overflow-hidden">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-1000 cursor-pointer ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              {project.link ? (
                <Link to={project.link} className={`w-64 h-64 sm:w-80 sm:h-80 rounded-lg flex items-center justify-center ${project.color} ${project.textColor}`} style={{ padding: '20px' }}>
                  <span dangerouslySetInnerHTML={{ __html: project.name }} className="font-inter font-bold text-2xl sm:text-2xl" style={{ fontSize: '44px', fontWeight: '700', lineHeight: '38px', textAlign: 'center' }}></span>
                </Link>
              ) : (
                <div className={`w-64 h-64 sm:w-80 sm:h-80 rounded-lg flex items-center justify-center ${project.color} ${project.textColor}`} style={{ padding: '20px' }}>
                  <span dangerouslySetInnerHTML={{ __html: project.name }} className="font-inter font-bold text-2xl sm:text-2xl" style={{ fontSize: '44px', fontWeight: '700', lineHeight: '38px', textAlign: 'center' }}></span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
