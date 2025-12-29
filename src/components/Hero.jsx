import React, { useState, useEffect } from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import '../css/Hero.css';

/* --- ASSET IMPORTS --- */
import imgDirectTv from '../images/676090109234d980622102dd_Brand DirecTV.svg';
import imgWarner from '../images/6760902d036c8f0efdfa14b7_Warner Music Group.svg';
import imgVerizon from '../images/67608ff410d975107897344c_Brand Verizon.svg';
import imgCoke from '../images/67608fe5dab4348d94ee6cc9_Coca-Cola Brand.svg';
import imgSamsung from '../images/67608fbae911f6aaf6dd24ca_Logo Samsung.svg';

import iconProductDesign from '../images/67043d2e8c7c235704009471_icon_product-design.svg';
import iconGrowth from '../images/67043d2ebabea820b3ef7df0_icon_growth.svg';
import iconResearch from '../images/67043d2ebe3d40d0169691f5_icon_research.svg';
import iconEngineering from '../images/67043d2ec49e7811e3faa100_icon_engineering.svg';
import iconStrategy from '../images/67043d2ffaad7535b785eb22_icon_strategy.svg';

/* --- ICONS --- */
const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeroWorkShowcase = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isShowcaseVisible, setIsShowcaseVisible] = useState(false);
  
  // State for CMS Data
  const [posts, setPosts] = useState([]);
  const [heroWords, setHeroWords] = useState([]); // Initialize empty
  const [videoUrl, setVideoUrl] = useState(null);

 // const API = "http://localhost:1337";

  const clientLogos = [
    { name: 'Samsung', src: imgSamsung },
    { name: 'Warner Music Group', src: imgWarner },
    { name: 'Verizon', src: imgVerizon },
    { name: 'DirecTV', src: imgDirectTv },
    { name: 'Coca-Cola', src: imgCoke },
  ];

  const seamlessLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  // 1. FETCH DATA FROM STRAPI
  useEffect(() => {
    const fetchCmsData = async () => {
      try {
        // A. Fetch Main Heading (Block Content)
        const headingReq = await fetch('http://10.172.25.197:1337/api/hero-headings');
        const headingRes = await headingReq.json();
        setPosts(headingRes.data);

        // B. Fetch Carousel Words
        const wordsReq = await fetch('http://10.172.25.197:1337/api/hero-carousels');
        const wordsRes = await wordsReq.json();

        // C. Process Carousel Data
        if (wordsRes.data && wordsRes.data.length > 0) {
          const apiWords = wordsRes.data.map((item) => {
            // Handle Strapi v4 (attributes) vs v5 structure
            return item.attributes ? item.attributes.Word : item.Word;
          });
          setHeroWords(apiWords);
        } else {
            // Optional: Set fallback words if API returns empty
            setHeroWords(["Digital Products", "World Class Apps"]); 
        }

        // D. Fetch Hero Video
        const videoReq = await fetch('http://10.172.25.197:1337/api/hero-video?populate=*');
        const videoRes = await videoReq.json();

        if (videoRes.data) {
           // Handle Strapi v4 vs v5 structure dynamically
           // We look for 'Video' field. If your field is named 'Media', change .Video to .Media
           const attributes = videoRes.data.attributes || videoRes.data;
           // Check both nested data structure (v4) and direct structure (v5)
           const videoData = attributes.Video?.data?.attributes || attributes.Video;

           if (videoData && videoData.url) {
             setVideoUrl(`http://10.172.25.197:1337${videoData.url}`);
           }
        }

      } catch (error) {
        console.error('CMS fetch error:', error);
      }
    };

    fetchCmsData();
  }, []);

  // 2. ANIMATION TIMERS (Dependent on heroWords)
  useEffect(() => {
    // Only start the carousel interval if we have words to cycle through
    if (heroWords.length === 0) return;

    const carouselInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % heroWords.length);
    }, 3000);

    // Initial fade-in animations
    const heroTimer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 1500);

    const showcaseTimer = setTimeout(() => {
      setIsShowcaseVisible(true);
    }, 1500);

    return () => {
      clearInterval(carouselInterval);
      clearTimeout(heroTimer);
      clearTimeout(showcaseTimer);
    };
  }, [heroWords]); 
  

  return (
    <div className="main-wrapper">

      {/* --- HERO HEADER SECTION --- */}
      <section className="hero-section">
        <div className="bg-line-decoration"></div>

        <div className={`hero-container ${isHeroVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            <span className="text-white">
              {posts.length > 0 && (
                <BlocksRenderer content={posts[0].Content} />
              )}
            </span>
            <br />
            
            {/* Render Carousel only if we have words */}
            {heroWords.length > 0 && (
              <span className="scrolling-text-wrapper">
                <span key={heroWords[textIndex]} className="text-dark slide-up-text">
                  {heroWords[textIndex]}
                </span>
              </span>
            )}
          </h1>

          <p className="hero-subtitle">
            {posts.length > 0 && (
                <BlocksRenderer content={posts[1].Content} />
              )}
          </p>
        </div>
      </section>

      {/* --- WORK SHOWCASE SECTION --- */}
      <section className={`work-showcase-section ${isShowcaseVisible ? 'visible' : ''}`}>

        <div className="showcase-content-grid">

          {/* LEFT COLUMN: Video with Reverse L Structure */}
          <div className="left-column-wrapper">
            <div className="l-shape-cutout">
              <a href="#work" className="floating-work-btn">
                Work with us <ArrowIcon />
              </a>
            </div>
            <div className="video-container">
              <video
                  className="feature-video"
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
            </div>
          </div>

          {/* RIGHT COLUMN: Services */}
          <div className="right-column-content">
            <h2 className="showcase-heading">
              {posts.length > 0 && (
                <BlocksRenderer content={posts[2].Content} />
              )}
            </h2>

            <div className="services-list">
              <div className="service-item">
                <img src={iconProductDesign} alt="Tech" className="service-icon-img" />
                <span>Tech Development</span>
              </div>
              <div className="service-item">
                <img src={iconResearch} alt="Product" className="service-icon-img" />
                <span>Product Design</span>
              </div>
              <div className="service-item">
                <img src={iconEngineering} alt="AI" className="service-icon-img" />
                <span>AI Solutions</span>
              </div>
              <div className="service-item">
                <img src={iconGrowth} alt="Growth" className="service-icon-img" />
                <span>Growth Marketing</span>
              </div>
              <div className="service-item">
                <img src={iconStrategy} alt="Strategy" className="service-icon-img" />
                <span>Digital Transformation</span>
              </div>
            </div>

            <a href="#services" className="view-all-link">
              View all services <ArrowIcon />
            </a>
          </div>
        </div>

        {/* LOGO TICKER */}
        <div className="logo-ticker-wrapper">
          <div className="logo-ticker-track">
            {seamlessLogos.map((logo, i) => (
              <div key={i} className="logo-item">
                <img src={logo.src} alt={logo.name} className="client-logo-img" />
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default HeroWorkShowcase;