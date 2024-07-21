import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0"></div>
        <div className="flex-grow flex justify-center">
          <a href="/">
            <img src={logo} alt="MitAdtAppsLogo" className="h-24" />
          </a>
        </div>
        <div className="flex-shrink-0"></div>
      </div>
    </nav>
  );
}

export default Navbar;