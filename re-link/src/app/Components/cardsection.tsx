import React from 'react';
import Image from 'next/image';
import './cardsection.css';

const CardSection = () => {
  return (
    <section className="cards-section">
      <div className="cards-container">
        {/* Alumni Card */}
        <div className="card alumni-card">
          <div className="card-header">
            <h2 className="card-title">For Alumni →</h2>
            <div className="card-icon alumni-icon">
              <Image
                src="https://ik.imagekit.io/1s9qh4gz6/eos-icons_neural-network.svg?updatedAt=1758303675623"
                alt="Neural Network Icon"
                width={24}
                height={24}
                className="card-icon-image"
              />
            </div>
          </div>
          <div className="card-content">
            <p className="card-description">
              Reconnect with classmates, find mentors, 
              and stay updated on university events.
              Access career resources and professional circle
            </p>
            <button className="card-button alumni-button">
              Find your College
            </button>
          </div>
        </div>

        {/* Administrators Card */}
        <div className="card admin-card">
          <div className="card-header">
            <h2 className="card-title">For Administrators →</h2>
            <div className="card-icon admin-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="card-content">
            <p className="card-description">
              Manage Alumni data, track engagement 
              and simplify outreach, generate insights
              and faster or stronger community
            </p>
            <button className="card-button admin-button">
              Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;