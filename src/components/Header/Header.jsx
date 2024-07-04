import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="menu">
        <ul className="nav-list">
          <li>
            <Link to="/">Libralink</Link>
          </li>
          <li>
            <Link to="/about-us">
              <h3>About Us</h3>
            </Link>
          </li>
          <li>
            <Link to="/services">
              <h3>Services</h3>
            </Link>
          </li>
          <li>
            <Link to="/sustainability">
              <h3>Sustainability</h3>
            </Link>
          </li>
        </ul>
        <ul className="contact">
          <li>
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
