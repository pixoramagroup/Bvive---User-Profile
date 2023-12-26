import React from 'react';
import TextCarousel from './TextCarousel';
import './Testimonials.scss';

const Testimonials = () => {
  const testimonialItems = [
    {
      heading: 'MARY',
      subHeading: 'I Really like the exercises and whole community support',
      institute: 'NDIS',
    },
    {
      heading: 'JAMES',
      subHeading: 'I Really like the exercises and whole community support',
      institute: 'NDIS',
    },
    {
        heading: 'JOHN',
        subHeading: 'I Really like the exercises and whole community support',
        institute: 'NDIS',
      },
      {
        heading: 'JANE',
        subHeading: 'I Really like the exercises and whole community support',
        institute: 'Institute 2',
      },
      {
        heading: 'SMITH',
        subHeading: 'I Really like the exercises and whole community support',
        institute: 'Institute 2',
      },
    // Add more testimonial items as needed
  ];

  // Customize the number of items per view if necessary
  const itemsPerView = 3;

  return (
    <TextCarousel items={testimonialItems} itemsPerView={itemsPerView} />
  );
};

export default Testimonials;
