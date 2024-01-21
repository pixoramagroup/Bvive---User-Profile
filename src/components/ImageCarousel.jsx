// ImageCarousel.jsx
import React, { useState } from "react";
import "./ImageCarousel.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Avatar from "@mui/material/Avatar";
// import Message from "./ThreadPosts"; // Assuming you have the Message component from ThreadPosts.jsx

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
            // Render image content
            <img
              className="Image-carousel-image"
              src={currentMedia.src}
              alt={`Image ${currentIndex + 1}`}
            />
          ) : currentMedia.type === "video" ? (
            // Render video content
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
          ) : (
            // Render waggle content
            <div key={currentMedia.id} className="post">
            <div className="user-info">
              <Avatar
                src={currentMedia.user.profilePic}
                alt="Profile"
                className="profile-pic"
              />
              <span className="username">{currentMedia.user.username}</span>
            </div>
        
            <p>{currentMedia.content}</p>
        
            <div className="post-actions">
              <FavoriteBorderIcon className="action-icon" />
              <ChatBubbleOutlineOutlinedIcon className="action-icon" />
              {/* <Message size={24} fill="#333" />{" "} */}
            </div>
        
            <div className="post-likes">
              {currentMedia.likes} likes . {currentMedia.comments} comments
            </div>
          </div>
        )}

          <div className="Image-carousel-overlay">
            {currentMedia.type !== "text" && (
              <div className="Image-carousel-caption">
                {currentMedia.caption}
              </div>
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
