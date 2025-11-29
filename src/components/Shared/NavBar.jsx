import React, { useState, useEffect, useContext } from "react";
import companylogo from "../../assets/images/logo.png";
import companylogo2 from "../../assets/images/image 23.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { ScrollContext } from "../../ScrollContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isVideoSectionInView, setIsVideoSectionInView] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);

  const { setScrollToForm } = useContext(ScrollContext);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openServicesMenu = () => {
    setIsServicesOpen(true);
  };

  const closeServicesMenu = () => {
    setIsServicesOpen(false);
  };

  const handleScrollToForm = () => {
    setScrollToForm(true);
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById("video-section");
      if (videoSection) {
        const rect = videoSection.getBoundingClientRect();
        setIsVideoSectionInView(
          rect.top <= window.innerHeight && rect.bottom >= 0
        );
      }
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setIsVideoSectionInView(false);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsVideoSectionInView(false);
    } else {
      setIsVideoSectionInView(true);
    }
  }, [location.pathname]);

  const textColorClass = isVideoSectionInView ? "text-white" : "text-gray-500";
  const hoverColorClass = isVideoSectionInView
    ? "hover:text-teal-500"
    : "hover:text-teal-500";
  const image = isVideoSectionInView ? companylogo2 : companylogo;
  const navbarBgClass = isVideoSectionInView ? "bg-transparent" : "bg-white";
  const marginBottomClass = isVideoSectionInView ? "" : "mb-20";
  const shadowClass = hasShadow ? "shadow-md" : "";

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 ${navbarBgClass} ${marginBottomClass} ${shadowClass} z-50`}
    >
      <div
        onMouseLeave={closeServicesMenu}
        className="container mx-auto flex justify-between items-center whitespace-nowrap"
      >
        <Link to="/">
          <img
            src={image}
            alt="Rhodium Tech Logo"
            className="h-20 mr-2 cursor-pointer"
          />
        </Link>
        <div className="hidden md:flex md:space-x-10 lg:space-x-24">
          <Link
            to="/"
            className={`${textColorClass} font-inter font-bold ${hoverColorClass}`}
          >
            Home
          </Link>
          <div className="relative">
            <Link
              to="/services"
              onMouseEnter={openServicesMenu}
              className={`${textColorClass} font-inter font-bold ${hoverColorClass} focus:outline-none`}
            >
              Services
            </Link>
            {isServicesOpen && (
              <div className="absolute bg-white shadow-md mt-2 rounded w-48">
                <Link
                  to="/services"
                  className={`block px-4 py-2 text-gray-500 font-inter font-bold ${hoverColorClass}`}
                >
                  All Services
                </Link>
                <div className="border-t border-gray-200"></div>
                <div className="px-4 py-2 text-gray-400 text-sm font-medium">Our Services</div>
                <Link
                  to="/services#web-development"
                  className={`block px-4 py-2 text-gray-500 font-inter font-bold ${hoverColorClass}`}
                >
                  Web Development
                </Link>
                <Link
                  to="/services#mobile-app-development"
                  className={`block px-4 py-2 text-gray-500 font-inter font-bold ${hoverColorClass}`}
                >
                  Mobile Apps
                </Link>
                <Link
                  to="/services#ai-solutions"
                  className={`block px-4 py-2 text-gray-500 font-inter font-bold ${hoverColorClass}`}
                >
                  AI Solutions
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/about-us"
            className={`${textColorClass} font-inter font-bold ${hoverColorClass}`}
          >
            About Us
          </Link>
          <Link
            to="/careers"
            className={`${textColorClass} font-inter font-bold ${hoverColorClass}`}
          >
            Careers
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <button
            onClick={handleScrollToForm}
            className="bg-[#289997] text-white px-4 py-2 rounded-lg font-inter font-inter-700"
          >
            Contact Us
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <HiMenuAlt3 size="1.5rem" className={`${textColorClass}`} />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 mt-2 justify-start items-start">
          <Link
            to="/"
            onClick={toggleMenu}
            className={`${textColorClass} font-inter font-bold ${hoverColorClass}`}
          >
            Home
          </Link>
          <button
            onClick={openServicesMenu}
            className={`${textColorClass} font-inter font-bold ${hoverColorClass} focus:outline-none`}
          >
            Services
          </button>
          {isServicesOpen && (
            <div className="flex flex-col space-y-2 mt-2 ml-4 items-start">
              <Link
                to="/services"
                onClick={toggleMenu}
                className={`${textColorClass} font-inter font-bold ${hoverColorClass}`}
              >
                All Services
              </Link>
              <Link
                to="/services#web-development"
                onClick={toggleMenu}
                className={`${textColorClass} font-inter font-bold ${hoverColorClass}`}
              >
                Web Development
              </Link>
              <Link
                to="/services#mobile-app-development"
                onClick={toggleMenu}
                className={`${textColorClass} font-inter font-bold ${hoverColorClass}`}
              >
                Mobile Apps
              </Link>
              <Link
                to="/services#ai-solutions"
                onClick={toggleMenu}
                className={`${textColorClass} font-inter font-bold ${hoverColorClass}`}
              >
                AI Solutions
              </Link>
            </div>
          )}
          <Link
            to="/about-us"
            onClick={toggleMenu}
            className={`${textColorClass} font-inter font-bold ${hoverColorClass}`}
          >
            About Us
          </Link>
          <Link
            to="/careers"
            onClick={toggleMenu}
            className={`${textColorClass} font-inter font-bold ${hoverColorClass}`}
          >
            Careers
          </Link>
        </div>
        <button
          onClick={handleScrollToForm}
          className="bg-[#289997] text-white px-4 py-2 rounded-lg font-inter font-inter-700 mt-2"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
