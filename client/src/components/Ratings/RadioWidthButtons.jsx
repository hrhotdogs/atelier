import React, { useState } from 'react';
const RadioWidthButtons = ({ setSelectedWidthRating }) => {
  const [radioWidth, setRadioWidth] = useState('');
  return (
    <div>
      &nbsp; Width:
      <input
        type='radio'
        name='width'
        onClick={() => {
          setRadioWidth('Too narrow');
          setSelectedWidthRating(1);
        }}
      ></input>
      <input
        type='radio'
        name='width'
        onClick={() => {
          setRadioWidth('Slightly narrow');
          setSelectedWidthRating(2);
        }}
      ></input>
      <input
        type='radio'
        name='width'
        onClick={() => {
          setRadioWidth('Perfect');
          setSelectedWidthRating(3);
        }}
      ></input>
      <input
        type='radio'
        name='width'
        onClick={() => {
          setRadioWidth('Slightly wide');
          setSelectedWidthRating(4);
        }}
      ></input>
      <input
        type='radio'
        name='width'
        onClick={() => {
          setRadioWidth('Too wide');
          setSelectedWidthRating(5);
        }}
      ></input>
      &nbsp; {!radioWidth.length ? 'none selected' : radioWidth}
    </div>
  );
};
export default RadioWidthButtons;
