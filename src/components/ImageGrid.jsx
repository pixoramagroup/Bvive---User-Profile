import React, { useState } from "react";
import { Delete, CloudUpload } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Stretching from "../assets/stretching_1.jpg"
import Nutrition from "../assets/nutrition_1.jpg"
import Sup from "../assets/sup.jpg";
import Boxing from "../assets/boxing.jpg";
const ImageGrid = () => {
  const hardcodedImages = [
    // "../assets/stretching_1.jpg",
    // "../assets/nutrition_1.jpg",
    // "../assets/sup.jpg",
    // "../assets/boxing.jpg",
    Stretching,
    Nutrition,
    Sup,
    Boxing
  ];

  const [media, setMedia] = useState(hardcodedImages);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  const handleMediaChange = (e, index) => {
    const file = e.target.files[0];
    if (file && file.type.includes("image")) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedMedia = [...media];
        updatedMedia[index] = { src: reader.result, type: file.type };
        setMedia(updatedMedia);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteMedia = (index) => {
    const updatedMedia = [...media];
    updatedMedia[index] = hardcodedImages[index];
    setMedia(updatedMedia);
  };

  const openModal = (src) => {
    setModalSrc(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        // gap: "10px",
        width: "100%",
        // margin: "0", // Remove fixed margin
      }}
    >
      {media.map((src, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            width: "100%",
            height: "200px",
            overflow: "hidden",
            // border: "2px solid yellow",
          }}
        >
          <img
            src={src}
            alt={`Media ${index + 1}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onClick={() => openModal(src)}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <input
              type="file"
              name={`file-${index}`}
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => handleMediaChange(e, index)}
            />
            <IconButton
              component="span"
              onClick={() =>
                document.getElementsByName(`file-${index}`)[0].click()
              }
            >
              <CloudUpload />
            </IconButton>
            <IconButton
              onClick={() => deleteMedia(index)}
              style={{ cursor: "pointer", marginTop: "5px" }}
            >
              <Delete />
            </IconButton>
          </div>
        </div>
      ))}

      <Modal open={modalOpen} onClose={closeModal} center>
        <img
          src={modalSrc}
          alt="Modal"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </Modal>
    </div>
  );
};

export default ImageGrid;
