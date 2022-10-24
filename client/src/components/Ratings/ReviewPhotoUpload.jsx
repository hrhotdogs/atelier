import React, { useState } from 'react';

const ReviewPhotoUpload = ({ setPhotos }) => {
  function openWidget(e) {
    e.preventDefault();
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dilauvyvc',
        uploadPreset: 'ug5qigjg',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
          setPhotos((prev) => [...prev, result.info.url]);
        }
      }
    );
    myWidget.open();
  }
  return (
    <div>
      <button
        id='upload-widget'
        className='cloudinary-button input'
        onClick={(e) => openWidget(e)}
      >
        {' '}
        Add Photos{' '}
      </button>
      <br />
    </div>
  );
};

export default ReviewPhotoUpload;
