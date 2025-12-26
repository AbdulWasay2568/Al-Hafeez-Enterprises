import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.jpeg'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#heroBanner', label: 'Home' },
    { href: '#about', label: 'About Us' },
    // { href: '#missionValues', label: 'Contact Me' },
    // { href: '#teamSection', label: 'Contact Me' },
    { href: '#services', label: 'Our Services' },
    { href: '#successStories', label: 'Success Stories' },
    // { href: '#workwithus', label: 'Contact Me' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white text-black fixed top-0 z-50 shadow-lg w-full">
      <div className="flex justify-between items-center px-4 py-2 md:px-6 md:py-3 h-16 md:h-20">
        <img
          src={logo}
          alt="Al Hafeez Enterprises Logo"
          className="h-14 md:h-16 cursor-pointer"
        />
        <button onClick={toggleMenu} className="lg:hidden text-black focus:outline-none p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden lg:flex lg:items-center lg:gap-6 lg:flex-1 lg:justify-center">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-sm md:text-base font-medium hover:text-blue-400 transition-colors duration-300" 
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col items-center gap-1 pb-3 lg:hidden bg-white border-t border-gray-200`}
      >
        {navItems.map((item) => (
          <a 
            key={item.href}
            href={item.href} 
            className="text-sm md:text-base font-medium hover:text-blue-400 transition-colors duration-300 w-full text-center py-2 hover:bg-gray-100" 
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
