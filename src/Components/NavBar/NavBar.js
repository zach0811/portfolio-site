import React, { useState, useEffect, useRef } from "react";
import logo from "../../Resources/photo.jpeg"; // Replace with your logo path
import "./NavBar.css";

export const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHamburgerOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <nav className="navbar" ref={dropdownRef}>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`navbar-container${hamburgerOpen ? "-hamburger" : ""}`}>
          <ul className="navbar-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleHamburger}>
          <div className="burger burger1" />
          <div className="burger burger2" />
          <div className="burger burger3" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
