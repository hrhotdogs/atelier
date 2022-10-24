import React, { useState } from 'react';
const RadioQualityButtons = ({ setSelectedQualityRating }) => {
  const [radioQuality, setRadioQuality] = useState('');
  return (
    <div>
      &nbsp; Quality:
      <input
        type='radio'
        name='quality'
        onClick={() => {
          setRadioQuality('Poor');
          setSelectedQualityRating(1);
        }}
      ></input>
      <input
        type='radio'
        name='quality'
        onClick={() => {
          setRadioQuality('Below average');
          setSelectedQualityRating(2);
        }}
      ></input>
      <input
        type='radio'
        name='quality'
        onClick={() => {
          setRadioQuality('What I expected');
          setSelectedQualityRating(3);
        }}
      ></input>
      <input
        type='radio'
        name='quality'
        onClick={() => {
          setRadioQuality('Pretty great');
          setSelectedQualityRating(4);
        }}
      ></input>
      <input
        type='radio'
        name='quality'
        onClick={() => {
          setRadioQuality('Perfect');
          setSelectedQualityRating(5);
        }}
      ></input>
      &nbsp; {!radioQuality.length ? 'none selected' : radioQuality}
    </div>
  );
};
export default RadioQualityButtons;
