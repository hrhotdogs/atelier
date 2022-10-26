import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewList = ({ listOfReviews, listValue, setListValue }) => {
  if (listOfReviews !== undefined) {
    var firstSet = listOfReviews.slice(0, 2);
    var secondSet = listOfReviews.slice(0, 4);
  }

  switch (listValue) {
    case 'set_one':
      return (
        <div data-testid='review-report'>
          {firstSet.map((review, index) => (
            <ReviewTile review={review} key={index} />
          ))}
          <button
            className='review-btn review-add'
            onClick={() => setListValue('set_two')}
          >
            load more...
          </button>
        </div>
      );
      break;
    case 'set_two':
      return (
        <div>
          {secondSet.map((review, index) => (
            <ReviewTile review={review} key={index} />
          ))}
          <button
            className='review-btn review-add'
            onClick={() => setListValue('all')}
          >
            load more...
          </button>
        </div>
      );
      break;
    case 'all':
      return (
        <div>
          {listOfReviews.map((review, index) => (
            <ReviewTile review={review} key={index} />
          ))}
          <button
            className='review-btn review-add'
            onClick={() => setListValue('set_one')}
          >
            show less
          </button>
        </div>
      );
      break;
    default:
      break;
  }
};
export default ReviewList;
