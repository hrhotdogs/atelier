import React from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import CurrentInfo from '../Context.jsx';

const IndividualQuestion = ({ question }) => {
  return (
    <div>
      Q: {question.question_body}
      <br />
      add answer{/* <AddAnAnswer/> */}
      {/* <IndividualAnswers/> */}
    </div>
  );
};

export default IndividualQuestion;
