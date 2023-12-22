import React from 'react';
import './ImageGrid.scss'; // Import a CSS file for styling

const ImageGrid = () => {
  // Example image URLs
  const imageUrls = [
    'src/assets/sup.jpg',
    'src/assets/yoga.jpg',
    'src/assets/nutrition.jpg',
    'src/assets/stretching.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div className="image-grid-container">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="image-grid-item">
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
