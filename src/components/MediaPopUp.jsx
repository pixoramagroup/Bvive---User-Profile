import React from "react";
import ImageCarousel from "./ImageCarousel";
import "./MediaPopUp.scss";

const MediaPopup = ({ mediaItems, onClose,type}) => {
  return (
    <div className="media-popup-dialog">


      <div className="media-popup-content">
        
        <div className="close-icon" onClick={onClose}>
          &#10006;
        </div>
        <div className="media-popup-title">{type}</div>
        <div className="media-items-grid">
          {mediaItems.map((item, index) => (
            <div key={index} className="media-item">

              <ImageCarousel
                mediaItems={[item]}
              />
              {/* <h3>{item.title}</h3> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPopup;
