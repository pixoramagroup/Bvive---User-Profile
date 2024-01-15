// Profile.js
// import React from 'react';
import { useState, useEffect } from "react";
//import classes from './Profile.module.scss'; // Assume CSS modules are set up
import "./Profile.scss";
import CircularImagePicker from "./CircularImagePicker";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import StarRatingComponent from "react-star-rating-component";
import MapComponent from "./MapComponent";
import TextCarousel from "./TextCarousel";
import Stretching from "../assets/stretching_1.jpg";
import Nutrition from "../assets/nutrition_1.jpg";
import Sup from "../assets/sup.jpg";
import Boxing from "../assets/boxing.jpg";
import Blog1 from "../assets/Blog1.png";
import Blog2 from "../assets/Blog2.png";
import Blog3 from "../assets/Blog3.png";
import Blog4 from "../assets/Blog4.png";
import Body1 from "../assets/Body1.jpg";
import Body2 from "../assets/Body2.jpg";
import Body3 from "../assets/Body3.jpg";
import Body4 from "../assets/Body4.jpg";
import FitLogo from "../assets/fitnessCartel.png";
import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";
import Video3 from "../assets/video3.mp4";
import Video4 from "../assets/video4.mp4";
import Yoga from "../assets/yoga_1.jpg";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Link } from "react-router-dom";
// import LanguageIcon from "@mui/icons-material/Language";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";
import Footer from "./Footer";
import MySpecializations from "./MySpecializations";
import Fit1 from "../assets/fit1.jpeg";
import BviveLogo from "../assets/white_logo.png";
import PictureTestimonials from "./PictureTestimonials";
import SignUpPage from "./SignUpPage";
import MediaPopup from "./MediaPopUp";
import MyContent from "./MyContent";
import SearchBar from "./SearchBar";
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
  //
  const textMediaItems = [
    {
      type: "text",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing eli  ipsum dolor sit amet, consectetur adipisicing elit. Facilisillum quis reprehenderit velit possimus eaque",
      date: "12-2-2023",
    },
    // Add more text posts
  ];

  const blogMediaItems = [
    { type: "image", src: Blog1, caption: "Healthy Day", date: "12-2-2023" },
    {
      type: "image",
      src: Blog2,
      caption: "Nutrition in every bite",
      date: "12-2-2023",
    },
    { type: "image", src: Blog3, caption: "Food is Good", date: "12-2-2023" },
    { type: "image", src: Blog4, caption: "Tasty Treats", date: "12-2-2023" },
  ];

  const photoMediaItems = [
    {
      type: "image",
      src: Body1,
      caption: "Holistic Workout",
      date: "12-2-2023",
    },
    { type: "image", src: Body2, caption: "Stretching", date: "12-2-2023" },
    {
      type: "image",
      src: Body3,
      caption: "Crunch the core",
      date: "12-2-2023",
    },
    {
      type: "image",
      src: Body4,
      caption: "Fitness is a lifestyle",
      date: "12-2-2023",
    },
  ];

  const videoMediaItems = [
    {
      key: 1,
      type: "video",
      src: Video3,
      caption: "Be fit",
      date: "12-2-2023",
    },
    {
      key: 2,
      type: "video",
      src: Video1,
      caption: "Be Long Lived",
      date: "12-2-2023",
    },
    {
      key: 3,
      type: "video",
      src: Video2,
      caption: "5 minutes goal",
      date: "12-2-2023",
    },
    {
      key: 4,
      type: "video",
      src: Video4,
      caption: "Do this every day",
      date: "12-2-2023",
    },
  ];

  const [selectedMediaType, setSelectedMediaType] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (mediaType) => {
    setSelectedMediaType(mediaType);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

    // <div className="profile-main">
    //   <div className="profile-header">
    //     <div>
    //       <img
    //       className="profile-logo"
    //         src={BviveLogo}
    //         alt="Header Logo"

    //       ></img>
    //     </div>
    //     <div>
    //       <SearchBar></SearchBar>
    //       <Link to="/SignIn">
    //         <button className="login-button">LOG IN</button>
    //       </Link>
    //       <Link to="/SignUpPage">
    //         <button
    //           className="login-button"
    //           style={{ background: "lightblue" }}
    //         >
    //           SIGN UP
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    <div className="profile-main">
      {/* Header Section */}
      <header className="profile-header">
        <div>
          <img className="profile-logo" src={BviveLogo} alt="Header Logo"></img>
        </div>
        <SearchBar />
        {/* Hamburger Menu for Small Screens */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          {/* Implement your hamburger menu here */}
          <button className="menu-button">&#9776;</button>
        </div>

        <div
          className="menu-links"
          style={{ display: mobileMenuOpen ? "flex" : "" }}
        >
          <Link to="/SignIn">
            <button className="login-button">LOG IN</button>
          </Link>
          <Link to="/SignUpPage">
            <button
              className="login-button"
              style={{ background: "lightblue" }}
            >
              SIGN UP
            </button>
          </Link>
        </div>
      </header>

      <div
        className="profile-second-main"
        src="Fit1"
        style={
          {
            //  /backgroundImage: url("../assets/fit1.jpeg")
          }
        }
      >
        <div
          className="profile-second-box"
          // style={{ background: 'orange' }}
          // draggable
          // onDragStart={(e) => handleOnDrag(e, 'profile box', 'orange')}
        >
          <div className="profile-card-main">
            <div className="creditscore-box-blue">
              <CreditScoreIcon className="icon-button-creditscore-blue" />
            </div>

            {/* Yellow CreditScoreIcon */}
            <div className="creditscore-box-yellow">
              <CreditScoreIcon className="icon-button-creditscore-yellow" />
            </div>
            {/* <div className="ribbon-box-red">
            </div>
            <div className="ribbon-box-blue">
            </div> */}
            <div className="profile-card-top">
              <div className="profile-card-top-left">
                <CircularImagePicker
                  images={images}
                  onImageChange={handleImageChange}
                  // onClick = {handleProfilePicClick}
                />
                {/* {introVideo} */}
              </div>
              <div className="profile-card-top-right">
                <div className="profile-tag">Personal Trainer</div>
                <div className="profile-name">
                  <h2 style={{ marginBottom: "4px", marginTop: "0px" }}>
                    James Osborn
                  </h2>
                  <VerifiedIcon className="verified-icon"></VerifiedIcon>
                  <VerifiedIcon
                    className="verified-icon"
                    style={{ color: "gold" }}
                  ></VerifiedIcon>
                </div>
                <p
                  style={{
                    fontStyle: "italic",
                    marginBottom: "4px",
                    marginTop: "0px",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  @jamesosborn
                </p>

                <div>Male, 27</div>
                <div>Cowandilla, Adelaide </div>
                {/* <div style={{ fontSize: "30px" }}>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={onStarClick}
                  />
                </div> */}
              </div>
            </div>
            <div
              className="star-main"
              // style={{ height: "10px" }}
              // style={{ fontSize: "30px",width:'100%', justifyContent:'flex-start' }}
            >
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                onStarClick={onStarClick}
              />
              <div className="starText">{rating}/5</div>
              <a
                href="https://www.fitnesscartel.com.au/"
                target="_blank"
                style={{
                  color: "lightblue",
                  textDecoration: "none",
                  marginLeft: "auto",
                  marginTop: "-15px",
                }}
              >
                <img
                  src={FitLogo}
                  alt="Fitness Cartel"
                  style={{
                    maxWidth: "150px",
                  }}
                ></img>
              </a>
            </div>
            <div className="follow-card">
              <div className="sessions">
                <div className="sessions1">25</div>
                <div
                  className="sessions1"
                  style={{
                    fontWeight: "normal",
                    color: "lightgray",
                    fontSize: "14px",
                  }}
                >
                  Sessions
                </div>
              </div>
              <div className="sessions">
                <div className="sessions1">600</div>
                <div
                  className="sessions1"
                  style={{
                    fontWeight: "normal",
                    color: "lightgray",
                    fontSize: "14px",
                  }}
                >
                  Hive
                </div>
              </div>
              <div className="sessions">
                <div className="sessions1">500</div>
                <div
                  className="sessions1"
                  style={{
                    fontWeight: "normal",
                    color: "lightgray",
                    fontSize: "14px",
                  }}
                >
                  Bees
                </div>
              </div>
            </div>
            <div className="profile-card-bottom">
              <div className="profile-card-bottom-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis illum quis reprehenderit velit possimus eaque Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Facilis
                illum quis reprehenderit velit possimus eaque
              </div>
              <div className="profile-card-bottom-button">
                <button className="transparent-button">Book Now</button>
                <button className="transparent-button">View Schedule</button>
                <button className="transparent-button">Contact Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="certificate-main">
        <h1>My Certifications</h1>
        <div className="under-line" style={{ backgroundColor: "black" }}></div>
        <TextCarousel items={textItems} itemsPerView={4} />
      </div>
      <div className="profile-social-main">
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, "social 1", "blue")}
        >
          <InstagramIcon />
        </div>
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, "social 2", "blue")}
        >
          <FacebookIcon />
        </div>
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, "social 3", "blue")}
        >
          <LinkedInIcon />
        </div>
        {/* <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, "social 4", "blue")}
        >
          <TwitterIcon />
        </div> */}
      </div>
      <div className="profile-aboutme-main-1" style={{ background: "#3b3b3b" }}>
        <MySpecializations></MySpecializations>
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
        <div className="under-line" style={{ backgroundColor: "white" }}></div>
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
      <div className="profile-aboutme-main">
        <div
          className="profile-aboutme-left-box"
          style={{ background: "#e64588" }}
        >
          <h2
            style={{
              fontSize: "34px",
              color: "white",
              marginLeft: "60px",
              fontWeight: "500",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            Media
          </h2>
          <div
            className="under-line"
          ></div>
          <div className="list-container" style={{ overflow: "hidden" }}>
            <ul className="list" style={{ color: "white" }}>
              {["Posts", "Blogs", "Photos", "Videos"].map((title, index) => (
                <li
                  className="list-items"
                  key={index}
                  onClick={() => openPopup(title.toLowerCase())}
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="profile-aboutme-main-2" style={{ display: "flex" }}>
          {/* <div className="profile-aboutme-right-box" style={{ display: "flex" }}> */}

          {/* First Part */}
          <MyContent
            title="Posts"
            mediaItems={textMediaItems}
            onViewAll={() => openPopup("posts")}
          />
          <MyContent
            title="Blogs"
            mediaItems={blogMediaItems}
            onViewAll={() => openPopup("blogs")}
          />
          <MyContent
            title="Photos"
            mediaItems={photoMediaItems}
            onViewAll={() => openPopup("photos")}
          />
          <MyContent
            title="Videos"
            mediaItems={videoMediaItems}
            onViewAll={() => openPopup("videos")}
          />
        </div>
      </div>
      {isPopupOpen && (
        <MediaPopup
          mediaItems={
            selectedMediaType === "posts"
              ? textMediaItems
              : selectedMediaType === "blogs"
              ? blogMediaItems
              : selectedMediaType === "photos"
              ? photoMediaItems
              : selectedMediaType === "videos"
              ? videoMediaItems
              : []
          }
          type={
            selectedMediaType.charAt(0).toUpperCase() +
            selectedMediaType.substring(1)
          }
          onClose={closePopup}
        />
      )}

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

      {/* <div className="profile-aboutme-main">
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
          <div className="under-line" style={{ backgroundColor: "black" }}></div>
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
      </div> */}

     
          <PictureTestimonials></PictureTestimonials>
          {/* <PictureTestimonials
            title={"Clara"}
            content={"Quick delivery and great prices"}
            image={Yoga}
          ></PictureTestimonials>
          <PictureTestimonials
            title={"Rob"}
            content={"Genuine products, loved it"}
            image={Boxing}
          ></PictureTestimonials>
          <PictureTestimonials
            title={"Madie"}
            content={"Highly recommend it"}
            image={Stretching}
          ></PictureTestimonials> */}
          {/* <Testimonials></Testimonials> */}
        {/* </div> */}
      {/* </div> */}
      <Footer></Footer>
      {/* <SignUpPage></SignUpPage> */}
    </div>
  );
};

export default Profile;
