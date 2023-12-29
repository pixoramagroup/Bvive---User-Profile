// AboutMe.js

import React from 'react';
import ImageGrid from './ImageGrid';

const AboutMe = ({ title, images }) => {
  return (
    <div className="profile-aboutme-left-box" style={{ flex: 1, backgroundColor: "white", marginRight: "5px" }}>
      <h2 style={{ fontSize: "34px", marginBottom: "10px", color: "black", fontWeight: "500", margin: "20px 0px 16px 17px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span>{title}</span>
        <button style={{ marginLeft: "auto", color: "#333",
    padding:"10px 20px",
    fontSize: "16px",
    marginRight: "30px",
    fontWeight: "normal",
    borderRadius: "5px",
    border:" 1px solid grey",
    cursor:"pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background 0.3s, color 0.3s",}}>View All {title}</button>
      </h2>
      {/* <div className="under-line" style={{ backgroundColor: "black" }}></div> */}
      <ImageGrid images={images} />
    </div>
  );
};

export default AboutMe;
