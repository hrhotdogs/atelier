import React from 'react';
import verifiedLogo from '../../../../images/checkmark.png';
import { format, parseISO } from 'date-fns';

const ReviewTile = ({ review }) => {
  return (
    <div className="review">
      <div>Star Rating: {review.rating}</div>

      <div>
        <em>{review.reviewer_name}</em>
        {review.reviewer_email !== undefined ? <i>verifiedLogo</i> : null}
      </div>

      <div>{format(parseISO(review.date), 'MMM dd/yyyy')}</div>

      <h3>
        <b>{review.summary}</b>
      </h3>

      <p>{review.body}</p>
    </div>
  );
};
export default ReviewTile;
