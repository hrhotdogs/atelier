import React, { useState } from 'react';
import StarRating from './StarRating.jsx';
import ProgressBar from './ProgressBar.jsx';
import RatingSlider from './RatingSlider.jsx';
const SideBar = ({ metaData, listOfReviews }) => {
  return (
    <div className='ratings-item side-bar'>
      <h1 className='ratings-title'> Ratings & Reviews</h1>
      <div className='side-bar-items'>
        <StarRating metaData={metaData} listOfReviews={listOfReviews} show={true}/>
      </div>
      <br></br>
      <div className='side-bar-items'>
        <ProgressBar metaData={metaData} />
      </div>
      <br></br>
      <div className='side-bar-items'>
        <RatingSlider metaData={metaData} />
      </div>
    </div>
  );
};

export default SideBar;
