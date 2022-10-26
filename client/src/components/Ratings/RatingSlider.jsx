import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const RatingSlider = ({ metaData }) => {
  let results = [];

  if (metaData.characteristics !== undefined) {
    var fit = Math.round(metaData.characteristics.Fit.value * 10) / 10;
    var comfort = Math.round(metaData.characteristics.Comfort.value * 10) / 10;
    console.log(comfort);
    // for (let key in metaData.characteristics) {
    //   let element = (
    //     <div key={uuidv4()}>
    //       {key}{' '}
    //       <input
    //         className='slider'
    //         type='range'
    //         max={5}
    //         value={metaData.characteristics[key].value}
    //         disabled
    //       ></input>
    //       <div className='comfortFit'>
    //         <div>Poor</div>
    //         <div>Perfect</div>
    //       </div>
    //     </div>
    //   );
    //   results.push(element);
    //}
  }

  return (
    <>
      <h3 className='ratings-title'>Fit:</h3>
      <div>
        <input
          className='slider'
          max={5}
          type='range'
          value={fit}
          disabled
        ></input>
      </div>
      <div className='fit-fit'>
        <div>Too Small</div>
        <div>Perfect</div>
        <div>Too Large</div>
      </div>
      <br></br>
      <h3 className='ratings-title'> Comfort:</h3>
      <div>
        <input
          className='slider'
          max={5}
          type='range'
          value={comfort}
          disabled
        ></input>
        <div className='comfort-fit'>
          <div>Poor</div>
          <div>Perfect</div>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default RatingSlider;
