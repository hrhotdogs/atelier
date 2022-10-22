import React from 'react';
const ProgressBar = ({ metaData }) => {
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
    <>
      <div className='parent-div'>
        <div style={{ width: `${percentOfFiveStar}%` }} className='child-div'>
          <span className='progress-text'></span>
        </div>
      </div>
      &nbsp;
      <div className='parent-div'>
        <div style={{ width: `${percentOfFourStar}%` }} className='child-div'>
          <span className='progress-text'></span>
        </div>
      </div>
      &nbsp;
      <div className='parent-div'>
        <div style={{ width: `${percentOfThreeStar}%` }} className='child-div'>
          <span className='progress-text'></span>
        </div>
      </div>
      &nbsp;
      <div className='parent-div'>
        <div style={{ width: `${percentOfTwoStar}%` }} className='child-div'>
          <span className='progress-text'></span>
        </div>
      </div>
      &nbsp;
      <div className='parent-div'>
        <div style={{ width: `${percentOfFiveStar}%` }} className='child-div'>
          <span className='progress-text'></span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
