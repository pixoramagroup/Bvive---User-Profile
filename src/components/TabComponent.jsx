import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import "./TabComponent.scss";
import "./WagglePosts.scss";
import 'animate.css';
import WagglePosts from "./WagglePosts";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });



const TabComponent = ({ activeTab, onTabChange, mediaItems }) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const touchThreshold = 50; // Adjust as needed
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [openTabModal, setOpenTabModal] = useState(false);

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

  const handleOpenTabModal = () => {
    setOpenTabModal(true);
  };

  const handleCloseTabModal = () => {
    setOpenTabModal(false);
  };
  
  const renderTabContent = () => {
    // render the content of the selected tab
    return mediaItems.map((currentMedia, index) => (
      <div
        key={index}
        className={activeTab === "waggle" ? "waggle-content" : "media-items"}
        
      >
        {currentMedia.type === "waggle" && (
          <WagglePosts key={currentMedia.id} currentMedia={currentMedia} />
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
          <div
            className="video-container"
            onClick={() => openMedia(currentMedia)}
          >
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
    ));
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="tab-component-container"
    >
      <div className="tab-buttons">
        {["waggle", "photos", "videos"].map((tab, index) => (
          <React.Fragment key={tab}>
            <button
              onClick={() => {
                onTabChange(tab);
              }}
              className={activeTab === tab ? "active" : ""}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
            {index < 2 && <div className="tab-divider"></div>}
          </React.Fragment>
        ))}
      </div>
      <div
        className={
          activeTab === "waggle" ? "waggle-container" : "media-container"
        }
      >
        {renderTabContent()}

        {/* Always show the "View All" button */}
      </div>
      <button onClick={handleOpenTabModal} className="view-all-button">
        View All
      </button>

      {/* Render a modal or overlay for displaying the selected media */}
      {selectedMedia && (
        <div className="media-overlay" onClick={closeMedia}>
          {selectedMedia.type === "text" && <p>{selectedMedia.text}</p> }

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

      {/* Modal for displaying all items of the selected tab */}
      <Dialog
        open={openTabModal}
        onClose={handleCloseTabModal}
        // TransitionComponent={Transition}
        // keepMounted
        className="animate__animated animate__zoomIn"

        aria-describedby="alert-dialog-slide-description"

        fullWidth
        maxWidth="md"
        style={{ top: "60px" }}
      >
        <DialogTitle
          style={{ background: "black", color: "white", textAlign: "center" }}
        >
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </DialogTitle>
        <DialogContent style={{ background: "black", color: "white" }}  >
          {renderTabContent()}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TabComponent;
