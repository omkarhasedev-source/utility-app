import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 1. Import Router

import './App.css';

// --- COMPONENTS ---
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EnterpriseInnovations from './components/EnterpriseInnovations';
import EmpoweringVentures from './components/EmpowerinVentures';
import MethodologyShowcase from './components/MethodologyShowcase';
import UtilityAgencySection from './components/UtilityAgencySection';
import RecognitionSection from './components/RecognitionSection';
import AboutChallenges from './components/AboutChallenges';
import ProjectCTA from './components/ProjectCTA';
import Footer from './components/Footer';

// Import the ContactFooter we created earlier
import ContactFooter from './components/ContactFooter';

// 2. Create a "Home" component to group the main page sections
const Home = () => {
  return (
    <>
      <Hero />
      <EnterpriseInnovations />
      <EmpoweringVentures />
      <MethodologyShowcase />
      <UtilityAgencySection />
      <RecognitionSection />
      <AboutChallenges />
      <ProjectCTA />
      <Footer />
    </>
  );
};

// 3. Create a "Contact" component wrapper
const ContactPage = () => {
  // Scrolls to top when the contact page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Add padding top to prevent Navbar from covering the content
    <div style={{ paddingTop: '100px' }}>
      <ContactFooter />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar is outside Routes so it appears on ALL pages */}
        <Navbar />
        
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home />} />
          
          {/* Separate Contact Page */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;