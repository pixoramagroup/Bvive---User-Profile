// Profile.js
// import React from 'react';
import { useState } from 'react';
//import classes from './Profile.module.scss'; // Assume CSS modules are set up
import './Profile.scss';
import CircularImagePicker from './CircularImagePicker';
import StarRatingComponent from 'react-star-rating-component';

const Profile = () => {
  // const images = [
  //   '',
  //   // 'url-to-image1.jpg',
  //   // 'url-to-image2.jpg',
  //   // Add more image URLs
  // ];
  const [boxes, setBoxes] = useState([]);
  const [images, setImages] = useState(['']);
  //const [rating, setRating] = useState({ rating: 2 });
  const [rating, setRating] = useState(5);
  const handleImageChange = (newImage) => {
    setImages([newImage]);
  };
  function handleOnDrag(e, boxType, color) {
    e.dataTransfer.setData('boxType', boxType);
    e.dataTransfer.setData('color', color);
  }

  function handleOnDrop(e) {
    const boxType = e.dataTransfer.getData('boxType');
    const color = e.dataTransfer.getData('color');
    setBoxes([...boxes, { boxType, color }]);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }
  const onStarClick = (nextValue) => {
    setRating(nextValue);
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

    <div className="profile-main">
      <div className="profile-header">
        <div>Header Logo</div>

        <div>Login Button</div>
      </div>
      <div className="profile-second-main">
        <div
          className="profile-second-box"
          style={{ background: 'orange' }}
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
                <div style={{ fontSize: '30px' }}>
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
      <div className="profile-social-main">
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, 'social 1', 'blue')}
        >
          Social 1
        </div>
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, 'social 2', 'blue')}
        >
          Social 2
        </div>
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, 'social 3', 'blue')}
        >
          Social 3
        </div>
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, 'social 4', 'blue')}
        >
          Social 4
        </div>
      </div>
      <div
        className="profile-aboutme-main-1"
        style={{ background: 'red', height: '60vh' }}
      >
        <h2>My Specialization</h2>
        <div class="profile-cards-container">
          <div class="profile-cards">
              <h2>Yoga</h2>
          </div>
          <div class="profile-cards">
              <h2>Nutrition</h2>
          </div>
          <div class="profile-cards">
              <h2>SUP</h2>
          </div>
          <div class="profile-cards">
              <h2>Stretching</h2>
          </div>
        </div>
      </div>
      {/* <div
        className="profile-aboutme-main"
        style={{ background: 'yellow   ', height: '20vh' }}
      >
        <h2>My Certification</h2>
      </div> */}
      <div className="profile-aboutme-main">
        <div
          className="profile-aboutme-left-box"
          draggable
          onDragStart={(e) => handleOnDrag(e, 'about me', 'turquoise')}
        >
          <h2>About me</h2>
        </div>
        <div
          className="profile-aboutme-right-box"
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          style={{ background: 'white' }}
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
          style={{ background: 'green' }}
          draggable
          onDragStart={(e) => handleOnDrag(e, 'contact me', 'green')}
        >
          <h2>Contact me</h2>
        </div>
        <div
          className="profile-aboutme-right-box"
          style={{ background: 'grey' }}
        ></div>
      </div>

      
    </div>
  );
};

export default Profile;
