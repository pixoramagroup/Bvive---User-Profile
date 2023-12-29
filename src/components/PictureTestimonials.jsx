import React from 'react';
import { useState } from "react";

import './PictureTestimonials.scss'; // Importing the CSS file for styling
import StarRatingComponent from 'react-star-rating-component';
//import Image from "../assets/boxing.jpg";
function PictureTestimonials({ title, content, image }) {
    const [rating, setRating] = useState(5);
    const onStarClick = (nextValue) => {
        setRating(nextValue);
      };
  return (
    <div className="card">
      <div className='upper-main'>
      <img className="circle" src= {image}></img>
      <div className='title'>
      <h3>{title}</h3>
      </div>
      </div>
      <div style={{ fontSize: "30px",justifyContent:'flex-start', display:'flex', width:'100%' }}>
      <StarRatingComponent
                    name="rate1"
                    starCount={5}
                   value={rating}
                 //  onStarClick={onStarClick}
                  />
                        <div className="starText">{rating}/5</div>
                  </div>
      <p>{content}</p>
    </div>
  );
}

export default PictureTestimonials;
