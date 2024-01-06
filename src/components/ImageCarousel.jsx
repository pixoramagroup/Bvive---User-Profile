import React, { useState } from "react";
import "./ImageCarousel.scss";

const ImageCarousel = ({ mediaItems  }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const currentMedia = mediaItems[currentIndex];
  const shouldShowButtons = mediaItems.length > 1;

  return (
    <div className="Image-carousel">
       {shouldShowButtons && (
         <button className="Image-carousel-button" onClick={prevSlide}>
         {"<"}
       </button>
      )}
     
      <div className="Image-carousel-container">
        {currentMedia.type === "image" ? (
          <img
            className="Image-carousel-image"
            src={currentMedia.src}
            alt={`Image ${currentIndex + 1}`}
          />
        ) : (
          <video
            className="Image-carousel-image"
            controls
            // autoPlay
            loop
            muted
            key={mediaItems[currentIndex].src}
            style={{ objectFit: "cover" }}
          >
            <source src={currentMedia.src} type="video/mp4" />
          </video>
        )}
        <div  className="Image-carousel-overlay">
          <div className="Image-carousel-caption">{currentMedia.caption}</div>
          <div className="Image-carousel-date"> {currentMedia.date}</div>
        </div>
      </div>
      {shouldShowButtons && (
        <button className="Image-carousel-button" onClick={nextSlide}>
          {">"}
        </button>
      )}
    </div>
  );
};

export default ImageCarousel;
