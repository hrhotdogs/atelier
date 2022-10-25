import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const RadioStarRating = ({ setSelectedStarRating, selectedStarRating }) => {
  const [radioStar, setRadioStar] = useState('');
  return (
    <div>
      Overall Rating: &nbsp;
      <StarRatings
        rating={selectedStarRating}
        starRatedColor='blue'
        changeRating={(e) => setSelectedStarRating(e)}
        numberOfStars={5}
        starDimension={'20px'}
        starSpacing={'3px'}
        starEmptyColor={'black'}
        starHoverColor={'blue'}
      />
    </div>
  );
};

export default RadioStarRating;
