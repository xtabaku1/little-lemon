// Nav.js
import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/booking">Booking</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
