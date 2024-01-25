import { React, useState } from "react";
import "./MyContent.scss";
import ImageCarousel from "./ImageCarousel";

const Message = ({ size = 24, fill, ...props }) => {
  return (
    <svg height={size} role="img" viewBox="0 0 24 24" width={size} {...props}>
      <line
        fill="none"
        stroke={fill}
        strokeLinejoin="round"
        strokeWidth="2"
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"
      />
      <polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        stroke={fill}
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

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
