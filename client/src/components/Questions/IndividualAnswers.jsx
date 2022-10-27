import React from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { TOKEN } from '../../../../config.js';

const { useState } = React;

const IndividualAnswers = ({ answer }) => {
  const answerDate = format(new Date(answer.date), 'MMMM dd, yyyy')
  const [showThanks, setShowThanks] = useState(false)
  const [reported, setReported] = useState(false)


  function onClickHandler(e) {
    e.preventDefault()
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer.id}/helpful`, null,
    {
      headers: {
        'Authorization': `${TOKEN}`,
      }
    })
    .catch((err) => console.log('ERROR in PUT request for Answers', err))
    setShowThanks(true)
  }

  function reportAnswer(e) {
    e.preventDefault()
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer.id}/report`, null,
    {
      headers: {
        'Authorization': `${TOKEN}`,
      }
    })
    .catch((err) => console.log('ERROR in PUT request for Answers', err))
    setReported(true)
  }

  return (
    <div className='answer-container'>
      <span style={{fontWeight: 'bold'}}> A: </span><span className='answer-body'>{answer.body}</span><br/>
        {answer.photos.map((photo, index) => {
          return <img className="answerImage" src={photo} key={index}/>
        })}
        <br/>
        <div className='answerInfo'>
          <span style={{marginLeft: '20px'}} >by {answer.answerer_name}, {answerDate} | Helpful? | </span>
          {showThanks ? <span>Thank You!</span> : <span className='yes-btn' onClick={(e) => onClickHandler(e)}>Yes({answer.helpfulness})</span>}
          <span> | </span>
          {reported ? <span>Reported</span> : <span className='yes-btn' onClick={(e) => reportAnswer(e)}>Report</span>}
        </div>
    </div>
  );
};

export default IndividualAnswers;