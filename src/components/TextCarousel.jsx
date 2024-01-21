import React, { useState } from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import Badge from "../assets/badge_watermark.png";
import './TextCarousel.scss'; // Import the CSS file

const TextCarousel = ({ items, itemsPerView }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - itemsPerView ? prevIndex + 1 : 0
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - itemsPerView
    );
  };

  return (
    <div className="certificate-main">
      <div style={{backgroundColor: "rgb(121 120 122)"}}>
        <h1>My Certifications</h1>
        <div className="certificate-under-line"></div>   
        </div>   
    <div className="carousel-container">
      <button className="carousel-button" onClick={goToPrev}>
        &lt;
      </button>
      <div className="carousel-content">
        {items
          .slice(currentIndex, currentIndex + itemsPerView)
          .map((item, index) => (
            <div key={index} className="carousel-item">
                <img src={Badge} alt="Watermark" className="watermark" />
              <div className="icon-container">
              </div>
              <div className="heading-container">
                <div className="carousel-heading">
                  {item.heading}
                  <VerifiedIcon className="verified-icon" />
                </div>
              </div>
              <div className="carousel-subHeading">{item.subHeading}</div>
              <div className="line"></div>
              <div className="carousel-institute">{item.institute}</div>
            </div>
          ))}
      </div>
      <button className="carousel-button" onClick={goToNext}>
        &gt;
      </button>
    </div>
    </div>
  );
};

export default TextCarousel;
