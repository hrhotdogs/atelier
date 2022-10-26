import React, { useState } from 'react';
import StarRating from './StarRating.jsx';
import ProgressBar from './ProgressBar.jsx';
import RatingSlider from './RatingSlider.jsx';
const SideBar = ({ metaData, listOfReviews }) => {
  return (
    <>
      <div>
        <h1 className='ratings-title'> Ratings & Reviews</h1>
        <StarRating metaData={metaData} listOfReviews={listOfReviews} />
      </div>
      <br></br>
      <div>
        <ProgressBar metaData={metaData} />
      </div>
      <br></br>
      <div>
        <RatingSlider metaData={metaData} />
      </div>
    </>
  );
};

export default SideBar;
