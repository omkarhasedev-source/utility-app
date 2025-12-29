import React, { useState } from 'react';
import '../css/MethodologyShowcase.css';

/* --- IMAGE IMPORTS --- */
// 1. Technology (Existing)
import imgTech from '../images/67dc84502d0d78a5e9c8ebdf_visualelectric-1742369643277.avif';
// 2. Experience
import imgExp from '../images/67dc838f0cd41b039f3f7376_visualelectric-1742358792808.avif';
// 3. Strategy
import imgStrat from '../images/67dc871d9eedb5639bce6a8a_visualelectric-1742362562847.avif';
// 4. Growth
import imgGrowth from '../images/67dc8843756fe3dce6e5fc27_visualelectric-1742506039870.avif';

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

const MethodologyShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const methodologies = [
    {
      id: 0,
      number: "01",
      title: "Technology",
      description: "We are a leader in building cutting-edge mobile and web applications that are AI-driven, and intuitive digital solutions. We push boundaries, solve complex challenges through products that drive real impact.",
      tags: [ "Mobile App Development", "Web Development", "AI & Innovation", "Backend & Infrastructure", "Emerging Technology" ],
      img: imgTech 
    },
    {
      id: 1,
      number: "02",
      title: "Experience",
      description: "Our best in class Product Designers and Strategists collaborate to create smart, clear product experiences that keeps people engaged through carefully crafted UX, UI and interaction design.",
      tags: [ "Product Vision", "User Research", "UX Design", "Visual Design", "Design Systems" ],
      img: imgExp 
    },
    {
      id: 2,
      number: "03",
      title: "Strategy",
      description: "We surround our clients with leaders from product, design, data, and engineering departments, with a relentless focus on product-market fit, growth potential, monetization strategies, and technical opportunities.",
      tags: [ "Digital Transformation", "Product Validation", "AI Strategy", "Planning & Roadmapping", "Technical Audits" ],
      img: imgStrat 
    },
    {
      id: 3,
      number: "04",
      title: "Growth",
      description: "Our Product Managers, Data Scientists and Growth Marketers partner with clients to focus on the evolution and adoption of the product, prioritizing business goals through rapid releases, user feedback cycles, and data-driven growth marketing experimentation.",
      tags: [ "Ongoing Management", "Data & Experimentation", "User Acquisition", "User Retention", "Staff Augmentation" ],
      img: imgGrowth 
    }
  ];

  return (
    <section className="methodology-section">
      <div className="methodology-container">
        
        {/* --- HEADER --- */}
        <div className="section-header">
          <span className="small-label">What we do</span>
          <h2 className="main-heading">Elegant solutions built on proven methodologies.</h2>
          
          {/* Mobile Button */}
          <a href="#services" className="mobile-services-btn">
            Services <ArrowUpRightIcon />
          </a>
        </div>

        {/* --- LIST --- */}
        <div className="accordion-list">
          {methodologies.map((item, index) => (
            <div 
              key={item.id} 
              className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="accordion-header">
                <span className="accordion-number">{item.number}</span>
                <h3 className="accordion-title">
                  {item.title}
                  <span className={`icon-wrapper ${activeIndex === index ? 'show' : ''}`}>
                      <ArrowUpRightIcon />
                  </span>
                </h3>
              </div>

              <div className="accordion-body">
                <div className="accordion-inner">
                  <p className="accordion-desc">{item.description}</p>
                  <div className="tags-list-wrapper">
                    <div className="vertical-line-track"></div>
                    <ul className="accordion-tags">
                      {item.tags.map((tag, i) => (
                        <li key={i} className="tag-item">
                          <div className="tag-indicator-line"></div>
                          <span className="tag-text">{tag}</span>
                          <span className="tag-arrow"><ArrowRightIcon /></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- IMAGE CONTAINER --- */}
        <div className="methodology-image-wrapper">
          <div className="image-container">
            
            {/* Render ALL images stacked on top of each other.
              We control visibility with CSS opacity based on 'active' class.
              This prevents white flashes during image swapping.
            */}
            {methodologies.map((item, index) => (
              <img 
                key={item.id}
                src={item.img} 
                alt={item.title} 
                className={`methodology-img ${activeIndex === index ? 'active' : ''}`} 
              />
            ))}
            
            {/* Desktop Button */}
            <a href="#services" className="services-btn desktop-only">
              Services <ArrowUpRightIcon />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MethodologyShowcase;