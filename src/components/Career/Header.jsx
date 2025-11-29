import React, { useState } from 'react';
import Frame1 from './Frame 1.svg';
import { Menu,X } from 'lucide-react'; // Assuming you're using the 'react-feather' library for icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white flex justify-between p-2 m-2 lg:m-[-10px] lg:p-1 lg:ml-7 lg:mr-2 md:p-4">
      <div className="flex flex-row justify-between items-center md:m-l-8">
        <div className="flex flex-row lg:m-10 m-[1px] items-center">
          <img className="w-20 lg:w-40 md:w-36" src={Frame1} alt="Rhodium Logo" />
          <nav className={`bg-white flex flex-row justify-between lg:ml-8 ml-2 items-center ${isOpen ? 'block' : 'hidden'} lg:flex`}>
            <a href="#" className="lg:mx-4 lg:text-lg mx-1 text-xs hover:text-[rgba(102,112,133,1)]">Home</a>
            <a href="#" className="lg:mx-4 lg:text-lg mx-1 text-xs hover:text-[rgba(102,112,133,1)]">Products</a>
            <a href="#" className="lg:mx-4 lg:text-lg mx-1 text-xs hover:text-[rgba(102,112,133,1)]">About Us</a>
            <a href="#" className="lg:mx-4 lg:text-lg mx-1 text-xs hover:text-[rgba(102,112,133,1)]">Career</a>
          </nav>
        </div>
      </div>
      <div className="flex items-center lg:m-4 lg:space-x-4 m-1 ml-28  md:ml-96">
        <button className="bg-white text-black border-white hover:text-[rgba(102,112,133,1)] rounded-md lg:px-4 lg:py-2 p-1 border font-inter">Log in</button>
        <button className="bg-black text-white border-black hover:bg-[rgba(102,112,133,1)] rounded-md lg:px-4 lg:py-2 p-1 border font-inter">Sign up</button>
      </div>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleNavbar}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
