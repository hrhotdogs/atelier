import React, { useState, useReducer } from 'react';
import verifiedLogo from '../../../../images/Ratings&Reviews/checkmark.png';
import axios from 'axios';
import recommendLogo from '../../../../images/Ratings&Reviews/recommended.png';
import { format, parseISO } from 'date-fns';

const helpfulReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
      break;
    case 'DECREASE':
      return state - 1;
      break;
    default:
      return state;
  }
};

const ReviewTile = ({ review }) => {
  const [showResponse, setShowResponse] = useState(false);
  const [helpfulness, dispatch] = useReducer(
    helpfulReducer,
    review.helpfulness
  );

  const handleHelpfulIncrease = () => {
    dispatch({ type: 'INCREASE' });
  };

  const handleShowResponse = () => {
    setShowResponse(!showResponse);
  };

  return (
    <div className='review'>
      <div>Star Rating: {review.rating}</div>
      <div>
        <em>{review.reviewer_name}</em>
        {review.reviewer_email !== undefined ? <i>verifiedLogo</i> : null}
      </div>

      <div>{format(parseISO(review.date), 'MMM dd/yyyy')}</div>

      <h3>
        <b>{review.summary}</b>
      </h3>

      <div>
        {!showResponse ? (
          <p>{review.body}</p>
        ) : (
          <>
            <p>{review.body}</p>
            <p>{review.response}</p>
          </>
        )}
      </div>

      <div>
        {review.photos.map((photo, index) => {
          return (
            <a key={index} href={photo.url}>
              <img className='review-thumbnail' src={photo.url} />
            </a>
          );
        })}
      </div>

      <div>
        {review.response !== null ? (
          <a onClick={handleShowResponse} className='seller-response'>
            {!showResponse ? 'See response from seller' : 'Hide response'}
          </a>
        ) : null}
      </div>

      {review.recommend ? (
        <div>
          Reviewer recommends this product!
          <img src={`${recommendLogo.slice(22)}`} />{' '}
        </div>
      ) : null}

      <div className='helpfulness'>
        Was this review <em>helpful</em>?{' '}
        <a onClick={handleHelpfulIncrease}>Y</a> ({helpfulness}) <a>N</a>
      </div>
    </div>
  );
};
export default ReviewTile;
