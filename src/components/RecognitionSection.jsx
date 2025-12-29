import React from 'react';
import '../css/RecognitionSection.css'; 

const RecognitionSection = () => {
  const awards = [
    { id: 1, year: "2024", title: "Webby Awards Agency of the Year" },
    { id: 2, year: "2024", title: "Best Mobile App Awards" },
    { id: 3, year: "2024", title: "Awwwards" },
    { id: 4, year: "2024", title: "Clutch Top Agencies" },
  ];

  return (
    <section className="recognition-section">
      <div className="recognition-max-width">
        
        {/* Headline */}
        <div className="recog-header">
          <h2 className="recog-headline">
            Pushing boundaries.<br />
            Getting recognition.
          </h2>
        </div>

        {/* Awards List */}
        <div className="awards-track">
          {awards.map((award) => (
            <div key={award.id} className="award-item">
              <div className="award-content">
                <span className="award-year">{award.year}</span>
                <h3 className="award-title">{award.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecognitionSection;