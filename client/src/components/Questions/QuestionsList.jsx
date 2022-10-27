import React from 'react';
import axios from 'axios';
import IndividualQuestion from './IndividualQuestion.jsx';

const { useState } = React;

const QuestionsList = ({ questions }) => {
  const [shownQuestions, setShownQuestions] = useState(2)
  const numOfQuestions = questions.length;
  const showButton = numOfQuestions > 2 && shownQuestions < numOfQuestions;
  function onClickHandler() {
    setShownQuestions((prev) => prev + 2)
  }
  questions.sort((a, b) => b.question_helpfulness - a.question_helpfulness)
  return (
    <div className='questionsList' data-testid="QuestionsList-questions">
      {questions.slice(0,shownQuestions).map((question) => (
        <IndividualQuestion className='question-container' question={question} key={question.question_id}/>
      ))}
      { showButton ? <button className='btn' onClick={() => onClickHandler()}>More Questions</button> : null }
    </div>
  );
};

export default QuestionsList;
