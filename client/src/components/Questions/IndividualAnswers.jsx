import React from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const IndividualAnswers = ({ answer }) => {
  function onClickHandler() {
    console.log('clicked')
  }
  const answerDate = format(new Date(answer.date), 'MMMM dd,yyyy')
  return (
    <div>
      A: {answer.body}
      <br/>
      {answer.photos.map((photo) => {
        return <img className="answerImage" src={photo} key={answer.id}/>
      })}
      <br/>
      by {answer.answerer_name}, {answerDate} | Helpful? <span onClick={(e) => onClickHandler()}>Yes</span>
    </div>
  );
};

export default IndividualAnswers;