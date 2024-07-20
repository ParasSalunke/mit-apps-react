import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0"></div>
        <div className="flex-grow flex justify-center">
          <Link href="/" >
            <img src={logo} alt="MitAdtAppsLogo" className="h-24" />
          </Link>
        </div>
        <div className="flex-shrink-0"></div>
      </div>
    </nav>
  );
}

export default Navbar;