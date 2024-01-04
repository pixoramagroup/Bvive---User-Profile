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
        <h3>What Our Client Says</h3>
      <img className="circle" src= {image}></img>
      <div className='title'>
      <h4>{title}</h4>
      </div>
      </div>
      <div style={{ fontSize: "30px",justifyContent:'center', display:'flex', width:'100%' }}>
      <StarRatingComponent
                    name="rate1"
                    starCount={5}
                   value={rating}
                 //  onStarClick={onStarClick}
                  />
                        {/* <div className="starText_1">{rating}/5</div> */}
                  </div>
      <p>{content}</p>
    </div>
  );
}

export default PictureTestimonials;
