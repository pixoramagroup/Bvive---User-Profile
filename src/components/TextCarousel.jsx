import React, { useState } from 'react';
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
    <div className="carousel-container">
      <button className="carousel-button" onClick={goToPrev}>
        &lt;
      </button>
      <div className="carousel-content">
        {items
          .slice(currentIndex, currentIndex + itemsPerView)
          .map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="carousel-heading">{item?.heading}</div>
              <div className="carousel-subHeading">{item?.subHeading}</div>
              {/* <div class="line"></div> */}

              <div className="carousel-institute">{item?.institute}</div>
            </div>
          ))}
      </div>
      <button className="carousel-button" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default TextCarousel;
