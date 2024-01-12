import React, { useState } from 'react';
import './PictureTestimonials.scss';
import StarRatingComponent from 'react-star-rating-component';
import Yoga from "../assets/yoga_1.jpg";
import Stretching from "../assets/stretching_1.jpg";
import Boxing from "../assets/boxing.jpg";

const testimonialsData = [
  { title: "Clara", content: "Quick delivery and great prices", image: Yoga },
  { title: "Rob", content: "Genuine products, loved it", image: Boxing },
  { title: "Madie", content: "Highly recommend it", image: Stretching },
];

function IndividualTestimonial({ title, content, image, rating, onStarClick }) {
  return (
    <div className="card">
      <div className='upper-main'>
        <h3>What Our Client Says</h3>
        <img className="circle" src={image} alt={title} />
        <div className='title'>
          <h4>{title}</h4>
        </div>
      </div>
      <div style={{ fontSize: "30px", justifyContent: 'center', display: 'flex', width: '100%' }}>
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

  return (
    <div className="testimonial-container">
      <div className="testimonials-wrapper">
        <button onClick={prevTestimonial} className="prev-button">
          &lt;
        </button>
        <IndividualTestimonial
          title={testimonialsData[currentIndex].title}
          content={testimonialsData[currentIndex].content}
          image={testimonialsData[currentIndex].image}
          rating={5}
          onStarClick={() => {}}
        />
         <IndividualTestimonial
          title={testimonialsData[currentIndex +1].title}
          content={testimonialsData[currentIndex+1].content}
          image={testimonialsData[currentIndex+1].image}
          rating={5}
          onStarClick={() => {}}
        />
         <IndividualTestimonial
          title={testimonialsData[currentIndex +2].title}
          content={testimonialsData[currentIndex+2].content}
          image={testimonialsData[currentIndex+2].image}
          rating={5}
          onStarClick={() => {}}
        />
       
        <button onClick={nextTestimonial} className="next-button">
          &gt;
        </button>
      </div>
      <div style={{textAlign:"center"}} >
      <button onClick={openModal}className="show-all-button">
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
  );
};

export default PictureTestimonials;

// import React from 'react';
// import { useState } from "react";

// import './PictureTestimonials.scss'; // Importing the CSS file for styling
// import StarRatingComponent from 'react-star-rating-component';
// //import Image from "../assets/boxing.jpg";
// function PictureTestimonials({ title, content, image }) {
//     const [rating, setRating] = useState(5);
//     const onStarClick = (nextValue) => {
//         setRating(nextValue);
//       };
//   return (
//     <div className="card">
//       <div className='upper-main'>
//         <h3>What Our Client Says</h3>
//       <img className="circle" src= {image}></img>
//       <div className='title'>
//       <h4>{title}</h4>
//       </div>
//       </div>
//       <div style={{ fontSize: "30px",justifyContent:'center', display:'flex', width:'100%' }}>
//       <StarRatingComponent
//                     name="rate1"
//                     starCount={5}
//                    value={rating}
//                   onStarClick={onStarClick}
//                   />
//                         {/* <div className="starText_1">{rating}/5</div> */}
//                   </div>
//       <p>{content}</p>
//     </div>
//   );
// }

// export default PictureTestimonials;