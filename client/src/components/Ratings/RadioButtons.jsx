import React, { useState } from 'react';
import RadioComfortButtons from './RadioComfortButtons.jsx';
import RadioFitButtons from './RadioFitButtons.jsx';
import RadioLengthButtons from './RadioLengthButtons.jsx';
import RadioQualityButtons from './RadioQualityButtons.jsx';
import RadioSizeButtons from './RadioSizeButtons.jsx';
import RadioWidthButtons from './RadioWidthButtons.jsx';

const RadioButtons = ({
  setSelectedSizeRating,
  setSelectedComfortRating,
  setSelectedFitRating,
  setSelectedLengthRating,
  setSelectedWidthRating,
  setSelectedQualityRating,
}) => {
  return (
    <div className='radio-selectors'>
      <RadioSizeButtons setSelectedSizeRating={setSelectedSizeRating} />
      <br></br>
      <RadioLengthButtons setSelectedLengthRating={setSelectedLengthRating} />
      <br></br>
      <RadioWidthButtons setSelectedWidthRating={setSelectedWidthRating} />
      <br></br>
      <RadioFitButtons setSelectedFitRating={setSelectedFitRating} />
      <br></br>
      <RadioComfortButtons
        setSelectedComfortRating={setSelectedComfortRating}
      />
      <br></br>
      <RadioQualityButtons
        setSelectedQualityRating={setSelectedQualityRating}
      />
    </div>
  );
};

export default RadioButtons;
