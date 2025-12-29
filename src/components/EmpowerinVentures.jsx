import React, { useRef } from 'react';
import '../css/EnterpriseInnovations.css';

/* --- IMAGE IMPORTS --- */
import imgAirbnb from '../images/67ddee4a1188f7a0ae944365_LISTING-image.avif';
import imgForbes from '../images/67dda76ef1e5964528cb325a_LOGE-FeaturedImg-H.png';
import imgJenny from '../images/67dca980b65b3eecba0bd81d_Moves-FeaturedImg-H.avif';
import imgTracy from '../images/67ddba477102a748d43a3be9_Snack-FeaturedImg-H.png';
import imgGia from '../images/67dcaa8f8f67c6d36e1b04da_Carsy-FeaturedImg-H.avif';
import imgSouthStreet from '../images/67dece3cde916c689f3c47ff_LISTING-image.avif';
import imgBleacher from '../images/67ded86ca31cea90cb2e7c9e_LISTING-image.avif';
import imgCoke from '../images/67deccdbc01feb0fa8c36624_LISTING-image.avif';
import imgNyc from '../images/67ded00cc1c6ce1216fbad4d_LISTING-image.avif';
import imgSamsung from '../images/67ec5c33f02fd48b8508d59e_Samsung-FeaturedImg-H.png';
import imgNba from '../images/67ded7f299f418db1d3b2b6f_LISTING-image.avif';
import imgWomenDeliver from '../images/67ec5bb450d5853920d27dc2_Women Deliver-FeaturedImg-H-p-500.png';
import imgStride from '../images/67ddb4450538d59c3663d1d7_5d9517994a1dea6314eabb0b_stride-heroDesktop.avif';
import imgRoundtable from '../images/67ded3185325abd64e46503b_LISTING-image.avif';
import imgSiren from '../images/67deda110b7807d08238cdfa_LISTING-image.avif';

const ArrowLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const EmpoweringVentures = () => {
  const scrollRef = useRef(null);

  const innovationItems = [
    { id: 1, client: "pliability", desc: "Leveling up mobility training", img: imgAirbnb },
    { id: 2, client: "LOGE Camps", desc: "Digitizing the guest experience", img: imgForbes },
    { id: 3, client: "Jenny Craig", desc: "Seamless health management", img: imgJenny },
    { id: 4, client: "Tracy Anderson", desc: "Transforming a fitness pioneer", img: imgTracy },
    { id: 5, client: "GIA", desc: "Digitizing diamond authentication", img: imgGia },
    { id: 6, client: "South Street Securities", desc: "Digitizing financial trading", img: imgSouthStreet },
    { id: 7, client: "Bleacher Report", desc: "Interactive and social trivia", img: imgBleacher },
    { id: 8, client: "Coca-Cola", desc: "Gamifying mobile through AR", img: imgCoke },
    { id: 9, client: "NYC Health + Hospitals", desc: "Solving asthma monitoring", img: imgNyc },
    { id: 10, client: "Roundtable", desc: "Content delivery for arts leader", img: imgRoundtable },
    { id: 11, client: "Samsung", desc: "Gaming with a hip hop icon", img: imgSamsung },
    { id: 12, client: "NBA", desc: "Homebase for global tournament", img: imgNba },
    { id: 13, client: "Women Deliver", desc: "Leading global women's health", img: imgWomenDeliver },
    { id: 14, client: "SirenMD", desc: "Telemedicine for athlete care", img: imgSiren },
    { id: 15, client: "Stride Gum", desc: "Global event gamification", img: imgStride },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' }); 
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' }); 
    }
  };

  return (
    <>
    <section className="cases-section">
      <div className="cases-container">
        
        {/* --- LEFT COLUMN: Text --- */}
        <div className="cases-text-col">
          <div className="cases-text-content">
            <h2 className="cases-title">
              Empowering New Ventures
            </h2>
            
            {/* NEW WRAPPER: Groups Text and Buttons for side-by-side Mobile Layout */}
            <div className="mobile-group-wrapper">
              
              {/* UPDATED DESCRIPTION: Contains both text versions */}
              <p className="cases-desc">
                <span className="desc-desktop">
                  Our intimate collabrations with both emerging startups and growing ventures leads to tech solutions that match any stage companies are entering.
                </span>
                <span className="desc-mobile">
                  Our work established brands helps create business growth opportunities.
                </span>
              </p>
              
              {/* Mobile Navigation Buttons */}
              <div className="mobile-nav-controls">
                  <button className="mobile-nav-btn prev" onClick={scrollLeft} aria-label="Previous">
                    <ArrowLeftIcon />
                  </button>
                  <button className="mobile-nav-btn next" onClick={scrollRight} aria-label="Next">
                    <ArrowRightIcon />
                  </button>
              </div>
            </div>

            {/* View All Button (Hidden on Mobile) */}
            <a href="/work" className="view-all-btn">
              View All Work
            </a>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Carousel --- */}
        <div className="cases-carousel-col">
          
          <div className="cases-track" ref={scrollRef}>
            {innovationItems.map((item) => (
              <div key={item.id} className="cases-section_item">
                
                {/* Desktop Arrow Button (Hidden on Mobile) */}
                <div className="arrow-circle">
                  <svg className="arrow-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>

                <div className="cases-section_item_img_wrapper">
                  <img src={item.img} alt={item.client} className="cases-section_item_img" />
                </div>
                
                <div className="cases-content">
                  <h3 className="client-name">{item.client}</h3>
                  <p className="project-desc">{item.desc}</p>
                </div>

              </div>
            ))}
            <div className="cases-spacer"></div>
          </div>

          {/* Desktop Next Button */}
          <button className="cases-next-btn" onClick={scrollRight} aria-label="Next">
            <ArrowRightIcon />
          </button>

        </div>

      </div>
    </section>
    <hr style={{border:'1px solid #E5E5E5'}} />
    </>
  );
};

export default EmpoweringVentures;