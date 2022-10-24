import React, { useState } from 'react';

const RadioStarRating = ({ setSelectedStarRating }) => {
  const [radioStar, setRadioStar] = useState('');
  return (
    <div>
      Rating:{' '}
      <input
        type='radio'
        name='star'
        onClick={() => {
          setSelectedStarRating(1);
          setRadioStar('Poor');
        }}
      ></input>
      <input
        type='radio'
        name='star'
        onClick={() => {
          setSelectedStarRating(2);
          setRadioStar('Fair');
        }}
      ></input>
      <input
        type='radio'
        name='star'
        onClick={() => {
          setSelectedStarRating(3);
          setRadioStar('Average');
        }}
      ></input>
      <input
        type='radio'
        name='star'
        onClick={() => {
          setSelectedStarRating(4);
          setRadioStar('Good');
        }}
      ></input>
      <input
        type='radio'
        name='star'
        onClick={() => {
          setSelectedStarRating(5);
          setRadioStar('Great');
        }}
      ></input>
      &nbsp;
      {!radioStar.length ? null : radioStar}
    </div>
  );
};

export default RadioStarRating;
