import React from 'react';
import '../css/ProjectCTA.css';

/* --- ICON --- */
const ArrowUpRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const ProjectCTA = () => {
  return (
    <section className="project-cta-section">
      <div className="cta-content-wrapper">
        
        {/* Sub Heading */}
        <span className="cta-sublabel">Let's talk —</span>
        
        {/* Main Heading */}
        <h2 className="cta-heading">
          We'd love to hear about <br className="desktop-break" />
          your project
        </h2>

        {/* Action Button */}
        <a href="#start-project" className="btn-start-project">
          Start a Project <ArrowUpRightIcon />
        </a>

      </div>
    </section>
  );
};

export default ProjectCTA;