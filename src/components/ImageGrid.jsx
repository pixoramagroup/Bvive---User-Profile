import React from "react";
import "./ImageGrid.scss";

const ImageGrid = ({ images }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            width: "100%",
            height: "200px",
            overflow: "hidden",
          }}
        >
          <img
            src={image}
            alt={`Media ${index + 1}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              // objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
