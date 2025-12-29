import React from 'react';
import '../css/Footer.css';

import LOGO from '../images/6703562024e5f9c44b6d693e_brand_wordmark-grey.svg';

// Define data structures for easier management and rendering
const footerSections = [
  {
    title: "Utility",
    links: [
      { label: "Our Work", url: "/work" },
      { label: "About Us", url: "/about" },
      { label: "Thoughts", url: "/thoughts" },
      { label: "Learn", url: "/learn" },
      { label: "Careers", url: "/careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Tech & Innovation", url: "/services/tech" },
      { label: "Experience & Design", url: "/services/design" },
      { label: "Strategy & Consulting", url: "/services/strategy" },
      { label: "Product Growth", url: "/services/growth" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Mobile App Development", url: "/solutions/mobile" },
      { label: "Web Development", url: "/solutions/web" },
      { label: "AI Solutions", url: "/solutions/ai" },
      { label: "UX/UI Design", url: "/solutions/uxui" },
      { label: "IoT Development", url: "/solutions/iot" },
      { label: "Custom Software Development", url: "/solutions/custom" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", url: "/company/about" },
      { label: "Our Team", url: "/company/team" },
      { label: "We're Hiring", url: "/company/hiring" },
      { label: "Terms of Service", url: "/terms" },
      { label: "Privacy Policy", url: "/privacy" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", url: "https://linkedin.com" },
  { label: "Twitter", url: "https://twitter.com" },
  { label: "Instagram", url: "https://instagram.com" },
];

// Simple SVG arrow icon component for external links and back to top
const ArrowIcon = ({ className, direction = "up" }) => {
    const rotation = direction === "up" ? "0deg" : "45deg";
    return (
        <svg 
            className={className} 
            width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: `rotate(${rotation})` }}
        >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
    );
};


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="utility-footer">
      {/* Top Section - Big Wordmark */}
      <div className="footer-wordmark-container">
        
        <img 
          src={LOGO} 
          alt="Utility Logo" 
          className="footer-wordmark"
        />
      </div>

      {/* Middle Section - Navigation Links */}
      <div className="footer-nav-container">
        {footerSections.map((section, index) => (
          <div key={index} className="footer-column">
            <h3 className="footer-heading">{section.title}</h3>
            <ul className="footer-list">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.url} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Socials Column (Separate structure for icons) */}
        <div className="footer-column socials-column">
            <h3 className="footer-heading">Socials</h3>
            <ul className="footer-list">
                {socialLinks.map((social, index) => (
                    <li key={index}>
                        <a href={social.url} target="_blank" rel="noopener noreferrer" className="footer-link social-link">
                            {social.label}
                            <ArrowIcon className="link-arrow" direction="ne" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
      </div>

      {/* Bottom Section - Copyright and Back to Top */}
      <div className="footer-bottom">
        <div className="copyright">
          © 2025 Utility
        </div>
        <button onClick={scrollToTop} className="back-to-top-btn">
          <ArrowIcon className="btt-arrow" direction="up" />
          Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;