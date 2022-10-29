import React, { useState, useReducer } from 'react';
import verifiedLogo from '../../../../images/Ratings&Reviews/checkmark.png';
import axios from 'axios';
import recommendLogo from '../../../../images/Ratings&Reviews/recommended.png';
import StarRatingPerReview from './StarRatingPerReview.jsx';
import Helpfulness from './Helpfulness.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';
import SellerResponse from './SellerResponse.jsx';
import ReportReview from './ReportReview.jsx';
import { format, parseISO } from 'date-fns';

const ReviewTile = ({ review, listOfReviews }) => {
  return (
    <div className='review'>
      <div className='review-info'>
        {format(parseISO(review.date), 'MMMM dd, yyyy')}
      </div>
      <div className='review-info'>
        by <em>{review.reviewer_name}</em>,
        {review.reviewer_email !== undefined ? <i>verifiedLogo</i> : null}
      </div>
      <div>
        <StarRatingPerReview review={review} listOfReviews={listOfReviews} />
      </div>
      <h3 className='review-summary'>
        <b>{review.summary}</b>
      </h3>
      <SellerResponse review={review} />
      <div>
        {review.photos.map((photo, index) => (
          <ReviewPhotos key={index} photo={photo} />
        ))}
      </div>
      {review.recommend ? (
        <div className='review-recommend'>
          Product recommended!
          <img alt='thumbs up icon' src={`${recommendLogo.slice(22)}`} />{' '}
        </div>
      ) : null}
      <div>
        <ReportReview review={review} />
      </div>
      <div>
        <Helpfulness review={review} />
      </div>
    </div>
  );
};
export default ReviewTile;
