import React from 'react';
import Image from 'next/image';
import './aboutus.css';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        {/* Left Content */}
        <div className="about-content">
          <h2 className="about-title">About US</h2>
          <p className="about-subtitle">&quot;Connecting Alumni, Empowering Futures.&quot;</p>
          
          <div className="about-text">
            <h3 className="section-heading">Who we are?</h3>
            <p className="section-description">
              We are a team of innovators passionate about strengthening 
              the bond between institutions and their alumni. Our platform 
              is designed to provide a centralized, secure, and user-friendly 
              system to manage alumni data and engagement.
            </p>
          </div>
          
          <div className="about-text">
            <h3 className="section-heading">What We Do?</h3>
            <p className="section-description">Our alumni management platform helps institutions:</p>
            <ul className="features-list">
              <li>Maintain a verified and up-to-date alumni database</li>
              <li>Enable seamless communication with alumni</li>
              <li>Organize and promote events, reunions, and webinars</li>
              <li>Facilitate mentorship, internships, and career opportunities</li>
              <li>Support fundraising and community initiatives</li>
            </ul>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="about-image">
          <Image
            src="https://ik.imagekit.io/1s9qh4gz6/Gemini_Generated_Image_wsw1mmwsw1mmwsw1%201.png?updatedAt=1758346900602"
            alt="Business professionals collaborating"
            width={500}
            height={400}
            className="handshake-image"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;