import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const RatingSlider = ({ metaData }) => {
  let results = [];

  if (metaData.characteristics !== undefined) {
    for (let key in metaData.characteristics) {
      let element = (
        <div key={uuidv4()}>
          <input
            type='range'
            max={5}
            value={metaData.characteristics[key].value}
            disabled
          ></input>
        </div>
      );
      results.push(element);
    }
  }

  return results;
};

export default RatingSlider;
