import React, { useState, useRef, useEffect } from 'react';
import './CircularImagePicker.scss';

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

  const handleOptionClick = (option) => {
    if (option === 'seeProfilePic') {
      setShowOverlay(true);
    } else if (option === 'changeProfilePic') {
      fileInputRef.current.click();
    } else if (option === 'seeIntroVideo') {
      console.log('See Intro Video');
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
    window.addEventListener('click', handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="image-picker-container">
      {localImages.map((image, index) => (
        <div key={index} className="image-container" onClick={(event) => handleImageClick(index, event)}>
          <img src={image} alt={`image-${index}`} className="circular-image" />
        </div>
      ))}
      {showPopup && (
        <div ref={popupRef} className="popup-container">
          <div className="popup-option" onClick={() => handleOptionClick('seeProfilePic')}>
            See Profile Picture
          </div>
          <div className="popup-option" onClick={() => handleOptionClick('changeProfilePic')}>
            Change or Add Profile Picture
          </div>
          <div className="popup-option" onClick={() => handleOptionClick('seeIntroVideo')}>
            See Intro Video
          </div>
        </div>
      )}
      {showOverlay && (
        <div ref={overlayRef} className="profile-overlay" onClick={() => setShowOverlay(false)}>
          <img
            src={localImages[selectedImageIndex]}
            alt={`overlay-${selectedImageIndex}`}
            className="overlay-image"
          />
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept="image/*"
      />
    </div>
  );
};

export default CircularImagePicker;







// import React, { useState, useRef } from 'react';
// import './CircularImagePicker.scss';

// const CircularImagePicker = ({ images, onImageChange }) => {
//   const [localImages, setLocalImages] = useState(images);
//   const fileInputRef = useRef(null);

//   const handleImageClick = () => {
//     fileInputRef.current.click(); // Trigger file input when image is clicked
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const fileUrl = URL.createObjectURL(file);
//       //   setLocalImages([...localImages, fileUrl]); // Add the new image to the local images array For multiple images
//       setLocalImages([fileUrl]); // Add the new image to the local images array
//       onImageChange(fileUrl); // Call the callback function with the new image URL
//     }
//   };

//   return (
//     <div className="image-picker-container">
//       {localImages.map((image, index) => (
//         <div key={index} className="image-container" onClick={handleImageClick}>
//           <img src={image} alt={`image-${index}`} className="circular-image" />
//         </div>
//       ))}
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleFileChange}
//         style={{ display: 'none' }}
//         accept="image/*"
//       />
//     </div>
//   );
// };

// export default CircularImagePicker;
