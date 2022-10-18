import React, { useState } from 'react';
import verifiedLogo from '../../../../images/checkmark.png';
import { format, parseISO } from 'date-fns';

const ReviewTile = ({ review }) => {
  const [showResponse, setShowResponse] = useState(false);

  const handleClick = () => {
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

      {!showResponse ? (
        <p>{review.body}</p>
      ) : (
        <>
          <p>{review.body}</p>
          <p>{review.response}</p>
        </>
      )}

      {review.response !== null ? (
        <a onClick={handleClick} className='seller-response'>
          {!showResponse ? 'See response from seller' : 'Hide response'}
        </a>
      ) : null}
    </div>
  );
};
export default ReviewTile;
