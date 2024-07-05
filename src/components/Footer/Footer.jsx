import "./Footer.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "assets/icons/Command.svg";
import { ReactComponent as Copyright } from "assets/icons/Copyright.svg";

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="footer">
      <nav className="nav container">
        <div onClick={() => handleLinkClick("/")} className="logo">
          <Logo />
          Libralink
        </div>
        <div onClick={() => handleLinkClick("/about-us")}>About Us</div>
        <div onClick={() => handleLinkClick("/services")}>Services</div>
        <div onClick={() => handleLinkClick("/sustainability")}>
          Sustainability
        </div>
        <div onClick={() => handleLinkClick("/contact-us")}>Contact us</div>
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
