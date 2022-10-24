import React, { useState } from 'react';
const RadioLengthButtons = ({ setSelectedLengthRating }) => {
  const [radioLength, setRadioLength] = useState('');
  return (
    <div>
      &nbsp; Length:
      <input
        type='radio'
        name='length'
        onClick={() => {
          setRadioLength('Runs short');
          setSelectedLengthRating(1);
        }}
      ></input>
      <input
        type='radio'
        name='length'
        onClick={() => {
          setRadioLength('Runs slightly short');
          setSelectedLengthRating(2);
        }}
      ></input>
      <input
        type='radio'
        name='length'
        onClick={() => {
          setRadioLength('Perfect');
          setSelectedLengthRating(3);
        }}
      ></input>
      <input
        type='radio'
        name='length'
        onClick={() => {
          setRadioLength('Runs slightly long');
          setSelectedLengthRating(4);
        }}
      ></input>
      <input
        type='radio'
        name='length'
        onClick={() => {
          setRadioLength('Runs long');
          setSelectedLengthRating(5);
        }}
      ></input>
      &nbsp; {!radioLength.length ? 'none selected' : radioLength}
    </div>
  );
};
export default RadioLengthButtons;
