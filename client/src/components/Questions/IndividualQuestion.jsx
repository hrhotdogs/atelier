import React from 'react';
import axios from 'axios';
import IndividualAnswers from './IndividualAnswers.jsx';

const IndividualQuestion = ({ question }) => {
  let answersArray = Object.values(question.answers)
  function onClickHandler() {
    console.log('clicked')
  }
  return (
    <div>
      Q: {question.question_body}
      <span>Helpful |</span>
      <span onClick={() => onClickHandler()}> Yes({question.question_helpfulness}) |</span>
      <span> add answer{/* <AddAnAnswer/> */}</span>
      {answersArray.slice(0, 2).map((answer) => {
        return <IndividualAnswers answer={answer} key={answer.id}/>
      })}

    </div>
  );
};

export default IndividualQuestion;
