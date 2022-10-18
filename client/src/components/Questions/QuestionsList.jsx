import React from 'react';
import axios from 'axios';
import IndividualQuestion from './IndividualQuestion.jsx';

const QuestionsList = ({ questions }) => {
  return (
    <div>
      {questions.slice(0,2).map((question) => (
        <IndividualQuestion question={question} key={question.question_id}/>
      ))}
    </div>
  );
};

export default QuestionsList;
