// RoutesComponent.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route for routing
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default RoutesComponent;
