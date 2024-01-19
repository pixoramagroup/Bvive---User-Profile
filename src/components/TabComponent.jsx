import React from 'react';
import "./TabComponent.scss";


const TabComponent = ({ activeTab, onTabChange, mediaItems }) => {
  return (
    <div>
      <div className="tab-buttons">
        <button
          onClick={() => onTabChange('posts')}
          className={activeTab === 'posts' ? 'active' : ''}
        >
          Posts
        </button>
        <button
          onClick={() => onTabChange('photos')}
          className={activeTab === 'photos' ? 'active' : ''}
        >
          Photos
        </button>
        <button
          onClick={() => onTabChange('videos')}
          className={activeTab === 'videos' ? 'active' : ''}
        >
          Videos
        </button>
      </div>
      <div className="media-container">
        {mediaItems.map((media, index) => (
          <div key={index} className="media-item">
            {media.type === 'text' && <p>{media.text}</p>}
            {media.type === 'image' && <img src={media.src} alt={media.caption} />}
            {media.type === 'video' && (
               <video
               className="Image-carousel-image"
               controls
               loop
               muted
               style={{ objectFit: "cover" }}
             >
                <source src={media.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
