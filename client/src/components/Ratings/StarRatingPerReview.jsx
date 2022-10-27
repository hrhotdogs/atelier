import React from 'react';
import StarRatings from 'react-star-ratings';

const StarRatingPerReview = ({ review, listOfReviews }) => {
  const averageRating = listOfReviews.reduce(
    (review, next) => (review = review + next.rating / listOfReviews.length),
    0
  );

  return (
    <div className='star'>
      <StarRatings
        rating={review.rating}
        starRatedColor='#6AA4B0'
        starDimension='20px'
        starEmptyColor='black'
        starSpacing='1px'
      />
    </div>
  );
};
export default StarRatingPerReview;
