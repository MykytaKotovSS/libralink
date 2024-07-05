import "./Header.scss";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "assets/icons/Command.svg";
import { ReactComponent as Chats } from "assets/icons/Chats.svg";

const Header = () => {
  const location = useLocation();
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
            className={location.pathname === "/about-us" ? "active" : ""}
          >
            About Us
          </Link>

          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
          >
            Services
          </Link>

          <Link
            to="/sustainability"
            className={location.pathname === "/sustainability" ? "active" : ""}
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
      </div>
    </header>
  );
};

export default Header;
