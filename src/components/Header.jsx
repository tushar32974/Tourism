import React, { useState, useEffect } from "react";
import logo from "../images/arabian-ark-logo.png";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <nav className={`main_nav ${showMenu ? "show" : ""}`}>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/packages">PACKAGES</Link>
              </li>
              <li>
                <Link to="/attractions">ATTRACTIONS</Link>
              </li>
              <li>
                <Link to="/mice">MICE</Link>
              </li>
              <li>
                <Link to="/vehiclefleet">VEHICLE FLEET</Link>
              </li>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </nav>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
