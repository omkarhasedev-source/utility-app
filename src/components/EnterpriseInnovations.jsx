import React, { useRef, useEffect, useState } from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import '../css/EnterpriseInnovations.css';

/* --- ICONS --- */
const ArrowLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// --- UPDATE 1: Point to your live Render URL ---
const STRAPI_BASE_URL = 'https://strapi-app-1.onrender.com';

const EnterpriseInnovations = () => {
  const scrollRef = useRef(null);

  // State for CMS Data
  const [posts, setPosts] = useState([]);
  const [innovationItems, setInnovationItems] = useState([]); 

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

  // --- UPDATE 2: Simplified Image Helper ---
  const getStrapiMedia = (url) => {
    if (!url) return null;
    
    // If the URL is absolute (e.g. Cloudinary or external), return it as is
    if (url.startsWith('http') || url.startsWith('//')) {
      return url;
    }
    
    // Otherwise, prepend the Render URL
    return `${STRAPI_BASE_URL}${url}`;
  };

  // 1. FETCH DATA FROM STRAPI
  useEffect(() => {
    const fetchCmsData = async () => {
      try {
        // A. Fetch Main Heading
        const headingReq = await fetch(`${STRAPI_BASE_URL}/api/hero-headings`);
        const headingRes = await headingReq.json();
        setPosts(headingRes.data);

        // B. Fetch Innovation Items
        const itemsReq = await fetch(`${STRAPI_BASE_URL}/api/innovation-items?populate=*`);
        const itemsRes = await itemsReq.json();

        if (itemsRes.data) {
          const mappedItems = itemsRes.data.map((item) => {
            // Handle Flattened (v5) vs Nested (v4) attributes
            const attrs = item.attributes || item; 
            
            // --- ROBUST IMAGE EXTRACTION ---
            let imgPath = null;
            const imgObj = attrs.Image;

            if (imgObj) {
                // Check direct URL (Strapi v5 / Your current JSON structure)
                if (imgObj.url) {
                    imgPath = imgObj.url;
                }
                // Check nested v4 structure (data -> attributes -> url)
                else if (imgObj.data?.attributes?.url) {
                    imgPath = imgObj.data.attributes.url;
                }
                 // Check simple nested structure (data -> url)
                else if (imgObj.data?.url) {
                    imgPath = imgObj.data.url;
                }
            }
            
            const imgUrl = getStrapiMedia(imgPath);

            return {
              id: item.id,
              client: attrs.Client,       
              desc: attrs.Description,    
              img: imgUrl                 
            };
          });
          
          setInnovationItems(mappedItems);
        }

      } catch (error) {
        console.error('CMS fetch error:', error);
      }
    };

    fetchCmsData();
  }, []);


  return (
    <>
      <section className="cases-section">
        <div className="cases-container">

          {/* --- LEFT COLUMN: Text --- */}
          <div className="cases-text-col">
            <div className="cases-text-content">
              <h2 className="cases-title">
                {posts.length > 0 && (
                  <BlocksRenderer content={posts[3].Content} />
                )}
              </h2>

              <div className="mobile-group-wrapper">
                <p className="cases-desc">
                  <span className="desc-desktop">
                    {posts.length > 0 && (
                      <BlocksRenderer content={posts[4].Content} />
                    )}
                  </span>
                  <span className="desc-mobile">
                    {posts.length > 0 && (
                      <BlocksRenderer content={posts[5].Content} />
                    )}
                  </span>
                </p>

                <div className="mobile-nav-controls">
                  <button className="mobile-nav-btn prev" onClick={scrollLeft} aria-label="Previous">
                    <ArrowLeftIcon />
                  </button>
                  <button className="mobile-nav-btn next" onClick={scrollRight} aria-label="Next">
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>

              <a href="/work" className="view-all-btn">
                View All Work
              </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Carousel --- */}
          <div className="cases-carousel-col">

            <div className="cases-track" ref={scrollRef}>
              
              {innovationItems.length > 0 ? (
                innovationItems.map((item) => (
                  <div key={item.id} className="cases-section_item">

                    <div className="arrow-circle">
                      <svg className="arrow-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>

                    <div className="cases-section_item_img_wrapper">
                      {item.img ? (
                        <img src={item.img} alt={item.client} className="cases-section_item_img" />
                      ) : (
                         <div style={{width:'100%', height:'100%', backgroundColor:'#f0f0f0', display:'flex', alignItems:'center', justifyContent:'center', color:'#aaa'}}>
                            No Image
                         </div>
                      )}
                    </div>

                    <div className="cases-content">
                      <h3 className="client-name">{item.client}</h3>
                      <p className="project-desc">{item.desc}</p>
                    </div>

                  </div>
                ))
              ) : (
                <div style={{padding:'20px', color:'#999'}}>Loading...</div>
              )}
              
              <div className="cases-spacer"></div>
            </div>

            <button className="cases-next-btn" onClick={scrollRight} aria-label="Next">
              <ArrowRightIcon />
            </button>

          </div>

        </div>
      </section>
      <hr style={{ border: '1px solid #E5E5E5' }} />
    </>
  );
};

export default EnterpriseInnovations;