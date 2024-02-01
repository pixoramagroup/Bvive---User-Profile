import React, { useState, useRef, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Avatar from "@mui/material/Avatar";
import "./CircularImagePicker.scss";
import  Slide from "@mui/material/Slide";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return (
//     <Slide
//       direction="up" // Change the direction if needed
//       ref={ref}
//       {...props}
//       style={{ transition: 'transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)' }}
//     />
//   );
// });

const CircularImagePicker = ({ images, onImageChange }) => {
  const [localImages, setLocalImages] = useState(images);
  const [showPopup, setShowPopup] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const fileInputRef = useRef(null);
  const popupRef = useRef(null);
  const overlayRef = useRef(null);

  const handleImageClick = (index, event) => {
    event.stopPropagation(); // Prevent the click event from reaching the window listener
    setSelectedImageIndex(index);
    setShowPopup(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setLocalImages([fileUrl]);
      onImageChange(fileUrl);
      setShowPopup(false);
      setShowOverlay(false);
    }
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleOptionClick = (option) => {
    if (option === "seeProfilePic") {
      setShowOverlay(true);
    } else if (option === "changeProfilePic") {
      fileInputRef.current.click();
    } else if (option === "seeIntroVideo") {
      console.log("See Intro Video");
    }

    setShowPopup(false);
  };

  const handleOutsideClick = (event) => {
    // Close the popup if clicked outside of it
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }

    // Close the overlay if clicked outside of it
    if (overlayRef.current && overlayRef.current === event.target) {
      setShowOverlay(false);
    }
  };

  useEffect(() => {
    // Attach the click event listener to the window
    window.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="image-picker-container">
      {localImages.map((image, index) => (
        <div
          key={index}
          className="image-container"
          onClick={(event) => handleImageClick(index, event)}
        >
          {/* <img src={image} alt={`image-${index}`} className="circular-image" /> */}
          <Avatar
            src={image}
            alt={`avatar-${index}`}
            sx={{ width: 100, height: 100 }}
            className="circular-image"
          ></Avatar>
        </div>
      ))}
      <Dialog
        open={showPopup}
        onClose={handleClosePopup}
        // keepMounted
        // TransitionComponent={Transition}
        // aria-describedby="alert-dialog-slide-description"

      >
        <DialogContent style={{ background: "black", color: "white" }} >
          <div ref={popupRef} >
            <div
              className="popup-option"
              onClick={() => handleOptionClick("seeProfilePic")}
            >
              See Profile Picture
            </div>
            <div
              className="popup-option"
              onClick={() => handleOptionClick("changeProfilePic")}
            >
              Change or Add Profile Picture
            </div>
            <div
              className="popup-option"
              onClick={() => handleOptionClick("seeIntroVideo")}
            >
              See Intro Video
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {showOverlay && (
        <div
          ref={overlayRef}
          className="profile-overlay"
          onClick={() => setShowOverlay(false)}
        >
          <Avatar
            src={localImages[selectedImageIndex]}
            alt={`overlay-avatar-${selectedImageIndex}`}
            className="overlay-image"
            sx={{ width: 100, height: 100 }}
          />
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept="image/*"
      />
    </div>
  );
};

export default CircularImagePicker;
