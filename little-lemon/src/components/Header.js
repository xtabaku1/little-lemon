import React from "react";
import logo from "./../images/logo.jpg";
import Nav from "./Nav";
import "./Header.css";
import HamburgerMenu from "./HamburgerMenu";
const Header = () => {
  return (
    <header className="header">
      <div className="mobile-header">
        <HamburgerMenu />
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <div className="desktop-header">
        <img src={logo} alt="Little Lemon Logo" />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
