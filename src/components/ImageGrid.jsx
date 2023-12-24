import React, { useState } from 'react';
import { Delete, CloudUpload } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const ImageGrid = () => {
  const presetImages = [
    'src/assets/yoga.jpg',
    'src/assets/nutrition.jpg',
    'src/assets/sup.jpg',
    'src/assets/boxing.jpg',
    'src/assets/stretching.jpg',
    'src/assets/sup.jpg',
    'src/assets/nutrition.jpg',
    'src/assets/yoga.jpg',
    'src/assets/boxing.jpg',
    'src/assets/nutrition.jpg',
  ];

  const [images, setImages] = useState(presetImages);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result;
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = presetImages[index]; // Reset to the preset image
    setImages(updatedImages);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 200px)', gap: '20px', width: '100%', margin: 'auto' }}>
      {images.map((src, index) => (
        <div key={index} style={{ position: 'relative', width: '100%', paddingBottom: '100%', overflow: 'hidden', border: '1px solid #ddd' }}>
          <img src={src || '/placeholder.png'} alt={`Image ${index + 1}`} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <input type="file" name={`file-${index}`} accept="image/*" style={{ display: 'none' }} onChange={(e) => handleImageChange(e, index)} />
            <IconButton component="span" onClick={() => document.getElementsByName(`file-${index}`)[0].click()}>
              <CloudUpload />
            </IconButton>
            <IconButton onClick={() => deleteImage(index)} style={{ cursor: 'pointer', marginTop: '5px' }}>
              <Delete />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
