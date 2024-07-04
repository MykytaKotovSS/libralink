import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="menu">
        <nav className="nav">
          <Link to="/">Libralink</Link>

          <Link to="/about-us">About Us</Link>

          <Link to="/services">Services</Link>

          <Link to="/sustainability">Sustainability</Link>
        </nav>
        <div className="contact">
          <Link to="/contact-us">Contact us</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
