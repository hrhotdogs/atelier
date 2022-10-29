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
    'Size',
  ],
  width: [
    'Too narrow',
    'Slightly narrow',
    'Perfect',
    'Slightly Wide',
    'Too wide',
    'Width',
  ],
  _length: [
    'Runs Short',
    'Runs slightly short',
    'Perfect',
    'Runs slightly long',
    'Runs long',
    'Length',
  ],
  quality: [
    'Poor',
    'Below average',
    'What I expected',
    'Pretty great',
    'Perfect',
    'Quality',
  ],
  comfort: [
    'Uncomfortable',
    'Slightly uncomfortable',
    'Ok',
    'Comfortable',
    'Perfect',
    'Comfort',
  ],
  fit: [
    'Runs tight',
    'Runs slightly tight',
    'Perfect',
    'Runs slightly long',
    'Runs long',
    'Fit',
  ],
};
let inputZero;
let inputOne;
let inputTwo;
let inputThree;
let inputFour;

const RadioButtons = ({
  setSelectedSizeRating,
  setSelectedComfortRating,
  setSelectedFitRating,
  setSelectedLengthRating,
  setSelectedWidthRating,
  setSelectedQualityRating,
  metaData,
}) => {
  const [description, setDescription] = useState('');
  const results = [];
  if (metaData !== undefined) {
    for (let key in metaData.characteristics) {
      switch (key) {
        case words.size[5]:
          inputZero = words.size[0];
          break;
      }
    }
  }
  return <div></div>;
};

export default RadioButtons;
