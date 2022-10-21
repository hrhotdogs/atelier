import React from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { TOKEN } from '../../../../config.js';

const IndividualAnswers = ({ answer }) => {
  function onClickHandler(e) {
    e.preventDefault()
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer.id}/helpful`, null,
    {
      headers: {
        'Authorization': `${TOKEN}`,
      }
    })
    .catch((err) => console.log('ERROR in PUT request for Answers', err))
  }
  const answerDate = format(new Date(answer.date), 'MMMM dd,yyyy')
  return (
    <div>
      A: {answer.body}
      <br/>
      {answer.photos.map((photo, index) => {
        return <img className="answerImage" src={photo} key={index}/>
      })}
      <br/>
      by {answer.answerer_name}, {answerDate} | Helpful? <span onClick={(e) => onClickHandler(e)}>Yes({answer.helpfulness})</span>
    </div>
  );
};

export default IndividualAnswers;