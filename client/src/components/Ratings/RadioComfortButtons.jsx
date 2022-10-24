import React, { useState } from 'react';
const RadioComfortButtons = ({ setSelectedComfortRating }) => {
  const [radioComfort, setRadioComfort] = useState('');
  return (
    <div>
      &nbsp; Comfort:
      <input
        type='radio'
        name='comfort'
        onClick={() => {
          setRadioComfort('Uncomfortable');
          setSelectedComfortRating(1);
        }}
      ></input>
      <input
        type='radio'
        name='comfort'
        onClick={() => {
          setRadioComfort('Slightly uncomfortable');
          setSelectedComfortRating(2);
        }}
      ></input>
      <input
        type='radio'
        name='comfort'
        onClick={() => {
          setRadioComfort('Ok');
          setSelectedComfortRating(3);
        }}
      ></input>
      <input
        type='radio'
        name='comfort'
        onClick={() => {
          setRadioComfort('Comfortable');
          setSelectedComfortRating(4);
        }}
      ></input>
      <input
        type='radio'
        name='comfort'
        onClick={() => {
          setRadioComfort('Perfect');
          setSelectedComfortRating(5);
        }}
      ></input>
      &nbsp; {!radioComfort.length ? 'none selected' : radioComfort}
    </div>
  );
};
export default RadioComfortButtons;
