import React from "react";
import ImageCarousel from "./ImageCarousel";

const MyContent = ({ title, mediaItems, onViewAll }) => {  return (
    <div
      className="profile-aboutme-left-box"
      style={{ flex: 1, backgroundColor: "white",     border: "1px solid gold",padding:"1px" , gap:"1px"
    }}
    >
      <h2
        style={{
          fontSize: "28px",
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
            padding: "10px 15px",
            fontSize: "16px",
            marginRight: "20px",
            fontWeight: "normal",
            borderRadius: "5px",
            border: " 1px solid grey",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background 0.3s, color 0.3s",
          }}
          onClick={onViewAll}
        >
          View All {title}
        </button>
      </h2>
      <ImageCarousel mediaItems={mediaItems} />
    </div>
  );
};

export default MyContent;
