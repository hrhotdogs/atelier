import React from 'react';

const ReviewPhotos = ({ photo }) => {
  return (
    <a href={photo.url}>
      <img className='review-thumbnail' src={photo.url} />
    </a>
  );
};
export default ReviewPhotos;
