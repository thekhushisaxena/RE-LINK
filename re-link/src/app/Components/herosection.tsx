import React from 'react';
import Image from 'next/image';
import './herosection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <Image
          src="https://ik.imagekit.io/1s9qh4gz6/Gemini_Generated_Image_5ndzvl5ndzvl5ndz%201%20(1).png?updatedAt=1758302391242"
          alt="Alumni network community"
          fill
          className="hero-image"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title-line">Your Network, Your Legacy,</span>
              <span className="hero-title-line">Your Community</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;