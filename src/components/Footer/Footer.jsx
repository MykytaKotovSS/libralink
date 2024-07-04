import "./Footer.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/icons/Command.svg";
import { ReactComponent as Copyright } from "assets/icons/Copyright.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="nav container">
        <Link to="/" className="logo">
          <Logo />
          Libralink
        </Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/sustainability">Sustainability</Link>
        <Link to="/contact-us">Contact us</Link>
      </nav>
      <nav className="links container">
        <span>Privacy Policy | Terms & Conditions</span>
        <span>All rights reserved</span>
        <span className="logo">
          <Copyright /> 2024 LibraLink
        </span>
      </nav>
    </footer>
  );
};

export default Footer;
