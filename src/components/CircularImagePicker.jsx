import React, { useState, useRef,useEffect } from 'react';
import './CircularImagePicker.scss';

const CircularImagePicker = ({ images, onImageChange }) => {
  const [localImages, setLocalImages] = useState(images);
  const [showPopup, setShowPopup] = useState(false);
  const fileInputRef = useRef(null);
  const popupRef = useRef(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // Clicked outside the popup, so close it
        setShowPopup(false);
      }
    };

    // Add event listener to handle clicks outside the popup
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener to avoid memory leaks
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleImageClick = (index) => {
    setShowPopup(true);
    setSelectedImageIndex(index);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setLocalImages([fileUrl]);
      onImageChange(fileUrl);
      setShowPopup(false); // Close the pop-up after selecting the new image
    }
  };

  const handleOptionClick = (option) => {
    if (option === 'seeProfilePic') {
      // Handle zoomed version of the existing profile pic
      // You can use a modal or any other component to display the zoomed version
      // For now, let's log the action to the console
      console.log('See Profile Pic:', localImages[selectedImageIndex]);
    } else if (option === 'changeProfilePic') {
      fileInputRef.current.click(); // Trigger file input when "Change or Add Profile Pic" is clicked
    } else if (option === 'seeIntroVideo') {
      // Handle the "See Intro Video" option
      // You can replace this with your logic to show the intro video
      console.log('See Intro Video');
    }

    setShowPopup(false); // Close the pop-up after handling the option
  };

  return (
    <div className="image-picker-container">
      {localImages.map((image, index) => (
        <div key={index} className="image-container" onClick={() => handleImageClick(index)}>
          <img src={image} alt={`image-${index}`} className="circular-image" />
        </div>
      ))}
      {showPopup && (
        <div ref={popupRef} className="popup-container">
          <div className="popup-option" onClick={() => handleOptionClick('seeProfilePic')}>
            See Profile Pic
          </div>
          <div className="popup-option" onClick={() => handleOptionClick('changeProfilePic')}>
            Change or Add Profile Pic
          </div>
          <div className="popup-option" onClick={() => handleOptionClick('seeIntroVideo')}>
            See Intro Video
          </div>
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
