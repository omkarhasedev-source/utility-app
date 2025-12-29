import React from 'react';
import '../css/ContactFooter.css';
import Footer from './Footer';

/* --- ICONS --- */
const ArrowUpRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

/* --- BRAND ICONS --- */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 1 1 1.68-1.68c0 .93-.75 1.69-1.68 1.69zm1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

/* --- IMAGE URLS --- */
const imgNewYork = "https://cdn.prod.website-files.com/5c896a1dcef909ad687ede7b/67643f74a5dd38085867821c_Imagem%201201x1479.avif";
const imgLosAngeles = "https://cdn.prod.website-files.com/5c896a1dcef909ad687ede7b/67643f99dee2c32fced16655_Imagem%20600x900.avif";

const ContactFooter = () => {
  return (
    <>
    <footer className="contact-footer-section" id="contact">
      <div className="contact-container">
        
        {/* --- HEADER --- */}
        <div className="contact-header">
          <h2 className="contact-title">Let's Connect!</h2>
          <p className="contact-subtitle">Use the form below, or send us an email</p>
        </div>

        {/* --- FORM SECTION --- */}
        <form className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Enter first name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Enter last name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input type="text" placeholder="Company name or website" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="124-456-7890" />
            </div>
            <div className="form-group">
              <label>Budget Range</label>
              <select defaultValue="">
                <option value="" disabled>Please select...</option>
                <option value="50k-100k">$50k - $100k</option>
                <option value="100k-250k">$100k - $250k</option>
                <option value="250k+">$250k+</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Message</label>
            <textarea placeholder="Tell us about your project. What problems can we help you solve?"></textarea>
          </div>

          <div className="form-footer">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Subscribe to newsletter</span>
            </label>
            <button type="submit" className="submit-btn">
              Submit Inquiry <ArrowRightIcon />
            </button>
          </div>
        </form>

        {/* --- LINKS SECTION --- */}
        <div className="contact-links-list">
          <div className="link-group">
            <span className="link-label">Projects</span>
            <a href="mailto:projects@utility.agency" className="link-item">
              projects@utility.agency <ArrowUpRightIcon />
            </a>
          </div>
          <div className="link-group">
            <span className="link-label">Careers</span>
            <a href="mailto:join@utility.agency" className="link-item">
              join@utility.agency <ArrowUpRightIcon />
            </a>
          </div>
          <div className="link-group">
            <span className="link-label">Media</span>
            <a href="mailto:info@utility.agency" className="link-item">
              info@utility.agency <ArrowUpRightIcon />
            </a>
          </div>
        </div>

        {/* --- LOCATIONS SECTION --- */}
        <div className="locations-wrapper">
          <span className="section-label">Locations</span>
          <div className="locations-grid">
            <div className="location-card">
              <div className="location-img-wrap">
                <img src={imgNewYork} alt="New York Office" />
                <div className="location-overlay">New York</div>
              </div>
              <div className="location-details">
                <p>125 Madison Ave</p>
                <p>5th Floor New York, NY 10016</p>
              </div>
            </div>
            <div className="location-card">
              <div className="location-img-wrap">
                <img src={imgLosAngeles} alt="Los Angeles Office" />
                <div className="location-overlay">Los Angeles</div>
              </div>
              <div className="location-details">
                <p>10000 Washington Blvd</p>
                <p>2nd Floor, Los Angeles, CA 90232</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- SOCIALS FOOTER --- */}
        <div className="socials-footer">
          <span className="section-label">Social</span>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn <LinkedInIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter <XIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram <InstagramIcon />
            </a>
          </div>
        </div>

      </div>
    </footer>
    <Footer />
    </>
  );
};

export default ContactFooter;