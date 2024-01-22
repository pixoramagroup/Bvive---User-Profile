// import React from 'react';
// import "./TabComponent.scss";

// const TabComponent = ({ activeTab, onTabChange, mediaItems }) => {
//   return (
//     <div>
//       <div className="tab-buttons">
//         <button
//           onClick={() => onTabChange('waggle')}
//           className={activeTab === 'waggle' ? 'active' : ''}
//         >
//           waggle
//         </button>
//         <button
//           onClick={() => onTabChange('photos')}
//           className={activeTab === 'photos' ? 'active' : ''}
//         >
//           Photos
//         </button>
//         <button
//           onClick={() => onTabChange('videos')}
//           className={activeTab === 'videos' ? 'active' : ''}
//         >
//           Videos
//         </button>
//       </div>
//       <div className="media-container">
//         {mediaItems.map((media, index) => (
//           <div key={index} className="media-item">
//             {media.type === 'text' && <p>{media.text}</p>}
//             {media.type === 'image' && <img src={media.src} alt={media.caption} />}
//             {media.type === 'video' && (
//                <video
//                className="Image-carousel-image"
//                controls
//                loop
//                muted
//                style={{ objectFit: "cover" }}
//              >
//                 <source src={media.src} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TabComponent;
import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import "./TabComponent.scss";
import "./ThreadPosts.scss";

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

const TabComponent = ({ activeTab, onTabChange, mediaItems }) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const touchThreshold = 50; // Adjust as needed
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const deltaX = touchEndX.current - touchStartX.current;

      if (deltaX > touchThreshold) {
        // Swipe right
        const prevTab =
          activeTab === "videos"
            ? "photos"
            : activeTab === "photos"
            ? "waggle"
            : activeTab;
        onTabChange(prevTab);
      } else if (deltaX < -touchThreshold) {
        // Swipe left
        const nextTab =
          activeTab === "waggle"
            ? "photos"
            : activeTab === "photos"
            ? "videos"
            : activeTab;
        onTabChange(nextTab);
      }
    }

    // Reset touch values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const openMedia = (media) => {
    setSelectedMedia(media);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="tab-buttons">
        {["waggle", "photos", "videos"].map((tab, index) => (
          <React.Fragment key={tab}>
            <button
              onClick={() => onTabChange(tab)}
              className={activeTab === tab ? "active" : ""}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
            {index < 2 && <div className="tab-divider"></div>}
          </React.Fragment>
        ))}
      </div>
      {/* <div className="media-container"> */}
      <div className={activeTab === "waggle" ? "waggle-container" : "media-container"}>
        {mediaItems.map((currentMedia, index) => (
          <div key={index}>
            {currentMedia.type === "waggle" && (
              <div key={currentMedia.id} className="post" style={{padding:"6px"}}>
                <div className="user-info">
                  {/* Assuming that Avatar component accepts 'src' and 'alt' props */}
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
                  <Message size={24} fill="#333" />{" "}
                </div>

                <div className="post-likes">
                  {currentMedia.likes} likes . {currentMedia.comments} comments
                </div>
              </div>
            )}

            {currentMedia.type === "image" && (
              
              <img
              className="Image-carousel-image"
                src={currentMedia.src}
                alt={currentMedia.caption}
                onClick={() => openMedia(currentMedia)}
              />
            )}
            {currentMedia.type === "video" && (
              <div className="video-container" onClick={() => openMedia(currentMedia)}>
                <video
                  className="Image-carousel-image"
                  loop
                  muted
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                >
                  <source src={currentMedia.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Render a modal or overlay for displaying the selected media */}
      {selectedMedia && (
        <div className="media-overlay" onClick={closeMedia}>
          {selectedMedia.type === "text" && <p>{selectedMedia.text}</p>}

          {selectedMedia.type === "image" && (
            <img src={selectedMedia.src} alt={selectedMedia.caption} />
          )}
          {selectedMedia.type === "video" && (
            <video
              className="Image-carousel-image"
              controls
              loop
              muted
              style={{ width: "100%", height: "45%" }}
            >
              <source src={selectedMedia.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
};

export default TabComponent;

