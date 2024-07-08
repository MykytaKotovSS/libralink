import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import About from "pages/About";
import Services from "pages/Services";
import Sustainability from "pages/Sustainability";
import Home from "pages/Home";
import ContactUs from "pages/ContactUs";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
