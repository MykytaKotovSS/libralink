import "./Footer.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/icons/Command.svg";

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
    </footer>
  );
};

export default Footer;
