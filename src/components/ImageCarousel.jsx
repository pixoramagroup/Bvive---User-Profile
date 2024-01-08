import React, { useState } from "react";
import "./ImageCarousel.scss";

const ImageCarousel = ({ mediaItems }) => {
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
        ) : currentMedia.type === "video" ? (
          <video
            className="Image-carousel-image"
            controls
            loop
            muted
            key={mediaItems[currentIndex].src}
            style={{ objectFit: "cover" }}
          >
            <source src={currentMedia.src} type="video/mp4" />
          </video>
        ) : currentMedia.type === "text" ? (
          <div className="Image-carousel-text-post">
            <div className="Image-carousel-text-content">
              {currentMedia.text}
            </div>
            <div className="Image-carousel-text-meta">
              <div className="Image-carousel-caption">
                {currentMedia.caption}
              </div>
              <div className="Image-carousel-date">{currentMedia.date}</div>
            </div>
          </div>
        ) : null}

        <div className="Image-carousel-overlay">
          {currentMedia.type !== "text" && (
            <div className="Image-carousel-caption">{currentMedia.caption}</div>
          )}
          <div className="Image-carousel-date">{currentMedia.date}</div>
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
