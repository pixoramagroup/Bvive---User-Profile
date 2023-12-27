// Profile.js
// import React from 'react';
import { useState } from "react";
//import classes from './Profile.module.scss'; // Assume CSS modules are set up
import "./Profile.scss";
import CircularImagePicker from "./CircularImagePicker";
import StarRatingComponent from "react-star-rating-component";
import MapComponent from "./MapComponent";
import ImageGrid from "./ImageGrid";
import TextCarousel from "./TextCarousel";
import Testimonials from "./Testimonials";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import MySpecialisations from "./MySpecialisations";

const Profile = () => {
  // const images = [
  //   '',
  //   // 'url-to-image1.jpg',
  //   // 'url-to-image2.jpg',
  //   // Add more image URLs
  // ];
  const [boxes, setBoxes] = useState([]);
  const [images, setImages] = useState([""]);
  //const [rating, setRating] = useState({ rating: 2 });
  const [rating, setRating] = useState(5);
  const handleImageChange = (newImage) => {
    setImages([newImage]);
  };
  function handleOnDrag(e, boxType, color) {
    e.dataTransfer.setData("boxType", boxType);
    e.dataTransfer.setData("color", color);
  }

  function handleOnDrop(e) {
    const boxType = e.dataTransfer.getData("boxType");
    const color = e.dataTransfer.getData("color");
    setBoxes([...boxes, { boxType, color }]);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }
  const onStarClick = (nextValue) => {
    setRating(nextValue);
  };
  const textItems = [
    {
      heading: "Personal Training",
      subHeading: "Sub Heading",
      institute: "QLD Institute of Tale",
    },
    {
      heading: "Support Science and Nutrition",
      subHeading: "Bachelors Degree 2012",
      institute: "Queensland University of Technology",
    },
    {
      heading: "Group Excercise Freestyle",
      subHeading: "Certificate III in Fitness 2014",
      institute: "Fitness Institute Australia",
    },
    {
      heading: "Personal Training 2",
      subHeading: "Sub Heading 2",
      institute: "QLD Institute of Tale 2",
    },

    {
      heading: "Group Excercise Freestyle 2",
      subHeading: "Certificate III in Fitness 2014",
      institute: "Fitness Institute Australia 2",
    },
    {
      heading: "Personal Training 2",
      subHeading: "Sub Heading 2",
      institute: "QLD Institute of Tale 2",
    },

    {
      heading: "Group Excercise Freestyle 2",
      subHeading: "Certificate III in Fitness 2014",
      institute: "Fitness Institute Australia 2",
    },
  ];

  return (
    // <div className={classes.profile}>
    //   {/* Header Section */}
    //   <header className={classes.header}>{/* Logo and Navigation */}</header>

    //   {/* Main Content Section */}
    //   <main className={classes.MainContent}>
    //     {/* Profile Section */}
    //     <section className={classes.ProfileSection}>
    //       {/* Profile Details */}
    //     </section>

    //     {/* About Me Section */}
    //     <section className={classes.AboutMe}>{/* Content */}</section>

    //     {/* Fitness Classes and Goals */}
    //     <section className={classes.FitnessClasses}>{/* Content */}</section>

    //     {/* Contact Me Section */}
    //     <section className={classes.ContactMe}>{/* Content */}</section>

    //     {/* Specialization Section */}
    //     <section className={classes.Specialization}>{/* Content */}</section>

    //     {/* Certificates Section */}
    //     <section className={classes.Certificates}>{/* Content */}</section>

    //     {/* Photos and Videos Section */}
    //     <section className={classes.PhotosVideos}>{/* Content */}</section>

    //     {/* Schedule Section */}
    //     <section className={classes.Schedule}>{/* Content */}</section>

    //     {/* Testimonials Section */}
    //     <section className={classes.Testimonials}>{/* Content */}</section>
    //   </main>
    //   {/* Footer Section */}
    //   <footer className={classes.Footer}>{/* Footer Content */}</footer>
    // </div>

    <div className="profile-main">
      <div className="profile-header">
        <div>
          <img
            src="src/assets/white_logo.png"
            alt="Header Logo"
            style={{ maxWidth: "150px", marginTop: "25px", marginLeft: "30px" }}
          ></img>
        </div>

        <button className="login-button">LOG IN</button>
      </div>
      <div className="profile-second-main">
        <div
          className="profile-second-box"
          // style={{ background: 'orange' }}
          // draggable
          // onDragStart={(e) => handleOnDrag(e, 'profile box', 'orange')}
        >
          <div className="profile-card-main">
            <div className="profile-card-top">
              <div className="profile-card-top-left">
                <CircularImagePicker
                  images={images}
                  onImageChange={handleImageChange}
                />
              </div>
              <div className="profile-card-top-right">
                <h2>James Osborn</h2>
                <div>Male, 27</div>
                <div style={{ fontSize: "30px" }}>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={onStarClick}
                  />
                </div>
              </div>
            </div>

            <div className="profile-card-bottom">
              <div className="profile-card-bottom-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis illum quis reprehenderit velit possimus eaque
                consequuntur labore quam, ducimus impedit aut amet distinctio
                rerum a ipsam repudiandae enim delectus sequi.
              </div>
              <div className="profile-card-bottom-button">
                <button className="transparent-button">Send Mail</button>
                <button className="transparent-button">View Schedule</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="certificate-main">
        <h1
          style={{
            fontSize: "34px",
            marginBottom: "10px",
            color: "black",
            marginLeft: "80px",
            fontWeight: "500",
          }}
        >
          My Certifications
        </h1>
        <div class="under-line" style={{ backgroundColor: "black" }}></div>

        <TextCarousel items={textItems} itemsPerView={4} />
      </div>
      <div className="profile-social-main">
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, "social 1", "blue")}
        >
          <InstagramIcon /> {/* Use Instagram Icon from MUI */}
        </div>
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, "social 2", "blue")}
        >
          <FacebookIcon /> {/* Use Facebook Icon from MUI */}
        </div>
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, "social 3", "blue")}
        >
          <LinkedInIcon /> {/* Use LinkedIn Icon from MUI */}
        </div>
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, "social 4", "blue")}
        >
          <TwitterIcon /> {/* Use Twitter Icon from MUI */}
        </div>
      </div>
      <div className="profile-aboutme-main-1" style={{ background: "#3b3b3b" }}>
        <MySpecialisations></MySpecialisations>
        {/* <h2
          style={{
            fontSize: "34px",
            marginBottom: "10px",
            color: "white",
            marginLeft: "80px",
            fontWeight: "500",
          }}
        >
          My Specialization
        </h2>
        <div class="under-line" style={{ backgroundColor: "white" }}></div>
        <div className="profile-cards-container">
          <div
            className="profile-cards"
            style={{
              backgroundImage: 'url("src/assets/yoga.jpg")',
              backgroundSize: "cover",
            }}
          >
            <h2>Yoga</h2>
          </div>
          <div
            className="profile-cards"
            style={{
              backgroundImage: 'url("src/assets/nutrition.jpg")',
              backgroundSize: "cover",
            }}
          >
            <h2>Nutrition</h2>
          </div>

          <div
            className="profile-cards"
            style={{
              backgroundImage: 'url("src/assets/sup.jpg")',
              backgroundSize: "cover",
            }}
          >
            <h2>SUP</h2>
          </div>
          <div
            className="profile-cards"
            style={{
              backgroundImage: 'url("src/assets/stretching.jpg")',
              backgroundSize: "cover",
            }}
          >
            <h2>Stretching</h2>
          </div>
        </div> */}
      </div>
      <div className="profile-aboutme-main-2">
        <AboutMe></AboutMe>
        <div
          className="profile-aboutme-right-box"
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          style={{ background: "white" }}
        >
          {boxes.map((box, index) => (
            <div
              className="dropped-box"
              key={index}
              style={{ background: box?.color }}
            >
              {box?.boxType}
            </div>
          ))}
          <ImageGrid></ImageGrid>
        </div>
      </div>

      {/* <div className="profile-aboutme-main">
                <div
                  className="profile-aboutme-left-box" 
                  style={{ background: 'grey' }}
                  draggable
                  onDragStart={(e) => handleOnDrag(e, 'fitness & goals', 'grey')}
                >
                  <h2> Fitness classes and goals</h2>
                </div>
                <div
                  className="profile-aboutme-right-box"
                  style={{ background: 'grey' }}
                ></div>
              </div> */}

      <div className="profile-aboutme-main">
        <div
          className="profile-aboutme-left-box"
          style={{ background: "white", width: "50%" }}
          draggable
          onDragStart={(e) => handleOnDrag(e, "contact me", "green")}
        >
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "10px",
              color: "black",
              marginLeft: "80px",
              fontWeight: "500",
              marginTop: "40px",
            }}
          >
            Contact me
          </h2>
          <div class="under-line" style={{ backgroundColor: "black" }}></div>
          <div style={{ display: "flex" }}>
            <div className="contact-icons">
              <div className="icon-container">
                <LocationOnIcon color="black" />
                <span className="text">Brisbane</span>
              </div>
              <div className="icon-container">
                <LanguageIcon color="black" />
                <span className="text">sales@pixoramagroup.com</span>
              </div>
              <div className="icon-container">
                <PhoneAndroidIcon color="black" />
                <span className="text">+1 (555) 123-4567</span>
              </div>
              <div className="icon-container">
                <MailOutlineIcon color="black" />
                <span className="text">sales@pixoramagroup.com</span>
              </div>
            </div>
            <div style={{ marginLeft: "100px", marginTop: "-70px" }}>
              <p> ❤️I am currently accepting bookings.</p>
            </div>
          </div>
        </div>
        <div
          className="profile-aboutme-right-box"
          style={{ background: "#ffffff", width: "50%" }}
        >
          <MapComponent></MapComponent>
        </div>
      </div>

      <div className="profile-aboutme-main-2">
        <div
          className="profile-aboutme-left-box"
          style={{ background: "rgb(67 206 175)" }}
          draggable
          onDragStart={(e) => handleOnDrag(e, "contact me", "green")}
        >
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "10px",
              color: "white",
              marginLeft: "80px",
              fontWeight: "500",
              marginTop: "40px",
            }}
          >
            Testimonials
          </h2>
          <div class="under-line"></div>
          <div>
            <h3
              style={{
                marginBottom: "10px",
                color: "white",
                marginLeft: "80px",
                fontWeight: "600",
                marginTop: "40px",
              }}
            >
              Rating 4
              <span
                style={{
                  fontStyle: "italic",
                  display: "block",
                  fontWeight: "lighter",
                }}
              >
                based on 52 testimonials
              </span>
            </h3>
          </div>
          <div className="profile-card-bottom-button">
            <button
              className="transparent-button"
              style={{
                color: "white",
                padding: "10px 20px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              Leave Feedback
            </button>
          </div>
        </div>
        <div
          className="profile-aboutme-right-box"
          style={{ background: "white" }}
        >
          <Testimonials></Testimonials>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
