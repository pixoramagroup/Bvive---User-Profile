import React from 'react';
import TextCarousel from './TextCarousel';
import './Testimonials.scss';

const Testimonials = () => {
  const testimonialItems = [
    {
      heading: 'Testimonial 1',
      subHeading: 'I Really like the exercises and whole community support',
      institute: 'Institute 1',
    },
    {
      heading: 'Testimonial 2',
      subHeading: 'I Really like the exercises and whole community support',
      institute: 'Institute 2',
    },
    {
        heading: 'Testimonial 3',
        subHeading: 'I Really like the exercises and whole community support',
        institute: 'Institute 2',
      },
      {
        heading: 'Testimonial 4',
        subHeading: 'I Really like the exercises and whole community support',
        institute: 'Institute 2',
      },
      {
        heading: 'Testimonial 5',
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
