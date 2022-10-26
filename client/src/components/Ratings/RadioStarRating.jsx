import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const RadioStarRating = ({ setSelectedStarRating, selectedStarRating }) => {
  const [radioStar, setRadioStar] = useState('');
  return (
    <div>
      Overall Rating: &nbsp;
      <StarRatings
        rating={selectedStarRating}
        starRatedColor='gold'
        changeRating={(e) => setSelectedStarRating(e)}
        numberOfStars={5}
        starDimension={'20px'}
        starSpacing={'3px'}
        starEmptyColor={'black'}
        starHoverColor={'gold'}
      />
    </div>
  );
};

export default RadioStarRating;
