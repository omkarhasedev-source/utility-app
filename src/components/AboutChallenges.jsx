import React from 'react';
import '../css/AboutChallenges.css';
/* --- IMAGE SOURCE --- */
import challengeImage from '../images/67dc898397506cafcebc181f_visualelectric-1742506359313.avif';

/* --- ICONS --- */
const ArrowUpRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const AboutChallenges = () => {
  return (
    <section className="challenges-section">
      <div className="challenges-container">
        
        {/* --- LEFT COLUMN: IMAGE WITH CUTOUT --- */}
        <div className="challenges-image-wrapper">
          
          {/* 1. The White Cutout Div (Top-Left) */}
          <div className="white-cutout-overlay"></div>

          {/* 2. The Image Container */}
          <div className="challenges-img-inner">
            <img 
              src={challengeImage} 
              alt="Office meeting" 
              className="challenges-img" 
            />
          </div>
        </div>

        {/* --- RIGHT COLUMN: CONTENT --- */}
        <div className="challenges-content">
          <span className="challenges-label">About Us</span>
          
          <h2 className="challenges-heading">
            We look for interesting challenges that move people forward.
          </h2>

          <div className="challenges-btn-group">
            <a href="#careers" className="btn-careers">
              Careers <ArrowUpRightIcon />
            </a>
            <a href="#about" className="link-about">
              About Us <ArrowUpRightIcon />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutChallenges;