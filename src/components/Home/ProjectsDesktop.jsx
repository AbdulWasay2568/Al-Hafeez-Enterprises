import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { name: 'VERTE CHARGE', color: 'bg-white border border-teal-600', textColor: 'text-teal-700', link: '/verte-charge' },
  { name: 'SNACK OUT', color: 'bg-teal-600', textColor: 'text-teal-100', link: '/snackout' },
  { name: 'MED TECH', color: 'bg-white border border-teal-600', textColor: 'text-teal-700', link: '/medai' },
  { name: 'OMC<br/>TECH', color: 'bg-teal-600', textColor: 'text-teal-100', link: null },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl text-gray-500 font-inter font-bold mb-6">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {projects.map((project, index) => (
            project.link ? (
              <Link
                key={index}
                to={project.link}
                className={`w-56 h-56 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-lg flex items-center justify-center ${project.color} ${project.textColor}`}
                style={{ padding: '20px', transition: 'transform 0.3s ease' }}
              >
                <span
                  dangerouslySetInnerHTML={{ __html: project.name }}
                  className="font-inter font-bold text-lg sm:text-2xl"
                  style={{ fontSize: '44px', fontWeight: '700', lineHeight: '38px', textAlign: 'center' }}
                ></span>
              </Link>
            ) : (
              <div
                key={index}
                className={`w-56 h-56  sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-lg flex items-center justify-center ${project.color} ${project.textColor}`}
                style={{ padding: '20px', transition: 'transform 0.3s ease' }}
                onMouseOver={(e) => e.currentTarget.querySelector('span').innerHTML = 'In Progress'}
                onMouseOut={(e) => e.currentTarget.querySelector('span').innerHTML = project.name}
              >
                <span
                  dangerouslySetInnerHTML={{ __html: project.name }}
                  className="font-inter font-bold text-lg sm:text-2xl"
                  style={{ fontSize: '44px', fontWeight: '700', lineHeight: '38px', textAlign: 'center' }}
                ></span>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
