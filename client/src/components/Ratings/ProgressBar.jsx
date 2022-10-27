import React from 'react';
const ProgressBar = ({ metaData, currentProductID }) => {
  if (metaData.ratings !== undefined) {
    var totalFiveStars = Object.values(metaData.ratings)[4];
    var totalFourStars = Object.values(metaData.ratings)[3];
    var totalThreeStars = Object.values(metaData.ratings)[2];
    var totalTwoStars = Object.values(metaData.ratings)[1];
    var totalOneStar = Object.values(metaData.ratings)[0];
    var totalStarRatings = 0;
    for (let key in metaData.ratings) {
      totalStarRatings += Number(metaData.ratings[key]);
    }
  }

  const percentOfFiveStar = (totalFiveStars / totalStarRatings) * 100;
  const percentOfFourStar = (totalFourStars / totalStarRatings) * 100;
  const percentOfThreeStar = (totalThreeStars / totalStarRatings) * 100;
  const percentOfTwoStar = (totalTwoStars / totalStarRatings) * 100;
  const percentOfOneStar = (totalOneStar / totalStarRatings) * 100;

  return (
    <div className='progress-container'>
      <div id='progress-bar-title'>*(PERCENTAGE OF RATINGS PER STAR)</div>
      <br></br>
      <div className='star-rate-count'>(5)</div>
      <div className='parent-div'>
        <div style={{ width: `${percentOfFiveStar}%` }} className='child-div'>
          <span className='progress-text'>
            {`${Math.round(percentOfFiveStar * 10) / 10}%`}
          </span>
        </div>
      </div>
      <div className='star-rate-count'>(4)</div>
      <div className='parent-div'>
        <div style={{ width: `${percentOfFourStar}%` }} className='child-div'>
          <span className='progress-text'>{`${
            Math.round(percentOfFourStar * 10) / 10
          }%`}</span>
        </div>
      </div>
      <div className='star-rate-count'>(3)</div>
      <div className='parent-div'>
        <div style={{ width: `${percentOfThreeStar}%` }} className='child-div'>
          <span className='progress-text'>{`${
            Math.round(percentOfThreeStar * 10) / 10
          }%`}</span>
        </div>
      </div>
      <div className='star-rate-count'>(2)</div>
      <div className='parent-div'>
        <div style={{ width: `${percentOfTwoStar}%` }} className='child-div'>
          <span className='progress-text'>{`${
            Math.round(percentOfTwoStar * 10) / 10
          }%`}</span>
        </div>
      </div>
      <div className='star-rate-count'>(1)</div>
      <div className='parent-div'>
        <div style={{ width: `${percentOfOneStar}%` }} className='child-div'>
          <span className='progress-text'>{`${
            Math.round(percentOfOneStar * 10) / 10
          }%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
