import React from 'react';
import Image from 'next/image';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Information for Alumni Section */}
        <div className="footer-column">
          <h3 className="footer-heading">Information for Alumni</h3>
          <ul className="footer-links">
            <li><a href="/login">SignIn/SignUp</a></li>
            <li><a href="/eligibility">Eligibility</a></li>
            <li><a href="/update-details">Update your details</a></li>
            <li><a href="/certificates">Degree, Certificates and Ceremonies</a></li>
          </ul>
        </div>

        {/* Alumni Office Section */}
        <div className="footer-column">
          <h3 className="footer-heading">Alumni Office</h3>
          <div className="office-info">
            <p><strong>About</strong></p>
            <p>Block A 111, Campus 25</p>
            <p>KIIT University</p>
            <p>Patia,</p>
            <p>Bhubaneshwar (Odisha)</p>
            <p>India</p>
            <p>751024</p>
            <p>+91 790900xxxx</p>
            <p>2305xxx@kiit.ac.in</p>
          </div>
        </div>

        {/* International Offices Section */}
        <div className="footer-column">
          <h3 className="footer-heading">International Offices</h3>
          <ul className="footer-links">
            <li>United States</li>
            <li>China</li>
            <li>Japan</li>
            <li>Russia</li>
            <li>France</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; Copyright 2025, KIIT University</p>
      </div>
    </footer>
  );
};

export default Footer;