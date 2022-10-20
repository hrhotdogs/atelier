import React, { useReducer, useState } from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
const counterState = {
  countYes: 0,
  countNo: 0,
};

const helpfulReducer = (state, action) => {
  switch (action.type) {
    case 'YES':
      return { ...state, countYes: state.countYes + 1 };
      break;
    case 'NO':
      return { ...state, countNo: state.countNo + 1 };
      break;
    default:
      return state;
  }
};

const Helpfulness = ({ review }) => {
  const [helpfulness, dispatch] = useReducer(helpfulReducer, {
    ...counterState,
    countYes: review.helpfulness,
    countNo: Math.floor(Math.random() * 15),
  });
  const [isReviewed, setIsReviewed] = useState(false);

  const handleRender = () => {};

  const handleYesClick = (review) => {
    let article = { ...review, countYes: review.countYes + 1 };
    dispatch({ type: 'YES' });
    setIsReviewed(true);
    axios
      .put(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review.review_id}/helpful`,
        article,
        { headers: { Authorization: `${TOKEN}` } }
      )
      .then(() => console.log('You did it! You are a GOD'))
      .catch((error) => console.log(error));
  };

  const handleNoClick = () => {
    dispatch({ type: 'NO' });
    setIsReviewed(true);
  };

  if (isReviewed) {
    return <div>Thank you for your feedback!</div>;
  } else {
    return (
      <div className='helpfulness'>
        Was this review <em>helpful</em>?{' '}
        <a onClick={() => handleYesClick(review)}>Y({helpfulness.countYes})</a>{' '}
        <a onClick={handleNoClick}>N({helpfulness.countNo})</a>
      </div>
    );
  }
};
export default Helpfulness;
