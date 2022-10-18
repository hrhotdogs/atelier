import React from 'react';
import axios from 'axios';

const IndividualAnswers = ({ answer }) => {
  function onClickHandler() {
    console.log('clicked')
  }
  console.log(format(new Date(), 'mm/dd/yyyy'))
  return (
    <div>
      A: {answer.body}
      <br/>
      by {answer.answerer_name}, DATE | Helpful? <span onClick={(e) => onClickHandler()}>Yes</span>
    </div>
  );
};

export default IndividualAnswers;