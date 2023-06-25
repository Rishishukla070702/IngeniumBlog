// Footer.jsx

import React from "react";
import { Link as ScrollLink } from 'react-scroll';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div id="about" className="about-us">
          <h3>About Us</h3>
          <p>We are a blog platform dedicated to providing informative and engaging content to our readers.</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div id="contact" className="footer-bottom">
        <p>&copy; 2023 Your Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
