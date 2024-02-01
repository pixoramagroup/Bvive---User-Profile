//My certifications section//
import React, { useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import Badge from "../assets/badge_watermark.png";
import "./TextCarousel.scss";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { DialogActions, Button } from "@mui/material";
// import Slide from "@mui/material/Slide";
import "animate.css";

//  const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });

const TextCarousel = ({ items, itemsPerView }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - itemsPerView ? prevIndex + 1 : 0
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - itemsPerView
    );
  };
  const [isCertificateOpen, setCertificateOpen] = useState(false);

  const handleCertificatesOpen = () => {
    setCertificateOpen(true);
  };

  const handleCertificatesClose = () => {
    setCertificateOpen(false);
  };

  return (
    <div className="certificate-main">
      <div style={{ backgroundColor: "rgb(121 120 122)" }}>
        <h1 onClick={handleCertificatesOpen}>My Certifications</h1>
        <div className="certificate-under-line"></div>
      </div>
      <Dialog
        open={isCertificateOpen}
        onClose={handleCertificatesClose}
        className="animate__animated animate__zoomIn"
        // TransitionComponent={Transition}
        // keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent
          style={{ borderRadius: "5px", height: "500px" }}
        >
          <div className="dialog-carousel-content">
            {items
              .slice(currentIndex, currentIndex + itemsPerView)
              .map((item, index) => (
                <div key={index} className="carousel-item">
                  <img src={Badge} alt="Watermark" className="watermark" />
                  <div className="icon-container"></div>
                  <div className="heading-container">
                    <div className="carousel-heading">
                      {item.heading}
                      <VerifiedIcon className="verified-icon" />
                    </div>
                  </div>
                  <div className="carousel-subHeading">{item.subHeading}</div>
                  <div className="line"></div>
                  <div className="carousel-institute">{item.institute}</div>
                </div>
              ))}
          </div>
        </DialogContent>
      </Dialog>

      <div className="carousel-container">
        <button className="carousel-button" onClick={goToPrev}>
          &lt;
        </button>
        <div className="carousel-content">
          {items
            .slice(currentIndex, currentIndex + itemsPerView)
            .map((item, index) => (
              <div key={index} className="carousel-item">
                <img src={Badge} alt="Watermark" className="watermark" />
                <div className="icon-container"></div>
                <div className="heading-container">
                  <div className="carousel-heading">
                    {item.heading}
                    <VerifiedIcon className="verified-icon" />
                  </div>
                </div>
                <div className="carousel-subHeading">{item.subHeading}</div>
                <div className="line"></div>
                <div className="carousel-institute">{item.institute}</div>
              </div>
            ))}
        </div>
        <button className="carousel-button" onClick={goToNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TextCarousel;
