import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = ({ metaData, listOfReviews, show }) => {
  const averageRating = listOfReviews.reduce(
    (review, next) => (review = review + next.rating / listOfReviews.length),
    0
  );

  const showTextAverage = () => {
    if (show) {
      return (
        <div>{Math.round(averageRating * 10) / 10}{' '}</div>
      )
    }
  }

  const showRecommendedPercentage = () => {
    if (show) {
      return (
        <div>{Math.round(averageRec * 10) / 10}% of reviews recommended this product!</div>
      )
    }
  }

  if (metaData.recommended !== undefined) {
    var doesRec = metaData.recommended.true;
    var total =
      Number(metaData.recommended.true) + Number(metaData.recommended.false);
    var averageRec = (doesRec / total) * 100;
  }

  return (
    <>
      <div className='average-rating'>
        {showTextAverage()}
        <StarRatings
          rating={averageRating}
          starRatedColor='#6AA4B0'
          starDimension='40px'
          starEmptyColor='#E1E7E0'
        />
      </div>
      <div>
        {showRecommendedPercentage()}
      </div>
    </>
  );
};

export default StarRating;
