import React, { useState, useEffect } from 'react';
import ProjectsPhone from './ProjectsPhone'; // Adjust the path as per your project structure
import ProjectsDesktop from './ProjectsDesktop'; // Adjust the path as per your project structure
import Company from "./Company/Company";
import CompanyPhone from "./CompanyPhones/CompanyPhones";
const NewSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to handle screen size change
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Example threshold for small screen
    };

    // Initial setup
    handleResize();

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section > {/* Conditionally render components based on screen size */}
      {isSmallScreen ? (
        <CompanyPhone /> // Render for small screens

      ) : (
        
        <Company/> // Render for larger screens
      )}
    </section>
  );
};

export default NewSection;
