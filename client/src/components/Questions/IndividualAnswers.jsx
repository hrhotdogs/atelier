import React from 'react';
import axios from 'axios';

const IndividualAnswers = ({ answer }) => {
  return (
    <div>
      A: {answer.body}
      <br />
    </div>
  );
};

export default IndividualAnswers;