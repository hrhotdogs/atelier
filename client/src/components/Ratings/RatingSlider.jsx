import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const words = {
  size: ['A size too small', 'Perfect', 'Too Large', 'Size'],
  width: ['Too narrow', 'Perfect', 'Too Wide', 'Width'],
  comfort: ['Uncomfortable', 'OK', 'Perfect', 'Comfort'],
  quality: ['Poor', 'Expected Quality', 'Perfect', 'Quality'],
  length: ['Runs Short', 'Perfect', 'Too long', 'Length'],
  fit: ['Too tight', 'Perfect', 'Too Long', 'Fit'],
};

const cases = {
  size: 'Size',
  width: 'Width',
  comfort: 'Comfort',
  quality: 'Quality',
  _length: 'Length',
  fit: 'Fit',
};

let title;
let divOne;
let divTwo;
let divThree;
let value = 0;

const RatingSlider = ({ metaData }) => {
  var results = [];
  if (metaData.characteristics !== undefined) {
    for (let key in metaData.characteristics) {
      switch (key) {
        case cases.size:
          title = words.size[3];
          divOne = words.size[0];
          divTwo = words.size[1];
          divThree = words.size[2];
          value = Math.round(metaData.characteristics.Size.value * 10) / 10;
          break;
        case cases.width:
          title = words.width[3];
          divOne = words.width[0];
          divTwo = words.width[1];
          divThree = words.width[2];
          value = Math.round(metaData.characteristics.Width.value * 10) / 10;
          break;
        case cases.comfort:
          title = words.comfort[3];
          divOne = words.comfort[0];
          divTwo = words.comfort[1];
          divThree = words.comfort[2];
          value = Math.round(metaData.characteristics.Comfort.value * 10) / 10;
          break;
        case cases.quality:
          title = words.quality[3];
          divOne = words.quality[0];
          divTwo = words.quality[1];
          divThree = words.quality[2];
          value = Math.round(metaData.characteristics.Quality.value * 10) / 10;
          break;
        case cases._length:
          title = words.length[3];
          divOne = words.length[0];
          divTwo = words.length[1];
          divThree = words.length[2];
          value = Math.round(metaData.characteristics.Length.value * 10) / 10;
          break;
        case cases.fit:
          title = words.fit[3];
          divOne = words.fit[0];
          divTwo = words.fit[1];
          divThree = words.fit[2];
          value = Math.round(metaData.characteristics.Fit.value * 10) / 10;
          break;
        default:
      }
      results.push(
        <div className='slider-container' key={key}>
          <div className='ratings-title'>{title}:</div>
          <div>
            <input
              className='slider'
              max={5}
              type='range'
              value={value}
              disabled
            ></input>
          </div>
          <div className='slider-fit'>
            <div>{divOne}</div>
            <div>{divTwo}</div>
            <div>{divThree}</div>
          </div>
          <br></br>
        </div>
      );
    }
  }

  return results;
};

export default RatingSlider;
