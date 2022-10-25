import React, { useState } from 'react';
import { TOKEN } from '../../../../config.js';
import axios from 'axios';
const ReportReview = ({ review }) => {
  const [isReported, setIsReported] = useState(false);

  const handleReported = (review) => {
    setIsReported(true);
    axios
      .put(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review.review_id}/report`,
        review,
        { headers: { Authorization: `${TOKEN}` } }
      )
      .then(() => {
        console.log('My god you are incredible at what you do');
      })
      .catch((error) => {
        console.log('YOU ARE TERRIBLE AT WHAT YOU DO', error);
      });
  };

  if (isReported) {
    return <div>Thank you for your feedback!</div>;
  } else {
    return (
      <div onClick={() => handleReported(review)} className='report'>
        Report
      </div>
    );
  }
};

export default ReportReview;
