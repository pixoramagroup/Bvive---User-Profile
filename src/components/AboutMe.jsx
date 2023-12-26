// AboutMe.js
import React, { useState } from "react";

const AboutMe = () => {
  const [aboutMeContent, setAboutMeContent] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lacus vel augue rutrum, non ultrices arcu tristique..."
  );

  const handleContentChange = (e) => {
    setAboutMeContent(e.target.textContent);
  };

  return (
    <div className="profile-aboutme-left-box" draggable>
      <h2
        style={{
          fontSize: "34px",
          marginBottom: "10px",
          color: "white",
          marginLeft: "80px",
          fontWeight: "500",
          marginTop: "40px",
        }}
      >
        About me
      </h2>
      <div className="under-line"></div>
      <div
        style={{
          textAlign: "center",
          padding: "0 20px", // Add padding to prevent content from touching the edges
          marginTop:"10vh",
          color:"white",
        }}
        contentEditable
        onInput={handleContentChange}
      >
        {aboutMeContent}
      </div>
    </div>
  );
};

export default AboutMe;
