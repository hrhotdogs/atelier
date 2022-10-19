import React, { useReducer } from 'react';

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

  return (
    <div className='helpfulness'>
      Was this review <em>helpful</em>?{' '}
      <a onClick={() => dispatch({ type: 'YES' })}>Y({helpfulness.countYes})</a>{' '}
      <a onClick={() => dispatch({ type: 'NO' })}>N({helpfulness.countNo})</a>
    </div>
  );
};
export default Helpfulness;
