import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side (Empty) */}
        {/* <div className="flex-shrink-0"></div> */}

        {/* Centered Logo */}
        <div className="flex-grow flex justify-center">
          <a href="/" className="text-white text-lg font-bold">
            <img src={logo} alt="MitAdtAppsLogo" className="h-24" />
          </a>
        </div>

        {/* Right Side (Empty) */}
        {/* <div className="flex-shrink-0"></div> */}
      </div>
    </nav>
  );
}

export default Navbar;