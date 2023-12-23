    import React, { useState } from 'react';
    import './ImageGrid.scss';

    const ImageGrid = () => {
      const [imageUrls, setImageUrls] = useState([
        // existing image URLs
        'src/assets/sup.jpg',
        'src/assets/yoga.jpg',
        'src/assets/nutrition.jpg',
        'src/assets/stretching.jpg',
      ]);


      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setImageUrls([...imageUrls, imageUrl]);
        }
      };

      return (
        <div className="image-grid-container">
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="image-grid-item">
              <img src={imageUrl} alt={`Image ${index + 1}`} />
            </div>
          ))}
          <div className="image-grid-item add-image">
            <label htmlFor="fileInput" className="add-image-label">
              Add Image
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>
        </div>
      );
    };

    export default ImageGrid;
