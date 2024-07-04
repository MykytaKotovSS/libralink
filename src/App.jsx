import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about-us" element={<p>About us</p>} />
          <Route path="/services" element={<p>Services</p>} />
          <Route path="/sustainability" element={<p>Sustainability</p>} />
          <Route path="/contact-us" element={<p>Contact us</p>} />
          <Route path="/" element={<p>Home</p>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
