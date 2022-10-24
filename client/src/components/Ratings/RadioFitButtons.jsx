import React, { useState } from 'react';
const RadioFitButtons = ({ setSelectedFitRating }) => {
  const [radioFit, setRadioFit] = useState('');
  return (
    <div>
      &nbsp; Fit:
      <input
        type='radio'
        name='fit'
        onClick={() => {
          setRadioFit('Runs tight');
          setSelectedFitRating(1);
        }}
      ></input>
      <input
        type='radio'
        name='fit'
        onClick={() => {
          setRadioFit('Runs slightly tight');
          setSelectedFitRating(2);
        }}
      ></input>
      <input
        type='radio'
        name='fit'
        onClick={() => {
          setRadioFit('Perfect');
          setSelectedFitRating(3);
        }}
      ></input>
      <input
        type='radio'
        name='fit'
        onClick={() => {
          setRadioFit('Runs slightly long');
          setSelectedFitRating(4);
        }}
      ></input>
      <input
        type='radio'
        name='fit'
        onClick={() => {
          setRadioFit('Runs long');
          setSelectedFitRating(5);
        }}
      ></input>
      &nbsp; {!radioFit.length ? 'none selected' : radioFit}
    </div>
  );
};
export default RadioFitButtons;
