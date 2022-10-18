import React from 'react';
import axios from 'axios';
import IndividualAnswers from './IndividualAnswers.jsx';

const IndividualQuestion = ({ question }) => {
  let answersArray = Object.values(question.answers)
  return (
    <div>
      Q: {question.question_body}

      {answersArray.slice(0, 2).map((answer) => {
        console.log(answer)
        return <IndividualAnswers answer={answer}/>
      })}
      add answer{/* <AddAnAnswer/> */}
    </div>
  );
};

export default IndividualQuestion;
