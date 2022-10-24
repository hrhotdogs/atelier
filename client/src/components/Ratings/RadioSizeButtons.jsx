import React, { useState } from 'react';

const RadioSizeButtons = ({ setSelectedSizeRating }) => {
  const [radioSize, setRadioSize] = useState('');

  return (
    <div>
      &nbsp; Size:
      <input
        type='radio'
        name='size'
        onClick={() => {
          setRadioSize('A size too small');
          setSelectedSizeRating(1);
        }}
      ></input>
      <input
        type='radio'
        name='size'
        onClick={() => {
          setRadioSize('Half size too small');
          setSelectedSizeRating(2);
        }}
      ></input>
      <input
        type='radio'
        name='size'
        onClick={() => {
          setRadioSize('Perfect');
          setSelectedSizeRating(3);
        }}
      ></input>
      <input
        type='radio'
        name='size'
        onClick={() => {
          setRadioSize('Half size too big');
          setSelectedSizeRating(4);
        }}
      ></input>
      <input
        type='radio'
        name='size'
        onClick={() => {
          setRadioSize('A size too wide');
          setSelectedSizeRating(5);
        }}
      ></input>
      &nbsp; {!radioSize.length ? 'none selected' : radioSize}
    </div>
  );
};
export default RadioSizeButtons;
