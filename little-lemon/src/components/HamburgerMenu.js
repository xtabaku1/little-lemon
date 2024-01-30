import React, { useState, useEffect, useRef } from "react";
import "./HamburgerMenu.css";
import Nav from "./Nav";
import HamburgerIcon from "./../images/hamburger-menu.svg"; // Import your SVG icon here

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <img src={HamburgerIcon} alt="Hamburger Icon" />{" "}
      </div>
      <div className="sidebar" ref={sidebarRef}>
        <Nav />
      </div>
    </div>
  );
};

export default HamburgerMenu;
