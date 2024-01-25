// import React from "react";
// import ImageCarousel from "./ImageCarousel";
// import "./MediaPopUp.scss";

// const MediaPopup = ({ mediaItems, onClose, type }) => {
  
//   const stopPropagation = (e) => {
//     e.stopPropagation();
//   };
  
//   return (
//     <div className="media-popup-dialog" onClick={onClose}>
//       <div className="media-popup-content" onClick={stopPropagation}>
//         <div className="close-icon" onClick={onClose}>
//           &#10006;
//         </div>
//         <h2 className="media-popup-title">{type}</h2>
//         <div className="media-items-grid">
//           {mediaItems.map((item, index) => (
//             <div key={index} className="media-item">
//               <ImageCarousel mediaItems={[item]} />
//               {/* <h3>{item.title}</h3> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaPopup;
import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import "./MediaPopUp.scss";

const MediaPopup = ({ mediaItems, onClose, type }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const openSingleView = (item) => {
    setSelectedItem(item);
  };

  const closeSingleView = () => {
    setSelectedItem(null);
  };

  return (
    <div className="media-popup-dialog" onClick={onClose}>
      <div className="media-popup-content" onClick={stopPropagation}>
        <div className="close-icon" onClick={onClose}>
          &#10006;
        </div>
        <h2 className="media-popup-title">{type}</h2>
        <div className="media-items-grid">
          {mediaItems.map((item, index) => (
            <div key={index} className="media-item" onClick={() => openSingleView(item)}>
              <ImageCarousel mediaItems={[item]} />
            </div>
          ))}
        </div>
      </div>

      {/* Single View Overlay */}
      {selectedItem && (
        <div className="media-overlay" onClick={closeSingleView}>
          <div className="single-view-content" onClick={stopPropagation}>
            <div className="close-icon" onClick={closeSingleView}>
              &#10006;
            </div>
            <h2 className="single-view-title">{type} - Single View</h2>
            <div className="single-view-item">
              <ImageCarousel mediaItems={[selectedItem]} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaPopup;
