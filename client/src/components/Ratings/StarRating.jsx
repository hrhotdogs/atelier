import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = ({ metaData, listOfReviews }) => {
  const averageRating = listOfReviews.reduce(
    (review, next) => (review = review + next.rating / listOfReviews.length),
    0
  );

  return (
    <>
      <div>
        <StarRatings rating={averageRating} starRatedColor='gold' />
      </div>
    </>
  );
};

export default StarRating;
