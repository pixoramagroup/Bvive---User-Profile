import React, { useState, useEffect } from "react";
import "./PictureTestimonials.scss";
import StarRatingComponent from "react-star-rating-component";
import Yoga from "../assets/yoga_1.jpg";
import Stretching from "../assets/stretching_1.jpg";
import Boxing from "../assets/boxing.jpg";

const testimonialsData = [
  { title: "Clara", content: "Quick delivery ", image: Yoga },
  { title: "Rob", content: "Genuine products, loved it", image: Boxing },
  { title: "Madie", content: "Highly recommend it", image: Stretching },
  { title: "Sara", content: "Quick delivery ", image: Yoga },
  { title: "Mob", content: "Genuine products,loved it", image: Boxing },
  { title: "Manny", content: "Highly recommend it", image: Stretching },
];

function IndividualTestimonial({ title, content, image, rating, onStarClick }) {
  return (
    <div className="card">
      <div className="upper-main">
        <h3>What Our Client Says</h3>
        <img className="circle" src={image} alt={title} />
        <div className="title">
          <h4>{title}</h4>
        </div>
      </div>
      <div
        style={{
          fontSize: "30px",
          justifyContent: "center",
          display: "flex",
          width: "100%",
        }}
      >
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
      </div>
      <p>{content}</p>
    </div>
  );
}

const PictureTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(testimonialsData.length);
      } else {
        setCardsToShow(3);
      }
    };

    // Initial setup
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="profile-aboutme-main">
      <div
        className="profile-aboutme-left-box"
        style={{ background: "rgb(67 206 175)", position: "relative" }}
        draggable
        onDragStart={(e) => handleOnDrag(e, "contact me", "green")}
      >
        <h2 className="testimonial-heading">Testimonials</h2>
        <div className="testimonial-under-line"></div>
        <div className="rating-content">
          <h3
            style={{
              marginBottom: "10px",
              color: "white",
              marginLeft: "60px",
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
        <div className="testimonial-feedback-button">
          <button
            className="transparent-button"
            style={{
              color: "white",
              padding: "10px 20px",
              cursor: "pointer",
              alignContent: "flex-start",
              marginRight: "0px",
            }}
          >
            Leave Feedback
          </button>
        </div>

        {/* T-shaped div inside profile-aboutme-left-box */}
        <div
          className="t-shape"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) skewX(-10deg)",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="horizontal-bar"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "90%",
              height: "60px",
              backgroundColor: "#b8ebe0",
              opacity: "0.2",
            }}
          ></div>
          <div
            className="vertical-bar"
            style={{
              position: "absolute",
              top: "60px",
              left: "37%",
              width: "60px",
              height: "83%",
              backgroundColor: "#b8ebe0",
              opacity: "0.2",
            }}
          ></div>
        </div>
      </div>
      <div
        className="profile-aboutme-right-box"
        style={{
          background: "white",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* <div className="testimonial-container"> */}
        <div className="testimonial-container">
          <div className="testimonials-wrapper">
            <button onClick={prevTestimonial} className="prev-button">
              &lt;
            </button>
            {/* Show 1 or 2 cards based on the state */}
            {/* {[...Array(cardsToShow)].map((_, index) => (
              <IndividualTestimonial
                key={index}
                title={testimonialsData[currentIndex + index].title}
                content={testimonialsData[currentIndex + index].content}
                image={testimonialsData[currentIndex + index].image}
                rating={5}
                onStarClick={() => {}}
              />
            ))} */}
            {[...Array(cardsToShow)].map((_, index) => (
              <IndividualTestimonial
                key={index}
                title={testimonialsData[currentIndex + index].title}
                content={testimonialsData[currentIndex + index].content}
                image={testimonialsData[currentIndex + index].image}
                rating={5}
                onStarClick={() => {}}
              />
            ))}
            {/* <IndividualTestimonial
              title={testimonialsData[currentIndex].title}
              content={testimonialsData[currentIndex].content}
              image={testimonialsData[currentIndex].image}
              rating={5}
              onStarClick={() => {}}
            />
            {testimonialsData[currentIndex + 1] && (
              <IndividualTestimonial
                title={testimonialsData[currentIndex + 1].title}
                content={testimonialsData[currentIndex + 1].content}
                image={testimonialsData[currentIndex + 1].image}
                rating={5}
                onStarClick={() => {}}
              />
            )}
            {testimonialsData[currentIndex + 2] && (
              <IndividualTestimonial
                title={testimonialsData[currentIndex + 2].title}
                content={testimonialsData[currentIndex + 2].content}
                image={testimonialsData[currentIndex + 2].image}
                rating={5}
                onStarClick={() => {}}
              />
            )} */}

            <button onClick={nextTestimonial} className="next-button">
              &gt;
            </button>
          </div>
          <div
            className="All-Testimonials-button"
            style={{ textAlign: "center" }}
          >
            <button onClick={openModal} className="show-all-button">
              Show All Testimonials
            </button>
          </div>

          {isModalOpen && (
            <div className="modal-overlay-testimonial" onClick={closeModal}>
              <div className="modal-testimonial">
                <h2>Testimonials</h2>
                {testimonialsData.map((testimonial, index) => (
                  <IndividualTestimonial
                    key={index}
                    title={testimonial.title}
                    content={testimonial.content}
                    image={testimonial.image}
                    rating={5}
                    onStarClick={() => {}}
                  />
                ))}
                <button onClick={closeModal} className="close-button">
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PictureTestimonials;
