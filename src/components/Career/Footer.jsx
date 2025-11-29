import React from 'react';
import Frame1 from './Frame 1.svg';

export default function Footer() {
  return (
    <footer className="flex flex-col lg:mr-12.5 lg:m-10 m-5">
      <div className="linksContainer  grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 bg-white justify-between ">
        <div className="flex flex-col lg:space-y-2.5 lg:m-2.5 lg:p-2.5 p-2.5 lg:text-base text-[6px] ">
          <a href="#" className="text-black font-bold">Services</a>
          <a href="#" className="hover:underline">Artificial Intelligence</a>
          <a href="#" className="hover:underline">AR/VR</a>
          <a href="#" className="hover:underline">Block Chain</a>
          <a href="#" className="hover:underline">Internet of Things</a>
        </div>
        <div className="flex flex-col lg:space-y-2.5 lg:m-2.5 lg:p-2.5 p-2.5 lg:text-base text-[6px]">
          <a href="#" className="text-black font-bold">Career</a>
          <a href="#" className="hover:underline">Life at Rhodium</a>
          <a href="#" className="hover:underline">Job Openings</a>
          <a href="#" className="hover:underline">Apply New</a>
        </div>
        <div className="flex flex-col lg:space-y-2.5 lg:m-2.5 lg:p-2.5 p-2.5 lg:text-base text-[6px]">
          <a href="#" className="text-black font-bold">Social</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
        <div className="flex flex-col lg:space-y-2.5 lg:m-2.5 lg:p-2.5 p-2.5 lg:text-base text-[6px]">
          <a href="#" className="text-black font-bold">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookies</a>
          <a href="#" className="hover:underline">License</a>
          <a href="#" className="hover:underline">Settings</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <div className="flex flex-col lg:space-y-2.5 lg:m-2.5 lg:p-2.5 p-2.5 lg:text-base text-[6px]">
          <a href="#" className="text-black font-bold">About us</a>
          <a href="#" className="hover:underline">Mission</a>
          <a href="#" className="hover:underline">Vision</a>
          <a href="#" className="hover:underline">Values</a>
          <a href="#" className="hover:underline">Team</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
      <div className="logoRightsContainer flex flex-row justify-between lg:m-2.5 lg:p-2.5 items-center lg:mt-10">
        <img className="lg:w-[175px] w-20" src={Frame1} alt="Rhodium Logo" />
        <p className="lg:text-lg text-[6px]">© 2077 Rhodium Tech, All rights reserved.</p>
      </div>
    </footer>
  );
}



