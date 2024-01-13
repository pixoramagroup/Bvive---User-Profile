import React from "react";
import ImageCarousel from "./ImageCarousel";
import "./MyContent.scss";

const MyContent = ({ title, mediaItems, onViewAll }) => {
  return (
    <div
      className="profile-aboutme-left-box"
      style={{
        flex: 1,
        backgroundColor: "white",
        border: "1px solid gold",
        padding: "1px",
        gap: "1px",
      }}
    >
      <h2 className="media-headings">
        <span>{title}</span>
        <button className="media-button" onClick={onViewAll}>
          View All {title}
        </button>
      </h2>
      <ImageCarousel mediaItems={mediaItems} />
    </div>
  );
};

export default MyContent;
