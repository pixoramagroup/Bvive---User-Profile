import React from "react";
import ImageCarousel from "./ImageCarousel";
import "./MediaPopUp.scss";

const MediaPopup = ({ mediaItems, onClose, type }) => {
  return (
    <div className="media-popup-dialog" onClick={onClose}>
      <div className="media-popup-content">
        <div className="close-icon" onClick={onClose}>
          &#10006;
        </div>
        <h2 className="media-popup-title">{type}</h2>
        <div className="media-items-grid">
          {mediaItems.map((item, index) => (
            <div key={index} className="media-item">
              <ImageCarousel mediaItems={[item]} />
              {/* <h3>{item.title}</h3> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPopup;
