import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const RadioStarRating = ({ setSelectedStarRating, selectedStarRating }) => {
  return (
    <div>
      Overall Rating: &nbsp;
      <StarRatings
        rating={selectedStarRating}
        starRatedColor='#6AA4B0'
        changeRating={(e) => setSelectedStarRating(e)}
        numberOfStars={5}
        starDimension={'20px'}
        starSpacing={'3px'}
        starEmptyColor={'black'}
        starHoverColor={'#6AA4B0'}
      />
    </div>
  );
};

export default RadioStarRating;
