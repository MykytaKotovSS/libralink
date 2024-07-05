import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import About from "pages/About";
import Services from "pages/Services";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sustainability" element={<p>Sustainability</p>} />
        <Route path="/contact-us" element={<p>Contact us</p>} />
        <Route path="/" element={<p>Home</p>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
