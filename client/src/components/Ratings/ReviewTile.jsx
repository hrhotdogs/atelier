import React, { useState, useReducer } from 'react';
import verifiedLogo from '../../../../images/Ratings&Reviews/checkmark.png';
import axios from 'axios';
import recommendLogo from '../../../../images/Ratings&Reviews/recommended.png';
import StarRating from './StarRating.jsx';
import Helpfulness from './Helpfulness.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';
import SellerResponse from './SellerResponse.jsx';
import { format, parseISO } from 'date-fns';

const ReviewTile = ({ review }) => {
  return (
    <div className='review'>
      <div>
        <StarRating review={review} />
      </div>

      <div>
        <em>{review.reviewer_name}</em>
        {review.reviewer_email !== undefined ? <i>verifiedLogo</i> : null}
      </div>

      <div>{format(parseISO(review.date), 'MMM dd/yyyy')}</div>

      <h3>
        <b>{review.summary}</b>
      </h3>

      <div>
        {review.photos.map((photo, index) => (
          <ReviewPhotos key={index} photo={photo} />
        ))}
      </div>

      <SellerResponse review={review} />

      {review.recommend ? (
        <div>
          Reviewer recommends this product!
          <img src={`${recommendLogo.slice(22)}`} />{' '}
        </div>
      ) : null}

      <Helpfulness review={review} />
    </div>
  );
};
export default ReviewTile;
