import React from 'react';

const StarRatingPerReview = ({ review }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < review.rating) {
      stars.push(
        <i key={i} className='star fa fa-star' style={{ color: '#6AA4B0' }}></i>
      );
    } else {
      stars.push(<i key={i} className='star fa-regular fa-star'></i>);
    }
  }
  return stars;
};
export default StarRatingPerReview;
