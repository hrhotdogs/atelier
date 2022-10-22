import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = ({ metaData, listOfReviews }) => {
  const averageRating = listOfReviews.reduce(
    (review, next) => (review = review + next.rating / listOfReviews.length),
    0
  );

  if (metaData.recommended !== undefined) {
    var doesRec = metaData.recommended.true;
    var total =
      Number(metaData.recommended.true) + Number(metaData.recommended.false);
    var averageRec = (doesRec / total) * 100;
  }

  return (
    <>
      <div className='average-rating'>
        {averageRating}
        <StarRatings
          rating={averageRating}
          starRatedColor='gold'
          starDimension='60px'
        />
      </div>
      <div>
        {Math.round(averageRec * 10) / 10}% of reviews recommended this product!
      </div>
    </>
  );
};

export default StarRating;
