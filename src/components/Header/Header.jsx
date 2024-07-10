import "./Header.scss";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "assets/icons/Command.svg";
import { ReactComponent as Chats } from "assets/icons/Chats.svg";
import { ReactComponent as ChatsMobile } from "assets/icons/ChatsMobile.svg";
import { ReactComponent as Open } from "assets/icons/List.svg";
import { ReactComponent as Close } from "assets/icons/X.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="menu container">
        <nav className="nav">
          <Link to="/" className="logo">
            <Logo />
            Libralink
          </Link>
          <Link
            to="/about-us"
            className={`nav-desktop ${
              location.pathname === "/about-us" ? "active" : ""
            }`}
          >
            About Us
          </Link>

          <Link
            to="/services"
            className={`nav-desktop ${
              location.pathname === "/services" ? "active" : ""
            }`}
          >
            Services
          </Link>

          <Link
            to="/sustainability"
            className={`nav-desktop ${
              location.pathname === "/sustainability" ? "active" : ""
            }`}
          >
            Sustainability
          </Link>
        </nav>
        <div className="contact">
          <Link to="/contact-us">
            <Chats />
            Contact us
          </Link>
        </div>
        <div className="contact-mobile">
          <Link to="/contact-us">
            <ChatsMobile />
          </Link>
          {isMenuOpen ? (
            <Close onClick={toggleMenu} />
          ) : (
            <Open onClick={toggleMenu} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
