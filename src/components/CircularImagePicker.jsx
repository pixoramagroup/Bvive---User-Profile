import React, { useState, useRef } from 'react';
import './CircularImagePicker.scss';

const CircularImagePicker = ({ images, onImageChange }) => {
  const [localImages, setLocalImages] = useState(images);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click(); // Trigger file input when image is clicked
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      //   setLocalImages([...localImages, fileUrl]); // Add the new image to the local images array For multiple images
      setLocalImages([fileUrl]); // Add the new image to the local images array
      onImageChange(fileUrl); // Call the callback function with the new image URL
    }
  };

  return (
    <div className="image-picker-container">
      {localImages.map((image, index) => (
        <div key={index} className="image-container" onClick={handleImageClick}>
          <img src={image} alt={`image-${index}`} className="circular-image" />
        </div>
      ))}
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
