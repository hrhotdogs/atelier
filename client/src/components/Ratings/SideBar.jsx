import React, { useState } from 'react';
import StarRating from './StarRating.jsx';
import ProgressBar from './ProgressBar.jsx';
const SideBar = ({ metaData, listOfReviews }) => {
  return (
    <>
      <div>
        <StarRating metaData={metaData} listOfReviews={listOfReviews} />
      </div>
      <div>
        <ProgressBar metaData={metaData} />
      </div>
    </>
  );
};

export default SideBar;
