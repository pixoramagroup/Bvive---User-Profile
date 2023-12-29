import React from "react";
import ImageCarousel from "./ImageCarousel";

const AboutMe = ({ title, mediaItems }) => {
  return (
    <div
      className="profile-aboutme-left-box"
      style={{ flex: 1, backgroundColor: "white", marginRight: "5px" }}
    >
      <h2
        style={{
          fontSize: "34px",
          marginBottom: "10px",
          color: "black",
          fontWeight: "500",
          margin: "20px 0px 16px 17px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>{title}</span>
        <button
          style={{
            marginLeft: "auto",
            color: "#333",
            padding: "10px 20px",
            fontSize: "16px",
            marginRight: "30px",
            fontWeight: "normal",
            borderRadius: "5px",
            border: " 1px solid grey",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background 0.3s, color 0.3s",
          }}
        >
          View All {title}
        </button>
      </h2>
      <ImageCarousel mediaItems={mediaItems} />
    </div>
  );
};

export default AboutMe;
