import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import '../css/Navbar.css';
import logoImg from '../images/670305d9ae16dd209d165966_brand_mark-white.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showNavContent, setShowNavContent] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    const logoTimer = setTimeout(() => setIsLoading(false), 1000);
    const linksTimer = setTimeout(() => setShowNavContent(true), 2500);
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(linksTimer);
    };
  }, []);

  return (
    <header className="navbar">
      {/* Loading Screen */}
      <div className={`screen-cover ${isLoading ? 'visible' : 'hidden'}`}></div>

      <div className="navbar-container">
        
        {/* LEFT LINKS */}
        <div className={`nav-left ${showNavContent && !isMenuOpen ? 'visible' : 'hidden'}`}>
          <nav className="desktop-nav">
            {/* Use /#section to ensure it works from other pages */}
            <a href="/#company" className="nav-link">Our Company</a>
            <a href="/#expertise" className="nav-link">Our Expertise</a>
            <a href="/#work" className="nav-link">Our Work</a>
          </nav>
          
          {/* MOBILE CONTACT LINK -> Points to /contact Page */}
          <Link to="/contact" className="mobile-contact-link">
            Contact
            <svg className="arrow-icon-sm" width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* CENTER LOGO */}
        <div className={`nav-center ${isLoading ? 'splash-active' : 'navbar-final'} ${isMenuOpen ? 'menu-active' : ''}`}>
          <Link to="/" className="brand-logo">
            <img src={logoImg} alt="Utility Brand" className="logo-image" />
          </Link>
        </div>

        {/* RIGHT LINKS */}
        <div className={`nav-right ${showNavContent ? 'visible' : 'hidden'} ${isMenuOpen ? 'menu-active' : ''}`}>
          
          {/* CTA LINK -> Points to /contact Page */}
          <Link to="/contact" className="cta-link desktop-cta">
            <span className="cta-text">Start a project</span>
            <svg className="arrow-icon" width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </button>
        </div>

      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-links-wrapper">
          <a href="/#work" className="mobile-link-item" onClick={toggleMenu}>Work</a>
          <a href="/#services" className="mobile-link-item" onClick={toggleMenu}>Services</a>
          <a href="/#about" className="mobile-link-item" onClick={toggleMenu}>About</a>
          <Link to="/contact" className="mobile-link-item" onClick={toggleMenu}>Contact</Link>
        </div>
        
        <div className="mobile-menu-footer">
          <a href="#linkedin">LinkedIn ↗</a>
          <a href="#twitter">Twitter ↗</a>
          <a href="#instagram">Instagram ↗</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;