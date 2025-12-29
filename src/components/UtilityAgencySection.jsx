import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import '../css/UtilityAgencySection.css';

// --- IMPORTS ---
import ImgRyan from '../images/67e0b530aefc55f74909872a_Frame@2x.avif';
import ImgShannon from '../images/67e0b5788e4343c8eb3deb3e_shannon-jones@2x.avif';
import ImgScott from '../images/67e0b64eda78afcaec2f1cfc_scott-perkins@2x.avif';
import ImgAllie from '../images/67e0b61bebe3eae2f764af64_allie-sallberg@2x.avif';
import ImgMike from '../images/67e0b5bc68e84cb0b5a06153_mike-koyle@2x.avif';
import ImgCale from '../images/67dc89118fa766622a1cff1c_cale.avif';

import LogoCare from '../images/67db650a2aacd00584366b76_--care.svg';
import LogoAirbnb from '../images/67db650066594f1bf5ff3854_--Airbnb.svg';
import LogoPliability from '../images/67074380ed07576cd6be22f8_brand_pilability-white.svg';
import LogoMoves from '../images/67db64ec2aacd00584364e6f_--Moves.svg';
import LogoGIA from '../images/67db64f4ad59fdb9af64f574_--GIA.svg';
import LogoLoge from '../images/67db6517a70cf1cbbf751123_--loge.svg';

const UtilityAgencySection = () => {
    const scrollRef = useRef(null);

    const teamData = [
        { id: 1, name: "Ryan Safarian", title: "CTO", quote: "Working with Utility was a standout experience. They took the time to truly understand our customers, and their preparation showed from day one. What really set them apart was their leadership team – best in class.", image: ImgRyan, logo: LogoCare },
        { id: 2, name: "Shannon Jones", title: "Director, Experiential", quote: "The biggest difference between Utility and other shops we've worked with is their agility and dedication. We've thrown them a lot of curveballs, and they've always managed to figure out a solution.", image: ImgShannon, logo: LogoAirbnb },
        { id: 3, name: "Scott Perkins", title: "CEO & Founder", quote: "Utility has been an integral part of our operations. They're an integrated extension of our team, bringing valuable point's of view. Few partners we recommend without reservation, we're proud to do so with Utility.", image: ImgScott, logo: LogoPliability },
        { id: 4, name: "Allie Sallberg", title: "CMO", quote: "Building our own product after coming from SaaS was daunting, but knowing that tech is fully under control with Utility allows us to focus on scaling with confidence.", image: ImgAllie, logo: LogoMoves },
        { id: 5, name: "Mike Koyle", title: "VP, Product", quote: "Utility has been with GIA for almost three years, and they've been an exceptional delivery partner as we ventured into mobile and AI-integrated solutions.", image: ImgMike, logo: LogoGIA },
        { id: 6, name: "Cale Genenbacher", title: "CEO & Founder", quote: "Utility is a now our long-term product development partner. We couldn't have re-launched our robust new tech offerings to customers without them.", image: ImgCale, logo: LogoLoge }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollAmount = container.clientWidth * 0.88;
            container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="utility-section">
            <div className="utility-max-width">
                <div className="left-column">
                    <div>
                        <h5 className="label-text">Where we've been</h5>
                        <h2 className="main-headline">We take pride in <br />delivering exceptional <br />solutions that exceed <br />expectations.</h2>
                    </div>
                    <div className="stats-container">
                        <div className="stat-item"><span className="stat-number">12+ years</span><span className="stat-label">Agency history</span></div>
                        <div className="stat-item bordered"><span className="stat-number">150+</span><span className="stat-label">Projects delivered</span></div>
                        <div className="stat-item bordered"><span className="stat-number">100+</span><span className="stat-label">Rockstar staff</span></div>
                    </div>
                </div>

                <div className="right-column">
                    <div className="native-scroll-track" ref={scrollRef}>
                        {teamData.map((member) => (
                            <div key={member.id} className="slide-item">
                                <div className="image-wrapper">
                                    <img src={member.image} alt={member.name} className="profile-img" />
                                    <img src={member.logo} alt="Logo" className="logo-overlay" />
                                </div>
                                <div className="quote-content">
                                    <p className="quote-text">"{member.quote}"</p>
                                    <div>
                                        <h4 className="author-name">{member.name}</h4>
                                        <p className="author-title">{member.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bottom-controls-row">
                <button type="button" className="btn-about">About us <ArrowUpRight size={16} /></button>
                <div className="nav-buttons">
                    <button type="button" onClick={() => scroll('left')} className="nav-btn prev"><ChevronLeft size={20} /></button>
                    <button type="button" onClick={() => scroll('right')} className="nav-btn next"><ChevronRight size={20} /></button>
                </div>
            </div>
        </div>
    );
};

export default UtilityAgencySection;