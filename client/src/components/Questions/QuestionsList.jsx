import React from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import CurrentInfo from '../Context.jsx';
import IndividualQuestion from './IndividualQuestion.jsx';

const QuestionsList = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => (
        <IndividualQuestion question={question} key={question.question_id}/>
      ))}
    </div>
  );
};

export default QuestionsList;
