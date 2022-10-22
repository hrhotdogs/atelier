import React, { useState } from 'react';
import StarRating from './StarRating.jsx';

const SideBar = ({ metaData, listOfReviews }) => {
  return (
    <div>
      <StarRating metaData={metaData} listOfReviews={listOfReviews} />
    </div>
  );
};

export default SideBar;
