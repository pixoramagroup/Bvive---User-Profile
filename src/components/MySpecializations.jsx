import React, { useState } from "react";
import Yoga from "../assets/yoga_icon.png";
import Nutrition from "../assets/nutrition_icon.png";
import Cardio from "../assets/cardio_icon.png";
import Fitness from "../assets/Fitness_logo.png";
import Swimming from "../assets/swimming_icon.png";
import JumpRope from "../assets/jumpropes_icon.png";
import Meditation from "../assets/meditation_icon.png";
import Power from "../assets/PowerLifting_icon.png";
import "./MySpecializations.scss";
import EditableText from "./EditableText";
import { DialogContent } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogActions, Button } from "@mui/material";


const Modal = ({ show, onClose, specialization }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illum quis reprehenderit velit possimus eaque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illum quis reprehenderit velit possimus eaque"
  );

  const handleEdit = () => {
    setEdit(true);
  };

  const save = (val) => {
    setValue(val);
    setEdit(false);
  };

  const close = () => {
    setEdit(false);
  };

 

  return (
    show && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={stopPropagation}>
          <div className="close-button" onClick={onClose}>
            &times;
          </div>
          <div className="modal-heading">{specialization.name}</div>
          <div className="modal-content-item">
            {/* <input
              className="editable-input"
              type="text"
              value={editableText}
              onChange={handleTextChange}
            /> */}
             {!edit ? (
        <p onClick={handleEdit}>{value}</p>
      ) : (
        <EditableText
          defaultValue={value}
          saveText={save}
          cancelEdit={close}
          // checkIcon={<CheckIcon />}
          // closeIcon={<CloseIcon />}
        />
      )}
          </div>
          {/* <div className="modal-content-item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <button className="cost">$100</button> */}
            <button className="availability">Availability</button>
            <button className="bookNow" type="submit">
              Book Now
            </button>
          </div>
        </div>
      </div>
    )
  );
};

const MySpecializations = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const specializations = [
    { name: "Cardio", imageUrl: `url(${Cardio})`, id: "BodyBuilding" },
    { name: "Power Lifting", imageUrl: `url(${Power})`, id: "PowerLifting" },
    { name: "Fitness", imageUrl: `url(${Fitness})`, id: "PrehabRehab" },
    {
      name: "Nutritional Coaching",
      imageUrl: `url(${Nutrition})`,
      id: "NutritionalCoaching",
    },
    { name: "Yoga", imageUrl: `url(${Yoga})`, id: "Yoga" },
    { name: "Swimming", imageUrl: `url(${Swimming})`, id: "Swimming" },
    { name: "Jump Rope", imageUrl: `url(${JumpRope})`, id: "JumpRope" },
    { name: "Meditation", imageUrl: `url(${Meditation})`, id: "Meditation" },
    { name: "Diet", imageUrl: `url(${JumpRope})`, id: "JumpRope" },
    { name: "Boxing", imageUrl: `url(${Meditation})`, id: "Meditation" },
    { name: "Physiotherapy", imageUrl: `url(${JumpRope})`, id: "JumpRope" },
    { name: "Cycling", imageUrl: `url(${Meditation})`, id: "Meditation" },
    { name: "Body Training", imageUrl: `url(${JumpRope})`, id: "JumpRope" },
    { name: "Therapy", imageUrl: `url(${Meditation})`, id: "Meditation" },
  ];

  const handleSpecializationClick = (specialization) => {
    setSelectedSpecialization(specialization);
  };

  const closeModal = () => {
    setSelectedSpecialization(null);
  };

  const [isServiceOpen , setServiceOpen]=useState(false);

  const handleServiceOpen = () =>{
 setServiceOpen(true);
  };

  const handleServiceClose = () =>  {
    setServiceOpen(false);
  };

  return (
    <div className="profile-aboutme-main">
      <div
        className="profile-aboutme-left-box"
        style={{ background: "#3b3b3b" }}
      >
        <h2 className="services-heading" onClick={handleServiceOpen}>
          Services
          </h2>
          <Dialog  open={isServiceOpen}
          onClose={handleServiceClose}>
            <DialogContent  style={{backgroundColor:"black" , color:"white", borderRadius:"5px", height:"500px"}}>
            <ul className="list">
            {specializations.map((specialization, index) => (
              <li
                key={index}
                className="list-item"
                onClick={() => handleSpecializationClick(specialization)}
              >
                {specialization.name}
              </li>
            ))}
          </ul>

            </DialogContent>
          </Dialog>
        <div className="services-under-line"></div>
        <div className="list-container">
          <ul className="list">
            {specializations.map((specialization, index) => (
              <li
                key={index}
                className="list-item"
                onClick={() => handleSpecializationClick(specialization)}
              >
                {specialization.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="profile-aboutme-right-box-1">
        {specializations.map(
          (specialization, index) =>
            index < 8 && (
              <div
                key={index}
                className="profile-cards"
                style={{
                  backgroundImage: specialization.imageUrl,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  border: "1px solid gold",
                  cursor: "pointer",
                }}
                onClick={() => handleSpecializationClick(specialization)}
              >
                <h3>{specialization.name}</h3>
              </div>
            )
        )}
      </div>
      <Modal
        show={selectedSpecialization !== null}
        onClose={closeModal}
        specialization={selectedSpecialization}
      />
    </div>
  );
};

export default MySpecializations;
