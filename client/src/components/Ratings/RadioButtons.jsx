import React, { useState } from 'react';
import RadioComfortButtons from './RadioComfortButtons.jsx';
import RadioFitButtons from './RadioFitButtons.jsx';
import RadioLengthButtons from './RadioLengthButtons.jsx';
import RadioQualityButtons from './RadioQualityButtons.jsx';
import RadioSizeButtons from './RadioSizeButtons.jsx';
import RadioWidthButtons from './RadioWidthButtons.jsx';
import { v4 as uuidv4 } from 'uuid';
const words = {
  size: [
    'A size too small',
    '½ a size too small',
    'Perfect',
    '½ a size too big',
    'A size too wide',
  ],
  width: [
    'Too narrow',
    'Slightly narrow',
    'Perfect',
    'Slightly Wide',
    'Too wide',
  ],
  length: [
    'Runs Short',
    'Runs slightly short',
    'Perfect',
    'Runs slightly long',
    'Runs long',
  ],
  quality: [
    'Poor',
    'Below average',
    'What I expected',
    'Pretty great',
    'Perfect',
  ],
  comfort: [
    'Uncomfortable',
    'Slightly uncomfortable',
    'Ok',
    'Comfortable',
    'Perfect',
  ],
  fit: ['', '', '', '', ''],
};

const RadioButtons = ({
  setSelectedSizeRating,
  setSelectedComfortRating,
  setSelectedFitRating,
  setSelectedLengthRating,
  setSelectedWidthRating,
  setSelectedQualityRating,
  metaData,
}) => {
  const results = [];
  if (metaData !== undefined) {
    for (let key in metaData.characteristics) {
      console.log(key);
      results.push(
        <div key={uuidv4()}>
          {key}
          <input type='radio' name='characteristic'></input>
          <input type='radio' name='characteristic'></input>
          <input type='radio' name='characteristic'></input>
          <input type='radio' name='characteristic'></input>
          <input type='radio' name='characteristic'></input>
        </div>
      );
    }
  }
  return results;
};

export default RadioButtons;
